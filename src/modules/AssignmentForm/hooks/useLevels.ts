import { useQuery } from "@tanstack/react-query"
import { candidateApi } from "@/modules/AssignmentForm/api/candidates.api"
import { appQueries } from "@/shared/config/app-queries"

export function useLevels() {
  return useQuery({
    queryKey: [appQueries.candidateLevels],
    queryFn: () => candidateApi.fetchLevels(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  })
}
