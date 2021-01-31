import { ComposedChart, Line, Area, Tooltip, YAxis, XAxis, ReferenceLine } from 'recharts';
import {Card, Typography} from "@material-ui/core"
import dayjs from "dayjs"


const FormatDate = (ts) => {return dayjs(ts).format('MMM-DD')}

const FormatValue = (x) => {return Number.parseFloat(x).toFixed(2)}

const CustomToolTip = ({payload}) => {
  if (payload?.length && Array.isArray(payload)) {
    const datum = payload[0]
    return (
      <Card style={{padding: '8px'}}>
        <Typography variant="h6">
          {FormatDate(datum?.payload?.date)}
        </Typography>
        <Typography variant="h5">
          {FormatValue(datum?.payload?.value)}
        </Typography>
      </Card>
    )
  }
  return (<></>)
}

const RtChart = (props) => {
  const { data } = props;
  const FormatData = (x) => {
    return {
      "date": FormatDate(x["date"]),
      "value": x["mean"],
      "errorBar": [x["lower_80"], x["upper_80"]],
    }
  }

  return (
    <ComposedChart width={600} height={300} data={data.map(FormatData)}>
      <XAxis dataKey="date"/>
      <YAxis
        domain={[0.5, 1.75]}
        ticks={[.5, .75, 1., 1.25, 1.5, 1.75]}
        tickFormatter={FormatValue}
      />
      <Tooltip content={<CustomToolTip  />} />
      <ReferenceLine y={1.0} stroke="#000000" strokeWidth={0.5}/>
      <Area type="monotone" dataKey="errorBar" stroke="#aaaaaa" fill="#dddddd" />
      <Line type="linear" dataKey="value"/>
    </ComposedChart>
  )
}

export default RtChart;