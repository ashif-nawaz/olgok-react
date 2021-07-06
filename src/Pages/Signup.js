import React, {useEffect} from 'react';
import Signup from '../components/Signup/Signup';

const SignupPage = (props) => {
    useEffect(() => {
        document.title = 'Signup | Olgok Guest House'
     })
   return (
       <Signup />
   )
}

export default SignupPage;