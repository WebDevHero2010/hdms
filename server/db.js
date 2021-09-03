const Sequelize = require("sequelize");
const sequelize = new Sequelize("fmp", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.authenticate().then(
  function () {
    console.log("Connected to fmp postgres database");
  },
  function (err) {
    console.log(err);
  }
);

module.exports = sequelize;
