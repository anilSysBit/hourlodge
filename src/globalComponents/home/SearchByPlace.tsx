import React from "react";

const SearchByPlace = () => {
  const searchplaces = [
    {
      name: "Chitwan",
      imgSrc:
        "https://th.bing.com/th/id/OIP.auflrzEykCuTOMeeLmLlnAHaEc?pid=ImgDet&rs=1",
    },
    {
      name: "Kathmandu",
      imgSrc:
        "https://i.pinimg.com/originals/e2/7d/d3/e27dd33d190c4bb3eaa1847da5b22b52.jpg",
    },
    // {name:"Annapurna",imgSrc:"https://th.bing.com/th/id/OIP.auflrzEykCuTOMeeLmLlnAHaEc?pid=ImgDet&rs=1"},
    // {name:"Solukhumbu",imgSrc:"https://th.bing.com/th/id/R.41515818ffcc67e36fbc5ce4c6954b36?rik=fOmVatNxoCZTIQ&pid=ImgRaw&r=0"},
    // {name:"RARA",imgSrc:"https://th.bing.com/th/id/OIP.auflrzEykCuTOMeeLmLlnAHaEc?pid=ImgDet&rs=1"},
    {
      name: "Pokhara",
      imgSrc:
        "https://images.ixigo.com/image/upload/t_thumb,f_auto/kathmandu-images-photos-5a867315a6fc7b0bb9c4fd3b.jpg",
    },
    {
      name: "Available Cities",
      imgSrc:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/63d12440243013.57784233d12d4.jpg",
    },
  ];
  return (
    <div className="search_by_place_container" id="searchPlace">
      <h1>Major Cities</h1>
      <div className="place_folder_container">
        {searchplaces.map((elem, index) => {
          return (
            <div className="photo_holder" key={index}>
              <img src={elem.imgSrc} alt="places" />
              <h3>{elem.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchByPlace;
