import { Box, Container, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { City } from '@/utils/types/models'
import { cities } from '@/utils/mockdata/cities'
import { TourCard } from '@/components/TourCard'

export default async function Home() {
  return (
    <Container maxWidth="xl">
      <Box paddingY={5}>
        <Typography>Home Page</Typography>
      </Box>
      <Grid container spacing={2}>
        {cities.map((city) =>
          city.tours.map((tour) => (
            <Grid xs={3}>
              <TourCard key={tour.id} tour={tour} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  )
}
