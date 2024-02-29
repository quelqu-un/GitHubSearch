import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#9F70FD',
        
      },
      avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
      },
      name: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      description: {
        marginVertical: 10,
        textAlign: 'center',
        color: 'white',
      },
      infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
        
      },
      infoItem: {
        alignItems: 'center',
        marginBottom: 15,
      },
      infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
      infoValue: {
        fontSize: 14,
        color: 'white',
      },
     
          // Your existing styles...
          repoList: {
           // Align the list to the left
            width: '100%', // Ensure the list takes the full width
            paddingHorizontal: 5, // Add some padding on the sides
            paddingTop: 10,
            paddingLeft: 10,
            backgroundColor: '#FDBF60',
            color: 'white',
          },
          repoItem: {
            borderBottomWidth: 1, // Optional: add a separator line between items
            borderBottomColor: '#ccc', // Color for the separator line
            paddingBottom: 10, // Space below each item
            marginBottom: 10, // Space between items
            width: '100%',
          },
          repoName: {
            fontSize: 18, // Larger font size
            fontWeight: 'bold', // Bold font weight
            color: '#000', // Color of the text, adjust as needed
            paddingBottom: 10,
          },
          repoCont: {
            fontSize: 14, // Larger font size
            fontWeight: 'bold', // Bold font weight
            color: 'white', // Color of the text, adjust as needed
            paddingTop: 10,
          },
          infoRow: {
            flexDirection: 'row', // Layout the child components in a row
            justifyContent: 'space-between', // Space out the child components
            margin: 5, // Space above the row
            color: 'white',
          },
          infoText: {
            fontSize: 14, // Font size for the info text
            color: '#666', // Color of the info text, adjust as needed
            marginRight: 5,
          },
          lastUpdated: {
            fontSize: 12, // Smaller font size for the date
            color: '#666', // Color of the date text, adjust as needed
            marginTop: 5, // Space above the date text
            paddingTop: 5,
          },
          starsContainer: {
            flexDirection: 'row', // Layout icon and text in a row
            alignItems: 'center', // Center items vertically
          
          },


})