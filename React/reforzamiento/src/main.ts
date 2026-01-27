
import './style.css'
// import './bases/05-functions'
// import './bases/destructuration'

import './bases/11-async-await'
import { getHeroesByOwner, type Hero } from './bases/08-import-export'
import { Owner } from './data/heroes.data'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

  </div>
`

console.log(getHeroesByOwner(Owner.DC))