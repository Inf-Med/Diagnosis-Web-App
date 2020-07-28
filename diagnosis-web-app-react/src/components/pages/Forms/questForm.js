import React from 'react';
import { Link } from 'react-router-dom';


class QuestForm extends React.Component {

  constructor() {
    super();
    this.state = {
      "first_name": "",
      "first_nameError":"",
      "last_name": "",
      "last_nameError":"",
      "age": 0,
      "ageError":"",
      "date_of_birth": new Date(),
      "pesel": 0,
      "peselError":"",
      "sex": 'f'
    };

    this.handleChanged = this.handleChanged.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
    handleChanged = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    }

    LastChanged = (event) => {
      this.setState({ last_name : event.target.value }, () =>{
        this.validatelast_name();
      });
  };
    validatelast_name = (e) =>{
      const{last_name} = this.state;
      this.setState({
        last_nameError:
        last_name.length > 3 || last_name === '' ? null : 'Last name must be longer than 3 characters'
      });
    }
    FirstChanged = (event) => {
      this.setState({ first_name : event.target.value }, () =>{
        this.validatefirst_name();
      });
  };
    validatefirst_name = (e) =>{
      const{first_name} = this.state;
      this.setState({
        first_nameError:
        first_name.length > 3 || first_name === '' ? null : 'First name must be longer than 3 characters'
      });
    }
    AgeChanged = (event) => {
      this.setState({ age : event.target.value }, () =>{
        this.validateage();
      });
  };
    validateage = (e) =>{
      const{age} = this.state;
      this.setState({
        ageError:
        (age > 0 && age < 99) || age === 0 ? null : 'Age is out of range 0-99',
      });
    }

    PeselChanged = (event) => {
      this.setState({ pesel : event.target.value }, () =>{
        this.validatepesel();
      });
  };
    validatepesel = (e) =>{
      const{pesel} = this.state;
      this.setState({
        peselError:
        pesel.toString().length !==12 ? null : 'Pesel is in the wrong format',
      });
    }

    onRadioChange = (e) => {
      this.setState({
        sex: e.target.value
      });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendQuestRequest(this.state);
        this.setState({
          "first_name": "",
          "last_name": "",
          "age": 0,
          "date_of_birth": "",
          "pesel": 0,
          "sex": "f"
      })
    }

    render() {
        return (
            <div>
              <div>
                <label>
                    First name:
                    <div className="input-data">
                    <input type="text" name="first_name"
                        value={ this.state.first_name }
                        onChange={ this.FirstChanged }
                        className={`form-control ${this.state.first_nameError ? 'is-invalid' : ''}`}
                        onBlur={this.validatefirst_name}
                        />
                    </div>
                </label>
                <div className='invalid-feedback'>{this.state.first_nameError}</div>
        </div>
        <div>
                <label>
                    Last name:
                    <div className="input-data">
                    <input type="text" name="last_name"
                        value={ this.state.last_name }
                        onChange={ this.LastChanged}
                        onBlur={this.validatelast_name}
                        />
                    </div>
                </label>
                <div className='invalid-feedback'>{this.state.last_nameError}</div>
        </div>
                <br/>
                <strong>Sex:</strong>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="f"
                  checked={this.state.sex === "f"}
                  onChange={this.onRadioChange}
                />
                <span>Female</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="m"
                  checked={this.state.sex === "m"}
                  onChange={this.onRadioChange}
                />
                <span>Male</span>
              </label>
            </li>
          </ul>
                <br/>
<div>
                <label>
                    Age:
                    <div className="input-data">
                    <input type="number" name="age"
                        value={ this.state.age }
                        onChange={ this.handleChanged }
                        onBlur={this.validateage}
                        />
                    </div>
                </label>
                <div className='invalid-feedback'>{this.state.ageError}</div>
        </div>
                <br/>

                <label>
                    Date of birth:
                    <div className="input-data">
                    <input type="date" name="date_of_birth"
                        value={ this.state.date_of_birth }
                        onChange={ this.handleChanged }
                        />
                    </div>
                </label>
                <br/>
              <div>
                <label>
                    Pesel
                    <div className="input-data">
                    <input type="number" name="pesel"
                        value={ this.state.pesel }
                        onChange={ this.PeselChanged }
                        onBlur={this.validatepesel}
                        />
                    </div>
                </label>

                <div>
                    <Link to="/interview">
                        <button id="submitBtn" type="button">
                            Next Page
                        </button>
                    </Link>
                </div>
                <div className='invalid-feedback'>{this.state.peselError}</div>
                </div>
                {this.state.pesel !==0 &&  this.state.age !==0 && this.state.first_name !=='' && this.state.last_name !==''
                && !this.state.peselError && !this.state.ageError && !this.state.last_nameError && !this.state.first_nameError &&
                <button id="submitBtn" type="submit" onClick={this.handleSubmit}>Submit
                </button>
              }
            </div>

        )
    }
  }

export default QuestForm;
