const User = require("../models/User");
const generateToken = require("../utils/generateTokens");

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email " });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Only admins can log in." });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = generateToken(user._id, user.role);

    res.status(200).json({ token, role: user.role });
  } catch (err) {
    res.status(500).json(err,{ message: "Server error" });
  }
};
