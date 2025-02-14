
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { loginScheme } from '@/schemes/LoginSchema';

import CustomButton from '@/components/atoms/CustomButton';

import { LoginDTO } from '@/interfaces/LoginInterface';
import { standarInput } from '@/utils/Tokens';

export default function Form() {

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
    <form onSubmit={handleSubmit(onSubmit)} className="bg-red-200">
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
  )
}
