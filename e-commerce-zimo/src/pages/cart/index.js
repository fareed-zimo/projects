import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/cart/cartSlice";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Swal from "sweetalert2";
import Link from "next/link";
import Layout from "@/components/Layout";
import LoadingWrapper from "@/components/LoadingWrapper";

const Cart = () => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const handleCheckout = () => {
    try {
      dispatch(clearCart());
      Swal.fire({
        icon: "success",
        title: "Checkout complete",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <LoadingWrapper>
        <Layout>
          <div className="flex flex-col lg:flex-row justify-evenly">
            <div className="m-10 lg:w-2/3">
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="mb-2 ">
                    <Card className="max-w-345 min-h-20 sm:flex">
                      <Link href={`/products/${item.id}`}>
                        <CardMedia
                          component="img"
                          className="max-h-36 sm: h-36 sm:max-w-36"
                          image={item.image}
                          alt={item.title}
                        />
                      </Link>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                          justifyItems: "flex-start",
                        }}
                      >
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <div className="text-2xl">{item.title}</div>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              py: 2,
                            }}
                          >
                            <Typography>
                              ${item.price * item.quantity}
                            </Typography>
                            <Button
                              variant="contained"
                              startIcon={<RemoveShoppingCartIcon />}
                              onClick={() => dispatch(removeFromCart(item.id))}
                            >
                              Remove
                            </Button>
                          </Box>
                          <Stack direction={"row"} spacing={2}>
                            <Button
                              variant="outlined"
                              style={{ minWidth: 0, padding: "0px 6px" }}
                              onClick={() =>
                                dispatch(decrementQuantity(item.id))
                              }
                              disabled={item.quantity <= 1}
                            >
                              -
                            </Button>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                            >
                              x{item.quantity}
                            </Typography>
                            <Button
                              variant="outlined"
                              size="small"
                              style={{ minWidth: 0, padding: "0px 6px" }}
                              onClick={() =>
                                dispatch(incrementQuantity(item.id))
                              }
                            >
                              +
                            </Button>
                          </Stack>
                        </CardContent>
                      </Box>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
            <div className="m-10 lg:w-1/3">
              <Card>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="font-bold text-2xl">Summary</div>
                  <div className="flex justify-between mt-5">
                    <div>Total</div>
                    <div className="font-bold">US ${getTotal().totalPrice}</div>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div>Quantity</div>
                    <div className="font-bold">{getTotal().totalQuantity}</div>
                  </div>
                  <div className="flex justify-center mt-5">
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ fontSize: 16, width: 250 }}
                      onClick={handleCheckout}
                      disabled={getTotal().totalQuantity <= 0}
                    >
                      Checkout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Layout>
      </LoadingWrapper>
    </>
  );
};

export default Cart;
