//Import the react and ReactDom libraires
import React from "react";
import ReactDom from "react-dom";

const  ApprovalCard = (props) => {
    console.log(props.children);
    
    return(
        <div className="ui card">
          <div className="content">{props.children}</div>
           <div className="Extra content">
            <div className="ui two buttons">
             <div className="ui basic green button">Approve</div>
             <div className="ui red green button">Reject</div>
           </div>
         </div>
        </div>
    )
}


export default ApprovalCard;
