import { createStyles, Text, SimpleGrid, Title, Box } from "@mantine/core";
import Image from "next/image";
import { imagesUrl } from "../helper/imagesUrl";

import { useUserContext } from "../src/contexts/UserProvider";

import { useUserData, useAuthenticationStatus } from "@nhost/nextjs";

import Head from "next/head";
import Slider from "../src/components/Slider";

import { gql } from "@apollo/client";
import client from "../helper/apollo-client";

import NavBarLayout from "components/layout/NavBarLayout";

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

  return (
    <div>
      <Head>
        <title>Clever</title>
      </Head>

      <NavBarLayout>
        <Box mb={24}>
          <Slider />
        </Box>
        <Box mb={16} p>
          <Title order={3}>Shop by category</Title>
        </Box>

        <SimpleGrid
          cols={5}
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
      </NavBarLayout>
    </div>
  );
};

export default Home;
