import React, { Component, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './questionnaire.css'
class QuestForm extends React.Component {
  constructor() {
    super();
    this.state = {
      "first_name": "",
      "first_nameError":"",
      "first_nameError2":"",
      "last_name": "",
      "last_nameError2":"",
      "last_nameError":"",
      "age": 0,
      "date_of_birth": "",
      "dateError":"",
      "dateError2":"",
      "dateError3":"",
      "pesel": "",
      "peselError":"",
      "peselError2":"",
      "sex": 'f',
      "count":0,
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
        last_name.length > 2 || last_name === '' ? null : 'Last name must be longer than 2 characters',
        last_nameError2:
        isNaN(last_name) ? null : 'Last name cannot contain number'
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
        first_name.length > 2 || first_name === '' ? null : 'First name must be longer than 2 characters',
        first_nameError2:
        isNaN(first_name) ? null : 'First name cannot contain number'
      });
    }

    PeselChanged = (event) => {
      this.setState({ pesel : event.target.value }, () =>{
        this.validatepesel();
      });
  };
    validatepesel = (e) =>{
      const{pesel} = this.state;
      var reg = new RegExp('^[0-9]{11}$');
      var date_of_birth = (this.state.date_of_birth).toString().substring(2,4)+(this.state.date_of_birth).toString().substring(5,7)+(this.state.date_of_birth).toString().substring(8,10);
      var date_of_birth_00 = (this.state.date_of_birth).toString().substring(2,4)+"2"+(this.state.date_of_birth).toString().substring(6,7)+(this.state.date_of_birth).toString().substring(8,10);
      var pesel_S = (pesel).toString()
      this.setState({
        peselError:
        reg.test(pesel) ? null : 'Pesel is in the wrong format',
        peselError2:
        date_of_birth.startsWith("00") ?
        pesel_S.startsWith(date_of_birth_00) ? null : 'Pesel does not match the date of birth':
        pesel_S.startsWith(date_of_birth) ? null : 'Pesel does not match the date of birth',
      });
    }
    DateChanged = (event) => {
      var age_count = new Date(event.target.value).getFullYear() === new Date().getFullYear()? 1: parseInt(moment(new Date(event.target.value),"yyyy-MM-dd").fromNow())-1;
      this.setState({ date_of_birth : event.target.value,
      age: age_count}, () =>{
        this.validatedate();
      });
  };
    validatedate = (e) =>{
      const{date_of_birth} = this.state;
      var reg = new RegExp('^(19|20)[0-9]{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$');
      const date_now = new Date()
      this.setState({
        dateError:
        reg.test(date_of_birth)? null : 'Date is in the wrong format',
        dateError2:
        new Date(date_of_birth) < date_now? null : 'Date is from future',
        dateError3:
        new Date(date_of_birth).getFullYear() > parseInt(new Date().getFullYear())-99 ? null : 'Have you more than 99 years ?',
      });
    }
    onRadioChange = (e) => {
      this.setState({
        sex: e.target.value
      });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.count = 1;
        this.props.sendQuestRequest(this.state);
        this.setState({
          "first_name": "",
          "last_name": "",
          "age": 0,
          "date_of_birth": "",
          "pesel": "",
          "sex": "f"
      })
    }

    render() {
        return (
            <form id="quest" className="form-style-5">
            {this.state.count !==1 &&
            <div>
              <div>
                <label>
                    <h3>First name:</h3>
                    <input type="text" name="first_name"
                        value={ this.state.first_name }
                        onChange={ this.FirstChanged }
                        className={`form-control ${this.state.first_nameError ? 'is-invalid' : ''}`}
                        onBlur={this.validatefirst_name}
                        />

                </label>
                <div className='invalid-feedback'>{this.state.first_nameError}</div>
                <div className='invalid-feedback'>{this.state.first_nameError2}</div>
        </div>
        <br/>
        <div>
                <label>
                    <h3>Last name:</h3>
                    <input type="text" name="last_name"
                        value={ this.state.last_name }
                        onChange={ this.LastChanged}
                        onBlur={this.validatelast_name}
                        />

                </label>
                <div className='invalid-feedback'>{this.state.last_nameError}</div>
                <div className='invalid-feedback'>{this.state.last_nameError2}</div>
        </div>
        <br/>
         <div>
                <h3>Sex:</h3>
                <br/>
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
          </div>
                <br/>
<div>
                <label>
                    <h3>Date of birth:</h3>
                    <input
                        type="text"
                        name="date_of_birth"
                        value={ this.state.date_of_birth }
                        onChange={ this.DateChanged }
                        placeholder={"YYYY-MM-DD"}
                        onBlur={this.validatedate}
                        />
                </label>
                <br/>
                <div className='invalid-feedback'>{this.state.dateError}</div>
                <div className='invalid-feedback'>{this.state.dateError2}</div>
                <div className='invalid-feedback'>{this.state.dateError3}</div>
        </div>

        <div>
                <label>
                    <h3>Pesel:</h3>
                    <input type="text" name="pesel"
                        value={ this.state.pesel }
                        onChange={ this.PeselChanged }
                        onBlur={this.validatepesel}
                        />

                </label>
                <br/>
                <div className='invalid-feedback'>{this.state.peselError}</div>
                <div className='invalid-feedback'>{this.state.peselError2}</div>
                <br/>
        </div>
        </div>
    }
                {this.state.pesel !=='' &&  this.state.date_of_birth !=='' && this.state.first_name !=='' && this.state.last_name !=='' && !this.state.peselError && !this.state.peselError2 && !this.state.ageError && !this.state.last_nameError && !this.state.last_nameError2 && !this.state.fiest_nameError2 && !this.state.first_nameError && !this.state.dateError && !this.state.dateError2 && !this.state.dateError3 &&
                <button type = "submit" onClick={this.handleSubmit}>Submit
                </button>
              }
              {this.state.count ===1 &&
              <div>
              <Link to="/interview">
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

export default QuestForm;
