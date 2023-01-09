import React from 'react'

export default function LaunchCard({id, mission_name, rocket, links}) {
  
  return (
   <div key={id}>
    <h1>{mission_name}</h1>
     <h2>{rocket.rocket_name}</h2>
    <img src={links.mission_patch_small} width="200"/>
    </div>
  )
}
