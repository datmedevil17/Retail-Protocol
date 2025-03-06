"use client";
import React, { useState } from "react";
import { useWeb3 } from "@/context/Web3Context";
import axios from "axios";
import { ethers } from "ethers";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import cn from "classnames";

const AddItemPage = () => {
  const { account, contract } = useWeb3();
  const [formData, setFormData] = useState({
    category: "",
    company: "",
    description: "",
    imageURI: "",
    price: "",
    stock: ""
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
        const res = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          fileData,
          {
            headers: {
              pinata_api_key: "35cb1bf7be19d2a8fa0d",
              pinata_secret_api_key:
                "2c2e9e43bca7a619154cb48e8b060c5643ea6220d0b7c9deb565fa491b3b3a50",
              "Content-Type": "multipart/form-data"
            }
          }
        );
        const resData = res.data;
        setFormData({
          ...formData,
          imageURI: `https://ipfs.io/ipfs/${resData.IpfsHash}`
        });
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-950">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center mb-4">
          Add New Item
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={cn("flex flex-col space-y-2")}>
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
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
              <option value="Television">Television</option>
              <option value="Speaker">Speaker</option>
            </select>
          </div>

          <div className={cn("flex flex-col space-y-2")}>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className={cn("flex flex-col space-y-2")}>
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              rows="3"
              required
            ></textarea>
          </div>

          <div className={cn("flex flex-col space-y-2")}>
            <Label htmlFor="uploadImage">Upload Image</Label>
            <Input
              id="uploadImage"
              type="file"
              accept="image/*"
              onChange={uploadToIPFS}
              required
            />
            {formData.imageURI && (
              <img
                src={formData.imageURI}
                alt="Uploaded Preview"
                className="mt-3 w-full h-40 object-cover rounded-lg shadow"
              />
            )}
          </div>

          <div className={cn("flex flex-col space-y-2")}>
            <Label htmlFor="price">Price (ETH)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="any"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className={cn("flex flex-col space-y-2")}>
            <Label htmlFor="stock">Stock</Label>
            <Input
              id="stock"
              name="stock"
              type="number"
              placeholder="Enter stock quantity"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
          >
            Add Item &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default AddItemPage;
