import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export interface CardProps {
  image: string;
  name: string;
  episode: string;
  dimension: string;
  type: string;
  gender: string;
  species: string;
  air_date: Date;
  characters: Array<object>;
  residents: Array<object>;
}

const Card: React.SFC<CardProps> = ({
  image,
  name,
  episode,
  dimension,
  type,
  gender,
  species,
  air_date,
  characters,
  residents,
}) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
    console.log(characters);
  };
  return (
    <div className="col-md-3 col-6" onClick={handleModal}>
      <div className="card bg-succes mb-4">
        <div className="card-body">
          {image === "" ? null : (
            <img src={image} className="img-fluid" alt="" />
          )}
          {episode === undefined ? null : (
            <div>
              <h3 className="text-center">Episode</h3>
              <h5 className="text-center">{episode}</h5>
              <h3 className="text-center">Name</h3>
            </div>
          )}
          {dimension === undefined ? null : (
            <div>
              <h3 className="text-center">Dimension</h3>
              <h5 className="text-center">{dimension}</h5>
              <h3 className="text-center">Name</h3>
            </div>
          )}

          <h5 className="card-title mt-1 text-center">{name}</h5>
          <Modal isOpen={modal}>
            <ModalHeader>
              <h3 className="mx-auto">{name}</h3>
            </ModalHeader>
            <ModalBody>
              {image === undefined ? null : (
                <div className="text-center">
                  <img src={image} className="img-fluid" alt="" />
                  <h5 className="mt-4">Type</h5> <p>{type}</p>
                  <h5>Gender</h5> <p>{gender}</p>
                  <h5>Specie</h5> <p>{species}</p>
                </div>
              )}
              {episode === undefined ? null : (
                <div>
                  <h3 className="text-center">Episode</h3>
                  <h5 className="text-center">{episode}</h5>
                  <h3 className="text-center">Release date</h3>
                  <h5 className="text-center">{air_date}</h5>
                  <h3 className="text-center">characters</h3>
                  <div className="row">
                    {characters.map(
                      ({ name, id, image, type, gender, species }, index) => {
                        if (index > 4) return null;
                        else {
                          return (
                            <Card
                              name={name}
                              image={image}
                              type={type}
                              gender={gender}
                              species={species}
                              key={id}
                            />
                          );
                        }
                      }
                    )}
                  </div>
                </div>
              )}
              {dimension === undefined ? null : (
                <div>
                  <h3 className="text-center">Dimension</h3>
                  <h5 className="text-center">{dimension}</h5>
                  <h3 className="text-center">type</h3>
                  <h5 className="text-center">{type}</h5>
                  <h3 className="text-center">characters</h3>
                  <div className="row">
                    {residents.map(
                      ({ name, id, image, type, gender, species }, index) => {
                        if (index > 4) return null;
                        else {
                          return (
                            <Card
                              name={name}
                              type={type}
                              image={image}
                              gender={gender}
                              species={species}
                              key={id}
                            />
                          );
                        }
                      }
                    )}
                  </div>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <button
                className="btn mx-auto btn-outline-success"
                onClick={handleModal}
              >
                Cerrar
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Card;
