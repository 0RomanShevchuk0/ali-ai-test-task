import { useQuery } from "@tanstack/react-query"
import { candidateApi } from "@/modules/AssignmentForm/api/candidates.api"
import { AppQueries } from "@/shared/config/app-queries"

export function useLevels() {
  return useQuery({
    queryKey: [AppQueries.CANDIDATE_LEVELS],
    queryFn: () => candidateApi.fetchLevels(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  })
}
