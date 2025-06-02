import React from 'react'
import * as S from './styles'
import Link from 'next/link'

import TextField from '../TextField'
import Button from '../Button'

import Image from 'next/image'
import Email  from '../FormSignUp/icons/e-mail.png'
import Lock  from '../FormSignUp/icons/cadeado.png'

import { FormLink, FormWrapper } from '../Form'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={
          <Image 
            src={Email} 
            alt="Email icon" 
            width={20} 
            height={20} 
          />
        }
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={
          <Image 
            src={Lock} 
            alt="Password icon" 
            width={20} 
            height={20} 
          />
        }
      />
      <S.ForgotPassword href="#">
        Forgot your password?
      </S.ForgotPassword>

      <Button size="large" $fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Don’t have an account?{' '}
        <Link href="/sign-up">
          Sign up
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn