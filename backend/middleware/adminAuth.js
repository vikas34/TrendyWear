import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorised Login Again",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Check payload field
    if (decoded.email !== process.env.ADMIN_EMAIL || decoded.role !== "admin"){
      return res.json({
        success: false,
        message: "Not Authorised Login Again",
      });
    }

    next(); // ✅ user is admin
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
