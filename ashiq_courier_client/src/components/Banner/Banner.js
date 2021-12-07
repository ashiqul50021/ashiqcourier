import React from 'react';
import bannerImg from '../../images/bannerbg1.png';
import bannermain from '../../images/banner-bg-main.jpg';
import './Banner.css'

const Banner = () => {
    var bannerbackgroundStyle = {
        width: "100%",
        height: "100%",
        backgroundSize:"cover",
        backgroundImage: `url(${bannermain})`
      };
    return (
        <div style={bannerbackgroundStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                       <div className="position">
                       <h1 className="left-side">MODERN,<br />COURIER MANAGWMENT SYSTEM!</h1>
                      
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad libero quo iure nostrum, non officia totam quisquam quidem quos sunt.</p>
                        <a class="btn-style" href="/" role="button">EXPLORE MORE!</a>
                       </div>
                    </div>
                    <div className="col-md-6">
                        <img src={bannerImg} alt="" style={{width:'100%'}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;