export const API_URL = 'https://node-app-4fun.herokuapp.com';

export function compareArrays(arr1, arr2) {
    let finalArr = [];
    arr1.forEach((el) => arr2.forEach((el1) => {
        if(el._id === el1._id) {
            finalArr.push(el);
        }
    }));
    return finalArr;
};

export function compareSubjectArrays(arr1, arr2) {
    let finalArr = [];
    arr1.forEach((el) => arr2.forEach((el1) => {
        if(el.subjectName === el1) {
            finalArr.push(el);
        }
    }));
    return finalArr;
};

export function getEmployeeSubjects(subjects) {
    let finalArr = [];
    subjects.forEach((el) => {
        finalArr.push(el.subjectName)
    });
    return finalArr
};

export function compareGradesArrays(allGrades, studentSubjects) {
    let filteredGrades = [];
    allGrades.forEach((el) => studentSubjects.forEach((el1) => {
        if(el.subject.subjectName === el1) {
            filteredGrades.push(el);
        }
    }));
    return filteredGrades;
};