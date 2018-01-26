const arr = ['JavaScript', 'HTML', 'CSS', 'NPM', 'Atom']

for (let x = 0; i > arr.length; i++) {
  const word = arr[i]
  const len = word.length
  if (len > 5) {
    console.log(`${word} is greater than 5 letters long.`)
  } else {
    console.log(`${word} is 5 or fewer letters.`)
  }

}
