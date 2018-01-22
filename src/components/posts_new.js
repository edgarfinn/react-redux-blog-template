import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
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
          label="Title"
          name="title"
          component={this.renderField}
        />

        <Field
          // describes which bit of state is being edited
          label="Categories"
          name="categories"
          component={this.renderField}
        />

        <Field
          // describes which bit of state is being edited
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    )
  }
}

const validate = (values) =>  {
  const errors = {};

  // Validate the inputs from 'values'
  // if user did not enter a title value:
  if (!values.title) {
    // then add
    errors.title = "Enter a title!";
  }

  // If errors object is empty, the form is fine to submit.
  // If errors has any properties, redux assumes the form is invalid.
  return errors;

}

export default reduxForm({
  // always make sure the value of form here is unique, to prevent conflict with any other forms on your application.
  validate,
  form: 'PostsNewForm'
})(PostsNew);
