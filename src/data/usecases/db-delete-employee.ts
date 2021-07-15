import { DeleteEmployeeRepository } from '@/data/protocols'
import { DeleteEmployee } from '@/domain/usecases'

export class DbDeleteEmployee implements DeleteEmployee {
  constructor (
    private readonly repository: DeleteEmployeeRepository
  ) {}

  async delete (id: string): Promise<boolean> {
    return this.repository.delete(id)
  }
}
