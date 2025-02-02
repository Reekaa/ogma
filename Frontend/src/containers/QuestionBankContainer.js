import React from 'react';
import QuestionBank from '../components/QuestionBank';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    questions: state
  }
};

const mapDispatchToProps = (dispatch) => ({
  addQuestion(newQuestion) {
    dispatch({
      type: 'ADD_QUESTION',
      newQuestion: newQuestion
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBank)
