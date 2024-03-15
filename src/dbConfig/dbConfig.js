import mongoose from "mongoose";

export default connection = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("mongoDB Connected");
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};
