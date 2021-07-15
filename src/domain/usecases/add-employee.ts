import { EmployeeModel } from '../models/employee'

export type AddEmployeeParams = Omit<EmployeeModel, 'id'>

export interface AddEmployee {
  add: (params: AddEmployeeParams) => Promise<EmployeeModel>
}
