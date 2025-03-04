"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../abis/Metaverse.json"; // Adjust this path to your ABI file

const Web3Context = createContext();

export const useWeb3 = () => {
  return useContext(Web3Context);
};

export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const contractAddress = "0x49397BF80Eebf92fa0c1C8DeE417cDDBB1d006c7";
  const contractABI = abi.abi;

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Metamask is not installed");
        return;
      }

      window.ethereum.on("chainChanged", () => window.location.reload());
      window.ethereum.on("accountsChanged", () => window.location.reload());

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      if (accounts.length === 0) {
        console.log("No account found");
        return;
      }

      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      setAccount(address);
      setProvider(provider);
      setSigner(signer);
      setContract(contract);
    } catch (error) {
      console.error("Error connecting to Metamask:", error);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <Web3Context.Provider value={{ account, contract, provider, signer, connectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};
