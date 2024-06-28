/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO_USER: "mukul",
    MONGO_PASS: "mukul_05",
    API_URL: "http://localhost:3000",
    DB_URI:
      "mongodb+srv://mukul:mukul_05@cluster0.gy4l6pq.mongodb.net/Buyitnow?retryWrites=true&w=majority&appName=Cluster0",
  },
};

export default nextConfig;
