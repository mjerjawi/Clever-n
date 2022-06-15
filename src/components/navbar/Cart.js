import { createStyles } from "@mantine/core";
import { ShoppingCart } from "tabler-icons-react";
import { Indicator } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: 'center',
    color: theme.colors.dark[3],
    // paddingLeft: 8,
    // paddingRight: 4,
    width: 100,
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
    paddingTop:6
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
}));

const Cart = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.icon}>
        <Indicator label="0" size={16}>
          <ShoppingCart size={24}></ShoppingCart>
        </Indicator>
      </div>
      <div>
        <div>
          <span className={classes.lineOne}>Cart</span>
          <span className={classes.lineTwo}>&#x20AA;0.00</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
