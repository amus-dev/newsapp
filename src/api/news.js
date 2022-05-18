import { API_HOST } from "../utils/constants";

export function getNewsApi() {
  const url = `${API_HOST}/news?sort=title&pagination[start]=0&pagination[limit]=100`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}
