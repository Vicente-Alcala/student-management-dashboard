/* ==========================================
EXERCISE 1: Mock Database State (Populated with
at least 2 elements into the array in advance.)
========================================== */

let counter = 0;

const mockStudentDb = [
  {
    id: Date.now() + counter++,
    firstName: "Kuruto",
    lastName: "Uzumakurt",
    email: "kuruto.uzumakurt@example.com",
  },
  {
    id: Date.now() + counter++,
    firstName: "Rysuke",
    lastName: "Uchiry",
    email: "rysuke.uchiry@example.com",
  },
];

/* ==========================================
EXERCISE 2: Mock Database State (Empty array 
to display "No records found." message)
========================================== */

//const mockStudentDb = [];

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
    id: Date.now() + counter++,
    firstName: newStudentData.firstName,
    lastName: newStudentData.lastName,
    email: newStudentData.email,
  };

  mockStudentDb.push(savedStudent);

  return savedStudent;
}

/* ==========================================
            (EXERCISE 1) TEST CASES
========================================== */

// Test Case 1

console.log("Initial DB State: ", getStudentsAPI());

// Test Case 2
const savedStudent = addStudentsAPI({
  firstName: "Chie",
  lastName: "Lee",
  email: "chie.lee@example.com",
});

console.log("\nReturn Saved Object: ", savedStudent);

// Test Case 3
console.log("\nUpdated DB State: ", getStudentsAPI());
