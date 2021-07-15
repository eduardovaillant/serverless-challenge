import { EmployeeModel } from '@/domain/models'

export interface FindEmployee {
  find: (id: string) => Promise<EmployeeModel>
}
