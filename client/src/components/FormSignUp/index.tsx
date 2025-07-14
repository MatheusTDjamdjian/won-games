import React, { useEffect, useState } from 'react'
import { FormWrapper, FormLink } from '../Form'
import Link from 'next/link'

import Button from '../Button'
import TextField from '../TextField'

import Image from 'next/image'

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
              src="/img/icons/perfil.png"
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
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={
            <Image
              src="img/icons/cadeado.png"
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