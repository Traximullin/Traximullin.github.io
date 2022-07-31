// Functional
import React from "react"
import { getOneProduct } from "../../../data/getOneProduct"
// Global component
import { BoxProduct, Container, Title } from "../../../utils/components"

const BeerPages = ({ data }) => {

    return (
        <Container>
            <Title
                tagline={data.tagline}
            >
                {data.name}
            </Title>
            <BoxProduct
                src={data.image_url}
                foodPairing={data.food_pairing}
                abv={data.abv}
                description={data.description}
            />
        </Container>
    )
}

export const getServerSideProps = getOneProduct((data) => {
    return {
        props: {
            data
        }
    }
})


export default BeerPages
