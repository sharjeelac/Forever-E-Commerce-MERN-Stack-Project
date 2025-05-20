import mongoose from 'mongoose';

const connecDB = async () => {
  // const localUrl = 'mongodb://localhost:27017/e-commerce';
  const atlasUrl = `${process.env.MONGODB_URI}/forever-e-commerce`
  await mongoose
    .connect(atlasUrl )
    .then(() => console.log('✅ Connected To MongoDB'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));
};

export default connecDB;
