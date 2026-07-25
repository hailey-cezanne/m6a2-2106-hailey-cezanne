import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

const path = (rel) => fileURLToPath(new URL(rel, import.meta.url))
const read = (rel) => readFileSync(path(rel), 'utf8')

const doc = new JSDOM(read('../src/index.html')).window.document

// Every source a media element offers: its own src, plus any child <source src>.
const sourcesOf = (el) => {
  if (!el) return []
  const out = []
  const own = el.getAttribute('src')
  if (own && own.trim()) out.push(own.trim())
  for (const s of el.querySelectorAll('source')) {
    const src = s.getAttribute('src')
    if (src && src.trim()) out.push(src.trim())
  }
  return out
}
// The file extension of a src, ignoring any ?query or #hash (works for a local
// path or a full URL).
const extOf = (src) => {
  const clean = src.split(/[?#]/)[0]
  const m = clean.toLowerCase().match(/\.([a-z0-9]+)$/)
  return m ? m[1] : ''
}
const AUDIO_TYPES = ['mp3', 'ogg', 'wav', 'm4a', 'aac']
const VIDEO_TYPES = ['mp4', 'webm', 'ogg', 'mov', 'm4v']

// ---- Foundation ----
describe('Foundation - a valid HTML5 page', () => {
  it('has a doctype, <html lang>, a <head> with <title> + charset, and a <body>', () => {
    expect(doc.doctype?.name?.toLowerCase(), 'Start the file with <!DOCTYPE html>').toBe('html')
    expect(doc.documentElement.getAttribute('lang'), 'Set a language, e.g. <html lang="en">').toBeTruthy()
    expect(doc.querySelector('head title'), 'Add a <title> inside <head>').not.toBeNull()
    expect(doc.title.trim(), 'Put some text inside <title>').toBeTruthy()
    expect(doc.querySelector('meta[charset]'), 'Add <meta charset="utf-8"> inside <head>').not.toBeNull()
    expect(doc.body, 'Wrap your page content in a <body>').not.toBeNull()
  })
})

// ---- The audio ----
describe('The audio', () => {
  it('has an <audio controls> element with a source', () => {
    const audio = doc.querySelector('audio')
    expect(audio, 'Keep the <audio> element in the player').not.toBeNull()
    expect(audio.hasAttribute('controls'), 'Give <audio> the controls attribute so it can be played').toBe(true)
    expect(sourcesOf(audio).length, 'Add your audio file: set a src on <audio> or its <source>').toBeGreaterThan(0)
  })

  it('points the audio at a supported file type (mp3, ogg, wav)', () => {
    const audio = doc.querySelector('audio')
    const ok = sourcesOf(audio).some((s) => AUDIO_TYPES.includes(extOf(s)))
    expect(ok, 'Your audio source must be a supported type (e.g. .mp3, .ogg or .wav)').toBe(true)
  })
})

// ---- The video ----
describe('The video', () => {
  it('has a <video controls> element with a source', () => {
    const video = doc.querySelector('video')
    expect(video, 'Keep the <video> element in the player').not.toBeNull()
    expect(video.hasAttribute('controls'), 'Give <video> the controls attribute so it can be played').toBe(true)
    expect(sourcesOf(video).length, 'Add your video file: set a src on <video> or its <source>').toBeGreaterThan(0)
  })

  it('points the video at a supported file type (mp4, webm, ogg)', () => {
    const video = doc.querySelector('video')
    const ok = sourcesOf(video).some((s) => VIDEO_TYPES.includes(extOf(s)))
    expect(ok, 'Your video source must be a supported type (e.g. .mp4, .webm or .ogg)').toBe(true)
  })
})

// ---- The lyrics ----
describe('The lyrics', () => {
  it('has a lyrics area with the words written in', () => {
    const lyrics = doc.querySelector('.lyrics')
    expect(lyrics, 'Keep the .lyrics element under the player').not.toBeNull()
    expect(lyrics.textContent.replace(/\s+/g, ' ').trim().length,
      'Write the song lyrics inside the .lyrics element').toBeGreaterThanOrEqual(30)
  })
})

// ---- Identity ----
describe('Student info (student.json)', () => {
  const info = JSON.parse(read('../student.json'))
  it('student.json is filled in', () => {
    for (const field of [
      'classCode', 'fullName', 'studentNumber',
      'studentEmail', 'personalEmail', 'githubAccount',
    ]) {
      expect(info[field], `Set "${field}" in student.json`).toBeTruthy()
    }
  })
})
