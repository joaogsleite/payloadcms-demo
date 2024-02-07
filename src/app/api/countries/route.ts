import { NextResponse } from 'next/server'

export async function GET(): Promise<Response> {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json()
  const countries = data.map(country => {
    return {
      name: country.name.common,
      flag: country.flag,
      id: country.cca2,
    }
  })
  return NextResponse.json({ countries })
}
