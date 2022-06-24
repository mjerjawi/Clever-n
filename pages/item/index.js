import { Container, Title, Text, SimpleGrid, Box, Button } from "@mantine/core";
import { ShoppingCart } from "tabler-icons-react";
import Image from "next/image";
import ItemSlider from "components/itemSlider/ItemSlider";
import QuantityInput from "components/quantityInput/QuantityInput";

const index = () => {
  return (
    <Container size="xl">
      <Box>
        <Title order={1}>Lenovo ideacentre Gaming 5-17IAB7 90T1003CYS</Title>
        <Text size="md">Clever SKU : 12345</Text>
        <SimpleGrid cols={2}>
          <Box>
            <ItemSlider />
          </Box>
          <Box>
            <Text size="xl" weight={700}>
              ₪5,140
            </Text>
            <QuantityInput />
            <Box
              sx={() => ({
                display: "flex",
                alignItems: "center",
              })}
            >
              <Button
                leftIcon={<ShoppingCart size={24} />}
                color="orange"
                mr={16}
              >
                Add to cart
              </Button>
              <Button color="green">Buy now</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default index;
