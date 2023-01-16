import {
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  Text,
  Title,
} from "@mantine/core";
import { colors } from "src/theme";

const useStyles = createStyles((theme) => ({
  background: {
    backgroundColor: colors.primary,
  },
  button: {
    backgroundColor: colors.secondary,
    "&:hover": {
      backgroundColor: theme.colors.yellow[6],
    },
  },
  imageContainer: {
    position: "relative",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  image: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "auto",
    width: "auto",
    maxHeight: 400,
    maxWidth: 400,
    borderRadius: theme.radius.lg,
  },
}));

const Hero = () => {
  const { classes } = useStyles();

  return (
    <Box py="xl" className={classes.background}>
      <Container>
        <Grid>
          <Grid.Col md={6}>
            <Title c={colors.secondary}>Little Lemon</Title>
            <Title order={3} c={colors.light}>
              Chicago
            </Title>
            <Text my="lg" c={colors.light}>
              We are a family owned <br />
              Mediterranean restaurant, <br />
              focused on traditional <br />
              recipes served with a modern <br />
              twist.
            </Text>
            <Button
              size="md"
              radius="lg"
              c="dark"
              fw="bolder"
              className={classes.button}
            >
              Reserve a Table
            </Button>
          </Grid.Col>
          <Grid.Col md={6} className={classes.imageContainer}>
            <img src="/restaurant-food.jpg" className={classes.image} />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
