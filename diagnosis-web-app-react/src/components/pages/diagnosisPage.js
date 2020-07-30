import React from 'react';
import './Forms/questionnaire.css'


class DiagnosisPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        "diagnosis": []
      };
    }
    componentDidMount() {
        //fetch('http://jsonplaceholder.typicode.com/users')
        fetch('http://fizyka.umk.pl/~291605/test/diseases.json')
        //fetch('nasz')
        .then(res => res.json())
        .then((data) => {
          this.setState({ diagnosis: data })
        })
        .catch(console.log)
      }

    render() {
        return (
            <div className="form-style-5">
                <h1>Conditions that match your symptoms</h1>
                <h2>First match</h2>
                <h3>Condition name:</h3>
                    {this.state.diagnosis.map(diagnose =>
                    <div key={diagnose.number_of_symptoms}>
                    {diagnose.term}
                    </div>
                    )}
                    <br/>
                    <h3>Condition symptoms:</h3>
                    <br/>
                    <h3>Condition description:</h3>
                    {this.state.diagnosis.map(diagnose =>
                    <div key={diagnose.number_of_symptoms}>
                    {diagnose.disease_cui}
                    </div>
                    )}
                    <br/>
                <h2>Second match</h2>
                <h3>Condition name:</h3>
                    {this.state.diagnosis.map(diagnose =>
                    <div key={diagnose.number_of_symptoms}>
                    {diagnose.term}
                    </div>
                    )}
                    <br/>
                    <h3>Condition symptoms:</h3>
                    <br/>
                    <h3>Condition description:</h3>
                    {this.state.diagnosis.map(diagnose =>
                    <div key={diagnose.number_of_symptoms}>
                    {diagnose.disease_cui}
                    </div>
                    )}
                    <br/>
                <h2>Third match</h2>
                <h3>Condition name:</h3>
                    {this.state.diagnosis.map(diagnose =>
                    <div key={diagnose.number_of_symptoms}>
                    {diagnose.term}
                    </div>
                    )}
                    <br/>
                <h3>Condition symptoms:</h3>
                <br/>
                <h3>Condition description:</h3>
                    {this.state.diagnosis.map(diagnose =>
                    <div key={diagnose.number_of_symptoms}>
                    {diagnose.disease_cui}
                    </div>
                    )}
            </div>
        )
    }

}


export default DiagnosisPage;