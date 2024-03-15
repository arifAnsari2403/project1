import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { mockDataProduct } from '../../data/mockData'; // Assuming you have mock orders data

const OrderCount = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Calculate the total number of orders
  const totalOrders = mockDataProduct.length;

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
        Total Number of Orders: {totalOrders}
      </Typography>
    </Box>
  );
};

export default OrderCount;
