import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Products from "./scenes/productmanagement/productmanagement";
import Orders from "./scenes/orders/ordermanagement";
import { useState } from "react";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/productmanagement" element={<Products />} />
          <Route path="/ordermanagement" element={<Orders />} />
        </Routes>
      </main>
    </div>
    <CssBaseline />
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
