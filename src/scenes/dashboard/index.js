import React from 'react';
import { Box } from '@mui/material';import ProductCount from './productCount'; // Import ProductCount component
import OrderCount from './orderCount'; // Import OrderCount component

const Dashboard = () => {
  
    return (
      <Box m="20px">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
          mb="20px" // Added margin bottom for spacing
        >
          {/* PRODUCT COUNT */}
          <Box
            gridColumn="span 3"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ProductCount />
          </Box>
  
          {/* ORDER COUNT */}
          <Box
            gridColumn="span 3"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <OrderCount />
          </Box>
        </Box>
      </Box>
    );
  };
  export default Dashboard;