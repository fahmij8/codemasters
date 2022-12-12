import { createContext, useEffect, useRef } from "react";
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";
import type { ReactNode } from "react";

export const AxiosContext = createContext<AxiosInstance | null>(null);

export const AxiosInstanceProvider = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  children,
}: {
  config?: Record<string, unknown>;
  requestInterceptors?: Array<
    (...arg: AxiosRequestConfig[]) => AxiosRequestConfig
  >;
  responseInterceptors?: Array<(...arg: AxiosResponse[]) => AxiosResponse>;
  children: ReactNode;
}) => {
  const instanceRef = useRef(axios.create(config));

  useEffect(() => {
    requestInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.request.use(interceptor);
    });
    responseInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.response.use(interceptor);
    });
  }, []);

  return (
    <AxiosContext.Provider value={instanceRef.current}>
      {children}
    </AxiosContext.Provider>
  );
};
