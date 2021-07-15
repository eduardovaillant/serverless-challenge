import { EmployeeModel } from '../../domain/models'

export interface FindEmployeeRepository {
  find: (id: string) => Promise<EmployeeModel>
}
