import React from 'react';
import ReactDOM from 'react-dom';
import { TelephoneFill, GeoAltFill, EnvelopeAtFill, Linkedin, Github } from 'react-bootstrap-icons';
import './index.css';
import './info.css';
import './self.css';
// import './assets/css/fonts.css';
import profileImage from './img/profile.jpg';

function Hi() {
    return <div>

        <div className='resume'>

            <div className='right-info my-custom-font '>
                <img src={profileImage} alt="" />

                {/*  */}

                <h1 className='about'>About</h1>
                <p className='about-me'>I recently completed my FSc part-1 studies at Government
                    Boys Degree College, and I am currently pursuing my education at
                    <br />
                    <span>SMIT(Saylani Mass IT Training).</span>
                </p>

                {/*  */}

                <h1 className='contact'>Contact</h1>
                <p><a href=""><TelephoneFill/> +92 323-703-4406</a></p>
                <p><a href="milto:a4anas406@gmail.com"><EnvelopeAtFill/> a4anas406@gmail.com</a></p>
                <p><a href="https://www.linkedin.com/in/muhammadanaskhancodes/"><Linkedin/> Linkedin.</a></p>
                <p><a href="https://github.com/anaskhancodes"><Github/> GitHub.</a></p>
                <p>
                {/* <i className="fa-solid fa-location-dot" style="color: #000000;"></i> */}
                    <a href="https://goo.gl/maps/v3jke4YGf7qYqPWH7">
                    <GeoAltFill/>&nbsp; House No. L-150/T, Sector&nbsp; 5C3 
                        North Karachi, Karachi
                        Pakistan
                    </a>
                </p>

                {/*  */}

                <h1 className='skills'>Skills</h1>
                <ul>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>Bootstrap</li>
                    <li>JavaScript es6</li>
                    <li>Express.JS</li>
                    <li>Node.JS</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                    <li>React.JS</li>
                </ul>
            </div>


            <h1 className='self-name'>Muhammad Anas Khan</h1>
            <br />
            <h2 className='self-work'>MERN STACK</h2>

            <h1 className='education'>EDUCATION</h1>
            <hr />
            <div className='eduaction-info'>
                <h3>Matric</h3>
                <h4>Science</h4>
                {/*  */}
                <h3>FSc Part-1</h3>
                <h4>Pre-Engnering</h4>
            </div>

            <hr className='hr2' />

            <h1 className='certi'>CERTIFICATION</h1>
            <div className='certi-info'>
                <ul className='certi-ul'>
                    <li>
                        I am currently enrolled in <span>SMIT (Saylani Mass IT Training),</span>
                        specializing in MERN STAKE development. I have successfully
                        completed training in HTML5, CSS3, Bootstrap, JavaScript ES6,
                        Express.js, Node.js, MongoDB & React
                    </li>
                    <hr className='li-hr' />
                    <li>
                        I'm actively learning about the Web 3.0 metaverse from
                        <span> JawanPakistan.</span> Excited about its potential, I'm exploring
                        decentralized platforms, blockchain, virtual reality, and
                        augmented reality. I aim to contribute to the development of
                        this immersive digital world and create innovative
                        experiences within it.
                    </li>
                </ul>

            </div>

        </div>
    </div>

}

ReactDOM.render(<Hi />, document.querySelector('#root'));