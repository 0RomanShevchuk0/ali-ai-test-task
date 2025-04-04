"use client"

import { StorageKeys } from "@/shared/config/storage-keys"
import { Assignment } from "@/shared/types/assignment"
import { session } from "@/shared/utils/storage/session"
import SpinLoader from "@/ui/SpinLoader"
import { FC, useEffect, useState } from "react"

export const AssignmentSummary: FC = () => {
  const [assignment, setAssignment] = useState<Assignment | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const data = session.get<Assignment>(StorageKeys.ASSIGNMENT)
    setAssignment(data)
    setIsReady(true)
  }, [])

  useEffect(() => {
    if (isReady && assignment) {
      session.remove(StorageKeys.ASSIGNMENT)
    }
  }, [isReady, assignment])

  if (!isReady) return <SpinLoader />

  if (!assignment) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No assignment data found. Please submit the form first.
      </div>
    )
  }

  const { name, email, github_repo_url, assignment_description, candidate_level } = assignment

  return (
    <div className="w-full max-w-xl mx-auto mt-10 px-4 sm:px-6 py-6 bg-white shadow-lg rounded-xl space-y-4 text-gray-800">
      <h2 className="text-2xl font-bold text-center">Assignment Summary</h2>
      <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p className="flex sm:items-center text-start gap-1">
          <strong>GitHub:</strong>
          <a href={github_repo_url} target="_blank" className="text-blue-600 underline break-all">
            {github_repo_url}
          </a>
        </p>
        <p>
          <strong>Description:</strong> {assignment_description}
        </p>
        <p>
          <strong>Level:</strong> {candidate_level}
        </p>
      </div>
    </div>
  )
}
