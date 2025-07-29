// module.exports = ({ env }) => ({
//   connection: {
//     client: "mysql2",
//     connection: {
//       host: env("DATABASE_HOST"),
//       port: env.int("DATABASE_PORT"),
//       database: env("DATABASE_NAME"),
//       user: env("DATABASE_USERNAME"),
//       password: env("DATABASE_PASSWORD"),
//       ssl: {
//         rejectUnauthorized: true, // for self-signed, use false
//       },
//     },
//   },
// });

const fs = require("fs");
const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql2",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: {
        ca: fs
          .readFileSync(path.join(__dirname, "./ca-certificate.crt"))
          .toString(),
      },
    },
  },
});
