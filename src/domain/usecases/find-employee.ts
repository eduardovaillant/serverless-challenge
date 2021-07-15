import { EmployeeModel } from '../models/employee'

export interface FindEmployee {
  add: (id: string) => Promise<EmployeeModel>
}
