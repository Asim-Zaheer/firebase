import React from 'react'

export default function Input(props) {
    const {label , onChange,type ,value } = props
  return (
    <div>
        <input className='p-2 rounded border w-100 ' type={type} placeholder={label} onChange={onChange} value={value}      />
    </div>
  )
}

