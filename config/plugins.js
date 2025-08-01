module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env("DO_SPACE_KEY"),
        secret: env("DO_SPACE_SECRET"),
        endpoint: env("DO_SPACE_ENDPOINT"),
        space: env("DO_SPACE_NAME"),
        region: env("DO_SPACE_REGION"),
      },
    },
  },
});
