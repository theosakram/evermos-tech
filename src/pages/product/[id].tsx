import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  HStack,
  Icon,
  Img,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AiFillStar } from 'react-icons/ai';

import { useRouter } from 'next/router';

import { useGetProductById } from '@/modules/products/productHooks';
import { Loader } from '@/uikit/components/Loader';

type PageQuery = {
  id: string;
};

type FormData = {
  amount: number;
};

const ProductDetailPage = () => {
  const query = useRouter().query as PageQuery;
  const { data, isLoading } = useGetProductById(
    { id: +query.id },
    { enabled: !!query.id && !isNaN(+query.id) },
  );

  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      amount: 0,
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SimpleGrid w="100%" columns={2} h="100vh">
      <Center>
        <Img src={data?.image} h="35rem" />
      </Center>
      <Center w="100%">
        <VStack w="100%" align="start" spacing="1rem">
          <Text as="b" fontSize="2.5rem" w="85%">
            {data?.title}
          </Text>

          <HStack spacing="0.5rem" align="center">
            <Icon as={AiFillStar} color="orange.400" boxSize="1.25rem" />
            <Text>
              {data?.rating.rate} | {data?.rating.count} reviews
            </Text>
          </HStack>

          <Box pr="5rem" w="100%">
            <Divider borderColor="gray.500" w="100%" />
          </Box>

          <Text color="gray.700" fontSize="1rem" w="90%">
            {data?.description}
          </Text>

          <Text as="b" fontSize="2rem">
            ${data?.price}
          </Text>

          <HStack spacing="1rem">
            <FormControl isInvalid={!!errors.amount} w="10rem">
              <Input
                id="amount"
                placeholder="Qty"
                type="number"
                borderColor="gray.400"
                bg="white"
                {...register('amount', {
                  required: 'Cannot be zero',
                  min: 1,
                })}
              />
              <FormErrorMessage>
                {errors.amount && errors.amount.message}
              </FormErrorMessage>
            </FormControl>

            <Button colorScheme="blue">Add to cart</Button>
          </HStack>
        </VStack>
      </Center>
    </SimpleGrid>
  );
};

export default ProductDetailPage;
