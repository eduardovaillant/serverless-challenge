import { FindEmployeeRepository } from '@/data/protocols'
import { EmployeeModel } from '@/domain/models'
import { FindEmployee } from '@/domain/usecases'

export class DbFindEmployee implements FindEmployee {
  constructor (
    private readonly repository: FindEmployeeRepository
  ) {}

  async find (id: string): Promise<EmployeeModel> {
    return this.repository.find(id)
  }
}
