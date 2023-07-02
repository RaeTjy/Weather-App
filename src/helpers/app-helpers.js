import { v4 } from "uuid"

const COMMA = ", "

const isNull = (obj) => {
  return obj == null
}

const isNullOrEmpty = (obj) => {
  if (isNull(obj)) return true
  else {
    if (Array.isArray(obj)) return obj.length === 0
    else if (typeof obj === "string") return obj.trim().length === 0
    else if (typeof obj === "number") return isNull(obj)
    else return Object.keys(obj).length === 0
  }
}

const getObjectByPath = (obj, path) => {
  let oValue = null

  if (isNull(obj)) return oValue

  if (isNullOrEmpty(path)) return obj
  else {
    const aPath = path.split("/")
    let oCurrentObject = null

    for (let i = 0; i < aPath.length; i++) {
      const oPath = aPath[i]

      if (!isNullOrEmpty(oPath)) {
        if (isNull(oCurrentObject)) oCurrentObject = obj[oPath]
        else oCurrentObject = oCurrentObject[oPath]

        if (isNull(oCurrentObject)) {
          break
        } else if (i === aPath.length - 1) {
          oValue = oCurrentObject
        }
      }
    }
  }

  return oValue
}

const parseWeatherData = (data) => {
  //same search param will give same id, generate random unique id
  const id = v4()
  const mainTemp = Math.round(getObjectByPath(data, "main/temp"))
  const highTemp = Math.round(getObjectByPath(data, "main/temp_max"))
  const lowTemp = Math.round(getObjectByPath(data, "main/temp_min"))
  const humidity = getObjectByPath(data, "main/humidity")

  const weatherDesc = getObjectByPath(data, "weather/0/main")

  const countryName = getObjectByPath(data, "sys/country")
  const city = getObjectByPath(data, "name")
  const textArray = [city, countryName]
  const cityName = textArray.filter(Boolean).join(COMMA)

  let dateTime = ""
  const time = getObjectByPath(data, "dt")
  const timeZone = getObjectByPath(data, "timezone")
  if (!isNullOrEmpty(time) && !isNullOrEmpty(timeZone)) {
    const dateObj = new Date((time + timeZone) * 1000)
    dateTime = dateObj.toLocaleString()
  }

  const weatherId = getObjectByPath(data, "weather/0/id")
  const isSunny = weatherId > 700 ? true : false
  const weatherData = {
    id,
    mainTemp,
    highTemp,
    lowTemp,
    humidity,
    weatherDesc,
    cityName,
    dateTime,
    isSunny,
  }

  return weatherData
}

export { isNull, isNullOrEmpty, getObjectByPath, parseWeatherData }
