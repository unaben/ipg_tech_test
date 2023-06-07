export const getWeatherData = async (data: string) => {
  const URL = "https://api.weatherapi.com/v1/current.json";
  const API_Key = "c3d2b2e2a92446cdb1c140431230206&q";

  const res = await fetch(`${URL}?key=${API_Key}=${data}`);
  return res.json();
};
