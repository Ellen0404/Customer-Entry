import React from "react";

const EntryList = (props) => {

    return (
        <>

            <li>
                {/* {u.isVisible ? ( */}
                <span>
                    <img src="https://res.cloudinary.com/dddtjci2s/image/upload/v1589579232/check_mark_cze4om.png" style={{ width: "1.5rem", visibility: "visible", marginLeft: "0.5rem" }} alt="" />

                    <strong>{`${props.firstName} ${props.lastName}`} </strong>
                    <button>Delete</button>

                </span>
                {/* // ) : (<h9></h9>)} */}

            </li>

        </>
    )
}

export default EntryList;