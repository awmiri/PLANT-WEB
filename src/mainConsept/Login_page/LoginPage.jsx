import React, { useState } from 'react'
import { useNavigate } from 'react-router'



export default function LoginPage() {

    const [focusesLoginMobile, setFfocusesLogin] = useState(false)
    const [focusesLoginPassword, setfocusesLoginPassword] = useState(false)
    const [Mobile, setMobile] = useState("")
    const [GetPassword, setGetPassword] = useState("")
    const [showloginPassword, setShowloginPassword] = useState(false)
    const [isPasswordCurrect, setisPasswordCurrect] = useState(false)
    const [showErrPassword, setshowErrPassword] = useState(false)
    const [wrongPhone, setwrongPhone] = useState(true)
    const navigate = useNavigate()


    const loginSubmitHandler = (e) => {
        e.preventDefault()
        setshowErrPassword(true)
        fetch(`https://xeybfyeppnzqsirbngwv.supabase.co/rest/v1/user?phonenumber=eq.${encodeURIComponent(Mobile)}`, {
            method: 'GET',
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleWJmeWVwcG56cXNpcmJuZ3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0NjQwMzAsImV4cCI6MjA2ODA0MDAzMH0.Ej3w1QqhnR2XwmsTNhV59iDBKEFsz-Npzfg99-5paio',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleWJmeWVwcG56cXNpcmJuZ3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0NjQwMzAsImV4cCI6MjA2ODA0MDAzMH0.Ej3w1QqhnR2XwmsTNhV59iDBKEFsz-Npzfg99-5paio',
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            }
        })
            .then(res => res.json())
            .then(data => {
                const user = data[0]

                if (!user) {

                    setwrongPhone(false)
                    setTimeout(() => {
                        setshowErrPassword(false)
                    }, 3000)
                    return
                }

                setwrongPhone(true)

                if (user.password !== GetPassword) {
                    setisPasswordCurrect(false)
                } else {
                    setisPasswordCurrect(true)
                    localStorage.setItem('user', JSON.stringify(user))
                    setTimeout(() => {
                        navigate('/')
                    }, 2000)
                }


            })
            .catch()
            .finally(() => {
                setTimeout(() => {
                    setshowErrPassword(false);
                }, 3000);
            })
        setMobile('')
        setGetPassword('')
    }

    return (
        <>
            {/* // open Modal  */}
            <div className={`absolute top-7 right-7 ${showErrPassword ? 'block' : 'hidden'}`}>
                {/* // phone wrong number Modal  */}
                {
                    !wrongPhone && (
                        <p className={`bg-red-700 p-6 rounded-xl text-white ${!wrongPhone ? 'block' : 'hidden'}`}>لطفا شماره تلقن خود را درست وارد کتید</p>
                    )
                }
                {/* // Modal check password */}
                {
                    !isPasswordCurrect && wrongPhone && (
                        <p className={`bg-red-700 p-6 rounded-xl text-white ${!isPasswordCurrect ? 'block' : 'hidden'}`}>لطقا پسورد خود را درست وارد کنید</p>
                    )
                }

                {
                    isPasswordCurrect && wrongPhone && (
                        <p className={`bg-hightGreen p-6 rounded-xl text-white ${isPasswordCurrect ? 'block' : 'hidden'}`}>خوش امدید😎, ورود موفقیت امیز بود</p>
                    )

                }

            </div>
            {/* // form title */}
            <h2 className='text-customBlack font-vazirBold  mb-6 higherSM:mb-8 text-xl'>ثبت نام</h2>
            <form action="" className='w-full flex flex-col gap-4 higherSM:gap-6' onSubmit={loginSubmitHandler}>
                {/* // mobile number input section */}
                <div className={`border-2 ${!focusesLoginMobile ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                    {/* // mobile svg */}
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${!focusesLoginMobile ? 'text-customgray3' : 'text-hightGreen'} transition`}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    {/* // input label with animation */}
                    <label htmlFor="" className={`absolute bg-white ${!focusesLoginMobile ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>شماره موبایل</label>
                    {/* // input number */}
                    <input type="tel" dir='rtl' className='w-full outline-0' onFocus={() => { setFfocusesLogin(true) }} onBlur={() => { if (Mobile.trim() === "") { setFfocusesLogin(false) } }} value={Mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                {/* // password input section */}
                <div className={`border-2 ${!focusesLoginPassword ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                    {/* // animation label for password */}
                    <label htmlFor="" className={`absolute bg-white ${!focusesLoginPassword ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>تعریف رمز عبور</label>
                    {/* // container for password icon and password input */}
                    <div className='w-full flex items-center'>
                        {/* // svg password icon */}
                        <svg viewBox="0 0 23 23" fill="none" className={`size-6 ${!focusesLoginPassword ? 'fill-customgray3' : 'fill-hightGreen'} transition`}>
                            <path d="M19.4063 9.66667H11.7522C11.0005 7.53083 8.9655 6 6.573 6C3.53883 6 1.073 8.46583 1.073 11.5C1.073 14.5342 3.53883 17 6.573 17C8.9655 17 11.0005 15.4692 11.7522 13.3333H12.073L13.9063 15.1667L15.7397 13.3333L17.573 15.1667L21.2397 11.4633L19.4063 9.66667ZM6.573 14.25C5.0605 14.25 3.823 13.0125 3.823 11.5C3.823 9.9875 5.0605 8.75 6.573 8.75C8.0855 8.75 9.323 9.9875 9.323 11.5C9.323 13.0125 8.0855 14.25 6.573 14.25Z" />
                        </svg>
                        {/* // password input */}
                        <input type={showloginPassword ? 'text' : 'password'} className='w-full outline-0 ' onFocus={() => { setfocusesLoginPassword(true) }} onBlur={() => { if (GetPassword.trim() === "") { setfocusesLoginPassword(false) } }} value={GetPassword} onChange={(e) => setGetPassword(e.target.value)} />
                    </div>
                    {/* // eye svg */}
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" onClick={() => { setShowloginPassword(prev => (!prev)) }}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>

                </div>
                {/* // form button */}
                <button className='bg-hightGreen py-3 text-white rounded-xl font-vazirMediom cursor-pointer' >ورود</button>
                {/* // change content between login and Signup */}
                <p className='text-center font-vazirMediom'>حساب کاربری ندارید<a href="" className='text-hightGreen' >ثبت نام </a>کنید</p>

            </form>
        </>
    )
}
