import React from 'react';
import '.Forms/questionnaire.css'


class DiagnosisPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        "diagnosis": []
      };
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
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
                <h1>Your Diagnosis</h1>
                    {this.state.diagnosis.map(diagnos =>
                    <div key={diagnos.id}>
                    {diagnos.name}
                    </div>
                    )}
            </div>
        )
    }

}


export default DiagnosisPage;