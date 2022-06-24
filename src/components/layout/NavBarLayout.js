import NavBar from "components/navbar/NavBar";
import TopNav from "components/navbar/TopNav";
import { Container } from "@mantine/core";

const NavBarLayout = ({ children }) => {
  return (
    <>
      <header>
        <TopNav />
        <NavBar />
      </header>
      <main>
        <Container size="xl">{children}</Container>
      </main>
    </>
  );
};

export default NavBarLayout;
