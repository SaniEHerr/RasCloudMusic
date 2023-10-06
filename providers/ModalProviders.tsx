"use client"

import { useEffect, useState } from 'react'

import AutchModal from '@/components/AutchModal/AutchModal'

const Modalproviders = () => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }
  

  return (
    <>
      <AutchModal 
        
      />
    </>
  )
}

export default Modalproviders