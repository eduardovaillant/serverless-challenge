import { AddEmployeeParams } from './add-employee'
import { EmployeeModel } from '../models/employee'

export interface UpdateEmployee {
  add: (params: AddEmployeeParams) => Promise<EmployeeModel>
}
