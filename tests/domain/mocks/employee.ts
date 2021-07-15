import { EmployeeModel } from "../models/employee";

export const mockEmployeeModel = (): EmployeeModel => (
  {
    id: 'any_id',
    name: 'any_name',
    role: 'any_role',
    age: 25
  }
)