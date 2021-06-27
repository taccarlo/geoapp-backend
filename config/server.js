module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 5000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "405a8fc20149ed2c97ba948d189be887"),
    },
  },
});
