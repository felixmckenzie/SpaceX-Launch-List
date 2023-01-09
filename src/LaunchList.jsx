
import React from 'react'
import {gql, useQuery } from '@apollo/client';

const GET_LIST = gql`
  query GetList {
   launchesPast(limit:10) {
      id
      mission_name
      details
      links {
        flickr_images
        mission_patch_small
      }
      rocket{
        rocket_name
      }
      launch_date_utc
    }
  }
`
export default function LaunchList() {

const {loading, error, data} = useQuery(GET_LIST)

if(loading) return <p>loading</p>
if(error) return <p>Error: {error.message}</p>
 return data.launchesPast.map(({id, mission_name, rocket, links})=>(
    <div key={id}>
    <h1>{mission_name}</h1>
    <h2>{rocket.rocket_name}</h2>
    <img src={links.mission_patch_small} width="200"/>
    </div>
 ))


}

