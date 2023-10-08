"use client"

import { useEffect, useState } from 'react'

import AutchModal from '@/components/AutchModal/AutchModal'
import UploadModal from '@/components/UploadModal/UploadModal'

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
      <AutchModal />
      <UploadModal />
    </>
  )
}

export default Modalproviders