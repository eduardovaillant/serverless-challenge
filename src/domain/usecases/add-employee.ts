import { EmployeeModel } from '@/domain/models'

export type AddEmployeeParams = Omit<EmployeeModel, 'id'>

export interface AddEmployee {
  add: (params: AddEmployeeParams) => Promise<EmployeeModel>
}
