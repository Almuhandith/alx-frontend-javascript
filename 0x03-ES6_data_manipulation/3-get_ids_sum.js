export default function getStudentIdsSum(students) {
  if (Object.getPrototypeOf(students) === Array.prototype) {
    return students.reduce((acc, curr) => acc + curr.id, 0);
  }
  return [];
}
