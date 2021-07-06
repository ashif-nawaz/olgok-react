import React, { useEffect } from 'react';


const NotFound = (props) => {
   useEffect(() => {
      document.title = 'Not Found'
   })
   return (
      <h1>Page not found</h1>
   )
}

export default NotFound;