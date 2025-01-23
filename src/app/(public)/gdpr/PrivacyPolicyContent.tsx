// src/views/public/PrivacyPolicyContent.tsx

import React from 'react';
import { Typography, Container } from '@mui/material';

// PrivacyPolicyContent Component
const PrivacyPolicyContent = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
       Zásady ochrany osobných údajov
      </Typography>
      <Typography variant="body1" paragraph>
      Toto je stránka zásad ochrany osobných údajov pre SnapZoška. Tu môžete popísať podmienky a ustanovenia, zásady ochrany osobných údajov a ďalšie informácie.
      </Typography>
      {/* You can add more content here as needed */}
    </Container>
  );
};

export default PrivacyPolicyContent;
