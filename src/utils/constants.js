export const LOGO_URL =
  "https://assets-eu-01.kc-usercontent.com/27bd3334-62dd-01a3-d049-720ae980f906/b705868e-5a09-420e-882f-043f9d1e31f5/MERKLE%402x.jpeg?q=75&fm=jpg&w=960";

export const DUMMY_DATA_Tabular = {
  projects: [
    {
      id: 1,
      name: "Website Redesign",
      start_date: "2023-01-15",
      end_date: "2023-05-30",
      status: "In Progress",
      tasks: [
        {
          id: 101,
          name: "Wireframing",
          start_date: "2023-01-15",
          end_date: "2023-02-01",
          assigned_to: "John Doe",
          status: "Completed",
        },
        {
          id: 102,
          name: "Design Mockups",
          start_date: "2023-02-05",
          end_date: "2023-02-28",
          assigned_to: "Jane Smith",
          status: "In Progress",
        },
        {
          id: 103,
          name: "Frontend Development",
          start_date: "2023-03-01",
          end_date: "2023-04-15",
          assigned_to: "Mike Johnson",
          status: "Pending",
        },
        {
          id: 104,
          name: "Backend Development",
          start_date: "2023-03-01",
          end_date: "2023-04-15",
          assigned_to: "Emily Brown",
          status: "Not Started",
        },
      ],
    },
    {
      id: 2,
      name: "Mobile App Development",
      start_date: "2023-02-10",
      end_date: "2023-06-30",
      status: "Not Started",
      tasks: [
        {
          id: 201,
          name: "Conceptualization",
          start_date: "2023-02-10",
          end_date: "2023-02-28",
          assigned_to: "David Lee",
          status: "Not Started",
        },
        {
          id: 202,
          name: "UI/UX Design",
          start_date: "2023-03-01",
          end_date: "2023-03-31",
          assigned_to: "Sophia Clark",
          status: "Not Started",
        },
        {
          id: 203,
          name: "Development",
          start_date: "2023-04-01",
          end_date: "2023-06-30",
          assigned_to: "Emma Wilson",
          status: "Not Started",
        },
      ],
    },
  ],
};

export const DUMMY_DATA_GRAPHICAL = {
  employee_turnover: [
    { date: "2023-01-01", turnover_rate: 8 },
    { date: "2023-02-01", turnover_rate: 6 },
    { date: "2023-03-01", turnover_rate: 5 },
    { date: "2023-04-01", turnover_rate: 7 },
    { date: "2023-05-01", turnover_rate: 9 },
    { date: "2023-06-01", turnover_rate: 10 },
  ],
  department_performance: [
    { department: "Sales", efficiency: 75, satisfaction: 80 },
    { department: "Marketing", efficiency: 85, satisfaction: 75 },
    { department: "HR", efficiency: 70, satisfaction: 90 },
    { department: "Finance", efficiency: 80, satisfaction: 85 },
    { department: "Operations", efficiency: 78, satisfaction: 82 },
  ],
  employee_satisfaction: [
    { employee_id: 1001, tenure_months: 12, satisfaction_score: 85 },
    { employee_id: 1002, tenure_months: 24, satisfaction_score: 78 },
    { employee_id: 1003, tenure_months: 36, satisfaction_score: 90 },
    { employee_id: 1004, tenure_months: 18, satisfaction_score: 92 },
    { employee_id: 1005, tenure_months: 30, satisfaction_score: 75 },
  ],
};
