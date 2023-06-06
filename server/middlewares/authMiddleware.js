import jwt from "jsonwebtoken";

// check if token is present in cookies and valid or present if not send error
export const checkToken = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).json("Unauthorised access! Login First");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.token = verified;
    next();
  } catch (err) {
    return res.status(401).json("Unauthorised access");
  }
};

export const checkAdmin = async (req, res, next) => {
  // check if user is admin
  checkToken(req, res, () => {
    const { role } = req.token;
    if (role === "Admin") next();
    else {
      return res.status(401).json("Unauthorised access");
    }
  });
};
