import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["User", "Admin"], 
    default: "User" 
  },
  authProvider: {
    type: String,
    enum: ["Local", "Google"],
    default: "Local"
  },
  status: {
    type: String, 
    enum: ["Active", "Inactive"], 
    default: "Active"
  }
}, { timestamps: true }); 

export default mongoose.model("User", userSchema);