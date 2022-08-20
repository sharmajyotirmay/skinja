import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
export default function Cards() {
  return (
    <Card sx={{ minWidth: 500,
      maxHeight: 500,
      display : "flex",
      marginTop : "25%"
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image="/employe.jpg"
          alt="employe"
        />
      </CardActionArea>
    </Card>
  )
}
