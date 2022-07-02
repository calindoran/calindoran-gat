import React from "react";
import moment from "moment";

function Experience(props: any) {
  return (
    <React.Fragment>
      <div className="post">
        <h2>{props.title}</h2>
        <h3>{props.location}</h3>
        <div className="post-info">
          <span>{moment(props.fromDate).format(" MMMM, YYYY")}</span>
          <span>-</span>
          <span>{moment(props.toDate).format("MMMM, YYYY")}</span>
        </div>
        <p>{`> ` + props.point1}</p>
        <p>{`> ` + props.point2}</p>
        <p>{`> ` + props.point3}</p>
        <p>{`> ` + props.point4}</p>
      </div>
    </React.Fragment>
  );
}

export default Experience;
