// @ts-nocheck
import { reviews } from '../api/variables.js';

export async function GET({ params }) {
    // connect to db to fetch & parse data
  
    const review = reviews.find((r) => r.id == params.id)
  
    if (review) {
      return {
        status: 200,
        body: { review } 
      }
    }
  
    return {
      status: 404
    }
  }