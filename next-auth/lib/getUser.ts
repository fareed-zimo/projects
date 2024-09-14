import axios from "axios";

export const getUserFromDb = async (email, password) => {
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000"; // Fallback for local dev
  const userResponse = await axios.get(`${baseUrl}/api/saveData`);
  const user = userResponse.data.filter(
    (user) => email === user.email && password === user.password
  );
  if (!user[0]) {
    return null;
  }
  return user[0];
};
