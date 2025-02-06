import { useQuery } from '@tanstack/vue-query'
import { type User, UserSchema } from '@/schema/user.schema.ts'
import type { Ref } from 'vue'

export const useUsers = (page: Ref<number>) =>
  useQuery<User[]>({
    queryKey: ['users', page],
    queryFn: async () =>
      await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${page.value}&_limit=3&_delay=500`
      )
        .then(resp => resp.json())
        .then(data => {
          if (!UserSchema.array().parse(data)) throw new Error('No users schema found.')

          return data
        })
  })
