import './Home.css';
import image1 from "../Images/Mongolian.jpg"
export const Home = () => {
  return (
    <div className="App">
      <div className = "Header">
        <h1 className="font">Art Class</h1>
        <p className="font" style={{marginLeft : "15px" }}>Assignment</p>
        <p>Made by Amartuya</p>
      </div>

      <div className = "Body">
        <div className="GridContainer">
          <img src={image1} className = "imageCont" />
          <img src={"./Images/test.png"} className = "imageCont" />
          <img src={"./Images/test.png"} className = "imageCont" />
          <img src={"./Images/test.png"} className = "imageCont" />
          <img src={"./Images/test.png"} className = "imageCont" />
          <img src={"./Images/test.png"} className = "imageCont" />
          <img src="/Images/test.png" className = "imageCont" />
          <img src="/Images/test.png" className = "imageCont" />
          <img src="/Images/test.png" className = "imageCont" />
          <img src="/Images/test.png" className = "imageCont" />
          </div>
      </div>

      <div className="Footer">

      </div>
    </div>
  );
}

