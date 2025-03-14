'use client';
import React, { useState } from 'react';

export default function SellPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: null as File | null,
  });

  // Handle text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle file upload safely
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Using optional chaining to avoid null errors
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        image: file,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting:', formData);
    // Implement actual form submission logic here
  };

  return (
    <div className="sell-container">
      <h1>Sell Your Part</h1>
      <p>List your auto parts for sale.</p>

      <form className="sell-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="input-field"
        />

        <textarea
          name="description"
          placeholder="Short description"
          value={formData.description}
          onChange={handleChange}
          className="textarea-field"
        />

        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={formData.price}
          onChange={handleChange}
          className="input-field"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        />

        <button type="submit" className="submit-button">
          Submit Listing
        </button>
      </form>
    </div>
  );
}
