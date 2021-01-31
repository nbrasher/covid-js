import React from "react";
import RtChart from "./RtChart"
import {Card} from "@material-ui/core"

export default {
  title: "Atoms/RtCart",
  component: RtChart
}

export const RtChartStory = () => {
  const data = [
    {"mean":1.4905119654,"median":1.4849083255,"infections":2264.1990306062,"upper_80":1.687624842,"lower_80":1.3132272873,"test_adjusted_positive":0.0,"date":1590192000000,"test_adjusted_positive_raw":0.0,"tests":0.0,"positive":0.0},
    {"mean":1.4826952015,"median":1.4786563138,"infections":24.4375735594,"upper_80":1.6618875829,"lower_80":1.3015641938,"test_adjusted_positive":0.0,"date":1590278400000,"test_adjusted_positive_raw":0.0,"tests":0.0,"positive":0.0},
    {"mean":1.4746256347,"median":1.4667858575,"infections":346.4833666003,"upper_80":1.6493242505,"lower_80":1.3032043177,"test_adjusted_positive":0.0,"date":1590364800000,"test_adjusted_positive_raw":0.0,"tests":0.0,"positive":0.0},
    {"mean":1.4688172736,"median":1.4696889508,"infections":657.962812642,"upper_80":1.6471731692,"lower_80":1.3178575111,"test_adjusted_positive":0.0,"date":1590451200000,"test_adjusted_positive_raw":0.0,"tests":0.0,"positive":0.0},
    {"mean":1.4626603851,"median":1.4649975658,"infections":712.9997789995,"upper_80":1.6115044329,"lower_80":1.3027435866,"test_adjusted_positive":0.0,"date":1590537600000,"test_adjusted_positive_raw":0.0,"tests":0.0,"positive":0.0},
    {"mean":1.4543184244,"median":1.4504546999,"infections":723.5094443858,"upper_80":1.5880990987,"lower_80":1.2993176008,"test_adjusted_positive":0.0,"date":1590624000000,"test_adjusted_positive_raw":0.0,"tests":0.0,"positive":0.0},
    {"mean":1.445093082,"median":1.4390729409,"infections":773.2176999427,"upper_80":1.5738472272,"lower_80":1.306760061,"test_adjusted_positive":151.516447934,"date":1590710400000,"test_adjusted_positive_raw":0.0,"tests":0.0,"positive":0.0},
    {"mean":1.4328809087,"median":1.4339664686,"infections":840.2152390319,"upper_80":1.5580287453,"lower_80":1.3042740838,"test_adjusted_positive":235.6003979414,"date":1590796800000,"test_adjusted_positive_raw":0.0,"tests":0.0,"positive":0.0},
    {"mean":1.418908414,"median":1.4184670093,"infections":907.5732123795,"upper_80":1.5264946327,"lower_80":1.2804627768,"test_adjusted_positive":287.8920373005,"date":1590883200000,"test_adjusted_positive_raw":0.0,"tests":0.0,"positive":0.0},
    {"mean":1.4034877844,"median":1.3990404422,"infections":975.957109505,"upper_80":1.5223518876,"lower_80":1.2827860167,"test_adjusted_positive":335.6687874172,"date":1590969600000,"test_adjusted_positive_raw":0.0,"tests":0.0,"positive":0.0},
    {"mean":1.3902031916,"median":1.3853721792,"infections":1047.7908180865,"upper_80":1.5078865294,"lower_80":1.275739279,"test_adjusted_positive":397.1745698856,"date":1591056000000,"test_adjusted_positive_raw":917.3609810004,"tests":7337.0,"positive":442.0},
    {"mean":1.3765652925,"median":1.3726973832,"infections":1122.9854757454,"upper_80":1.4883005883,"lower_80":1.2614246766,"test_adjusted_positive":446.7931846441,"date":1591142400000,"test_adjusted_positive_raw":390.0410983112,"tests":20203.6666666667,"positive":464.0},
    {"mean":1.3603735479,"median":1.357343455,"infections":1201.0560593601,"upper_80":1.460839611,"lower_80":1.2356386833,"test_adjusted_positive":514.9200266072,"date":1591228800000,"test_adjusted_positive_raw":171.5262050608,"tests":33070.3333333333,"positive":334.0},
    {"mean":1.3396923351,"median":1.3404764272,"infections":1281.8517738667,"upper_80":1.4362740243,"lower_80":1.2134131994,"test_adjusted_positive":557.4349163292,"date":1591315200000,"test_adjusted_positive_raw":987.9272103082,"tests":3998.0,"positive":476.0},
    {"mean":1.3225380618,"median":1.3183029392,"infections":1364.9123582603,"upper_80":1.4296437151,"lower_80":1.2171115662,"test_adjusted_positive":609.8616286875,"date":1591401600000,"test_adjusted_positive_raw":946.4176636566,"tests":6521.0,"positive":456.0},
    {"mean":1.3053394335,"median":1.3021112166,"infections":1449.1710421849,"upper_80":1.4126407622,"lower_80":1.1973379071,"test_adjusted_positive":675.835734281,"date":1591488000000,"test_adjusted_positive_raw":617.4321243829,"tests":15101.0,"positive":549.0},
    {"mean":1.2859870011,"median":1.2869569265,"infections":1534.1009323406,"upper_80":1.387970499,"lower_80":1.1787297627,"test_adjusted_positive":728.1763824031,"date":1591574400000,"test_adjusted_positive_raw":383.9633065273,"tests":3038.0,"positive":185.0},
    {"mean":1.2676589962,"median":1.2669130912,"infections":1619.5915112367,"upper_80":1.3584286185,"lower_80":1.1535784806,"test_adjusted_positive":790.1775286719,"date":1591660800000,"test_adjusted_positive_raw":371.5104425319,"tests":3569.0,"positive":179.0},
    {"mean":1.2495118176,"median":1.2483252808,"infections":1704.9128788158,"upper_80":1.3669610287,"lower_80":1.1646012768,"test_adjusted_positive":853.3247467353,"date":1591747200000,"test_adjusted_positive_raw":987.9272103082,"tests":3788.5,"positive":476.0},
    {"mean":1.2317863432,"median":1.2328977454,"infections":1789.2947337203,"upper_80":1.3264638527,"lower_80":1.1300273198,"test_adjusted_positive":927.6500792592,"date":1591833600000,"test_adjusted_positive_raw":998.3045969711,"tests":4008.0,"positive":481.0},
    {"mean":1.2140346551,"median":1.2156773872,"infections":1869.8037688507,"upper_80":1.3077489079,"lower_80":1.113698101,"test_adjusted_positive":993.4879714728,"date":1591920000000,"test_adjusted_positive_raw":873.7759570163,"tests":3867.5,"positive":421.0},
    {"mean":1.1960881727,"median":1.1925899621,"infections":1951.5307245502,"upper_80":1.2970222144,"lower_80":1.1047648374,"test_adjusted_positive":1064.7166635535,"date":1592006400000,"test_adjusted_positive_raw":985.8517329756,"tests":3727.0,"positive":475.0},
    {"mean":1.1769294462,"median":1.173781156,"infections":2030.0211780493,"upper_80":1.2629249875,"lower_80":1.0761716614,"test_adjusted_positive":1140.0477250278,"date":1592092800000,"test_adjusted_positive_raw":1068.8708262788,"tests":7402.0,"positive":515.0},
    {"mean":1.1609807402,"median":1.1585956195,"infections":2104.7865417442,"upper_80":1.2478138985,"lower_80":1.0643172456,"test_adjusted_positive":1218.0860789538,"date":1592179200000,"test_adjusted_positive_raw":502.2655144844,"tests":5582.0,"positive":242.0},
    {"mean":1.1459722017,"median":1.1443278322,"infections":2175.5841280684,"upper_80":1.2266465456,"lower_80":1.0505282257,"test_adjusted_positive":1297.4110951981,"date":1592265600000,"test_adjusted_positive_raw":1582.226164233,"tests":13428.0,"positive":1251.0},
    {"mean":1.133218722,"median":1.131885139,"infections":2242.2239620935,"upper_80":1.2171218464,"lower_80":1.0411637245,"test_adjusted_positive":1380.4406642376,"date":1592352000000,"test_adjusted_positive_raw":1398.871722159,"tests":6384.0,"positive":674.0},
    {"mean":1.1223998741,"median":1.1227676204,"infections":2304.8254752037,"upper_80":1.2021242175,"lower_80":1.0286353722,"test_adjusted_positive":1462.934461115,"date":1592438400000,"test_adjusted_positive_raw":1572.3193697795,"tests":8976.0,"positive":831.0},
    {"mean":1.1098222,"median":1.1078974857,"infections":2363.6284433908,"upper_80":1.1923501721,"lower_80":1.0208138374,"test_adjusted_positive":1545.1304067266,"date":1592524800000,"test_adjusted_positive_raw":914.6133143331,"tests":11327.0,"positive":610.0},
    {"mean":1.101698698,"median":1.0990133193,"infections":2419.0071687393,"upper_80":1.1997885189,"lower_80":1.0255946589,"test_adjusted_positive":1628.1186330078,"date":1592611200000,"test_adjusted_positive_raw":2424.8738762141,"tests":11073.0,"positive":1581.0},
    {"mean":1.0948182749,"median":1.0926756714,"infections":2470.659509746,"upper_80":1.1679235302,"lower_80":1.0031874573,"test_adjusted_positive":1712.5269679315,"date":1592697600000,"test_adjusted_positive_raw":2916.0456522751,"tests":7295.0,"positive":1405.0},
    {"mean":1.0870445725,"median":1.0831325094,"infections":2518.9493634092,"upper_80":1.1622654534,"lower_80":0.9981080578,"test_adjusted_positive":1795.391666617,"date":1592784000000,"test_adjusted_positive_raw":859.2476156882,"tests":7774.0,"positive":414.0},
    {"mean":1.0817839687,"median":1.078649231,"infections":2564.7760433769,"upper_80":1.1521511339,"lower_80":0.9916270874,"test_adjusted_positive":1877.4615047273,"date":1592870400000,"test_adjusted_positive_raw":4777.7488195995,"tests":7182.0,"positive":2302.0},
    {"mean":1.0729847752,"median":1.0713041296,"infections":2608.1528570384,"upper_80":1.1428878423,"lower_80":0.9773411739,"test_adjusted_positive":1956.5549226305,"date":1592956800000,"test_adjusted_positive_raw":3329.0656414586,"tests":1849.0,"positive":1604.0},
    {"mean":1.067031406,"median":1.0658308686,"infections":2649.0926681743,"upper_80":1.1352832315,"lower_80":0.9721089163,"test_adjusted_positive":2034.6764019217,"date":1593043200000,"test_adjusted_positive_raw":3841.7085426059,"tests":2385.0,"positive":1851.0},
  ]

  return (
    <div>
      <RtChart data={data} />
    </div>
  )
}

RtChartStory.story = {
    name: "Rt Chart"
}