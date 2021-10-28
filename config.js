const env = process.env;

const config = {
  db: {
    host: env.DB_HOST || "den1.mysql2.gear.host",
    user: env.DB_USER || "formdata",
    password: env.DB_PASSWORD || "Dh35?z?1NDKV",
    database: env.DB_NAME || "formdata",
  },
};

module.exports = config;
