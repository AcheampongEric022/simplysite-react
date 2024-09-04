import "./Testimonials.css"
import nextBtn from "../../images/next-icon.png"
import backBtn from "../../images/back-icon.png"
import user1 from "../../images/user-1.png"
import user2 from "../../images/user-2.png"
import user3 from "../../images/user-3.png"
import user4 from "../../images/user-4.png"
import { useRef } from "react"
function Testimonials(){

    const slider = useRef();
    let tx = 0;

    function slideForward(){
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        
    }

    function slideBackward(){
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }

    return(
        <div className="testimonials container" id="Testimonials">
            <img className="nextBtn" src={nextBtn} alt="" onClick={slideForward} />
            <img className="backBtn" src={backBtn} alt="" onClick={slideBackward} />

            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Eric Acheampong 1</h3>
                                    <span>Comapny, Ghana</span>
                                </div>
                            </div>
                            <p>
                                choosing to pursue my degree at Edustry was one 
                                of the best decisions I've ever made. The supportive 
                                community, state-of-the-art facilities, and commitment 
                                to academic excellence have truly exceeded my 
                                expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>Eric Acheampong 2</h3>
                                    <span>Comapny, Ghana</span>
                                </div>
                            </div>
                            <p>
                                choosing to pursue my degree at Edustry was one 
                                of the best decisions I've ever made. The supportive 
                                community, state-of-the-art facilities, and commitment 
                                to academic excellence have truly exceeded my 
                                expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>Eric Acheampong 3</h3>
                                    <span>Comapny, Ghana</span>
                                </div>
                            </div>
                            <p>
                                choosing to pursue my degree at Edustry was one 
                                of the best decisions I've ever made. The supportive 
                                community, state-of-the-art facilities, and commitment 
                                to academic excellence have truly exceeded my 
                                expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>Eric Acheampong 4</h3>
                                    <span>Comapny, Ghana</span>
                                </div>
                            </div>
                            <p>
                                choosing to pursue my degree at Edustry was one 
                                of the best decisions I've ever made. The supportive 
                                community, state-of-the-art facilities, and commitment 
                                to academic excellence have truly exceeded my 
                                expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Testimonials