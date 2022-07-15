import { createStyles, MediaQuery, Grid, Center } from "@mantine/core";
import SearchBar from "components/navbar/SearchBar";
import Icontext from "components/navbar/Icontext";
import Cart from "components/navbar/Cart";
import Image from "next/image";

const useStyles = createStyles((theme, _params, getRef) => ({
  header: {
    height: 72,
    width: "100%",
    marginBottom: theme.spacing.xs,
    boxShadow: theme.shadows.xs,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: 70,
    },
  },
  searchWrapper: {
    marginRight: 16,
    marginLeft: 16,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {},
  },
  logo: {
    display: "flex",
    marginRight: "auto",
    marginLeft: "auto",
  },
}));

const NavBar = () => {
  const { classes } = useStyles();
  return (
    <Center component="div" className={classes.header}>
      <Grid style={{ width: "100%" }}>
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Grid.Col md={3}>
            <div className={classes.logo}>
              {/* <Image src="logo3.jpg" alt="Logo" width="120" height="32" /> */}
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
  );
};

export default NavBar;
