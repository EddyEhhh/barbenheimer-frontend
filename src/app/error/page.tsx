'use client'
import { Box, Button, Typography } from "@mui/material"
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <Box height='100vh'>
      <Typography variant="h3" fontWeight='bold'>Opps! Something went wrong!</Typography>
      <Button href='/'> back to home</Button>
    </Box>
  )
}