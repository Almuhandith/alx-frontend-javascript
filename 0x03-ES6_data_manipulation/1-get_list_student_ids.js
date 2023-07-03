export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((object) => object.id);
  }
  return [];
}
