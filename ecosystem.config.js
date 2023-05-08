const { config } = require("dotenv");

const { parsed } = config({ path: ".env" });

module.exports = {
  apps: [
    {
      name: "botsuro-management",
      cwd: "/home/duke_ferdinand/apps/botsuro-management",
      script: "npm",
      args: "start",
      env: {
        PORT: 4000,
        NODE_ENV: "production",
        DATABASE_URL: parsed?.DATABASE_URL,
        API_HOST: "http://localhost:4000",
      },
    },
  ],
};
