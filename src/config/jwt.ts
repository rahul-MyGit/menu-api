import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey"

export const generateToken = (userId : string) => {
    const accessToken = jwt.sign({userId}, JWT_SECRET, { expiresIn: '15m'});
    return accessToken;
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET) as { userId : string}
}