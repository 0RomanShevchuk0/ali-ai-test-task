import { FC } from "react"
import { FieldError } from "react-hook-form"

interface FormFieldProps {
  label: string
  error?: FieldError
  children: React.ReactNode
  required?: boolean
}

const FormField: FC<FormFieldProps> = ({ label, error, required, children }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-1 md:gap-4">
      <label className="text-gray-700 mb-1 md:mb-0 md:w-1/4 text-sm font-medium">
        {label}
        {required && <span className="ml-1">*</span>}
      </label>

      <div>
        {children}
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    </div>
  )
}

export default FormField
