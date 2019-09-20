const Plant = require('./Plant')

function initializeGarden() {
  const plants = []
  plants.push(new Plant('Flower', 'yellow', 0, 5, 0.75))
  plants.push(new Plant('Flower', 'blue', 0, 5, 0.75))
  plants.push(new Plant('Tree', 'purple', 0, 10, 0.4))
  plants.push(new Plant('Tree', 'orange',0 , 10, 0.4))
  return plants
}

const plants = initializeGarden()

function getCount(){
    let count = 0
    plants.forEach(plant =>{
        if (plant.needwater){
            count ++
        }else{
            count --
        }
    })
    return count
}
let count = getCount()
plants.forEach(plant =>{
    plant.needWater()
})
console.log('\n')

console.log(`Watering with 40.`)
plants.forEach(plant =>{
    plant.watering(40,count)
})
plants.forEach(plant =>{
    plant.needWater()
})
console.log('\n')
count = getCount()
console.log(`Watering with 70.`)
plants.forEach(plant =>{
    plant.watering(70,count)
})
plants.forEach(plant =>{
    plant.needWater()
})