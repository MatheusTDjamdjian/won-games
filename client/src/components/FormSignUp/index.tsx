import React, { useEffect, useState } from 'react'
import { FormWrapper, FormLink } from '../Form'
import Link from 'next/link'

import Button from '../Button'
import TextField from '../TextField'

import Image from 'next/image'
import AccountCircle from './icons/perfil.png'
import Email from './icons/e-mail.png'
import Lock from './icons/cadeado.png'

const FormSignUp = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <FormWrapper>
      <form>
        <TextField
          name="name"
          placeholder="Name"
          type="text"
          icon={
            <Image
              src={AccountCircle}
              alt="Account icon"
              width={20}
              height={20}
            />
          }
        />
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
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={
            <Image
              src={Lock}
              alt="Confirm password icon"
              width={20}
              height={20}
            />
          }
        />

        <Button size="large" $fullWidth>
          Sign up now
        </Button>

        {isClient && (
          <FormLink>
            Already have an account?{' '}
            <Link href="/sign-in">
              Sign in
            </Link>
          </FormLink>
        )}
      </form>
    </FormWrapper>
  )
}

export default FormSignUp