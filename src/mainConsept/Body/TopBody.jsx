import React from 'react'

export default function TopBody() {
    return (
        <div className='flex-col-reverse sm:flex-row flex  items-center gap-14 md:justify-between'>
            <div className='w-full sm:w-1/2 text-center sm:text-start'>
                <h1 className='text-2xl bigXl:text-4xl font-vazirBold mb-8'>خرید راحت گیاه،با  <span className='text-hightGreen ' >گیاه لند! </span></h1>
                <p className='font-vazirMediom text-base bigXl:text-xl/[180%] w-full sm:w-64 md:w-96 bigXl:w-[555px] mb-8 '>با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره بگیری.</p>
                <div className='flex items-center justify-start sm:justify-between gap-2 w-full  sm:w-64  md:w-96 bigXl:w-[555px] sm:flex-wrap md:flex-nowrap'>
                    <button className='text-sm bigXl:text-base bg-hightGreen text-white py-3 px-5 md:px-8 bigXl:px-16 rounded-xl hover:border-dashed hover:border-2 hover:bg-white hover:text-hightGreen transition text-nowrap w-full'>گیاهان تخفیف دار</button>
                    <button className='text-sm bigXl:text-base flex items-center justify-center gap-2 text-hightGreen border-2 border-dashed py-3 px-4 md:px-8 bigXl:px-16 rounded-xl hover:border-solid hover:bg-hightGreen hover:text-white transition text-nowrap w-full' >
                        مشاوره با گیاه پزشک
                        <span>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>

                        </span>
                    </button>
                </div>
                <div className='mt-11 flex items-center justify-between w-full sm:w-96 bigXl:w-[555px] '>
                    <span className='text-right'>
                        <h4 className='font-vazirMediom text-3xl/[140%] text-[#294F36]'>۹۴۳+</h4>
                        <p className='font-vazirLight text-xl text-[#21402B]'> گیاه خانگی</p>
                    </span>
                    <span className='text-right'>
                        <h4 className='font-vazirMediom text-3xl/[140%] text-[#294F36]'>۲۳۴+</h4>
                        <p className='font-vazirLight text-xl text-[#21402B]'>گیاه تزئینی </p>
                    </span>
                    <span className='text-right'>
                        <h4 className='font-vazirMediom text-3xl/[140%] text-[#294F36]'>۱۲۸+</h4>
                        <p className='font-vazirLight text-xl text-[#21402B]'> گیاه کادویی</p>
                    </span>
                </div>
            </div>
            <div className='grow'>
                <img src="./image/heade img/Vector 1.png" alt="" className='hidden sm:block' />
                <img src="./image/heade img/Ellipse 14.png" alt="" className='sm:hidden block' />
            </div>
        </div>

    )
}
