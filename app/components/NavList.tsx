import React from 'react'

const imagePath = "payments.png";

const NavList = () => {
  return (
    <>
        <div>
            <h2 className='sm:mt-3 bg-amber-300'>MAIN</h2>
            <ul>
                <li className='sm:flex  sm:mt-2 sm:items-center bg-amber-200'>
                    <img className='sm:h-6 sm:w-6 sm:bg-amber-950' src={imagePath} alt="" />
                    <h3 className='align-middle bg-amber-200'>Something</h3>
                </li>
            </ul>
        </div>
    </>
  )
}

export default NavList