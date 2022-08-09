import { reviews } from '../api/variables.js';

export async function GET() {
    // connect to db and fetch data from it no frontend end can see it.

    return {
        status: 200,
        body: {
            reviews
        }
    }
}