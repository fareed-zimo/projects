// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookieParser from "cookie-parser";

export default function handler(req, res) {
  res.status(200).json({ message: "Hello World" });
}
