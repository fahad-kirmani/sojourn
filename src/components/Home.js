import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='container'>
    <h1>Welcome To Nainital!</h1>
    <p>Nainital is a charming hill station located in the Indian state of Uttarakhand. <br/><br/>It is situated around a beautiful lake surrounded by green hills, and offers a pleasant climate, scenic views, and various activities such as boating, trekking, and shopping. It is a popular tourist destination for nature lovers and adventure seekers.<br/><br/>
    Conveniently located right beside the Naini lake right at the heart of Mall Road and surrounded by lush-green mountains,<br/> Our Sojourn boutique suites will ensure that you are comforted by the luxury of independent family <br/>suites and gratified by the serenity of Himalayas.</p>
    <button className='btn-more' onClick={()=>{navigate("/about")}}>More</button>
    </div>
    <div className="container-2">
        <div className="txtcont">
            <h3>Nainital is calling for you!</h3>
            <p>Experience the serenity of the Himalayas at our luxurious Sojourn nestled in the heart of Nainital's Mall Road. Wake up to stunning views of the mountains and enjoy your days exploring the quaint town or simply lounging in our cozy rooms. Indulge in exquisite local delicacies at our restaurant. Join us on a journey of tranquility and rejuvenation in the breathtaking beauty of Nainital. Here&Now.</p>
            <button className='btn-more'>BOOK NOW!</button>
        </div>
        <div className="imgcont"></div>
    </div>
    <div className="mapcont">
    <div className="maptxt">
      <h1>Our Location</h1>
      <p>Looking for a homestay in the heart of Nainital that's pet-friendly? Look no further than our beautiful property in Vasundhara , Mallital, just 50 meters from Mall Road! Our homestay offers stunning views of Lake Naini, and is just a short 600ft walk from the Boathouse Club. Not only will you enjoy the convenience of being near restaurants and shops, but you'll also appreciate our homestay's parking and pet-friendly policy, ensuring a stress-free stay for both you and your furry friends. Don't miss out on this unbeatable location - book your stay with us today!</p>
      </div>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d217.2686487362233!2d79.4581234567242!3d29.39082620720371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIzJzI3LjEiTiA3OcKwMjcnMjkuMyJF!5e0!3m2!1sen!2sin!4v1682437546555!5m2!1sen!2sin" className='mapfr' title= "mapframe" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </>
  )
}

export default Home