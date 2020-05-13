import React, { Component } from 'react';

class Course extends Component {
  state = {
    title: null
  }

  componentDidMount() {
    this.loadTitle();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.loadTitle();
  }

  loadTitle = () => {
    if (this.props.location.search) {
      const query = new URLSearchParams(this.props.location.search);
      for (const param of query.entries()) {
        if (param[0] === 'title') {
          if (this.state.title !== param[1]) {
            this.setState({title: param[1]});
          }
        }
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
