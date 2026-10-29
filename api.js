const mockStudentDb = [
  {
    id: Date.now(),
    firstName: "Kuruto",
    lastName: "Uzumakurt",
    email: "kuruto.uzumakurt@example.com",
  },
  {
    id: Date.now() + 1,
    firstName: "Rysuke",
    lastName: "Uchiry",
    email: "rysuke.uchiry@example.com",
  },
];

/**
 * Simulates a GET request to retrieve all students.
 * @returns {Array} Array of student objects from mockStudentDb.
 */
export function getStudentsAPI() {
  return mockStudentDb;
}

/**
 * Simulates a POST request to add a new student.
 * @param {Object} newStudentData - Object containing firstName, 
 * lastName, and email.
 * @returns {Object} The newly created savedStudent object with 
 * a generated ID.
 */
export function addStudentsAPI(newStudentData) {
  const savedStudent = {
    id: Date.now() + 1,
    firstName: newStudentData.firstName,
    lastName: newStudentData.lastName,
    email: newStudentData.email,
  };

  mockStudentDb.push(savedStudent);

  return savedStudent;
}

console.log("Initial DB State: ", getStudentsAPI());

const savedStudent = addStudentsAPI({
  firstName: "Chie",
  lastName: "Lee",
  email: "chie.lee@example.com",
});

console.log("\nReturn Saved Object: ", savedStudent);
console.log("\nUpdated DB State: ", getStudentsAPI());