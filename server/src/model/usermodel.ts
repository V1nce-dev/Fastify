import mongoose, { Document, Schema, Model } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  username: string;
  password: string;
  comparePassword(password: string): boolean;
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 128,
    trim: true,
  },
});

UserSchema.pre("save", async function (this: IUser, next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = function (
  this: IUser,
  password: string,
): boolean {
  return bcrypt.compareSync(password, this.password);
};

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
