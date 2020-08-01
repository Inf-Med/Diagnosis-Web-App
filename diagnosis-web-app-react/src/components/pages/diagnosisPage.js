import React from 'react';
import './diagnosisPage.css';
import { Redirect } from 'react-router-dom';


class DiagnosisPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        "diagnosis": []
      };
    }

    listSymptoms = (symptoms) => {
        return symptoms.map((symptom) =>
            <li>{ symptom }</li>);
    }

    listDiseases = (diseases) => {
        return diseases.map((disease) =>
            <li>{ disease.disease_cui }</li>);
    }

    getFirstMatch = () => {
        let dataToDisplay = this.props.diagnosisData[this.props.diagnosisData.length - 1];
        return <div id="wrapper">
                    <h2 className="matchNum">First match</h2>
                    <br/>
                    <h3>Condition name:</h3>
                    <br/>
                    { dataToDisplay.disease_cui }
                    <br/>
                    <h3>Condition symptoms:</h3>
                    <br/>
                    <ul>
                        { this.listSymptoms(dataToDisplay.symptoms) }
                    </ul>
                </div>
    }

    getSecondMatch = () => {
        let dataToDisplay = this.props.diagnosisData[this.props.diagnosisData.length - 2];
        return <div id="wrapper">
                    <h2 className="matchNum">Second match</h2>
                    <br/>
                    <h3>Condition name:</h3>
                    <br/>
                    { dataToDisplay.disease_cui }
                    <br/>
                    <h3>Condition symptoms:</h3>
                    <br/>
                    <ul>
                        { this.listSymptoms(dataToDisplay.symptoms) }
                    </ul>
                </div>
    }

    getThirdMatch = () => {
        let dataToDisplay = this.props.diagnosisData[this.props.diagnosisData.length - 3];
        return <div id="wrapper">
                    <h2 className="matchNum">Third match</h2>
                    <br/>
                    <h3>Condition name:</h3>
                    <br/>
                    { dataToDisplay.disease_cui }
                    <br/>
                    <h3>Condition symptoms:</h3>
                    <br/>
                    <ul>
                        { this.listSymptoms(dataToDisplay.symptoms) }
                    </ul>
                </div>
    }

    getRestOfTheMatches = () => {
        let dataToDisplay = this.props.diagnosisData.slice(0, this.props.diagnosisData.length - 3);
        return <div id="wrapper">
                    <h2 className="matchNum">Other possible diseases</h2>
                    <br/>
                    <ul>
                        { this.listDiseases(dataToDisplay) }
                    </ul>
                </div>
    }

    render() {
        let firstMatch, secondMatch, thirdMatch, restOfTheMatches;
        if (this.props.diagnosisData.length) {
            firstMatch = this.getFirstMatch();
            secondMatch = this.getSecondMatch();
            thirdMatch = this.getThirdMatch();
            restOfTheMatches = this.getRestOfTheMatches();
        }

        let isUserloggedIn = this.props.isUserLoggedIn;

        return (

            isUserloggedIn ? (
            <div id="content">
                <div id="wrapper">
                    <h1>Conditions that match your symptoms</h1>
                </div>

                    { firstMatch }
                    { secondMatch }
                    { thirdMatch }
                    { restOfTheMatches }

            </div>
            ) : (
                    <Redirect to="/"></Redirect>
                )
        )
    }

}


export default DiagnosisPage;