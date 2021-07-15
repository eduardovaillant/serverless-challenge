import { DbUpdateEmployee } from '@/data/usecases'
import { mockAddEmployeeParams, mockEmployeeModel } from '@/tests/domain/mocks/employee'
import { UpdateEmployeeRepositorySpy } from '@/tests/data/mocks/repositories'

interface SutTypes {
  sut: DbUpdateEmployee
  updateEmployeeRepositorySpy: UpdateEmployeeRepositorySpy
}

const makeSut = (): SutTypes => {
  const updateEmployeeRepositorySpy = new UpdateEmployeeRepositorySpy()
  const sut = new DbUpdateEmployee(updateEmployeeRepositorySpy)
  return {
    sut,
    updateEmployeeRepositorySpy
  }
}

describe('DbUpdateEmployee', () => {
  test('should call UpdateEmployeeRepository with correct values', async () => {
    const { sut, updateEmployeeRepositorySpy } = makeSut()
    await sut.update('any_id', mockAddEmployeeParams())
    expect(updateEmployeeRepositorySpy.id).toEqual('any_id')
    expect(updateEmployeeRepositorySpy.params).toEqual(mockAddEmployeeParams())
  })

  test('should throw if AddEmployeeRepository throws', async () => {
    const { sut, updateEmployeeRepositorySpy } = makeSut()
    jest.spyOn(updateEmployeeRepositorySpy, 'update').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.update('any_id', mockAddEmployeeParams())
    await expect(promise).rejects.toThrow()
  })

  test('should return the updated employee on success', async () => {
    const { sut } = makeSut()
    const result = await sut.update('any_id', mockAddEmployeeParams())
    expect(result).toEqual(mockEmployeeModel())
  })
})
