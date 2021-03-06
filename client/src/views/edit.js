import React, { Component } from "react";
import axios from "axios";
import "./manager.css";
const key = "8952";
export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStudent = this.onChangeStudent.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeTeam = this.onChangeTeam.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeKey = this.onChangeKey.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      student_id: "",
      ewhaian_id: "",
      team: "",
      pass: "",
      key: "",
    };
  }

  componentDidMount() {
    axios
      .post("/api/result/edit/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          student_id: response.data.student_id,
          ewhaian_id: response.data.ewhaian_id,
          team: response.data.team,
          pass: response.data.pass,
          key: response.data.key,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeStudent(e) {
    this.setState({
      student_id: e.target.value,
    });
  }
  onChangeId(e) {
    this.setState({
      ewhaian_id: e.target.value,
    });
  }

  onChangeTeam(e) {
    this.setState({
      team: e.target.value,
    });
  }
  onChangePass(e) {
    this.setState({
      pass: e.target.value,
    });
  }
  onChangeKey(e) {
    this.setState({
      key: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      student_id: this.state.student_id,
      ewhaian_id: this.state.ewhaian_id,
      team: this.state.team,
      pass: this.state.pass,
      key: this.state.key,
    };

    axios
      .post("/api/result/update/" + this.props.match.params.id, obj)
      .then((res) => console.log(res.data));

    this.props.history.push("/result2001Manager" + "/" + `${key}` + "/");
  }

  render() {
    return (
      <div>
        <div className="banner_result">
          <img src="../../img/pre41thBanner.png" />
        </div>
        <div className="editTitle">????????? ?????? ??????</div>
        <div>
          <div className="formcontainer">
            <form
              onSubmit={this.onSubmit}
              // style={{ marginLeft: "32.5%", width: "300px" }}
            >
              <div className="form-group">
                <label className="formlabel">??????</label>
                <input
                  type="text"
                  className="input1"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label className="formlabel">??????</label>
                <input
                  type="text"
                  className="input1"
                  value={this.state.student_id}
                  onChange={this.onChangeStudent}
                />
              </div>
              <div className="form-group">
                <label className="formlabel">???????????? ?????????</label>
                <input
                  type="text"
                  className="input2"
                  value={this.state.ewhaian_id}
                  onChange={this.onChangeId}
                />
              </div>
              <div className="form-group">
                <label className="formlabel">???</label>
                <input
                  type="text"
                  className="input3"
                  value={this.state.team}
                  onChange={this.onChangeTeam}
                />
              </div>
              <div className="form-group">
                <label className="formlabel">????????????</label>
                <input
                  type="text"
                  className="input4"
                  value={this.state.pass}
                  onChange={this.onChangePass}
                />
              </div>
              <div className="form-group">
                <label className="formlabel">??????</label>
                <input
                  type="text"
                  className="input1"
                  value={this.state.key}
                  onChange={this.onChangeKey}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="?????? ????????????"
                  className="editbtn"
                />
              </div>
            </form>
          </div>
        </div>
        <br /> <br />
        <br />
        <br />
      </div>
    );
  }
}
