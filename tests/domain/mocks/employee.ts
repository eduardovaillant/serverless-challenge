import { AddEmployeeParams } from '@/domain/usecases'
import { EmployeeModel } from '@/domain/models'

export const mockEmployeeModel = (): EmployeeModel => (
  {
    id: 'any_id',
    name: 'any_name',
    role: 'any_role',
    age: 25
  }
)

export const mockAddEmployeeParams = (): AddEmployeeParams => (
  {
    name: 'any_name',
    role: 'any_role',
    age: 25
  }
)
