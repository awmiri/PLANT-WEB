import React from 'react'
import { useParams } from 'react-router'
import apartmentPlant from '../../product';

export default function ItemInfo() {
    let { category, id } = useParams()
    console.log(category);
    console.log(id);
    let allPlant = [...apartmentPlant]
    let findCategory = allPlant.filter((item) => item.categoriEn === category)
    let getSpeshialItem = findCategory.find(item => item.id === +id)


    return (
        <>
            <p className='flex items-center gap-1.5 text-hightGreen font-vazirMediom text-sm sm:text-lg -mt-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>خانه <span className='text-customgray3'>&gt;</span> {getSpeshialItem.categoriFn} <span className='text-customgray3'>&gt;</span> <span className='text-customgray3'>{getSpeshialItem.name}</span>
            </p>
            <div className='flex items-center gap-20 mt-20'>
                <div className='w-[430px] h-[460px] flex items-center justify-center'>
                    <img src={getSpeshialItem.img} alt="" />
                </div>
                <div className='flex flex-col items-start w-[438px]'>
                    <p className='text-hightGreen font-vazirMediom'>{getSpeshialItem.categoriFn}</p>
                    <h3 className='text-customBlack2 font-vazirBold text-lg mb-3'>{getSpeshialItem.name}</h3>
                    <div className='border-t border-t-customgray5 w-full '>
                        <h2 className='font-vazirBold mt-3 mb-2'>ویژگی ها</h2>
                        <div className='flex flex-wrap gap-6'>
                            <div className='bg-customgray2 py-1.5 px-3 w-[200px] rounded-md'>
                                <h3 className='font-vazirMediom text-sm'>جنس گلدان</h3>
                                <p className='font-vazirLight te'>{getSpeshialItem.property.vaseMt}</p>
                            </div>
                            <div className='bg-customgray2 py-1.5 px-3 w-[200px] rounded-md'>
                                <h3 className='font-vazirMediom text-sm'>خاک گیاه</h3>
                                <p className='font-vazirLight te'>{getSpeshialItem.property.sol}</p>
                            </div>
                            <div className='bg-customgray2 py-1.5 px-3 w-[200px] rounded-md'>
                                <h3 className='font-vazirMediom text-sm'>وزن</h3>
                                <p className='font-vazirLight te'>{getSpeshialItem.property.wight}</p>
                            </div>
                            <div className='bg-customgray2 py-1.5 px-3 w-[200px] rounded-md'>
                                <h3 className='font-vazirMediom text-sm'>ابعاد</h3>
                                <p className='font-vazirLight te'>{getSpeshialItem.property.size}</p>
                            </div>
                            <div className='bg-customgray2 py-1.5 px-3 w-[200px] rounded-md'>
                                <h3 className='font-vazirMediom text-sm'>وضعیت نسبت به آفتاب</h3>
                                <p className='font-vazirLight te'>{getSpeshialItem.property.sunLike}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-6 py-8 border border-customgray5 rounded-2xl w-[312px] text-customBlack2'>
                    <div className='border-b border-b-customgray5'>
                        <p className='mb-6 font-vazirMediom'>فروشنده</p>
                        <div className='flex'>
                            <span className='flex gap-1.5 border-l pl-2 font-vazirLight text-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                </svg>{getSpeshialItem.sender}
                            </span>
                            <span className='pr-2 font-vazirBold'>عملکرد {
                                getSpeshialItem.performance > 3.5 ? (
                                    <span className='text-hightGreen'>عالی</span>
                                ) : (
                                    <span className='text-red-700'>ضعیف</span>
                                )
                            }</span>
                        </div>
                        <p className='mt-6 mb-5 font-vazirMediom text-sm'>{getSpeshialItem.performance.toLocaleString('fa-IR')}</p>
                    </div>
                    <div className='mt-6 mb-4 flex items-center justify-between'>
                        <span className='text-sm font-vazirMediom text-customBlack'>قیمت:</span>
                        <span className='text-customBlack font-vazirMediom'>{getSpeshialItem.price.toLocaleString('fa-IR')} تومان</span>
                    </div>
                    <button className='bg-hightGreen text-white w-full p-2 rounded-xl font-vazirMediom text-lg'>افزودن به سبد خرید</button>
                </div>
            </div>
        </>
    )
}
