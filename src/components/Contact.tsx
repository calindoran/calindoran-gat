import { Box, Button } from "@mui/material";
import React from "react";

function Contact(props: any) {
  return (
    <React.Fragment>
      <Box>
        <h2>Get In Touch</h2>
        <p>
          I'm currently not seeking new opportunities. But, my inbox is always
          open and if you have a question or just want to say hi, I'll be sure
          to get back to you as soon as possible.
        </p>
        <h3>
          You can contact me via email{" "}
          <Button variant="contained" href="mailto:calindoran@gmail.com">
            Here
          </Button>
        </h3>
      </Box>
    </React.Fragment>
  );
}

export default Contact;
