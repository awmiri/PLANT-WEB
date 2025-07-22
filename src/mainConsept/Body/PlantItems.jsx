import React from 'react'
import './PlantItems.css'

export default function PlantItems({ data }) {
    return (
        <>
            <h2 className='font-vazirBold text-[22px] text-hightGreen'>{data[0].categoriFn}</h2>
            <div className='flex items-center justify-between gap-4 md:gap-6 shrink-0 overflow-x-auto scrollbar-hide mb-36 relative'>
                {
                    data.map((item) => (
                        <div key={item.id} className='border border-customgray p-4 rounded-xl mt-6 min-w-[226px] md:min-w-[288px]'>
                            <img src={item.img} alt="" />
                            <div className='w-full'>
                                <h3 className='mt-6 font-vazirMediom text-lg text-customBlack'>{item.name}</h3>
                                <div className='flex items-center justify-between mt-2.5'>
                                    <span className='text-sm font-vazirMediom text-customBlack'>قیمت:</span>
                                    <span className='text-customBlack font-vazirMediom'>{item.price.toLocaleString('fa-IR')} تومان</span>
                                </div>
                                <a href="" className='bg-hightGreen block rounded-lg mt-5 text-center text-white p-2 w-full'>مشاهده  بیشتر</a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}
