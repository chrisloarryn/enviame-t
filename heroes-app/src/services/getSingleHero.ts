import { Temporal } from 'proposal-temporal'
import {API_KEY, API_URL, MARVEL_BASE_URL, MARVEL_PRIVATE_KEY, MARVEL_PUBLIC_KEY} from './settings'
import crypto from 'crypto-browserify'

const fromApiMarvelResponseToHero = (apiResponse: { data?: {results: []} }) => {
  const { data: { results = [] } } = apiResponse
  if (Array.isArray(results)) {
    const hero = results.shift()
    const { thumbnail, name, id, description, modified } = hero
    const { path, extension } = thumbnail
    return { name, id, url: `${path}.${extension}`, description, modified, title: name }
  }
  return {}
}

export default function getSingleHero({ id }: { id: string }) {
  
  const timestamp = Temporal.now.instant().epochMilliseconds
  const hash = crypto.createHash('md5').update(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');
  const auth = `?ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`;
  const url = `${MARVEL_BASE_URL}/${id}${auth}`;

  return fetch(url)
    .then(res => res.json())
    .then(fromApiMarvelResponseToHero)
}