import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
         />
      </div>
    )
  }

  render () {
    return (
      <form>
        <Field
          // describes which bit of state is being edited
          name="title"
          component={this.renderField}
        />

        <Field
          // describes which bit of state is being edited
          name="tags"
          component={this.renderField}
        />
      </form>
    )
  }
}


export default reduxForm({
  // always make sure the value of form here is unique, to prevent conflict with any other forms on your application.
  form: 'PostsNewForm'
})(PostsNew);
