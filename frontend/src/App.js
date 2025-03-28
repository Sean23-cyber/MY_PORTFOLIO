import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Card, CardContent, List, ListItem, Box, Link, Avatar, Divider, Grid } from '@mui/material';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((result) => {
      if (result) {
        setData(result);
      }
    });
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        minHeight: '100vh',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Profile Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Avatar 
          src="/profile.jpg" 
          alt="Profile Picture" 
          sx={{ width: 120, height: 120, marginBottom: 2, border: '3px solid #00BFFF' }} 
        />
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Aryan Chaturvedi
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: '18px', opacity: 0.8, marginBottom: 3 }}>
          {data?.about || "Passionate developer, eager to create and innovate!"}
        </Typography>
      </motion.div>

      <Divider sx={{ width: '60%', backgroundColor: '#333', marginBottom: 4 }} />

      {/* Skills Section */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#00BFFF' }}>
        Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data?.skills?.map((skill, index) => (
          <Grid item key={index}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: index * 0.15 }}
            >
              <Box
                sx={{
                  backgroundColor: '#292929',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  boxShadow: '0px 2px 5px rgba(255, 255, 255, 0.1)',
                }}
              >
                {skill}
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ width: '60%', backgroundColor: '#333', marginTop: 4, marginBottom: 4 }} />

      {/* Projects Section */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#00BFFF' }}>
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {data?.projects?.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                sx={{
                  backgroundColor: '#292929',
                  borderRadius: '10px',
                  padding: 2,
                  boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': { backgroundColor: '#00BFFF' },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, marginBottom: 2 }}>
                    {project.description}
                  </Typography>
                  <Link href={project.link} target="_blank" sx={{ color: '#00BFFF', fontWeight: 'bold', textDecoration: 'none' }}>
                    View Project
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
