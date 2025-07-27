module.exports = ({ env }) => ({
  auth: {
    secret: env("nwDFKEjiL6ooXJbY1kaXVQ=="),
  },
  apiToken: {
    salt: env("+mecxmHVH0QcqqO/iYrdSg=="),
  },
  transfer: {
    token: {
      salt: env("ScwNX/CeDbtjw+7r4ydypA=="),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
