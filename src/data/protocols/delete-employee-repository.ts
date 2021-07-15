export interface DeleteEmployeeRepository {
  update: (id: string) => Promise<boolean>
}
