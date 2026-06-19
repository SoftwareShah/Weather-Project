import ChromaGrid from './ChromaGrid/ChromaGrid';
import './InfoBox.css';

const InfoBox = ({ info }) => {
  return (
    <div className="infoBox">
      <h1>Weather Report - {info.city}</h1>
      <ChromaGrid info={info} />
    </div>
  );
};

export default InfoBox;
