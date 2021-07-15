export interface DeleteEmployeeRepository {
  delete: (id: string) => Promise<boolean>
}
