import { useState } from "react";
import { Box,Button,Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProduct } from "../../data/mockData";
import Header from "../../components/Header";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState(mockDataProduct);
  const columns = [
    { field: "id", headerName: "ID", width:100 },
    {
      field: "name",
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
      field: "stockQuantity",
      headerName: "Stock Quantity",
      flex: 1,
    },
    {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: (params) => (
          <div style={{ display: "flex", gap: "8px" }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleUpdate(params.row)}
            >
              <Typography variant="button">Update</Typography>
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleDelete(params.row.id)}
            >
              <Typography variant="button">Delete</Typography>
            </Button>
          </div>
        ),
      },
  ];

  const handleUpdate = (rowData) => {
    // Implement update logic here
    console.log("Update data:", rowData);
  };

  const handleDelete = (id) => {
    // Implement delete logic here
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    console.log("Deleted ID:", id);
  };

  const handleAdd = () => {
    // Implement add logic here
    const newId = Math.max(...rows.map((row) => row.id)) + 1;
    const newRow = { id: newId, name: "New Product", category: 1, price: 0, stockQuantity: 0 };
    const updatedRows = [...rows, newRow];
    setRows(updatedRows);
    console.log("Added new row:", newRow);
  };

  return (
    <Box m="20px">
      <Header title="Products" subtitle="Managing the Products" />
      <Box
        m="40px 0 0 0"
        height="50vh"
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
        <Button variant="contained" color="primary" onClick={handleAdd}>
        </Button>
        <div style={{ height: 400, width: '100%', maxWidth: 1200 }}>
        <DataGrid checkboxSelection rows={mockDataProduct} columns={columns} pageSize={5} rowsPerPageOptions={[5, 10, 20]} />
        </div>
      </Box>
    </Box>
  );
};

export default Products;