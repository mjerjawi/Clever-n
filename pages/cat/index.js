import NavBarLayout from "components/layout/NavBarLayout";
import {
  Accordion,
  Grid,
  SimpleGrid,
  Card,
  Text,
  createStyles,
  Checkbox,
} from "@mantine/core";
import Image from "next/image";

const makeStyles = createStyles((theme) => ({
  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const index = () => {
  const { classes } = makeStyles();
  return (
    <NavBarLayout>
      <Grid>
        <Grid.Col md={3}>
          <Accordion>
            <Accordion.Item label="Brand">
              <Checkbox mb={4} label="Apple" />
              <Checkbox mb={4} label="ASUS" />
              <Checkbox mb={4} label="HP" />
              <Checkbox mb={4} label="Dell" />
              <Checkbox mb={4} label="Levovo" />
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item label="Size">
              Colors, fonts, shadows and many other parts are customizable to
              fit your design needs
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item label="Screen Size">
              <Checkbox mb={4} label="14" />
              <Checkbox mb={4} label="12" />
              <Checkbox mb={4} label="11.5" />
              <Checkbox mb={4} label="17" />
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item label="GPU">
              <Checkbox mb={4} label="Gforce" />
              <Checkbox mb={4} label="Nivedia" />
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item label="Touch Screen">
              <Checkbox mb={4} label="Without touch screen" />
              <Checkbox mb={4} label="With touch Screen" />
            </Accordion.Item>
          </Accordion>
        </Grid.Col>
        <Grid.Col md={9}>
          <SimpleGrid cols={3} spacing="xs">
            <Card
              withBorder
              p="sm"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Card.Section className={classes.imageSection}>
                <Image
                  src="https://wwndyrxnhutvvvfmhwso.nhost.run//v1/storage/files/bfba377f-c5a8-4fbe-bb84-664bdf848615"
                  width={380}
                  height={380}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg">
                Lenovo IdeaPad 5-14ITL 82FE007JIV - Platinum Gray
              </Text>

              <Text size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
            <Card
              withBorder
              p="sm"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Card.Section className={classes.imageSection}>
                <Image
                  src="https://wwndyrxnhutvvvfmhwso.nhost.run//v1/storage/files/bfba377f-c5a8-4fbe-bb84-664bdf848615"
                  width={380}
                  height={380}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg">
                <span>Lenovo IdeaPad 5-14ITL 82FE007JIV - Platinum Gray</span>
              </Text>

              <Text size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
            <Card
              withBorder
              p="sm"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Card.Section className={classes.imageSection}>
                <Image
                  src="https://wwndyrxnhutvvvfmhwso.nhost.run//v1/storage/files/bfba377f-c5a8-4fbe-bb84-664bdf848615"
                  width={380}
                  height={380}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg">
                Lenovo IdeaPad 5-14ITL 82FE007JIV - Platinum Gray
              </Text>

              <Text size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
            <Card
              withBorder
              p="sm"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Card.Section className={classes.imageSection}>
                <Image
                  src="https://wwndyrxnhutvvvfmhwso.nhost.run//v1/storage/files/bfba377f-c5a8-4fbe-bb84-664bdf848615"
                  width={380}
                  height={380}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg">
                Lenovo IdeaPad 5-14ITL 82FE007JIV - Platinum Gray
              </Text>

              <Text size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
            <Card
              withBorder
              p="sm"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Card.Section className={classes.imageSection}>
                <Image
                  src="https://wwndyrxnhutvvvfmhwso.nhost.run//v1/storage/files/bfba377f-c5a8-4fbe-bb84-664bdf848615"
                  width={380}
                  height={380}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg">
                Lenovo IdeaPad 5-14ITL 82FE007JIV - Platinum Gray
              </Text>

              <Text size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
            <Card
              withBorder
              p="sm"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Card.Section className={classes.imageSection}>
                <Image
                  src="https://wwndyrxnhutvvvfmhwso.nhost.run//v1/storage/files/bfba377f-c5a8-4fbe-bb84-664bdf848615"
                  width={380}
                  height={380}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg">
                Lenovo IdeaPad 5-14ITL 82FE007JIV - Platinum Gray
              </Text>

              <Text size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
            <Card
              withBorder
              p="sm"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Card.Section className={classes.imageSection}>
                <Image
                  src="https://wwndyrxnhutvvvfmhwso.nhost.run//v1/storage/files/bfba377f-c5a8-4fbe-bb84-664bdf848615"
                  width={380}
                  height={380}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg">
                Lenovo IdeaPad 5-14ITL 82FE007JIV - Platinum Gray
              </Text>

              <Text size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </NavBarLayout>
  );
};

export default index;
