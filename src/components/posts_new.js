import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';



class PostsNew extends Component {

  renderField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
         />
         {touched ? error : ''}
      </div>
    )
  }

  onSubmit(values) {
    // this === PostsNew component

    this.props.createPost(values, () => {
      this.props.history.push('/');
    })
  }

  render () {
    const { handleSubmit } = this.props;
    // same as: const handleSubmit = this.props.handleSubmit;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          // describes which bit of state is being edited
          name="title"
          component={this.renderField}
        />

        <Field
          label="Categories"
          // describes which bit of state is being edited
          name="categories"
          component={this.renderField}
        />

        <Field
          label="Post Content"
          // describes which bit of state is being edited
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-primary btn-danger">Cancel</Link>

      </form>
    )
  }
}

const validate = (values) =>  {
  const errors = {};

  // Validate the inputs from 'values'
  // if user did not enter a title value:
  if (!values.title) {
    // then add this error message
    errors.title = "Enter a title!";
  }
  // if user enters a title shorter than 10 characters
  // then add a different error message
  if (values.content && values.content.length < 10) {
    errors.content = 'Content must be longer than 10 characters!';
  }

  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  // If errors object is empty, the form is fine to submit.
  // If errors has any properties, redux assumes the form is invalid.
  return errors;
}

export default reduxForm({
  // always make sure the value of form here is unique, to prevent conflict with any other forms on your application.
  validate,
  form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew));
