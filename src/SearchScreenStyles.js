import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#9F70FD', // Light gray background
    flex: 1, // Use flex: 1 to make sure the view expands to the whole screen
  },
  input: {
    margin: 15,
    height: 30,
    borderColor: '#000',
    backgroundColor: '#FDBF60',
    borderWidth: 1,
    padding: 10,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 15,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white',
  },
});
