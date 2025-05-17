import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js'; // Now importing the actual configured instance

const storage = new CloudinaryStorage({
  cloudinary: cloudinary, // Correct instance
  params: {
    folder: 'your-folder-name',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

const upload = multer({ storage });

export default upload;
