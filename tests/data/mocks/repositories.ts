import { EmployeeModel } from '../../../src/domain/models'
import { AddEmployeeParams } from '../../../src/domain/usecases'
import { AddEmployeeRepository } from '../../../src/data/protocols'
import { mockEmployeeModel } from '../../domain/mocks/employee'

export class AddEmployeeRepositorySpy implements AddEmployeeRepository {
  params: AddEmployeeParams
  employeeModel: EmployeeModel = mockEmployeeModel()

  async add (params: AddEmployeeParams): Promise<EmployeeModel> {
    this.params = params
    return this.employeeModel
  }
}
