// import stats
import React, { useState, useEffect } from 'react'
import LoginPage from './LoginPage'
import { useNavigate } from 'react-router'
import './login.css'



export default function SignupPage() {
    // use focuse and blur hook for input
    const [focusesMobile, setFocusesMobile] = useState(false)
    const [focusesEmail, setFocusesEmail] = useState(false)
    const [focusesPassword, setFocusesPassword] = useState(false)
    const [focusesRePass, setFocusesRepass] = useState(false)
    // use  hook to get input value for fetch to database 
    const [Mobile, setMobile] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [RePass, setRepass] = useState("")
    // add show pass event for pass input
    const [showPassword, setShowPassword] = useState(false)
    const [showRePass, setShowRepass] = useState(false)
    // hook for animation on sign up dtn
    const [load, setLoad] = useState(false)
    // save user
    const [User, setUser] = useState()
    // show sign up modal
    const [status, setstatus] = useState(null)
    // use navigate hook for redirect us to the main menu
    const Navigate = useNavigate()
    // form submit event
    let handleSubmit = async (e) => {
        e.preventDefault()
        setLoad(true)
        const iranMobileRegex = /^09[0-9]{9}$/;
        if (!iranMobileRegex.test(Mobile)) {
            alert("شماره موبایل معتبر نیست! باید با 09 شروع شود و 11 رقم داشته باشد.");
            return;
        }

        let newUser = {
            name: '',
            lastname: '',
            phonenumber: Mobile,
            password: Password,
            address: '',
            img: '',
            homenumber: '',
            created_at: new Date().toISOString(),
            email: Email,
            card: [],
        }
        fetch('https://xeybfyeppnzqsirbngwv.supabase.co/rest/v1/user', {
            method: 'POST',
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleWJmeWVwcG56cXNpcmJuZ3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0NjQwMzAsImV4cCI6MjA2ODA0MDAzMH0.Ej3w1QqhnR2XwmsTNhV59iDBKEFsz-Npzfg99-5paio',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleWJmeWVwcG56cXNpcmJuZ3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0NjQwMzAsImV4cCI6MjA2ODA0MDAzMH0.Ej3w1QqhnR2XwmsTNhV59iDBKEFsz-Npzfg99-5paio',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
            .then(res => {
                setUser(newUser)
                console.log()
                setstatus(res.status)
            })
            .then(data => console.log(data))
            .finally(() => {
                setLoad(false)
            })

        setMobile('')
        setEmail('')
        setPassword('')
        setRepass('')

        // Navigate('/') // redirect to the main menu
    }

    // navigate handler

    useEffect(() => {
        setTimeout(() => {
            if (status >= 200 && status <= 209) {
                Navigate('/userprofile')
                localStorage.setItem('user', JSON.stringify(User))
            } else if (status >= 500 && status <= 599) {

                Navigate('/')
            }
        }, 3000)
    }, [status, Navigate])

    // change between sign in and login page
    const [goLoginPage, setgoLoginPage] = useState(false)
    let goLoginPageHandler = (e) => {
        e.preventDefault()
        setgoLoginPage(prev => (!prev))
    }


    return (
        <>
            {/* // form content */}
            <div className='w-full h-auto higherSM:h-full flex flex-col items-center justify-center -bottom-3 py-4 higherSM:py-0 bg-white absolute  higherSM:relative rounded-l-[20px] rounded-r-[20px] '>
                {/* // sing up form content */}
                <div className={`w-64 md:w-96 xl:w-[540px] h-[485px]  ${goLoginPage ? 'hidden rotate-y-180 backface-hidden' : 'flex'} flex-col items-center higherSM:items-start justify-center transition`}>
                    {/* // form title */}
                    <h2 className='text-customBlack font-vazirBold  mb-6 higherSM:mb-8 text-xl'>ثبت نام</h2>
                    <form action="" className='w-full flex flex-col gap-4 higherSM:gap-6' onSubmit={handleSubmit}>
                        {/* // mobile number input section */}
                        <div className={`border-2 ${!focusesMobile ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                            {/* // mobile svg */}
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${!focusesMobile ? 'text-customgray3' : 'text-hightGreen'} transition`}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            {/* // input label with animation */}
                            <label htmlFor="" className={`absolute bg-white ${!focusesMobile ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>شماره موبایل</label>
                            {/* // input number */}
                            <input type="tel" dir='rtl' className='w-full outline-0' onFocus={() => { setFocusesMobile(true) }} onBlur={() => { if (Mobile.trim() === "") { setFocusesMobile(false) } }} value={Mobile} onChange={(e) => setMobile(e.target.value)} />
                        </div>
                        {/* // email input section */}
                        <div className={`border-2 ${!focusesEmail ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                            {/* // email svg icon */}
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${!focusesEmail ? 'text-customgray3' : 'text-hightGreen'} transition`}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            {/* // email input animation label */}
                            <label htmlFor="" className={`absolute bg-white ${!focusesEmail ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>ایمیل</label>
                            {/* // input email */}
                            <input type="email" className='w-full outline-0 ' onFocus={() => { setFocusesEmail(true) }} onBlur={() => { if (Email.trim() === "") { setFocusesEmail(false) } }} value={Email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        {/* // password input section */}
                        <div className={`border-2 ${!focusesPassword ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                            {/* // animation label for password */}
                            <label htmlFor="" className={`absolute bg-white ${!focusesPassword ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>تعریف رمز عبور</label>
                            {/* // container for password icon and password input */}
                            <div className='w-full flex items-center'>
                                {/* // svg password icon */}
                                <svg viewBox="0 0 23 23" fill="none" className={`size-6 ${!focusesPassword ? 'fill-customgray3' : 'fill-hightGreen'} transition`}>
                                    <path d="M19.4063 9.66667H11.7522C11.0005 7.53083 8.9655 6 6.573 6C3.53883 6 1.073 8.46583 1.073 11.5C1.073 14.5342 3.53883 17 6.573 17C8.9655 17 11.0005 15.4692 11.7522 13.3333H12.073L13.9063 15.1667L15.7397 13.3333L17.573 15.1667L21.2397 11.4633L19.4063 9.66667ZM6.573 14.25C5.0605 14.25 3.823 13.0125 3.823 11.5C3.823 9.9875 5.0605 8.75 6.573 8.75C8.0855 8.75 9.323 9.9875 9.323 11.5C9.323 13.0125 8.0855 14.25 6.573 14.25Z" />
                                </svg>
                                {/* // password input */}
                                <input type={showPassword ? 'text' : 'password'} className='w-full outline-0 ' onFocus={() => { setFocusesPassword(true) }} onBlur={() => { if (Password.trim() === "") { setFocusesPassword(false) } }} value={Password} onChange={(e) => setPassword(e.target.value)} autocomplete />
                            </div>
                            {/* // eye svg */}
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" onClick={() => { setShowPassword(prev => (!prev)) }}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        </div>
                        {/* // text for check input password value */}
                        {
                            focusesPassword && (
                                <div className='flex gap-3'>
                                    {
                                        Password.length < 8 ? (
                                            <p className='text-red-500 text-[10px] higherSM:text-sm -mt-3 higherSM:-mt-5'>تعداد کاراکتر کمتز از هشت حرف است</p>
                                        ) : Password.length === 8 ? (
                                            <p className='text-yellow-400 text-[10px] higherSM:text-sm -mt-3 higherSM:-mt-5'>تعداد کاراکتر دقیقا هشت حرف است</p>
                                        ) : (
                                            <p className='text-green-500 text-[10px] higherSM:text-sm -mt-3 higherSM:-mt-5'>تعداد کاراکتر بیشتر از هشت حرف است</p>
                                        )
                                    }
                                    {
                                        Password === "" ? (
                                            <p className='text-red-500 text-[10px] higherSM:text-sm -mt-3 higherSM:-mt-5'>حرف اول بزرگ نیست</p>
                                        ) : Password.charAt(0) === Password.charAt(0).toUpperCase() ? (
                                            <p className='text-green-500 text-[10px] higherSM:text-sm -mt-3 higherSM:-mt-5'>حرف اول بزرگ است</p>
                                        ) : (
                                            <p className='text-red-500 text-[10px] higherSM:text-sm -mt-3 higherSM:-mt-5'>حرف اول بزرگ نیست</p>
                                        )

                                    }
                                </div>
                            )
                        }
                        {/* // repassword input section */}
                        <div className={`border-2 ${!focusesPassword ? 'border-customgray3' : 'border-hightGreen'} rounded-xl flex relative gap-2 w-full py-3 px-3.5 text-customgray3 transition`}>
                            {/* // animation label for repassword */}
                            <label htmlFor="" className={`absolute bg-white ${!focusesRePass ? 'right-10' : '-top-4 right-4 text-hightGreen'} transition-all duration-300 ease-in-out pointer-events-none font-vazirLight`}>تکرار رمز عبور</label>
                            {/* // container for repassword svg and repassword input */}
                            <div className='w-full flex items-center'>
                                {/* // repassword svg */}
                                <svg viewBox="0 0 23 23" fill="none" className={`size-6 ${!focusesRePass ? 'fill-customgray3' : 'fill-hightGreen'} transition`}>
                                    <path d="M19.4063 9.66667H11.7522C11.0005 7.53083 8.9655 6 6.573 6C3.53883 6 1.073 8.46583 1.073 11.5C1.073 14.5342 3.53883 17 6.573 17C8.9655 17 11.0005 15.4692 11.7522 13.3333H12.073L13.9063 15.1667L15.7397 13.3333L17.573 15.1667L21.2397 11.4633L19.4063 9.66667ZM6.573 14.25C5.0605 14.25 3.823 13.0125 3.823 11.5C3.823 9.9875 5.0605 8.75 6.573 8.75C8.0855 8.75 9.323 9.9875 9.323 11.5C9.323 13.0125 8.0855 14.25 6.573 14.25Z" />
                                </svg>
                                {/* // repassword  input */}
                                <input type={showRePass ? 'text' : 'password'} className='w-full outline-0 ' onFocus={() => { setFocusesRepass(true) }} onBlur={() => { if (RePass.trim() === "") { setFocusesRepass(false) } }} value={RePass} onChange={(e) => setRepass(e.target.value)} />
                            </div>
                            {/* // eye svg */}
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" onClick={() => { setShowRepass(prev => (!prev)) }}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        </div>
                        <div>
                            {/* // text for check input repassword value */}
                            {
                                focusesRePass && (
                                    Password === RePass ? <p className="text-hightGreen text-[10px] higherSM:text-sm -mt-3 higherSM:-mt-5">یکسان</p> : <p className="text-red-500 text-sm -mt-5">یکسان نیستن</p>
                                )
                            }
                        </div>
                        {/* // form button */}
                        <button className={`bg-hightGreen py-3 text-white rounded-xl font-vazirMediom cursor-pointer ${load ? 'opacity-50' : ''}`} disabled={Password.length < 8 || Password !== RePass || Password.charAt(0) !== Password.charAt(0).toUpperCase() || Mobile.length !== 11} >{load ? 'درحال دریافت اطلاغات' : 'ثبت نام'}</button>
                        {/* // change content between login and Signup */}
                        <p className='text-center font-vazirMediom'>حساب کاربری دارید؟<a href="" className='text-hightGreen' onClick={goLoginPageHandler}>ورود</a>کنید</p>

                    </form>
                </div >
                {/* // login form content */}
                <div className={`w-64 md:w-96 xl:w-[540px] h-[485px]  ${goLoginPage ? 'flex' : ' hidden rotate-y-180'} flex-col items-center higherSM:items-start justify-center transition`}>
                    {<LoginPage />}
                </div >
            </div >
            {/* // sign up modal */}
            <div className='absolute top-5 right-5  '>
                {
                    status >= 200 && status <= 209 && (
                        <div className='bg-emerald-700 text-white p-5'>
                            <p>ثبت نام موفقیت امیز بود. :)</p>
                        </div>

                    )
                }
                {
                    status >= 400 && status <= 499 && (
                        <div className='bg-red-700 text-white p-5'>
                            <p>ثبت نام موفقیت امیز نبود. :(</p>
                        </div>

                    )
                }
                {
                    status >= 500 && status <= 599 && (
                        <div className='bg-yellow-500 text-white p-5'>
                            <p>خطا سرور بعدا امتحان کنید</p>
                        </div>


                    )
                }
            </div>
            {/* // page img */}
            <img src="./image/loginimg/loginpic.png" alt="" className="w-screen h-screen higherSM:w-[350px] lg:w-auto higherSM:mx-auto" />
            <div></div>
        </>
    )
}
