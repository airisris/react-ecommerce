import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          borderBottom: "1px solid #ddd",
          mx: 7,
          py: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Welcome to My Store
        </Typography>
      </Box>
    </>
  );
};

export default Header;
