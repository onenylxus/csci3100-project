// Import
import fs from 'fs';

// Run jest tests
describe('Components', () => {
  // JS files
  describe('contains JS files', () => {
    const dir = fs.readdirSync('components').filter((file) => file.endsWith('.js'));

    it('AddInfoForm.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['AddInfoForm.js']));
    });
    it('AuthContext.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['AuthContext.js']));
    });
    it('Chat.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['Chat.js']));
    });
    it('ChatroomMenu.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['ChatroomMenu.js']));
    });
    it('CollegePicker.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['CollegePicker.js']));
    });
    it('CommentBox.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['CommentBox.js']));
    });
    it('CommentContainer.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['CommentContainer.js']));
    });
    it('CreateCommentForm.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['CreateCommentForm.js']));
    });
    it('CreatePostForm.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['CreatePostForm.js']));
    });
    it('EditProfileForm.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['EditProfileForm.js']));
    });
    it('ForgotPasswordForm.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['ForgotPasswordForm.js']));
    });
    it('Header.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['Header.js']));
    });
    it('LikeAndDislike.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['LikeAndDislike.js']));
    });
    it('LoginForm.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['LoginForm.js']));
    });
    it('MajorPicker.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['MajorPicker.js']));
    });
    it('MessageBar.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['MessageBar.js']));
    });
    it('PostBox.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['PostBox.js']));
    });
    it('RegisterForm.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['RegisterForm.js']));
    });
    it('ResetPasswordForm.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['ResetPasswordForm.js']));
    });
    it('SearchBar.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['SearchBar.js']));
    });
    it('VerificationForm.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['VerificationForm.js']));
    });
    it('no other files', () => {
      expect(dir.length).toEqual(21);
    });
  })
});