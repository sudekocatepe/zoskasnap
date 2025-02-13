import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { getPosts } from "./actions";


type Post = {
  id: string;
  userId: string;
  imageUrl: string;
  caption: string | null;
  createdAt: Date;
  updatedAt: Date;
  user: {
    name: string | null;
    image: string | null;
  };
};

export const metadata = { title: "Zoznam prispevkov | INSTAGRAM" };

export default async function PostsList() {
  const posts = await getPosts();

  return (
    <div style={{ paddingBottom: "80px", paddingLeft: "16px", paddingRight: "16px" }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
        Zoznam prispevkov
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1200px", // Added a max width to ensure the content doesn't stretch too wide
        }}
      >
        {posts.map((post: Post) => (
          <Paper
            key={post.id}
            elevation={3}
            sx={{
              padding: 2,
              borderRadius: 2,
              boxShadow: 3,
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={post.imageUrl}
              alt={post.caption || "Post image"}
              width={300} 
              height={300}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
            <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
              {post.caption || "No caption available"}
            </Typography>
          </Paper>
        ))}
      </div>
    </div>
  );
}