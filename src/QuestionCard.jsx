import React, {Component} from 'react';
import axios from 'axios';
import SubmitAnswer from './SubmitAnswer';

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
    };

  }

  async componentDidMount() {
    await this.refreshQuestion();
  }

  refreshQuestion = () => {
    const { match: { params } } = this.props;

    const requestOptions = {
        method: 'GET'
    };

    return fetch(`/api/question/${params.questionId}`, requestOptions)
    .then(response => response.json())
    .then(data => this.setState({question: data}));
}

submitAnswer = (answer) => {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer })
  };

   fetch(`/api/answer/${this.state.question.id}`, requestOptions)
  .then(response => {console.log(response)});

  this.refreshQuestion();
}

  render() {
    const {question} = this.state;
    if (question === null) return <p>Loading ...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{this.state.question.title}</h1>
            <p className="lead">{this.state.question.description}</p>
            <hr className="my-4" />
            <SubmitAnswer questionId={question.id} submitAnswer={this.submitAnswer} />
            <p>Answers:</p>
            {
              question.answers.map((answer, idx) => (
                <p className="lead" key={idx}>{answer.answer}</p>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionCard;
