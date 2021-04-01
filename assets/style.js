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

  SectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    width: 225,
    height: 40,
    borderRadius: 5,
    margin: 10,
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
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#f8f8f8',
    width: '95%',
    height: 100,
    margin: 16,
    textAlign: 'left',
    textAlignVertical: 'top',
  },

  profileContainerPC: {
    width: 1000,
    alignSelf: 'center',
    paddingTop: 32,
  },

  profileContainerPhone: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 32,
  },

  profilePicturePhone: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },

  profilePicturePC: {
    justifyContent: 'flex-start',
    marginHorizontal: 30,
  },

  editProfileButtonPhone: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  editProfileButtonPC: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 30,
  },

  userInfoPhone: {
    fontSize: 16,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    margin: 10,
  },

  userInfoPC: {
    fontSize: 24,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    margin: 10,
  },

  infoLayerPhone: {
    height: 120,
  },

  infoLayerPC: {
    height: 170,
  },

  profilePost: {
    paddingHorizontal: 10,
    marginVertical: 20,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },

  postBar: {
    flexDirection: 'row',
    margin: 5,
    borderTopWidth: 1,
    borderColor: '#F0F0F0',
  },

  commentBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: 'white',
    flexDirection: 'column',
  },

  commentBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    width: 300,
    height: 40,
    borderRadius: 15,
    margin: 10,
    alignSelf: 'center',
  },

  individualPost: {
    backgroundColor: '#ffffff',
  },

  chatRoomLeft: {
    borderWidth: 1,
    borderRightWidth: 0.5,
    borderColor: '#DEDEDE',
    backgroundColor: 'white',
  },

  chatRoomRight: {
    borderWidth: 1,
    borderLeftWidth: 0.5,
    borderColor: '#DEDEDE',
    backgroundColor: 'white',
  },

  chatBox: {
    height: 100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
  },

  chatRoomContainerPhone: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 5,
    backgroundColor: 'white',
  },

  messageBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    width: 610,
    height: 40,
    borderRadius: 5,
    margin: 10,
    alignSelf: 'center',
  },

  sendMessageButtom: {
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 5,
  },

  submitAndCancelButton: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center',
  },
});
