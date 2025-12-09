const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const StudentModel = sequelize.define(
  "student",
  {
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = { StudentModel };
