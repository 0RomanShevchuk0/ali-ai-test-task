import clsx from "clsx"
import { FC, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
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
