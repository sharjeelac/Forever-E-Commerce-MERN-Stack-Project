  import jwt from 'jsonwebtoken';

  const authUser = async (req, res, next) => {
    console.log('auth user middleware');

    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ success: false, message: 'Login First' });
    }

    try {
      const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { id: tokenDecode.id }; // Store user info in req.user
      console.log(tokenDecode.id)
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ success: false, message: 'Invalid or Expired Token' });
    }
  };

  export default authUser;
