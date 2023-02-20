const { Article, Comment, User } = require("../models");

async function createComment(req, res) {
  if (req.user.rolId >= 1) {
    const articleId = req.params.id;
    await Comment.create({
      content: req.body.commentText,
      articleId: articleId,
      userId: req.user.id,
    });
    res.redirect(`/articulos/${articleId}`);
  } else {
    res.send("No tienes permiso necesario");
  }
}

module.exports = {
  createComment,
};
