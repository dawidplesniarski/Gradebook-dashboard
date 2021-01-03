import React from "react";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GradesTable from "../components/Tables/GradesTable";

const studentGradesMock = [
    {
        "_id": "5f708bcc23276e3105160866",
        "studentAlbum": "30785",
        "grade": 5,
        "subject": {
            "_id": "5f677be565132504f7928b35",
            "subjectName": "Matematyka",
            "__v": 0
        },
        "date": "2020-09-21T17:16:32.259Z",
        "__v": 0
    },
    {
        "_id": "5f70c6d42710ea08a581854f",
        "studentAlbum": "30785",
        "grade": 4,
        "subject": {
            "_id": "5f6f3a23d2b734f23ee6396e",
            "subjectName": "Analiza matematyczna",
            "__v": 0
        },
        "date": "2020-09-27T17:07:32.282Z",
        "__v": 0
    },
    {
        "_id": "5f70c6dd2710ea08a5818550",
        "studentAlbum": "30785",
        "grade": 4,
        "subject": {
            "_id": "5f6f3a23d2b734f23ee6396e",
            "subjectName": "Analiza matematyczna",
            "__v": 0
        },
        "date": "2020-09-27T17:07:41.882Z",
        "__v": 0
    },
    {
        "_id": "5f70c7082710ea08a5818551",
        "studentAlbum": "30785",
        "grade": 3.5,
        "subject": {
            "_id": "5f6f3a33d2b734f23ee6396f",
            "subjectName": "Algebra liniowa",
            "__v": 0
        },
        "date": "2020-09-27T17:08:24.124Z",
        "__v": 0
    },
    {
        "_id": "5f70c70b2710ea08a5818552",
        "studentAlbum": "30785",
        "grade": 4,
        "subject": {
            "_id": "5f6f3a33d2b734f23ee6396f",
            "subjectName": "Algebra liniowa",
            "__v": 0
        },
        "date": "2020-09-27T17:08:27.918Z",
        "__v": 0
    },
    {
        "_id": "5f70c71c2710ea08a5818553",
        "studentAlbum": "30785",
        "grade": 5,
        "subject": {
            "_id": "5f6f3a49d2b734f23ee63970",
            "subjectName": "Kryptografia",
            "__v": 0
        },
        "date": "2020-09-27T17:08:44.812Z",
        "__v": 0
    },
    {
        "_id": "5f70c7202710ea08a5818554",
        "studentAlbum": "30785",
        "grade": 4.5,
        "subject": {
            "_id": "5f6f3a49d2b734f23ee63970",
            "subjectName": "Kryptografia",
            "__v": 0
        },
        "date": "2020-09-27T17:08:48.412Z",
        "__v": 0
    }
];

const employeeSubjectsMock = ['Kryptografia', 'Testowanie i jakość oprogramowania']

test('Should render grades table properly', () => {
    const {getByText} = render(<GradesTable data={studentGradesMock} employeeSubjects={employeeSubjectsMock}/>)
    expect(getByText('Ocena')).toBeInTheDocument();
})