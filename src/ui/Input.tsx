import clsx from "clsx"
import { InputHTMLAttributes } from "react"

const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={clsx(
        "border rounded-md px-2 py-1",
        !className?.includes("w-") && "w-full",
        className
      )}
    />
  )
}

export default Input
