import {env} from "../next.config"

export function getOneProduct(gssp) {

    return async (context) => {
        const { query } = context;
        
        const result = await fetch(`${env.API_URL}/${query.id}`)
        const data = await result.json()

        return await gssp(data[0]); // Continue on to call `getServerSideProps` logic
    }

}
