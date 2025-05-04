import { useState } from 'react';
import { useUserContext } from '../contexts/UserContext'; // ✅ your context

export default function ProductMaker() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const { user } = useUserContext(); // ✅ grab user from context
  const token = user[0];             // ✅ extract token string from array

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, // ✅ this makes the backend know who uploaded
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const result = await response.json();
      alert('Product uploaded successfully!');
      console.log(result);
    } catch (error) {
      console.error('❌ Upload error:', error);
      alert('Error uploading product.');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="text" placeholder="Product Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="file" name="image" accept="image/*" onChange={e => setImage(e.target.files[0])} required />
      <button type="submit">Upload Product</button>
    </form>
  );
}
