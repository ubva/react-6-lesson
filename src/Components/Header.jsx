import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Header = () => {

    function handleBtn(){
        const navigate = useNavigate()
        localStorage.removeItem('token')
        toast('Logged Out', {type: 'info'})
        navigate('/login')
    }

  return (
    <header className='bg-primary py-3'>
        <nav className='container text-white d-flex align-items-center justify-content-between'>
           <Link className='text-reset text-decoration-none fs-4' to='/'>Najot Market</Link>

        <ul className='list-unstyled d-flex align-items-center m-0 gap-3 fs-4'>
            <li className='text-white'><Link className=' btn btn-primary fs-4' to='/'>About</Link></li>
            <li className='text-white'><Link className='btn btn-primary fs-4' to='/'>Contact</Link></li>
            <li className='text-white'><Link className='btn btn-primary fs-4' to='/'>Home</Link></li>
            <li className='text-white'>
                <button onClick={handleBtn} className=' btn btn-primary fs-4 ' to='/'>Logout
                <i className="fa-solid fa-arrow-right-from-bracket"></i></button>
            </li>
        </ul> 
        </nav>
    </header>
  )
}

export default Header