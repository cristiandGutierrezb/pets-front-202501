'use client'


export default function HomeUser() {
  
  const emailUser = localStorage.getItem('emailUser')
  
  return (
    <div>{ emailUser }</div>
  )
}
