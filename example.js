const racecar = {
  speed: 200,
  maker: 'Ferrari'
}

function analyze (vehicle, key) {
  const value = vehicle[key]
  console.log(`The ${key} of the vehicle is ${value}`)
  return value
}
function yell (value) {
  console.log('ANALYSIS:', value.toUpperCase())
}
function decimal (value) {
  console.log('ANALYSIS:', value.toFixed(2))
}
const speed = analyze(racecar, 'speed')
decimal(speed)
const maker = analyze(racecar, 'maker')
yell(maker)