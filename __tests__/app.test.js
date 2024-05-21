import { Types } from 'mongoose'
import { extractIdObjectId, extractIdString, isObjectId } from '../src/main.js'

test('extractIdObjectId need return null if null', () => {
  expect(extractIdObjectId(null)).toBe(null)
})

test('extractIdObjectId need return string as ObjectId', () => {
  expect(extractIdObjectId('5e4e2f3b8a4f4c001e0e4c2d')).toBeInstanceOf(Types.ObjectId)
  expect(extractIdObjectId('5e4e2f3b8a4f4c001e0e4c2d').toString()).toBe('5e4e2f3b8a4f4c001e0e4c2d')
})

test('extractIdObjectId need return ObjectId as ObjectId', () => {
  const objectId = new Types.ObjectId('5e4e2f3b8a4f4c001e0e4c2d')
  expect(extractIdObjectId(objectId)).toBeInstanceOf(Types.ObjectId)
  expect(extractIdObjectId(objectId).toString()).toBe('5e4e2f3b8a4f4c001e0e4c2d')
})

test('extractIdObjectId need return _id as ObjectId', () => {
  const object = { _id: '5e4e2f3b8a4f4c001e0e4c2d' }
  expect(extractIdObjectId(object)).toBeInstanceOf(Types.ObjectId)
  expect(extractIdObjectId(object).toString()).toBe('5e4e2f3b8a4f4c001e0e4c2d')
})

test('extractIdObjectId need return null if not valid', () => {
  expect(extractIdObjectId('notvalid')).toBe(null)
  expect(extractIdObjectId({})).toBe(null)
})

test('extractIdString need return null if null', () => {
  expect(extractIdString(null)).toBe(null)
})

test('extractIdString need return string as string', () => {
  expect(extractIdString('5e4e2f3b8a4f4c001e0e4c2d')).toBe('5e4e2f3b8a4f4c001e0e4c2d')
})

test('extractIdString need return ObjectId as string', () => {
  const objectId = new Types.ObjectId('5e4e2f3b8a4f4c001e0e4c2d')
  expect(extractIdString(objectId)).toBe('5e4e2f3b8a4f4c001e0e4c2d')
})

test('extractIdString need return _id as string', () => {
  const object = { _id: '5e4e2f3b8a4f4c001e0e4c2d' }
  expect(extractIdString(object)).toBe('5e4e2f3b8a4f4c001e0e4c2d')
})

test('extractIdString need return null if not valid', () => {
  expect(extractIdString('notvalid')).toBe(null)
  expect(extractIdString({})).toEqual(null)
})

test('isObjectId need return true if string is valid', () => {
  expect(isObjectId('5e4e2f3b8a4f4c001e0e4c2d')).toBe(true)
})

test('isObjectId need return true if ObjectId is valid', () => {
  const objectId = new Types.ObjectId('5e4e2f3b8a4f4c001e0e4c2d')
  expect(isObjectId(objectId)).toBe(true)
})

test('isObjectId need return false if not valid', () => {
  expect(isObjectId('notvalid')).toBe(false)
  expect(isObjectId({})).toBe(false)
})
