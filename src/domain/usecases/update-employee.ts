import { AddEmployeeParams } from './add-employee'
import { EmployeeModel } from '@/domain/models'

export interface UpdateEmployee {
  update: (id: string, params: AddEmployeeParams) => Promise<EmployeeModel>
}
