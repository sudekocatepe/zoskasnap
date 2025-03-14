// src/views/public/AboutContent.tsx

import React from "react";
import { Typography, Container } from "@mui/material";

// AboutContent Component
const AboutContent = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        O nás
      </Typography>
      <Typography variant="body1" paragraph>
      Vitajte na SnapZoška! Sme tím, ktorý sa venuje poskytovaniu najlepšieho zážitku pre našich používateľov.
      </Typography>
      {/* Additional content can be added here */}
    </Container>
  );
};

export default AboutContent;
