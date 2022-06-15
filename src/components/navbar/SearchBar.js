import React from "react";
import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { Search, ArrowRight, ArrowLeft } from "tabler-icons-react";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  container: {
    width: '100%',
  },
}));

const SearchBar = (props) => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <TextInput
        icon={<Search size={18} />}
        radius="xl"
        size="md"
        rightSection={
          <ActionIcon
            size={32}
            radius="xl"
            color={theme.primaryColor}
            variant="filled"
          >
            {theme.dir === "ltr" ? (
              <ArrowRight size={18} />
            ) : (
              <ArrowLeft size={18} />
            )}
          </ActionIcon>
        }
        placeholder="Search everything at Clever store"
        rightSectionWidth={42}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
