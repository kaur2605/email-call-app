import React from "react"
import { Box, Grid2, Paper, styled } from "@mui/material"
import Inbox from './inbox/Inbox.tsx'
import EmailView from "./emailView/EmailView.tsx"
import Contact from "./Contact.tsx"
import Navbar from "./Navbar.tsx"
 

// Styled component for Grid items
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "left",
  height:700,
  marginTop: 10,
  marginLeft:7,
  color: theme.palette.text.secondary,
}))

const EmailContainer: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar/>
         </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={3} className="grid" >
          <Item>
    <Inbox/>
          </Item>
        </Grid2>

        <Grid2 size={6}>
          <Item>
           <EmailView/>
          </Item>
        </Grid2>

        <Grid2 size={3}>
        <Item>
          <Contact />
        </Item>
      </Grid2>
      </Grid2>
    </Box>
    </div>
  )
}

export default EmailContainer
