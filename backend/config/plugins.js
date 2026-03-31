module.exports = ({ env }) => {
  const cloudinaryConfigured =
    env("CLOUDINARY_NAME") &&
    env("CLOUDINARY_KEY") &&
    env("CLOUDINARY_SECRET");

  return {
    // Only enable Cloudinary if ENV vars are set, otherwise use local uploads
    ...(cloudinaryConfigured && {
      upload: {
        config: {
          provider: "@strapi/provider-upload-cloudinary",
          providerOptions: {
            cloud_name: env("CLOUDINARY_NAME"),
            api_key: env("CLOUDINARY_KEY"),
            api_secret: env("CLOUDINARY_SECRET"),
          },
          actionOptions: {
            upload: {
              folder: "cistacruz",
            },
            uploadStream: {
              folder: "cistacruz",
            },
            delete: {},
          },
        },
      },
    }),
  };
};
