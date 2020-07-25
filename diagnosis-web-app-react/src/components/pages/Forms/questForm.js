import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';



class QuestForm extends React.Component {

    state = {
    "first_name": "",
    "last_name": "",
    "age": 0,
    "date_of_birth": new Date(),
    "pesel": "",
    "sex": ""
    }

    handleChanged = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendQuestRequest(this.state);
        this.setState({
            "first_name": "",
            "last_name": "",
            "age": 0,
            "date_of_birth": new Date(),
            "pesel": "",
            "sex": ""

        })
    }

    render() {
        return (
            <form id="quest">
                <label>
                    First name:
                    <input type="text" name="first_name"
                        value={ this.state.first_name }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>

                <label>
                    Last name:
                    <input type="text" name="last_name"
                        value={ this.state.last_name }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>

                <label>
                    Sex:
                    <input type="text" name="sex"
                        value={ this.state.sex }
                        onChange={ this.handleChanged }
                        />
                </label>

                <br/>

                <label>
                    Age:
                    <input type="number" name="age"
                        value={ this.state.age }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>

                <label>
                    Date of birth:
                    <input type="date" name="date_of_birth"
                        value={ this.state.date_of_birth }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>

                <label>
                    Pesel
                    <input type="text" name="pesel"
                        value={ this.state.pesel }
                        onChange={ this.handleChanged }
                        />
                </label>
                <Link to="/interview">
                <button onClick={ this.handleSubmit }>Submit
                </button>
                </Link>

                <div>

                <Link to="/interview">
                    <button type="button">
                        Next Page
                    </button>
                </Link>
            </div>
            </form>

        )
    }

}


export default QuestForm;
