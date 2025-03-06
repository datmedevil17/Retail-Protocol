"use client";
import React, { useState, useEffect } from "react";
import { useWeb3 } from "@/context/Web3Context";
import { ethers } from "ethers";

const Page = () => {
  const { contract } = useWeb3();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (contract) {
      fetchAllProducts();
    }
  }, [contract]);

  const fetchAllProducts = async () => {
    try {
      const productCount = await contract.nextItemId();
      const fetchedProducts = [];
      for (let i = 1; i <= productCount; i++) {
        const result = await contract.getItemDetails(i);
        if (!result) break;
        fetchedProducts.push({
          id: i,
          name: result[0],
          company: result[1],
          description: result[2],
          imageURI: result[3],
          price: ethers.formatEther(result[4].toString()),
          stock: result[5].toString(),
        });
      }
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const categorizedProducts = {
    Console: products.filter((p) => p.name.toLowerCase().includes("console")),
    Mobile: products.filter((p) => p.name.toLowerCase().includes("mobile")),
    Laptops: products.filter((p) => p.name.toLowerCase().includes("laptop")),
    Headphones: products.filter((p) =>
      p.name.toLowerCase().includes("headphone")
    ),
    Television: products.filter((p) =>
      p.name.toLowerCase().includes("television")
    ),
    Speaker: products.filter((p) => p.name.toLowerCase().includes("speaker")),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-neonBlue">
        Metaverse Electronics Store
      </h1>
      {Object.entries(categorizedProducts).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold text-neonPurple mb-4">{category}</h2>
          {items.length === 0 ? (
            <p className="text-gray-400">No items available</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-900 shadow-lg rounded-2xl p-4 transition-transform transform hover:scale-105 
                  hover:shadow-neonPurple border border-neonBlue text-white"
                >
                  <img
                    src={product.imageURI}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg mb-4 border border-neonPurple"
                  />
                  <h3 className="text-lg font-bold text-neonBlue">{product.name}</h3>
                  <p className="text-gray-400 text-sm">Brand: {product.company}</p>
                  <p className="text-gray-300 mt-2">{product.description}</p>
                  <p className="text-lg font-semibold text-neonPurple mt-3">
                    Price: {product.price} ETH
                  </p>
                  <p className="text-gray-400">Stock: {product.stock}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
