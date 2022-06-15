import { createStyles, Menu } from "@mantine/core";
import { User } from "tabler-icons-react";
import { useUserContext } from "../../contexts/UserProvider";
import Link from "next/link";

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    position: "relative",
    display: "flex",
    color: theme.colors.dark[3],
    justifyContent: "center",

    width: 120,
    height: 42,
    cursor: "pointer",
    border: "1px solid",
    borderColor: "#fff",
    "&:hover": {
      border: "1px solid",
      borderColor: theme.colors.gray[4],
      borderRadius: theme.radius.xl,
      backgroundColor: theme.colors.gray[1],
    },
  },
  icon: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    marginRight: 6,
    height: 36,
  },
  lineOne: {
    margin: 0,
    padding: 0,
    fontWeight: 700,
  },
  lineTwo: {
    display: "block",
    margin: 0,
    padding: 0,
    fontSize: "12px",
    lineHeight: 0.3,
  },
  grey: {
    color: theme.colors.dark[3],
  },
  link: {
    textDecorationLine: "none",
    color: "inherit",
  },
}));

const Icontext = () => {
  const { classes } = useStyles();

  const { user } = useUserContext();

  return (
    <Menu
      control={
        <div className={classes.wrapper}>
          <div className={classes.icon}>
            <User size={22}></User>
          </div>
          <div>
            <div>
              <span className={classes.lineOne}>
                {user ? "Welcome" : "Account"}
              </span>
              <span className={classes.lineTwo}>
                {user ? `${user.metadata.firstname}` : "Sign In"}
              </span>
            </div>
          </div>
        </div>
      }
      size="sm"
      gutter={17}
      trigger="hover"
      delay={500}
    >
      <Menu.Item className={classes.grey}>
        {user ? (
          <Link className={classes.link} href="/account/signup" passHref>
            <a className={classes.link}>Profile</a>
          </Link>
        ) : (
          <Link className={classes.link} href="/account/signup" passHref>
            <a className={classes.link}>Sign In</a>
          </Link>
        )}
      </Menu.Item>
      <Menu.Item className={classes.grey}>
        {user ? (
          <Link className={classes.link} href="/account/signup" passHref>
            <a className={classes.link}>Sign out</a>
          </Link>
        ) : (
          <Link href="/account/signup" passHref>
            <a className={classes.link}>Create an Acoount</a>
          </Link>
        )}
      </Menu.Item>
    </Menu>
  );
};

export default Icontext;
