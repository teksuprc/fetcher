/**
 * Fetcher
 * Purpose: Fetches images from the internet then saves them somewhere.
 */

const { from, of, range } = require('rxjs');
const { filter, map } = require('rxjs/operators');


range(1, 200)
  .pipe(
    filter(x => x % 2 === 1),
    map(x => console.log(x))
  )
  .subscribe();
