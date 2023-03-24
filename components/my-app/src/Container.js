import React from 'react'

function Container({children}) {
  return (
    <div style={{width:300,height:300, background: "beige"}}>{children}</div>
  )
}

export default Container