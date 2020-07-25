import React from 'react';
import ReactDOM from 'react-dom';


class InterviewForm extends React.Component {


    state = {
    "pregnancy": false,
    "cigarettes": false,
    "alcohol": false,
    "drugs": "",
    "injury": "",
    "symptoms": "",
    "family_diseases": ""
    }

    handleChanged = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendInterviewRequest(this.state);
        this.setState({
            "pregnancy": false,
            "cigarettes": false,
            "alcohol": false,
            "drugs": "",
            "injury": "",
            "sympotms": "",
            "family_diseases": ""
        })
    }

    render() {
        return (
            <form id="interview">
                <label>
                    Are you pregnant?
                    <input type="boolean" name="pregnancy"
                        value={ this.state.pregnancy }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>

                <label>
                    Do you smoke?
                    <input type="boolean" name="cigarettes"
                        value={ this.state.cigarettes }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>

                <label>
                    Do you drink alcohol quite often?
                    <input type="boolean" name="alcohol"
                        value={ this.state.alcohol }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>

                <label>
                    Do you take any medicine or drugs?
                    <input type="text" name="drugs"
                        value={ this.state.drugs }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>

                <label>
                    Did you have any injuries recently?
                    <input type="text" name="injury"
                        value={ this.state.injury }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>

                <label>
                    What are your symptoms?
                    <input type="text" name="symptoms"
                        value={ this.state.symptoms }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>

                <label>
                    Are there any diseases in your family?
                    <input type="text" name="family_diseases"
                        value={ this.state.family_diseases }
                        onChange={ this.handleChanged }
                        />
                </label>
                <br/>
                <button onClick={ this.handleSubmit }>Submit</button>
            </form>
        )
    }


}

ReactDOM.render(
    <InterviewForm />,
    document.getElementById('root')
  );

export default InterviewForm;
