import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
  try {
    let token = req.headers.token

    // If token is not in `token`, check `authorization` header
    if (!token && req.headers.authorization) {
      const authHeader = req.headers.authorization
      if (authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1]
      }
    }

    if (!token) {
      return res.json({ success: false, message: "Not Authorized Login Again" })
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET)
    req.body.userId = token_decode.id
    next()
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export default authUser
