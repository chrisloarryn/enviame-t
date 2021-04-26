// Ejercicio 1 (2pts)
// Crear un script (javascript/nodejs) que reciba un rango entre A y B y
// a partir de este rango se muestren en pantalla los números primos.

// En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos
// divisores positivos distintos: él mismo y el 1.

// Ej: Para el rango entre 1 y 10, los números primos serán 2,3,5 y 7.

// El entregable puede ser un script que se pueda ejecutar por terminal o una web simple sin diseño.

// program to print prime numbers between the two numbers

const prompt = require('prompt')

const returnPrime = (lower, higher) => {
  // take input from the user
  let allNumbers = []
  // looping from lower to higher
  for (let i = lower; i <= higher; i++) {
    let flag = 0
    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1
        break
      }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
      /* console.log(i) */
      allNumbers.push(i)
    }
  }
  return allNumbers
}

const prompts = prompt.start({ noHandleSIGINT: true })

prompts.get(
  [
    {
      name: 'lower',
      description: 'Enter lower number: ',
      type: 'number',
      required: true,
      pattern: /^[0-9]*$/,
      message: 'Please Enter higher number: ',
      before: (value) => {
        if (!Number.isInteger(value))
          console.log('[not number value set to zero (0)]')
        return Number.isInteger(value) ? value : 0
      }
    },
    {
      name: 'higher',
      pattern: /^[0-9]*$/,
      description: 'Enter higher number: ',
      type: 'number',
      required: true,
      message: 'Please Enter higher number: ',
      before: (value) => {
        let n1 = prompt.history('lower').value,
          n2
        if (!Number.isInteger(value)) {
          console.log('[not number value set to zero (0)]')
          n2 = n1 + 10
        }
        return Number.isInteger(value) ? value : n2
      }
    }
  ],
  (err, results) => {
    const lowerNumber = Number(results.lower)
    const higherNumber = Number(results.higher)

    if (
      !err &&
      Number.isInteger(lowerNumber) &&
      Number.isInteger(higherNumber)
    ) {
      const primeNumbers = returnPrime(lowerNumber, higherNumber)
      console.log(
        `The prime numbers between ${lowerNumber} and ${higherNumber} are: (${primeNumbers.join(
          ', '
        )})`
      )
    } else {
      console.log('error', 'Enter valid numbers')
      console.log(
        `\n\nIf you are using "nodemon", Please execute the script again`
      )
      /* prompt.stop() */
      /* prompt.start() */
    }
  }
)

process.on('SIGINT', function () {
  console.log(`\n\nIf you are using "nodemon", Please execute the script again`)
  process.exit()
})
