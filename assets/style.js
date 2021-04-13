// Import
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const loginFormWidth = Math.min(windowWidth, 400);

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
    marginVertical: '5%',
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

  verificationCode: {
    width: '100%',
    fontSize: 22,
    alignContent: 'center',
    marginLeft: '6%',
    marginTop: '6%',
  },

  // Styles of Create Post Page
  createPostBox: {
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#f8f8f8',
    width: '85%',
    height: 100,
    textAlign: 'left',
    textAlignVertical: 'top',
    alignSelf: 'center',
    borderRadius: 10,
    minWidth: '75%',
    maxWidth: '75%',
    paddingHorizontal: '2%',
    marginVertical: '5%',
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
    marginLeft: '9%',
  },

  // Styles of Edit Post Page
  editPostContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '96%',
    marginHorizontal: '5%',
  },

  editPostHeading: {
    alignSelf: 'center',
    fontSize: 22,
  },

  editPostSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  editPostSectionText: {
    alignSelf: 'center',
    width: '20%',
  },

  // Styles of Profile Page for PC
  profileContainerPC: {
    width: 1000,
    alignSelf: 'center',
    paddingTop: 32,
  },

  profilePicturePC: {
    justifyContent: 'flex-start',
    marginHorizontal: 30,
  },

  editProfileButtonPC: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 30,
  },

  userInfoPC: {
    fontSize: 24,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    margin: 10,
  },

  infoLayerPC: {
    height: 170,
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  userInfoPhone: {
    fontSize: 16,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    margin: 10,
  },

  infoLayerPhone: {
    minHeight: '50%',
  },

  // Styles of Edit Profile Page
  editProfileHeading: {
    fontSize: 28,
    alignSelf: 'center',
    marginVertical: 20,
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

  // Styles of Post
  profilePost: {
    width: '95%',
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

  commentBox: {
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
    width: 300,
    height: 40,
    borderRadius: 15,
    margin: 10,
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
    paddingTop: '8%',
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

  LeaderboardBox: {
    width: '85%',
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

  chatBox: {
    flexDirection: 'row',
    height: 100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },

  LeaderboardContainerPhone: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  chatMenuIcon: {
    width: 64,
    height: 64,
    margin: 8,
    borderRadius: 28,
    alignSelf: 'center',
  },

  chatMenuInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 5,
  },

  chatDate: {
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#d2d2d2',
    borderRadius: 15,
    marginVertical: 5,
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

  SearchBarStyle: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: '#000000',
    width: '95%',
    height: 40,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },

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
});
