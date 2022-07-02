import { Box } from "@mui/material";
import React from "react";

function About(props: any) {
  return (
    <React.Fragment>
      <Box>
        <h2>A problem solver.</h2>
        <p>
          ‘BSc (Hons) holding Software Engineer with proficiency in providing
          clean, modular code with a critical eye for details and refinement. A
          confident good-humoured professional, with a positive, proactive
          approach to their work.’
        </p>
        <p>
          I enjoy creating things that live on the internet. My goal is to
          always build products that provide pixel-perfect, performant
          experiences to the user.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <div>
          <span>React</span>
          <span>NodeJS</span>
          <span>C#</span>
          <span>.NET</span>
          <span>SQL</span>
        </div>
      </Box>
    </React.Fragment>
  );
}

export default About;
