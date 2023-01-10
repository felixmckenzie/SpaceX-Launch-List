import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const LAUNCH_DETAILS = gql`
  query GetDetails($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      links {
        flickr_images
        mission_patch
      }
    }
  }
`;

export default function Details() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(LAUNCH_DETAILS,{
    variables: {id},
  });

  if(loading) return <p>loading</p>

  if(error) return <p>Error: {error.message}</p>

  console.log(data)

  return (
  <div>
    <h1 className="font-sans font-bold text-4xl mb-4">{data.launch.mission_name}</h1>
    <p>{data.launch.details? data.launch.details: "Information on mission not availabe"}</p>
  </div>)
}
