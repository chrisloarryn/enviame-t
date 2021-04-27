import { Temporal } from 'proposal-temporal'
import crypto from 'crypto-browserify'

import { MARVEL_BASE_URL, MARVEL_PRIVATE_KEY, MARVEL_PUBLIC_KEY } from './settings'

const fromApiMarvelResponseToHeroes = (apiResponse: { data?: {results: []} }) => {
  const { data: { results = [] } } = apiResponse
  if (Array.isArray(results)) {
    const heroes = results.map((hero) => {
      const { thumbnail, name, id, description, modified } = hero
      const { path, extension } = thumbnail
      return { name, id, url: `${path}.${extension}`, description, modified, title: name }
    })
    return heroes
  }
  return []
}


// For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: 
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
// (the hash value is the md5 digest of 1abcd1234)
export default function getHeroes({
  limit = 15,
  keyword = 'avengers',
  page = 0
} = {}) {
  const query = `?limit=${limit}&nameStartsWith=${keyword}&offset=${page * limit}`;
  const timestamp = Temporal.now.instant().epochMilliseconds
  const hash = crypto.createHash('md5').update(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');
  const auth = `&ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`;
  const url = `${MARVEL_BASE_URL}${query}${auth}`;

  return fetch(url)
    .then((res) => res.json())
    .then(fromApiMarvelResponseToHeroes)
}
