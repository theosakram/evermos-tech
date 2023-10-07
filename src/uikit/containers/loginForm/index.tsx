import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

import { useRouter } from 'next/router';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useAuth } from '@/modules/auth/authHooks';
import { useCookieStore } from '@/modules/cookies/cookieStore';
import { useToast } from '@/shared/hooks/useToast';

type FormData = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      password: '',
      username: '',
    },
  });

  const { toast } = useToast();
  const noToast = useCallback(() => {
    toast({
      id: 'no-toast',
      title: 'NO',
      description: 'Nope',
      status: 'error',
    });
  }, [toast]);

  const { setCookie } = useCookieStore();
  const { mutateAsync: login, isLoading: loginLoading } = useAuth({
    onSuccess: (data) => {
      setCookie('token', data.token);
      setCookie('isLoggedIn', 'true');
      router.replace('/');
    },
    onError: () => {
      toast({
        id: 'error-login',
        title: 'Error',
        description: 'Something is wrong. Try again later',
        status: 'error',
      });
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (e: FormData) => {
        await login({ username: e.username, password: e.password });
        return setCookie('userName', e.username);
      })}
    >
      <Center w="100%" h="100vh">
        <VStack spacing="1rem" w="50%" align="start">
          <VStack align="start" spacing={0}>
            <Text as="b" fontSize="1.5rem">
              Login to your account
            </Text>
            <Text color="gray.500" fontSize="0.9rem">
              Welcome back, Select a method to login
            </Text>
          </VStack>

          {/* USERNAME */}
          <FormControl isInvalid={!!errors.username}>
            <FormLabel>Username</FormLabel>
            <Input
              bg="white"
              type="text"
              placeholder="bestUsername420"
              {...register('username', {
                required: {
                  message: 'Cannot be empty',
                  value: true,
                },
              })}
            />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>

          {/* PASSWORD */}
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                bg="white"
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                {...register('password', {
                  required: {
                    message: 'Cannot be empty',
                    value: true,
                  },
                })}
              />
              <InputRightElement>
                <IconButton
                  type="button"
                  aria-label="show-password"
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={() => setShowPassword(!showPassword)}
                  bg="gray.200"
                />
              </InputRightElement>
            </InputGroup>

            <FormHelperText>
              We&apos;ll never share your password. Promise. {'(wink)'}
            </FormHelperText>
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Button
            w="100%"
            colorScheme="blue"
            type="submit"
            aria-label="login button"
            isLoading={loginLoading}
            isDisabled={loginLoading}
          >
            Login
          </Button>

          <Text as="b">
            Don&apos;t have an account?{' '}
            <Text
              textDecor="underline"
              display="inline"
              cursor="pointer"
              color="blue.400"
              onClick={noToast}
            >
              Sign Up
            </Text>{' '}
          </Text>

          {/* DIVIDER */}
          <Box position="relative" w="100%" my="1rem">
            <Divider borderColor="gray.300" />
            <AbsoluteCenter bg="gray.100" px="4">
              OR
            </AbsoluteCenter>
          </Box>

          <Button
            w="100%"
            leftIcon={<FcGoogle />}
            variant="ghost"
            border="1px solid"
            borderColor="gray.200"
            onClick={noToast}
            bg="white"
          >
            Authorize with Google
          </Button>
        </VStack>
      </Center>
    </form>
  );
};
