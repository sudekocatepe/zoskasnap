// src/app/(public)/layout.tsx
import Container from "@mui/material/Container";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container sx={{ padding: 3 }}>
      {children} {/* Render public pages */}
    </Container>
  );
};

export default MainLayout;
