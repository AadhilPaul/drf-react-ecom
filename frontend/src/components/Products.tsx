import * as React from "react";
import {
  Grid,
  Skeleton,
  Button,
  Card,
  CardMedia,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";

interface Product {
  id?: number;
  name?: string;
  price?: string;
  digital?: boolean;
  image?: string;
}

function Products() {
  const [products, setProducts] = React.useState<Product[]>();

  async function getData(): Promise<void> {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/store/product-list/"
      );
      setProducts(response.data);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  console.log("Products: ", products);

  return (
    <Paper
      variant="outlined"
      sx={{ backgroundColor: "#fcfcfc", margin: "6rem 10rem", padding: "40px" }}
    >
      <Grid container rowSpacing={8} columnSpacing={5}>
        {products ? (
          products?.map((product, index) => (
            <Grid item xs={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#fcfcfc",
                  padding: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <Grid
                  container
                  direction="column"
                  justifyContent="space-evenly"
                  alignItems="baseline"
                >
                  <Grid sx={{ mt: 1 }} container justifyContent="space-between">
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="h6">${product.price}</Typography>
                  </Grid>
                  <Grid sx={{ my: 1 }} container gap={1}>
                    <Button variant="contained" size="small">
                      Buy Now
                    </Button>
                    <Button variant="outlined" size="small">
                      Add to Card
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={3}>
              <Box sx={{ width: "100%" }}>
                <CircularProgress color="primary" />
              </Box>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

export default Products;
