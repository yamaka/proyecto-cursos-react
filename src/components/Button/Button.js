import React from 'react'

const Button = ({title, onPress}) => {
  return (
    <div className="flex items-center justify-start w-full">
    <button
      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
      onClick={() => onPress()}
    >
      {title}
    </button>
  </div>
  )
}

export default Button