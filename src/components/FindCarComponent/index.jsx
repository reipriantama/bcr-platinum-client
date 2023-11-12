import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "../CarCard";
import "./index.css";

function FindCarComponent() {
  //     note
  // option -> value sebagai marking agar nnti pengelolaan datanya mudah
  // onchange untuk mendeteksi interaksi dengan user apa yang user input, pakai arrowfunction

  // e punya property target yang merupakan inputan, value adalah hasil dari inputan dari input form kita, untuk yang option kita letak di select agar bisa dibaca valuenya

  const [name, setName] = useState(
    JSON.parse(sessionStorage.getItem("selectedCar")).name
  );
  const [category, setCategory] = useState(
    JSON.parse(sessionStorage.getItem("selectedCar")).category
  );
  const [price, setPrice] = useState(
    JSON.parse(sessionStorage.getItem("selectedCar")).price
  );
  const [minPrice, setMinPrice] = useState(
    JSON.parse(sessionStorage.getItem("selectedCar")).minPrice
  );
  const [maxPrice, setMaxPrice] = useState(
    JSON.parse(sessionStorage.getItem("selectedCar")).maxPrice
  );
  const [status, setStatus] = useState(
    JSON.parse(sessionStorage.getItem("selectedCar")).status
  );
  const [data, setData] = useState([]);

  const [selectedCar, setSelectedCar] = useState(
    JSON.parse(sessionStorage.getItem("selectedCar"))
  );

  const getData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name}&minPrice=${minPrice}&maxPrice=${maxPrice}&status=${status}&category=${category}`; //name=${name}&minPrice=${minPrice}&maxPrice=${maxPrice}&status=${status}&category=${category}
    axios
      .get(api)
      .then((res) => setData(res.data.cars))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };

  const handleSetName = (e) => {
    setName(e.target.value);
    setSelectedCar({ ...selectedCar, name: e.target.value });
  };

  const handleSetPrice = (e) => {
    if (e.target.value === "default") {
      setPrice("default");
      setMinPrice(0);
      setMaxPrice(1000000);
      setSelectedCar({
        ...selectedCar,
        price: "",
        minPrice: 0,
        maxPrice: 1000000,
      });
    } else if (e.target.value === "small") {
      setPrice("small");
      setMinPrice(0);
      setMaxPrice(400000);
      setSelectedCar({
        ...selectedCar,
        price: "small",
        minPrice: 0,
        maxPrice: 400000,
      });
    } else if (e.target.value === "medium") {
      setPrice("medium");
      setMinPrice(400000);
      setMaxPrice(600000);
      setSelectedCar({
        ...selectedCar,
        price: "medium",
        minPrice: 400000,
        maxPrice: 600000,
      });
    } else if (e.target.value === "large") {
      setPrice("large");
      setMinPrice(600000);
      setMaxPrice(800000);
      setSelectedCar({
        ...selectedCar,
        price: "large",
        minPrice: 600000,
        maxPrice: 800000,
      });
    }
  };

  const handleSetCategory = (e) => {
    if (e.target.value === "default") {
      setCategory("");
      setSelectedCar({ ...selectedCar, category: "" });
    } else if (e.target.value === "small") {
      setCategory("small");
      setSelectedCar({ ...selectedCar, category: "small" });
    } else if (e.target.value === "medium") {
      setCategory("medium");
      setSelectedCar({ ...selectedCar, category: "medium" });
    } else if (e.target.value === "large") {
      setCategory("large");
      setSelectedCar({ ...selectedCar, category: "large" });
    }
  };

  const handleSetStatus = (e) => {
    if (e.target.value === "default") {
      setStatus("");
      setSelectedCar({ ...selectedCar, status: "" });
    } else if (e.target.value === "true") {
      setStatus("true");
      setSelectedCar({ ...selectedCar, status: "true" });
    } else if (e.target.value === "false") {
      setStatus("false");
      setSelectedCar({ ...selectedCar, status: "false" });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("selectedCar", JSON.stringify(selectedCar));
  }, [selectedCar]);

  const onSubmit = (e) => {
    // function untuk tidak melakukan reload, untuk nnti pengelolaan data pada saat hit API
    e.preventDefault();
  };
  const navigate = useNavigate();

  const goToSearch = (id) => navigate(`/result/${id}`);

  return (
    <>
      <div className="container">
        <div className="container form">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <div className="col">
                <label>Nama Mobil</label>
                <input
                  type="string"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Ketik nama/tipe mobil"
                  value={name}
                  onChange={(e) => {
                    handleSetName(e);
                  }}
                />
              </div>
              <div className="col">
                <label for="inputCapacity">Kategori</label>
                <select
                  data-testid="button-kategori"
                  id="inputCapacity"
                  className="form-select"
                  value={category}
                  onChange={(e) => {
                    handleSetCategory(e);
                  }}
                >
                  <option selected value="default">
                    Masukan Kapasitas Mobil
                  </option>
                  <option value="small">2 - 4 Orang</option>
                  <option value="medium">4 - 6 Orang</option>
                  <option value="large">6 - 8 Orang</option>
                </select>
              </div>
              <div className="col">
                <label for="inputPrice">Harga</label>
                <select
                  id="inputPrice"
                  className="form-select"
                  value={price}
                  onChange={(e) => {
                    handleSetPrice(e);
                  }}
                >
                  <option selected value="default">
                    Masukan Harga Sewa per Hari
                  </option>
                  <option value="small">&lt; Rp. 400.000</option>
                  <option value="medium">Rp.400.000 - Rp. 600.000</option>
                  <option value="large">&gt; Rp. 600.000</option>
                  {/* { hargaMobil.map((item) => (
                                <option>{item.labelHarga}</option>
                                ))
                            } */}
                </select>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <label for="inputState">Status</label>
                    <select
                      id="inputState"
                      className="form-select"
                      value={status}
                      onChange={(e) => {
                        handleSetStatus(e);
                      }}
                    >
                      <option selected value="default">
                        Pilih Status
                      </option>
                      <option value="true">Disewakan</option>
                      <option value="false">Tidak Disewa</option>
                    </select>
                  </div>
                  <div className="col">
                    <label></label>
                    <button
                      data-testid="button-edit"
                      className="btn btn-primary"
                      onClick={getData}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="row justify-content-start result">
          {data.map((item) => (
            <div className="col car">
              <CarCard
                carname={item.name}
                carcategory={item.category}
                carprice={item.price}
                carimage={item.image}
                cardetail={() => goToSearch(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FindCarComponent;
