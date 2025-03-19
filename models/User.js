const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "admin",
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// userSchema.pre("save", async function (next) {
//   if (!this.password) return next(); // Ensure password exists
//   if (!this.isModified("password")) return next(); // Hash only if modified
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// userSchema.methods.comparePassword = async function (candidatePassword) {
//   if (!this.password) return false; // Prevent errors if password is missing
//   return await bcrypt.compare(candidatePassword, this.password);
// };

module.exports = mongoose.model("User", userSchema);
