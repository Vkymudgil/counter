import React from 'react'

export default function Display(props) {
  return (
    <div>
      <p className="footerContent">Counter Value: {props.val}</p>
    </div>
  )
}
