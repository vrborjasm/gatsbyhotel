exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    query {
        allDatoCmsRoom {
          nodes {
            slogan
          }
        }
      }
    `)

    if(result.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    const rooms = result.data.allDatoCmsRoom.nodes;

    rooms.forEach(room => {
        actions.createPage({
            path: room.slogan,
            component: require.resolve('./src/components/Room.js'),
            context: {
                slogan: room.slogan
            }
        })
    });
}