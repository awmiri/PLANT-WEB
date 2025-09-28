import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        // footer content
        <div className='flex items-center justify-between py-6'>
            {/* right footer content */}
            <div>
                {/* top content about us */}
                <div className='w-[520px]'>
                    <h3 className='text-xl font-vazirBold text-[#417F56]'>گیاه لند</h3>
                    <p className='text-justify font-vazirMediom'>
                        گیاه لند سعی بر این دارد با ارائه خدمات نوین در حوزه فروش گیاهان باعث راحتی
                        شما در خرید انواع گیاه شود.تنوع گیاهان و همچنین ایجاد بستری مناسب برای مشاوره با گیاه پزشک از دیگر مزیت های گیاه لند میباشد.
                    </p>
                </div>
                {/* botton content about social media */}
                <div className='flex items-center justify-between w-[520px]'>
                    <div>
                        {/* phone */}
                        <span className='flex items-center gap-1 font-vazirMediomt'>
                            <p>تلفن پشتیبانی:</p>
                            <a href="tel:0212444">0212444</a>
                        </span>
                        {/* social media */}
                        <div className='mt-5 flex items-center gap-7'>
                            {/* linkedin */}
                            <button class="Btn">
                                <span class="svgContainer">
                                    <svg
                                        viewBox="0 0 448 512"
                                        height="1.6em"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="svgIcon"
                                        fill="white"
                                    >
                                        <path
                                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                                        ></path>
                                    </svg>
                                </span>
                                <span class="BG"></span>
                            </button>
                            {/* telegram */}
                            <button class="Btn-tel">
                                <span class="svgContainer-tel">
                                    <svg
                                        viewBox="0 0 496 512"
                                        height="1.6em"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                    >
                                        <path
                                            d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
                                            fill="white"
                                        ></path>
                                    </svg>
                                </span>
                                <span class="BG-tel"></span>
                            </button>

                        </div>
                    </div>
                    <div>
                        <img src="image/e-namad/e.png" alt="" />
                    </div>
                </div>
            </div>
            {/*  left footer content */}
            <div className='flex items-center gap-6'>
                {/* first item */}
                <ul className='font-vazirLight'>
                    <h4 className='font-vazirBold'>آپارتمانی</h4>
                    <li className='p-2'>بابا آدم</li>
                    <li className='p-2'>یوکا</li>
                    <li className='p-2'>سانسوریا</li>
                </ul>
                {/* second item */}
                <ul className='font-vazirLight'>
                    <h4 className='font-vazirBold'>تزئینی</h4>
                    <li className='p-2'>یشم</li>
                    <li className='p-2'>کراسولا</li>
                    <li className='p-2'>کراسولا خرفه ای</li>
                </ul>
                {/* third item */}
                <ul className='font-vazirLight'>
                    <h4 className='font-vazirBold'>کادویی</h4>
                    <li className='p-2'>آنتوریوم</li>
                    <li className='p-2'>بونسای</li>
                    <li className='p-2'>بنت قنسول</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer