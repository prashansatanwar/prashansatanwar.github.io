import React from 'react'

const Background = ({children}) => {
  return (
    <body className='bg-bgcolor dark:bg-darkbgcolor transition-all'>
        {children}
    </body>
  )
}

export default Background