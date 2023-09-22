import React from 'react'
import Hexagon_SVG from "../assets/images/Hexagon_SVG.svg"
import List_indicator from "../assets/images/List_indicator.svg"
import Laser_trit from "../assets/images/Laser_trit.jpg"
import faceBook from "../assets/images/facebook.svg"
import insta from "../assets/images/instagram.svg"
import rightarrow from "../assets/images/RightArrow.svg"


const Dashboard = () => {
    return (
        <>
            <div className="landigSection">
                <div className="backSection">
                    <div className="container">
                        <div className="header">
                            <nav class="navbar navbar-expand-lg ">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">Logo</a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Courses</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Online</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link">Models</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="contacin_body">
                            <div className="col-lg-8">
                                <p className='subheading'>UNLOCK YOUR POTENTIAL IN THE WORLD OF LASER TECHNOLOGY!</p>
                                <p className="heading">Take Your Spa Esthetician Career To New Heights Woth Laser School</p>
                                <div className="main_btn">
                                    <button>Book Your Call Now!</button>
                                </div>
                            </div>
                            <div className="col-lg-4 text-end ResponsiveNone">
                                <img src={Hexagon_SVG} alt="" className='Hexagon_Img' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="Choose_Laser">
                        <p className="heading">Why Choose Laser School?</p>
                        <div className="innerBody">
                            <div className="row">
                                <div className="col-lg-4 d-flex">
                                    <div className="indicator">
                                        <img src={List_indicator} alt="" />
                                    </div>
                                    <div className="">
                                        <p className="Choose_Heading">Comprehensive Laser Training</p>
                                        <p className="Choose_details">
                                            Our course cover a wide range of laser procedure, including hair removal, hair, rejuvenation, tattoo removal, and more you will learn from industrial experience and give the confidence to other advised treatment
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex">
                                    <div className="indicator">
                                        <img src={List_indicator} alt="" />
                                    </div>
                                    <div className="">
                                        <p className="Choose_Heading">Hands-on Experience</p>
                                        <p className="Choose_details">
                                            Get ready to drive interactive training session with state of the art laser devices our hands on approach, ensure your practical skills necessary to excel in the field.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex">
                                    <div className="indicator">
                                        <img src={List_indicator} alt="" />
                                    </div>
                                    <div className="">
                                        <p className="Choose_Heading">Industry-Recognized Certification</p>
                                        <p className="Choose_details">
                                            Stand out from the crowd with our industry recognise certifications such as Di cosmetic laser technique and laser safety officer, designation enhance your professional credential and open door to existing carrier opportunity
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Section-2">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p className="Ready_to_take_heading">
                                        Ready To Take The Next Step ?
                                    </p>
                                    <div className="Ready_to_take">
                                        <p>
                                            Do not miss out on this incredible opportunity to unlock your potential and embark on our rewarding carrier journey

                                            Speak with one of our knowledgeable advisors will provide personalised guidance. Answer your question and help you choose the perfect laser training program that alliance with your goals and aspiration.
                                        </p>
                                        <div className="main_btn">
                                            <button>Book Your Call Nnow!</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 Laser_trit text-end" id="resposiveImage" >
                                    <img src={Laser_trit} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="bottom_Section">
                            <div className="row">
                                <div className="col-lg-8 mapSection">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15077.20817524075!2d77.32095495000002!3d19.1382515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1695387176033!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="addressSection_heading">Quantum Aesthetics</div>
                                            <p className="address">
                                                2210 S, Mil Ave, Ste 7 Temps, Arizona 85282 <br /> +91 7875773079
                                            </p>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="addressSection_heading">Hours</div>
                                            <p className="address">
                                                Wednesday - Friday <br />
                                                10:00 am - 05:00 pm
                                            </p>
                                        </div>
                                        <div className="col-lg-12 socialMedia">
                                            <img src={faceBook} alt="" />
                                            <img src={insta} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Footer_Section">
                            <div className="row">
                                <div className="col-lg-4">
                                    <p className="FooterLogo">Logo</p>
                                    <p className="CopyRight">&#169; 2023 Copyright Quantum Aesthetics <br /> All Rights Reserved.</p>
                                </div>
                                <div className="col-lg-2">
                                    <div className="FooterHading">
                                        Site Nav
                                    </div>
                                    <ul className='FooterList'>
                                        <li>Cource</li>
                                        <li>About</li>
                                        <li>Online</li>
                                        <li>Models</li>
                                    </ul>
                                </div>
                                <div className="col-lg-2">
                                    <div className="FooterHading">
                                        Legal
                                    </div>
                                    <ul className='FooterList'>
                                        <li>Privacy Policy</li>
                                        <li>Terms & Condition</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <div className="FooterHading">
                                        Get Out Newsletter!
                                    </div>
                                    <div className="emailinput">
                                        <input type="text" />
                                        <img src={rightarrow} alt="" className='text-end' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard