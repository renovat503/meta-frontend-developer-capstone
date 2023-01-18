import { createStyles, Radio, RadioProps } from "@mantine/core";
import { colors } from "src/theme";

const useStyles = createStyles((theme) => ({
  radio: {
    backgroundColor: colors.primary,
  },
  inner: {
    marginLeft: 50,
    "& input": {
      "&:checked": {
        backgroundColor: colors.primary,
        borderColor: colors.light,
      },
    },
  },
  label: {
    color: colors.light,
    fontSize: 24,
    fontWeight: 600,
    margin: 0,
    padding: 0,
  },
}));

const RadioField = (props: RadioProps) => {
  const { classes } = useStyles();

  return (
    <Radio
      {...props}
      classNames={{
        radio: classes.radio,
        inner: classes.inner,
        label: classes.label,
      }}
    />
  );
};

export default RadioField;
