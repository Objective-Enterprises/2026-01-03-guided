const racecar = {
  speed: 200,
  maker: 'Ferrari'
}
type Vehicle = typeof racecar
function analyze <K extends keyof Vehicle> (vehicle: Vehicle, key: K) {
  const value = vehicle[key]
  console.log(`The ${key} of the vehicle is ${value}`)
  return value
}
const speed = analyze(racecar, 'speed')
const maker = analyze(racecar, 'maker')
function yell (value: string) {
  console.log('ANALYSIS:', value.toUpperCase())
}
function decimal (value: number) {
  console.log('ANALYSIS:', value.toFixed(2))
}
decimal(speed)
yell(maker)