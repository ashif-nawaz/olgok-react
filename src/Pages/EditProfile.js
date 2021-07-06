import React, {useEffect} from 'react';

const EditProfile = (props) => {
    useEffect(() => {
        document.title = 'Edit Profile | Olgok Guest House'
      })
   return (
       <h1>This is going to be the edit profile page</h1>
   )
}

export default EditProfile;