import { useState, useCallback, useContext } from "react";
import ErrorContext from "../store/error-context";

const BASE_API_URL_PRO = 'https://olgok.herokuapp.com';
// const BASE_API_URL_DEV = 'http://localhost:8080';

const useHTTP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { onError } = useContext(ErrorContext);

  const sendRequest = useCallback(
    (URL_ENDPOINT, httpOptions = {}) => {
      setIsLoading(true);
      setError(null);
      const token = localStorage.getItem("token");
      if (token) {
        httpOptions.headers = {
          ...httpOptions.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return fetch(BASE_API_URL_PRO + URL_ENDPOINT, httpOptions)
        .then((rsp) => {
          if (!rsp.ok) {
            return rsp.json().then((error) => {
              throw error;
            })
          } else {
            return rsp.json();
          }
        })
        .then((response) => {
          setIsLoading(false);
          return response;
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
          onError(error);
          throw error;
        });
    },
    [onError]
  );

  return {
    sendRequest,
    isLoading,
    error,
    setError,
  };
};

export default useHTTP;
