"use client"

import { useEffect, useState } from 'react'

import Modal from '@/components/Modal/Modal'

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
      <Modal 
        title='Text Modal' 
        description='Test Description' 
        isOpen
        onChange={() => {}}
      >
        Text Children
      </Modal>
    </>
  )
}

export default Modalproviders