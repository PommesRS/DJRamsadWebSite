import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({styles, content}) => (
    <Link to='/contact' className={`relative py-4 px-8 font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] ${styles}`}>{content}</Link>
)

export default Button