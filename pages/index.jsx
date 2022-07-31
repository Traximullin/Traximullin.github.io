// Global component
import { CardProduct, Container, Grid, Pagination, Search } from '../utils/components'
import { getProduct } from './../data/getProdict'

const HomePages = ({data}) => {

  return (
    <Container>
      <Search/>
      <Grid
        gap={10}
      >
        {
            data.length !== 0
              ? data.map(beer => (
                <CardProduct
                  key={`card-product-beer-${beer.id}`}
                  id={beer.id}
                  name={beer.name}
                  description={beer.description}
                  src={beer.image_url}
                />
              ))
              : <p>Список товара пуст.</p>
        }
      </Grid>
      <Pagination/>
    </Container>
  )
}

export const getServerSideProps = getProduct((data) => {
  return {
      props: {
          data
      }
  }
})

export default HomePages 
