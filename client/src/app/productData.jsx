const productsData = {
    items: [
      {
        id: "mobile3",
        name: "iPhone 14 Pro",
        price: 0.000005,
        specs: [
          { key: "Processor", value: "Apple A16 Bionic" },
          { key: "RAM", value: "6GB" },
          { key: "Storage", value: "128GB/256GB/512GB" },
          { key: "Water Resistant", value: "Yes" },
        ],
        category: "Phones",
        buyItemId:3
      },
      {
        id: "mobile2",
        name: "Xiaomi Mi 11",
        price: 0.000005,
        specs: [
          { key: "Processor", value: "Snapdragon 888" },
          { key: "RAM", value: "8GB" },
          { key: "Storage", value: "128GB/256GB" },
          { key: "Water Resistant", value: "No" },
        ],
        category: "Phones",
        buyItemId:4
      },
      {
        id: "mobile4",
        name: "Samsung Galaxy S23 Ultra",
        price: 0.000005,
        specs: [
          { key: "Processor", value: "Snapdragon 8 Gen 2" },
          { key: "RAM", value: "12GB" },
          { key: "Storage", value: "256GB/512GB" },
          { key: "Water Resistant", value: "Yes" },
        ],
        category: "Phones",
        buyItemId:5
      },
      {
        id: "mobile",
        name: "Nokia X20",
        price: 0.000019,
        specs: [
          { key: "Processor", value: "Snapdragon 480" },
          { key: "RAM", value: "8GB" },
          { key: "Storage", value: "128GB" },
          { key: "Water Resistant", value: "Yes" },
        ],
        category: "Phones",
        buyItemId:10
      },
      {
        id: "laptop1",
        name: "Apple MacBook Air (M2, 2022)",
        price: 0.000002,
        specs: [
          { key: "Processor", value: "Apple M2" },
          { key: "RAM", value: "8GB" },
          { key: "Storage", value: "256GB/512GB" },
          { key: "Touchscreen", value: "No" },
        ],
        category: "Laptops",
        buyItemId:1
      },
      {
        id: "laptop2",
        name: "Lenovo IdeaPad Flex 5",
        price: 0.000005,
        specs: [
          { key: "Processor", value: "AMD Ryzen 5 5500U" },
          { key: "RAM", value: "16GB" },
          { key: "Storage", value: "512GB SSD" },
          { key: "Touchscreen", value: "Yes" },
        ],
        category: "Laptops",
        buyItemId:2
      },
      {
        id: "laptop3",
        name: "HP Victus 16",
        price: 0.000012,
        specs: [
          { key: "Processor", value: "AMD Ryzen 7 5800H" },
          { key: "RAM", value: "16GB" },
          { key: "Storage", value: "1TB SSD" },
          { key: "Touchscreen", value: "No" },
        ],
        category: "Laptops",
        buyItemId:6
      },
      {
        id: "speaker3",
        name: "JBL Charge 5",
        price: 14999,
        specs: [
          { key: "Type", value: "Portable Bluetooth" },
          { key: "Battery Life", value: "20 hours" },
          { key: "Water Resistant", value: "Yes" },
          { key: "Built-in Microphone", value: "No" },
        ],
        category: "Speakers",
        buyItemId:300
      },
      {
        id: "speaker2",
        name: "Sony SRS-XB43",
        price: 26990,
        specs: [
          { key: "Type", value: "Portable Bluetooth" },
          { key: "Battery Life", value: "24 hours" },
          { key: "Water Resistant", value: "Yes" },
          { key: "Built-in Microphone", value: "No" },
        ],
        category: "Speakers",
        buyItemId:300
      },
      {
        id: "headphones",
        name: "Sony WH-1000XM5",
        price: 0.000025,
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "30 hours" },
          { key: "Noise Cancellation", value: "Yes" },
          { key: "Foldable", value: "No" },
        ],
        category: "Headphones",
        buyItemId:17
      },
      {
        id: "headphones3",
        name: "Skullcandy Crusher Evo",
        price: 0.000025,
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "40 hours" },
          { key: "Noise Cancellation", value: "No" },
          { key: "Foldable", value: "Yes" },
        ],
        category: "Headphones",
        buyItemId:18
      },
      {
        id: "headphones2",
        name: "Bose QuietComfort 45",
        price: 0.000025,
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "24 hours" },
          { key: "Noise Cancellation", value: "Yes" },
          { key: "Foldable", value: "No" },
        ],
        category: "Headphones",
        buyItemId:19
      },
      {
        id: "headphones4",
        name: "Jabra Elite 85h",
        price: 0.000025,
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "36 hours" },
          { key: "Noise Cancellation", value: "Yes" },
          { key: "Foldable", value: "No" },
        ],
        category: "Headphones",
        buyItemId:20
      },
      {
        id: "tv3",
        name: "Samsung QN90B Neo QLED",
        price: 0.00009,
        specs: [
          { key: "Screen Size", value: "55 inches" },
          { key: "Resolution", value: "4K" },
          { key: "Smart TV", value: "Yes" },
          { key: "HDR Support", value: "Yes" },
        ],
        category: "Television",
        buyItemId:21
      },
      {
        id: "tv2",
        name: "LG OLED C2",
        price: 0.000025,
        specs: [
          { key: "Screen Size", value: "65 inches" },
          { key: "Resolution", value: "4K" },
          { key: "Smart TV", value: "Yes" },
          { key: "HDR Support", value: "Yes" },
        ],
        category: "Television",
        buyItemId:22
      },
      {
        id: "tv1",
        name: "Panasonic TX-55HZ2000",
        price: 0.000025,
        specs: [
          { key: "Screen Size", value: "55 inches" },
          { key: "Resolution", value: "4K" },
          { key: "Smart TV", value: "Yes" },
          { key: "HDR Support", value: "Yes" },
        ],
        category: "Television",buyItemId:23
      },
      {
        id: "console2",
        name: "PlayStation 5",
        price: 0.00005,
        specs: [
          { key: "Storage", value: "825GB SSD" },
          { key: "Resolution", value: "4K" },
          { key: "Controller", value: "DualSense" },
          { key: "VR Support", value: "Yes" },
        ],
        category: "Gaming Consoles",buyItemId:16
      },
      {
        id: "PSConsole",
        name: "PlayStation 4 Pro",
        price: 0.00003,
        specs: [
          { key: "Storage", value: "1TB HDD" },
          { key: "Resolution", value: "4K" },
          { key: "Controller", value: "DualShock 4" },
          { key: "VR Support", value: "Yes" },
        ],
        category: "Gaming Consoles",buyItemId:15
      },
    ],
  };
  
  export default productsData;
  