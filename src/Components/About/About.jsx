import "./About.css"
import aboutLeftImg from "../../images/about.png"
import playicon from "../../images/play-icon.png"

function About() {

    return (

        <div className="About container" id="About">
            <div className="AboutLeft">
                <img src={aboutLeftImg} alt="" className="aboutImg" />
                <img src={playicon} alt="" className="playIcon" />
            </div>
            <div className="AboutRight">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>
                    Embark on a transformative educational journey with
                    our university's comprehensive education programs.
                    Our cutting-edge curriculum is designed to empower students
                    with the knowledge, skills, and experiences needed
                    to excel in the dynamic field of education.
                </p>
                <p>
                    With a focus on innovartion, hands-on learning, and
                    personalized mentorship, our programs prepare aspiring
                    educatorts to make a meaningful impact in classrooms,
                    schools and communities
                </p>
                <p>
                    Whether you aspire to become a teacher, administrator, a counselor,
                    or educational leader, our diverse range of programs offers the
                    perfect pathway to achieving your goals and unlock your full
                    potential in shaping the future of education.
                </p>

            </div>

        </div>

    )
}

export default About