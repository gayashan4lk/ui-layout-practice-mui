import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material'
import ScheduleIcon from '@mui/icons-material/Schedule'
import { Tour } from '@/utils/types/models'

type TourCardProps = {
  tour: Tour
}
export function TourCard({ tour }: TourCardProps) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia height={200} image={tour.image} title={tour.name} component="img" alt={tour.name} />
      </CardActionArea>
      <CardContent sx={{ paddingX: 2, paddingBottom: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" gutterBottom fontWeight="bold" component="h4">
            {tour.name}
          </Typography>
          <Typography variant="body2" fontWeight="bold" component="h4">
            ${tour.price}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          gutterBottom
          color="text.secondary"
          textOverflow="ellipsis"
          overflow="hidden"
          sx={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
        >
          {tour.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'baseline-center' }}>
          <ScheduleIcon sx={{ fontSize: 16 }} />
          <Typography variant="body2" marginLeft={0.5}>
            {tour.duration} hours
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ paddingX: 2, paddingTop: 0, paddingBottom: 2, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'baseline-center' }}>
          <Rating name="read-only" value={tour.rating} readOnly size="small" precision={0.5} />
          <Typography variant="body2" marginLeft={0.5}>
            {tour.rating} ({tour.numberOfReviews} reviews)
          </Typography>
        </Box>
        <Button size="small" variant="outlined">
          Book Now
        </Button>
      </CardActions>
    </Card>
  )
}
