
import React from "react";

// TIMESTAMP: 1:41:10

class EditGroup extends React.Component {
  constructor(props) {
    super(props)
    const {name, type, link} = props.location.state.group;
    this.state = {
      name,
      type,
      link,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.type === "" || this.state.link === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.editGroupHandler(this.state);
    this.setState({ name: "",type: "", link: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Group</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Group Name</label>
            <input
              type="text"
              name="group name"
              style={{width: "370px"}}
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            /> 
          </div>
          <div className="field">
            <label>Group Type</label>
            <input
              type="text"
              name="type"
              style={{width: "370px"}}
              placeholder="Class, Club or Interest Group"
              value={this.state.type}
              onChange={(e) => this.setState({ type: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Group Chat Link</label>
            <input
              type="url"
              name="link"
              style={{width: "370px"}}
              placeholder="Link"
              value={this.state.link}
              onChange={(e) => this.setState({ link: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditGroup;