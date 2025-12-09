const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const UserModel = sequelize.define('user',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  username:{
    type: DataTypes.STRING,
    allowNull:false,
  }
},
{
  freezeTableName:true,
  timestamps:true
})

// const UserModel = sequelize.define("user", {
//   name: DataTypes.TEXT,
//   favoriteColor: {
//     type: DataTypes.TEXT,
//     defaultValue: "green",
//   },
//   age: DataTypes.INTEGER,
//   cash: DataTypes.INTEGER,
// },{
//     tableName:"user"
// });

// (async () => {
//     await sequelize.sync({ force: true });
//     // Code here
//   })();

// const UserModel = sequelize.define(
//   "users",
//   {
//     firstName: {
//      type: DataTypes.STRING,
//      allowNull:false, 
//      unique:true
//     },
//     // firstName: {
//     //   type: DataTypes.STRING,
//     //   get (){
//     //     const rawValue = this.getDataValue('firstName');
//     //     return rawValue ? "Mr. "+ rawValue.toUpperCase() : null;
//     //   }
//     // },
//     lastName: {
//       type:DataTypes.STRING,
//       allowNull:false,
//       unique:true
//     },
//     fullName: {
//         type: DataTypes.VIRTUAL,
//         get() {
//           return `${this.firstName} ${this.lastName}`;
//         },
//         set(value) {
//           throw new Error('Do not try to set the `fullName` value!');
//         },
//       },
// //     lastName:{
// //         type: DataTypes.STRING,
    
// //     set(value){
// //         this.setDataValue("lastName", value + "")
// //     }
// // },
//     email: DataTypes.STRING,
//     password: {
//      type: DataTypes.STRING(64),
//      validate:{
//       // is:/^[0-9a-f]{64}$/i,
//      }
//     },
//     age: DataTypes.INTEGER,
//     mobileNumber: DataTypes.STRING,
//     isActice: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//     },
//   },
//   {
//     freezeTableName: true,
//   }
// );


module.exports = { UserModel };
