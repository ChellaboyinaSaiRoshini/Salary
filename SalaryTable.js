import React from "react";
import "./SalaryTable.css";

const SalaryTable = () => {
  const salaryData = [
    {
      department: "HR",
      employeeId: "EMP01",
      basicSalary: 50000,
      allowance: 5000,
      deduction: 2000,
      payDate: "2025-02-28",
    },
    {
      department: "IT",
      employeeId: "EMP02",
      basicSalary: 70000,
      allowance: 7000,
      deduction: 3000,
      payDate: "2025-02-28",
    },
    {
      department: "Finance",
      employeeId: "EMP03",
      basicSalary: 60000,
      allowance: 6000,
      deduction: 2500,
      payDate: "2025-02-28",
    },
  ];

  return (
    <div className="table-container">
      <table className="salary-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Employee Email / ID</th>
            <th>Basic Salary</th>
            <th>Allowance</th>
            <th>Deduction</th>
            <th>Pay Date</th>
          </tr>
        </thead>
        <tbody>
          {salaryData.map((item, index) => (
            <tr key={index}>
              <td>{item.department}</td>
              <td>{item.employeeId}</td>
              <td>${item.basicSalary}</td>
              <td>${item.allowance}</td>
              <td>${item.deduction}</td>
              <td>{item.payDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalaryTable;
