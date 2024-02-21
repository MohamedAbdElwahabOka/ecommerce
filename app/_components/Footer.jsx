'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs';

function Footer() {
  const {user} = useUser();
  return user &&(
    <div>
     footer
    </div>
  )
}

export default Footer
