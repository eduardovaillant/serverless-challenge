import { AddEmployeeRepository } from '@/data/protocols'
import { EmployeeModel } from '@/domain/models'
import { AddEmployee, AddEmployeeParams } from '@/domain/usecases'

export class DbAddEmployee implements AddEmployee {
  constructor (
    private readonly repository: AddEmployeeRepository
  ) {}

  async add (params: AddEmployeeParams): Promise<EmployeeModel> {
    return await this.repository.add(params)
  }
}
