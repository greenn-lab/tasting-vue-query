import { useQuery } from '@tanstack/vue-query'
import { type User, UsersSchema } from '@/schema/user.schema.ts'

const _3_MIN = 1000 * 10 // * 3

export const useUsers = (page = 1) => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () =>
      await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3&_delay=500`)
        .then(resp => resp.json())
        .then(data => {
          if (!UsersSchema.parse(data)) throw new Error('No users schema found.')

          return data
        }),
    staleTime: _3_MIN,
    retry: 2
  })
}
