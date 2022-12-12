/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import axios from "axios";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import type { AxiosResponse } from "axios";
import { AxiosContext } from "context";

const useAxios = (url: string, method: string, payload?: any) => {
  const [data, setData] = useState<AxiosResponse<any, any>["data"] | null>(
    null
  );
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const contextInstance = useContext(AxiosContext);
  const instance = useMemo(() => {
    return contextInstance || axios;
  }, [contextInstance]);
  const controllerRef = useRef(new AbortController());

  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    void (async () => {
      try {
        setloading(true);
        const response = await instance.request({
          signal: controllerRef.current.signal,
          data: payload,
          method,
          url,
        });

        setData(response.data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setloading(false);
      }
    })();
  }, []);

  return { cancel, data, error, loading };
};

export default useAxios;
