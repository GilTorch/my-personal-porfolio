import * as React from "react"
import { SVGProps } from "react"

const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M31 3 5 19.84 31 34" stroke="#EFC900" strokeWidth={5} />
  </svg>
)

export default ChevronRight
