import React from 'react'

export default function SecondExampleTernaryOpretor() {

    const name ="vishal";
    const isLoggedIn = false;
  return (
    <>
      {isLoggedIn? name :"unauthorise person"}
    </>
  )
}
