export const setWords = words => ({
  type: 'WORDS_CHANGE',
  words: words
})

export const setCity = city => ({
  type: 'CITY_CHANGE',
  city: city
})

export const setWeather = weather => ({
  type: 'WEATHER_CHANGE',
  weather: weather
})

export const setRequestResult = status => ({
  type: 'REQUEST_END',
  status: status
})

export const setError = errorMsg => ({
  type: 'ERROR',
  errorMsg: errorMsg
})