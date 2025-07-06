import React from 'react'

export default function TopBody() {
    return (
        <div className='flex items-center justify-between '>
            <div className='w-1/2'>
                <h1 className='text-4xl font-vazirBold mb-8'>خرید راحت گیاه،با  <span className='text-hightGreen ' >گیاه لند! </span></h1>
                <p className='font-vazirMediom text-xl/[180%] w-[555px] mb-8'>با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره بگیری.</p>
                <div className='flex items-center justify-between  w-[555px]'>
                    <button className='bg-hightGreen text-white py-3 px-16 rounded-xl hover:border-dashed hover:border-2 hover:bg-white hover:text-hightGreen transition'>گیاهان تخفیف دار</button>
                    <button className='flex items-center gap-2 text-hightGreen border-2 border-dashed py-3 px-9 rounded-xl hover:border-solid hover:bg-hightGreen hover:text-white transition' >
                        مشاوره با گیاه پزشک
                        <span>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>

                        </span>
                    </button>
                </div>
                <div className='mt-11 flex items-center justify-between w-[555px]'>
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
            <div> <img src="./image/heade img/Vector 1.png" alt="" /></div>
        </div>

    )
}
