import React from "react";
import spinningGif from "../../assets/spinningGif/spinning.gif"

const Spinner = () => {
    return (
        <>
            <div>
                <img src={spinningGif} alt="" className="d-block m-auto" />
            </div>
        </>
    )
}
export default Spinner;