import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });
    return (
        <div>
            <h5> please confirm your foem</h5>
            {reviewFields}
            <div />
            <button
                className="yellow darken-3 white-text btn-flat"
                onClick={onCancel}
            >
                {' '}
                Back
            </button>
            <button
                className="green right white-text  btn-flat"
                onClick={() => {
                    submitSurvey(formValues);
                }}
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(
    mapStateToProps,
    actions
)(SurveyFormReview);
