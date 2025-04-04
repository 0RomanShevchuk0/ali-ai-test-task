import { axiosClassic } from "@/shared/api/client"
import { Assignment, SumbitAssignmentResponse } from "@/shared/types/assignment"
import { LevelsResponse } from "@/shared/types/candidate"

class CandidateApi {
  private baseUrl = "tools/candidates"

  async fetchLevels(): Promise<LevelsResponse> {
    const res = await axiosClassic.get<LevelsResponse>(`${this.baseUrl}/levels`)
    return res.data
  }

  async submitAssignment(body: Assignment): Promise<SumbitAssignmentResponse> {
    const response = await axiosClassic.post<SumbitAssignmentResponse>(
      `${this.baseUrl}/assignments`,
      body
    )
    return response.data
  }
}

export const candidateApi = new CandidateApi()
