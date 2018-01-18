import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

  renderTitleField(field) {
    return (
      <div>
        <input
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
          component={this.renderTitleField}
        />
      </form>
    )
  }
}


export default reduxForm({
  // always make sure the value of form here unique, to prevent conflict with any other forms on your application.
  form: 'PostsNewForm'
})(PostsNew);
