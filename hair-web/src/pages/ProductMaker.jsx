import { useState } from 'react';

export default function ProductMaker() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

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
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      alert('Product uploaded successfully!');
      console.log(result);
    } catch (error) {
      console.error(error);
      alert('Error uploading product.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Title" onChange={e => setTitle(e.target.value)} required />
      <input type="number" placeholder="Price" onChange={e => setPrice(e.target.value)} required />
      <textarea placeholder="Description" onChange={e => setDescription(e.target.value)} required />
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} required />
      <button type="submit">Upload Product</button>
    </form>
  );
}
