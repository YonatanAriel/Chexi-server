const jwt = require("jsonwebtoken");

const createToken = (data) => {
  const SECRET = process.env.SECRET;
  const token = jwt.sign(data, SECRET, { expiresIn: "30d" });
  return token;
};

async function verify(req, res, next) {
  try {
    console.log("verify");
    const token = req?.headers?.authorization?.split("Bearer ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!decodedToken) throw new Error("Invalid token");
    req.userName = decodedToken.userName;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
}

module.exports = { createToken, verify };
