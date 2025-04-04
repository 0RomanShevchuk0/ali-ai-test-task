export const CandidateLevels = {
  Junior: "Junior",
  Middle: "Middle",
  Senior: "Senior",
  Principal: "Principal",
} as const

export type CandidateLevel = (typeof CandidateLevels)[keyof typeof CandidateLevels]

export interface LevelsResponse {
  levels: CandidateLevel[]
}
