const seedUsers = require("./userData.json");
const seedPosts = require("./postData.json");
const seedComments = require("./commentData.json");

const sequelize = require("../config/config");

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
