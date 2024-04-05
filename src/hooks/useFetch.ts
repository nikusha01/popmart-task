import { useState, useEffect } from "react";

export const useFetch = <T>(url: string, method = "GET") => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, {
          method: method,
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const jsonData = await res.json();

        setIsPending(false);
        setData(jsonData);
        setError(null);
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data: " + err.message); 
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, method]);

  return { data, isPending, error };
};
