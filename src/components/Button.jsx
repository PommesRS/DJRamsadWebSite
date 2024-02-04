import React from 'react'

const Button = ({styles, content}) => (
    <a href='#/contact' className={`relative py-4 px-8 font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] ${styles}`}>{content}</a>
)

export default Button