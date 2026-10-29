import { getStudentsAPI, addStudentsAPI } from "./api.js";

let localStudents = [];

const studentForm = document.querySelector("#studentForm");
const studentTableBody = document.querySelector("#studentTableBody");

/**
 * Renders student records dynamically into the table body.
 * @param {Array} dataArray List of student objects to display.
 */
const renderTable = (dataArray) => {
  studentTableBody.innerHTML = "";

  if (!dataArray || dataArray.length == 0) {
    studentTableBody.innerHTML = `<tr>
        <td colspan="4" style="text-align: center;">No student records found.</td>
      </tr>
    `;
    return;
  }

  // Traverse array collections using .forEach()
  dataArray.forEach((student, index) => {
    // Create a new table row element
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.firstName || ''}</td>
        <td>${student.lastName || ''}</td>
        <td>${student.email || ''}</td>
    `;

    studentTableBody.appendChild(row);
  });
};

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNameInput = document.querySelector("#firstName");
  const lastNameInput = document.querySelector("#lastName");
  const emailInput = document.querySelector("#email");

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();

  if (!firstName || !lastName || !email) {
    alert("Please fill out all input fields!");
    return;
  }

  const studentData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  addStudentsAPI(studentData);
  
  localStudents = getStudentsAPI();

  renderTable(localStudents);

  studentForm.reset();
});

const initApp = () => {
  localStudents = getStudentsAPI();
  renderTable(localStudents);
};

initApp();