import {
  Heading,
  VStack,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  HStack,
  Stack,
  Divider,
} from "@chakra-ui/react";

function Carts() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack
      w={"full"}
      h="full"
      p="10"
      spacing={"10"}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack alignItems={"flex-start"} spacing={3}>
        <Heading size={"2xl"}>Your Cart</Heading>
        <Text>
          if the price is too hard on your eyes{" "}
          <Button onClick={toggleColorMode} variant={"ghost"}>
            try changing the theme
          </Button>
        </Text>
      </VStack>

      <HStack spacing={6} alignItems="center" w="full">
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penny board</Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
}

export default Carts;
