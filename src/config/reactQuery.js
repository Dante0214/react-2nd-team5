/**
 * React Query 설정
 */

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      // 5분간 데이터를 fresh로 간주
      staleTime: 5 * 60 * 1000,

      // 10분간 캐시 유지
      gcTime: 10 * 60 * 1000,

      // 윈도우 포커스 시 자동 refetch 비활성화
      refetchOnWindowFocus: false,

      // 실패 시 1번만 재시도
      retry: 1,

      // 네트워크 재연결 시 자동 refetch 비활성화
      refetchOnReconnect: false,
    },
  },
};
