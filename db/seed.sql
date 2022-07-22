INSERT INTO departments (name)
VALUES 
    ('hr'),
    ('development');
INSERT INTO roles (job, salary, department_id)
VALUES
  ('hr_manager', 100, 1),
  ('development_developer', 59, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("john", "smith", 1, NULL),
    ("dan", "smith", 2, 1)