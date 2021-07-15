import { DbDeleteEmployee } from '@/data/usecases'
import { DeleteEmployeeRepositorySpy } from '@/tests/data/mocks/repositories'

interface SutTypes {
  sut: DbDeleteEmployee
  deleteEmployeeRepositorySpy: DeleteEmployeeRepositorySpy
}

const makeSut = (): SutTypes => {
  const deleteEmployeeRepositorySpy = new DeleteEmployeeRepositorySpy()
  const sut = new DbDeleteEmployee(deleteEmployeeRepositorySpy)
  return {
    sut,
    deleteEmployeeRepositorySpy
  }
}

describe('DbDeleteEmployee', () => {
  test('should call DeleteEmployeeRepository with correct values', async () => {
    const { sut, deleteEmployeeRepositorySpy } = makeSut()
    await sut.delete('any_id')
    expect(deleteEmployeeRepositorySpy.id).toEqual('any_id')
  })

  test('should throw if DeleteEmployeeRepository throws', async () => {
    const { sut, deleteEmployeeRepositorySpy } = makeSut()
    jest.spyOn(deleteEmployeeRepositorySpy, 'delete').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.delete('any_id')
    await expect(promise).rejects.toThrow()
  })

  test('should return true on success', async () => {
    const { sut } = makeSut()
    const result = await sut.delete('any_id')
    expect(result).toBeTruthy()
  })
})
