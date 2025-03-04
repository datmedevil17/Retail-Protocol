"use client"
import React, { useEffect } from 'react'
import { useWeb3 } from "../../context/Web3Context"

const page = () => {
  const {account,contract} = useWeb3()
  useEffect(()=>{
    console.log(contract)

  })
  return (
    <div>
      
      
    </div>
  )
}

export default page
