import React, { Children } from 'react'
import Header from '../header/Header'

export default function Layout({Children}) {
  return (
    <div>
        <Header />
        {Children}
    </div>
  )
}
