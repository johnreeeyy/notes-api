import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    await user.save();
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.error("Error in registerUser Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // check if user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id }, // payload
      process.env.JWT_SECRET, // secret
      { expiresIn: "1d" }, // options
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error in loginUser Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
