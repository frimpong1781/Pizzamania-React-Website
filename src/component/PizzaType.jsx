
import React, { Component } from 'react';

class PizzaType extends Component {
    render() {
        return (
            <div className="container office-type">
                <div className="row">
                    <h2 className="text-center">Pizza types</h2>

                    <div className="col-md-3">
                        <div className="thumbnail">
                            <img src="images/alan-hardman-SU1LFoeEUkk-unsplash.jpg" alt="pepperoni Pizza" />
                            <div className="caption">
                            <h3>Pepperoni pizza</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                At labore rerum illo error deleniti. Odio reprehenderit iure harum deleniti, 
                                tenetur id ad hic repudiandae aspernatur rem illum optio voluptatem commodi!
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="thumbnail">
                            <img src="images/brenan-greene-HPZs4EXRFSU-unsplash.jpg" alt="vegetarian Pizza" />
                            <div className="caption">
                            <h3>Vegetarian pizza</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                At labore rerum illo error deleniti. Odio reprehenderit iure harum deleniti, 
                                tenetur id ad hic repudiandae aspernatur rem illum optio voluptatem commodi!
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="thumbnail">
                            <img src="images/ivan-torres-MQUqbmszGGM-unsplash.jpg" alt="cheese Pizza" />
                            <div className="caption">
                            <h3>Cheese pizza</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                At labore rerum illo error deleniti. Odio reprehenderit iure harum deleniti, 
                                tenetur id ad hic repudiandae aspernatur rem illum optio voluptatem commodi!
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="thumbnail">
                            <img src="images/sheri-silver-A4EtgLN1_Fw-unsplash.jpg" alt="bossu Pizza" />
                            <div className="caption">
                            <h3>Bossu pizza</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                At labore rerum illo error deleniti. Odio reprehenderit iure harum deleniti, 
                                tenetur id ad hic repudiandae aspernatur rem illum optio voluptatem commodi!
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PizzaType;
