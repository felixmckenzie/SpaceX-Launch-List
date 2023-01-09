import {ApolloClient, InMemoryCache, gql, HttpLink} from '@apollo/client';


const link = new HttpLink({uri: 'https://api.spacex.land/graphql'})

const cache = new InMemoryCache()

const client = new ApolloClient({
   uri: 'https://api.spacex.land/graphql/',
   cache: new InMemoryCache()
})

const query = gql`{
    launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
  }
}`

client.query({query}).then(result => console.log(result))

