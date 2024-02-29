import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, Image, StyleSheet, Animated,TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../src/SearchScreenStyles';
import { Input, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function SearchScreen() {

  const navigation = useNavigation(); // Now you have access to the navigation object
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const opacity = useState(new Animated.Value(1))[0]; // Initialize Animated.Value for opacity

  useEffect(() => {

    if (searchQuery.trim() === '') {
      // Animate opacity to 0 when input is cleared
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setUsers([])); // Clear users after animation completes
    }
  }, [searchQuery, opacity]);

  const fetchUsers = async () => {
    if (!searchQuery.trim()) {
      return; // Exit early if the query is empty
    }
    try {
      // Reset opacity to 1 for new searches
      opacity.setValue(1);
      const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery} in:fullname&type=Users`);
      setUsers(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
       <Input
        placeholder="Search..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        containerStyle={{  
           width: '99%', // Example using percentage width
           alignSelf: 'center',   
           }}
           inputStyle={{
            color: 'white', // Example: Changing text color to red
            fontWeight: '500',
            paddingLeft: 10,
            fontSize: 17,
          }}
        inputContainerStyle={{
          height: 45,
          borderWidth: 1,
          borderColor: '#999',
          borderRadius: 10,
          paddingHorizontal: 15,
          backgroundColor: '#FDBF60',
          shadowColor: "#000",
          color: 'white',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.15,
          shadowRadius: 1.84,
          elevation: 5,
        }}
        leftIcon={<Icon name="search" type="font-awesome" size={22} color="white" />}
        rightIcon={searchQuery ? (
          <Icon
            name="times"
            type="font-awesome"
            size={24}
            color="white"
            onPress={() => {
              setSearchQuery('');
              setUsers([]); // Clear users list as well
            }}
          />
        ) : null}
        onSubmitEditing={fetchUsers} // This triggers fetchUsers when "Enter" is pressed
        returnKeyType="search" // Changes the return key to say "Search"
      />
     
      <Animated.View style={{ opacity }}>
        <FlatList
          data={users}
          keyExtractor={user => user.id.toString()}
          renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('UserDetail', { userName: item.login })}>
          <View style={styles.userItem}>
            <Image source={{ uri: item.avatar_url }} style={styles.userImage} />
            <Text style={styles.userName}>{item.login}</Text>
          </View>
      </TouchableOpacity>
)}
        />
      </Animated.View>
    </View>
  );
}

 /*<Button title="Search" onPress={fetchUsers} />*/