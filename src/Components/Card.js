import React from "react";
import axios from "axios";

function Card() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    function fetchdata() {
      try {
        fetch("https://randomuser.me/api/?results=5")
          .then((res) => res.json())
          .then((data) => setData(data?.results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <>Loading.. </>
      ) : (
        <>
          {data.map((card) => (
            <>
              <h1>{`${card?.name.title} + ${card?.name.first} + ${card?.name.last}`}</h1>
              <img src={card?.picture.thumbnail} />
              <h1>{card?.gender}</h1>
            </>
          ))}
        </>
      )}
    </div>
  );
}

export default Card;
