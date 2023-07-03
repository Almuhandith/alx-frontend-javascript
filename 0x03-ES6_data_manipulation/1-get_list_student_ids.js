export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map((object) => object.id);
  }
  return [];
}
