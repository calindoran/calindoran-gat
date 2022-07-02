import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Fab,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
  Zoom,
} from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Mainhead from "../components/Mainhead";
import MediaCard from "../components/MediaCard";
import ExperienceData from "../data/Experience";
import ProjectsData from "../data/Projects";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function App(props: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...blue,
            ...(mode === "dark" && {
              main: red[300],
            }),
          },
          text: {
            ...(mode === "light"
              ? {
                  primary: grey[900],
                  secondary: grey[800],
                }
              : {
                  primary: "#fff",
                  secondary: grey[500],
                }),
          },
        },
      }),
    [mode]
  );

  const pages = ["Experience", "Projects", "Contact"];

  return (
    <Box className={"Mainhead"}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HideOnScroll {...props}>
            <AppBar
              variant="outlined"
              color="transparent"
              style={{ border: "none" }}
            >
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>

                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    {pages.map((page) => (
                      <Button key={page} onClick={handleCloseNavMenu}>
                        {page}
                      </Button>
                    ))}
                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Toggle Theme">
                      <IconButton
                        onClick={colorMode.toggleColorMode}
                        color="inherit"
                        edge="end"
                      >
                        {theme.palette.mode === "dark" ? (
                          <Brightness7Icon />
                        ) : (
                          <Brightness4Icon />
                        )}
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
          </HideOnScroll>
          <Toolbar id="back-to-top-anchor" />
          <Container>
            <section id="home">
              <Box m={1}>
                <Mainhead />
              </Box>
            </section>
            <section id="about">
              <Box m={1}>
                <Typography variant="h4" mb={2}>
                  About
                </Typography>
                <About />
              </Box>
            </section>
            <section id="experience">
              <Box m={1}>
                <Typography variant="h4" mb={2}>
                  Experience
                </Typography>
                {ExperienceData.map((item) => {
                  return <Experience key={item.id} {...item} />;
                })}
              </Box>
            </section>
            <section id="projects">
              <Box m={1}>
                <Typography variant="h4" mb={2}>
                  Projects
                </Typography>
                <Box display={"flex"} gap={1}>
                  {ProjectsData.map((item) => {
                    return <MediaCard key={item.id} {...item} />;
                  })}
                </Box>
              </Box>
            </section>
            <section id="contact">
              <Box m={1}>
                <Typography variant="h4" mb={2}>
                  Contact
                </Typography>
                <Contact />
              </Box>
            </section>
            <section id="footer">
              <Box m={1}>
                <Footer />
              </Box>
            </section>
          </Container>
          <ScrollTop {...props}>
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Box>
  );
}
