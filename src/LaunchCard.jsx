import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/spacex-logo.webp'
export default function LaunchCard({ id, mission_name, rocket, links }) {

  let badge = logo

  if(links.mission_patch_small){
    badge = links.mission_patch_small
  }

  const handleImageError = e =>{
    e.target.src = logo
  }

  return (
    <Link to={`/details/${id}`}>
      <div key={id} className="flex flex-col place-items-center">
        <img src={badge} onError={handleImageError} width="200" />
        <h1>{mission_name}</h1>
        <h2>{rocket.rocket_name}</h2>
      </div>
    </Link>
  );
}
