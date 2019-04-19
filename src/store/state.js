var defaultCity = '上海';
try {
  if (localStorage.currentCity) {
    defaultCity = localStorage.currentCity;
  }
} catch (e) {}

export default {
  city: defaultCity
}
