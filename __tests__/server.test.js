// Import
import fs from 'fs';

// Run jest tests
describe('Server', () => {
  // Controllers
  describe('contains controllers', () => {
    const dir = fs.readdirSync('server/controllers');

    it('abort.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['abort.js']));
    });
    it('addInfo.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['addInfo.js']));
    });
    it('createComment.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['createComment.js']));
    });
    it('createPost.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['createPost.js']));
    });
    it('deletePost.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['deletePost.js']));
    });
    it('editProfile.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['editProfile.js']));
    });
    it('fetchComment.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['fetchComment.js']));
    });
    it('fetchData.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['fetchData.js']));
    });
    it('fetchLikeAndDislike.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['fetchLikeAndDislike.js']));
    });
    it('fetchPost.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['fetchPost.js']));
    });
    it('forgotPassword.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['forgotPassword.js']));
    });
    it('like.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['like.js']));
    });
    it('login.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['login.js']));
    });
    it('register.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['register.js']));
    });
    it('resend.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['resend.js']));
    });
    it('resetPassword.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['resetPassword.js']));
    });
    it('verify.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['verify.js']));
    });
    it('no other files', () => {
      expect(dir.length).toEqual(17);
    });
  });

  // Schemas
  describe('contains schemas', () => {
    const dir = fs.readdirSync('server/schemas');

    it('Chatroom.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['Chatroom.js']));
    });
    it('Client.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['Client.js']));
    });
    it('Comment.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['Comment.js']));
    });
    it('Message.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['Message.js']));
    });
    it('Post.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['Post.js']));
    });
    it('Token.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['Token.js']));
    });
    it('no other files', () => {
      expect(dir.length).toEqual(6);
    });
  });

  // JS files
  describe('contains JS files', () => {
    const dir = fs.readdirSync('server').filter((file) => file.endsWith('.js'));

    it('cipher.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['cipher.js']));
    });
    it('main.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['main.js']));
    });
    it('sender.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['sender.js']));
    });
    it('transporter.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['transporter.js']));
    });
    it('no other files', () => {
      expect(dir.length).toEqual(4);
    });
  });
});