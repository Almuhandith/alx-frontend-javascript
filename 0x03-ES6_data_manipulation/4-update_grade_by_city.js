export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  if (Object.getPrototypeOf(students) !== Array.prototype) {
    return [];
  }
  if (Object.getPrototypeOf(newGrades) !== Array.prototype) {
    return [];
  }
  return listStudents.filter((student) => student.location === city).map((student) => {
    const [newGrade] = newGrades.filter((item) => item.studentId === student.id);
    return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
  });
}
