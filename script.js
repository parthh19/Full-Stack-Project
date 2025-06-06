let employees = [];
let attendance = [];

function login() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;

  if (email && pass) {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
    showSection('empForm');
  } else {
    alert("Enter credentials");
  }
}

function logout() {
  location.reload();
}

function showSection(id) {
  document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  if (id === 'empList') renderEmployeeList();
  if (id === 'payroll') renderPayroll();
  if (id === 'attendance') renderAttendance();
}

function addEmployee(e) {
  e.preventDefault();
  const name = document.getElementById('empName').value;
  const role = document.getElementById('empRole').value;
  const email = document.getElementById('empEmail').value;
  const salary = parseFloat(document.getElementById('empSalary').value);
  employees.push({ name, role, email, salary });
  alert("Employee added");
  e.target.reset();
}

function renderEmployeeList() {
  const tbody = document.getElementById('empTableBody');
  tbody.innerHTML = '';
  employees.forEach(e => {
    tbody.innerHTML += `<tr><td>${e.name}</td><td>${e.role}</td><td>${e.email}</td><td>${e.salary}</td></tr>`;
  });
}

function renderPayroll() {
  const tbody = document.getElementById('payrollBody');
  tbody.innerHTML = '';
  employees.forEach(e => {
    const ded = e.salary * 0.1;
    const net = e.salary - ded;
    tbody.innerHTML += `<tr><td>${e.name}</td><td>${e.salary}</td><td>${ded.toFixed(2)}</td><td>${net.toFixed(2)}</td></tr>`;
  });
}

function markAttendance(e) {
  e.preventDefault();
  const name = document.getElementById('attName').value;
  const status = document.getElementById('attStatus').value;
  const date = document.getElementById('attDate').value;
  attendance.push({ name, status, date });
  e.target.reset();
  renderAttendance();
}

function renderAttendance() {
  const tbody = document.getElementById('attTableBody');
  tbody.innerHTML = '';
  attendance.forEach(a => {
    tbody.innerHTML += `<tr><td>${a.name}</td><td>${a.status}</td><td>${a.date}</td></tr>`;
  });
}
