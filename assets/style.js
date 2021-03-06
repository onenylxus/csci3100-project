// Import
import { StyleSheet } from 'react-native';

// Export stylesheet
export default StyleSheet.create({
  container: {
    flex: 1,
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
    minWidth: '75%',
    margin: 4,
    backgroundColor: '#f8f8f8',
  },

  textInput: {
    minWidth: '75%',
    margin: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#444444',
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
