import {env} from "../next.config"

export function getProduct(gssp) {

    return async (context) => {
        const { query } = context;

        const settings = {
            page: query.page || 1,
            search: query.beer_name ? `&beer_name=${query.beer_name}` : ""
        }
        
        const res = await fetch(`${env.API_URL}?page=${settings.page}${settings.search}`)
        const data = await res.json()

        return await gssp(data); // Continue on to call `getServerSideProps` logic
    }

}
