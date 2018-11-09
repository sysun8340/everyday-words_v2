import data from './data.json'

// ..........words............
export const getWordsById = id => {
  return data.words.find(word => word.id === id)
}

export const getIdByDate = currentDate => {
  return `${currentDate.getMonth() + 1}-${currentDate.getDate()}`
}

export const genRandomId = () => {
  const thirtyone = [1, 3, 5, 7, 8, 10, 12]
  const thirty = [4, 6, 9, 11]
  const month = Math.floor(Math.random()*12) + 1
  let date = null
  if(thirtyone.indexOf(month) >= 0) {
    date = Math.floor(Math.random()*31) + 1
  }
  else if(thirty.indexOf(month) >= 0) {
    date = Math.floor(Math.random()*30) + 1
  }
  else {
    date = Math.floor(Math.random()*28) + 1
  }
  return `${month}-${date}`
}
// ............words................

// ................city.............

export const getFilteredCity = (value, cityData) => {
  // 按汉字或拼音查找
  const patternCN = new RegExp('[\u4E00-\u9FA5]+')
  const patternEN = new RegExp('[A-Za-z]+')
  // 提取匹配的城市
  let filteredCity = {}
  // 按汉字搜索
  if(patternCN.test(value)) {
    // 先确定在哪个首字母范围内搜索，返回["X"]格式，然后进一步搜索
    const firstCityLetter = Object.keys(cityData).find(firstCityLetter => {
      return !!cityData[firstCityLetter].find(city => 
        city.city_name.slice(0, 1) === value.slice(0, 1)
      )
    })
    if(firstCityLetter === undefined) return // 如果没有对应城市首字母，停止执行
    filteredCity[firstCityLetter] = cityData[firstCityLetter].filter(city => 
      city.city_name.indexOf(value) > -1 && city.city_name.slice(0, 1) === value.slice(0, 1)
    )
    return filteredCity
  }
  // 按拼音搜索
  if(patternEN.test(value)) {
    const firstCityLetter = value.slice(0, 1).toUpperCase()
    filteredCity[firstCityLetter] = cityData[firstCityLetter].filter(city => 
      city.name_pinyin.indexOf(value) > -1
    )
    return filteredCity
  }
}
