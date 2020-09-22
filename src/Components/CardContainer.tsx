import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import Card from "./Card";

export interface CardContainerProps {
  busqueda: string;
  filter: string;
  page: number;
  handlePage: Function;
}

const CardContainer: React.SFC<CardContainerProps> = ({
  busqueda,
  filter,
  page,
  handlePage,
}) => {
  let Search;
  switch (filter) {
    case "characters":
      Search = gql`
      {
        characters(page: ${page}, filter: { name: "${busqueda}" }) {
          info{
            count
            pages
            next
            prev
          }
          results {
            name
            id
            image
            type
            gender
            species
          }
        }
      }
    `;

      break;
    case "episodes":
      Search = gql`
      {
        episodes(page: ${page}, filter: { name: "${busqueda}" }) {
          info{
            count
            pages
            next
            prev
          }
          results {
            name
            id
            episode
            air_date
            characters{
              id
              name
              image
              type
            gender
            species
            }
          }
        }
      }
      `;
      break;
    case "locations":
      Search = gql`
      {
        locations(page: ${page}, filter: { name: "${busqueda}" }) {
          info{
            count
            pages
            next
            prev
          }
          results {
            id
            name
            dimension
            type
            residents{
              id 
              name
              image
              type
            }
          }
        }
      }
      `;
      break;

    default:
      break;
  }

  const { loading, error, data } = useQuery(Search);
  if (loading)
    return (
      <div className="col-6 offset-3 mt-2">
        <img
          src="https://i.pinimg.com/originals/70/cd/a4/70cda40d6679e21eb760dd3e35a26e7c.gif"
          className="img-fluid rounded-circle"
          alt=""
        />
      </div>
    );
  if (error)
    return (
      <div className="col-6 offset-3 mt-4">
        <h4 className="text-center">
          We cant find anything with this name... but one of these could be
          called like that
        </h4>
        <img
          src="https://vignette.wikia.nocookie.net/rick-y-morty-espanol/images/5/53/Crononbergs.jpg/revision/latest?cb=20170402070924&path-prefix=es"
          className="img-fluid "
          alt=""
        />
      </div>
    );
  if (filter === "characters") {
    return (
      <div className="row">
        {busqueda === ""
          ? null
          : data.characters.results.map(
              ({ id, name, image, type, gender, species }) => (
                <Card
                  image={image}
                  name={name}
                  filter={filter}
                  type={type}
                  gender={gender}
                  species={species}
                  key={id}
                />
              )
            )}
        <div
          className="btn-group fixed-bottom"
          role="group"
          aria-label="Basic example"
        >
          {data.characters.info.prev === null || undefined ? null : (
            <button className="btn btn-info" onClick={() => handlePage("prev")}>
              <span>prev</span>
            </button>
          )}
          {data.characters.info.next === null ||
          undefined ||
          busqueda === "" ? null : (
            <button
              className="btn btn-success"
              onClick={() => handlePage("next")}
            >
              next
            </button>
          )}
        </div>
      </div>
    );
  }
  if (filter === "episodes") {
    return (
      <div className="row">
        {busqueda === ""
          ? null
          : data.episodes.results.map(
              ({ id, name, episode, air_date, characters }) => (
                <Card
                  episode={episode}
                  name={name}
                  filter={filter}
                  air_date={air_date}
                  characters={characters}
                  key={id}
                />
              )
            )}
        <div
          className="btn-group fixed-bottom"
          role="group"
          aria-label="Basic example"
        >
          {data.episodes.info.prev === null || undefined ? null : (
            <button className="btn btn-info" onClick={() => handlePage("prev")}>
              <span>prev</span>
            </button>
          )}
          {data.episodes.info.next === null ||
          undefined ||
          busqueda === "" ? null : (
            <button
              className="btn btn-success"
              onClick={() => handlePage("next")}
            >
              next
            </button>
          )}
        </div>
      </div>
    );
  }
  if (filter === "locations") {
    return (
      <div className="row">
        {busqueda === ""
          ? null
          : data.locations.results.map(
              ({ id, name, dimension, type, residents }) => (
                <Card
                  dimension={dimension}
                  name={name}
                  filter={filter}
                  type={type}
                  residents={residents}
                  key={id}
                />
              )
            )}
        <div
          className="btn-group fixed-bottom"
          role="group"
          aria-label="Basic example"
        >
          {data.locations.info.prev === null || undefined ? null : (
            <button className="btn btn-info" onClick={() => handlePage("prev")}>
              <span>prev</span>
            </button>
          )}
          {data.locations.info.next === null ||
          undefined ||
          busqueda === "" ? null : (
            <button
              className="btn btn-success"
              onClick={() => handlePage("next")}
            >
              next
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default CardContainer;
