//ES6 didn't just make the creation of objects easier but also property extraction. 
//Your next task is to get the object properties with and without ES6 destructoring from the following objects.
var car = {
    model:'Benz',
    color:'black',
    year:1886,
    doors:0,
    historical:true
}

// before ES6
var model = car.model
var color = car.color
var year = car.year
var doors = car.doors
var historical = car.historical

// from ES6
var {model, color, year, doors, historical} = car

var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: '16\"',
        HDMI: true,
        VGA: true
    },
    tower:{
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
}
// before ES6
var type = computer.type
var monitorcolor = computer.monitor.color
var monitorsize = computer.monitor.size
var monitorHDMI = computer.monitor.HDMI
var monitorVGA = computer.monitor.VGA
var towercolor = computer.tower.color
var towerCPU = computer.tower.CPU
var towermemory = computer.tower.memory
var towerSSD = computer.tower.SSD

// from ES6
var {type, monitor:{color: monitorcolor}, monitor:{size: monitorsize}, monitor:{HDMI: monitorHDMI}, monitor:{VGA: monitorVGA},
        tower:{color: towercolor}, tower: {CPU: towerCPU}, tower: {memory: towermemory}, tower: {SSD: towerSSD} }

