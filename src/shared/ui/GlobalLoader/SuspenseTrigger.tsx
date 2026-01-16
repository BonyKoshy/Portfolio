import { useEffect } from "react";
import { useLoading } from "@/shared/lib/context/LoadingContext";

export const SuspenseTrigger = () => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    return () => setIsLoading(false);
  }, [setIsLoading]);

  // Render nothing, just trigger state
  return null;
};
