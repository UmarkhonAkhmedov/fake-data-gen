import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Main.css";
import axios from "axios";
import UserTable from "../Table/Table";
import Region from "../Region/Region";

function Main() {
  const [region, setRegion] = useState("us");
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    await axios
      .get(`https://randomuser.me/api/?results=20&nat=${region}`)

      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(region);
  };

  useEffect(() => {
    fetchData();
  }, [region]);

  const fetchMoreUser = async () => {
    const fetching = await axios
      .get(`https://randomuser.me/api/?results=10&nat=${region}`)
      .then((response) => {
        return response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });

    return fetching;
  };

  const getMoreData = async () => {
    const getUserInfo = await fetchMoreUser();
    setTimeout(function () {
      setData([...data, ...getUserInfo]);
    }, 500);
    // setHasMore(false);
  };

  return (
    <div className="main">
      <div className="region">
        <Region region={region} setRegion={setRegion} fetchData={fetchData} />
      </div>
      <div className="table">
        <InfiniteScroll
          dataLength={data?.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<h4 style={{ margin: "20px" }}>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center", margin: "20px 0" }}>
              <b>You have seen it all</b>
            </p>
          }
        >
          <UserTable data={data} />
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Main;
