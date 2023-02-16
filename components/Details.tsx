import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

function Details() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w={"full"} h="full" p="10" spacing={"10"} alignItems="flex-start">
      <VStack spacing={3} alignItems={"flex-start"}>
        <Heading size={"2xl"}>Your Details</Heading>
        <Text>If you already have an account, click here to log in</Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={2} rowGap={6} w={"full"}>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Blvd. Main Gulberg 23" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Lahore" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value={"usa"}>United states of america</option>
              <option value={"uae"}>United Arab Emirates</option>
              <option value={"pak"}>Pakistan</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant={"primary"} w={"full"} size={"lg"}>
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}

export default Details;
