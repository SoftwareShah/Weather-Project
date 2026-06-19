import TextType from '../TextType/TextType';
import './Header.css';
import sunImg from '../../assets/sun.jpg';

const Header = () => {
  return (
    <div className="header-wrapper">
    
      <div className="sun-glow-ring">
        <img src={sunImg} alt="sun" className="sun-img" />
      </div>
      <h3 className="heading">
        <TextType
          text={["Search for the weather", "Get live updates", "Stay prepared!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={50}
          cursorBlinkDuration={0.5}
        />
      </h3>
    </div>
  );
};

export default Header;
