import { Box, colors } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";





const Bar = () => {
    return(
      <Box m="20px">
        <Header title="Goegraphy Chart" subtitle="Simple Goegraphy Chart"  />
        <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
          <GeographyChart/>
        </Box>
      </Box>
    )
   
}

export default Bar;
