(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("73927b55-e719-4774-a804-3946a6522b35");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '73927b55-e719-4774-a804-3946a6522b35' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"8233be12-e319-4211-8af7-490c5e075908":{"roots":{"references":[{"attributes":{},"id":"9980","type":"LinearScale"},{"attributes":{},"id":"9995","type":"ResetTool"},{"attributes":{},"id":"10011","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9994","type":"WheelZoomTool"},{"id":"9995","type":"ResetTool"}]},"id":"9996","type":"Toolbar"},{"attributes":{},"id":"10009","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"counts":[1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,1,1,1,2,1,1,1,3,3,1,1,1,1,1,1,2,3,1,1,1,2,1,1,1,2,1,2,3,3,3,1,2,4,2,3,1,1,2,2,2,1,5,7,4,3,3,4,4,2,1,1,2,1,1,1,1,1,1,1,1,3,3,2,5,1,5,5,4,4,1,10,6,7,4,6,5,4,1,1,2,3,1,1,1,1,1,4,2,1,3,1,6,3,6,4,5,5,4,10,8,4,6,3,6,3,4,2,1,1,1,2,1,1,4,5,2,9,5,9,9,10,16,9,11,8,10,9,9,7,8,6,4,6,2,3,1,1,3,2,3,5,3,4,6,4,9,9,18,15,10,15,17,19,18,13,12,10,12,10,11,5,5,1,3,2,1,1,1,1,1,2,3,5,9,6,8,8,11,12,17,24,23,26,23,32,17,29,16,17,15,7,4,1,5,6,2,2,1,2,1,1,4,2,4,4,4,6,12,17,25,15,25,29,21,28,34,27,23,35,19,22,17,13,12,8,4,5,6,5,4,3,1,1,2,2,4,2,6,3,8,13,12,24,28,19,43,38,33,42,39,40,30,31,25,17,16,19,17,15,4,3,3,3,4,1,2,1,1,1,2,3,7,7,9,15,16,21,31,31,43,37,46,56,55,60,51,48,49,42,39,22,25,19,23,13,8,3,4,3,1,1,3,3,3,5,10,12,23,29,37,38,44,47,50,62,62,65,74,67,59,53,49,40,31,19,26,19,14,7,6,1,2,1,1,2,2,7,8,13,14,15,36,36,43,51,66,76,79,82,76,73,84,74,80,68,65,41,32,35,31,21,11,10,7,1,5,1,1,1,2,2,3,3,8,9,9,19,27,23,36,60,53,62,88,80,94,88,104,105,108,93,61,68,56,41,42,32,21,18,13,6,6,1,3,1,2,1,4,5,8,9,17,28,31,33,50,48,74,89,102,103,122,127,112,97,110,94,94,91,60,53,50,29,17,17,12,3,4,2,2,1,1,2,3,3,3,3,12,9,16,32,33,47,58,62,82,106,111,127,121,159,135,133,123,125,91,102,91,74,65,28,26,26,19,10,4,10,3,2,1,1,1,1,3,5,8,12,5,23,33,33,55,70,70,79,96,164,146,145,149,165,165,137,132,110,104,83,74,63,37,29,16,14,15,6,2,6,2,1,2,1,2,1,1,7,4,10,17,26,31,41,48,68,81,107,106,134,171,146,149,144,179,155,175,139,123,100,84,69,67,30,29,15,14,5,6,3,1,2,2,4,7,2,7,13,15,32,25,43,65,76,106,117,116,134,170,172,182,200,187,179,164,139,108,103,81,63,48,37,21,12,11,7,6,2,1,1,2,2,4,6,12,18,18,30,46,57,68,91,110,131,178,176,186,191,204,205,188,170,166,141,98,80,70,60,42,35,30,23,12,7,3,8,1,1,1,1,1,2,4,2,13,22,42,29,51,71,79,113,132,140,161,166,193,207,196,202,187,175,154,153,108,92,60,49,43,19,25,13,12,9,2,1,1,4,1,4,5,4,13,18,23,30,52,64,80,102,122,134,171,170,182,191,222,202,203,175,164,151,107,77,67,72,52,32,23,13,12,13,3,3,1,2,1,1,6,5,7,19,21,42,55,75,87,119,118,146,172,183,204,190,196,205,179,183,145,130,113,101,67,55,41,19,23,11,7,7,9,2,3,2,1,1,7,6,7,8,14,14,34,58,60,68,87,95,132,149,190,201,229,205,210,199,164,165,135,97,110,83,73,49,31,18,23,17,7,4,4,3,1,1,1,7,4,2,11,9,15,28,37,47,58,71,100,130,124,169,169,192,182,184,190,174,146,135,132,80,68,60,49,19,24,21,8,12,3,5,2,2,2,2,6,9,10,14,22,30,36,55,75,77,96,138,115,161,163,198,167,160,162,141,134,114,103,79,70,50,35,38,15,13,7,7,3,2,1,1,1,1,1,2,2,1,5,5,8,17,24,28,31,46,61,67,94,110,125,132,156,136,157,144,129,139,122,89,78,61,44,43,32,23,19,7,6,5,3,1,1,1,1,2,3,4,8,4,12,11,27,31,43,55,68,94,84,113,137,150,121,136,136,146,118,108,72,65,60,47,58,36,23,12,14,7,4,3,2,3,4,3,3,12,12,18,24,23,46,58,60,58,64,96,94,102,139,116,107,105,101,95,84,70,59,40,37,20,18,11,6,4,2,1,1,3,1,2,5,8,7,13,21,23,26,37,45,52,72,78,89,99,95,102,107,98,100,79,71,76,55,39,22,18,19,5,3,3,3,4,1,2,2,2,7,5,7,11,15,21,27,36,46,55,55,53,71,75,74,80,77,72,63,55,53,50,41,36,25,16,18,8,6,3,2,2,1,1,1,12,12,11,15,25,34,31,32,51,59,55,77,74,65,60,71,63,45,47,46,33,26,23,10,8,12,5,3,2,2,1,2,1,3,2,4,3,7,4,18,21,25,24,30,38,27,59,53,57,50,50,50,40,46,43,34,29,32,13,10,10,11,2,6,5,1,1,1,1,1,1,1,2,4,4,11,8,10,21,13,20,22,31,39,33,42,35,46,39,26,28,36,16,23,10,18,9,9,6,1,2,1,1,1,1,3,5,5,3,18,10,25,28,18,25,25,33,29,39,34,31,34,34,21,21,14,13,6,4,3,4,4,3,1,1,1,1,1,1,1,1,2,1,6,1,8,14,13,13,18,17,26,20,29,26,28,20,17,14,11,10,11,6,3,1,2,1,2,1,1,2,1,3,4,4,8,6,12,12,9,7,19,24,8,11,16,14,17,10,14,7,7,2,6,2,2,3,1,1,1,1,1,2,2,5,2,6,7,10,11,7,15,15,20,11,10,11,10,9,4,7,6,7,2,3,1,2,2,1,1,2,1,3,1,2,4,3,4,3,5,8,5,4,10,5,5,3,5,6,5,1,1,2,1,1,2,1,2,2,4,1,7,5,3,3,7,5,4,5,4,6,1,2,3,5,2,2,1,1,1,1,1,1,1,3,5,1,4,5,5,6,5,1,3,2,1,4,2,1,1,1,3,1,1,2,2,5,2,2,1,1,1,2,1,1,1,1,1,1,2,1,1,2,2,1,1,4,1,1,1,1,1,1,1,1,1,1,2,1,3,1,3,1,1,3,2,1,3,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,1416,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,1438,1439,1440,1441],"q":[-27,-27,-27,-26,-26,-26,-25,-24,-24,-24,-24,-24,-23,-23,-23,-22,-22,-22,-22,-22,-22,-22,-22,-22,-21,-21,-21,-21,-21,-21,-21,-21,-21,-21,-21,-21,-21,-21,-21,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,23,23,23,23,24,24,24,24,24,24,25,25,25,25,25,25,25,25,26,28],"r":[5,15,18,10,14,19,20,3,7,9,12,18,11,12,14,1,2,4,5,10,12,13,14,21,3,4,5,7,8,9,10,11,12,13,15,16,17,20,22,-4,1,2,3,4,6,7,8,10,11,12,13,14,15,16,18,-1,0,3,4,5,6,7,8,10,11,12,13,14,15,16,17,19,20,21,27,-7,-4,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,-9,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,21,22,-7,-6,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,24,-10,-8,-7,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,-13,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,28,-12,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,25,-13,-12,-10,-9,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,-13,-12,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,26,-14,-13,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,-16,-15,-14,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,26,27,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,-18,-17,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,24,25,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,-20,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,22,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,-21,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,-24,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,-23,-22,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,-22,-20,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,-23,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,-22,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,13,15,-24,-23,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,13,14,-24,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,12,13,14,-26,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,16,-23,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,-28,-26,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,9,11,-24,-22,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,-30,-25,-24,-23,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,8,9,-25,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,15,-23,-22,-21,-20,-19,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,6,8,-25,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,0,2,3,4,6,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,3,4,-26,-21,-19,-18,-17,-15,-14,-13,-12,-11,-10,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-21,-20,-19,-17,-15,-14,-13,-11,-10,-8,-7,-6,-5,-1,2,3,-27,-23,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-9,-7,-6,-3,-2,-1,0,1,7,-18,-17,-14,-13,-12,-11,-9,-7,-6,-3,-17,-9,-8,-5,-16,-15,-14,-13,-11,-5,-22,-20,-16,-14,-13,-6,-4,-2,-7,-13]},"selected":{"id":"10012","type":"Selection"},"selection_policy":{"id":"10013","type":"UnionRenderers"}},"id":"10000","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"9976","type":"DataRange1d"},{"attributes":{"formatter":{"id":"10009","type":"BasicTickFormatter"},"plot":{"id":"9975","subtype":"Figure","type":"Plot"},"ticker":{"id":"9985","type":"BasicTicker"}},"id":"9984","type":"LinearAxis"},{"attributes":{"formatter":{"id":"10011","type":"BasicTickFormatter"},"plot":{"id":"9975","subtype":"Figure","type":"Plot"},"ticker":{"id":"9990","type":"BasicTicker"}},"id":"9989","type":"LinearAxis"},{"attributes":{"high":229,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"9999","type":"LinearColorMapper"},{"attributes":{"callback":null},"id":"9978","type":"DataRange1d"},{"attributes":{},"id":"10012","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"9975","subtype":"Figure","type":"Plot"},"ticker":{"id":"9990","type":"BasicTicker"},"visible":false},"id":"9993","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"9984","type":"LinearAxis"}],"left":[{"id":"9989","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"9984","type":"LinearAxis"},{"id":"9988","type":"Grid"},{"id":"9989","type":"LinearAxis"},{"id":"9993","type":"Grid"},{"id":"10004","type":"GlyphRenderer"}],"title":{"id":"10007","type":"Title"},"toolbar":{"id":"9996","type":"Toolbar"},"x_range":{"id":"9976","type":"DataRange1d"},"x_scale":{"id":"9980","type":"LinearScale"},"y_range":{"id":"9978","type":"DataRange1d"},"y_scale":{"id":"9982","type":"LinearScale"}},"id":"9975","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"10000","type":"ColumnDataSource"}},"id":"10005","type":"CDSView"},{"attributes":{},"id":"9990","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"counts","transform":{"id":"9999","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.1},"id":"10002","type":"HexTile"},{"attributes":{},"id":"9982","type":"LinearScale"},{"attributes":{},"id":"10013","type":"UnionRenderers"},{"attributes":{},"id":"9985","type":"BasicTicker"},{"attributes":{"data_source":{"id":"10000","type":"ColumnDataSource"},"glyph":{"id":"10002","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10003","type":"HexTile"},"selection_glyph":null,"view":{"id":"10005","type":"CDSView"}},"id":"10004","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9975","subtype":"Figure","type":"Plot"},"ticker":{"id":"9985","type":"BasicTicker"},"visible":false},"id":"9988","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"10007","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.1},"id":"10003","type":"HexTile"},{"attributes":{},"id":"9994","type":"WheelZoomTool"}],"root_ids":["9975"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"8233be12-e319-4211-8af7-490c5e075908","roots":{"9975":"73927b55-e719-4774-a804-3946a6522b35"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();