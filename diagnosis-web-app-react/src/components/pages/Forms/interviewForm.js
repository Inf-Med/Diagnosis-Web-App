import React from 'react';
import { Link } from 'react-router-dom';
import './questionnaire.css'
import Select from 'react-select';
import { buildCorrectOptionsForSelectorFromApi } from '../../projectUtilities';


class InterviewForm extends React.Component {

  constructor() {
    super();
    this.state = {
      "pregnancy": "false",
      "cigarettes": "false",
      "alcohol": "false",
      "drugs": "",
      "injury": "",
      "family_diseases": "",
      "count": 0,

      "selectorOptions": [],
      "selectedSymptoms": [],
    };

    this.handleChanged = this.handleChanged.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount = () => {
    this.fetchSymptomOptionsFromApi();
  }

  fetchSymptomOptionsFromApi = () => {
    fetch('http://127.0.0.1:8000/quest/symptoms/')
      .then(response => response.json())
      .then(data => this.setState({ selectorOptions: buildCorrectOptionsForSelectorFromApi(data) }));
  }

  handleSelectorChange = (selectedOptions) => {
    this.setState({
      selectedSymptoms: selectedOptions
    })
  }

  handleChanged = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onRadioChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getMostFittingDiseasesAndSaveThemInAppJsState(this.state.selectedSymptoms);
    this.props.sendInterview(this.state);
    this.setState({
      "pregnancy": "false",
      "cigarettes": "false",
      "alcohol": "false",
      "drugs": "",
      "injury": "",
      "family_diseases": "",
      "count": 1,

      "selectorOptions": [],
      "selectedSymptoms": [],
    })
  }

  render() {
    return (
      <form id="interview" className="form-style-5">
        {this.state.count !== 1 &&
          <div>
            <h2>Are you pregnant:</h2>
            <br />
            <ul>
              <li>
                <label>
                  <input
                    name="pregnancy"
                    type="radio"
                    value="false"
                    checked={this.state.pregnancy === "false"}
                    onChange={this.onRadioChange}
                  />
                  <span>No</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="pregnancy"
                    type="radio"
                    value="true"
                    checked={this.state.pregnancy === "true"}
                    onChange={this.onRadioChange}
                  />
                  <span>Yes</span>
                </label>
              </li>
            </ul>
            <br />

            <h2>Do you smoke?</h2>
            <br />
            <ul>
              <li>
                <label>
                  <input
                    name="cigarettes"
                    type="radio"
                    value="false"
                    checked={this.state.cigarettes === "false"}
                    onChange={this.onRadioChange}
                  />
                  <span>No</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="cigarettes"
                    type="radio"
                    value="true"
                    checked={this.state.cigarettes === "true"}
                    onChange={this.onRadioChange}
                  />
                  <span>Yes</span>
                </label>
              </li>
            </ul>
            <br />

            <h2>Do you drink alcohol quite often?</h2>
            <br />
            <ul>
              <li>
                <label>
                  <input
                    name="alcohol"
                    type="radio"
                    value="false"
                    checked={this.state.alcohol === "false"}
                    onChange={this.onRadioChange}
                  />
                  <span>No</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="alcohol"
                    type="radio"
                    value="true"
                    checked={this.state.alcohol === "true"}
                    onChange={this.onRadioChange}
                  />
                  <span>Yes</span>
                </label>
              </li>
            </ul>
            <br />

            <label>
              <h2>Do you take any medicine or drugs?</h2>
              <input type="text" name="drugs"
                value={this.state.drugs}
                onChange={this.handleChanged}
              />
            </label>

            <label>
              <h2>Did you have any injuries recently?</h2>
              <input type="text" name="injury"
                value={this.state.injury}
                onChange={this.handleChanged}
              />
            </label>

            <label>
              <h2>Are there any diseases in your family?</h2>
              <input type="text" name="family_diseases"
                value={this.state.family_diseases}
                onChange={this.handleChanged}
              />
            </label>

            <label>
              <h2>What are your symptoms?</h2>
              <Select options={this.state.selectorOptions} isMulti={true} onChange={this.handleSelectorChange} />
            </label>

            <br />
          </div>
        }


        {this.state.family_diseases !== '' && this.state.injury !== '' && this.state.drugs !== ''
          && this.state.selectedSymptoms.length > 0 &&

          <button onClick={this.handleSubmit}>
            <Link to="/diagnosis">
              Submit
            </Link>
          </button>
        }

        {this.state.count === 1 &&
          <div>
            <Link to="/diagnosis">
              <button>Next Page</button>
            </Link>
          </div>
        }

      </form>
    )
  }
}


export default InterviewForm;