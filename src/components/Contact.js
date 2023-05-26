import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Contact = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [detail, setdetail] = useState({
    name:"",
    email:"",
    phone:"",
    details:""
  });

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setdetail({
        ...detail,
        [name]:value,
    })
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await fetch(`${apiUrl}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:detail.name, email:detail.email, phone:detail.phone , details:detail.details}),
    });
    console.log(response)
    console.log(`Name: ${detail.name}, Email: ${detail.email}, Phone: ${detail.phone} , details: ${detail.details}`);
    setdetail({
        name:"",
        email:"",
        phone:"",
        details:""
    })
  };

  return (
    <>
    <div className="txt">
        <p>Liked what you saw? Fill out the contact form below with your details, and we'll get back to you ASAP with availability and pricing info. Thank you for considering our homestay!</p>
    </div>
    <div className="contact-cont">
    <div className="contact-us">
        <h1>Contact us</h1>
        <div className="imgg"></div>
    </div>
    <form onSubmit={handleSubmit}>
    <Grid container justifyContent="center" gap="1rem">
    <Grid xs={10} md={5} lg={5}>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={detail.name}
        onChange={handleChange}
      />
      </Grid>
      <Grid xs={10} md={5} lg={5}>
      <TextField
        id="phone"
        name="phone"
        type='number'
        pattern="[0-9]{5}"
        label="Phone Number"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={detail.phone}
        onChange={handleChange}
      />
      </Grid>
      <Grid xs={10} md={10} display="flex" justifyContent="center">
      <TextField
        id="email"
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={detail.email}
        onChange={handleChange}
      />
      </Grid>
      <Grid xs={10} md={10} display="flex" justifyContent="center">
      <TextField
        id="details"
        name="details"
        label="Details"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={detail.details}
        onChange={handleChange}
      />
      </Grid>
      {/* <Grid xs={10} md={10} display="flex" justifyContent="center">
      <TextField
        id="details"
        name="details"
        label="Details"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={detail.details}
        onChange={handleChange}
      />
      </Grid> */}
      
      <Grid xs={12} md={12} display="flex" justifyContent="center">
      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
      
      </Grid>
      </Grid>
    </form>
    </div>
    </>
  );
};

export default Contact;
