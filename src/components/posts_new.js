import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';


class PostsNew extends Component {
  render () {
    return (
      <div>
        PostsNews!
      </div>
    )
  }
}


export default reduxForm({
  // always make sure the value of form here unique, to prevent conflict with any other forms on your application.
  form: 'PostsNewForm'
})(PostsNew);
