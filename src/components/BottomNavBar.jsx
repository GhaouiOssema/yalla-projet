import {  useState } from "react";
import { bottomMenu } from "../utils/navigationLink";
import { Grid ,Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import AddIcon from "@mui/icons-material/Add";

const BottomNavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const drawerBleeding = 56;

  const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor:
      theme.palette.mode === "light"
        ? grey[100]
        : theme.palette.background.default,
  }));

  const StyledBox = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
  }));

  const Puller = styled("div")(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
  }));

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: 0,
    boxShadow: "none",
  }));

  return (
    <>
      {open && (
        <Root>
          <CssBaseline />
          <Global
            styles={{
              ".MuiDrawer-root > .MuiPaper-root": {
                height: `calc(50% - ${drawerBleeding}px)`,
                overflow: "visible",
              },
            }}
          />
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <StyledBox
              sx={{
                position: "absolute",
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: "visible",
                right: 0,
                left: 0,
              }}
            >
              <Puller />
              <Typography
                sx={{
                  p: 2,
                  color: "text.secondary",
                  height: 56,
                }}
              />
            </StyledBox>
            <StyledBox
              sx={{
                px: 2,
                pb: 2,
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                spacing={2}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="border-2"
              >
                <Grid
                  item
                  xs={10}
                  sm={10}
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Item
                    onClick={() => {
                      navigate("/ajouter-une-annonce");
                      setOpen(false);
                    }}
                    className="border-b-2 h-full flex flex-col items-center justify-center cursor-pointer"
                  >
                    <AddIcon
                      sx={{
                        fontSize: 40,
                        width: "100%",
                      }}
                    />
                    <Typography className="w-full" sx={{ mt: 2 }}>
                      AJOUTER UNE ANNONCE
                    </Typography>
                  </Item>
                </Grid>
                <Grid
                  item
                  xs={10}
                  sm={10}
                  sx={{ width: "100%", height: "100%" }}
                >
                  <Item
                    onClick={() => {
                      navigate("/ajouter-un-trajet");
                      setOpen(false);
                    }}
                    className="h-full flex flex-col items-center justify-center cursor-pointer"
                  >
                    <AddRoadIcon
                      sx={{
                        fontSize: 40,
                        width: "100%",
                      }}
                    />
                    <Typography sx={{ mt: 2 }} className=" w-full">
                      CRÉE UN TRAJET
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </StyledBox>
          </SwipeableDrawer>
        </Root>
      )}
   
   {
    ////////////////////////////// ahaaaaya el active setactiveindex(idx) adhika awini hasb lindex yetbadel win tenzel bel map wkenha true temchi tbaddel fel style else false
   }
   
      <div className=" bg-yellow-500  fixed bottom-0 w-full">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          {bottomMenu.map((btn, idx) => (
            <Box
              key={idx}
              data-tooltip-target={btn.dataTooltipTarget}
              onClick={() => {
                setActiveIndex(idx);
                if (btn.dataTooltipTarget === "tooltip-add") setOpen(true);
                navigate(btn.link);
              }}
              type={btn.type}
              className={btn.className}
              sx={{
                "&:hover": {
                  color: "#9a3412",
                  backgroundColor: "#fde68a",
                },
                backgroundColor: activeIndex === idx ? "#fde68a" : "",
                color: activeIndex === idx ? "#9a3412" : "white",
              }}
            >
              <btn.icon
                sx={{
                  width: btn.svg.w,
                  height: btn.svg.h,
                  "&:hover": {
                    color: "#f9fafb",
                    backgroundColor: "#f9fafb",
                  },
                }}
              />
            </Box>
          ))}
        </div>
      </div>
    </>
  );
};

BottomNavBar.propTypes = {
  window: PropTypes.func,
};

export default BottomNavBar;
