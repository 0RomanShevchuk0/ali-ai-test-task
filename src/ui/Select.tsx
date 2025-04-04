import clsx from "clsx"
import { SelectHTMLAttributes } from "react"

const Select = ({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select
      {...props}
      className={clsx(
        "border rounded-md px-2 py-1",
        !className?.includes("w-") && "w-full",
        className
      )}
    >
      {children}
    </select>
  )
}

export default Select
