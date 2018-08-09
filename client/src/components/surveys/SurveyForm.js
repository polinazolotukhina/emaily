import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return formFields.map(field => (
            <Field
                label={field.label}
                type="text"
                name={field.name}
                component={SurveyField}
                key={field.name}
            />
        ));
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(
                        this.props.onSurveySubmit
                    )}
                >
                    {this.renderFields()}
                    <Link to="/survays" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button
                        className="teal btn-flat right white-text"
                        type="submit"
                    >
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}
function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.emails || '');
    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You mast provide a value';
        }
    });

    return errors;
}
export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
