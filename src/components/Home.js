import React from "react";
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdBanner from './ThirdBanner';
import FourthProjects from './FourthProjects';
import FifthBanner from './FifthBanner';
import SixthMeet from './SixthMeet';
import SeventhBar from './SeventhBar';
import Four3D from './Four3D';


function Home(){
    return(
        <div className="home">
            <FirstPage/>
            <SecondPage/>
            <ThirdBanner/>
            <FourthProjects/>
            <Four3D/>
            <FifthBanner/>
            <SixthMeet/>
            <SeventhBar/>
      </div>
    );
}

export default Home;