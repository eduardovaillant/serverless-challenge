import { EmployeeModel } from '@/domain/models'
import { AddEmployeeParams } from '@/domain/usecases'
import { AddEmployeeRepository } from '@/data/protocols'
import { mockEmployeeModel } from '@/tests/domain/mocks/employee'

export class AddEmployeeRepositorySpy implements AddEmployeeRepository {
  params: AddEmployeeParams
  employeeModel: EmployeeModel = mockEmployeeModel()

  async add (params: AddEmployeeParams): Promise<EmployeeModel> {
    this.params = params
    return this.employeeModel
  }
}
