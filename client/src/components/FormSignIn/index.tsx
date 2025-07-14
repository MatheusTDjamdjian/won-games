import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Link from 'next/link'

import TextField from '../TextField'
import Button from '../Button'

import Image from 'next/image'

import { FormLink, FormWrapper } from '../Form'

const FormSignIn = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <FormWrapper>
      <form>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={
            <Image
              src="/img/icons/e-mail.png"
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
              src="img/icons/cadeado.png"
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

        {isClient && (
          <FormLink>
            Don’t have an account?{' '}
            <Link href="/sign-up">
              Sign up
            </Link>
          </FormLink>
        )}
      </form>
    </FormWrapper>
  )
}

export default FormSignIn