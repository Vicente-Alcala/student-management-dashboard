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

  // 2. Validate email structure (@ symbol and a dot in the domain)
  const atIndex = email.indexOf("@");
  const lastDotIndex = email.lastIndexOf(".");

  // Check if @ exists and is not the first character
  if (atIndex === -1 || atIndex === 0) {
    alert("Please enter a valid email address containing an '@' symbol!");
    return;
  }

  // Check if a dot exists after the @ symbol
  if (lastDotIndex <= atIndex + 1) {
    alert("Please enter a valid domain name after the '@' symbol (e.g., domain.com)!");
    return;
  }

  // Specific check: if the dot is the very last character (e.g. "awha@cd.")
  if (lastDotIndex === email.length - 1) {
    alert("There must be characters after the '.' in the email address!");
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