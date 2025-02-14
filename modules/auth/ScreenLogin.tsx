'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { loginScheme } from '@/schemes/LoginSchema';

import CustomButton from '@/components/atoms/CustomButton';

import { LoginDTO } from '@/interfaces/LoginInterface';
import { standarInput } from '@/utils/Tokens';

export default function ScreenLogin() {

  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginScheme)
  });

  const onSubmit: SubmitHandler<LoginDTO> = (data) => {
    console.log(data)
  }

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email-login">Email</label>
                <input {...register("email")} type="email" className={`${standarInput}`} placeholder="Email" id='email-login' />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="password-login">Password</label>
                <input {...register("password")} type="password" className={`${standarInput}`} placeholder="Password" id='password-login' />
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                  <span className="ml-2 text-sm font-semibold text-blueGray-600">Remember me</span>
                </label>
              </div>
              <div className="text-center mt-6">
                <CustomButton 
                  text='Log In asfd'
                  color='bg-danger'
                  onClickButton={() => {}}
                  typeButton='submit'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
