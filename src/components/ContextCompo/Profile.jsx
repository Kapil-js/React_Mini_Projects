import React, { useContext } from 'react'
import UserContext from '../../ContextApi/UserContext'

function Profile () {
  const { user } = useContext(UserContext)

  if (!user) return <div className = 'welcome'> Please Login</div>

  return <div className='welcome'> Welcome <span> {user.username} </span></div>
}

export default Profile
