"use client"
import React, { useState } from 'react';
import { useWeb3 } from '@/context/Web3Context';
import axios from 'axios';
import { ethers } from 'ethers';

const AddItemPage = () => {
    const { account, contract } = useWeb3();
    const [formData, setFormData] = useState({
        category: '',
        company: '',
        description: '',
        imageURI: '',
        price: '',
        stock: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const uploadToIPFS = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const fileData = new FormData();
                fileData.append("file", file);
                const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", fileData, {
                    headers: {
                        pinata_api_key: "35cb1bf7be19d2a8fa0d",
                        pinata_secret_api_key: "2c2e9e43bca7a619154cb48e8b060c5643ea6220d0b7c9deb565fa491b3b3a50",
                        "Content-Type": "multipart/form-data",
                    },
                });
                const resData = res.data;
                setFormData({ ...formData, imageURI: `https://ipfs.io/ipfs/${resData.IpfsHash}` });
                console.log(res.data);
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const tx = await contract.addItem(
                formData.category,
                formData.company,
                formData.description,
                formData.imageURI,
                ethers.parseEther(formData.price),
                formData.stock
            );
            await tx.wait();
            console.log(tx);
            alert("Item added successfully!");
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Item</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Console">Console</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Headphones">Headphones</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-gray-600 font-medium">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            placeholder="Enter company name"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Description</label>
                        <textarea
                            name="description"
                            placeholder="Enter description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Upload Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={uploadToIPFS}
                            className="w-full p-3 border rounded-lg bg-white cursor-pointer focus:ring focus:ring-blue-300"
                            required
                        />
                        {formData.imageURI && (
                            <img src={formData.imageURI} alt="Uploaded Preview" className="mt-3 w-full h-40 object-cover rounded-lg shadow" />
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Price (ETH)</label>
                        <input
                            type="number"
                            name="price"
                            step="any"
                            placeholder="Enter price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            placeholder="Enter stock quantity"
                            value={formData.stock}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItemPage;
