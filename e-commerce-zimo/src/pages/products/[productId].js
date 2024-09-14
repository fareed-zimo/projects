import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Swal from "sweetalert2";
import Layout from "@/components/Layout";
import { auth } from "@/firebase/firebase-config";
import { useRouter } from "next/router";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export async function getServerSideProps(context) {
  const { params } = context;
  try {
    const res = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );
    const product = await res.json();
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Failed to fetch product data.", error);
    return {
      notFound: true,
    };
  }
}

function Productdetails({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const loggedInUser = auth?.currentUser;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  const images = product.images.map((img) => {
    return {
      original: img,
      thumbnail: img,
    };
  });

  const handleAddToCart = () => {
    const errorMsg = "Please login before adding to cart";
    try {
      if (!loggedInUser) {
        throw errorMsg;
      }
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          image: product.thumbnail,
          price: product.price,
        })
      );
      Swal.fire({
        icon: "success",
        title: "Product Add to Cart",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      if (error === errorMsg) {
        Swal.fire({
          icon: "info",
          title: errorMsg,
          showCancelButton: true,
          confirmButtonText: "Sign in",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/signin?redirected=true");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <>
      <Layout>
        <div className="bg-white border-1.5 rounded-lg shadow relative m-10">
          <div className="lg:flex justify-center items-center lg:space-x-10">
            <div className="flex justify-center p-5">
              <ImageGallery items={images} />
            </div>
            <div className="space-y-6 p-5 flex flex-col lg:w-1/2  sm:w-full md:text-center lg:text-left">
              <div>
                Brand:{" "}
                <span className="font-semibold text-gray-700">
                  {product.brand}
                </span>
              </div>
              <div className="text-5xl ">
                Title: <span className="font-bold">{product.title}</span>
              </div>
              <div>
                Category:{" "}
                <span className="font-semibold">{product.category}</span>
              </div>
              <div>
                Description:{" "}
                <span className="font-semibold text-gray-400">
                  {product.description}
                </span>
              </div>
              <div>
                Rating: <span className="font-semibold">{product.rating}</span>
              </div>
              <div>
                Price:{" "}
                <span className="font-semibold text-xl px-2">
                  ${product.price}
                </span>
                <span className="bg-red-100 border border-red-500 rounded-md text-red-500 px-1 py-0.5 font-bold text-sm	">
                  {product.discountPercentage}% OFF
                </span>
              </div>
              <div>
                Stock: <span className="font-semibold">{product.stock}</span>
              </div>
              <div className="flex justify-start md:justify-center  lg:justify-start">
                <Button
                  variant="contained"
                  sx={{ maxWidth: 170 }}
                  startIcon={<ShoppingCartIcon />}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Productdetails;
