import { EmployeeModel } from '../models/employee'

export interface FindEmployee {
  find: (id: string) => Promise<EmployeeModel>
}
