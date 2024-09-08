import { useGSAP } from '@gsap/react';
import React, { useState } from 'react';
import { animateWithGsap } from '../utils/animations';

const Contact = () => {
//   useGSAP(() => {
//       gsap.to('#features_title2', { y: 0, opacity: 1, duration: 1 });
//   }, []);
    useGSAP(() => {
        animateWithGsap('#features_title2', { y: 0, opacity: 1 });
    }, []);
  const [formData, setFormData] = useState({
      name: '',
      productBought: '',
      productId: '',
      email: '',
      message: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log(formData);
  };

  return(
      <section className="container mx-auto px-4 py-8">
          <div className="mb-12 w-full">
              <div>
                  <h1 id="features_title2" className="section-heading1 mb-8">Contact Us.</h1>
              </div>
          </div>
          <div id="features_title2" >
              <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                  <div className="flex flex-wrap -mx-2">
                      <div className="w-full md:w-1/2 px-2">
                          <div className="mb-4">
                              <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
                              <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                                  required
                              />
                          </div>
                          <div className="mb-4">
                              <label htmlFor="productBought" className="block text-white font-bold mb-2">Product Bought</label>
                              <input
                                  type="text"
                                  id="productBought"
                                  name="productBought"
                                  value={formData.productBought}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                                  required
                              />
                          </div>
                          <div className="mb-4">
                              <label htmlFor="productId" className="block text-white font-bold mb-2">Product ID</label>
                              <input
                                  type="text"
                                  id="productId"
                                  name="productId"
                                  value={formData.productId}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                                  required
                              />
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 px-2">
                          <div className="mb-4">
                              <label htmlFor="email" className="block text-white font-bold mb-2">Email Address</label>
                              <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                                  required
                              />
                          </div>
                          <div className="mb-4">
                              <label htmlFor="message" className="block text-white font-bold mb-2">Review/Complaint</label>
                              <textarea
                                  id="message"
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  rows="5"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                                  required
                              ></textarea>
                          </div>
                          <div className="text-center">
                              <button 
                                  style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
                                  type="submit"
                                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
                                  Submit
                              </button>
                          </div>
                      </div>
                  </div>
              </form>
          </div>
      </section>
  )
}

export default Contact;