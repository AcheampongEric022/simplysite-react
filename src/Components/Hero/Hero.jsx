import "../../Components/Hero/Hero.css"
import arrow from "../../images/dark-arrow.png"

function Hero() {

    return (
        <div className="Hero container" id="Hero">
            <div className="hero-text">
                <h1>We ensure better education for a better future</h1>
                <p>Our cutting-edge curriculum is designed to empower students
                    with the knowledge, skills, and experiences needed
                    to excel in the dynamic field of education
                </p>
                <button className="btn">Explore More <img src={arrow} alt="" /></button>
            </div>

        </div>

    )
}

export default Hero