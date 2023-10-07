import { Center, Spinner } from '@chakra-ui/react';

export type LoaderProps = {
  h?: string;
};

export const Loader = (props: LoaderProps) => {
  return (
    <Center w="100%" h={props.h || '100vh'} className="loader">
      <Spinner />
    </Center>
  );
};
