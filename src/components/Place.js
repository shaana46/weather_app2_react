import { useContext } from 'react';
import WeatherContext from '../context/weather.context';
import '../style.css';

function Place() {
  const { place } = useContext(WeatherContext);

  return (
    <div className='Place'>
      <i className='bi bi-geo-alt-fill'></i> <b>{place.name}</b>,{' '}
      {place.country}
    </div>
  );
}

export default Place;
