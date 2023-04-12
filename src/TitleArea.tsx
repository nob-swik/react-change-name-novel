import { Paper, Stack, Typography } from "@mui/material"

const TitleArea = () => {
  return (
    <Paper>
      <Stack spacing={2} margin={2}>
        <Typography variant="h4" gutterBottom component="div">
          キャップヒットを先送りしただけなのに～サラリーキャップ超過からの脱出～
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          リボ払いでキャップ超過からの脱出を試みる主人公。しかし、そこには敵の凶悪な罠が仕掛けられていた……
        </Typography>
      </Stack>
    </Paper>
  )
}

export default TitleArea
