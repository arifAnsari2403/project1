import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { mockDataProduct } from '../../data/mockData';

const ProductCount = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Calculate the total number of products
  const totalProducts = mockDataProduct.length;

  return (
    <Box
      m="20px"
      sx={{
        backgroundColor: colors.primary[400],
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      <Typography variant="h6" color={colors.greenAccent[300]}>
        Total Number of Products: {totalProducts}
      </Typography>
    </Box>
  );
};

export default ProductCount;
