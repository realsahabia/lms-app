const  MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master"
import { gql, request } from 'graphql-request'

export const getCourseLists= async()=>{

    const query = gql`
    query MyQuery {
        academies {
          author
          authorImage {
            url
          }
          banner {
            url
          }
          coursePreview {
            url
          }
          date
          free
          id
          slug
          tags
          totalChapters
          level
          name
          duration
          description
        }
      }
  `
  const result = await request(MASTER_URL, query)
  return result;
}

export const getCourseById = async(id) =>{
  const query =  gql`
  query course {
    academy(where: {id: "`+id+`"}) {
      description
      free
      duration
      author
      tags
      banner {
        url
      }
      authorImage {
        url
      }
      totalChapters
      coursePreview {
        url
      }
      name
    }
  }
  `

  const result = await request(MASTER_URL, query)
  return result;
}