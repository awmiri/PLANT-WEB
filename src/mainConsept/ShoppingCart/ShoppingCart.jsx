import React from 'react'
import { Link } from 'react-router';
import useUserLogin from '../../userLogin';
import UserBasket from '../../basket';

export default function ShoppingCart() {
    const userLogin = useUserLogin()

    return (
        <>
            <p className='flex items-center gap-1.5 text-hightGreen font-vazirMediom text-sm sm:text-lg -mt-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                خانه  <span className='text-customgray3'>&gt;</span>  سبد خرید
            </p>
            {
                !userLogin ? (
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-lg font-vazirBold mt-36'>برای استفاده از این بخش، باید اول وارد حساب کاربری‌ت بشی 😊</p>
                        <p className='font-vazirMediom  mt-3'>لطفاً وارد شو تا ادامه بدیم.</p>
                        <Link to={'/'} className='flex items-center gap-1.5 border border-hightGreen rounded-xl py-3 px-4 text-hightGreen font-vazirMediom mt-10 hover:text-white hover:bg-hightGreen transition'>
                            بازگشت به صفحه اصلی
                            <svg viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                            </svg>

                        </Link>

                    </div>
                ) : (
                    UserBasket.length === 0 ? (
                        <div className='flex flex-col items-center justify-center mt-20'>
                            <img src="image/basket/Group.png" alt="" />
                            <div className='flex flex-col items-center mt-10 text-center'>
                                <h1 className='font-vazirBold text-base sm:text-xl'>سبد خرید شما خالی می باشد!</h1>
                                <p className='mt-2.5 font-vazirMediom text-base sm:text-xl max-w-[360px] sm:w-[400px]'>می توانید برای مشاهده بیشتر محصولات به صفحه اصلی بروید</p>
                                <Link to={'/'} className='flex items-center gap-1.5 border border-hightGreen rounded-xl py-3 px-4 text-hightGreen font-vazirMediom mt-10 hover:text-white hover:bg-hightGreen transition'>
                                    بازگشت به صفحه اصلی
                                    <svg viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div>lllll</div>
                    )
                )

            }
        </>
    )
}
