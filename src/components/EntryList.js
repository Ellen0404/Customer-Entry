import React from "react";

const EntryList = (props) => {

    return (
        <>
            <div className="item">
                <div className="right floated content">
                    <div
                        className="ui inverted green button"
                        onClick={() => props.deleteUser(props.id)}
                    >
                        Delete
                    </div>
                </div>
                <img className="ui avatar image" src="https://res.cloudinary.com/dddtjci2s/image/upload/v1589579232/check_mark_cze4om.png" style={{ width: "1.5rem", visibility: "visible", marginLeft: "0.5rem" }} alt="" />
                <div className="content">
                    <h4>
                        {`${props.firstName} ${props.lastName}`}
                    </h4>
                </div>
            </div>

        </>
    )
}

export default EntryList;