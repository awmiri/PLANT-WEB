import React from 'react'
import { Link } from 'react-router'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center -mt-14 sm:-mt-24 text-center'>
            <img src="./image/404_img/20824299_6373666 1.png" alt="" className='mx-auto' />
            <div className='-mt-9'>
                <h2 className='mb-6 font-vazirMediom text-base sm:text-xl'>صفحه مورد نظر شما یافت نشد!</h2>
                <Link to={'/'} className='px-1.5 sm:px-4 py-2 sm:py-3 border-2 border-hightGreen text-hightGreen rounded-xl font-vazirMediom text-sm sm:text-lg hover:bg-hightGreen hover:border-0 hover:text-white'>بازگشت به صفحه اصلی</Link>
            </div>
        </div>
    )
}
