import React from 'react';
import ReactDOM from 'react-dom';


class InterviewForm extends React.Component {

        constructor() {
          super();
          this.state = {
            "pregnancy": "false",
            "cigarettes": "false",
            "alcohol": "false",
            "drugs": "",
            "injury": "",
            "symptoms": "",
            "family_diseases": ""
          };

          this.handleChanged = this.handleChanged.bind(this);
          this.onRadioChange = this.onRadioChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);

        }
          handleChanged = (event) => {
              this.setState({ [event.target.name] : event.target.value });
          }


          onRadioChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
          }
          handleSubmit = (e) => {
              e.preventDefault();
              this.props.sendInterviewRequest(this.state);
              this.setState({
                "pregnancy": "false",
            "cigarettes": "false",
            "alcohol": "false",
            "drugs": "",
            "injury": "",
            "symptoms": "",
            "family_diseases": ""
            })
          }

          render() {
              return (
                  <div>
                       <strong>Are you pregnant:</strong>

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
                  <br/>
                            <br/>

                            <strong>Do you smoke?</strong>

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
            <br/>

            <strong>Do you drink alcohol quite often?</strong>

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
                <br/>

                <label>
                    Do you take any medicine or drugs?
                    <div className="input-data">
                    <input type="text" name="drugs"
                        value={ this.state.drugs }
                        onChange={ this.handleChanged }
                        />
                    </div>
                </label>
                <br/>

                <label>
                    Did you have any injuries recently?
                    <div className="input-data">
                    <input type="text" name="injury"
                        value={ this.state.injury }
                        onChange={ this.handleChanged }
                        />
                    </div>
                </label>
                <br/>

                <label>
                    What are your symptoms?
                    <div className="input-data">
                    <input type="text" name="symptoms"
                        value={ this.state.symptoms }
                        onChange={ this.handleChanged }
                        />
                    </div>
                </label>
                <br/>

                <label>
                    Are there any diseases in your family?
                    <div className="input-data">
                    <input type="text" name="family_diseases"
                        value={ this.state.family_diseases }
                        onChange={ this.handleChanged }
                        />
                    </div>
                </label>
                <br/>
                {this.state.family_diseases !=='' &&  this.state.symptoms !=='' && this.state.injury !=='' && this.state.drugs !=='' &&
                <button id="submitBtn" onClick={ this.handleSubmit }>Submit</button>
              }
                </div>
        )
    }


}

ReactDOM.render(
    <InterviewForm />,
    document.getElementById('root')
  );

export default InterviewForm;
