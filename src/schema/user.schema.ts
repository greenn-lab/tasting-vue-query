import { z } from 'zod'

// 중첩된 객체들의 스키마 정의
const GeoSchema = z.object({
  lat: z.string(),
  lng: z.string()
})

const AddressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: GeoSchema
})

const CompanySchema = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string()
})

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string().optional(),
  email: z.string().email().optional(),
  address: AddressSchema.optional(),
  phone: z.string().optional(),
  website: z.string().optional(),
  company: CompanySchema.optional()
})

export type User = z.infer<typeof UserSchema>
