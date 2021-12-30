module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e97eb43fe0ebb027ecac8282f3825b0a'),
  },
});
