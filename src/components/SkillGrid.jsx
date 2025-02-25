import React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Columns } from "lucide-react";

const Item = styled(Paper)(({ theme }) => ({
  position: "relative",
  height: "auto",
  border: "2px solid white",
  background: "rgba(235, 227, 58, 0.1)",
  backdropFilter: "blur(20px)",
  padding: theme.spacing(3),
  textAlign: "center",
  color: "#ffffff",
  borderRadius: "25px",
  fontWeight: "bold",
  fontSize: "1.5rem",
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
  transition: "all 0.3s ease-in-out",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.4)",
  },
}));

const skills = [
  { label: "JavaScript", xs: 7, sm: 5, md: 6, percentage: "80%" },
  { label: "HTML", xs: 5, sm: 4, md: 4, percentage: "85%" },
  { label: "CSS", xs: 4, sm: 3, md: 2, percentage: "75%" },
  { label: "Tailwind CSS", xs: 8, sm: 6, md: 8, percentage: "90%" },
  { label: "C", xs: 3, sm: 3, md: 2, percentage: "70%" },
  { label: "C++", xs: 4, sm: 3, md: 2, percentage: "65%" },
  { label: "Python", xs: 5, sm: 4, md: 5, percentage: "80%" },
  { label: "React.js", xs: 7, sm: 4, md: 7, percentage: "85%" },
  { label: "Node.js", xs: 5, sm: 4, md: 4, percentage: "75%" },
  { label: "Express.js", xs: 6, sm: 5, md: 4, percentage: "70%" },
  { label: "MongoDB", xs: 6, sm: 7, md: 4, percentage: "78%" },
];

const SkillGrid = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #a21fe937, #735f751d)",
        minHeight: "100vh",
        borderRadius: 20,
      }}
    >
      <Grid container spacing={3} maxWidth="lg">
        {skills.map((skill, index) => (
          <Grid
            item
            key={index}
            xs={skill.xs}
            sm={skill.sm}
            md={skill.md}
            sx={{ display: "flex", flexDirection:"column",justifyContent: "center" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              style={{ width: "100%" }}
            >
              <Item>
                {/* Background progress bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderRadius: "25px",
                    width: skill.percentage,
                    height: "100%",
                    backgroundColor: "rgba(156, 56, 161, 0.3)",
                    zIndex: -1,
                    transition: "width 0.3s ease-in-out",
                  }}
                />
                
                {/* Skill label and percentage */}
                <span>{skill.label}</span>
                <span style={{ fontSize: "1.2rem",color:"aqua", fontWeight: "bold" }}>
                  {skill.percentage}
                </span>
              </Item>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillGrid;
