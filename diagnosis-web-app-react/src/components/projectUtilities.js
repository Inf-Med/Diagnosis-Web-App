export let getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


export let buildCorrectOptionsForSelectorFromApi = (data) => {
    let outputData = [];

    for (let record of data) {
        outputData.push({
            value: record.symptom_cui,
            label: record.term
        });
    }

    return outputData;
}


export let getAllSymptomsForDesease = (disease, diseasesToSymptoms) => {
    let output = [];
    for (let record of diseasesToSymptoms)
        if (record.disease_cui == disease) output.push(record.symptom_cui);
    return output;
}


let getNameOfRecord = (data, nameToSearch) => {
    let output;
    for (let record of data)
        if (record.symptom_cui == nameToSearch || record.disease_cui == nameToSearch)
            output = record.term;
    return output;
}


export let getHumanReadableNames = (data, dataForSearchingDiseaseName, dataForSearchingSymptomName) => {
    for (let record of data) {
        let newSymptoms = [];
        for (let symptom of record.symptoms) {
            newSymptoms.push(getNameOfRecord(dataForSearchingSymptomName, symptom));
        }
        record.disease_cui = getNameOfRecord(dataForSearchingDiseaseName, record.disease_cui);
        record.symptoms = newSymptoms;
    }
    return data;
}