function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // 🎇🎇🎇YOUR CODE 🎇🎇🎇

  // Create Buttons
  let allRidesButton = document.querySelector('#all-filter')
  let nooberPurpleButton = document.querySelector('#noober-purple-filter')
  let nooberPoolButton = document.querySelector('#noober-pool-filter')
  let nooberXLButton = document.querySelector('#noober-xl-filter')
  let nooberXButton = document.querySelector('#noober-x-filter')

  
  // 1️⃣ ALL RIDES BUTTON/ //
  allRidesButton.addEventListener('click', async function(event) {
    event.preventDefault()
    // 🤖 request ride data from API
    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()
    console.log(json)     // output data to console
    document.querySelector('.rides').innerHTML = ""       // Reset contents of innerHTML
    renderRides(json)     //  Print all rides to 'rides' HTML container using insertAdjacentHTML
  }) // 1️⃣ 🛑 All Rides close logic

  // 2️⃣ Noober Purple BUTTON  //
  nooberPurpleButton.addEventListener('click', async function(event) {
    event.preventDefault()
    // 🤖 request ride data from API
    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()
    // 🤖 create array of Noober Purple rides
    let purpleRides = []
    for (let i=0; i<json.length; i++) {
      if (levelOfService(json[i]) == 'Noober Purple') {
        purpleRides.push(json[i])
      } 
    }
    console.log(purpleRides)
    document.querySelector('.rides').innerHTML = ""       // Reset contents of innerHTML
    renderRides(purpleRides)    // Print purple rides to 'rides' HTML container using insertAdjacentHTML
  }) // 2️⃣🛑 Noober Purple close logic

  // 3️⃣ Noober Pool BUTTON //
  nooberPoolButton.addEventListener('click', async function(event) {
    event.preventDefault()
    // 🤖 request ride data from API
    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()
    // 🤖 create array of Noober Purple rides
    let poolRides = []
    for (let i=0; i<json.length; i++) {
      if (levelOfService(json[i]) == 'Noober Pool') {
        poolRides.push(json[i])
      } 
    }
    console.log(poolRides)
    document.querySelector('.rides').innerHTML = ""       // Reset contents of innerHTML
    renderRides(poolRides)    // Print pool rides to 'rides' HTML container using insertAdjacentHTML
  }) // 3️⃣🛑 Noober Pool close logic

    // 4️⃣ Noober XL BUTTON //
    nooberXLButton.addEventListener('click', async function(event) {
      event.preventDefault()
      // 🤖 request ride data from API
      let url = 'https://kiei451.com/api/rides.json'
      let response = await fetch(url)
      let json = await response.json()
      // 🤖 create array of Noober Purple rides
      let xlRides = []
      for (let i=0; i<json.length; i++) {
        if (levelOfService(json[i]) == 'Noober XL') {
          xlRides.push(json[i])
        } 
      }
      console.log(xlRides)
      document.querySelector('.rides').innerHTML = ""       // Reset contents of innerHTML
      renderRides(xlRides)    // Print XL rides to 'rides' HTML container using insertAdjacentHTML
    }) // 4️⃣🛑 Noober XL close logic

    // 5️⃣ Noober X BUTTON //
    nooberXButton.addEventListener('click', async function(event) {
      event.preventDefault()
      // 🤖 request ride data from API
      let url = 'https://kiei451.com/api/rides.json'
      let response = await fetch(url)
      let json = await response.json()
      // 🤖 create array of Noober Purple rides
      let nooberXRides = []
      for (let i=0; i<json.length; i++) {
        if (levelOfService(json[i]) == 'Noober X') {
          nooberXRides.push(json[i])
        } 
      }
      console.log(nooberXRides)
      document.querySelector('.rides').innerHTML = ""       // Reset contents of innerHTML
      renderRides(nooberXRides)    // Print X rides to 'rides' HTML container using insertAdjacentHTML
    }) // 5️⃣🛑 Noober X close logic

}) // CLOSING BRACKETS
// 🎇🎇🎇YOUR CODE ENDS 🎇🎇🎇