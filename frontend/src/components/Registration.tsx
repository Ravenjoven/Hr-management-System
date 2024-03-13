import React, { useState, ChangeEvent } from 'react';

interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
  contact: string;
  gender: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    password: '',
    contact: '',
    gender: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can perform actions like sending the form data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleGenderChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
