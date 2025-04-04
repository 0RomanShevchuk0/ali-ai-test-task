"use client"

import { useLevels } from "../hooks/useLevels"
import { convertToOptions } from "@/shared/utils/convert-to-options"
import SpinLoader from "@/ui/SpinLoader"
import { useAssignmentForm } from "../hooks/useAssignmentForm"
import { AssignmentFormFields } from "./AssignmentFormFields"

export function AssignmentForm() {
  const { data: levelsData, isLoading, isError } = useLevels()
  const levelsOptions = convertToOptions(levelsData?.levels || [])

  const { register, errors, handleSubmit, isSubmitting, onSubmit } = useAssignmentForm()

  if (isLoading) return <SpinLoader />

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-8">
        Failed to load levels. Please try again later.
      </div>
    )
  }

  return (
    <form
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6 justify-center w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700">Assignment Submission</h2>
      <hr />
      <AssignmentFormFields
        register={register}
        errors={errors}
        levelsOptions={levelsOptions}
        isSubmitting={isSubmitting}
      />
    </form>
  )
}
