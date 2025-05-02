/** @type {import("drizzle-kit").Config} */
export default {
    schema: "./configs/schema.js",     // Use the actual path to your schema file
    dialect: "postgresql",
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_tFQJOR2yN7Eq@ep-cool-cell-a4rjqkrt-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require,'     // Use DB_URL in your .env file
    }            
  };
  