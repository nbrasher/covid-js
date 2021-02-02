import { Card, Typography } from "@material-ui/core"
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  card: {
    boxShadow:
      "0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12), 0px 0px 3px 0px rgba(0,0,0,0.2)",
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
  },
}))

const MainPage = () => {
  const classes = useStyles()

  return (
    <>
    <Card class={classes.card}>
      <CardContent>
        <Typography variant="h1">
          {"A bare bones App!"}
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default MainPage
