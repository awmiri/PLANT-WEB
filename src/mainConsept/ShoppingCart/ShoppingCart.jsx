import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import useUserLogin from '../../userLogin';
import getUserBasket from '../../basket';


export default function ShoppingCart() {
    const userLogin = useUserLogin()
    const [basket, setBasket] = useState([])
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const UserBasket = getUserBasket()
        setBasket(UserBasket)
    }, [])

    useEffect(() => {
        let priceTOtal = 0;
        basket.forEach((item) => {
            priceTOtal += (item.price * item.cunt)
        })
        setPrice(priceTOtal);
    }, [basket])

    useEffect(() => {
        let countItem = 0;
        basket.forEach((item) => {
            countItem += item.cunt
        })
        setCount(countItem);
    }, [basket])
    let incriseHandler = (id) => {
        const updatebasket = basket.map(item => {

            if (item.id === id) {
                return { ...item, cunt: item.cunt + 1 }
            }
            return item
        })
        setBasket(updatebasket)
        const user = JSON.parse(localStorage.getItem('user'));
        user.card = updatebasket;
        localStorage.setItem('user', JSON.stringify(user));
    }
    let removeitemHandler = (id) => {
        const updatebasket = basket.filter(item => {
            return item.id !== id
        })
        setBasket(updatebasket)
        const user = JSON.parse(localStorage.getItem('user'));
        user.card = updatebasket;
        localStorage.setItem('user', JSON.stringify(user));
    }

    return (
        <>
            <p className='flex items-center gap-1.5 text-hightGreen font-vazirMediom text-sm sm:text-lg -mt-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                خانه  <span className='text-customgray3'>&gt;</span>  <span className='text-customgray3'>سبد خرید</span>
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
                    basket.length === 0 ? (
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
                        <div className='mt-20 flex items-center justify-between'>
                            <div className='border border-customgray6 px-6 py-9 w-[800px]  rounded-2xl'>
                                <h4>سبد خرید شما</h4>
                                <div className='mt-12 h-[200px] flex flex-col gap-8 overflow-auto'>
                                    {basket.map((item) => (
                                        <div className='flex items-center border-b pb-5'>
                                            <img src={item.img[0]} alt="" className='w-[160px]' />
                                            <div className='flex flex-col items-start gap-3 w-[180px] text-customBlack font-vazirLight'>
                                                <h3 className=' text-lg font-vazirBold'>{item.name}</h3>
                                                <p>{item.sender}</p>
                                                <span className='flex items-center gap-3.5'>
                                                    <span className='text-customBlack3'>قیمت:</span>
                                                    <span className='font-vazirMediom'>{item.price.toLocaleString('fa-IR')} تومان</span>
                                                </span>
                                                <div className='flex items-center gap-5 border border-customgray5 py-1.5 px-4 rounded-lg'>
                                                    <span className='text-hightGreen' onClick={() => incriseHandler(item.id)}>
                                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-6 cursor-pointer">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                        </svg>
                                                    </span>
                                                    <span className='flex flex-col items-center-safe text-customBlack2 font-vazirBold'>
                                                        <span>{item.cunt}</span>
                                                        <span>تعداد</span>
                                                    </span>
                                                    <span className='text-customRedBright' onClick={() => removeitemHandler(item.id)}>
                                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-6 cursor-pointer">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className='border border-customgray6 flex flex-col w-[300px] px-6 py-6 gap-7 rounded-2xl'>
                                <span className='w-full flex justify-between font-vazirMediom'>
                                    <span className='text-customBlack3'>تعداد گیاه:</span>
                                    <span className='text-customBlack text-lg'>{count.toLocaleString('fa-IR')}</span>
                                </span>
                                <span className='w-full flex justify-between font-vazirMediom'>
                                    <span className='text-customBlack3'>مجموع سبد خرید: </span>
                                    <span className='text-customBlack '>
                                        <span>{price.toLocaleString('fa-IR')} </span>
                                        <span>تومان</span>
                                    </span>
                                </span>
                                <span className='w-full flex justify-between font-vazirMediom'>
                                    <span className='text-customBlack3'>ارسال توسط:</span>
                                    <span className='text-customBlack text-lg'>گیاه لند</span>
                                </span>
                                <span className='w-full flex gap-1.5 font-vazirLight bg-customgray2 rounded-xl p-2 z '>
                                    <span className='text-customBlack3 text-nowrap'>کد تخفیف:</span>
                                    <span><input type="text" className=' outline-0 border-0 text-customgray7 text-sm' placeholder='کد تخفیف را وارد کنید ' /></span>
                                </span>
                                <button className='bg-hightGreen text-white py-2 rounded-xl font-vazirLight  '>سفارش و خرید</button>
                            </div>
                        </div>
                    )
                )

            }
        </>
    )
}
