import React from 'react';
import room1 from "../images/room1.jpeg";
import room2 from "../images/room2.jpeg";
import room3 from "../images/room3.jpeg";
import room4 from "../images/room4.jpeg";
import room5 from "../images/room5.jpeg";

function Room() {


  return (
    <>
    <div className="cont">
        <h1>Our Rooms</h1>
        <div className="textcontphoto">
            <p>Welcome to our homestay! We offer a variety of comfortable and cozy rooms to suit your needs. Each room is designed with your comfort in mind and comes equipped with modern amenities to make your stay as comfortable as possible.
            Our rooms are spacious and well-lit, providing a peaceful and relaxing environment for you to unwind after a long day. They are all tastefully decorated and furnished with high-quality bedding to ensure a good night's sleep.</p>
            <p>Our rooms are perfect for couples or solo travelers looking for a little extra luxury, For families, our spacious family rooms offer plenty of space for everyone to stretch out and relax.

All of our rooms come equipped with modern amenities such as high-speed internet, and flat-screen TVs. We also provide complimentary toiletries, fresh towels, and linens to make your stay as hassle-free as possible.

We take pride in our homestay and strive to provide a welcoming and comfortable environment for all of our guests. Book your stay with us today and experience the best in homestay hospitality!</p>
        </div>
        <div className='amen'>
            <h1>Amenities</h1>
            <div className="icons">
            <div className="wifi ic"><i className="fa-solid fa-wifi"></i><span>Hi-Speed WIFI</span></div>
            <div className="dog ic"><i className="fa-solid fa-dog"></i><span>Pet-Friendly Policy</span></div>
            <div className="tv ic"><i className="fa-solid fa-tv"></i><span>TV with subscriptions</span></div>
            <div className="tv ic"><i className="fa-solid fa-toilet"></i><span>Toiliteries</span></div>
            <div className="tv ic"><i className="fa-solid fa-mug-hot"></i><span>Electric Kettle</span></div>
            <div className="tv ic"><i className="fa-solid fa-square-parking"></i><span>Free Parking</span></div>
            </div>
        </div>
    </div>
    <div className="row">
  <div className="column">
    <img src={room1} alt=""/>
    {/* <img src={room5} alt=""/>
    <img src={room2} alt=""/>
    <img src={room4} alt=""/>
    <img src={room3} alt=""/> */}
  </div>
  <div className="column">
    {/* <img src={room3} alt=""/>
    <img src={room5} alt=""/>
    <img src={room4} alt=""/> */}
    <img src={room2} alt=""/>
    {/* <img src={room1} alt=""/> */}
  </div>
  <div className="column">
    {/* <img src={room4} alt=""/>
    <img src={room1} alt=""/>
    <img src={room2} alt=""/> */}
    <img src={room3} alt=""/>
    {/* <img src={room5} alt=""/> */}
  </div>
  <div className="column">
  <img src={room5} alt=""/>
  {/* <img src={room3} alt=""/>
  <img src={room2} alt=""/>
  <img src={room1} alt=""/> */}
  <img src={room4} alt=""/>
  </div>
    </div>
    </>
  );
}

export default Room;
