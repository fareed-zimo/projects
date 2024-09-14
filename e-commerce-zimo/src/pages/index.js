import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";

export async function getServerSideProps() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch Data.", error);
    return {
      props: {
        data: { products: [], total: 0, skip: 0, limit: 30 },
      },
    };
  }
}

const ProductsPage = ({ data }) => {
  const [products, setProducts] = useState(data.products);
  const [total, setTotal] = useState(data.total);
  const [skip, setSkip] = useState(data.skip);
  const [limit, setLimit] = useState(data.limit);
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://dummyjson.com/products?skip=${skip}`);
        const data = await res.json();
        setProducts(data.products);
        setTotal(data.total);
      } catch (error) {
        console.error("Failed to fetch Data.", error);
      }
    }
    fetchData();
  }, [skip, limit]);

  const handlePageChange = (event, page) => {
    const newSkip = (page - 1) * limit;
    setSkip(newSkip);
  };

  return (
    <>
      <Layout>
        {/*  Hero Section */}
        <HeroSection />
        {/* Products Section */}
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 justify-center">
          {products.map((product) => (
            <div
              className="justify-center sm:w-1/2 md:w-1/3 xl:w-1/4 p-6 flex flex-col "
              sx={{
                width: "100%",
                maxWidth: "calc(100% / 3)",
                padding: "1.5rem",
                boxSizing: "border-box",
                flex: "1 1 25%",
              }}
              style={{ textAlign: "center" }}
              key={product.id}
            >
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <Link href={`/products/${product.id}`}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        sx={{ height: 140 }}
                        image={product.thumbnail}
                        title={product.title}
                        alt={product.title}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            maxWidth: "100%",
                          }}
                        >
                          {product.title}
                        </Typography>
                        <Typography variant="h6" color="text.primary">
                          ${product.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            </div>
          ))}
        </div>

        {/* Pagination */}

        <div className="flex justify-center p-6">
          <Pagination
            count={totalPages}
            page={Math.floor(skip / limit) + 1}
            showFirstButton
            showLastButton
            onChange={handlePageChange}
          />
        </div>
      </Layout>
    </>
  );
};

export default ProductsPage;
