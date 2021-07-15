import { DbFindEmployee } from '@/data/usecases'
import { mockEmployeeModel } from '@/tests/domain/mocks/employee'
import { FindEmployeeRepositorySpy } from '@/tests/data/mocks/repositories'

interface SutTypes {
  sut: DbFindEmployee
  findEmployeeRepositorySpy: FindEmployeeRepositorySpy
}

const makeSut = (): SutTypes => {
  const findEmployeeRepositorySpy = new FindEmployeeRepositorySpy()
  const sut = new DbFindEmployee(findEmployeeRepositorySpy)
  return {
    sut,
    findEmployeeRepositorySpy
  }
}

describe('DbFindEmployee', () => {
  test('should call FindEmployeeRepository with correct values', async () => {
    const { sut, findEmployeeRepositorySpy } = makeSut()
    await sut.find('any_id')
    expect(findEmployeeRepositorySpy.id).toEqual('any_id')
  })

  test('should throw if FindEmployeeRepository throws', async () => {
    const { sut, findEmployeeRepositorySpy } = makeSut()
    jest.spyOn(findEmployeeRepositorySpy, 'find').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.find('any_id')
    await expect(promise).rejects.toThrow()
  })

  test('should return the employee on success', async () => {
    const { sut } = makeSut()
    const result = await sut.find('any_id')
    expect(result).toEqual(mockEmployeeModel())
  })
})
