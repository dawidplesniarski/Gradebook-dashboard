export const API_URL = 'https://node-app-4fun.herokuapp.com';
export const TOKEN = localStorage.getItem('token');


export function compareArrays(arr1, arr2) { // compare two arrays by objects id
    let finalArr = [];
    arr1.forEach((el) => arr2.forEach((el1) => {
        if(el._id === el1._id) {
            finalArr.push(el);
        }
    }));
    return finalArr;
};

export function compareSubjectArrays(arr1, arr2) { // compare subject object array with subject names array
    let finalArr = [];
    arr1.forEach((el) => arr2.forEach((el1) => {
        if(el.subjectName === el1) {
            finalArr.push(el);
        }
    }));
    return finalArr;
};

export function addGradeFormSubjects(arr1, arr2) {  // return array of subjects to AddGradeForm
    let finalArr = [];
    arr1.forEach((el) => arr2.forEach((el1) => {
        if(el.subjectName === el1) {
            finalArr.push(el.subjectName);
        }
    }));
    return finalArr;
}

export function getEmployeeSubjects(subjects) { // return array of employee subjects
    let finalArr = [];
    subjects.forEach((el) => {
        finalArr.push(el.subjectName)
    });
    return finalArr
};

export function getEmployeeCourses(courses) {   // return array of employee courses
  let employeeCourses = [];
  courses.forEach((el) => {
     employeeCourses.push(el.courseName)
  });
  return employeeCourses;
};

export function compareGradesArrays(allGrades, studentSubjects) {   // return array of student grades matching subjects
    let filteredGrades = [];
    allGrades.forEach((el) => studentSubjects.forEach((el1) => {
        if(el.subject.subjectName === el1) {
            filteredGrades.push(el);
        }
    }));
    return filteredGrades;
};