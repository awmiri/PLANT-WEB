import React from 'react'

function OurService({ data }) {
    return (
        <>
            <h3 className=' mb-5 text-xl font-vazirBold text-[#417F56]'>خدمات گیاه پزشکی </h3>
            <div className='grid grid-cols- smallerSM:grid-cols-2 lg:grid-cols-4 gap-5 items-center'>
                {data.map((item) => (
                    <div key={item.id} className='flex items-center gap-1.5'>
                        <div className='bg-[#E5F2E9] w-[54px] xl:w-[60px] h-[54px] xl:h-[60px] flex items-center justify-center rounded-full'>
                            <img src={`${item.img}`} alt="" className='w-[24px] xl:w-[32px] h-[24px] xl:h-[32px]' />
                        </div>
                        <div className='flex flex-col items-start gap-1 '>
                            <span className='font-vazirBold text-base smallerSM:text-sm xl:text-base'>{item.title}</span>
                            <span className='text-sm smallerSM:text-[9px] xl:text-xs text-[#353535] w-[250px] smallerSM:w-[140px] xl:w-[200px] font-vazirLight text-justify'>{item.content}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default OurService