import userModel from '../Models/user.model.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check exits user
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: 'User does not Exits' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    //Match Password
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token, message : 'User Successfully Login' });
    } else {
      res.json({ success: false, message: 'Invalid Credentials' });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Checking user already exits or not
    const userExits = await userModel.findOne({ email });
    if (userExits) {
      return res.json({ success: false, message: 'User Already Exits' });
    }

    // Validating email format & string password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: 'Please Enter a valid Email',
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: 'Please Enter a Strong password',
      });
    }

    //Hashing user Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create an Account
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    //Token
    const token = createToken(user._id);

    res.json({ success: true, token, message : 'User created Successfully' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.status(200).json({ success: true, token });
    } else {
      res.status(400).json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
