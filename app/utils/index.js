'use strict'

const DELIMITER = '🎥';

export function movieToKey(title, year) {
  return escape(title)+DELIMITER+year;
}

export function keyToMovie(key) {
  return {
    title: unescape(key.split(DELIMITER)[0]),
    year: key.split(DELIMITER)[1]
  }
}
