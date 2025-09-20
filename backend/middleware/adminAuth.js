import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorised Login Again",
      });
    }

    // Remove "Bearer " prefix if it exists
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL || decoded.role !== "admin") {
      return res.json({
        success: false,
        message: "Not Authorised Login Again",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
