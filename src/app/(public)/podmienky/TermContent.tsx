// src/views/public/TermsContent.tsx

import React from "react";
import { Typography, Container } from "@mui/material";

// TermsContent Component
const TermsContent = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Terms of Service
      </Typography>
      <Typography variant="body1" paragraph>
        These are the terms and conditions for using SnapZoška. Please read them carefully.
      </Typography>
      {/* Additional terms and content can be added here */}
    </Container>
  );
};

export default TermsContent;
