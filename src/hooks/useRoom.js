import { graphql, useStaticQuery } from 'gatsby';

const useRoom = () => {
    
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsRoom{
                nodes {
                    title
                    content
                    slogan
                    image {
                        fluid (maxWidth: 1200){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)
    
        return data.allDatoCmsRoom.nodes.map(room => ({
            title: room.title,
            id: room.id,
            content: room.content,
            image: room.image,
            slogan: room.slogan,
        }))

}
 
export default useRoom;