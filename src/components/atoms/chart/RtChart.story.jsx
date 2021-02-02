import React from "react";
import RtChart from "./RtChart"

export const RtChartStory = () => {
  const data = [
    {'date': 1590192000000.0, 'mean': 1.4876092833788055, 'median': 1.473519208251951, 'lower_80': 1.3142890229368254, 'upper_80': 1.6700407843156442, 'infections': 2257.201029781853, 'test_adjusted_positive': 0.0, 'test_adjusted_positive_raw': 0.0, 'positive': 0.0, 'tests': 0.0
    },
    {'date': 1590278400000.0, 'mean': 1.4780135132840277, 'median': 1.4710938374791338, 'lower_80': 1.3212792701422915, 'upper_80': 1.664095633280176, 'infections': 24.376528941029868, 'test_adjusted_positive': 0.0, 'test_adjusted_positive_raw': 0.0, 'positive': 0.0, 'tests': 0.0
    },
    {'date': 1590364800000.0, 'mean': 1.468889077636, 'median': 1.4605214991940807, 'lower_80': 1.3020095001524565, 'upper_80': 1.6334892061469144, 'infections': 345.6172471648234, 'test_adjusted_positive': 0.0, 'test_adjusted_positive_raw': 0.0, 'positive': 0.0, 'tests': 0.0
    },
    {'date': 1590451200000.0, 'mean': 1.4572886588812686, 'median': 1.4491884381077897, 'lower_80': 1.2805498625800886, 'upper_80': 1.5972966366895411, 'infections': 656.2996784740662, 'test_adjusted_positive': 0.0, 'test_adjusted_positive_raw': 0.0, 'positive': 0.0, 'tests': 0.0
    },
    {'date': 1590537600000.0, 'mean': 1.452169653353391, 'median': 1.4432535961759356, 'lower_80': 1.3143909568441565, 'upper_80': 1.6027124558301047, 'infections': 710.9992220565654, 'test_adjusted_positive': 0.0, 'test_adjusted_positive_raw': 0.0, 'positive': 0.0, 'tests': 0.0
    },
    {'date': 1590624000000.0, 'mean': 1.443190682047996, 'median': 1.4397521170634866, 'lower_80': 1.281538309950167, 'upper_80': 1.5596172500116965, 'infections': 720.6539279223247, 'test_adjusted_positive': 0.0, 'test_adjusted_positive_raw': 0.0, 'positive': 0.0, 'tests': 0.0
    },
    {'date': 1590710400000.0, 'mean': 1.4326833346961552, 'median': 1.4290651623285449, 'lower_80': 1.2808561663552382, 'upper_80': 1.5403797904405268, 'infections': 768.8872258146931, 'test_adjusted_positive': 151.00895867842775, 'test_adjusted_positive_raw': 0.0, 'positive': 0.0, 'tests': 0.0
    },
    {'date': 1590796800000.0, 'mean': 1.4219724788960848, 'median': 1.4223376072383553, 'lower_80': 1.3063810185332827, 'upper_80': 1.553557677612371, 'infections': 834.1615772665698, 'test_adjusted_positive': 234.81224693037512, 'test_adjusted_positive_raw': 0.0, 'positive': 0.0, 'tests': 0.0
    },
    {'date': 1590883200000.0, 'mean': 1.4139516011467912, 'median': 1.4096142588680691, 'lower_80': 1.2828726348313655, 'upper_80': 1.5245192474720437, 'infections': 899.5028207468132, 'test_adjusted_positive': 286.942966814385, 'test_adjusted_positive_raw': 0.0, 'positive': 0.0, 'tests': 0.0
    },
    {'date': 1590969600000.0, 'mean': 1.39973807903919, 'median': 1.3970801208963541, 'lower_80': 1.2680167285100925, 'upper_80': 1.5038988438954242, 'infections': 965.6298879587824, 'test_adjusted_positive': 334.5921112603639, 'test_adjusted_positive_raw': 0.0, 'positive': 0.0, 'tests': 0.0
    },
    {'date': 1591056000000.0, 'mean': 1.3858151055350492, 'median': 1.3857211879825602, 'lower_80': 1.2716935930397728, 'upper_80': 1.5036441080647, 'infections': 1035.5259180779492, 'test_adjusted_positive': 395.92145363764695, 'test_adjusted_positive_raw': 912.7291569274407, 'positive': 442.0, 'tests': 7337.0
    },
    {'date': 1591142400000.0, 'mean': 1.3707682772169394, 'median': 1.3709544312650421, 'lower_80': 1.2381717558544165, 'upper_80': 1.468785755387944, 'infections': 1109.151386407063, 'test_adjusted_positive': 445.3435288041483, 'test_adjusted_positive_raw': 388.0717516896781, 'positive': 464.0, 'tests': 20203.666666666668
    },
    {'date': 1591228800000.0, 'mean': 1.358351555306886, 'median': 1.356171657559305, 'lower_80': 1.2461143585723646, 'upper_80': 1.4732400873473872, 'infections': 1185.5494663235224, 'test_adjusted_positive': 513.0893348683976, 'test_adjusted_positive_raw': 170.6601564472018, 'positive': 334.0, 'tests': 33070.333333333336
    },
    {'date': 1591315200000.0, 'mean': 1.3450830983563515, 'median': 1.3422533044626634, 'lower_80': 1.2340867929074861, 'upper_80': 1.4635487562188096, 'infections': 1264.350881157497, 'test_adjusted_positive': 555.1460947193551, 'test_adjusted_positive_raw': 982.9390920757054, 'positive': 476.0, 'tests': 3998.0
    },
    {'date': 1591401600000.0, 'mean': 1.3275677797460839, 'median': 1.321999125018639, 'lower_80': 1.2039624311729775, 'upper_80': 1.4288595468674616, 'infections': 1345.605161035968, 'test_adjusted_positive': 606.8895326725025, 'test_adjusted_positive_raw': 941.639130223785, 'positive': 456.0, 'tests': 6521.0
    },
    {'date': 1591488000000.0, 'mean': 1.3095533921650833, 'median': 1.3082268361190361, 'lower_80': 1.1903956999830463, 'upper_80': 1.4013355057627488, 'infections': 1429.2057101051876, 'test_adjusted_positive': 671.9218613714247, 'test_adjusted_positive_raw': 614.3146634963007, 'positive': 549.0, 'tests': 15101.0
    },
    {'date': 1591574400000.0, 'mean': 1.2932102429066672, 'median': 1.289966593376344, 'lower_80': 1.1657093018717442, 'upper_80': 1.3722547009666446, 'infections': 1514.32788979448, 'test_adjusted_positive': 723.1761533455116, 'test_adjusted_positive_raw': 382.0246471302636, 'positive': 185.0, 'tests': 3038.0
    },
    {'date': 1591660800000.0, 'mean': 1.2748264031819492, 'median': 1.274277586243904, 'lower_80': 1.1833377456551732, 'upper_80': 1.380298250393527, 'infections': 1600.0809177788383, 'test_adjusted_positive': 783.9207321843681, 'test_adjusted_positive_raw': 369.6346585746875, 'positive': 179.0, 'tests': 3569.0
    },
    {'date': 1591747200000.0, 'mean': 1.2563026506412762, 'median': 1.2546986231340524, 'lower_80': 1.1515258924353151, 'upper_80': 1.3395092019338721, 'infections': 1686.0872485193895, 'test_adjusted_positive': 845.7034092368618, 'test_adjusted_positive_raw': 982.9390920757054, 'positive': 476.0, 'tests': 3788.5
    },
    {'date': 1591833600000.0, 'mean': 1.2359599330170459, 'median': 1.2345199364991162, 'lower_80': 1.1408834855982972, 'upper_80': 1.3340240590407666, 'infections': 1771.7953796112017, 'test_adjusted_positive': 918.526569682137, 'test_adjusted_positive_raw': 993.2640825386854, 'positive': 481.0, 'tests': 4008.0
    },
    {'date': 1591920000000.0, 'mean': 1.216479983566977, 'median': 1.2133556171217206, 'lower_80': 1.1116604349757302, 'upper_80': 1.3014394450058715, 'infections': 1853.9177790832757, 'test_adjusted_positive': 982.8093905568992, 'test_adjusted_positive_raw': 869.3641969829242, 'positive': 421.0, 'tests': 3867.5
    },
    {'date': 1592006400000.0, 'mean': 1.1998595411110826, 'median': 1.1951844788370805, 'lower_80': 1.0958425559928835, 'upper_80': 1.2844411086879208, 'infections': 1936.9249099739793, 'test_adjusted_positive': 1052.479258091778, 'test_adjusted_positive_raw': 980.8740939831093, 'positive': 475.0, 'tests': 3727.0
    },
    {'date': 1592092800000.0, 'mean': 1.1847017250901686, 'median': 1.1872444889308964, 'lower_80': 1.0939447956145947, 'upper_80': 1.280773081684351, 'infections': 2016.1982435220348, 'test_adjusted_positive': 1126.3688054265724, 'test_adjusted_positive_raw': 1063.4740176869502, 'positive': 515.0, 'tests': 7402.0
    },
    {'date': 1592179200000.0, 'mean': 1.169575905506699, 'median': 1.1707777059560422, 'lower_80': 1.0895735246477962, 'upper_80': 1.2716911917015328, 'infections': 2091.9091458273033, 'test_adjusted_positive': 1203.1474027720167, 'test_adjusted_positive_raw': 499.72953840823675, 'positive': 242.0, 'tests': 5582.0
    },
    {'date': 1592265600000.0, 'mean': 1.1584709092525012, 'median': 1.1609354455308671, 'lower_80': 1.0705710228806011, 'upper_80': 1.2511223153571427, 'infections': 2164.7785208538844, 'test_adjusted_positive': 1281.4408793274242, 'test_adjusted_positive_raw': 1574.2373862184372, 'positive': 1251.0, 'tests': 13428.0
    },
    {'date': 1592352000000.0, 'mean': 1.1464744266350604, 'median': 1.1413911729095392, 'lower_80': 1.0587157737403288, 'upper_80': 1.2316125699811267, 'infections': 2234.6206626209237, 'test_adjusted_positive': 1363.7124117734988, 'test_adjusted_positive_raw': 1391.8087144097174, 'positive': 674.0, 'tests': 6384.0
    },
    {'date': 1592438400000.0, 'mean': 1.1326186481352476, 'median': 1.1294429230047656, 'lower_80': 1.044007489672635, 'upper_80': 1.2162505193045061, 'infections': 2301.536465827703, 'test_adjusted_positive': 1445.7702161769648, 'test_adjusted_positive_raw': 1564.3806119096982, 'positive': 831.0, 'tests': 8976.0
    },
    {'date': 1592524800000.0, 'mean': 1.120811779867765, 'median': 1.1180955859590038, 'lower_80': 1.0305480577147077, 'upper_80': 1.2111855806578038, 'infections': 2365.5603894662745, 'test_adjusted_positive': 1527.8286694081412, 'test_adjusted_positive_raw': 909.9953634342365, 'positive': 610.0, 'tests': 11327.0
    },
    {'date': 1592611200000.0, 'mean': 1.1092863283179653, 'median': 1.1064836938749314, 'lower_80': 1.0288580526740645, 'upper_80': 1.2134273696798485, 'infections': 2425.882004765828, 'test_adjusted_positive': 1610.902213313043, 'test_adjusted_positive_raw': 2412.630506999093, 'positive': 1581.0, 'tests': 11073.0
    },
    {'date': 1592697600000.0, 'mean': 1.0996235262014213, 'median': 1.0978226112164966, 'lower_80': 1.0124545042996538, 'upper_80': 1.1939745661669718, 'infections': 2482.0258028907333, 'test_adjusted_positive': 1695.5680193746846, 'test_adjusted_positive_raw': 2901.3223200974076, 'positive': 1405.0, 'tests': 7295.0
    },
    {'date': 1592784000000.0, 'mean': 1.091976495870665, 'median': 1.0908059216547714, 'lower_80': 1.000109567838655, 'upper_80': 1.1831163247197432, 'infections': 2534.009762308333, 'test_adjusted_positive': 1778.9158116055296, 'test_adjusted_positive_raw': 854.9092103347522, 'positive': 414.0, 'tests': 7774.0
    },
    {'date': 1592870400000.0, 'mean': 1.0835604749593533, 'median': 1.0826757621282512, 'lower_80': 0.9927615013050657, 'upper_80': 1.165452425550049, 'infections': 2582.181104022196, 'test_adjusted_positive': 1861.7787197961356, 'test_adjusted_positive_raw': 4753.625609156037, 'positive': 2302.0, 'tests': 7182.0
    },
    {'date': 1592956800000.0, 'mean': 1.0740272740937309, 'median': 1.0737418766731461, 'lower_80': 0.9747996685875141, 'upper_80': 1.1539387160606704, 'infections': 2627.2288331480413, 'test_adjusted_positive': 1942.0811683065083, 'test_adjusted_positive_raw': 3312.2569405240156, 'positive': 1604.0, 'tests': 1849.0
    },
    {'date': 1593043200000.0, 'mean': 1.0662171258324455, 'median': 1.063926370642638, 'lower_80': 0.9649361005771954, 'upper_80': 1.1438610566460226, 'infections': 2669.291436585961, 'test_adjusted_positive': 2021.91017017311, 'test_adjusted_positive_raw': 3822.311469395232, 'positive': 1851.0, 'tests': 2385.0
    },
    {'date': 1593129600000.0, 'mean': 1.0581869248731584, 'median': 1.056575512490574, 'lower_80': 0.9638704841163124, 'upper_80': 1.1406746288673084, 'infections': 2707.736226391699, 'test_adjusted_positive': 2099.3241088162426, 'test_adjusted_positive_raw': 2366.149994241908, 'positive': 1641.0, 'tests': 11719.0
    },
    {'date': 1593216000000.0, 'mean': 1.0497711392714224, 'median': 1.0460957808676281, 'lower_80': 0.9657596334552632, 'upper_80': 1.1356372341950027, 'infections': 2742.458085407152, 'test_adjusted_positive': 2174.9743594155116, 'test_adjusted_positive_raw': 1502.2016160728977, 'positive': 1879.0, 'tests': 21136.0
    },
    {'date': 1593302400000.0, 'mean': 1.040451509524695, 'median': 1.035794989554338, 'lower_80': 0.9613457564488158, 'upper_80': 1.1231130001896354, 'infections': 2773.603814771576, 'test_adjusted_positive': 2247.3725877897086, 'test_adjusted_positive_raw': 1274.7798490958776, 'positive': 1230.0, 'tests': 16304.0
    },
    {'date': 1593388800000.0, 'mean': 1.0299271671761732, 'median': 1.0291840007494102, 'lower_80': 0.9363514168017019, 'upper_80': 1.1009858312646439, 'infections': 2800.894794162482, 'test_adjusted_positive': 2317.4143169811227, 'test_adjusted_positive_raw': 384.5839735434468, 'positive': 271.0, 'tests': 11907.0
    },
    {'date': 1593475200000.0, 'mean': 1.0203918130091132, 'median': 1.0192369916661084, 'lower_80': 0.9367257200667307, 'upper_80': 1.0953551489295288, 'infections': 2823.770189314818, 'test_adjusted_positive': 2383.9709540955637, 'test_adjusted_positive_raw': 2428.2079095904473, 'positive': 1726.0, 'tests': 12011.0
    },
    {'date': 1593561600000.0, 'mean': 1.012324883775391, 'median': 1.008840401978743, 'lower_80': 0.9346756900273501, 'upper_80': 1.0879176776093527, 'infections': 2841.5735946202726, 'test_adjusted_positive': 2447.690756710291, 'test_adjusted_positive_raw': 2355.9993373719985, 'positive': 1156.0, 'tests': 8291.0
    },
    {'date': 1593648000000.0, 'mean': 1.0045473211644564, 'median': 1.003800099514537, 'lower_80': 0.9228865831861504, 'upper_80': 1.0766371310589617, 'infections': 2854.1330001023566, 'test_adjusted_positive': 2507.843939820925, 'test_adjusted_positive_raw': 3199.062130817861, 'positive': 2021.0, 'tests': 10675.0
    },
    {'date': 1593734400000.0, 'mean': 0.9975789288211189, 'median': 0.9965632847944101, 'lower_80': 0.9120144464876084, 'upper_80': 1.0725465092908082, 'infections': 2861.866670972955, 'test_adjusted_positive': 2564.9930293288653, 'test_adjusted_positive_raw': 3277.138136034775, 'positive': 1767.0, 'tests': 9111.0
    },
    {'date': 1593820800000.0, 'mean': 0.9900746757847075, 'median': 0.989012125833298, 'lower_80': 0.9047202478884275, 'upper_80': 1.0678491461091753, 'infections': 2865.2201389082984, 'test_adjusted_positive': 2618.663108351198, 'test_adjusted_positive_raw': 1963.9484321676107, 'positive': 1651.0, 'tests': 14205.0
    },
    {'date': 1593907200000.0, 'mean': 0.980292246906595, 'median': 0.978871015828953, 'lower_80': 0.897130145485863, 'upper_80': 1.048110754028946, 'infections': 2864.490918713001, 'test_adjusted_positive': 2669.334188452422, 'test_adjusted_positive_raw': 754.3754246005172, 'positive': 686.0, 'tests': 15366.0
    },
    {'date': 1593993600000.0, 'mean': 0.9705728080692613, 'median': 0.9700662247834675, 'lower_80': 0.8921209127983084, 'upper_80': 1.0382937566925263, 'infections': 2859.677832361839, 'test_adjusted_positive': 2715.5117836224763, 'test_adjusted_positive_raw': 946.7289597918608, 'positive': 798.0, 'tests': 14243.0
    },
    {'date': 1594080000000.0, 'mean': 0.9625238906610027, 'median': 0.961769096419254, 'lower_80': 0.8796244554497977, 'upper_80': 1.0299344351307602, 'infections': 2850.031507807814, 'test_adjusted_positive': 2758.2715289092225, 'test_adjusted_positive_raw': 2703.7079630587687, 'positive': 2234.0, 'tests': 13962.0
    },
    {'date': 1594166400000.0, 'mean': 0.9529802372933562, 'median': 0.9510912516433891, 'lower_80': 0.8818497944064624, 'upper_80': 1.0290415406999556, 'infections': 2834.9398752004035, 'test_adjusted_positive': 2797.1505167626588, 'test_adjusted_positive_raw': 2205.6346120182766, 'positive': 2033.0, 'tests': 15575.0
    },
    {'date': 1594252800000.0, 'mean': 0.945051881428798, 'median': 0.9409177797679358, 'lower_80': 0.8727317353773949, 'upper_80': 1.0217488068294365, 'infections': 2814.834102882923, 'test_adjusted_positive': 2832.1282005454755, 'test_adjusted_positive_raw': 2606.027592856177, 'positive': 1262.0, 'tests': 6620.0
    },
    {'date': 1594339200000.0, 'mean': 0.9381521446957973, 'median': 0.9344288879642098, 'lower_80': 0.8564299978676677, 'upper_80': 1.0124865517683117, 'infections': 2789.989828988201, 'test_adjusted_positive': 2862.331725300702, 'test_adjusted_positive_raw': 1932.445153236692, 'positive': 1493.0, 'tests': 13055.0
    },
    {'date': 1594425600000.0, 'mean': 0.9308364167551204, 'median': 0.9275413642799333, 'lower_80': 0.8680318516129558, 'upper_80': 1.0208140834820887, 'infections': 2760.6216061334862, 'test_adjusted_positive': 2888.445306425339, 'test_adjusted_positive_raw': 1947.7377489354799, 'positive': 1701.0, 'tests': 14757.0
    },
    {'date': 1594512000000.0, 'mean': 0.9237760399729824, 'median': 0.9226968882764146, 'lower_80': 0.8358373200939253, 'upper_80': 0.995249570559849, 'infections': 2727.3841913599153, 'test_adjusted_positive': 2910.1085134790674, 'test_adjusted_positive_raw': 3213.4692129789187, 'positive': 2423.0, 'tests': 12741.0
    },
    {'date': 1594598400000.0, 'mean': 0.9171263301503407, 'median': 0.9148729867308816, 'lower_80': 0.8406680170914328, 'upper_80': 0.9921798493114411, 'infections': 2690.687745805191, 'test_adjusted_positive': 2927.3553464737397, 'test_adjusted_positive_raw': 1955.545956938799, 'positive': 1562.0, 'tests': 13497.0
    },
    {'date': 1594684800000.0, 'mean': 0.9126963281056548, 'median': 0.9105046655746034, 'lower_80': 0.8427079587293697, 'upper_80': 0.9936884687991272, 'infections': 2650.718835279478, 'test_adjusted_positive': 2940.2214040838403, 'test_adjusted_positive_raw': 6058.704403676722, 'positive': 2934.0, 'tests': 7449.0
    },
    {'date': 1594771200000.0, 'mean': 0.909907951435627, 'median': 0.9075892420275813, 'lower_80': 0.8298998850059562, 'upper_80': 0.9853568598732853, 'infections': 2607.841203808177, 'test_adjusted_positive': 2948.1876196650896, 'test_adjusted_positive_raw': 4286.356521147232, 'positive': 2473.0, 'tests': 9749.0
    },
    {'date': 1594857600000.0, 'mean': 0.9056744307870075, 'median': 0.9049405442377538, 'lower_80': 0.8283432691453939, 'upper_80': 0.9805930050324663, 'infections': 2562.9254569630925, 'test_adjusted_positive': 2951.512496787176, 'test_adjusted_positive_raw': 3813.487657634497, 'positive': 2616.0, 'tests': 11591.5
    },
    {'date': 1594944000000.0, 'mean': 0.9029128536131051, 'median': 0.9025464743964858, 'lower_80': 0.8180701804644841, 'upper_80': 0.9661096669195638, 'infections': 2516.980190936852, 'test_adjusted_positive': 2950.027276597746, 'test_adjusted_positive_raw': 2776.011329454559, 'positive': 2207.0, 'tests': 13434.0
    },
    {'date': 1595030400000.0, 'mean': 0.9019982814384097, 'median': 0.9009217793008719, 'lower_80': 0.8242655868438454, 'upper_80': 0.9742071769191364, 'infections': 2470.21208674113, 'test_adjusted_positive': 2944.034991725316, 'test_adjusted_positive_raw': 3775.391528970395, 'positive': 2594.0, 'tests': 11610.0
    },
    {'date': 1595116800000.0, 'mean': 0.8982267345193788, 'median': 0.8997272685771438, 'lower_80': 0.8314686563700798, 'upper_80': 0.9860230277597873, 'infections': 2422.754040578183, 'test_adjusted_positive': 2933.0035888239163, 'test_adjusted_positive_raw': 1864.6480959588312, 'positive': 1885.0, 'tests': 17082.0
    },
    {'date': 1595203200000.0, 'mean': 0.8971457727988645, 'median': 0.8995837938839055, 'lower_80': 0.822145410168992, 'upper_80': 0.9696704465423427, 'infections': 2375.2842448128195, 'test_adjusted_positive': 2917.557540303488, 'test_adjusted_positive_raw': 1728.9240589961503, 'positive': 1055.0, 'tests': 10311.0
    },
    {'date': 1595289600000.0, 'mean': 0.8963828448671651, 'median': 0.896722374954638, 'lower_80': 0.819888703741363, 'upper_80': 0.9639513049708558, 'infections': 2327.599561881868, 'test_adjusted_positive': 2897.849252821256, 'test_adjusted_positive_raw': 3120.255188405293, 'positive': 2046.0, 'tests': 11080.0
    },
    {'date': 1595376000000.0, 'mean': 0.8970018024326305, 'median': 0.8977925115033945, 'lower_80': 0.8166605860333908, 'upper_80': 0.9621849364167246, 'infections': 2279.7284514800563, 'test_adjusted_positive': 2873.795232996384, 'test_adjusted_positive_raw': 3608.5506502333337, 'positive': 1919.0, 'tests': 8986.0
    },
    {'date': 1595462400000.0, 'mean': 0.8983948076344488, 'median': 0.9001079420574045, 'lower_80': 0.822439075885558, 'upper_80': 0.9659951267761834, 'infections': 2232.3404371131896, 'test_adjusted_positive': 2846.1929325290876, 'test_adjusted_positive_raw': 3312.2933629418894, 'positive': 1971.0, 'tests': 10055.0
    },
    {'date': 1595548800000.0, 'mean': 0.9014674943043812, 'median': 0.8993951280378243, 'lower_80': 0.8209261390201456, 'upper_80': 0.9646490530537426, 'infections': 2185.970196661337, 'test_adjusted_positive': 2815.126159630051, 'test_adjusted_positive_raw': 2995.231462782104, 'positive': 1986.0, 'tests': 11204.0
    },
    {'date': 1595635200000.0, 'mean': 0.9066681595900598, 'median': 0.9029379557801445, 'lower_80': 0.8259078336224578, 'upper_80': 0.9757369182563744, 'infections': 2140.9840615195985, 'test_adjusted_positive': 2780.9915926395447, 'test_adjusted_positive_raw': 2428.4113507875563, 'positive': 1606.0, 'tests': 11175.0
    },
    {'date': 1595721600000.0, 'mean': 0.9109961392325387, 'median': 0.9082309456190151, 'lower_80': 0.8385660911741745, 'upper_80': 0.9826329882358559, 'infections': 2097.8809757627573, 'test_adjusted_positive': 2744.130654842438, 'test_adjusted_positive_raw': 2764.4285712882356, 'positive': 1840.0, 'tests': 11247.0
    },
    {'date': 1595808000000.0, 'mean': 0.9174438130128308, 'median': 0.9147515976811, 'lower_80': 0.8269857164063815, 'upper_80': 0.9749303249983976, 'infections': 2057.366011474292, 'test_adjusted_positive': 2705.330490316329, 'test_adjusted_positive_raw': 2578.715241980907, 'positive': 1366.0, 'tests': 8951.0
    },
    {'date': 1595894400000.0, 'mean': 0.9250007033284878, 'median': 0.9245269327498606, 'lower_80': 0.853606899988992, 'upper_80': 1.0047305144411076, 'infections': 2019.6834047773732, 'test_adjusted_positive': 2664.017763067699, 'test_adjusted_positive_raw': 3037.0252929535413, 'positive': 1660.0, 'tests': 9236.0
    },
    {'date': 1595980800000.0, 'mean': 0.9316975006735255, 'median': 0.9327171557602931, 'lower_80': 0.8577042296475517, 'upper_80': 1.0102896801854173, 'infections': 1984.989614992282, 'test_adjusted_positive': 2621.5582181063137, 'test_adjusted_positive_raw': 3421.753415583944, 'positive': 1928.0, 'tests': 9521.0
    },
    {'date': 1596067200000.0, 'mean': 0.9357208358433197, 'median': 0.9350839529162187, 'lower_80': 0.8608022082774026, 'upper_80': 1.0141836513262088, 'infections': 1953.7035149312806, 'test_adjusted_positive': 2577.8728818491804, 'test_adjusted_positive_raw': 3138.7263115126666, 'positive': 1997.0, 'tests': 10751.0
    },
    {'date': 1596153600000.0, 'mean': 0.9411949503497596, 'median': 0.9399598295417562, 'lower_80': 0.8698799737745027, 'upper_80': 1.0283258023735933, 'infections': 1925.7355905403558, 'test_adjusted_positive': 2533.311793800263, 'test_adjusted_positive_raw': 4534.735811340859, 'positive': 2196.0, 'tests': 8167.0
    },
    {'date': 1596240000000.0, 'mean': 0.9496364948624958, 'median': 0.9476717903242331, 'lower_80': 0.8688733474225259, 'upper_80': 1.0269344901429949, 'infections': 1900.2545255225066, 'test_adjusted_positive': 2488.301848291453, 'test_adjusted_positive_raw': 4942.916298178601, 'positive': 2621.0, 'tests': 8960.0
    },
    {'date': 1596326400000.0, 'mean': 0.9553570002347737, 'median': 0.9511708378868982, 'lower_80': 0.8801096115037533, 'upper_80': 1.0415134971871183, 'infections': 1876.9256953105796, 'test_adjusted_positive': 2443.2643212581775, 'test_adjusted_positive_raw': 1310.0513181669078, 'positive': 2254.0, 'tests': 29073.0
    },
    {'date': 1596412800000.0, 'mean': 0.9622216744055041, 'median': 0.9578778121884328, 'lower_80': 0.8737825046282889, 'upper_80': 1.0339207067186797, 'infections': 1856.409572676579, 'test_adjusted_positive': 2398.612298684789, 'test_adjusted_positive_raw': 728.6516025066688, 'positive': 1835.0, 'tests': 42554.0
    },
    {'date': 1596499200000.0, 'mean': 0.9668418144804366, 'median': 0.9657042098613975, 'lower_80': 0.8852391748622815, 'upper_80': 1.0387151624434183, 'infections': 1838.8084656470328, 'test_adjusted_positive': 2354.756180605295, 'test_adjusted_positive_raw': 2123.9604830897883, 'positive': 1828.0, 'tests': 14543.0
    },
    {'date': 1596585600000.0, 'mean': 0.9709879552139218, 'median': 0.969870827561244, 'lower_80': 0.8939721602132313, 'upper_80': 1.0480624168620025, 'infections': 1823.81038335411, 'test_adjusted_positive': 2312.1003625684602, 'test_adjusted_positive_raw': 2877.3623441200707, 'positive': 2386.0, 'tests': 14012.0
    },
    {'date': 1596672000000.0, 'mean': 0.9762823493245558, 'median': 0.9754098809078449, 'lower_80': 0.8904365545604823, 'upper_80': 1.0439832238012565, 'infections': 1810.9694990817902, 'test_adjusted_positive': 2271.012372562627, 'test_adjusted_positive_raw': 3289.5124088228104, 'positive': 2288.0, 'tests': 11753.0
    },
    {'date': 1596758400000.0, 'mean': 0.9794627248732094, 'median': 0.9771785113076017, 'lower_80': 0.8924277138402241, 'upper_80': 1.0482096095111766, 'infections': 1799.810230268869, 'test_adjusted_positive': 2231.759209378361, 'test_adjusted_positive_raw': 602.1292384412, 'positive': 1539.0, 'tests': 43189.0
    },
    {'date': 1596844800000.0, 'mean': 0.9841385898472754, 'median': 0.9798062742389086, 'lower_80': 0.8992397113323443, 'upper_80': 1.0589478872732514, 'infections': 1790.3348104023855, 'test_adjusted_positive': 2194.5118697782755, 'test_adjusted_positive_raw': 520.023548228781, 'positive': 1790.0, 'tests': 58164.0
    },
    {'date': 1596931200000.0, 'mean': 0.9849427296773545, 'median': 0.979906053844628, 'lower_80': 0.9073575931109716, 'upper_80': 1.0604145581170707, 'infections': 1782.3573528909144, 'test_adjusted_positive': 2159.4154651060276, 'test_adjusted_positive_raw': 1543.2057381306647, 'positive': 2026.0, 'tests': 22184.0
    },
    {'date': 1597017600000.0, 'mean': 0.9874781761685882, 'median': 0.985869461827507, 'lower_80': 0.9036617193013032, 'upper_80': 1.0634825680209097, 'infections': 1775.7717850812746, 'test_adjusted_positive': 2126.6047222905117, 'test_adjusted_positive_raw': 785.7765532145481, 'positive': 1281.0, 'tests': 27547.0
    },
    {'date': 1597104000000.0, 'mean': 0.989975553837658, 'median': 0.9874347121951582, 'lower_80': 0.9061104982016442, 'upper_80': 1.0666687959477756, 'infections': 1770.1464077098567, 'test_adjusted_positive': 2096.1835643546337, 'test_adjusted_positive_raw': 1519.1673284316378, 'positive': 1619.0, 'tests': 18008.0
    },
    {'date': 1597190400000.0, 'mean': 0.9930487021259913, 'median': 0.9901985003002766, 'lower_80': 0.9163335028099677, 'upper_80': 1.0842522058567932, 'infections': 1765.1314498417112, 'test_adjusted_positive': 2068.193403453053, 'test_adjusted_positive_raw': 2569.3540838522963, 'positive': 1469.0, 'tests': 9661.0
    },
    {'date': 1597276800000.0, 'mean': 0.9939761347211175, 'median': 0.9919272992585241, 'lower_80': 0.9110607987906104, 'upper_80': 1.0808960522054551, 'infections': 1760.8566862212624, 'test_adjusted_positive': 2042.6033858013807, 'test_adjusted_positive_raw': 1047.4137378790758, 'positive': 1485.0, 'tests': 23957.0
    },
    {'date': 1597363200000.0, 'mean': 0.9942497062573455, 'median': 0.9906913062717344, 'lower_80': 0.9179164730443625, 'upper_80': 1.0812876492680386, 'infections': 1757.486105535743, 'test_adjusted_positive': 2019.349310479067, 'test_adjusted_positive_raw': 760.2554056928088, 'positive': 1532.0, 'tests': 34050.5
    },
    {'date': 1597449600000.0, 'mean': 0.9936072735587053, 'median': 0.9924875703864093, 'lower_80': 0.9120877015596164, 'upper_80': 1.074932969141179, 'infections': 1754.758547528374, 'test_adjusted_positive': 1998.3472191135588, 'test_adjusted_positive_raw': 4096.956215710503, 'positive': 1984.0, 'tests': 30.0
    },
    {'date': 1597536000000.0, 'mean': 0.9944934658002665, 'median': 0.993128627195808, 'lower_80': 0.9119660096782775, 'upper_80': 1.0753469777377318, 'infections': 1752.1887633501913, 'test_adjusted_positive': 1979.4922190654606, 'test_adjusted_positive_raw': 1715.0651176765532, 'positive': 2155.0, 'tests': 21232.0
    },
    {'date': 1597622400000.0, 'mean': 0.9955578910892947, 'median': 0.9925391316897756, 'lower_80': 0.9077513805490356, 'upper_80': 1.071951666771517, 'infections': 1749.4989338482915, 'test_adjusted_positive': 1962.6471011924932, 'test_adjusted_positive_raw': 317.3066302118296, 'positive': 640.0, 'tests': 34082.0
    },
    {'date': 1597708800000.0, 'mean': 0.996797927175472, 'median': 0.9969449837140429, 'lower_80': 0.9010490287123797, 'upper_80': 1.0641136236478783, 'infections': 1746.8698968054193, 'test_adjusted_positive': 1947.645362913807, 'test_adjusted_positive_raw': 509.54309401067417, 'positive': 1455.0, 'tests': 48251.0
    },
    {'date': 1597795200000.0, 'mean': 0.9955062317544165, 'median': 0.9945854712355111, 'lower_80': 0.9061021459881962, 'upper_80': 1.0671642713201481, 'infections': 1744.617452364175, 'test_adjusted_positive': 1934.3198197527688, 'test_adjusted_positive_raw': 3452.6768108205447, 'positive': 1672.0, 'tests': 7051.0
    },
    {'date': 1597881600000.0, 'mean': 0.9955103153342612, 'median': 0.9952718009874871, 'lower_80': 0.905277039827432, 'upper_80': 1.0663334064839487, 'infections': 1742.853718175917, 'test_adjusted_positive': 1922.527863066982, 'test_adjusted_positive_raw': 2789.90621762957, 'positive': 1729.0, 'tests': 10472.0
    },
    {'date': 1597968000000.0, 'mean': 0.9950543600563835, 'median': 0.9939521908432485, 'lower_80': 0.9185033088213517, 'upper_80': 1.0754737906637113, 'infections': 1741.141159492632, 'test_adjusted_positive': 1912.132400353436, 'test_adjusted_positive_raw': 1282.696286150573, 'positive': 1395.0, 'tests': 18377.0
    },
    {'date': 1598054400000.0, 'mean': 0.9965798785707939, 'median': 0.998023264040344, 'lower_80': 0.9037812306774115, 'upper_80': 1.0624414578290597, 'infections': 1739.241928904194, 'test_adjusted_positive': 1902.9787780250567, 'test_adjusted_positive_raw': 2344.1810466934553, 'positive': 1421.0, 'tests': 10243.0
    },
    {'date': 1598140800000.0, 'mean': 0.9952664395314182, 'median': 0.9952229256577148, 'lower_80': 0.9171620714549896, 'upper_80': 1.0704585617150413, 'infections': 1737.262081311954, 'test_adjusted_positive': 1894.890748930692, 'test_adjusted_positive_raw': 2944.687280041924, 'positive': 1426.0, 'tests': 1958.0
    },
    {'date': 1598227200000.0, 'mean': 0.9958566577735284, 'median': 0.9956316763286751, 'lower_80': 0.9235575758713324, 'upper_80': 1.078365589728077, 'infections': 1735.493222920965, 'test_adjusted_positive': 1887.7025296724046, 'test_adjusted_positive_raw': 1571.463548465571, 'positive': 761.0, 'tests': 3802.0
    },
    {'date': 1598313600000.0, 'mean': 0.996929426970097, 'median': 0.9945036348029173, 'lower_80': 0.9266717914493972, 'upper_80': 1.0905180363664513, 'infections': 1733.739013835159, 'test_adjusted_positive': 1881.2912337929029, 'test_adjusted_positive_raw': 1512.1297789946477, 'positive': 1809.0, 'tests': 20215.0
    },
    {'date': 1598400000000.0, 'mean': 0.9956818319613936, 'median': 0.9969963300705194, 'lower_80': 0.9095848249783216, 'upper_80': 1.067108549172189, 'infections': 1731.854081677408, 'test_adjusted_positive': 1875.5720109814536, 'test_adjusted_positive_raw': 569.5525317901837, 'positive': 1124.0, 'tests': 33347.0
    },
    {'date': 1598486400000.0, 'mean': 0.9970993020797928, 'median': 0.9971175711565998, 'lower_80': 0.930158401699838, 'upper_80': 1.0848351388063284, 'infections': 1730.132730478886, 'test_adjusted_positive': 1870.4566688819402, 'test_adjusted_positive_raw': 2816.6573983009707, 'positive': 1364.0, 'tests': 7391.0
    },
    {'date': 1598572800000.0, 'mean': 0.9994474604525516, 'median': 0.9970463219582348, 'lower_80': 0.9141580408476926, 'upper_80': 1.0719304520161894, 'infections': 1728.377613318466, 'test_adjusted_positive': 1865.8445672982573, 'test_adjusted_positive_raw': 782.860392824442, 'positive': 705.0, 'tests': 15217.0
    },
    {'date': 1598659200000.0, 'mean': 0.9986924181591241, 'median': 0.9959718555550804, 'lower_80': 0.9201848963909154, 'upper_80': 1.0784604507524742, 'infections': 1726.6849363966883, 'test_adjusted_positive': 1861.6430390839366, 'test_adjusted_positive_raw': 3661.2416181727426, 'positive': 1773.0, 'tests': 3726.0
    },
    {'date': 1598745600000.0, 'mean': 0.99795283672729, 'median': 0.9979750056639798, 'lower_80': 0.9148267517781942, 'upper_80': 1.0810813060503837, 'infections': 1725.543380037599, 'test_adjusted_positive': 1857.790301256794, 'test_adjusted_positive_raw': 3659.1766200801467, 'positive': 1772.0, 'tests': 5483.0
    },
    {'date': 1598832000000.0, 'mean': 0.9937100887540314, 'median': 0.9929255593084549, 'lower_80': 0.9057570345159554, 'upper_80': 1.069552374153794, 'infections': 1724.6606657032296, 'test_adjusted_positive': 1854.2323242156012, 'test_adjusted_positive_raw': 2453.2177340040716, 'positive': 1188.0, 'tests': 5764.0
    },
    {'date': 1598918400000.0, 'mean': 0.9896839332129774, 'median': 0.9885844979467631, 'lower_80': 0.8916158982093636, 'upper_80': 1.0608508402004122, 'infections': 1723.4699850638362, 'test_adjusted_positive': 1850.913292470599, 'test_adjusted_positive_raw': 2230.197940003701, 'positive': 1080.0, 'tests': 5652.0
    },
    {'date': 1599004800000.0, 'mean': 0.985615188406528, 'median': 0.9828257879103097, 'lower_80': 0.8823230664468487, 'upper_80': 1.0471121635533824, 'infections': 1721.314855224393, 'test_adjusted_positive': 1847.7976199277423, 'test_adjusted_positive_raw': 564.6844922135632, 'positive': 1196.0, 'tests': 35789.0
    },
    {'date': 1599091200000.0, 'mean': 0.9813874535060805, 'median': 0.9790064998720888, 'lower_80': 0.8935065209475626, 'upper_80': 1.0592557172710781, 'infections': 1717.768687671474, 'test_adjusted_positive': 1844.8534346641586, 'test_adjusted_positive_raw': 1618.9585045952795, 'positive': 784.0, 'tests': 6319.0
    },
    {'date': 1599177600000.0, 'mean': 0.9746963498970714, 'median': 0.9715996187573317, 'lower_80': 0.8960855241009734, 'upper_80': 1.0591554430668957, 'infections': 1712.8471632160179, 'test_adjusted_positive': 1842.0578570250823, 'test_adjusted_positive_raw': 916.975579841479, 'positive': 1069.0, 'tests': 19699.0
    },
    {'date': 1599264000000.0, 'mean': 0.9682418309835039, 'median': 0.9660042093915406, 'lower_80': 0.8869222078672914, 'upper_80': 1.0455546741706248, 'infections': 1706.57186288572, 'test_adjusted_positive': 1839.4263156618113, 'test_adjusted_positive_raw': 2455.2827320966676, 'positive': 1189.0, 'tests': 7128.0
    },
    {'date': 1599350400000.0, 'mean': 0.9607062800183379, 'median': 0.9575952105748287, 'lower_80': 0.8802684452437362, 'upper_80': 1.0393589318698544, 'infections': 1698.4855367828666, 'test_adjusted_positive': 1836.977315178807, 'test_adjusted_positive_raw': 2426.372758800323, 'positive': 1175.0, 'tests': 5446.0
    },
    {'date': 1599436800000.0, 'mean': 0.9516566317035113, 'median': 0.9494053726599314, 'lower_80': 0.8708709701985994, 'upper_80': 1.0247689662437176, 'infections': 1688.1861151763653, 'test_adjusted_positive': 1834.6906695563878, 'test_adjusted_positive_raw': 656.8941106894903, 'positive': 828.0, 'tests': 21299.0
    },
    {'date': 1599523200000.0, 'mean': 0.9402046060187713, 'median': 0.936976913946681, 'lower_80': 0.854105542678921, 'upper_80': 1.0147270822515113, 'infections': 1675.5410718051455, 'test_adjusted_positive': 1832.4831301633499, 'test_adjusted_positive_raw': 86.72991988903283, 'positive': 42.0, 'tests': 5066.0
    },
    {'date': 1599609600000.0, 'mean': 0.9280368395827088, 'median': 0.927388291403092, 'lower_80': 0.8478069862408625, 'upper_80': 1.0042592492500928, 'infections': 1660.2411655531894, 'test_adjusted_positive': 1830.2051665954955, 'test_adjusted_positive_raw': 773.3441483752558, 'positive': 1020.0, 'tests': 22287.0
    },
    {'date': 1599696000000.0, 'mean': 0.9173154173479265, 'median': 0.9167126849125096, 'lower_80': 0.8285882858463955, 'upper_80': 0.9829147815013292, 'infections': 1641.7095425928164, 'test_adjusted_positive': 1827.6831834589916, 'test_adjusted_positive_raw': 2203.352964799953, 'positive': 1067.0, 'tests': 2507.0
    },
    {'date': 1599782400000.0, 'mean': 0.9061986959014289, 'median': 0.9049530282882647, 'lower_80': 0.8257247078563852, 'upper_80': 0.9769168744775295, 'infections': 1619.5401972751954, 'test_adjusted_positive': 1824.75022786021, 'test_adjusted_positive_raw': 1327.7801587029023, 'positive': 1165.0, 'tests': 14826.0
    },
    {'date': 1599868800000.0, 'mean': 0.8961300042525555, 'median': 0.8922191071782977, 'lower_80': 0.8252220431972769, 'upper_80': 0.971704508544497, 'infections': 1593.9499153218244, 'test_adjusted_positive': 1821.2174614065596, 'test_adjusted_positive_raw': 1690.661598824751, 'positive': 1682.0, 'tests': 16811.0
    },
    {'date': 1599955200000.0, 'mean': 0.8880951253361884, 'median': 0.8871046144470873, 'lower_80': 0.8102191490664914, 'upper_80': 0.9477607270354304, 'infections': 1565.2928787261988, 'test_adjusted_positive': 1816.86715480269, 'test_adjusted_positive_raw': 142.07186877060616, 'positive': 688.0, 'tests': 81828.5
    },
    {'date': 1600041600000.0, 'mean': 0.8798988681528723, 'median': 0.8772886015090922, 'lower_80': 0.8082949863965219, 'upper_80': 0.9401795768351224, 'infections': 1533.8796692919052, 'test_adjusted_positive': 1811.4717510647292, 'test_adjusted_positive_raw': 1818.0704400258019, 'positive': 1023.0, 'tests': 9508.0
    },
    {'date': 1600128000000.0, 'mean': 0.8722666810714138, 'median': 0.8708963162927416, 'lower_80': 0.7967434051245431, 'upper_80': 0.9341813234373341, 'infections': 1500.2670981432066, 'test_adjusted_positive': 1804.7931260801795, 'test_adjusted_positive_raw': 2023.5896421817042, 'positive': 1867.0, 'tests': 15590.0
    },
    {'date': 1600214400000.0, 'mean': 0.8680681851973628, 'median': 0.8647326974856099, 'lower_80': 0.799118537548621, 'upper_80': 0.9332197375407085, 'infections': 1464.90417818163, 'test_adjusted_positive': 1796.5639354122716, 'test_adjusted_positive_raw': 2214.419747204332, 'positive': 3049.0, 'tests': 23266.0
    },
    {'date': 1600300800000.0, 'mean': 0.8636271066113262, 'median': 0.8605398405475515, 'lower_80': 0.79636408444341, 'upper_80': 0.9306803460339196, 'infections': 1428.0442363498169, 'test_adjusted_positive': 1786.4898894694236, 'test_adjusted_positive_raw': 374.6148851499263, 'positive': 845.0, 'tests': 38115.0
    },
    {'date': 1600387200000.0, 'mean': 0.8600129620214509, 'median': 0.8589106816067785, 'lower_80': 0.7862306981331114, 'upper_80': 0.9232202416668873, 'infections': 1390.3468560262074, 'test_adjusted_positive': 1774.2952955508651, 'test_adjusted_positive_raw': 662.9478263917538, 'positive': 1134.0, 'tests': 28904.0
    },
    {'date': 1600473600000.0, 'mean': 0.8571600605366657, 'median': 0.8562306439545513, 'lower_80': 0.7804599861085859, 'upper_80': 0.9206947737187645, 'infections': 1352.387002625598, 'test_adjusted_positive': 1759.7580462232718, 'test_adjusted_positive_raw': 1740.7426505775047, 'positive': 915.0, 'tests': 8882.0
    },
    {'date': 1600560000000.0, 'mean': 0.8564649612964594, 'median': 0.8556217658641144, 'lower_80': 0.7864968283856882, 'upper_80': 0.9206917139797665, 'infections': 1314.397618125207, 'test_adjusted_positive': 1742.7228234269035, 'test_adjusted_positive_raw': 2023.6981307440992, 'positive': 980.0, 'tests': 7471.0
    },
    {'date': 1600646400000.0, 'mean': 0.8562641826707852, 'median': 0.8546468774987332, 'lower_80': 0.7862619602713974, 'upper_80': 0.9246449922557274, 'infections': 1276.5831953837396, 'test_adjusted_positive': 1723.115713584079, 'test_adjusted_positive_raw': 792.4961337907979, 'positive': 674.0, 'tests': 14371.0
    },
    {'date': 1600732800000.0, 'mean': 0.8560985728726047, 'median': 0.8568634683039067, 'lower_80': 0.779037727377301, 'upper_80': 0.9194299327460937, 'infections': 1239.3363893503717, 'test_adjusted_positive': 1700.9445471473623, 'test_adjusted_positive_raw': 14299.029889280679, 'positive': 14175.0, 'tests': 16751.0
    },
    {'date': 1600819200000.0, 'mean': 0.8570719275713076, 'median': 0.8544537592260028, 'lower_80': 0.7856652886590018, 'upper_80': 0.9273227464014948, 'infections': 1203.0211989138438, 'test_adjusted_positive': 1676.2822569326097, 'test_adjusted_positive_raw': 669.1272869976477, 'positive': 715.0, 'tests': 18056.0
    },
    {'date': 1600905600000.0, 'mean': 0.8629411193892387, 'median': 0.8600773318794739, 'lower_80': 0.7942851557929776, 'upper_80': 0.9400924929760259, 'infections': 1167.7564709077258, 'test_adjusted_positive': 1649.27919498347, 'test_adjusted_positive_raw': 1540.4885770766307, 'positive': 746.0, 'tests': 5602.0
    },
    {'date': 1600992000000.0, 'mean': 0.8680421145914821, 'median': 0.8660751443991597, 'lower_80': 0.790827409753628, 'upper_80': 0.940860369468011, 'infections': 1133.7119442140076, 'test_adjusted_positive': 1620.155876050665, 'test_adjusted_positive_raw': 1695.363434021332, 'positive': 821.0, 'tests': 4615.0
    },
    {'date': 1601078400000.0, 'mean': 0.8707361916013698, 'median': 0.86992273863887, 'lower_80': 0.7883627277004611, 'upper_80': 0.9370059522958776, 'infections': 1101.508848208822, 'test_adjusted_positive': 1589.1724701794014, 'test_adjusted_positive_raw': 2093.908065892364, 'positive': 1014.0, 'tests': 3567.0
    },
    {'date': 1601164800000.0, 'mean': 0.8751396814275186, 'median': 0.8742033385669881, 'lower_80': 0.7878245725195226, 'upper_80': 0.9316355595418331, 'infections': 1071.5005586619343, 'test_adjusted_positive': 1556.6095115240098, 'test_adjusted_positive_raw': 189.28880323400367, 'positive': 454.0, 'tests': 40528.0
    },
    {'date': 1601251200000.0, 'mean': 0.8799940316509967, 'median': 0.880377633228504, 'lower_80': 0.8123266237201191, 'upper_80': 0.9536065195250216, 'infections': 1043.3068319747451, 'test_adjusted_positive': 1522.7653530333316, 'test_adjusted_positive_raw': 1177.3460760215896, 'positive': 599.0, 'tests': 8597.0
    },
    {'date': 1601337600000.0, 'mean': 0.8847392129973731, 'median': 0.8842025985254838, 'lower_80': 0.8074790204993059, 'upper_80': 0.950208069840586, 'infections': 1016.6605505125706, 'test_adjusted_positive': 1487.951445002547, 'test_adjusted_positive_raw': 1081.8031089294766, 'positive': 555.0, 'tests': 8669.0
    },
    {'date': 1601424000000.0, 'mean': 0.8921105120120462, 'median': 0.8896604600724888, 'lower_80': 0.8121452689577786, 'upper_80': 0.9569671119443539, 'infections': 991.6164360962077, 'test_adjusted_positive': 1452.4782458106815, 'test_adjusted_positive_raw': 637.066247151688, 'positive': 832.0, 'tests': 22068.0
    },
    {'date': 1601510400000.0, 'mean': 0.902932998567184, 'median': 0.9010883314595868, 'lower_80': 0.8296267611615818, 'upper_80': 0.979235723015913, 'infections': 968.1886245498698, 'test_adjusted_positive': 1416.6450160285858, 'test_adjusted_positive_raw': 267.43772774883246, 'positive': 595.0, 'tests': 37594.0
    },
    {'date': 1601596800000.0, 'mean': 0.9114443786029663, 'median': 0.9097650573809417, 'lower_80': 0.8274622979588396, 'upper_80': 0.978606990550195, 'infections': 946.5494416130648, 'test_adjusted_positive': 1380.7638222359888, 'test_adjusted_positive_raw': 1163.1646974672105, 'positive': 1028.0, 'tests': 14934.0
    },
    {'date': 1601683200000.0, 'mean': 0.9220162499210486, 'median': 0.9178973890310815, 'lower_80': 0.8359894489640637, 'upper_80': 0.9921943024320472, 'infections': 927.1492383160809, 'test_adjusted_positive': 1345.1608805223375, 'test_adjusted_positive_raw': 3501.8265296756194, 'positive': 2926.0, 'tests': 14119.0
    },
    {'date': 1601769600000.0, 'mean': 0.9318137835142031, 'median': 0.9304108658924919, 'lower_80': 0.8542245342155929, 'upper_80': 1.017114844461302, 'infections': 910.015991194946, 'test_adjusted_positive': 1310.12494826825, 'test_adjusted_positive_raw': 2399.527783596575, 'positive': 1162.0, 'tests': 7893.0
    },
    {'date': 1601856000000.0, 'mean': 0.9415709366395959, 'median': 0.9414213005570691, 'lower_80': 0.8518609991781169, 'upper_80': 1.0101801184077486, 'infections': 895.0186659266808, 'test_adjusted_positive': 1275.8820018378822, 'test_adjusted_positive_raw': 457.80708231086186, 'positive': 510.0, 'tests': 18824.0
    },
    {'date': 1601942400000.0, 'mean': 0.951922023895765, 'median': 0.951268338689649, 'lower_80': 0.871953703998971, 'upper_80': 1.0327987317714171, 'infections': 882.0903683487618, 'test_adjusted_positive': 1242.609603606017, 'test_adjusted_positive_raw': 1230.7388631872277, 'positive': 596.0, 'tests': 7467.0
    },
    {'date': 1602028800000.0, 'mean': 0.9599126842251188, 'median': 0.9579165795214786, 'lower_80': 0.8814447085970069, 'upper_80': 1.0395063926261097, 'infections': 871.0814541433607, 'test_adjusted_positive': 1210.4518561002367, 'test_adjusted_positive_raw': 1492.0630647065564, 'positive': 837.0, 'tests': 9479.0
    },
    {'date': 1602115200000.0, 'mean': 0.9677939601345047, 'median': 0.9653739137959656, 'lower_80': 0.8910227785427383, 'upper_80': 1.0491305180285948, 'infections': 861.9217551525617, 'test_adjusted_positive': 1179.5387691757383, 'test_adjusted_positive_raw': 1470.6355435661374, 'positive': 898.0, 'tests': 10318.0
    },
    {'date': 1602201600000.0, 'mean': 0.9744126767255092, 'median': 0.9713386827173056, 'lower_80': 0.8870825701581243, 'upper_80': 1.0517956482202862, 'infections': 854.4204784985936, 'test_adjusted_positive': 1150.011209228205, 'test_adjusted_positive_raw': 467.25141991076316, 'positive': 574.0, 'tests': 20758.0
    },
    {'date': 1602288000000.0, 'mean': 0.9834954255452792, 'median': 0.9799041090511162, 'lower_80': 0.8934829856848038, 'upper_80': 1.0596174419954563, 'infections': 848.3421880803082, 'test_adjusted_positive': 1122.0065668810528, 'test_adjusted_positive_raw': 858.3811062431171, 'positive': 623.0, 'tests': 12264.0
    },
    {'date': 1602374400000.0, 'mean': 0.9905761289270771, 'median': 0.9882313934874276, 'lower_80': 0.9046084247333742, 'upper_80': 1.0619429909733087, 'infections': 843.5069294335682, 'test_adjusted_positive': 1095.6457685331554, 'test_adjusted_positive_raw': 621.9574929261729, 'positive': 588.0, 'tests': 15975.0
    },
    {'date': 1602460800000.0, 'mean': 0.9980494165871154, 'median': 0.9943294397666246, 'lower_80': 0.905364205150616, 'upper_80': 1.0722754131392231, 'infections': 839.9971095414118, 'test_adjusted_positive': 1071.0280178210583, 'test_adjusted_positive_raw': 520.1238486103601, 'positive': 564.0, 'tests': 18323.0
    },
    {'date': 1602547200000.0, 'mean': 1.0068349243716053, 'median': 1.0062649046719638, 'lower_80': 0.9142051038888217, 'upper_80': 1.0815033538308827, 'infections': 837.8321057690662, 'test_adjusted_positive': 1048.2212438902552, 'test_adjusted_positive_raw': 651.4327239674892, 'positive': 591.0, 'tests': 15330.0
    },
    {'date': 1602633600000.0, 'mean': 1.0133175962117222, 'median': 1.0104846136516423, 'lower_80': 0.9348613281953694, 'upper_80': 1.0967161411260455, 'infections': 836.8922301079673, 'test_adjusted_positive': 1027.2680293729788, 'test_adjusted_positive_raw': 1049.7071912626293, 'positive': 657.0, 'tests': 10576.0
    },
    {'date': 1602720000000.0, 'mean': 1.0187468886898798, 'median': 1.0142886329159442, 'lower_80': 0.9385554465106062, 'upper_80': 1.1027397746468837, 'infections': 837.2787631393049, 'test_adjusted_positive': 1008.1852515662428, 'test_adjusted_positive_raw': 589.7963234994709, 'positive': 931.0, 'tests': 26673.0
    },
    {'date': 1602806400000.0, 'mean': 1.0248270382386424, 'median': 1.0245192839625399, 'lower_80': 0.9306204309242444, 'upper_80': 1.0948884820276832, 'infections': 838.9098627052473, 'test_adjusted_positive': 990.9544407047518, 'test_adjusted_positive_raw': 510.5196348384731, 'positive': 405.0, 'tests': 13405.0
    },
    {'date': 1602892800000.0, 'mean': 1.0304181737851874, 'median': 1.0265830733908867, 'lower_80': 0.9438248698560586, 'upper_80': 1.111574170713974, 'infections': 841.521951884143, 'test_adjusted_positive': 975.5242564516134, 'test_adjusted_positive_raw': 1105.494863868229, 'positive': 891.0, 'tests': 13619.0
    },
    {'date': 1602979200000.0, 'mean': 1.033384374014332, 'median': 1.0316806857016854, 'lower_80': 0.9579344206686173, 'upper_80': 1.1264700114934147, 'infections': 845.0474955522544, 'test_adjusted_positive': 961.8369935027856, 'test_adjusted_positive_raw': 632.694388421893, 'positive': 492.0, 'tests': 13140.0
    },
    {'date': 1603065600000.0, 'mean': 1.0376175790906943, 'median': 1.0355104828083295, 'lower_80': 0.9504863511293614, 'upper_80': 1.121153929485178, 'infections': 849.4840956380461, 'test_adjusted_positive': 949.8361548482936, 'test_adjusted_positive_raw': 466.12605535853265, 'positive': 466.0, 'tests': 16893.0
    },
    {'date': 1603152000000.0, 'mean': 1.0403656068638107, 'median': 1.0399002214655289, 'lower_80': 0.9603482428220088, 'upper_80': 1.1294755987603782, 'infections': 854.6083637300557, 'test_adjusted_positive': 939.4627303431649, 'test_adjusted_positive_raw': 1162.593926131559, 'positive': 563.0, 'tests': 7540.0
    },
    {'date': 1603238400000.0, 'mean': 1.046772995612838, 'median': 1.0448344103203466, 'lower_80': 0.9555284985487622, 'upper_80': 1.1292270668002256, 'infections': 860.3022145474632, 'test_adjusted_positive': 930.6667865372361, 'test_adjusted_positive_raw': 797.3101478550552, 'positive': 590.0, 'tests': 12504.0
    },
    {'date': 1603324800000.0, 'mean': 1.0515702274297545, 'median': 1.0532238364932067, 'lower_80': 0.9602509615126981, 'upper_80': 1.1358931708575077, 'infections': 866.5611362269325, 'test_adjusted_positive': 923.4030091310389, 'test_adjusted_positive_raw': 996.3167289616441, 'positive': 1051.0, 'tests': 17825.0
    },
    {'date': 1603411200000.0, 'mean': 1.055013648338025, 'median': 1.0548589795198073, 'lower_80': 0.9610428621891786, 'upper_80': 1.1395551463053248, 'infections': 873.6196298763855, 'test_adjusted_positive': 917.612520003503, 'test_adjusted_positive_raw': 830.5832675701788, 'positive': 1194.0, 'tests': 24291.0
    },
    {'date': 1603497600000.0, 'mean': 1.0570127281235078, 'median': 1.055195360118239, 'lower_80': 0.9702477625687241, 'upper_80': 1.1427725746377357, 'infections': 881.6392423034774, 'test_adjusted_positive': 913.2272380180902, 'test_adjusted_positive_raw': 1295.4852744019472, 'positive': 875.0, 'tests': 11413.0
    },
    {'date': 1603584000000.0, 'mean': 1.0604301941660403, 'median': 1.057902020698826, 'lower_80': 0.9655620873632149, 'upper_80': 1.1484105785023089, 'infections': 890.4315888637516, 'test_adjusted_positive': 910.1796639837829, 'test_adjusted_positive_raw': 1578.0163471831793, 'positive': 1110.0, 'tests': 11886.0
    },
    {'date': 1603670400000.0, 'mean': 1.0660437483542844, 'median': 1.0648480464089456, 'lower_80': 0.968122730652588, 'upper_80': 1.1386103301016306, 'infections': 899.7466925801327, 'test_adjusted_positive': 908.3917322721225, 'test_adjusted_positive_raw': 416.4533634669814, 'positive': 407.0, 'tests': 16514.0
    },
    {'date': 1603756800000.0, 'mean': 1.0657432727232061, 'median': 1.061444950856492, 'lower_80': 0.9669478534183032, 'upper_80': 1.1438298112234089, 'infections': 909.626103014346, 'test_adjusted_positive': 907.7786176588974, 'test_adjusted_positive_raw': 1098.514099740568, 'positive': 798.0, 'tests': 12275.0
    },
    {'date': 1603843200000.0, 'mean': 1.0689131526117102, 'median': 1.0662030957363209, 'lower_80': 0.9767887431085269, 'upper_80': 1.1486127301282674, 'infections': 920.370324221419, 'test_adjusted_positive': 908.2551407143482, 'test_adjusted_positive_raw': 642.0265056053771, 'positive': 633.0, 'tests': 16660.0
    },
    {'date': 1603929600000.0, 'mean': 1.070429040954653, 'median': 1.0673105641948615, 'lower_80': 0.9717543719728118, 'upper_80': 1.1501711689598209, 'infections': 931.7162039714968, 'test_adjusted_positive': 909.7562347002206, 'test_adjusted_positive_raw': 1022.723818717689, 'positive': 1130.0, 'tests': 18670.0
    },
    {'date': 1604016000000.0, 'mean': 1.073871820229669, 'median': 1.0710106465008251, 'lower_80': 0.9845823739583212, 'upper_80': 1.161145007516219, 'infections': 943.4848850913825, 'test_adjusted_positive': 912.2461841154003, 'test_adjusted_positive_raw': 742.6281802720351, 'positive': 735.0, 'tests': 16724.0
    },
    {'date': 1604102400000.0, 'mean': 1.074497579231515, 'median': 1.0712679156547624, 'lower_80': 0.9896965387885163, 'upper_80': 1.1625951757340747, 'infections': 955.7735267486414, 'test_adjusted_positive': 915.6964289578065, 'test_adjusted_positive_raw': 1025.3852007058338, 'positive': 843.0, 'tests': 13892.0
    },
    {'date': 1604188800000.0, 'mean': 1.0751820539863544, 'median': 1.0719025966117388, 'lower_80': 0.9894537626486591, 'upper_80': 1.161806925674536, 'infections': 968.693112599533, 'test_adjusted_positive': 920.0637256603849, 'test_adjusted_positive_raw': 669.8135713945684, 'positive': 792.0, 'tests': 19980.0
    },
    {'date': 1604275200000.0, 'mean': 1.0733805873666895, 'median': 1.0726274767497703, 'lower_80': 0.9752997770038273, 'upper_80': 1.151357311649975, 'infections': 982.1615081282677, 'test_adjusted_positive': 925.3029065477629, 'test_adjusted_positive_raw': 1371.5300501008444, 'positive': 687.0, 'tests': 8464.0
    },
    {'date': 1604361600000.0, 'mean': 1.0734841385291434, 'median': 1.0698683921493948, 'lower_80': 0.9753089731625971, 'upper_80': 1.1504064385287645, 'infections': 995.9797722251448, 'test_adjusted_positive': 931.3928985097845, 'test_adjusted_positive_raw': 601.9558533011165, 'positive': 675.0, 'tests': 18948.0
    },
    {'date': 1604448000000.0, 'mean': 1.0733973601673787, 'median': 1.0720332515270155, 'lower_80': 0.9927713098284284, 'upper_80': 1.169126635679674, 'infections': 1009.8813909331831, 'test_adjusted_positive': 938.31050051949, 'test_adjusted_positive_raw': 677.187568418475, 'positive': 759.0, 'tests': 18939.0
    },
    {'date': 1604534400000.0, 'mean': 1.073656495128173, 'median': 1.071308035128074, 'lower_80': 0.9862229047595111, 'upper_80': 1.1580971401097877, 'infections': 1023.8157513280713, 'test_adjusted_positive': 946.0185699955896, 'test_adjusted_positive_raw': 867.3918137614974, 'positive': 759.0, 'tests': 14786.0
    },
    {'date': 1604620800000.0, 'mean': 1.0749682786282024, 'median': 1.0726179431242626, 'lower_80': 0.9859527323856742, 'upper_80': 1.1510227048972748, 'infections': 1037.9090304740212, 'test_adjusted_positive': 954.4792208274813, 'test_adjusted_positive_raw': 1167.7431237433398, 'positive': 1144.0, 'tests': 16554.0
    },
    {'date': 1604707200000.0, 'mean': 1.0765033391516026, 'median': 1.0781270341837987, 'lower_80': 0.9786559576658164, 'upper_80': 1.1448450087478237, 'infections': 1052.2450298017397, 'test_adjusted_positive': 963.6674339658969, 'test_adjusted_positive_raw': 653.5554072389016, 'positive': 868.0, 'tests': 22442.0
    },
    {'date': 1604793600000.0, 'mean': 1.0774904935756422, 'median': 1.0736339969106945, 'lower_80': 0.9818238434816369, 'upper_80': 1.149554348947531, 'infections': 1066.927473311945, 'test_adjusted_positive': 973.5613805137791, 'test_adjusted_positive_raw': 481.5284376510887, 'positive': 732.0, 'tests': 25687.0
    },
    {'date': 1604880000000.0, 'mean': 1.077671708686058, 'median': 1.077217146602118, 'lower_80': 0.9958504258358575, 'upper_80': 1.157059518574063, 'infections': 1082.0614097467342, 'test_adjusted_positive': 984.1293850698241, 'test_adjusted_positive_raw': 1087.4673531979774, 'positive': 832.0, 'tests': 12928.0
    },
    {'date': 1604966400000.0, 'mean': 1.0784195706457333, 'median': 1.07584656372928, 'lower_80': 0.996653759785658, 'upper_80': 1.1630445298791194, 'infections': 1097.6153657005345, 'test_adjusted_positive': 995.3140649652886, 'test_adjusted_positive_raw': 1040.71478637393, 'positive': 778.0, 'tests': 12632.0
    },
    {'date': 1605052800000.0, 'mean': 1.0813895161715612, 'median': 1.0772893574994091, 'lower_80': 0.9916059695628774, 'upper_80': 1.1643685197246358, 'infections': 1113.4850970532568, 'test_adjusted_positive': 1007.046270210016, 'test_adjusted_positive_raw': 2151.728012485052, 'positive': 1042.0, 'tests': 7843.0
    },
    {'date': 1605139200000.0, 'mean': 1.0826912940610895, 'median': 1.0786158169260225, 'lower_80': 0.9925889011740058, 'upper_80': 1.1651504608633012, 'infections': 1129.7000871072314, 'test_adjusted_positive': 1019.2660188894791, 'test_adjusted_positive_raw': 1285.3169930717256, 'positive': 2128.0, 'tests': 27976.0
    },
    {'date': 1605225600000.0, 'mean': 1.0832337327920174, 'median': 1.0828346809424083, 'lower_80': 0.9784348953025596, 'upper_80': 1.1511563189449283, 'infections': 1146.5621394411057, 'test_adjusted_positive': 1031.9255653498403, 'test_adjusted_positive_raw': 1479.4360428453908, 'positive': 1461.0, 'tests': 16687.0
    },
    {'date': 1605312000000.0, 'mean': 1.084741665293127, 'median': 1.0823358484769936, 'lower_80': 0.9920040341190418, 'upper_80': 1.165275360335375, 'infections': 1164.1469679792046, 'test_adjusted_positive': 1044.9932398510762, 'test_adjusted_positive_raw': 571.5347314919375, 'positive': 1180.0, 'tests': 34887.0
    },
    {'date': 1605398400000.0, 'mean': 1.0849042474828081, 'median': 1.0843505880921032, 'lower_80': 0.9952981637362094, 'upper_80': 1.1695113813489721, 'infections': 1182.2474983744517, 'test_adjusted_positive': 1058.456814654771, 'test_adjusted_positive_raw': 1757.3133767992126, 'positive': 851.0, 'tests': 0.0
    },
    {'date': 1605484800000.0, 'mean': 1.0866933274847264, 'median': 1.0841862489881138, 'lower_80': 1.0024397352131185, 'upper_80': 1.1801512497307254, 'infections': 1200.837641046019, 'test_adjusted_positive': 1072.3145022943581, 'test_adjusted_positive_raw': 1309.1436610693402, 'positive': 1198.0, 'tests': 15463.0
    },
    {'date': 1605571200000.0, 'mean': 1.088505338376465, 'median': 1.0874016102795294, 'lower_80': 0.9896132752416643, 'upper_80': 1.1752677425774438, 'infections': 1219.8821287482413, 'test_adjusted_positive': 1086.5619707560043, 'test_adjusted_positive_raw': 858.9401013275566, 'positive': 1127.0, 'tests': 22171.0
    },
    {'date': 1605657600000.0, 'mean': 1.0863302936918084, 'median': 1.0817143791620674, 'lower_80': 0.9822172183598828, 'upper_80': 1.1643307630773851, 'infections': 1239.4733090888856, 'test_adjusted_positive': 1101.1960762603537, 'test_adjusted_positive_raw': 425.57162100151754, 'positive': 788.0, 'tests': 31288.0
    },
    {'date': 1605744000000.0, 'mean': 1.0870363094968756, 'median': 1.0837095920592579, 'lower_80': 0.9963691542020733, 'upper_80': 1.1739209904498384, 'infections': 1259.7816760385278, 'test_adjusted_positive': 1116.234707671805, 'test_adjusted_positive_raw': 1509.4010092570404, 'positive': 2463.0, 'tests': 27573.0
    },
    {'date': 1605830400000.0, 'mean': 1.084479469722572, 'median': 1.0779474770287067, 'lower_80': 0.993909884493751, 'upper_80': 1.1704700570681603, 'infections': 1280.4114998293496, 'test_adjusted_positive': 1131.7129311876333, 'test_adjusted_positive_raw': 989.2096721626739, 'positive': 1673.0, 'tests': 28578.0
    },
    {'date': 1605916800000.0, 'mean': 1.0850048004260564, 'median': 1.0820472893016366, 'lower_80': 0.9872454200665408, 'upper_80': 1.1687206468223061, 'infections': 1301.1904212784236, 'test_adjusted_positive': 1147.6588880297868, 'test_adjusted_positive_raw': 1356.8171098980808, 'positive': 1906.0, 'tests': 23737.0
    },
    {'date': 1606003200000.0, 'mean': 1.0847250383133373, 'median': 1.0808753790293197, 'lower_80': 0.9919853465978887, 'upper_80': 1.1815512155747177, 'infections': 1322.0119942445913, 'test_adjusted_positive': 1164.090741760461, 'test_adjusted_positive_raw': 986.5702927517502, 'positive': 1787.0, 'tests': 30607.0
    },
    {'date': 1606089600000.0, 'mean': 1.0848298973648833, 'median': 1.0817891940313824, 'lower_80': 0.9814570256934672, 'upper_80': 1.1700039195075695, 'infections': 1342.9427282296463, 'test_adjusted_positive': 1181.0173869393743, 'test_adjusted_positive_raw': 496.2440574672818, 'positive': 864.0, 'tests': 29420.0
    },
    {'date': 1606176000000.0, 'mean': 1.082912325622505, 'median': 1.0825509675692007, 'lower_80': 0.9836687370916927, 'upper_80': 1.1667295805779354, 'infections': 1364.2067529371707, 'test_adjusted_positive': 1198.4493135471603, 'test_adjusted_positive_raw': 1347.6033673113418, 'positive': 1488.0, 'tests': 18658.0
    },
    {'date': 1606262400000.0, 'mean': 1.0818715218293633, 'median': 1.0786341300578022, 'lower_80': 0.9956185737324955, 'upper_80': 1.179830897779304, 'infections': 1385.8368395884231, 'test_adjusted_positive': 1216.4103291846122, 'test_adjusted_positive_raw': 1698.0213626521058, 'positive': 2445.0, 'tests': 24331.0
    },
    {'date': 1606348800000.0, 'mean': 1.0827899720230862, 'median': 1.0805236564237286, 'lower_80': 0.9914517381755547, 'upper_80': 1.1740507890393455, 'infections': 1407.5783330545855, 'test_adjusted_positive': 1234.9029836040568, 'test_adjusted_positive_raw': 1617.396070439822, 'positive': 2300.0, 'tests': 24029.0
    },
    {'date': 1606435200000.0, 'mean': 1.0825643531034699, 'median': 1.0808846324293788, 'lower_80': 0.9981940446100201, 'upper_80': 1.1770905529117612, 'infections': 1429.2779819899815, 'test_adjusted_positive': 1253.9028848396915, 'test_adjusted_positive_raw': 239.34575912331218, 'positive': 596.0, 'tests': 42077.0
    },
    {'date': 1606521600000.0, 'mean': 1.0826447136282278, 'median': 1.0814161507602187, 'lower_80': 0.9956934836334453, 'upper_80': 1.1749046745500735, 'infections': 1451.2622335385247, 'test_adjusted_positive': 1273.3670339470282, 'test_adjusted_positive_raw': 407.0292314769792, 'positive': 278.0, 'tests': 11541.0
    },
    {'date': 1606608000000.0, 'mean': 1.083559143555555, 'median': 1.0829336200237718, 'lower_80': 0.9864406906535705, 'upper_80': 1.161132362219258, 'infections': 1473.72515963142, 'test_adjusted_positive': 1293.2487391698962, 'test_adjusted_positive_raw': 1689.168439743544, 'positive': 818.0, 'tests': 7895.0
    },
    {'date': 1606694400000.0, 'mean': 1.0847031030067507, 'median': 1.0841326521869408, 'lower_80': 0.9966469914737242, 'upper_80': 1.1667567276828434, 'infections': 1496.5978778772028, 'test_adjusted_positive': 1313.516781529386, 'test_adjusted_positive_raw': 1745.0594508742179, 'positive': 2821.0, 'tests': 27316.0
    },
    {'date': 1606780800000.0, 'mean': 1.085557062865118, 'median': 1.083008190984649, 'lower_80': 0.99180415197971, 'upper_80': 1.165885805492856, 'infections': 1519.939682386691, 'test_adjusted_positive': 1334.156638966821, 'test_adjusted_positive_raw': 2248.5283969608736, 'positive': 3245.0, 'tests': 24386.0
    },
    {'date': 1606867200000.0, 'mean': 1.08434595625337, 'median': 1.0808025378265764, 'lower_80': 0.9936028587869291, 'upper_80': 1.1762806298276596, 'infections': 1543.8971820461377, 'test_adjusted_positive': 1355.1429211608367, 'test_adjusted_positive_raw': 1256.5068685986955, 'positive': 1232.0, 'tests': 16568.0
    },
    {'date': 1606953600000.0, 'mean': 1.0843166696774769, 'median': 1.0809906653771688, 'lower_80': 0.993479109579139, 'upper_80': 1.1697518116094736, 'infections': 1568.4796075874904, 'test_adjusted_positive': 1376.4364228391416, 'test_adjusted_positive_raw': 1305.6517314393984, 'positive': 2133.0, 'tests': 27605.0
    },
    {'date': 1607040000000.0, 'mean': 1.083437745936667, 'median': 1.0809390052703458, 'lower_80': 0.9832856676159709, 'upper_80': 1.159389918166607, 'infections': 1593.343812661191, 'test_adjusted_positive': 1398.0143473472444, 'test_adjusted_positive_raw': 1408.130803499945, 'positive': 2708.0, 'tests': 32496.0
    },
    {'date': 1607126400000.0, 'mean': 1.084926928702959, 'median': 1.0794443324781504, 'lower_80': 0.9995520439517409, 'upper_80': 1.1785734630415596, 'infections': 1618.405766422506, 'test_adjusted_positive': 1419.8784829767217, 'test_adjusted_positive_raw': 1396.7749099233324, 'positive': 2132.0, 'tests': 25792.0
    },
    {'date': 1607212800000.0, 'mean': 1.0843922033515532, 'median': 1.0798347573951521, 'lower_80': 0.98215237293041, 'upper_80': 1.1693243727022973, 'infections': 1643.7246848424372, 'test_adjusted_positive': 1442.0418382838295, 'test_adjusted_positive_raw': 1963.3783816969883, 'positive': 2510.0, 'tests': 21602.0
    },
    {'date': 1607299200000.0, 'mean': 1.08194645906103, 'median': 1.0773287442853157, 'lower_80': 0.9836651860254373, 'upper_80': 1.1680494002921258, 'infections': 1669.5501307827647, 'test_adjusted_positive': 1464.5240114625014, 'test_adjusted_positive_raw': 1915.0782469860126, 'positive': 2509.0, 'tests': 22138.0
    },
    {'date': 1607385600000.0, 'mean': 1.078139534803156, 'median': 1.0744468867546215, 'lower_80': 0.9857623340211125, 'upper_80': 1.1645882519433584, 'infections': 1695.8963327656209, 'test_adjusted_positive': 1487.3572515824926, 'test_adjusted_positive_raw': 988.1208880930814, 'positive': 1688.0, 'tests': 28866.0
    },
    {'date': 1607472000000.0, 'mean': 1.077293311882641, 'median': 1.0744028719625285, 'lower_80': 0.993855077123438, 'upper_80': 1.168927943126347, 'infections': 1722.1536196071195, 'test_adjusted_positive': 1510.579125460324, 'test_adjusted_positive_raw': 1392.432248054952, 'positive': 1567.0, 'tests': 19016.0
    },
    {'date': 1607558400000.0, 'mean': 1.0744701429614356, 'median': 1.0738129090054978, 'lower_80': 0.9857225357763566, 'upper_80': 1.162226736211564, 'infections': 1747.7445175686653, 'test_adjusted_positive': 1534.2066534349497, 'test_adjusted_positive_raw': 1496.3576288494123, 'positive': 2602.0, 'tests': 29383.0
    },
    {'date': 1607644800000.0, 'mean': 1.0715607511534955, 'median': 1.0689670024326001, 'lower_80': 0.9711778178097188, 'upper_80': 1.1526727526384677, 'infections': 1772.8935907518594, 'test_adjusted_positive': 1558.2350266049598, 'test_adjusted_positive_raw': 1100.1212212446426, 'positive': 1957.0, 'tests': 30059.0
    },
    {'date': 1607731200000.0, 'mean': 1.0689254780251147, 'median': 1.0660276874551777, 'lower_80': 0.9763300286708897, 'upper_80': 1.1586929511822095, 'infections': 1797.7279993913296, 'test_adjusted_positive': 1582.6513705179998, 'test_adjusted_positive_raw': 1459.5318689399783, 'positive': 2636.0, 'tests': 30518.0
    },
    {'date': 1607817600000.0, 'mean': 1.0668453165252543, 'median': 1.0644176674280494, 'lower_80': 0.9710397631085893, 'upper_80': 1.1516597708282765, 'infections': 1821.9900433125583, 'test_adjusted_positive': 1607.4604519408479, 'test_adjusted_positive_raw': 878.9698788896137, 'positive': 1614.0, 'tests': 31028.0
    },
    {'date': 1607904000000.0, 'mean': 1.0628933509272647, 'median': 1.06277675095727, 'lower_80': 0.9787008761126033, 'upper_80': 1.1543721628324495, 'infections': 1845.6084124297329, 'test_adjusted_positive': 1632.6767380542885, 'test_adjusted_positive_raw': 752.6798065320987, 'positive': 1636.0, 'tests': 36728.0
    },
    {'date': 1607990400000.0, 'mean': 1.0610649271423698, 'median': 1.0610485170007906, 'lower_80': 0.976866732505999, 'upper_80': 1.1535849493997485, 'infections': 1868.6439202191689, 'test_adjusted_positive': 1658.2755764647798, 'test_adjusted_positive_raw': 1762.5035834483363, 'positive': 2338.0, 'tests': 22415.0
    },
    {'date': 1608076800000.0, 'mean': 1.0569075068123306, 'median': 1.056566917881648, 'lower_80': 0.9818870343278767, 'upper_80': 1.1567321532121633, 'infections': 1890.9065680952867, 'test_adjusted_positive': 1684.1693023255991, 'test_adjusted_positive_raw': 2169.566858176579, 'positive': 2269.0, 'tests': 17672.0
    },
    {'date': 1608163200000.0, 'mean': 1.0540375690012875, 'median': 1.051358599398764, 'lower_80': 0.9585695233959277, 'upper_80': 1.130194007595986, 'infections': 1912.4559138404286, 'test_adjusted_positive': 1710.2593083521385, 'test_adjusted_positive_raw': 2169.6094673212797, 'positive': 3812.0, 'tests': 29689.0
    },
    {'date': 1608249600000.0, 'mean': 1.0476572682942082, 'median': 1.0432222858277753, 'lower_80': 0.9603812486957998, 'upper_80': 1.137175756333947, 'infections': 1933.1829437942943, 'test_adjusted_positive': 1736.4587863772315, 'test_adjusted_positive_raw': 2982.542630703734, 'positive': 2269.0, 'tests': 12855.0
    },
    {'date': 1608336000000.0, 'mean': 1.0413918158618076, 'median': 1.0433123176766559, 'lower_80': 0.9575578693155202, 'upper_80': 1.1245158096378727, 'infections': 1952.8974776056598, 'test_adjusted_positive': 1762.6753888533838, 'test_adjusted_positive_raw': 1809.58571396718, 'positive': 2531.0, 'tests': 23634.0
    },
    {'date': 1608422400000.0, 'mean': 1.0359339824505969, 'median': 1.0360596506713522, 'lower_80': 0.9534252496472678, 'upper_80': 1.123315015783064, 'infections': 1971.0660754583582, 'test_adjusted_positive': 1788.812849371671, 'test_adjusted_positive_raw': 782.2636365428181, 'positive': 1854.0, 'tests': 40048.0
    },
    {'date': 1608508800000.0, 'mean': 1.030568455857772, 'median': 1.0296762784687588, 'lower_80': 0.9418933147168983, 'upper_80': 1.1136987371323241, 'infections': 1987.073129534969, 'test_adjusted_positive': 1814.7807825295106, 'test_adjusted_positive_raw': 1127.1598680559775, 'positive': 2179.0, 'tests': 32666.0
    },
    {'date': 1608595200000.0, 'mean': 1.026396286254942, 'median': 1.0236248335186628, 'lower_80': 0.9333955727652656, 'upper_80': 1.105823202310627, 'infections': 2000.912989147681, 'test_adjusted_positive': 1840.4873038198061, 'test_adjusted_positive_raw': 2936.2783025032722, 'positive': 3258.0, 'tests': 18749.0
    },
    {'date': 1608681600000.0, 'mean': 1.0195652163859852, 'median': 1.0160023519650212, 'lower_80': 0.9204002701028665, 'upper_80': 1.0958145818728948, 'infections': 2012.85101786498, 'test_adjusted_positive': 1865.8520685511614, 'test_adjusted_positive_raw': 1766.1710755969075, 'positive': 4024.0, 'tests': 38499.0
    },
    {'date': 1608768000000.0, 'mean': 1.012563016506997, 'median': 1.0081995395670635, 'lower_80': 0.9130435595806728, 'upper_80': 1.0883852873831055, 'infections': 2023.1341196206374, 'test_adjusted_positive': 1890.7972710538452, 'test_adjusted_positive_raw': 1140.9215159867163, 'positive': 2448.0, 'tests': 36256.0
    },
    {'date': 1608854400000.0, 'mean': 1.0088241158948335, 'median': 1.00671669736327, 'lower_80': 0.9164612138258809, 'upper_80': 1.0883119096116454, 'infections': 2031.3503236190104, 'test_adjusted_positive': 1915.2370340488235, 'test_adjusted_positive_raw': 469.6960909000823, 'positive': 1022.0, 'tests': 36767.0
    },
    {'date': 1608940800000.0, 'mean': 1.0050590818551004, 'median': 1.001436316481794, 'lower_80': 0.9148176251255908, 'upper_80': 1.0890405631088989, 'infections': 2036.9498704421715, 'test_adjusted_positive': 1939.0541012501758, 'test_adjusted_positive_raw': 154.29159517570486, 'positive': 263.0, 'tests': 28803.0
    },
    {'date': 1609027200000.0, 'mean': 0.9988627079073116, 'median': 0.9965586105716263, 'lower_80': 0.9108672215832949, 'upper_80': 1.0835321059253933, 'infections': 2040.4282259838392, 'test_adjusted_positive': 1962.0787221082073, 'test_adjusted_positive_raw': 882.5911056239461, 'positive': 839.0, 'tests': 16063.0
    },
    {'date': 1609113600000.0, 'mean': 0.9944106090333696, 'median': 0.9936609387949036, 'lower_80': 0.9013167963820752, 'upper_80': 1.0724382322918737, 'infections': 2042.3729049495469, 'test_adjusted_positive': 1984.116065414488, 'test_adjusted_positive_raw': 5251.08467537156, 'positive': 6663.0, 'tests': 21441.0
    },
    {'date': 1609200000000.0, 'mean': 0.9914129375485743, 'median': 0.9892054388712063, 'lower_80': 0.8962638762634905, 'upper_80': 1.0697010427048785, 'infections': 2042.4181379473864, 'test_adjusted_positive': 2004.9926469795669, 'test_adjusted_positive_raw': 2100.3416870956594, 'positive': 2259.0, 'tests': 18174.0
    },
    {'date': 1609286400000.0, 'mean': 0.9869905932709123, 'median': 0.9826770501565005, 'lower_80': 0.901734273119083, 'upper_80': 1.0703457765238393, 'infections': 2040.4554265086429, 'test_adjusted_positive': 2024.5778938011151, 'test_adjusted_positive_raw': 4451.280314563661, 'positive': 4787.0, 'tests': 18172.0
    },
    {'date': 1609372800000.0, 'mean': 0.9848295238807989, 'median': 0.9795779935177342, 'lower_80': 0.8981410300237351, 'upper_80': 1.0707573872682954, 'infections': 2037.0222217704202, 'test_adjusted_positive': 2042.7449016583512, 'test_adjusted_positive_raw': 1985.7292851236687, 'positive': 2999.0, 'tests': 25520.0
    },
    {'date': 1609459200000.0, 'mean': 0.9796480978350904, 'median': 0.9758286766502905, 'lower_80': 0.8926869661915258, 'upper_80': 1.065176362865572, 'infections': 2032.1919105462773, 'test_adjusted_positive': 2059.3372263603246, 'test_adjusted_positive_raw': 694.3040728410858, 'positive': 1713.0, 'tests': 41690.0
    },
    {'date': 1609545600000.0, 'mean': 0.9782784831389059, 'median': 0.974797727709548, 'lower_80': 0.8953608484118786, 'upper_80': 1.069390669685401, 'infections': 2026.0702773832927, 'test_adjusted_positive': 2074.2222677881623, 'test_adjusted_positive_raw': 2792.6279678933656, 'positive': 1930.0, 'tests': 11678.0
    },
    {'date': 1609632000000.0, 'mean': 0.9751768127206613, 'median': 0.9707963422711792, 'lower_80': 0.8886556008877224, 'upper_80': 1.0657365433460517, 'infections': 2018.5145749060032, 'test_adjusted_positive': 2087.336622470949, 'test_adjusted_positive_raw': 1688.3673614333222, 'positive': 4131.0, 'tests': 41344.0
    },
    {'date': 1609718400000.0, 'mean': 0.9715483498870008, 'median': 0.968782861071394, 'lower_80': 0.8673714786854965, 'upper_80': 1.0580338562014244, 'infections': 2009.7600911984357, 'test_adjusted_positive': 2098.634969947226, 'test_adjusted_positive_raw': 1484.1654993607203, 'positive': 2492.0, 'tests': 28372.0
    },
    {'date': 1609804800000.0, 'mean': 0.9698794685221069, 'median': 0.9657736729486324, 'lower_80': 0.8586760515816754, 'upper_80': 1.056236853589044, 'infections': 2000.073220159366, 'test_adjusted_positive': 2108.0748055193667, 'test_adjusted_positive_raw': 3712.691860276642, 'positive': 4620.0, 'tests': 21027.0
    },
    {'date': 1609891200000.0, 'mean': 0.9658420150498058, 'median': 0.9593781271662509, 'lower_80': 0.8575137866253253, 'upper_80': 1.061837276524802, 'infections': 1989.2353348266038, 'test_adjusted_positive': 2115.6521324563982, 'test_adjusted_positive_raw': 2656.451011306707, 'positive': 3596.0, 'tests': 22874.0
    },
    {'date': 1609977600000.0, 'mean': 0.963672127777252, 'median': 0.9595432212296008, 'lower_80': 0.8682518152635118, 'upper_80': 1.086464489993261, 'infections': 1977.44034472169, 'test_adjusted_positive': 2121.3918955644062, 'test_adjusted_positive_raw': 2381.7526733484783, 'positive': 3478.0, 'tests': 24675.0
    },
    {'date': 1610064000000.0, 'mean': 0.9609298195692344, 'median': 0.9558611875798602, 'lower_80': 0.8592668107219039, 'upper_80': 1.0748865287420655, 'infections': 1964.6932254270819, 'test_adjusted_positive': 2125.3436475175836, 'test_adjusted_positive_raw': 2008.5780584324796, 'positive': 3889.0, 'tests': 32717.0
    },
    {'date': 1610150400000.0, 'mean': 0.9601112285034746, 'median': 0.958391979125252, 'lower_80': 0.8331122231397199, 'upper_80': 1.063528440025587, 'infections': 1951.1075520665406, 'test_adjusted_positive': 2127.554528638197, 'test_adjusted_positive_raw': 1568.034640201922, 'positive': 3397.0, 'tests': 36607.0
    },
    {'date': 1610236800000.0, 'mean': 0.958660962510359, 'median': 0.9552363910489259, 'lower_80': 0.8245689629150903, 'upper_80': 1.0594314961626614, 'infections': 1936.8806454858573, 'test_adjusted_positive': 2128.078795789003, 'test_adjusted_positive_raw': 1388.423927618904, 'positive': 4192.0, 'tests': 51018.0
    },
    {'date': 1610323200000.0, 'mean': 0.9579709285282907, 'median': 0.9529605540756048, 'lower_80': 0.8323211659080016, 'upper_80': 1.0743946149004189, 'infections': 1922.4053203005149, 'test_adjusted_positive': 2126.995188316372, 'test_adjusted_positive_raw': 1541.7096155991724, 'positive': 2996.0, 'tests': 32837.0
    },
    {'date': 1610409600000.0, 'mean': 0.9576073411233895, 'median': 0.9513449895691194, 'lower_80': 0.8228128895377124, 'upper_80': 1.0745007743469122, 'infections': 1907.949211509959, 'test_adjusted_positive': 2124.381150843685, 'test_adjusted_positive_raw': 2928.1385223225125, 'positive': 6107.0, 'tests': 35242.0
    },
    {'date': 1610496000000.0, 'mean': 0.9569837498722863, 'median': 0.9530764762375981, 'lower_80': 0.8143275664502735, 'upper_80': 1.0727306062400035, 'infections': 1893.6180207438713, 'test_adjusted_positive': 2120.309135089666, 'test_adjusted_positive_raw': 1933.7233972447864, 'positive': 3157.0, 'tests': 27587.0
    },
    {'date': 1610582400000.0, 'mean': 0.9591284279902976, 'median': 0.9545806803394734, 'lower_80': 0.8014607635797466, 'upper_80': 1.0807487769681858, 'infections': 1879.6344448192124, 'test_adjusted_positive': 2114.847371200907, 'test_adjusted_positive_raw': 1035.9882622108823, 'positive': 2344.0, 'tests': 38232.0
    },
    {'date': 1610668800000.0, 'mean': 0.9604451633465564, 'median': 0.9582068908937575, 'lower_80': 0.8131567488403499, 'upper_80': 1.1020085886551538, 'infections': 1866.1589470802703, 'test_adjusted_positive': 2108.068549956853, 'test_adjusted_positive_raw': 4090.389323115285, 'positive': 7448.0, 'tests': 30768.0
    },
    {'date': 1610755200000.0, 'mean': 0.9620152194393147, 'median': 0.9548196452812361, 'lower_80': 0.7817814955251193, 'upper_80': 1.0886950159002762, 'infections': 1853.740614561016, 'test_adjusted_positive': 2100.0560353675673, 'test_adjusted_positive_raw': 2098.0104075690792, 'positive': 4936.0, 'tests': 39755.0
    },
    {'date': 1610841600000.0, 'mean': 0.9622922261213691, 'median': 0.9522471788474424, 'lower_80': 0.786899612758923, 'upper_80': 1.1077056581179032, 'infections': 1842.7696788408373, 'test_adjusted_positive': 2090.9203152402865, 'test_adjusted_positive_raw': 1576.7098433555723, 'positive': 3498.0, 'tests': 37488.0
    },
    {'date': 1610928000000.0, 'mean': 0.9619071659684334, 'median': 0.9552546802814031, 'lower_80': 0.7812487718347824, 'upper_80': 1.106709815207187, 'infections': 1833.2735106835219, 'test_adjusted_positive': 2080.793433821955, 'test_adjusted_positive_raw': 3829.8782736889243, 'positive': 3655.0, 'tests': 16126.0
    },
    {'date': 1611014400000.0, 'mean': 0.9611002502630782, 'median': 0.9523783442687079, 'lower_80': 0.7725638607657133, 'upper_80': 1.1032846298979861, 'infections': 1825.0914504444788, 'test_adjusted_positive': 2069.8251490841094, 'test_adjusted_positive_raw': 937.9501413723949, 'positive': 1945.0, 'tests': 35040.0
    },
    {'date': 1611100800000.0, 'mean': 0.9611762263607052, 'median': 0.9540280127185233, 'lower_80': 0.7851648420833648, 'upper_80': 1.1248255246186682, 'infections': 1817.8827911715061, 'test_adjusted_positive': 2058.1748889487967, 'test_adjusted_positive_raw': 2290.5605364267767, 'positive': 4644.0, 'tests': 34259.0
    },
    {'date': 1611187200000.0, 'mean': 0.9649942671898654, 'median': 0.9557067113279465, 'lower_80': 0.7844375920385535, 'upper_80': 1.146136794275982, 'infections': 1811.489477427448, 'test_adjusted_positive': 2046.0083865884483, 'test_adjusted_positive_raw': 2068.9420882181116, 'positive': 3707.0, 'tests': 30276.0
    },
    {'date': 1611273600000.0, 'mean': 0.9640436565065237, 'median': 0.9564865427095051, 'lower_80': 0.7700757600455346, 'upper_80': 1.128315494150731, 'infections': 1806.0895194452835, 'test_adjusted_positive': 2033.5231001593233, 'test_adjusted_positive_raw': 2137.351270644204, 'positive': 3866.0, 'tests': 30564.0
    },
    {'date': 1611360000000.0, 'mean': 0.9651984094405063, 'median': 0.9559617079519401, 'lower_80': 0.7770176041284799, 'upper_80': 1.1413246813981055, 'infections': 1802.6121335783755, 'test_adjusted_positive': 2020.9485592354235, 'test_adjusted_positive_raw': 819.9191777193914, 'positive': 1700.0, 'tests': 35035.0
    },
    {'date': 1611446400000.0, 'mean': 0.9663335988604155, 'median': 0.9589044017495937, 'lower_80': 0.7826162553088675, 'upper_80': 1.15496758691235, 'infections': 1800.933205048244, 'test_adjusted_positive': 2008.5187690296937, 'test_adjusted_positive_raw': 1626.464939043882, 'positive': 2670.0, 'tests': 27739.0
    },
    {'date': 1611532800000.0, 'mean': 0.9675481284211372, 'median': 0.9606282127709582, 'lower_80': 0.7539449389152815, 'upper_80': 1.1443794503070663, 'infections': 1800.5884758758407, 'test_adjusted_positive': 1996.4399483561488, 'test_adjusted_positive_raw': 559.3483258644619, 'positive': 1108.0, 'tests': 33472.0
    },
    {'date': 1611619200000.0, 'mean': 0.9689164880677912, 'median': 0.9609179698542917, 'lower_80': 0.7349751500254107, 'upper_80': 1.139805340842027, 'infections': 1801.776050555855, 'test_adjusted_positive': 1984.8697693151094, 'test_adjusted_positive_raw': 3553.018805364957, 'positive': 6770.0, 'tests': 32197.0
    },
    {'date': 1611705600000.0, 'mean': 0.9708290897664164, 'median': 0.9563204153729514, 'lower_80': 0.7504747576470923, 'upper_80': 1.1604087102959224, 'infections': 1804.902752428215, 'test_adjusted_positive': 1973.9146680176377, 'test_adjusted_positive_raw': 2217.4467770338692, 'positive': 4398.0, 'tests': 33514.0
    },
    {'date': 1611792000000.0, 'mean': 0.9708623641357447, 'median': 0.9617383186033557, 'lower_80': 0.7556946939777377, 'upper_80': 1.1625731471276202, 'infections': 1810.2657521832302, 'test_adjusted_positive': 1963.6594164232033, 'test_adjusted_positive_raw': 1615.8501803813551, 'positive': 3168.0, 'tests': 33129.0
    },
    {'date': 1611878400000.0, 'mean': 0.9702776817706996, 'median': 0.9593686365435061, 'lower_80': 0.7440012695770862, 'upper_80': 1.1557883176589308, 'infections': 1817.9726195760934, 'test_adjusted_positive': 1954.234541466003, 'test_adjusted_positive_raw': 1755.9244217058713, 'positive': 3457.0, 'tests': 33267.31921391124
    }
  ]

  return (
    <div>
      <RtChart title={"Houston"} data={data} />
    </div>
  )
}

const RtChartComponent = {
  title: "Atoms/RtCart",
  component: RtChart
}

export default RtChartComponent