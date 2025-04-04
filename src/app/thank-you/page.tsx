"use client"

import { AssignmentSummary } from "@/modules/AssignmentSummary"
import { AppRoutes } from "@/shared/config/app-routes"
import Button from "@/ui/Button"
import { useRouter } from "next/navigation"

export default function ThankYou() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center h-full text-center space-y-6 mt-20">
      <h1 className="text-3xl font-semibold text-gray-800">Thank you!</h1>
      <p className="text-lg text-gray-600">Your assignment has been submitted successfully.</p>
      <Button variant="secondary" onClick={() => router.push(AppRoutes.HOME)}>
        Back to Homepage
      </Button>
      <AssignmentSummary />
    </div>
  )
}
