// import React, { FC, ReactNode } from "react"
import { FC, ReactNode } from "react"


const Wrapper : FC<{children : ReactNode}> = ({children}) => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
    {children}
    </div>
  )
}

export default Wrapper