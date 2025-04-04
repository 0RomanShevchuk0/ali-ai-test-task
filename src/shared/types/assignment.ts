import { ResponseStatus } from "@/shared/types/response"
import { CandidateLevel } from "./candidate"

export interface Assignment {
  name: string
  email: string
  assignment_description: string
  github_repo_url: string
  candidate_level: CandidateLevel
}

export interface SumbitAssignmentResponse {
  data: Assignment
  message: string
  status: ResponseStatus
}
