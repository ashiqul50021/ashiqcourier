import React from 'react';
import safety from '../../images/safety-first.svg';
import fastDelevary from '../../images/7-day-delivery.svg';
import tracking from '../../images/live-tracking.svg';
import sms from '../../images/sms-update.svg';
import './Service.css'

const Service = () => {
    return (
        <div className="mt-5 mb-5">
            <div className="container">
                <h4 className="text-center headline">OUR SERVICE</h4>
                <div class="row mt-4 row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card border-0">
                            <img src={safety} class="card-img-top img-card" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Safety First</h5>
                                <p class="card-text text-center">We provide safe parcel service.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0">
                            <img src={fastDelevary} class="card-img-top img-card" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Fast Delivery</h5>
                                <p class="card-text text-center">We consider Fast Delivery.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0">
                            <img src={tracking} class="card-img-top img-card" alt="..." />
                            <div class="card-body ">
                                <h5 class="card-title text-center">Live Tracking</h5>
                                <p class="card-text text-center">Every Customer Can truck their Parcel</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card border-0">
                            <img src={sms} class="card-img-top img-card" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">SMS Update</h5>
                                <p class="card-text text-center">Every Customer take update by sms..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;