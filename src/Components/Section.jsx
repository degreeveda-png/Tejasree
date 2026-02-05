import React from 'react'
import medi from '../../public/image/medi.jpg'
import cover from '../../public/image/cover.png'
import EMG from '../../public/image/EMG.jpg'
import surgery from '../../public/image/surgery.jpg'
import lab1 from '../../public/image/lab1.jpg'
import set from '../../public/image/set.jpg'
import './section.css'

const Section = () => {
  return (
    <div id="container">
      <section id="about">
        <h2>About hospital</h2>
      
      <p>A hospital is a healthcare institution that provides medical and surgical treatment, nursing care, and specialized services to patients.<br></br> 
        Its main purpose is to diagnose, treat, and help prevent illnesses and injuries.Hospitals play a vital role in maintaining community<br></br> health by offering both routine and critical medical care.</p>
   </section>
   
          
           <img src={cover}></img> 
        
    <section id="services">
   <h2>our services</h2>
   <div class="teju"> 
  <div class="card1">
  <h4>emergency care</h4> 
It operates 24 hours a day and is designed to handle accidents,
 injuries, severe illnesses, and other urgent health problems 
 that require quick assessment and treatment. </div>
<div class="card2">
<h4>surgery</h4>
•Heart surgeries<br></br>
•Cancer treatments<br></br>
•Kidney transplants<br></br>
•Neurosurgeries<br></br>
•Orthopedic surgeries</div>
<div class="card3">
<h4>laboratory</h4>
•Blood count<br></br>
•sugar test<br></br>
•thyroid test<br></br>
•Glucose test<br></br>
</div>
<div class="card4">
 <h4> pharamcy</h4>
•Improves quality of life<br></br>
•Supports disease treatment and prevention<br></br>
•Ensures availability of safe medicines<br></br>
</div></div></section>
<section id="our gallery">
<h2>our gallery</h2>
<img src={EMG}></img>
 <img src={surgery}></img>
<img src={lab1}></img> 
<img src={set}></img></section>

<section id="doctors">
<h2>Our doctors</h2>
<li>Dr.Suresh-cardiologist</li>
<li>Dr.Thriveni-neurologist</li>
<li>Dr.Prathap reddy-orthopedic</li></section>
 </div>
 

  )
}

export default Section