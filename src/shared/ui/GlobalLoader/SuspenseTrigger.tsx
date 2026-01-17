import { useEffect } from "react";
import { useLoading } from "@/shared/lib/context/LoadingContext";

/** Invisible component that triggers the global loading state on mount. */
export const SuspenseTrigger = () => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    return () => setIsLoading(false);
  }, [setIsLoading]);

  return null;
};
