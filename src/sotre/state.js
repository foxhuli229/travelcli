let defaultCity = "重庆"
//用于一些浏览器，若不try/catch则会报错
try {
  if(localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (error) {
   // continue regardless of error
}

export default {
  city: defaultCity
}