import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, TextField, Typography, Alert, Card, ToggleButtonGroup, ToggleButton, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

const Login = () => {
  const [role, setRole] = useState("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [flip, setFlip] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
        role,
      });
  
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
  
        // ✅ Redirect based on role
        if (role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/home");
        }
      }
    } catch (err) {
      setError("❌ Invalid Username or Password");
    } finally {
      setLoading(false);
    }
  };
  

  const handleRoleChange = (e, newRole) => {
    if (newRole) {
      setFlip(true);
      setTimeout(() => {
        setRole(newRole);
        setFlip(false);
      }, 300);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <motion.div animate={{ rotateY: flip ? 180 : 0 }} transition={{ duration: 0.3 }}
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
        <Card className="p-4 shadow-lg rounded" sx={{ width: 380, textAlign: "center", backfaceVisibility: "hidden" }}>
          <Typography variant="h5" color="primary" gutterBottom>
            {role === "admin" ? "Admin Login" : "User Login"}
          </Typography>
          <ToggleButtonGroup
            value={role}
            exclusive
            onChange={handleRoleChange}
            sx={{ marginBottom: 2 }}
          >
            <ToggleButton value="admin">Admin</ToggleButton>
            <ToggleButton value="user">User</ToggleButton>
          </ToggleButtonGroup>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleLogin} style={{ transform: flip ? "rotateY(180deg)" : "rotateY(0deg)" }}>
            <TextField label="Username" variant="outlined" fullWidth margin="normal"
              value={username} onChange={(e) => setUsername(e.target.value)} required />
            <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal"
              value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit" variant="contained" fullWidth color="primary" sx={{ mt: 2 }}
              disabled={loading} startIcon={loading && <CircularProgress size={20} />}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Login;
