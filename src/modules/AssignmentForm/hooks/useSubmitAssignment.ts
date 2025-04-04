import { useMutation } from "@tanstack/react-query"
import { Assignment } from "../../../shared/types/assignment"
import { candidateApi } from "@/modules/AssignmentForm/api/candidates.api"
import toast from "react-hot-toast"

export function useSubmitAssignment() {
  return useMutation({
    mutationFn: (data: Assignment) => candidateApi.submitAssignment(data),
    onSuccess: async () => {
      toast.success("Assignment submitted successfully!")
    },
    onError: (error) => {
      console.log("Error submitting assignment:", error)
      toast.error("An error occurred while submitting the assignment. Please try again.")
    },
  })
}
