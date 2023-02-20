const { faker } = require("@faker-js/faker");
const { Article, User, Comment, Rol } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

/* const pass = async () => { bcrypt.hash("1234", 8) } */

module.exports = async () => {
  const users = [];
  const articles = [];
  const comments = [];
  const rol = [];
  const rolCodes = [100, 200, 300, 400];

  for (let i = 0; i < 5; i++) {
    const randomNumber = faker.datatype.number({ min: 0, max: 3 });
    users.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: await bcrypt.hash("1234", 8),
      rolId: Math.floor(Math.random() * 4) + 1,
      rolCode: rolCodes[randomNumber],
    });
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(5),
      img: faker.image.nature(480, 480, true),
      userId: Math.floor(Math.random() * 4) + 1,
    });
    comments.push({
      content: faker.lorem.paragraphs(2),
      userId: Math.floor(Math.random() * 4) + 1,
      articleId: Math.floor(Math.random() * 4) + 1,
    });
  }

  rol.push({
    rolname: "lector",
    rolcode: 100,
  });

  rol.push({
    rolname: "escritor",
    rolcode: 200,
  });

  rol.push({
    rolname: "editor",
    rolcode: 300,
  });

  rol.push({
    rolname: "admin",
    rolcode: 400,
  });

  await Rol.bulkCreate(rol);
  await User.bulkCreate(users);
  await Article.bulkCreate(articles);
  await Comment.bulkCreate(comments);

  /*   console.log("[Database] Se corrió el seeder de Articles."); */
};
