import * as React from "react"
import { SVGProps } from "react"

const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#EFC900"
      d="M0 2V0h25v2zM0 8V6h25v2zM0 14v-2h25v2zM0 20v-2h25v2z"
    />
  </svg>
)

export default HamburgerMenu
