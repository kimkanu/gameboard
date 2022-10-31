import {
  FunctionComponent,
  PropsWithChildren,
  useState,
  useEffect,
  ReactElement,
} from "react";

export const NoSSR: FunctionComponent<
  PropsWithChildren<{ fallback?: ReactElement }>
> = ({ children, fallback = <></> }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return isSSR ? fallback : <>{children}</>;
};
