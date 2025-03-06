"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useWeb3 } from "@/context/Web3Context";
import { ethers } from "ethers";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-500 drop-shadow-lg tracking-wide uppercase">
        Metaverse Electronics Store
      </h1>

      {Object.entries(categorizedProducts).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-200 mb-4">
            {category}
          </h2>
          {items.length === 0 ? (
            <p className="text-gray-400">No items available</p>
          ) : (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              navigation
              pagination={{ clickable: true }}
              
              className="w-[95vw]"
            >
              {items.map((product) => (
                <SwiperSlide key={product.id}>
                  <CardContainer>
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {product.name}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        {product.description}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src={product.imageURI}
                          height={1000}
                          width={1000}
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt={product.name}
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-6">
                        <CardItem
                          translateZ="20"
                          as="div"
                          className="text-sm dark:text-white"
                        >
                          Brand: {product.company}
                        </CardItem>
                        <CardItem
                          translateZ="20"
                          as="div"
                          className="text-sm dark:text-white"
                        >
                          Stock: {product.stock}
                        </CardItem>
                      </div>
                      <div className="mt-4">
                        <CardItem
                          translateZ="20"
                          as="div"
                          className="text-lg font-semibold text-yellow-300"
                        >
                          Price: {product.price} ETH
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
