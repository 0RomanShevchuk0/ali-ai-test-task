import FormField from "@/components/FormField"
import Input from "@/ui/Input"
import Select from "@/ui/Select"
import Button from "@/ui/Button"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Assignment } from "@/shared/types/assignment"
import { Option } from "@/shared/utils/convert-to-options"

type Props = {
  register: UseFormRegister<Assignment>
  errors: FieldErrors<Assignment>
  levelsOptions: Option[]
  isSubmitting?: boolean
}

export function AssignmentFormFields({ register, errors, levelsOptions, isSubmitting }: Props) {
  return (
    <div className="flex flex-col  space-y-4">
      <FormField label="Name" error={errors.name} required>
        <Input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full md:w-lg"
        />
      </FormField>

      <FormField label="Email" error={errors.email} required>
        <Input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Invalid email format",
            },
          })}
          className="w-full md:w-lg"
        />
      </FormField>

      <FormField label="GitHub Repository URL" error={errors.github_repo_url} required>
        <Input
          type="url"
          {...register("github_repo_url", {
            required: "GitHub URL is required",
            pattern: {
              value: /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9-_]+\/[A-Za-z0-9-_]+$/,
              message: "Invalid GitHub URL",
            },
          })}
          className="w-full md:w-lg"
        />
      </FormField>

      <FormField label="Description" error={errors.assignment_description} required>
        <textarea
          className="border p-2 rounded-md w-full md:w-lg"
          rows={4}
          {...register("assignment_description", {
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Assignment description must be at least 10 characters",
            },
          })}
        />
      </FormField>

      <FormField label="Level" error={errors.candidate_level} required>
        <Select
          {...register("candidate_level", { required: "Level is required" })}
          className="w-full md:w-lg"
        >
          {levelsOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormField>

      <Button
        type="submit"
        variant="primary"
        className="w-full md:w-1/4 px-6 py-2 self-center mt-5"
        disabled={isSubmitting}
      >
        Submit
      </Button>
    </div>
  )
}
