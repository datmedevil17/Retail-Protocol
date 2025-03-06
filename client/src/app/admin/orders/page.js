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
      for (let i = 1; i <= productCount; i++) { // Assuming max 100 products, adjust as needed
        const result = await contract.getItemDetails(i);
        if (!result) break; // Stop if an item ID doesn't exist
        fetchedProducts.push({
          id: i,
          name: result[0],
          company: result[1],
          description: result[2],
          imageURI: result[3],
          price: ethers.formatEther(result[4].toString()),
          stock: result[5].toString(),
        });
        console.log(i)
        console.log(result[1])
        console.log(result[0])
        console.log(ethers.formatEther(result[4].toString()))

      }
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Categorizing products based on names (this can be improved if the contract stores categories)
  const categorizedProducts = {
    Console: products.filter((p) => p.name.toLowerCase().includes("console")),
    Mobile: products.filter((p) => p.name.toLowerCase().includes("mobile")),
    Laptops: products.filter((p) => p.name.toLowerCase().includes("laptop")),
    Headphones: products.filter((p) =>
      p.name.toLowerCase().includes("headphone")
    ),
  Television: products.filter((p) => p.name.toLowerCase().includes("televsion")),
    Speaker: products.filter((p) => p.name.toLowerCase().includes("speaker")),
  };

  return (
    <div>
      <h1>Metaverse Electronics Store</h1>
      {Object.entries(categorizedProducts).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          {items.length === 0 ? (
            <p>No items available</p>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {items.map((product) => (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    maxWidth: "200px",
                  }}
                >
                  <img
                    src={product.imageURI}
                    alt={product.name}
                    width="100"
                    height="100"
                  />
                  <h3>{product.name}</h3>
                  <p>Item Name: {product.company}</p>
                  <p>{product.description}</p>
                  <p>Price: {product.price} Wei</p>
                  <p>Stock: {product.stock}</p>
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
