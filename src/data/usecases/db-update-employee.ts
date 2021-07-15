import { UpdateEmployeeRepository } from '@/data/protocols'
import { EmployeeModel } from '@/domain/models'
import { AddEmployeeParams, UpdateEmployee } from '@/domain/usecases'

export class DbUpdateEmployee implements UpdateEmployee {
  constructor (
    private readonly repository: UpdateEmployeeRepository
  ) {}

  async update (id: string, params: AddEmployeeParams): Promise<EmployeeModel> {
    return this.repository.update(id, params)
  }
}
