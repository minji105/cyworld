import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const ADMIN_PASSWORD = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);
const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = req.body;

    const isPasswordCorrect = await bcrypt.compare(password, ADMIN_PASSWORD);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({}, JWT_SECRET, { expiresIn: '24h' });

    return res.status(200).json({ token });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
