"use client"

import { twMerge } from "tailwind-merge";

import { toast } from "react-hot-toast"

import { useSupabaseClient } from "@supabase/auth-helpers-react"

import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi"
import { BiSearch, BiSolidHeart } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"

import Button from "../Button/Button";

interface HeaderProps {
  children: React.ReactNode;
  clasName?: string;
}

const Header: React.FC<HeaderProps> = ( {children, clasName} ) => {

  const authModal = useAuthModal();

  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    
    router.refresh();

    if (error) {
      toast.error(error.message); 
    } else {
      toast.success('Logged out!')
    }
  };

  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, clasName)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button 
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            onClick={() => router.back()}
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button 
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            onClick={() => router.forward()}
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>

        <div className="flex md:hidden gap-x-2 items-center">
          <button 
            className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition" 
            onClick={() => router.push('/')} 
          >
            <HiHome className="text-black" size={20} />
          </button>

          <button 
            className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
            onClick={() => router.push('/search')}
          >
            <BiSearch className="text-black" size={20} />
          </button>

          <button 
            className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
            onClick={() => router.push('/liked')}
          >
            <BiSolidHeart className="text-black" size={20} />
          </button>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button 
                className="bg-white px-6 py-2" 
                onClick={handleLogout}
              >
                Logout
              </Button>
              <Button
                className="bg-white"
                onClick={() => router.push('/account')}
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button 
                  className="bg-transparent text-neutral-300 font-medium"
                  onClick={authModal.onOpen}
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button 
                  className="bg-white px-6 py-2"
                  onClick={() => {}}
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header