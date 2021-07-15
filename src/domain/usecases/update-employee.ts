import { AddEmployeeParams } from './add-employee'
import { EmployeeModel } from '../models/employee'

export interface UpdateEmployee {
  update: (id: string, params: AddEmployeeParams) => Promise<EmployeeModel>
}
