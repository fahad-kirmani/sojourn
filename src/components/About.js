import React from 'react'
import img from "../images/img1.jpg"
import food from "../images/food.png"
import room from "../images/room3.jpeg"

const About = () => {
  return (
    <>
    <div className='abt'><h1>About Our Homestay</h1>
    <p>Experience the peaceful charm of Nainital at Shail's Sojourn, a cozy homestay located in the serene area of Vasundhara Mallital. Just a short 50-meter walk from the popular Mall Road and 600-700ft from the Boathouse Club, our homestay offers a tranquil retreat from the bustling city life.

    As you walk up the winding road amidst the verdant trees and flowers, you'll come across our homestay nestled amidst the hills. The understated simplicity of the interiors creates a soothing ambiance and offers a respite from the chaos of everyday life. You can wake up to breathtaking views of the mountains from your room and enjoy the cool breeze flowing through the windows.</p>
    <p>We take pride in providing our guests with the best of hospitality and personalized care. Our homestay offers spacious and well-appointed rooms with modern amenities like Wi-Fi and parking. You can also relish delicious home-cooked meals, made with locally sourced ingredients and served with warmth and love.

    At Shail's Sojourn, we believe in creating lasting memories for our guests. We invite you to come and experience the beauty and tranquility of Nainital at our homestay.
     </p></div><hr />

    

    <div className="abt-grid">
    <h1>DISCOVER</h1>
      <div className="step">
        <div><img src={img} alt="text" />
</div>
        <p> <h1>01</h1> Nainital is a beautiful and serene hill station in Uttarakhand known for its picturesque views of the Himalayas, serene lakes, and lush forests. To discover and explore Nainital, visit popular tourist spots like the Naini Lake, Tiffin Top, Snow View Point, and Eco Cave Gardens. In addition to this, you can enjoy a variety of adventure activities such as trekking, camping, boating, and horse riding. For nature lovers, there are also several scenic walking trails like the Guano Hills Trail and Kilbury Bird Sanctuary.</p>
      </div>
      <div className="step next">
        <p> <h1>02</h1> Nainital is also known for its delicious food, especially traditional Kumaoni cuisine. You can try out dishes like Bhatt ki Churkani, Gahat ki Daal, and Aloo Ke Gutke, which are rich in flavors and spices. Apart from this, there are a variety of other cuisines like North Indian, South Indian, Chinese, and Continental that you can explore. Popular restaurants to try out are Machan Restaurant, Giannis Pure Veg Restaurant, and Sakley's Restaurant.</p>
        <img src={food} alt="" />
      </div>
      <div className="step next">
        <img src={room} alt="room" />
        <p> <h1>03</h1> After a long day of exploration and indulging in culinary delights, it's time to unwind and relax in your homestay. Shail's Sojourn is a cozy and comfortable homestay that offers a home-away-from-home experience. Enjoy your comfortable room, delicious food, and stunning views of the Himalayas. The homestay is located in a serene and peaceful environment, where you can enjoy the tranquility and serenity of nature. This is the perfect place to end your wonderful day in Nainital.</p>
      </div>
    </div></>
  )
}

export default About