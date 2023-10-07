import {
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Img,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoBagCheckOutline } from 'react-icons/io5';

import Link from 'next/link';

export type ProductCardProps = {
  img: string;
  title: string;
  description: string;
  price: number;
  id: number;
  inCart?: {
    status: boolean;
    amount: number;
    onIncClick: () => void;
    onDecClick: () => void;
  };
  onCartButtonClick?: () => void;
  onBuyBuyNowButtonClick?: () => void;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <Link
      passHref
      href={{ pathname: '/product/[id]', query: { id: props.id } }}
    >
      <Card maxW="sm" h="30rem" cursor="pointer">
        <CardBody>
          <Center>
            <Img
              src={props.img}
              alt="product-card-img"
              borderRadius="lg"
              h="15rem"
            />
          </Center>

          <Stack mt="6" spacing="3">
            <Heading size="md" noOfLines={1}>
              {props.title}
            </Heading>
            <Text noOfLines={3}>{props.description}</Text>

            <Flex w="100%">
              <Text color="blue.600" fontSize="2xl">
                ${props.price}
              </Text>
              <Spacer />

              <ButtonGroup>
                {props.inCart.status ? (
                  <NumberInput
                    value={props.inCart.amount}
                    min={0}
                    max={99}
                    w="5rem"
                    onFocus={(e) => e.preventDefault()}
                    onClick={(e) => e.preventDefault()}
                    isReadOnly
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper
                        onClick={(e) => {
                          e.preventDefault();
                          props.inCart.onIncClick();
                        }}
                      />
                      <NumberDecrementStepper
                        onClick={(e) => {
                          e.preventDefault();
                          props.inCart.onDecClick();
                        }}
                      />
                    </NumberInputStepper>
                  </NumberInput>
                ) : (
                  <IconButton
                    type="button"
                    aria-label="add-to-cart"
                    icon={<Icon as={AiOutlineShoppingCart} />}
                    onClick={(e) => {
                      e.preventDefault();
                      props.onCartButtonClick?.();
                    }}
                  />
                )}
                <IconButton
                  type="button"
                  aria-label="buy-now"
                  icon={<Icon as={IoBagCheckOutline} />}
                  onClick={(e) => {
                    e.preventDefault();
                    props.onBuyBuyNowButtonClick?.();
                  }}
                  colorScheme="blue"
                />
              </ButtonGroup>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};
