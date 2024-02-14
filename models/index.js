const User = require("./User");
const Post = require("./Post");
const Comments = require("./Comments");

User.hasMany(Post, {
  foreignKey: "userId",
});

Post.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(Comments, {
  foreignKey: "userId",
});

Comments.belongsTo(User, {
  foreignKey: "userId",
});

Post.hasMany(Comments, {
  foreignKey: "postId",
});

Comments.belongsTo(Post, {
  foreignKey: "postId",
});

module.exports = { User, Post, Comments };
