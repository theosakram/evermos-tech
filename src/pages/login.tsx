import { Box, SimpleGrid } from "@chakra-ui/react";
import { LoginForm } from "../uikit/containers/login/LoginForm";

const LoginPage = () => {
  return (
    <SimpleGrid w="100%" h="100vh" columns={2}>
      <Box bg="blue.400" />
      <LoginForm />
    </SimpleGrid>
  );
};

export default LoginPage;
