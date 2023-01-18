import * as React from "react";
import { Container, createStyles, Grid } from "@mantine/core";

const images = [
  "/restaurant.jpg",
  "/restaurant-chef.jpg",
  "restaurant-food.jpg",
];

const useStyles = createStyles((theme) => ({
  image: {
    height: 300,
    width: 300,
    objectFit: "cover",
    borderRadius: theme.radius.xl,
  },
}));

const ReservationsBottom = () => {
  const { classes } = useStyles();

  const pictures = React.useMemo(
    () =>
      images.map((image) => (
        <Grid.Col key={image} md={4}>
          <img src={image} className={classes.image} />
        </Grid.Col>
      )),
    []
  );

  return (
    <Container>
      <Grid my="xl">{pictures}</Grid>
    </Container>
  );
};

export default ReservationsBottom;
