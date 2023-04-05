import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
    },
    caption: {
      type: Schema.Types.Mixed,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = Mongoose.models.User || Mongoose.model("User", userSchema);
export default User;
