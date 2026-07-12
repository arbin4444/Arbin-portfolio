// import { useEffect, useState } from 'react'

/**
 * Cycles through an array of words with a typing / deleting animation.
 * Returns the current visible string.
 */
// export default function useTypewriter(words, { typingSpeed = 90, deletingSpeed = 45, pause = 1400 } = {}) {
//   const [wordIndex, setWordIndex] = useState(0)
//   const [text, setText] = useState('')
//   const [isDeleting, setIsDeleting] = useState(false)

//   useEffect(() => {
//     const currentWord = words[wordIndex % words.length]
//     let timeout

//     if (!isDeleting && text === currentWord) {
//       timeout = setTimeout(() => setIsDeleting(true), pause)
//     } else if (isDeleting && text === '') {
//       setIsDeleting(false)
//       setWordIndex((i) => i + 1)
//     } else {
//       timeout = setTimeout(() => {
//         const nextLength = text.length + (isDeleting ? -1 : 1)
//         setText(currentWord.slice(0, nextLength))
//       }, isDeleting ? deletingSpeed : typingSpeed)
//     }

//     return () => clearTimeout(timeout)
//   }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

//   return text
// }
