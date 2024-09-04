import "./Campus.css"
import gallery1 from "../../images/gallery-1.png"
import gallery2 from "../../images/gallery-2.png"
import gallery3 from "../../images/gallery-3.png"
import gallery4 from "../../images/gallery-4.png"
import whiteArrow from "../../images/white-arrow.png"

function Campus(){

    return(
        <div className="campus">
            <div className="gallery">
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
            </div>

            <button className="btn seeMore">See More <img src={whiteArrow} alt="" /></button>
        </div>
    )
}

export default Campus