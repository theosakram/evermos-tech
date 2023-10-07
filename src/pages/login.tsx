import { Box, SimpleGrid } from '@chakra-ui/react';

import dynamic from 'next/dynamic';

const LoginForm = dynamic(
  () => import('../uikit/containers/login/LoginForm').then((comp) => comp.LoginForm),
  { ssr: false },
);

const LoginPage = () => {
  return (
    <SimpleGrid w="100%" h="100vh" columns={2}>
      <Box bg="blue.400" />
      <LoginForm />
    </SimpleGrid>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default LoginPage;
