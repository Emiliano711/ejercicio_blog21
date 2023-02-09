const { Article } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll();
  res.render("home", { articles });
}

async function showArticulos(req, res) {
  res.render("articulos");
}

async function showAdmin(req, res) {
  const articles = await Article.findAll();
  res.render("admin", { articles });
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showArticulos,
  showAdmin,
};
