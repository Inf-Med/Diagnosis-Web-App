import React from 'react';
import InterviewForm from './Forms/interviewForm';
import { Redirect } from 'react-router-dom';
import { getAllSymptomsForDesease, getHumanReadableNames } from '../projectUtilities';


class InterviewPage extends React.Component {

    state = {
        dataForSearchingDiseaseName: [],
        dataForSearchingSymptomName: []
    }

    componentDidMount = () => {
        fetch("http://127.0.0.1:8000/quest/diseases/")
            .then( data => data.json())
            .then( data => {
                this.setState({dataForSearchingDiseaseName: data})
            })
        fetch("http://127.0.0.1:8000/quest/symptoms/")
            .then( data => data.json())
            .then( data => {
                this.setState({dataForSearchingSymptomName: data})
            })
    }

    getMostFittingDiseasesAndSaveThemInAppJsState = (selectedSymptoms) => {
        fetch('http://127.0.0.1:8000/quest/diseases-to-symptoms/')
        .then( data => data.json())
        .then( data => this.iterateThroughDiseasesData(data, selectedSymptoms))
        .catch( error => console.error(error))
    }

    iterateThroughDiseasesData = (responseSymptomsData, selectedSymptoms) => {
        let diseasesToSymptoms = [];

        for (let responseRecord of responseSymptomsData) {
            for (let selectedRecord of selectedSymptoms) {
                if (responseRecord.symptom_cui == selectedRecord.value) {
                    diseasesToSymptoms.push(responseRecord)
                }
            }
        }

        let justDiseases = [];
        for (let i = 0; i < diseasesToSymptoms.length; i++) {
            if (i != 0 && diseasesToSymptoms[i - 1].disease_cui == diseasesToSymptoms[i].disease_cui)
                justDiseases[justDiseases.length - 1].symptomsCount += 1;
            else
                justDiseases.push({
                    disease_cui: diseasesToSymptoms[i].disease_cui,
                    symptoms: getAllSymptomsForDesease(diseasesToSymptoms[i].disease_cui, diseasesToSymptoms),
                    symptomsCount: 1
                })
        }

        justDiseases.sort((a,b) =>  a.symptomsCount - b.symptomsCount);

        let output = [];
        output = getHumanReadableNames(justDiseases, this.state.dataForSearchingDiseaseName, this.state.dataForSearchingSymptomName);
        this.props.editDiagnosisDataState(output);
    }

    render() {
        let interview;
        if (this.props.isUserLoggedIn === true)
            interview = <InterviewForm getMostFittingDiseasesAndSaveThemInAppJsState={ this.getMostFittingDiseasesAndSaveThemInAppJsState }/>
        else
            interview = <Redirect to="/login"></Redirect>
        return (
            <div id="content">
                <div id="wrapper">
                   { interview }
                </div>
            </div>
        )
    }
}


export default InterviewPage;
