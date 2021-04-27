import React, { FC } from 'react'
import { Button, Link } from './styles'

interface ButtonComponentExtraParams {
  href?: string,
  size?: string
}

const ButtonComponent: FC<ButtonComponentExtraParams> = ({
  children,
  href,
  size = 'small'
}) =>
  href ? (
    <Link size={size} href={href}>
      {children}
    </Link>
  ) : (
    <Button size={size}>{children}</Button>
  )

export default ButtonComponent
