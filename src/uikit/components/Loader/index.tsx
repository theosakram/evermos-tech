import { Center, Spinner } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Center w="100%" h="100vh" className="loader">
      <Spinner />
    </Center>
  );
};
