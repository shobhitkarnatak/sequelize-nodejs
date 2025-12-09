const express = require("express");
const { router } = require("./routes/router");
const { dbConnection, sequelize } = require("./config/dbConnect");
require("./association");

const { StudentModel } = require("./model/studentModel");
const { CourseModel } = require("./model/courseModel");
const { UserModel } = require("./model/userModel");
// const { insert } = require("./controller/userController");


const app = express();
app.use(express.json());

app.use("/", router);

const startServer = async () => {
  try {
    await dbConnection();
    await sequelize.sync({force:false});

    //   insert()
    console.log("✅ Database synced successfully");

    // Start Express server
    app.listen(3000, () => {
      console.log("🚀 Server running at http://localhost:3000");
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
  }
};

startServer();
