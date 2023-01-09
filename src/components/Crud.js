import React from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

export default class Crud extends React.Component {
  state = { notes: [] };

  componentDidMount() {
    this.getRequest();
  }

  url = "http://localhost:7777/notes";

  getRequest = () => {
    fetch(this.url)
      .then((response) => response.json())
      .then((result) => {
        debugger;
        this.setState({
          notes: [...result],
        });
      });
  };

  setRequest = (body) => {
    fetch(this.url, {
      method: "POST",
      body: JSON.stringify(body),
    }).then((result) => (result ? this.getRequest() : null));
  };

  deleteRequest = (id) => {
    fetch(`${this.url}/${id}`, { method: "DELETE" }).then((result) =>
      result ? this.getRequest() : null
    );
  };

  render() {
    return (
      <div className='containier'>
        <div className='updateBlock' onClick={() => this.getRequest()}>
          <p className='updateTitle'>Notes</p>
          <button className='updateBtn material-icons'>autorenew</button>
        </div>
        <div className='CrudTable'>
          {this.state.notes.map((item) => (
            <CrudTable
              key={item.id}
              text={item.content}
              id={item.id}
              deleteRequest={this.deleteRequest}
            />
          ))}
        </div>

        <CrudForm setRequest={this.setRequest} />
      </div>
    );
  }
}
