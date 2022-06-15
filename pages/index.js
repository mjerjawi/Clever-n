import {
  MediaQuery,
  createStyles,
  Container,
  Grid,
  Center,
  Text,
  SimpleGrid,
  Title,
  Box,
} from "@mantine/core";
import Image from "next/image";
import { imagesUrl } from "../helper/imagesUrl";

import { Phone } from "tabler-icons-react";

import { useUserContext } from "../src/contexts/UserProvider";

import { useUserData, useAuthenticationStatus } from "@nhost/nextjs";

import Head from "next/head";

import SearchBar from "../src/components/navbar/SearchBar";
import Icontext from "../src/components/navbar/Icontext";
import Cart from "../src/components/navbar/Cart";
import Slider from "../src/components/Slider";

import { gql } from "@apollo/client";
import client from "../helper/apollo-client";

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: gql`
      query getCategories {
        categories {
          id
          name_en
          image
        }
      }
    `,
  });
  return {
    props: {
      categories: data.categories,
    },
  };
}

const useStyles = createStyles((theme, _params, getRef) => ({
  base: {
    backgroundColor: "#0F3460",
    width: "100%",
    height: 40,
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    display: "flex",
    paddingLeft: theme.spacing.md,
    alignItems: "center",
  },
  iconWrapper: {
    height: 20,
    display: "flex",
    alignItems: "center",
  },
  header: {
    height: 72,
    width: "100%",
    marginBottom: theme.spacing.xs,
    boxShadow: theme.shadows.xs,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    // left: 0,
    // right: 0,
    // zIndex: 1500,
    // position: 'fixed',
    // top: 0,
    // transition: 'all 350ms ease-in-out 0s'
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: 70,
    },
  },
  searchWrapper: {
    marginRight: 16,
    marginLeft: 16,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      // marginTop: theme.spacing.sm,
    },
  },
  logo: {
    display: "flex",
    marginRight: "auto",
    marginLeft: "auto",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Home = ({ categories }) => {
  const { classes } = useStyles();
  console.log(categories);

  const { user } = useUserContext();

  const user2 = useUserData();

  const { isAuthenticated, isLoading } = useAuthenticationStatus();

  console.log("is loading: " + isLoading);
  console.log("is authed: " + isAuthenticated);
  console.log("user: " + user2);

  return (
    <div>
      <Head>
        <title>Clever</title>
      </Head>

      <div className={classes.base}>
        <div className={classes.wrapper}>
          <div className={classes.iconWrapper}>
            <Phone size={18} />
          </div>
          <div className={classes.iconWrapper}>
            <Text size="md" ml={6}>
              +97251-500-0025
            </Text>
          </div>
        </div>
      </div>

      <Center component="div" className={classes.header}>
        <Grid style={{ width: "100%" }}>
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Grid.Col md={3}>
              <div className={classes.logo}>
                <img src="logo3.jpg" alt="Logo" width="120" height="32" />
              </div>
            </Grid.Col>
          </MediaQuery>

          <Grid.Col md={6} sm={12}>
            <div className={classes.searchWrapper}>
              <SearchBar></SearchBar>
            </div>
          </Grid.Col>
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Grid.Col md={3}>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Icontext></Icontext>
                <Cart></Cart>
              </div>
            </Grid.Col>
          </MediaQuery>
        </Grid>
      </Center>

      <Container size="xl">
        <Box mb={24}>
          <Slider />
        </Box>
        <Box mb={16} p>
          <Title order={3}>Shop by category</Title>
        </Box>

        <SimpleGrid
          cols={6}
          spacing="lg"
          breakpoints={[
            { maxWidth: 1280, cols: 4, spacing: "md" },
            { maxWidth: 960, cols: 3, spacing: "sm" },
            { maxWidth: 600, cols: 2, spacing: "sm" },
          ]}
        >
          <div className={classes.image}>
            <Image
              src={`${imagesUrl}5c70d0c4-92e4-47cc-99f9-22836d7a174d`}
              alt="Logo"
              width="250"
              height="250"
            />
            <Text size="md">Laptops</Text>
          </div>
          <div className={classes.image}>
            <Image
              src={`${imagesUrl}ca5b960a-035d-4b11-a676-b4206c25c3a5`}
              alt="Logo"
              width="250"
              height="250"
            />
            <Text size="md">Desktops</Text>
          </div>
          <div className={classes.image}>
            <Image
              src={`${imagesUrl}0812ff52-9abb-4d6c-bd22-cf1d2eafd302`}
              alt="Logo"
              width="250"
              height="250"
            />
            <Text size="md">Game Consoles</Text>
          </div>
          <div className={classes.image}>
            <Image
              src={`${imagesUrl}eb41ac26-76c4-49b9-93d1-51981120b111`}
              alt="Logo"
              width="250"
              height="250"
            />
            <Text size="md">Printers</Text>
          </div>
          <div className={classes.image}>
            <Image
              src={`${imagesUrl}09fec89b-8697-4e67-a215-25c846ec6aa7`}
              alt="Logo"
              width="250"
              height="250"
            />
          </div>
          <div className={classes.image}>
            <Image
              src={`${imagesUrl}09fec89b-8697-4e67-a215-25c846ec6aa7`}
              alt="Logo"
              width="250"
              height="250"
            />
          </div>
          <div className={classes.image}>
            <Image
              src={`${imagesUrl}09fec89b-8697-4e67-a215-25c846ec6aa7`}
              alt="Logo"
              width="250"
              height="250"
            />
          </div>
          <div className={classes.image}>
            <Image
              src={`${imagesUrl}09fec89b-8697-4e67-a215-25c846ec6aa7`}
              alt="Logo"
              width="250"
              height="250"
            />
          </div>
          <div className={classes.image}>
            <Image
              src={`${imagesUrl}09fec89b-8697-4e67-a215-25c846ec6aa7`}
              alt="Logo"
              width="250"
              height="250"
            />
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Home;
