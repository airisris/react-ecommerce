import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import { Link } from "react-router";
import { getProducts } from "../utils/api";
import { useState, useEffect } from "react";

export default function Products() {
  // to store data from /movies API
  const [products, setProducts] = useState([]);
  // to store what genre to filter
  const [category, setCategory] = useState("all");

  // useEffect
  useEffect(() => {
    // get movies from API
    getProducts(category).then((data) => {
      setProducts(data);
    });
  }, [category]);

  return (
    <>
      {/* header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          py: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Welcome to My Store
        </Typography>
      </Box>

      {/* Movies table */}
      <Container>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 3,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Products
          </Typography>
          <Button variant="contained" color="success">Add New</Button>
        </Box>
        <Box sx={{ pb: "20px" }}>
          <FormControl sx={{ minWidth: "250px" }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ bgcolor: "white", pr: "5px" }}
            >
              Filter By Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={(event) => setCategory(event.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value={"Accessories"}>Accessories</MenuItem>
              <MenuItem value={"Games"}>Games</MenuItem>
              <MenuItem value={"Consoles"}>Consoles</MenuItem>
              <MenuItem value={"Subscriptions"}>Subscriptions</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
                <Card sx={{ minWidth: 275, p: "20px" }}>
                  <CardContent sx={{ m: 0, p: 0 }}>
                    <Typography
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      {product.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "20px",
                      }}
                    >
                      <Chip variant="outlined" color="success" label={`$ ${product.price}`} />
                      <Chip variant="outlined" color="warning" label={product.category} />
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ width: "100%", my: "15px" }}
                    >
                      Add To Cart
                    </Button>
                  </CardContent>
                  <CardActions sx={{ m: 0, p: 0 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="info"
                        sx={{ borderRadius: 5 }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ borderRadius: 5 }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
