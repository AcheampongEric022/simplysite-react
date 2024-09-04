import "./Programs.css"
import program1 from "../../images/program-1.png"
import program2 from "../../images/program-2.png"
import program3 from "../../images/program-3.png"
import programIcon1 from "../../images/program-icon-1.png"
import programIcon2 from "../../images/program-icon-2.png"
import programIcon3 from "../../images/program-icon-3.png"


function Programs(){

    return(
        <div className="programs" id="Programs">
            <div className="program">
                <img src={program1} alt="" />
                <div className="caption">
                    <img src={programIcon1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={program2} alt="" />
                <div className="caption">
                    <img src={programIcon2} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={program3} alt="" />
                <div className="caption">
                    <img src={programIcon3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    )
}

export default Programs