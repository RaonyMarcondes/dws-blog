import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

interface UseHttpRequestOptions extends AxiosRequestConfig {}

interface UseHttpRequestReturn {
  data: string | null;
  error: string | null;
  loading: boolean;
  refetch: (params?: AxiosRequestConfig) => Promise<void>;
}

const useHttpRequest = (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  options: UseHttpRequestOptions = {}
): UseHttpRequestReturn => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(
    async (params: AxiosRequestConfig = {}) => {
      setLoading(true);
      try {
        const response = await axios({
          url: `https://tech-test-backend.dwsbrazil.io/${url}`,
          method,
          ...options,
          ...params,
        });
        setData(JSON.stringify(response.data));
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message);
      } finally {
        setLoading(false);
      }
    },
    [url, method, options]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, refetch: fetchData };
};

export default useHttpRequest;
