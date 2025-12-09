const { Op } = require("sequelize");
const { sequelize } = require("../config/dbConnect");
const { UserModel } = require("../model/userModel");

const userDetail = async (req, res) => {
  // Filter Query
  /* const users = await UserModel.findAll({
        where:{
            id:[43],
            isActive:true
        }
    });
    return res.json(users); */
  // Using sequelize operator
  /*  const users = await UserModel.findAll({
    where: {
      id: {
        [Op.eq]: 42,
        [Op.in]: [42,43]
      },
      [Op.and] : [{id:42}, {name:"Shobhit"}]

    },
  });
  return res.json(users); */
  // Update user
  /*  const updateUser = await UserModel.update(
    {
      name: "Shobhit Karnatak",
      age: 32,
    },
    {
      where: {
        id: [42],
      },
    }
  ); */
  // Delete user
  /* const deleteUser = await UserModel.destroy({
    where: {
      id: 44,
    },
  });
  return res.json(updateUser); */
  // Find by PK
  /* const user = await UserModel.findByPk(47);
return res.json(user);  */
  // Find one
  /* const users = await UserModel.findOne({
    where: {
      id: 43,
    },
  }); */
  
  // FindorCreate
  /* const [users, created] = await UserModel.findOrCreate({
    where: {
      name: "Rahul Singh",
    },
    defaults: {
      name: "Rahul Singh",
      favoriteColor: "Purple",
      age: 30,
      cash: 800000,
    },
  });
  return res.json({ users, created }); */
};
module.exports = { userDetail };
