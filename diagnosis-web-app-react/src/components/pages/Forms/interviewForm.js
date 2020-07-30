import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './questionnaire.css'

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
            "family_diseases": "",
            "count":0
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
              this.state.count = 1;
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
                  <form id="interview" className="form-style-5">
                    {this.state.count !==1 &&
                    <div>
                       <h2>Are you pregnant:</h2>
                       <br/>
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

                <h2>Do you smoke?</h2>
                <br/>
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

<h2>Do you drink alcohol quite often?</h2>
<br/>
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
                <h2>Do you take any medicine or drugs?</h2>
                    <input type="text" name="drugs"
                        value={ this.state.drugs }
                        onChange={ this.handleChanged }
                        />
                </label>

                <label>
                <h2>Did you have any injuries recently?</h2>
                    <input type="text" name="injury"
                        value={ this.state.injury }
                        onChange={ this.handleChanged }
                        />
                </label>
                <label>
                <h2>What are your symptoms?</h2>
                    <input type="text" name="symptoms"
                        value={ this.state.symptoms }
                        onChange={ this.handleChanged }
                        />
                </label>

                <label>
                <h2>Are there any diseases in your family?</h2>
                    <input type="text" name="family_diseases"
                        value={ this.state.family_diseases }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>
                </div>
          }
                {this.state.family_diseases !=='' &&  this.state.symptoms !=='' && this.state.injury !=='' && this.state.drugs !=='' &&
                <button onClick={ this.handleSubmit }>Submit</button>
              }
              {this.state.count ===1 &&
              <div>
              <Link to="/diagnosis">
                  <button >
                      Next Page
                  </button>
              </Link>
              </div>
              }
                </form>
        )
    }
}
ReactDOM.render(
    <InterviewForm />,
    document.getElementById('root')
  );

export default InterviewForm;

