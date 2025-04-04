import { axiosClassic } from "@/shared/api/client"
import { AssignmentFormData, SumbitAssignmentResponse } from "../types/assignment"
import { LevelsResponse } from "../types/candidate"

class CandidateApi {
  private baseUrl = "tools/candidates"

  async fetchLevels(): Promise<LevelsResponse> {
    const res = await axiosClassic.get<LevelsResponse>(`${this.baseUrl}/levels`)
    return res.data
  }

  async submitAssignment(body: AssignmentFormData): Promise<SumbitAssignmentResponse> {
    const response = await axiosClassic.post<SumbitAssignmentResponse>(
      `${this.baseUrl}/assignments`,
      body
    )
    return response.data
  }
}

export const candidateApi = new CandidateApi()
