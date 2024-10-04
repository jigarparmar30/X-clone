import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { RiFileList2Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
// import { IoSearch } from "react-icons/io5";

const App = () => {
  return (
   <div className=" flex container mx-auto">
    <div className="first w-[70%]">
      <div className="logo invert">
      <svg viewBox="0 0 24 24" aria-hidden="true" class="w-6 m-auto my-4 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-k200y r-1nao33i r-5sfk15 r-kzbkwu"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
      </div>
      <div className="sidebar flex justify-end my-4">
<ul className='flex flex-col text-xl space-y-1 w-1/2'>
  <li className='flex justify-start items-center gap-3 w-fit px-4 py-2 hover: rounded-full hover:cursor-pointer hover:bg-gray-900'><GoHomeFill />Home</li>
  <li className='flex justify-start items-center gap-3 w-fit px-4  py-2 hover: rounded-full hover:cursor-pointer hover:bg-gray-900'><IoSearch />Explore</li>
  <li className='flex justify-start items-center gap-3 w-fit px-4  py-2 hover: rounded-full hover:cursor-pointer hover:bg-gray-900'><IoMdNotificationsOutline />Notifications</li>
  <li className='flex justify-start items-center gap-3 w-fit px-4  py-2 hover: rounded-full hover:cursor-pointer hover:bg-gray-900'><LuMessagesSquare />Messages</li>
  <li className='flex justify-start items-center gap-3 w-fit px-4  py-2 hover: rounded-full hover:cursor-pointer hover:bg-gray-900'> <svg viewBox="0 0 24 24" aria-hidden="true" class="invert w-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><g clip-path="url(#18-clip0_2592_269)" clip-rule="evenodd"><path d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"></path><path d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path></g><defs><clipPath id="18-clip0_2592_269"><rect height="20" rx="1" width="20" x="2" y="2"></rect></clipPath></defs></g></svg>Grok</li>
  <li className='flex justify-start items-center gap-3 w-fit px-4  py-2 hover: rounded-full hover:cursor-pointer hover:bg-gray-900'><RiFileList2Line />Lists</li>
  <li className='flex justify-start items-center gap-3 w-fit px-4  py-2 hover: rounded-full hover:cursor-pointer hover:bg-gray-900'><FaRegBookmark />Bookmarks</li>
  <li className='flex justify-start items-center gap-3 w-fit px-4  py-2 hover: rounded-full hover:cursor-pointer hover:bg-gray-900'><LuUsers2/>Communities</li>
  <li className='flex justify-start items-center gap-3 w-fit px-4  py-2 hover: rounded-full hover:cursor-pointer hover:bg-gray-900'>  <svg viewBox="0 0 24 24" aria-hidden="true" class="invert w-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-k200y r-1nao33i r-5sfk15 r-kzbkwu"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>Premium</li>
  <li className='flex justify-start items-center gap-3 w-fit px-4  py-2 hover: rounded-full hover:cursor-pointer hover:bg-gray-900'><FaRegUser />Profile</li>
  <li className='flex justify-start items-center gap-3 w-fit px-4  py-2 hover: rounded-full hover:cursor-pointer hover:bg-gray-900'><CiCircleMore />More</li>
</ul>
      </div>
     </div>
    <div className="second w-full border border-x-gray-500 border-y-0 mx-6">i</div>
    <div className="third w-full">
      
    </div>
   </div>
  )
}

export default App