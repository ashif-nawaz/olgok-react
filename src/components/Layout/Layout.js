import React from 'react';
import Header from '../Header/Header';



const Layout = (props) => {
   return (
       <>
         <Header/>
         <div style={{height : '6rem'}}></div>
         <main>
             {props.children}
         </main>
       </>
   )
}

export default Layout;