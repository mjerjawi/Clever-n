import { Container, Title, Text, SimpleGrid, Box, Button } from "@mantine/core";
import { ShoppingCart } from "tabler-icons-react";
import Image from "next/image";
import ItemSlider from "components/itemSlider/ItemSlider";
import QuantityInput from "components/quantityInput/QuantityInput";
import NavBarLayout from "components/layout/NavBarLayout";

const index = () => {
  return (
    <NavBarLayout>
      <Box>
        <Title order={1}>Lenovo ideacentre Gaming 5-17IAB7 90T1003CYS</Title>
        <Text size="md">Clever SKU : 12345</Text>
        <SimpleGrid
          cols={2}
          spacing="sm"
          breakpoints={[{ maxWidth: 960, cols: 1, spacing: "sm" }]}
        >
          <Box>
            <ItemSlider />
            <Text size="sm">
              * ALL PICTURES SHOWN ARE FOR ILLUSTRATION PURPOSE ONLY
            </Text>
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
                marginTop: 16,
              })}
            >
              <Button
                radius="lg"
                size="lg"
                leftIcon={<ShoppingCart size={36} />}
                color="orange"
                mr={16}
              >
                Add to cart
              </Button>
              <Button color="green" radius="lg" size="lg">
                Buy now
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </NavBarLayout>
  );
};

export default index;
