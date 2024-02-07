import React, { useState } from 'react';
import { Card, CardContent,  Typography,} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
const ProductCard = (props) => {
  

 
  const [likes, setLikes] = useState("unchecked");


  const handleLikes = () => {
    console.log("clicked");
    setLikes("checked");
  }
  const handleDislikes = () => {
    setLikes("unchecked")
  }

  return (
    <Card>
      {/* <img src="../assets/Productimgs/z1.jpg" alt="Product" style={{ width: '100%', height: 'auto' }} /> */}
      <img src={props.imagename} alt="Product" style={{ width: '100%', height: 'auto' ,padding:'10px'}} />

      <CardContent>
        <Typography variant="h6">{props.pname}</Typography>
        <Typography variant="body2" color="text.secondary">
          {props.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'space-between'}}>
          {props.descr}
          {
            likes === 'unchecked' ?
              <button onClick={handleLikes} style={{
                background: "transparent",
                border: "none",
              }}><FavoriteBorderIcon /></button>
              :
              <button onClick={handleDislikes} style={{
                background: "transparent",
                border: "none",
              }}><FavoriteIcon /></button>
          }

        </Typography>

<button onClick={{}} style={{width:'14rem',background:'black',color:'white',padding:'7px',marginTop:'0.8rem'}}><LocalMallOutlinedIcon sx={{
  fontSize:'19px',
  paddingBottom:'3px',
}}/> Add</button>
        {/* <FormControl fullWidth>
          <InputLabel id="color-select-label">Color</InputLabel>
          <Select
            labelId="color-select-label"
            id="color-select"
            value={selectedColor}
            onChange={handleColorChange}
          >
            <MenuItem value="red">Red</MenuItem>
            <MenuItem value="blue">Blue</MenuItem>
            <MenuItem value="green">Green</MenuItem>
          </Select>
        </FormControl> */}
      </CardContent>

      {/* <CardActions>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default ProductCard;
