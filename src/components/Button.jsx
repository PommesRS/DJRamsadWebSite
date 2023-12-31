import React from 'react'

const Button = ({styles, content}) => (
    <button type='button' className={`relative py-4 px-8 font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] ${styles}`}>{content}</button>
)

export default Button