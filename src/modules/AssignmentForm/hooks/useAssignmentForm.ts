import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
import { AssignmentFormData } from "@/modules/AssignmentForm/types/assignment"
import { appRoutes } from "@/shared/config/app-routes"
import { useSubmitAssignment } from "./useSubmitAssignment"
import { ResponseStatuses } from "@/shared/types/response"

export function useAssignmentForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssignmentFormData>()

  const { mutateAsync: submitAssignment, isPending } = useSubmitAssignment()

  const onSubmit: SubmitHandler<AssignmentFormData> = async (data) => {
    const response = await submitAssignment(data)
    if (response.status === ResponseStatuses.success) {
      router.push(appRoutes.thankYou)
    }
  }

  return { register, handleSubmit, errors, onSubmit, isSubmitting: isPending }
}
