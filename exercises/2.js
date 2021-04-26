// JSON
let values = {
  1: {
    carrier: 'CCH',
    service: 'DEX'
  },
  17: {
    carrier: 'CHP',
    service: 'express'
  }
}
// JSON
let json = {
  data: {
    BUIN: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17
    },
    LAJA: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1
    },
    LEBU: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1
    },
    LOTA: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17
    }
  }
}

let result = {}

const jsonData = json.data

const keys = Object.keys(jsonData)

keys.map((el) => {
  const { limit, over_carrier_service_id, under_carrier_service_id } = jsonData[
    el
  ]
  const element = {
    [el]: {
      limit,
      over: values[over_carrier_service_id],
      under: values[under_carrier_service_id]
    }
  }
  result = { ...result, ...element }
  return element
})

console.log(result)
