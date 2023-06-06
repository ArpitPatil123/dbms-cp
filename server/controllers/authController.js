import { db } from "../db.js";
import { messages } from "../utils/messages.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  // check if user already exists
  const { username, email, password, role } = req.body;
  const q = `SELECT * FROM users WHERE email = ?`;
  db.query(q, [email], async (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Server Error");
    }
    // If user found return
    if (result.length > 0) {
      return res.status(409).json(messages(false, "User already registered"));
    } else {
      // hash password
      const hashedPassword = await hashPassword(password);

      // insert user into db
      const q =
        "INSERT INTO users (`username`, `password`,`email`, `role`) VALUES (?, ?, ?, ?)";
      db.query(q, [username, hashedPassword, email, role], (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json("Server Error");
        }
        return res.status(201).json(messages(true, "User registered"));
      });
    }
  });
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const q = `SELECT * FROM users WHERE email = ?`;
  db.query(q, [email], async (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result.length > 0) {
      const user = result[0];

      // Match the stored password and entered password
      const isMatch = await comparePassword(password, user.password);

      // If matched login and set jwt token
      if (isMatch) {
        const token = await jwt.sign(
          { id: user.id, role: user.role },
          process.env.JWT_SECRET
        );

        res.cookie("jwt", token, {
          httpOnly: true,
        });
        // send user data except password
        const { password, ...userWithoutPassword } = user;
        return res.status(200).json({success: true, message: "Logged in", user: userWithoutPassword});
        // return res
        //   .status(200)
        //   .json({ success: true, message: "Logged in", user: user });
      } else {
        // if passwords not matched return
        return res.status(400).json(messages(false, "Invalid credentials"));
      }
    } else {
      // if not registered
      return res.status(404).json(messages(false, "User not found"));
    }
  });
};

export const logoutController = (req, res) => {
  res.cookie("jwt", "");
  res.status(200).json(messages(true, "Logged out"));
};
