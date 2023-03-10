import * as React from "react"
import { SVGProps } from "react"

const CloseButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#EFC900" d="M.797 1.711 2.21.297l28.991 28.991-1.414 1.415z" />
    <path fill="#EFC900" d="M2.212 30.703.798 29.289 29.789.297l1.414 1.415z" />
  </svg>
)

export default CloseButton
