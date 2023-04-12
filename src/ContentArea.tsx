import { Paper, Stack, Typography } from "@mui/material"

interface CountentAreaProps {
  lastName: string
  firstName: string
}

const CountentArea = ({ lastName, firstName }: CountentAreaProps) => {
  return (
    <Paper>
      <Stack spacing={2} margin={2}>
        <Typography variant="body1" gutterBottom>
          俺の名前は{lastName}
          {firstName}。何やかんやあって、このキャップ超過に陥ってしまった。
          <br />
          「Fire, {lastName}！」
          <br />
          ファンから俺の解任を求める声がする。
        </Typography>
      </Stack>
    </Paper>
  )
}

export default CountentArea
