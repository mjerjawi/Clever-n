import { createStyles, Text } from "@mantine/core";
import { Phone } from "tabler-icons-react";

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
}));

const TopNav = () => {
  const { classes } = useStyles();
  return (
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
  );
};

export default TopNav;
