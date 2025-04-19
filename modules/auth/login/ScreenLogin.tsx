'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Form from './Form'

export default function ScreenLogin() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      router.push('/user/home')
    }
  }, [])

  return (
    <section className="max-w-screen-sm mx-auto w-1/2">
      <div className="bg-slate-100 w-full mx-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h1 className="text-sm font-bold">
                SIGN IN OR <Link href={'/register'}>Register</Link>
              </h1>
            </div>
            <hr className="mt-6 border-b-1" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}
