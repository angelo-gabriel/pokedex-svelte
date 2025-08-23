import type { PageServerLoad } from './$types'

type IndexMonster = {
  name: string
  url: string
}

export const load = (async ({ fetch }) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  const json = await response.json()

  const monsters = json.results.map((monster: IndexMonster) => {
    const id = monster.url.split('/')[monster.url.split('/').length - 2]

    return {
      ...monster,
      id,
    }
  })
  return {
    monsters,
  }
}) satisfies PageServerLoad
