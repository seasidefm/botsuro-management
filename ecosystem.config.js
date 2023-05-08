const { config } = require("dotenv");

const { parsed } = config({ path: ".env.local" });

module.exports = {
  apps: [
    {
      name: "botsuro-management",
      cwd: "/home/duke_ferdinand/apps/botsuro-management",
      exec_mode: "cluster",
      instances: 2,
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        DATABASE_URL: parsed?.DATABASE_URL,
      },
    },
  ],
};
