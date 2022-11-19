const API = '';

const getWeather = async (city, unit) => {
  console.log(unit);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API}`;
  return await axios.get(url);
};
const displayResult = (data) => {
  document.querySelector('.result').classList.remove('invisible');
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.querySelector('.card-title').textContent = data.name;
  document.querySelector('#icon').src = icon;
  document.querySelector(
    '#temp'
  ).textContent = `Temperature:  ${data.main.temp}`;

  console.log(data);
};
document.querySelector('#searchBtn').addEventListener('click', (e) => {
  let unit = document.querySelector('input[name="unit"]:checked').value;

  let city = document.querySelector('#city').value;
  getWeather(city, unit)
    .then((res) => {
      displayResult(res.data);
    })
    .catch((err) => console.log(err.message));
});
