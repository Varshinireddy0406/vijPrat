import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', formData);
    };

    return (
        <section className="bg-black-100 py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                        <p className="text-neutral-700 mb-6">
                            We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
                        </p>
                        <address className="text-neutral-600">
                            <p><strong  className="text-white">Email:</strong> support@vijprat.com</p>
                            <p><strong  className="text-white">Phone:</strong> (123) 456-7890</p>
                        </address>
                    </div>
                    <div className="md:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-blue p-6 rounded-lg shadow-lg">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-white-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-white-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-white-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
