import express from 'express';
import Product from '../models/Product.js';
import { upload, uploadToGCS } from '../upload.js';
import { authenticateUser } from '../middleware/auth.js';


const router = express.Router();

router.post(
    '/',
    authenticateUser, // 👈 protects the route and adds req.user.email
    upload.single('image'),
    uploadToGCS,
    async (req, res) => {
      try {
        const { title, description, price } = req.body;
        const imageUrl = req.file?.gcsUrl;
        const userEmail = req.user?.email;
  
        if (!title || !description || !price || !imageUrl || !userEmail) {
          return res.status(400).json({ message: 'Missing required fields' });
        }
  
        const newProduct = new Product({
          title,
          description,
          price,
          image: imageUrl,
          user: userEmail, // 👈 stores email from token
        });
  
        await newProduct.save();
  
        res.status(201).json({ message: 'Product uploaded successfully!', product: newProduct });
      } catch (err) {
        console.error('Error saving product:', err);
        res.status(500).json({ message: 'Server error during product upload' });
      }
    }
  );

export default router;
