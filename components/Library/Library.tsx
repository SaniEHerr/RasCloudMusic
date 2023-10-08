"use client"

import { TbPlaylist } from "react-icons/Tb"
import { AiOutlinePlus } from "react-icons/Ai"
import useAuthModal from "@/hooks/useAuthModal"
import { useUser } from "@/hooks/useUser"
import useUploadModal from "@/hooks/useUploadModal"

const Library = () => {

  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const handleUploadModal = () => {
    if (!user) {
      return authModal.onOpen();
    }
    // TODO: Check for subscription
    return uploadModal.onOpen()
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-base">
            Your Library
          </p>
        </div>
        <AiOutlinePlus onClick={handleUploadModal} size={20} className="text-neutral-400 cursor-pointer hover:text-white transition" />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        List of Songs!
      </div>
    </div>
  )
}

export default Library