import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
const key = "8952";

class Manager extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .get("/api/result/delete/" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.student_id}</td>
        <td>{this.props.obj.ewhaian_id}</td>
        <td>
          {/* <Link
            to={
              "/result2001Manager/" + `${key}` + "/edit/" + this.props.obj._id
            }
            className="btn btn-primary"
          >
            Edit
          </Link> */}
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.history.push("/edit/" + `${this.props.obj._id}`);
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

export default withRouter(Manager);
