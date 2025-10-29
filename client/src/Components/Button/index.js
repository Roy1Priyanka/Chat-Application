import React from 'react'

const Button = ({
  label = 'Button',
  type = 'button',
  className = '',
  disabled = false,
}) => {
  return (
     <button type={type} className={`text-white bg-[#095acbff] hover:bg-[#095acbff] focus:outline-none focus:ring-4 
      focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${className}`}
      disabled={disabled}>{label}</button>
  )
}

export default Button