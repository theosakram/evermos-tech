import {
  useToast as useChakraToast,
  UseToastOptions as ChakraToastProps,
} from "@chakra-ui/react";
import { useCallback } from "react";

export type ToastProps = ChakraToastProps;

/**
 * must provide an id
 */
export const useToast = () => {
  const toast = useChakraToast({
    duration: 3000,
    isClosable: true,
    position: "bottom",
  });

  const fireToast = useCallback((props: ToastProps) => {
    // prevent duplicate toast
    if (!toast.isActive(props?.id)) {
      toast(props);
    }
  }, []);

  return {
    toast: fireToast,
  };
};
