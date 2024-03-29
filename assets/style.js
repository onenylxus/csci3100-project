// Import
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const loginFormWidth = Math.min(windowWidth, 400);

function hideOutline(screenWidth) {
  if (screenWidth < 800) {
    return null;
  }
  return { outline: 'none' };
}

// Export stylesheet
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },

  hyperlink: {
    color: '#0000ff',
    textDecorationLine: 'underline',
    fontFamily: 'Roboto',
  },

  postBox: {
    width: '75%',
    margin: 4,
    backgroundColor: '#f8f8f8',
  },

  sectionText: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    fontFamily: 'Roboto',
  },

  SectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    minWidth: '75%',
    maxWidth: '75%',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: '1%',
    marginVertical: '4%',
    alignSelf: 'center',
  },

  // Styles of Login Page
  loginFormContainer: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: loginFormWidth,
    alignSelf: 'center',
  },

  loginTitle: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'Roboto',
    alignSelf: 'center',
  },

  validTextInput: {
    borderColor: '#00ff00',
    backgroundColor: '#aaf8aa',
    flexDirection: 'row',
    borderWidth: 1,
    minWidth: '75%',
    maxWidth: '75%',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: '1%',
    marginVertical: '3%',
    alignSelf: 'center',
  },

  invalidTextInput: {
    borderColor: '#ff0000',
    backgroundColor: '#f8aaaa',
    flexDirection: 'row',
    borderWidth: 1,
    minWidth: '75%',
    maxWidth: '75%',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: '1%',
    marginVertical: '3%',
    alignSelf: 'center',
  },

  errorMessage: {
    fontSize: 11,
    color: '#ff0000',
    justifyContent: 'flex-start',
    marginBottom: '4%',
  },

  inputContainer: {
    justifyContent: 'center',
    marginBottom: 16,
    alignItems: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'column',
    maxWidth: '80%',
    minWidth: '80%',
    backgroundColor: '#ffffff',
  },

  // Styles of Verification Page
  codeInputBox: {
    borderWidth: 0.5,
    borderColor: '#000',
    minWidth: '25%',
    height: 40,
    borderRadius: 5,
    margin: '5%',
  },

  codeInputBoxPC: {
    borderWidth: 0.5,
    borderColor: '#000',
    minWidth: 200,
    maxWidth: 200,
    height: 40,
    borderRadius: 5,
    margin: '5%',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  verificationCode: {
    width: '100%',
    fontSize: 22,
    alignContent: 'center',
    marginLeft: '6%',
    marginTop: '6%',
  },

  verificationCodePC: {
    minWidth: '100%',
    maxWidth: '100%',
    fontSize: 22,
    alignSelf: 'center',
    minHeight: '100%',
    maxHeight: '100%',
  },

  // Styles of Create Post Page
  createPostBox: {
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#f8f8f8',
    width: '95%',
    minHeight: windowWidth < 800 ? 100 : '90%',
    textAlign: 'left',
    textAlignVertical: 'top',
    alignSelf: 'center',
    minWidth: '75%',
    maxWidth: '75%',
    marginVertical: 10,
    padding: '1%',
  },

  createPostContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    maxWidth: '100%',
  },

  createPostInner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginLeft: '13%',
  },

  postTitleBox: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    minWidth: '75%',
    maxWidth: '75%',
    minHeight: windowWidth < 800 ? 35 : '25%',
    borderRadius: 5,
    paddingHorizontal: '1%',
    marginVertical: 10,
    alignSelf: 'center',
  },

  postTextInputPC: {
    height: '100%',
  },

  // Styles of Edit Post Page
  editPostContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    maxWidth: windowWidth < 800 ? '96%' : 600,
    minWidth: windowWidth < 800 ? '96%' : 600,
    marginHorizontal: '5%',
  },

  editPostHeading: {
    alignSelf: 'center',
    fontSize: 22,
  },

  editPostSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 5,
  },

  editPostSectionText: {
    alignSelf: 'flex-start',
    width: '20%',
  },

  tagsTitle: {
    alignSelf: 'flex-start',
    width: '20%',
    marginBottom: '1%',
  },

  pickerTitle: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    fontFamily: 'Roboto',
    marginTop: '1%',
    marginBottom: '2%',
  },

  editPostContentBox: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    minWidth: '75%',
    maxWidth: '75%',
    height: 100,
    borderRadius: 5,
    paddingHorizontal: '1%',
    marginVertical: '4%',
    alignSelf: 'center',
  },

  // Styles of Profile Page for PC
  profileContainerPC: {
    width: 600,
    alignSelf: 'center',
    paddingTop: 32,

    justifyContent: 'center',
  },

  profilePicturePC: {
    justifyContent: 'center',
    marginHorizontal: 30,
  },

  editProfileButtonPC: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },

  userInfoPC: {
    fontSize: 20,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    margin: 10,
    maxWidth: '75%',
  },

  bioContainerPC: {
    paddingHorizontal: '4%',
    maxWidth: '85%',
    minWidth: '85%',
    fontSize: 17,
    marginBottom: 2,
  },

  // Styles of Profile Page for Phone
  profileContainerPhone: {
    marginHorizontal: 5,
    alignSelf: 'center',
    paddingTop: 20,
  },

  profilePicturePhone: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },

  editProfileButtonPhone: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  userInfoPhone: {
    fontSize: 16,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    margin: 10,
    maxWidth: '75%',
  },

  infoLayerPhone: {
    minHeight: '50%',
  },

  bioContainerPhone: {
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    maxWidth: '85%',
    minWidth: '85%',
    fontSize: 17,
  },

  // Styles of Edit Profile Page
  editProfileHeading: {
    fontSize: 28,
    alignSelf: 'center',
    marginVertical: 20,
    fontFamily: 'Roboto',
  },

  editBio: {
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#f8f8f8',
    height: 100,
    margin: 16,
    textAlign: 'left',
    textAlignVertical: 'top',
    alignSelf: 'center',
  },

  combineStyle: {
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#f8f8f8',
    height: 100,
    margin: 16,
    textAlign: 'left',
    textAlignVertical: 'top',
    alignSelf: 'center',
    padding: '2%',
    ...hideOutline(windowWidth),
    maxWidth: '100%',
    minWidth: '100%',
  },

  // Styles of Post
  profilePost: {
    width: windowWidth < 800 ? '95%' : 600,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  trashIcon: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    margin: 10,
  },

  postTitle: {
    marginHorizontal: 15,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  postBar: {
    flexDirection: 'row',
    margin: 5,
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },

  Comment: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 4,
  },

  commentBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: '#000000',
    width: '85%',
    height: 40,
    borderRadius: 15,
    margin: '4%',
    alignSelf: 'center',
  },

  individualPost: {
    backgroundColor: '#ffffff',
  },

  // Styles for LeaderboardScreen
  leaderboardBackground: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: '#ffffff',
    paddingVertical: '3%',
  },

  LeaderboardLeft: {
    borderWidth: 1,
    borderRightWidth: 0.5,
    borderColor: '#dedede',
    backgroundColor: 'white',
  },

  LeaderboardRight: {
    borderWidth: 1,
    borderLeftWidth: 0.5,
    borderColor: '#dedede',
    backgroundColor: 'white',
  },

  LeaderboardContainer: {
    width: windowWidth < 800 ? '85%' : 600,
    margin: 4,
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    alignSelf: 'center',
  },

  rankText: {
    alignSelf: 'flex-start',
    fontFamily: 'Roboto',
    marginVertical: 5,
    marginLeft: 13,
    fontSize: 15,
  },

  LeaderboardContainerPhone: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  messageBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: '#000000',
    width: '95%',
    borderRadius: 20,
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

  // Styles of Users' Icons
  userIcon: {
    width: 32,
    height: 32,
    marginHorizontal: 8,
    marginTop: 4,
    borderRadius: 28,
  },

  bigUserIcon: {
    width: 64,
    height: 64,
    margin: 8,
    borderRadius: 32,
  },

  followScreenIcon: {
    width: 32,
    height: 32,
    marginHorizontal: 8,
    borderRadius: 28,
    alignSelf: 'center',
  },
});
