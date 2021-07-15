import { EmployeeModel } from '../../domain/models'
import { AddEmployeeParams } from '../../domain/usecases'

export interface UpdateEmployeeRepository {
  update: (id: string, params: AddEmployeeParams) => Promise<EmployeeModel>
}
