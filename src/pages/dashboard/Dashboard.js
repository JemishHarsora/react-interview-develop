import React, { useEffect } from "react";
import Slider from "react-slick";
import { axiosGet } from "../../helpers/apiRequests";

const Dashboard = (props) => {
  console.log("props: ", props);
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="row">Deshboard screen with protected route !</div>
    </div>
  );
};

export default Dashboard;
