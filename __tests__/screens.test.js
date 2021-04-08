// Import
import fs from 'fs';

// Run jest tests
describe('Screens', () => {
  // Navigators
  describe('contains navigators', () => {
    const dir = fs.readdirSync('screens/navigators');

    it('ChatroomStack.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['ChatroomStack.js']));
    });
    it('CreatePostStack.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['CreatePostStack.js']));
    });
    it('FeedDrawer.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['FeedDrawer.js']));
    });
    it('FeedStack.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['FeedStack.js']));
    });
    it('ForgotPasswordStack.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['ForgotPasswordStack.js']));
    });
    it('GuestFeedStack.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['GuestFeedStack.js']));
    });
    it('ProfileStack.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['ProfileStack.js']));
    });
    it('RegisterStack.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['RegisterStack.js']));
    });
    it('no other files', () => {
      expect(dir.length).toEqual(8);
    });
  });

  // JS files
  describe('contains JS files', () => {
    const dir = fs.readdirSync('screens').filter((file) => file.endsWith('.js'));

    it('AddInfoScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['AddInfoScreen.js']));
    });
    it('ChatboxPhoneScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['ChatboxPhoneScreen.js']));
    });
    it('ChatroomScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['ChatroomScreen.js']));
    });
    it('CreatePostScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['CreatePostScreen.js']));
    });
    it('EditProfileScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['EditProfileScreen.js']));
    });
    it('FeedScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['FeedScreen.js']));
    });
    it('ForgotPasswordScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['ForgotPasswordScreen.js']));
    });
    it('GuestFeedScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['GuestFeedScreen.js']));
    });
    it('LoginScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['LoginScreen.js']));
    });
    it('ProfileScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['ProfileScreen.js']));
    });
    it('RegisterScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['RegisterScreen.js']));
    });
    it('ResetPasswordScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['ResetPasswordScreen.js']));
    });
    it('SettingsScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['SettingsScreen.js']));
    });
    it('VerificationScreen.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['VerificationScreen.js']));
    });
    it('no other files', () => {
      expect(dir.length).toEqual(14);
    });
  });
});