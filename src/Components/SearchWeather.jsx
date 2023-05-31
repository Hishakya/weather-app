import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchWeather = () => {
  // const [image,setImage] = useState();
  const [input, setInput] = useState("");
  const [data, setData] = useState();
  // let componentMounted = true;
  //   const getImage = async() => {
  //     const abc = await axios.get(`https://api.unsplash.com/photos/?query=office&client_id=Y5lSavpPVzi-o_zL89NYDNsrnbJ6FraVPAkRBFY5dxc`)
  //     console.log(abc);
  //     setImage(abc.data[0].urls.small)
  //     setImage(abc)
  //   }

  const getWeatherData = async (params) => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=ccb910c0933ad6dccd6a5ee5e8794724`;
    await axios
      .get(apiUrl)
      .then((res) => {
        console.log("responsee", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error->", alert("Enter correct city name"));
      });
  };

  const handleChange = (e) => {
    // console.log("evnnt", e.target.value);
    setInput(e.target.value);
  };

  const handleSearch = () => {
    getWeatherData(input);
  };

  useEffect(() => {
    // getImage();
    getWeatherData("Delhi");
  }, []);

  let temp = (data?.main?.temp - 273.15).toFixed(2);
  let temp_min = (data?.main?.temp_min - 273.15).toFixed(2);
  let temp_max = (data?.main?.temp_max - 273.15).toFixed(2);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card text-bg-dark">
            <img
              // src={image}
              src="https://source.unsplash.com/random/700x800/?weather" // 2
              // src="https://source.unsplash.com/random/?weather&1"  //working 1
              width="300"
              className="card-img"
              alt="nature"
            />
            <div className="card-img-overlay">
              <div className="input-group mb-2  mx-auto">
                {/* <div className="input-group mb-4 w-75 mx-auto"> */}
                <input
                  type="text"
                  value={input}
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Search City or Country "
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <button
                  type="submit"
                  className="input-group-text"
                  id="basic-addon2"
                  onClick={handleSearch}
                >
                  Search
                  {/* <i className="fas fa-search"></i> */}
                </button>
              </div>
              <div className="bg-dark bg-opacity-50 p-2">
                <h2 className="card-title">{data?.name}</h2>
                <p className="card-text lead">Monday,May 28, 2023</p>
                <hr />
                <h1 className="fw-bolder mb-5">{temp} &deg;C</h1>
                <p className=" lead fw-bolder mb-0">Cloud</p>
                <p className="fw-bolder mb-5">
                  {temp_min} &deg;C | {temp_max} &deg;C
                </p>
                <p className="fw-bolder mb-5">
                  Humidity : {data?.main?.humidity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="container mt-5">
  //     <div className="row justify-content-center">
  //       <div className="col-md-4">
  //         <div className="card text-bg-dark">
  //           <img
  //             // src={image}
  //             src="https://source.unsplash.com/random/600x700/?weather" // 2
  //             // src="https://source.unsplash.com/random/?weather&1"  //working 1
  //             width="300"
  //             className="card-img"
  //             alt="nature"
  //           />

  //           <div className="card-img-overlay">
  //             <form action="">
  //               <div className="input-group mb-4  mx-auto">
  //                 {/* <div className="input-group mb-4 w-75 mx-auto"> */}
  //                 <input
  //                   type="text"
  //                   className="form-control"
  //                   placeholder="Search City or Country "
  //                   aria-label="Search"
  //                   aria-describedby="basic-addon2"
  //                 />
  //                 <button
  //                   type="submit"
  //                   className="input-group-text"
  //                   id="basic-addon2"
  //                 >
  //                   Search
  //                   {/* <i className="fas fa-search"></i> */}
  //                 </button>
  //               </div>
  //             </form>
  //             <div className="bg-dark bg-opacity-50 p-3">
  //               <h2 className="card-title">{search.name}</h2>
  //               <p className="card-text lead">Monday,May 28, 2023</p>
  //               <hr />
  //               {/* <i className="fas fa-cloud fa-4x"></i> */}
  //               <h1 className="fw-bolder mb-5">{search.clouds} &deg;C</h1>
  //               {/* <h1 className="fw-bolder mb-5">{search.main.temp} &deg;C</h1> */}
  //               <p className=" lead fw-bolder mb-0">Cloud</p>
  //               <p className="fw-bolder mb-5">30.01 &deg;C | 35.01 &deg;C</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default SearchWeather;
