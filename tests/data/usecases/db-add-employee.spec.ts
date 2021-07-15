import { DbAddEmployee } from '../../../src/data/usecases'
import { mockAddEmployeeParams, mockEmployeeModel } from '../../domain/mocks/employee'
import { AddEmployeeRepositorySpy } from '../mocks/repositories'

interface SutTypes {
  sut: DbAddEmployee
  addEmployeeRepositorySpy: AddEmployeeRepositorySpy
}

const makeSut = (): SutTypes => {
  const addEmployeeRepositorySpy = new AddEmployeeRepositorySpy()
  const sut = new DbAddEmployee(addEmployeeRepositorySpy)
  return {
    sut,
    addEmployeeRepositorySpy
  }
}

describe('DbAddEmployee', () => {
  test('should call AddEmployeeRepository with correct values', async () => {
    const { sut, addEmployeeRepositorySpy } = makeSut()
    await sut.add(mockAddEmployeeParams())
    expect(addEmployeeRepositorySpy.params).toEqual(mockAddEmployeeParams())
  })

  test('should throw if AddEmployeeRepository throws', async () => {
    const { sut, addEmployeeRepositorySpy } = makeSut()
    jest.spyOn(addEmployeeRepositorySpy, 'add').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.add(mockAddEmployeeParams())
    await expect(promise).rejects.toThrow()
  })

  test('should return the created employee on success', async () => {
    const { sut } = makeSut()
    const result = await sut.add(mockAddEmployeeParams())
    expect(result).toEqual(mockEmployeeModel())
  })
})
