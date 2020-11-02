const { body } = require("express-validator");

const registerValidator = [
  body("name")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Name is required"),
  body("email").isEmail("Enter valid email address"),
];

module.exports = { registerValidator };