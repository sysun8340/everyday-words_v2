import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'


const initState = {
  words: {
    text: '我实实在在地告诉你们：一粒麦子不落在地里死了，仍旧是一粒；若是死了，就结出许多子粒来。'
  },
  city: {
    "_id": 1,
    "id": 1,
    "pid": 0,
    "city_code": "101010100",
    "city_name": "北京"
  },
  weather: {
    data: {
      cityInfo: {
        city: '北京',
        cityId: "101010100",
        updateTime: '9：00'
      },
      data: {
        forecast:[
          {
            date: "01日星期四",
            fl: "<3级",
            fx: "南风",
            high: "高温 17.0℃",
            low: "低温 3.0℃",
            sunrise: "06:41",
            sunset: "17:14",
            type: "晴"
          }, 
          {
            date: "01日星期四",
            fl: "<3级",
            fx: "南风",
            high: "高温 17.0℃",
            low: "低温 3.0℃",
            sunrise: "06:41",
            sunset: "17:14",
            type: "晴"
          }, 
          {
            date: "01日星期四",
            fl: "<3级",
            fx: "南风",
            high: "高温 17.0℃",
            low: "低温 3.0℃",
            sunrise: "06:41",
            sunset: "17:14",
            type: "晴"
          }, 
          {
            date: "01日星期四",
            fl: "<3级",
            fx: "南风",
            high: "高温 17.0℃",
            low: "低温 3.0℃",
            sunrise: "06:41",
            sunset: "17:14",
            type: "晴"
          }, 
          {
            date: "01日星期四",
            fl: "<3级",
            fx: "南风",
            high: "高温 17.0℃",
            low: "低温 3.0℃",
            sunrise: "06:41",
            sunset: "17:14",
            type: "晴"
          }
        ],
        shidu: '50%',
        pm25: '10',
        pm10: '20',
        quality: '优',
        wendu: '25',
        ganmao: '各类人群可自由活动'
      }
    }
  }
}
const localCity = localStorage.getItem('city')
if(localCity !== null) {
  initState.city = JSON.parse(localCity)
}
const configureStore = createStore(rootReducer, initState, applyMiddleware(thunk))

export default configureStore