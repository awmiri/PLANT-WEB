import React, { useRef, useState } from 'react'
import { Link } from 'react-router'
import './UserProfile.css'

export default function UserProfile() {
    const [focusesName, setFocusesName] = useState(false)
    const [focusesLastName, setFocusesLastName] = useState(false)
    const [focussAddress, setfocussAddress] = useState(false)
    const [focussHomenumber, setfocussHomenumber] = useState(false)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setaddress] = useState('')
    const [homenumber, sethomenumber] = useState('')
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user);

    const fileRef = useRef();
    const [image, setImage] = useState(null);
    const handleUpload = (e) => {

        const file = e.target.files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        console.log("✅ تصویر انتخاب شد:", url);
        setImage(url);
    };
    const removeImage = () => {
        setImage(null);
        fileRef.current.value = null;
    };
    const FormSubmitHandler = () => {


    };


    return (
        // all content
        <div className='flex -mt-16'>
            {/* // list profile */}
            <div className='p-6 flex flex-col justify-between h-dvh border-l-2 border-customgray2'>
                <div className='flex flex-col gap-12'>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full w-[60px] h-[60px] flex items-center justify-center'>
                            {
                                user ? (<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                ) : (<img src={user.img} />)
                            }
                        </div>
                        <div>
                            <span>{user.name + user.lastname}</span>
                            <span className='font-vazirLight text-customgray3'>{user.phonenumber}</span>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li className='flex items-center gap-2 py-3 px-[15px] active font-vazirMediom text-customgray4'>
                                <span>
                                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                                مشخصات حساب کاربری
                            </li>
                            <li className='flex items-center gap-2 py-3 px-[15px] font-vazirMediom text-customgray4'>
                                <span>
                                    <svg
                                        className="size-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C10.8954 2 10 2.89543 10 4V5H6.4C5.07452 5 4 6.07452 4 7.4V20.6C4 21.9255 5.07452 23 6.4 23H17.6C18.9255 23 20 21.9255 20 20.6V7.4C20 6.07452 18.9255 5 17.6 5H14V4C14 2.89543 13.1046 2 12 2ZM12 7C11.4477 7 11 6.55228 11 6V4H13V6C13 6.55228 12.5523 7 12 7ZM6.4 7H17.6C17.8209 7 18 7.17909 18 7.4V10H6V7.4C6 7.17909 6.17909 7 6.4 7ZM6 20.6V12H18V20.6C18 20.8209 17.8209 21 17.6 21H6.4C6.17909 21 6 20.8209 6 20.6ZM11 16V14H13V16H15V18H13V20H11V18H9V16H11Z"
                                        />
                                    </svg>
                                </span>
                                مشاوره با گیاه پزشک
                            </li>
                            <li className='flex items-center gap-2 py-3 px-[15px] font-vazirMediom text-customgray4'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                                پیام های دریافتی
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className='flex items-center bg-customRedLight text-customRedBright p-3.5 rounded-lg text-nowrap'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    </span>
                    خروج از حساب کاربری
                </Link>
            </div>
            {/* profile main content */}
            <div className='mt-10 pr-6 w-full'>
                <h2 className='mb-4'>مشخصات حساب کاربری</h2>
                <form action="" onClick={FormSubmitHandler} className='border w-full p-6'>
                    <div className='flex items-center gap-4'>
                        <div className='w-20 h-20'>
                            {image ? (
                                <img src={image} className="w-20 h-20 rounded-full object-cover border" />) : (
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-20 h-20">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                            )
                            }
                        </div>
                        <div className='flex items-center gap-3'>
                            <button type='button' onClick={() => fileRef.current.click()} className="bg-hightGreen text-white px-4 py-2 rounded-xl">
                                ویرایش با تصویر جدید
                            </button>
                            <button type='button' onClick={removeImage} className="bg-[#F6F6F6] border border-hightGreen text-hightGreen px-4 py-2 rounded-xl font-vazirMediom">
                                حذف تصویر
                            </button>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileRef}
                                onChange={handleUpload}
                                className="hidden"
                            />
                        </div>

                    </div>
                    <div className='flex items-center w-full gap-6 flex-wrap mt-7'>
                        <div className='flex gap-6 w-full'>
                            <div className={`border-2 ${!focusesName ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                                {/* // mobile svg */}
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${!focusesName ? 'text-customgray3' : 'text-hightGreen'} transition`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>

                                {/* // input label with animation */}
                                <label htmlFor="" className={`absolute bg-white ${!focusesName ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>تام</label>
                                {/* // input number */}
                                <input type="tel" dir='rtl' className='w-full outline-0' onFocus={() => { setFocusesName(true) }} onBlur={() => { if (name.trim() === "") { setFocusesName(false) } }} value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className={`border-2 ${!focusesLastName ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                                {/* // mobile svg */}
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${!focusesLastName ? 'text-customgray3' : 'text-hightGreen'} transition`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                                {/* // input label with animation */}
                                <label htmlFor="" className={`absolute bg-white ${!focusesLastName ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>نام خانوادگی</label>
                                {/* // input number */}
                                <input type="tel" dir='rtl' className='w-full outline-0' onFocus={() => { setFocusesLastName(true) }} onBlur={() => { if (lastName.trim() === "") { setFocusesLastName(false) } }} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className='flex gap-6 w-full'>
                            <div className={`border-2  border-customgray3 rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                                {/* // mobile svg */}
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 'text-customgray3 transition`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                                {/* // input number */}
                                <input type="tel" dir='rtl' className='w-full outline-0' value={user.phonenumber} unselectable='on' />
                            </div>
                            <div className={`border-2 border-customgray3 rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                                {/* // mobile svg */}
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-customgray3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                {/* // input number */}
                                <input type="tel" dir='rtl' className='w-full outline-0' value={user.email} unselectable='on' />
                            </div>
                        </div>
                        <div className='flex gap-6 w-full'>
                            <div className={`border-2 ${!focussAddress ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                                {/* // mobile svg */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${!focussAddress ? 'text-customgray3' : 'text-hightGreen'} transition`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                                </svg>
                                {/* // input label with animation */}
                                <label htmlFor="" className={`absolute bg-white ${!focussAddress ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>ادرس منزل</label>
                                {/* // input number */}
                                <input type="tel" dir='rtl' className='w-full outline-0' onFocus={() => { setfocussAddress(true) }} onBlur={() => { if (address.trim() === "") { setfocussAddress(false) } }} value={address} onChange={(e) => setaddress(e.target.value)} />
                            </div>
                            <div className={`border-2 ${!focussHomenumber ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                                {/* // mobile svg */}

                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${!focussHomenumber ? 'text-customgray3' : 'text-hightGreen'} transition`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>

                                {/* // input label with animation */}
                                <label htmlFor="" className={`absolute bg-white ${!focussHomenumber ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>تلفن منزل</label>
                                {/* // input number */}
                                <input type="tel" dir='rtl' className='w-full outline-0' onFocus={() => { setfocussHomenumber(true) }} onBlur={() => { if (homenumber.trim() === "") { setfocussHomenumber(false) } }} value={homenumber} onChange={(e) => sethomenumber(e.target.value)} />
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div >
    )
}
