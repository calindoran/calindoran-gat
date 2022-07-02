import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function StickyFooter() {
  return (
    <React.Fragment>
      <Box component="footer" p={2}>
        <Container maxWidth="sm">
          <Box display={"flex"} gap={2}>
            <IconButton size="small" href="https://www.github.com/calindoran">
              <GitHub />
            </IconButton>
            <IconButton
              size="small"
              href="https://www.linkedin.com/in/calin-doran/"
            >
              <LinkedIn />
            </IconButton>
            <Typography variant="overline" color="text.secondary">
              {"Copyright © "}
              <Link color="inherit" href="https://calindoran.com/">
                calindoran.com
              </Link>{" "}
              {new Date().getFullYear()}
            </Typography>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
