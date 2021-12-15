module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e55bf4bc862f4b0fdd810046c61ada5d'),
  },
});
