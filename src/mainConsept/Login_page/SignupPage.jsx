import React, { useState } from 'react'
import './login.css'


export default function SignupPage() {
    const [focusesMobile, setFocusesMobile] = useState(false)
    const [focusesEmail, setFocusesEmail] = useState(false)
    const [focusesPassword, setFocusesPassword] = useState(false)
    const [focusesRePass, setFocusesRepass] = useState(false)
    const [Mobile, setMobile] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [RePass, setRepass] = useState("")
    return (
        <>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div className='w-[540px] h-[485px] flex flex-col items-start justify-center'>
                    <h2 className='text-customBlack font-vazirBold mb-8 text-xl'>ثبت نام</h2>
                    <form action="" className='w-full flex flex-col gap-6'>
                        <div className={`border-2 ${!focusesMobile ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${!focusesMobile ? 'text-customgray3' : 'text-hightGreen'} transition`}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            <label htmlFor="" className={`absolute bg-white ${!focusesMobile ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>شماره موبایل</label>
                            <input type="number" className='w-full outline-0' onFocus={() => { setFocusesMobile(true) }} onBlur={() => { if (Mobile.trim() === "") { setFocusesMobile(false) } }} value={Mobile} onChange={(e) => setMobile(e.target.value)} />
                        </div>
                        <div className={`border-2 ${!focusesEmail ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${!focusesEmail ? 'text-customgray3' : 'text-hightGreen'} transition`}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            <label htmlFor="" className={`absolute bg-white ${!focusesEmail ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>ایمیل</label>
                            <input type="email" className='w-full outline-0 ' onFocus={() => { setFocusesEmail(true) }} onBlur={() => { if (Email.trim() === "") { setFocusesEmail(false) } }} value={Email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={`border-2 ${!focusesPassword ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                            <label htmlFor="" className={`absolute bg-white ${!focusesPassword ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>تعریف رمز عبور</label>
                            <div className='w-full flex items-center'>
                                <svg viewBox="0 0 23 23" fill="none" className={`size-6 ${!focusesPassword ? 'fill-customgray3' : 'fill-hightGreen'} transition`}>
                                    <path d="M19.4063 9.66667H11.7522C11.0005 7.53083 8.9655 6 6.573 6C3.53883 6 1.073 8.46583 1.073 11.5C1.073 14.5342 3.53883 17 6.573 17C8.9655 17 11.0005 15.4692 11.7522 13.3333H12.073L13.9063 15.1667L15.7397 13.3333L17.573 15.1667L21.2397 11.4633L19.4063 9.66667ZM6.573 14.25C5.0605 14.25 3.823 13.0125 3.823 11.5C3.823 9.9875 5.0605 8.75 6.573 8.75C8.0855 8.75 9.323 9.9875 9.323 11.5C9.323 13.0125 8.0855 14.25 6.573 14.25Z" />
                                </svg>
                                <input type="password" className='w-full outline-0 ' onFocus={() => { setFocusesPassword(true) }} onBlur={() => { if (Password.trim() === "") { setFocusesPassword(false) } }} value={Password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        </div>
                        <div className={`border-2 ${!focusesPassword ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                            <label htmlFor="" className={`absolute bg-white ${!focusesRePass ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>تکرار رمز عبور</label>
                            <div className='w-full flex items-center'>
                                <svg viewBox="0 0 23 23" fill="none" className={`size-6 ${!focusesRePass ? 'fill-customgray3' : 'fill-hightGreen'} transition`}>
                                    <path d="M19.4063 9.66667H11.7522C11.0005 7.53083 8.9655 6 6.573 6C3.53883 6 1.073 8.46583 1.073 11.5C1.073 14.5342 3.53883 17 6.573 17C8.9655 17 11.0005 15.4692 11.7522 13.3333H12.073L13.9063 15.1667L15.7397 13.3333L17.573 15.1667L21.2397 11.4633L19.4063 9.66667ZM6.573 14.25C5.0605 14.25 3.823 13.0125 3.823 11.5C3.823 9.9875 5.0605 8.75 6.573 8.75C8.0855 8.75 9.323 9.9875 9.323 11.5C9.323 13.0125 8.0855 14.25 6.573 14.25Z" />
                                </svg>
                                <input type="password" className='w-full outline-0 ' onFocus={() => { setFocusesRepass(true) }} onBlur={() => { if (RePass.trim() === "") { setFocusesRepass(false) } }} value={RePass} onChange={(e) => setRepass(e.target.value)} />
                            </div>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        </div>
                        <div>
                            {
                                focusesRePass && (
                                    Password === RePass ? <p className="text-hightGreen text-sm -mt-5">یکسان</p> : <p className="text-red-500 text-sm -mt-5">یکسان نیستن</p>
                                )
                            }
                        </div>

                        <button className='bg-hightGreen py-3 text-white rounded-xl font-vazirMediom cursor-pointer'>ثبت نام</button>

                        <p className='text-center font-vazirMediom'>حساب کاربری دارید؟<a href="" className='text-hightGreen'>ورود</a>کنید</p>

                    </form>
                </div >
            </div >
            <img src="./image/loginimg/loginpic.png" alt="" className="max-w-full max-h-full object-contain" />
        </>
    )
}
