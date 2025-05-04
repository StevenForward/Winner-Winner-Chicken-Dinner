// upload.js
import multer from 'multer';
import { Storage } from '@google-cloud/storage';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 🔐 Initialize Google Cloud Storage with your service account JSON
const storage = new Storage({
  keyFilename: path.join(__dirname, 'kuraroots-9d105606e49f.json'), // Make sure this path is correct
});

// 📦 Name of your bucket
const bucket = storage.bucket('kurabucketstorage');

// 📥 Multer config to store files in memory
const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage });

const uploadToGCS = async (req, res, next) => {
  console.log('🟢 uploadToGCS triggered');

  if (!req.file || !req.file.buffer) {
    console.error('❌ No file or buffer received in uploadToGCS');
    return res.status(400).json({ message: 'No file received or invalid file' });
  }

  try {
    const blobName = Date.now() + '-' + crypto.randomBytes(6).toString('hex') + path.extname(req.file.originalname);
    const blob = bucket.file(blobName);

    const blobStream = blob.createWriteStream({
      resumable: false,
      contentType: req.file.mimetype,
    });

    blobStream.on('error', err => {
      console.error('❌ GCS upload error:', err);
      return next(err);
    });

    blobStream.on('finish', () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      console.log('✅ File uploaded to GCS:', publicUrl);
      req.file.gcsUrl = publicUrl;
      next();
    });

    blobStream.end(req.file.buffer);
  } catch (err) {
    console.error('❌ uploadToGCS unexpected error:', err);
    res.status(500).json({ message: 'Upload failed', error: err });
  }
};

export { upload, uploadToGCS };
