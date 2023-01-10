import React from "react";
import { gql, useQuery } from "@apollo/client";
import LaunchCard from "./LaunchCard";

const GET_LIST = gql`
  query GetList($limit: Int = 30 ) {
    launchesPast(limit: $limit) {
      id
      mission_name
      details
      links {
        flickr_images
        mission_patch_small
      }
      rocket {
        rocket_name
      }
      launch_date_utc
    }
  }
`;
export default function LaunchList() {
  const { loading, error, data } = useQuery(GET_LIST);
    console.log(data)
  if (loading) return <p>loading</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {data.launchesPast.map(({ id, mission_name, rocket, links }) => {
        return (
          <LaunchCard
            id={id}
            mission_name={mission_name}
            rocket={rocket}
            links={links}
          />
        );
      })}
    </div>
  );
}
