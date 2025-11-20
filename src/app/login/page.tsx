


import { Container } from "@mui/material";

export default function LoginPage() {
  return (
     <Container sx={{ py: 12 }}>

      <h2>Login</h2>
      <form
        style={{
          maxWidth: 360,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <label>
          Email
          <input type="email" required />
        </label>
        <label>
          Password
          <input type="password" required />
        </label>
        <button type="submit">Sign In</button>
      </form>
          </Container>
  );
}
