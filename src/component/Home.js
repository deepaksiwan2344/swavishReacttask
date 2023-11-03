import React from "react";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  SparkLineChart,
  BarChart,
  useDrawingArea,
  PieChart,
} from "@mui/x-charts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// import { IconFlagTR, IconFlagDE, IconFlagUS } from "material-ui-flags";
// import IconButton from "@mui/icons-material/IconButton";

const useStyle = makeStyles({
  maimwrap: {
    marginTop: "2rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  facebook: {
    padding: "3rem",
    textAlign: "center",
    fontSize: "2rem !important",
    fontWeight: "700 !important",
    color: "blue",
    "@media(max-width: 600px)":{
        fontSize: "1.4rem !important",
        marginTop: "3rem !important",
        fontWeight: "700 !important"
    }
  },
  facebook_header: {
    padding: "1rem",
    border: "2px solid #b3adad",
  },
  dashbordbox: {
    borderRadius: "10px",
    backgroundColor: "#cacaeb",
    marginTop: "3rem",
    padding: "10px 10px",
    border: "2px solid #efe7e7",
  },
  dashbordbox3:{
    borderRadius: "10px",
    backgroundColor: "#cacaeb",
    height: "18rem",
    marginTop: "3rem",
    padding: "10px 10px",
    border: "2px solid #efe7e7",
  },
  facebookicons: {
    color: "blue !important",
    fontSize: "20px",
  },
  piechartbox:{
    backgroundColor: "#cacaeb",
    borderRadius: "10px",
    marginTop: "3rem",
    padding: "10px 10px",
    border: "2px solid #efe7e7",
  },
  piechartmiddlebox:{
    borderRadius: "10px",
    backgroundColor: "#cacaeb",
    marginTop: "3rem",
    padding: "10px 10px",
    border: "2px solid #efe7e7",
    height: "15rem"
  },
  countryflag:{
    width: "2rem",
    height: "1.5rem"
  },
  typo:{
     textAlign: "center !important",
     marginTop: "4rem !important" 
  }
  
  
});

const Home = () => {
  const classes = useStyle();

/********************************/
  const data = [
    { value: 5, label: "shares" },
    { value: 10, label: "likes" },
    { value: 15, label: "comment" },
  ];
 
  const size = {
    width: 315,
    height: 200,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "3,805",
    fontSize: 20,
  }));
  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }


  return (
    <>
      <Box className={classes.maimwrap}>
        <Container>
          <Box className={classes.header} sx={{ display: "flex" }}>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ marginTop: "6px", fontWeight: "600" }}>
                Your
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: "blue",
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "800",
                }}
              >
                Logo
              </Typography>
            </Box>
            <Box>
              <Typography>Facebook Dashboard</Typography>
              <Typography sx={{textAlign: "right", fontSize: "11px", }}>Nov 2023</Typography>
            </Box>
          </Box>
          <Typography className={classes.facebook}>
            Facebook Dashboard
          </Typography>
          <Box className={classes.facebook_header}>
            <Typography sx={{ fontSize: "1.2rem" }}>facebook</Typography>
          </Box>
          <Box>
          <Grid container spacing={2}>
            <Grid item lg={3} sm={12} md={6} xs={12} >
              <Box className={classes.dashbordbox}>
                <Box sx={{ display: "flex" }}>
                  <Typography>
                    <FacebookIcon className={classes.facebookicons} />
                  </Typography>
                  <Typography>facebook</Typography>
                 
                </Box>
                <Typography
                    variant="h4"
                   className={classes.typo}
                  >
                    723
                  </Typography>
                <Box sx={{ flexGrow: 1, marginTop: "3rem" }}>
                  <SparkLineChart
                    data={[1, 100, 30, 50, 200, 50, 178, 60, 130]}
                    height={100}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} sm={12} md={6} xs={12}>
              <Box className={classes.dashbordbox}>
                <Box sx={{ display: "flex" }}>
                  <Typography>
                    <FacebookIcon className={classes.facebookicons} />
                  </Typography>
                  <Typography>Followers</Typography>
                 
                </Box>
                <Typography
                    variant="h4"
                    className={classes.typo}
                  >
                    199
                  </Typography>
                <Box sx={{ flexGrow: 1,marginTop: "3rem" }}>
                  <SparkLineChart
                    data={[20, 100, 30, 50, 20, 50, 17, 60, 130]}
                    height={100}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} sm={12} md={6} xs={12}  >
              <Box className={classes.dashbordbox3}>
                <Box sx={{ display: "flex" }}>
                  <Typography>
                    <FacebookIcon className={classes.facebookicons} />
                  </Typography>
                  <Typography>facebook like by country</Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
                    <Box sx={{display: "flex", gap:"10px"}}>
                    <Typography 
                    className={classes.countryflag}
                    component={"img"}
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
                    />
                    <Typography>India</Typography>
                    </Box>
                    <Typography>1399</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} sm={12} md={6} xs={12} >
              <Box className={classes.dashbordbox}>
                <Box sx={{ display: "flex" }}>
                  <Typography>
                    <FacebookIcon className={classes.facebookicons} />
                  </Typography>
                  <Typography>facebook likes by age</Typography>
                </Box>
                <BarChart
                  xAxis={[
                    {
                      id: "barCategories",
                      data: ["10", "20", "30", "40", "50", "60", "70"],
                      scaleType: "band",
                    },
                  ]}
                  series={[
                    {
                      data: [0, 500, 1000, 1500, 2000, 2300, 2500],
                    },
                  ]}
                  width={245}
                  height={260}
                />
              </Box>
            </Grid>
          </Grid>
          </Box>
          {/*  */}
          <Grid container  spacing={2}>
            <Grid item lg={5} sm={12} md={6} xs={12}>
              <Box className={classes.piechartbox}>
                <Box sx={{ display: "flex" }}>
                  <Typography>
                    <FacebookIcon className={classes.facebookicons} />
                  </Typography>
                  <Typography>facebook</Typography>
                 
                </Box>
                <Box sx={{marginTop: "1rem"}}>
                  <PieChart sx={{justifyContent: "center"}} series={[{ data, innerRadius: 80 }]} {...size}>
                    <PieCenterLabel>3,827</PieCenterLabel>
                  </PieChart>
                </Box>
              </Box>

            </Grid>
            <Grid item lg={3} sm={12} md={6} xs={12}>
              <Box className={classes.piechartmiddlebox}>
                <Box sx={{ display: "flex" }}>
                  <Typography>
                    <FacebookIcon className={classes.facebookicons} />
                  </Typography>
                  <Typography>Followers</Typography>
                </Box>
                <Typography
                    variant="h3"
                    sx={{ textAlign: "center", marginTop: "4rem" }}
                  >
                    1,713
                  </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} sm={12} md={6} xs={12}>
              <Box className={classes.piechartbox}>
                <Box sx={{ display: "flex" }}>
                  <Typography>
                    <FacebookIcon className={classes.facebookicons} />
                  </Typography>
                  <Typography>facebook Videos views</Typography>
                </Box>
                <Box sx={{marginTop: "1rem"}}>
                  <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
                    <PieCenterLabel>Paid 41</PieCenterLabel>
                  </PieChart>
                </Box>
               
              </Box>
            </Grid>
          </Grid>
          </Container>
      </Box>
    </>
  );
};

export default Home;
