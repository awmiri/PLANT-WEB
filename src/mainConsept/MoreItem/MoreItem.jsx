import React from 'react'
import { Link } from 'react-router';
import "./MoreItem.css"

export default function MoreItem({ data }) {

    return (
        <div className='flex items-center justify-between flex-nowrap gap-6 overflow-x-scroll  xl:overscroll-none'>
            {
                data.map((item) => (
                    <div className='min-w-[280px] h-[240px]  relative rounded-[8px] overflow-hidden'>
                        <img src={item.img[0]} alt="" className='w-[280px] h-[240px]' />
                        <div className='bg-black/50 absolute z-10 w-full h-full top-0'></div>
                        <div className='absolute top-[150px] right-2 xl:right-5 z-50'>
                            <h3 className='text-white  text-sm xl:text-base font-vazirBold'>{item.name}</h3>
                            <Link to={`iteminfo/${item.categoriEn}/${item.id}`} className='relative z-10 group overflow-hidden flex items-center justify-center gap-1 mt-1.5 border border-white px-2 py-1.5 rounded-lg'>
                                <span className='flex items-center text-white group-hover:text-black font-vazirMediom text-[13px] xl:text-sm transition duration-200'>
                                    <span>خرید</span>
                                    <span>{item.name}</span>
                                </span>
                                <span className='text-white group-hover:text-black transition duration-200'>
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                                </span>
                                <span className='bg-white absolute -z-10 w-full h-full translate-x-48 group-hover:translate-0 transition duration-200'></span>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
