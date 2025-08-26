import type { PageServerLoad } from './$types'

type IndexMonster = {
  name: string
  url: string
}

export const load = (async ({ fetch }) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const json = await response.json()

  const monsters = json.results.map((monster: IndexMonster) => {
    const id = monster.url.split('/')[monster.url.split('/').length - 2]

    return {
      ...monster,
      id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    }
  })
  return {
    monsters,
  }
}) satisfies PageServerLoad
