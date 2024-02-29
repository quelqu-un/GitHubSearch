import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { Icon } from 'react-native-elements';
import styles from '../src/UserDetailScreenStyles';


const UserDetailScreen = ({ route }) => {
  const { userName } = route.params;

  
  const [userDetails, setUserDetails] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`https://api.github.com/users/${userName}`, {
          headers: { Authorization: `token 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` }
        });
        setUserDetails(userResponse.data);
    
        const reposResponse = await axios.get(`https://api.github.com/users/${userName}/repos`, {
          headers: { Authorization: `token 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` }
        });
        //setRepositories(reposResponse.data);

        const repos = reposResponse.data;

        const reposWithContributors = await Promise.all(repos.map(async (repo) => {
          try {
            const contributorsResponse = await axios.get(`${repo.contributors_url}?per_page=5`, { // Fetching top 5 contributors
              headers: { Authorization: `token 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` }
            });
            repo.contributors = contributorsResponse.data;
            return repo;
          } catch (error) {
            console.error('Error fetching contributors:', error);
            return repo; // Return repo even if contributors couldn't be fetched
          }
        }));  
        setRepositories(reposWithContributors);

      } catch (error) {
        console.error(error);
      }
    };
    
    fetchUserData();
  }, [userName]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: userDetails.avatar_url }} style={styles.avatar} />
      <Text style={styles.name}>{userDetails.name}</Text>
      <Text style={styles.description}>{userDetails.bio}</Text>
        {/* Additional User Information */}
        <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Followers</Text>
          <Text style={styles.infoValue}>{userDetails.followers}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Repos</Text>
          <Text style={styles.infoValue}>{userDetails.public_repos}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Following</Text>
          <Text style={styles.infoValue}>{userDetails.following}</Text>
        </View>
      </View>

      <FlatList
        data={repositories}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.repoList} // Add padding here
        renderItem={({ item: repo }) => (
            <View style={styles.repoItem}>
            <Text style={styles.repoName}>{repo.name}</Text>
            <View style={styles.infoRow}>
                <Text style={styles.infoText}>{repo.language || 'N/A'}</Text>

              {/* Star Icon next to the stars count */}
        <View style={styles.starsContainer}>
         <Text style={styles.infoText}>{repo.stargazers_count}</Text>
          <Icon
            name="star"
            type="font-awesome"
            color="#FFD700" // Gold color for the star icon, adjust as needed
            size={20} // Adjust the size as needed
          />
          
        </View>      
              <Text style={styles.infoText}>{repo.license?.name || 'No License'}</Text>
        </View> 
              <Text style={styles.lastUpdated}>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</Text>
             <View  >
                {repo.contributors && repo.contributors.map((contributor, index) => (
                  <Text style={styles.repoCont} key={index}>
                    {contributor.login} - {contributor.contributions} contributions
                  </Text>
                ))}
    </View>
    </View>
     /* Additional repository details */
  )}
/>
    </View>
  );
};

   
  
  export default UserDetailScreen;