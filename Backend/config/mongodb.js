import mongoose from 'mongoose';

const connectDB = async () => {
  // const localUrl = 'mongodb://localhost:27017/e-commerce';
  const atlasUrl = `${process.env.MONGODB_URI}`
  if (mongoose.connection.readyState >= 1) return
  await mongoose
    .connect(atlasUrl )
    .then(() => console.log('✅ Connected To MongoDB'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));
};

export default connectDB;
