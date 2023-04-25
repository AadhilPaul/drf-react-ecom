import * as React from "react";
import arrowDown from "../assets/arrow-down.png";
import arrowUp from "../assets/arrow-up.png";
import {
  Link,
  IconButton,
  Divider,
  ButtonBase,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import type { Product } from "../components/Products";
import CloseIcon from "@mui/icons-material/Close";
import axiosInstance from "../axios";

interface CartItem {
  id?: number;
  product?: Product;
  quantity?: number;
  date_added?: string;
  order?: number;
}

function CartPage() {
  const [cartItems, setCartItems] = React.useState<CartItem[]>();

  function getData(): void {
    axiosInstance.get("store/cart/").then((res) => {
      setCartItems(res.data);
      console.log(cartItems);
    });
  }

  React.useEffect(() => {
    getData();
  }, []);

  function deSelectAllItems(): void {
    console.log("All items deselected!");
  }
  return (
    <Paper
      variant="outlined"
      sx={{
        backgroundColor: "#fcfcfc",
        margin: "6rem 10rem",
        padding: "2rem 5rem",
      }}
    >
      <Typography variant="h5">Shopping Cart</Typography>
      <Link
        onClick={deSelectAllItems}
        color="secondary"
        underline="hover"
        component="button"
      >
        DeSelect All Items
      </Link>
      <Divider sx={{ marginY: 1.8 }} />
      <Grid container gap={5}>
        {cartItems ? (
          cartItems?.map((product, index) => (
            <Grid container spacing={3} key={index}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <img src={product.product?.image} width={135} height={129} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={0}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {product.product?.name}
                    </Typography>
                    <Typography variant="body2" color="green" gutterBottom>
                      In Stock
                    </Typography>
                    <Grid item container direction="row" alignItems="center">
                      <img src={arrowUp} height={8} width={10} style={{cursor: "pointer"}} onClick={() => console.log('increase')} />
                      <Typography sx={{marginX: "3px"}} variant="body2" component="div">
                        {product.quantity}
                      </Typography>
                      <img src={arrowDown} height={8} width={10} style={{cursor: "pointer"}} onClick={() => console.log('decrease')} />
                    </Grid>
                    <Typography variant="subtitle2">
                      <strong>${product.product?.price}</strong>
                    </Typography>
                    <Typography variant="overline" component="div">
                      Total: ${product.product?.price * product?.quantity}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton aria-label="close" color="inherit" size="small">
                    <CloseIcon color="error" fontSize="inherit" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          ))
        ) : (
          <Typography variant="h1">Add to Cart Something, Brokie!!</Typography>
        )}
      </Grid>
    </Paper>
  );
}

export default CartPage;
