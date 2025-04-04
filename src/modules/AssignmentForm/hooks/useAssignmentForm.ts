import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Assignment } from "@/shared/types/assignment"
import { AppRoutes } from "@/shared/config/app-routes"
import { useSubmitAssignment } from "./useSubmitAssignment"
import { ResponseStatuses } from "@/shared/types/response"
import { session } from "@/shared/utils/storage/session"
import { StorageKeys } from "@/shared/config/storage-keys"

export function useAssignmentForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Assignment>()

  const { mutateAsync: submitAssignment, isPending } = useSubmitAssignment()

  const onSubmit: SubmitHandler<Assignment> = async (data) => {
    const response = await submitAssignment(data)
    if (response.status === ResponseStatuses.success) {
      session.set<Assignment>(StorageKeys.ASSIGNMENT, response.data)
      router.push(AppRoutes.THANK_YOU)
    }
  }

  return { register, handleSubmit, errors, onSubmit, isSubmitting: isPending }
}
