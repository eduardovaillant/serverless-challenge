import { AddEmployeeParams } from '../../domain/usecases'
import { EmployeeModel } from '../../domain/models'

export interface AddEmployeeRepository {
  add: (params: AddEmployeeParams) => Promise<EmployeeModel>
}
