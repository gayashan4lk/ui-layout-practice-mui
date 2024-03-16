import { Container, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

export default async function Home() {
  const cities = await (await fetch('http://localhost:3000/api/cities')).json()

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {cities[1].tours.map((tour: any) => (
          <TourCard tour={tour} />
        ))}
      </Grid>
    </Container>
  )
}

type TourCardProps = {
  tour: any
}

function TourCard({ tour }: TourCardProps) {
  return (
    <Grid key={tour.id} xs={3}>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="subtitle2">{tour.name}</Typography>
        <Typography variant="body2">$ {tour.price}</Typography>
        <Typography variant="body2">url</Typography>
        <Typography variant="body2">date</Typography>
      </Paper>
    </Grid>
  )
}
