import React, { useState } from "react";
import axios from "axios";
import "./CarCreate.css";
import Price from "./Price";
import Model from "./Model";
import Photo from "./Photo";
import Color from "./Color";
import ReleaseYear from "./ReleaseYear";
import PropTypes from "prop-types";
import Availability from "./Availability";

function CarCreate(props) {
  const [models, setModel] = useState([]);
  const [colors, setColor] = useState([]);
  const [currentModel, setCurrentModel] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [currentIdM, setCurrentModelId] = useState("");
  const [currentIdC, setCurrentColorId] = useState("");
  const [availability, setAvail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      modelFk: currentIdM,
      colorFk: currentIdC,
      price: price,
      releaseYear: releaseYear,
      plantFk: 7,
      availability: availability,
      imageUrl: photo,
    };

    const file = new FormData();
    file.append("imageUrl", photo);

    Object.entries({ ...values }).map(([key, value]) =>
      file.append(key, value)
    );
    axios
      .post("http://localhost:58475/api/cars/", file, {
        withCredentials: true,
      })
      .then((response) => {
        response.status === 201 && props.addCar(response.data);
      })
      .catch(console.error);
  };

  const handleSetModel = (data) => {
    setModel(data);
  };
  const handleSetColor = (data) => {
    setColor(data);
  };
  const handleSetAvail = (data) => {
    setAvail(data);
  };

  const handleSetPhoto = (data) => {
    if (data) {
      setPhoto(data);
    }
  };

  return (
    <React.Fragment>
      <h1 className="h1">Добавление нового авто</h1>
      <div>
        <form className="form-container1" onSubmit={handleSubmit}>
          <div className="fields">
            <Model
              className="combobox"
              models={models}
              setModel={handleSetModel}
              currentModel={currentModel}
              setCurrentModel={setCurrentModel}
              currentIdM={currentIdM}
              setCurrentModelId={setCurrentModelId}
            />

            <Color
              className="combobox"
              colors={colors}
              setColor={handleSetColor}
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
              currentIdC={currentIdC}
              setCurrentColorId={setCurrentColorId}
            />

            <ReleaseYear
              className="date"
              releaseYear={releaseYear}
              setReleaseYear={setReleaseYear}
            />

            <Price className="label" price={price} setPrice={setPrice} />

            <Availability
              className="label"
              availability={availability}
              setAvail={handleSetAvail}
            />

            <Photo className="label" photo={photo} setPhoto={handleSetPhoto} />
            <div>
              <button className="btn-2" type="submit">
                Создать
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

/* CarCreate.propTypes = {
  addCar: PropTypes.func.isRequired,
}; */
export default CarCreate;
