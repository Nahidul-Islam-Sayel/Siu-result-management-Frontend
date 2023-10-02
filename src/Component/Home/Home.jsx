import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
  FcAssistant,
  FcBiotech,
  FcDocument, FcKindle, FcManager,
  FcMultipleInputs,
  FcVideoProjector,
  FcViewDetails,
  FcWiFiLogo
} from "react-icons/fc";
import BBA from '../../asset/Image/BBA.jpg';
import siucam from '../../asset/Image/Background.jpg';
import CSE from '../../asset/Image/CSE.jpg';
import img1 from '../../asset/Image/Picture1.jpg';
import ECE from '../../asset/Image/electric-g4b761453c_640.jpg';
import LLB from '../../asset/Image/law.jpg';
import img2 from '../../asset/Image/picture2.jpg';
import img3 from '../../asset/Image/picture3.jpg';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className="font-bold text-2xl font-mono">
            <h3>Skill Development for mobile game and Application Development 2018!</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption className="font-bold text-2xl font-mono">
            <h3>Mangal Shobhajatra!</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption className="font-bold text-2xl font-mono">
            <h3>Second Convocation Ceremony at SIU!</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="about-full-body">
        <div className="about-box">
          <div className="about-pic">

            <img src={siucam} alt="" />
          </div>
          <div className="about-skills">
            <h1 className='font-blod text-2xl font-serif'>Sylhet International University</h1>
            <p className='font-semiblod text-lg font-serif'>The principal aim of the Sylhet International University (SIU) is to provide high quality education at undergraduate and postgraduate levels relevant to the needs of a dynamic society. The courses and curricula are so designed as to enable a student to enter into the world of work or pursue higher academic and professional goals with a sound academic foundation. The medium of instructions in Sylhet International University is English. The academic goal of the university is not just to make the students pass the examination and get the degree but to equip them with the means to become productive members of the community and continue the practice of lifelong learning.</p>
          </div>
        </div>
      </div>
      <div className="container offer mt-5">
        <div className="row">
          <div className="col-md-7">
            <h2 className="text-2xl font-bold font-serif">What Campus Facilities</h2>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolores est, qui mollitia ipsam voluptatum nemo numquam doloribus sapiente excepturi sequi tempore illo pariatur quae commodi optio ex consectetur odit.</p>

            <div className="row">
              <div className="col-md-6">
                <div className="circle11 "> < FcWiFiLogo className='icon ml-3' /></div>
                <h4>Free Wi-Fi Access</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro maiores, animi magnam officia inventore a unde natus incidunt eum laudantium tenetur, dignissimos ratione alias est aspernatur eos assumenda quo. Voluptatem!</p>
              </div>
              <div className="col-md-6">
                <div className="circle11"> <FcVideoProjector className='icon ml-3' /></div>
                <h4>Digital Classrooms</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptates necessitatibus rem expedita neque magnam aspernatur aliquid, natus culpa ut voluptas voluptate eos error ratione harum, dolore nihil voluptatibus saepe? </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <div className="circle11"> <FcBiotech className='icon ml-3' /></div>
                <h4>Highly Equipped Labs</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quos reiciendis labore ratione dolorum, iure laudantium sunt, temporibus libero magnam ipsum nisi voluptas nam. Ullam architecto dolorem modi illum sapiente.
                </p>
              </div>
              <div className="col-md-6">
                <div className="circle11"> <FcMultipleInputs className='icon ml-3' /></div>
                <h4>AC Classrooms</h4>
                <p>We will provide students a course name sohoze Sikhi. here we take some live classes with
                  animation to teach every topic
                </p>
              </div>
            </div>
            <div className="row">

              <div className="col-md-6">
                <div className="circle11 "> <FcManager className='icon ml-3' /></div>
                <h4>Certified Teachers</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
              </div>
              <div className="col-md-6">
                <div className="circle11"> <FcAssistant className='icon ml-3' /></div>
                <h4>24/7 Support</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, illo molestiae corporis suscipit minima tenetur aspernatur cumque asperiores neque commodi sunt temporibus dolore expedita aperiam nam porro laboriosam, minus nesciunt.</p>
              </div>
            </div>
          </div>
          . <div className="col-md-4 secondpart">
            <h2>Welcome to <span className='text-cyan-500 text-xl font-bold font-serif"'>Sylhet International University</span> </h2>

            <p>Education opens the door of opportunities for an individual to choose. In today’s world is all at hand. And
              Education is very important in the competitive age. Every technology are updating with time also people.
              Education encourages your passion and help to creation. Every country has their education system which
              is not easy for everyone. Every student of the class is not equal. Many of them could not understand the
              class also afraid to ask question. Also there is a huge gap between teachers and students .For that students
              suffer from high rate of stress. They lose their focus on study. As a result, fear of education is created in
              student’s mind. According to student report there is no effective platforms that make education easy for
              students. And the other fact is that, students are studying just to pass the exam. They don’t cross the barrier
              of the text book which is not inspire them to explore and think innovative. World is growing up with latest
              technology where education system is still in its traditional method in Bangladesh. Which has a huge impact
              on social development in Bangladesh.</p>
          </div>
        </div>
      </div>
      <div className="bg-2">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <br /><br /> <br /> <br /> <br />
              <h2 className='font-blod text-2xl'>Sylhet International University</h2>
              <p>It is FIrst Private University In Sylhet.There is  big  Campus and many facility.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 box1">
            <div className="deatext">
              <div className="circle"> <FcKindle className='icon ml-3' /></div>
              <h5>Special Education</h5>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </p>
            </div>
          </div>
          <div className="col-md-3 box2">
            <div className="deatext">
              <div className="circle"> <FcViewDetails className='icon  ml-3' /></div>
              <h5>Book & Library</h5>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </p>
            </div>
          </div>
          <div className="col-md-3 box3">
            <div className="deatext">
              <div className="circle"> <FcDocument className='icon ml-3' /></div>
              <h5>Certification</h5>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </p>
            </div>
          </div>
          <div className="col-md-3 box4">
            <div className="deatext">
              <div className="circle"> <FcManager className='icon ml-3' /></div>
              <h5>Certified Teachers</h5>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="title mt-5">
        <h1 className='text-3xl font-blod font-serif text-cyan-500'> Department</h1>
        <p>We Have Total 4 Department </p>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={CSE} class="img-fluid h-full w-full" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-start">
                      <h5 class="card-title text-4xl font-blod font-serif">CSE</h5>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={BBA} class="img-fluid h-full w-full" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title text-4xl font-blod font-serif">BBA</h5>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={LLB} class="img-fluid h-full w-full" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title text-4xl font-blod font-serif">LLB</h5>


                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className="col-md-6">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={ECE} class="img-fluid h-full w-full" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title text-4xl font-blod font-serif">ECE</h5>


                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>

        </div>
      </div>
      <div className="contract container mt-5">
        <div className="row">
          <div className="col-md-6 contractimg">

          </div>
          <div className="col-md-6 contractform n">
            <h3>Request A Quote</h3>
            <form class="contact-form row">
              <div class="form-field col-lg-6">
                <input id="name" class="input-text js-input" type="text" required />
                <label class="label" for="name">Name</label>
              </div>
              <div class="form-field col-lg-6 ">
                <input id="email" class="input-text js-input" type="email" required />
                <label class="label" for="email">E-mail</label>
              </div>
              <div class="form-field col-lg-6 ">
                <input id="company" class="input-text js-input" type="text" required />
                <label class="label" for="company">Message Type</label>
              </div>
              <div class="form-field col-lg-6 ">
                <input id="phone" class="input-text js-input" type="text" required />
                <label class="label" for="phone">Contact Number</label>
              </div>
              <div class="form-field col-lg-12">
                <input id="message" class="input-text js-input" type="text" required />
                <label class="label" for="message">Message</label>
              </div>
              <div class="form-field col-lg-12">
                <input class="submit-btn" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;