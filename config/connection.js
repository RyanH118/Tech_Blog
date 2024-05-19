// Import the Sequelize library
const Sequelize = require("sequelize");

// Import the dotenv library to load environment variables from a.env file
require("dotenv").config();

// Initialize the Sequelize instance with the database connection information
let sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "postgres",
    }
  );
}

// Export the Sequelize instance for use in other modules
module.exports = sequelize;