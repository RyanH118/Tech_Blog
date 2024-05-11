const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  // force: true adds DROP TABLE IF EXISTS before trying to create table
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");
  await seedPosts();
  console.log("--------------");
  await seedComments();
  console.log("--------------");

  process.exit(0);
};

seedAll();
