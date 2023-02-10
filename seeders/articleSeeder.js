const { faker } = require("@faker-js/faker");
const { Article, User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];
  const users = [];
  for (let i = 0; i < 15; i++) {
    let firstname = faker.name.firstName();
    let lastname = faker.name.lastName();
    let email = faker.internet.email(firstname, lastname);
    users.push({ firstname, lastname, email });
  }
  for (let i = 0; i < 40; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      img: faker.image.nature(480, 480, true),
      userId: Math.floor(Math.random() * 14) + 1,
    });
  }
  await User.bulkCreate(users);
  await Article.bulkCreate(articles);

  console.log("[Database] Se corrió el seeder de Articles.");
};
