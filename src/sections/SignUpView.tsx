"use client";

import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Link,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";

export default function SignUpView() {
  const [agreed, setAgreed] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(event.target.checked);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Logo / Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Registrácia
      </Typography>

      {/* Google Sign-Up Button */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => signIn("google")}
        sx={{ mb: 1 }}
      >
        Registrovať sa účtom Google
      </Button>


      {/* GDPR agreement */}
      <div style={{ marginBottom: "16px" }}>
        <input
          type="checkbox"
          id="gdpr"
          checked={agreed}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="gdpr">
          I agree with{" "}
          <Link href="/gdpr" sx={{ textDecoration: "none", color: "primary.main" }}>
            GDPR
          </Link>{" "}
          and{" "}
          <Link href="/podmienky" sx={{ textDecoration: "none", color: "primary.main" }}>
            terms of use
          </Link>
        </label>
      </div>


      {/* Message for users with an existing account */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        Already have an account?{" "}
        <Link href="/auth/prihlasenie" sx={{ textDecoration: "none", color: "primary.main" }}>
          Go to Sign In
        </Link>
      </Typography>
    </Container>
  );
}
