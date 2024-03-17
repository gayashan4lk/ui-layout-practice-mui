export interface Tour {
  id: string
  name: string
  description: string
  duration: number
  rating: number
  numberOfReviews: number
  price: number
  image: string
}

export interface City {
  id: string
  name: string
  tours: Tour[]
}
