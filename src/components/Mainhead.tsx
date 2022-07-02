import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";

function Mainhead(props: any) {
  return (
    <React.Fragment>
      <Box height={"100vh"}>
        <Box display={"block"} mt={2}>
          <Typography variant="h1">
            <Typography variant="h2">Hi, my name is </Typography>
            Calin Doran
          </Typography>
          <Typography variant="h2">
            I like to make things that live on the internet!
          </Typography>
          <Box mt={1}>
            <Typography variant="body2">
              I'm a software developer based in Ireland, and a graduate of
              <Link
                variant="body1"
                underline="none"
                href="https://www.itcarlow.ie/"
              >
                {" "}
                Institute of Technology, Carlow{" "}
              </Link>
              with a Bachelor of Science (Honours) in Software Development.
            </Typography>
            <Typography variant="body2">
              Currently specializing in building and designing web applications,
              and anything in between.
            </Typography>
          </Box>
          <Box mt={2}>
            <Button variant="outlined" href="#contact">
              Get In Touch
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Mainhead;
