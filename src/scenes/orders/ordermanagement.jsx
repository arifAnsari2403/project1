// import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProduct } from "../../data/mockData";
import Header from "../../components/Header";

const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [rows, setRows] = useState(mockDataProduct);
  const columns = [
    { field: "id", headerName: "ID", width:100 },
    {
      field: "customerName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "Category",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "stockQuantity",
      headerName: "Stock Quantity",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Orders" subtitle="Managing the Orders" />
      <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <div style={{ height: 400, width: '100%', maxWidth: 1200 }}>
        <DataGrid checkboxSelection rows={mockDataProduct} columns={columns} pageSize={5} rowsPerPageOptions={[5, 10, 20]} />
        </div>
      </Box>
    </Box>
  );
};

export default Orders;