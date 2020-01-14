import { useLocation } from 'react-router-dom'

// eslint-disable-next-line import/prefer-default-export
export function useQuery() {
  return new URLSearchParams(useLocation().search)
}
