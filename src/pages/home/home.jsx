import React, {useEffect} from 'react'
import { useLocation } from 'react-router'
import "./home.scss"
import  Slide from  "../../components/slide/slide"
import Testimony  from "../../components/testimony/testimony"

const Home = () => {

  const card =[{id:1,img:"kbbb2.png", header:'Video Production',text:"Crafting compelling stories through high-quality video."},{id:2,img:"", header:"Branding Design", text:"Designing unique brand identities that resonate"},{id:3, img:'', header:"Photography Services", text:"Engaging digital marketing strategies for growth."},{id:4, img:'', header:"Web Development", text:"Build dynamic, secure, user-friendly websites for everyone."},{id:5, img:'', header:"AI Services", text:"Develop AI-powered, secure, user-friendly solutions for everyone."}]
   const card1 =[{id:1,img:"/phot.avif", header:'Video Production Service',text:"Expertly crafted videos that engage audiences and elevate your brand's storytelling to new heights."},{id:2,img:"/photong.avif", header:"Branding & Design", text:"Unique branding solutions that resonate with your audience, enhancing your identity and market presence effectively."},{id:3, img:'/phot1.avif', header:"Strategic marketing services", text:"Engaging digital marketing strategies for growth."}]

     const { hash } = useLocation();

    useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <div className='Section1' >

      <div className='sectionMain'>
        <div  className='col'></div>
        <div className='rrImg'><img src="rrrepeat1.svg" alt="" /></div>
        <div className='sectionMainA'>
          <div  className='enn'>Transform Your <span >Digital Presence</span> with VicpoloEmpire</div>
          <p className='enn1'>Transforming ideas into stunning visual experiences for your business.</p>
         <a href="/contact"><div className='rt'> <button>Discover</button></div></a>
        </div>
        <div className='sectionMainA  imgMaDiv'>
          <img src="/photo23.avif" alt="" className='imgMain' />
        </div>

      </div>
      
  <div className="FFJ"></div>
<div  className='OurService'>
  <p className='OurServe'>Our Services</p>
  <div className='LineP'></div>
      <div className='Services'>
        {card.map((app)=>(
        <div className='serviceCard' key={app.id}>
          <div  className='FImg'>
            <img  src="/iii.svg" alt=""/>
           </div>
           {/* <div  className='IconImg'>
            <img  src={app.img}  alt=""/>
           </div> */}
          <p className='Vp'>{app.header}</p>
          <p className='Vp1'>{app.text}</p>

        </div>
        ))}
      </div>
      </div>

 <div className='FT'>
      <div className='Craft'  >
        <div className='Craft1 rtr'>
          {/* <div className="CratU"></div> */}
          <div  className='Craft2'>Creating Compelling Visual Journey</div>
          
          <p className='Craft3'>At VicopoloEmpire, we specialize in premium video production, branding,  web development, AI services and digital marketing to help brands connect and engage with their audience through innovative visual experiences.</p>
   <div className='Craft7'>
  <div className='Craft4'>
    <div className='Craft5'>150+</div>
     <div className='Craft6'>Creative Excellence</div>
  </div>
  <div className='Craft4'>
    <div className='Craft5'>15</div>
     <div className='Craft6'>Trusted by Brands</div>
  </div>
 </div>
        </div>
        <div className='Craft1'>
            <img src="/photo.avif"  alt=""  />
        </div>
      </div>
      </div>
      
<div  className="bb">
      <div className='MdSolutions'>
        <div className='MdSolutions1'>Artistic Media Concepts</div>
        <div className='TN'></div>
        <div className='MdSolutions2'>Transforming brands through innovative video production, design,   web development, AI services and digital marketing strategies tailored for success.</div>

        <div  className='MdSolutions3'>
          {card1.map((app)=>(
          <div  key={app.id} className="MdSolutions4">
              <div  className='MdSolutions5'><img src={app.img} alt=""className='mImg' /></div>
              <div className='MdSolutions6'>{app.header}</div>
              <div className='MdSolutions7'>{app.text}.</div>
          </div>

          ))}
         
        </div>
      </div>
      </div>

<div  className="GGa" id="portfolio">
      <div className="Ga" >
        <div className="Ga1">Gallery Hub</div>
         <div className='TN'></div>
        <div className="Ga2">Explore our creative visual storytelling through stunning imagery and design.</div>


        <div className="Ga3">
          <div className="Ga4">
            <div className="Ga5"><img src="/photong.avif" alt=""className="" /></div>
            <div className="Ga6">
              <div className="Ga7">
                <div className='Kin'><img src="/pho1.avif" alt="" className=""/></div>
                 <div className='Kin'><img src="/pho3.avif" alt="" className=""/></div>
              </div>
              <div className="Ga8">
                 <div className='Kin'><img src="/pho2.avif" alt="" className=""/></div>
                 <div className='Kin'><img src="/pho1.avif" alt="" className=""/></div>
                 </div>
            </div>
          </div>
          
               <div className="Ga9" >
                <div className="Ga10"><img src="/pho.avif" alt="" className="" /></div>
                <div className="Ga10"><img src="/pho3.avif" alt=""  className=""/></div>
                <div className="Ga10" ><img src="/pho2.avif" alt="" className=""/></div>
                <div className="Ga10"><img src="/pho1.avif" alt="" className="" /></div>
                <div className="Ga10"><img src="/pho.avif" alt="" className="" /></div>
          
               </div>
        </div>

      <div className="Ga22">
          <div className="Ga21" >
                <div className="Ga20"><img src="/pho.avif" alt="" className="" /></div>
                <div className="Ga20"><img src="/pho3.avif" alt=""  className=""/></div>
                <div className="Ga20" ><img src="/pho2.avif" alt="" className=""/></div>
                <div className="Ga20"><img src="/pho1.avif" alt="" className="" /></div>
                <div className="Ga20"><img src="/pho.avif" alt="" className="" /></div>
                              <div className="Ga20"><img src="/pho3.avif" alt=""  className=""/></div>
                <div className="Ga20" ><img src="/pho2.avif" alt="" className=""/></div>
                <div className="Ga20" ><img src="/pho2.avif" alt="" className=""/></div>
                <div className="Ga20"><img src="/pho1.avif" alt="" className="" /></div>
                <div className="Ga20"><img src="/pho.avif" alt="" className="" /></div>
          
               </div>

      </div>
        {/* <Slide/> */}
      </div>
      </div>

   



      <div>
        <Testimony/>
      </div>


    </div>
  )
}

export default Home;