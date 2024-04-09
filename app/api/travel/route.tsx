import axios from'axios'
import { NextResponse } from 'next/server'
// const options = {
//   method: 'GET',
//   url: 'https://apidojo-booking-v1.p.rapidapi.com/currency/get-exchange-rates',
//   params: {
//     base_currency: 'USD',
//     languagecode: 'en-us'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
//   }

  
// };
async function options () {
  const reposne = await axios("https://api.flightapi.io/compschedule/api_key?mode=departures&iata=DOH")
  const result = await reposne.data
  return result
}


// async function options () {
//     const response = await axios('https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete',{
//     params: {
//       text: 'hanoi',
//       languagecode: 'en-us'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'a7da05f2b1mshd749f16c75ab70ep1560d4jsn46a07a2b9907',
//       'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
//     }
//     })
//     const result = await response.data
//     return result
// }

export async function GET(
    request : Request
){
    console.log(request)
    const travel = await options()
    console.log(travel)
    return NextResponse.json(travel)
}


