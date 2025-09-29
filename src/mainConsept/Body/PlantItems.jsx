import React from 'react'
import { Link } from 'react-router'
import './PlantItems.css'

// in generally this function lead to create items section
export default function PlantItems({ data }) {
    return (
        <>
            {/* //plants title */}
            <h2 className='font-vazirBold text-[22px] text-hightGreen'>{data[0].categoriFn}</h2>
            {/* //plants content */}
            <div className='flex items-center justify-between  gap-4 md:gap-6 shrink-0 overflow-x-auto scrollbar-hide mb-36 relative'>
                {/* //get all of items from item obj*/}
                {
                    data.map((item) => (
                        <div key={item.id} className='border border-customgray p-4 rounded-xl mt-6 min-w-[226px] md:min-w-[288px]'>
                            {/* item img */}
                            <img src={item.img[0]} alt="" className='w-[250px] h-[250px]' />
                            {/* // item price */}
                            <div className='w-full'>
                                <h3 className='mt-6 font-vazirMediom text-lg text-customBlack'>{item.name}</h3>
                                <div className='flex items-center justify-between mt-2.5'>
                                    <span className='text-sm font-vazirMediom text-customBlack'>قیمت:</span>
                                    <span className='text-customBlack font-vazirMediom'>{item.price.toLocaleString('fa-IR')} تومان</span>
                                </div>
                                {/* show information btn */}
                                <Link to={`/iteminfo/${item.categoriEn}/${item.id}`} className='bg-hightGreen block rounded-lg mt-5 text-center text-white p-2 w-full'>مشاهده  بیشتر</Link>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}
