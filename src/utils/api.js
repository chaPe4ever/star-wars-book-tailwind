import axios from 'axios';
import { Movie, Starship, Pilot } from './types.js';

const host = 'https://swapi.constructor-learning.com';
const v1 = 'api';

export async function fetchMovies() {
  try {
    const res = await axios(`${host}/${v1}/films`);
    // console.log(res);
    const films = res.data.results.map((film) => new Movie(film));
    return films;
  } catch (error) {
    console.error('Failed to fetch films', error);
    throw new Error('There was an error fetching data. Please try again');
  }
}

export async function fetchStarship({ url }) {
  try {
    const res = await axios(url);
    // console.log(res);
    return new Starship(res.data);
  } catch (error) {
    console.error('Failed to fetch starship', error);
    throw new Error('There was an error fetching data. Please try again');
  }
}

export async function fetchPilot({ url }) {
  try {
    const res = await axios(url);
    // console.log(res);
    return new Pilot(res.data);
  } catch (error) {
    console.error('Failed to fetch pilots', error);
    throw new Error('There was an error fetching data. Please try again');
  }
}
