const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./router/auth");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.22ser.mongodb.net/reyleigh?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world")
})
app.use("/api/auth", authRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`serve started on PORT ${PORT}`));
