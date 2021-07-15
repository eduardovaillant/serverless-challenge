import { AddEmployeeRepository, DeleteEmployeeRepository, FindEmployeeRepository, UpdateEmployeeRepository } from '@/data/protocols'
import { EmployeeModel } from '@/domain/models'
import { AddEmployeeParams } from '@/domain/usecases'
import { mockEmployeeModel } from '@/tests/domain/mocks/employee'

export class AddEmployeeRepositorySpy implements AddEmployeeRepository {
  params: AddEmployeeParams
  employeeModel: EmployeeModel = mockEmployeeModel()

  async add (params: AddEmployeeParams): Promise<EmployeeModel> {
    this.params = params
    return this.employeeModel
  }
}

export class DeleteEmployeeRepositorySpy implements DeleteEmployeeRepository {
  id: string
  result: boolean = false

  async delete (id: string): Promise<boolean> {
    this.id = id
    return this.result
  }
}

export class FindEmployeeRepositorySpy implements FindEmployeeRepository {
  id: string
  employeeModel: EmployeeModel = mockEmployeeModel()

  async find (id: string): Promise<EmployeeModel> {
    this.id = id
    return this.employeeModel
  }
}
export class UpdateEmployeeRepositorySpy implements UpdateEmployeeRepository {
  params: AddEmployeeParams
  id: string
  employeeModel: EmployeeModel = mockEmployeeModel()

  async update (id: string, params: AddEmployeeParams): Promise<EmployeeModel> {
    this.id = id
    this.params = params
    return this.employeeModel
  }
}
