// Import
import { StyleSheet } from 'react-native';

// Export stylesheet
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hyperlink: {
    color: '#0000ff',
    textDecorationLine: 'underline',
  },

  loginTitle: {
    fontSize: 20,
    marginBottom: 20,
  },

  postBox: {
    width: '75%',
    margin: 4,
    backgroundColor: '#f8f8f8',
  },

  sectionText: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },

  textInput: {
    borderColor: '#444444',
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  validTextInput: {
    borderColor: '#00ff00',
    backgroundColor: '#aaf8aa',
  },

  invalidTextInput: {
    borderColor: '#ff0000',
    backgroundColor: '#f8aaaa',
  },

  errorMessage: {
    maxWidth: '80%',
    fontSize: 11,
    color: '#ff0000',
    alignContent: 'flex-start',
  },

  inputContainer: {
    justifyContent: 'center',
    marginBottom: 16,
    alignItems: 'center',
  },

  createPostBox: {
    width: '95%',
    height: 100,
  },

});
