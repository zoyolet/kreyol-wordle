import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'an',
  'b',
  'ch',
  'd',
  'e',
  'è',
  'en',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ng',
  'o',
  'ò',
  'on',
  'ou',
  'oun',
  'p',
  'r',
  's',
  't',
  'ui',
  'v',
  'w',
  'y',
  'z',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
