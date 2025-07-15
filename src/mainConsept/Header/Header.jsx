import React from 'react'
import Burgurmenu from './Burgurmenu'
import { Link } from 'react-router'


export default function Header({ openMenu, setOpenMenu }) {

    let user = JSON.parse(localStorage.getItem('user'))


    let openBarHandler = () => {
        setOpenMenu(true)
    }
    return (
        <div className='flex items-center justify-between'>
            <div className='py-6 '>
                <div className='flex items-center gap-3 lg:gap-6 '>
                    <div className='w-8 h-8 bg-customgray text-customBlack rounded-lg sm:hidden flex items-center justify-center cursor-pointer' onClick={openBarHandler} >
                        <svg className="w-6 h-6 text-customBlack dark:text-white " aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" className='text-customBlack' />
                        </svg>

                    </div>
                    <a className='text-hightGreen font-bold text-xl lg:text-2xl font-vazirBold cursor-pointer'>گیاه لند</a>
                    <ul className='text-customBlack hidden sm:flex items-center gap-4 lg:gap-8 '>
                        <li className='font-vazirMediom text-sm lg:text-lg hover:text-hightGreen transition'>صفحه اصلی</li>
                        <li className='font-vazirMediom text-sm lg:text-lg hover:text-hightGreen transition'>گیاه پزشک</li>
                        <li className='font-vazirMediom text-sm lg:text-lg hover:text-hightGreen transition'>وبلاگ</li>
                        <li className='font-vazirMediom text-sm lg:text-lg hover:text-hightGreen transition'>تماس با ما</li>
                        <li className='font-vazirMediom text-sm lg:text-lg hover:text-hightGreen transition'>درباره ما</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center gap-2 lg:gap-4'>
                <div className='hidden md:inline border-2 border-hightGreen p-1 lg:p-2 rounded-xl group hover:bg-green-600 transition'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='group-hover:text-white text-hightGreen'>
                    <path d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255ZM9.755 14.255C7.26501 14.255 5.255 12.245 5.255 9.755C5.255 7.26501 7.26501 5.255 9.755 5.255C12.245 5.255 14.255 7.26501 14.255 9.755C14.255 12.245 12.245 14.255 9.755 14.255Z" fill="currentColor" />
                </svg></div>
                <div className='border-2 border-hightGreen p-1 lg:p-2 rounded-xl group hover:bg-green-600 transition'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='group-hover:text-white text-hightGreen'>
                    <path d="M16.5463 13C17.2963 13 17.9563 12.59 18.2963 11.97L21.8763 5.48C22.2463 4.82 21.7663 4 21.0063 4H6.20628L5.26628 2H1.99628V4H3.99628L7.59628 11.59L6.24628 14.03C5.51628 15.37 6.47628 17 7.99628 17H19.9963V15H7.99628L9.09628 13H16.5463ZM7.15628 6H19.3063L16.5463 11H9.52628L7.15628 6ZM7.99628 18C6.89628 18 6.00628 18.9 6.00628 20C6.00628 21.1 6.89628 22 7.99628 22C9.09628 22 9.99628 21.1 9.99628 20C9.99628 18.9 9.09628 18 7.99628 18ZM17.9963 18C16.8963 18 16.0063 18.9 16.0063 20C16.0063 21.1 16.8963 22 17.9963 22C19.0963 22 19.9963 21.1 19.9963 20C19.9963 18.9 19.0963 18 17.9963 18Z" fill="currentColor" />
                </svg>
                </div>
                {
                    user ? (<Link className='flex items-center gap-1' to={'/userprofile'}>
                        <div>
                            {user.img === '' ? (<div className='rounded-full text-hightGreen'>
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>) : (
                                <img src={user.img} />
                            )}
                        </div>
                        <p>سلام; {user.name}</p>

                    </Link>
                    ) : (
                        <Link to={'/loginpage'} className='flex items-center border-2 border-hightGreen p-1 lg:p-2 rounded-xl group hover:bg-green-600 transition'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='group-hover:text-white text-hightGreen'>
                                <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="currentColor" />
                            </svg>
                            <h4 className='font-vazirMediom text-sm lg:text-base text-hightGreen group-hover:text-white hidden higherSM:inline'>ورود/ثبت نام</h4>
                        </Link>

                    )

                }

            </div >
        </div >
    )
}
