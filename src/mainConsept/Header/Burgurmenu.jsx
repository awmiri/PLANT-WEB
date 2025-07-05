import React from 'react'
import './Burgurmenu.css'

export default function Burgurmenu({ isOpen, setOpenMenu }) {
    let closeBarHandler = () => {
        setOpenMenu(false)
    }
    return (
        <div className={`absolute right-0  bg-customgray2 ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-lg top-0 bottom-0 p-5 w-52 flex justify-between transition`}>
            <ul className='text-customBlack flex flex-col  gap-4 lg:gap-8 '>
                <a className='text-hightGreen font-bold text-xl lg:text-2xl font-vazirBold cursor-pointer custom-animation'>گیاه لند</a>
                <li className='font-vazirMediom text-sm lg:text-lg hover:text-hightGreen transition custom-animation'>صفحه اصلی</li>
                <li className='font-vazirMediom text-sm lg:text-lg hover:text-hightGreen transition custom-animation'>گیاه پزشک</li>
                <li className='font-vazirMediom text-sm lg:text-lg hover:text-hightGreen transition custom-animation'>وبلاگ</li>
                <li className='font-vazirMediom text-sm lg:text-lg hover:text-hightGreen transition custom-animation'>تماس با ما</li>
                <li className='font-vazirMediom text-sm lg:text-lg hover:text-hightGreen transition custom-animation'>درباره ما</li>
            </ul>
            <svg viewBox="0 0 24 24" fill="currentColor" class="size-6" onClick={closeBarHandler}>
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>

        </div>
    )
}
