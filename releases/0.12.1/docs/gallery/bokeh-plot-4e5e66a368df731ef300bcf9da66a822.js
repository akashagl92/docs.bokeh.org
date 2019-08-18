document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("b7879bf9-14cb-4d73-aee3-d0601ab8c215");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b7879bf9-14cb-4d73-aee3-d0601ab8c215' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"49af5cb2-7e46-4b18-9bd1-30423f7c721a":{"roots":{"references":[{"attributes":{},"id":"6b931684-1071-42e9-851e-5f76c05b10bd","type":"BasicTickFormatter"},{"attributes":{"months":[0,4,8]},"id":"691a665e-9cb4-4104-8677-00ea69df0f50","type":"MonthsTicker"},{"attributes":{},"id":"963e4186-0a89-40c0-a614-ad04a1a147c8","type":"ToolEvents"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"407bb630-8ff0-4dd7-937f-5f5cc617391d","type":"AdaptiveTicker"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"0185b5b1-f930-4ec1-81fa-6cc3b45407d3","type":"DatetimeTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"12.000000pt"},"plot":{"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"},"ticker":{"id":"1146fc43-65ac-48b5-b9e9-802da5880682","type":"DatetimeTicker"}},"id":"3961aadd-961f-490f-adcc-ea056df9a4c0","type":"DatetimeAxis"},{"attributes":{"days":[1,15]},"id":"31eb539a-fe3d-4d25-aa4c-245875c6ced6","type":"DaysTicker"},{"attributes":{},"id":"0185b5b1-f930-4ec1-81fa-6cc3b45407d3","type":"DatetimeTickFormatter"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"8fce2064-ee95-4050-81dd-4779c074abac","type":"AdaptiveTicker"},{"attributes":{"plot":{"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"}},"id":"b5abbdae-94f5-478c-84b7-037c4920a5e5","type":"PanTool"},{"attributes":{},"id":"fdb7076f-7661-478c-b045-69e328010016","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"},"ticker":{"id":"1146fc43-65ac-48b5-b9e9-802da5880682","type":"DatetimeTicker"}},"id":"92b4d037-4932-467c-bbed-71f4de96fad0","type":"Grid"},{"attributes":{},"id":"df59a8a1-212b-4dd6-8031-9862685431aa","type":"YearsTicker"},{"attributes":{"plot":{"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"}},"id":"4be6286e-76cf-4226-ae27-49db2930f9b0","type":"SaveTool"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"45bb07df-f250-4c0e-8430-8fa5b628d004","type":"MonthsTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"},"ticker":{"id":"fdb7076f-7661-478c-b045-69e328010016","type":"BasicTicker"}},"id":"a0594065-affa-43fc-baa6-1c2c61ffd839","type":"Grid"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"b0a74e30-0cd4-4ea3-8981-d8b86016239a","type":"DaysTicker"},{"attributes":{"data_source":{"id":"c49de668-3dff-46a6-a2ab-7081c1a58909","type":"ColumnDataSource"},"glyph":{"id":"a1d22ebd-d8a4-4d26-bfe1-5f0e21b921e8","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"86a28b8b-ef30-4153-ba28-79f7f5799be9","type":"GlyphRenderer"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"fbea350e-3c71-4e63-aeb9-1942d1b3603d","type":"AdaptiveTicker"},{"attributes":{"callback":null},"id":"d47c6370-6057-4f27-af6e-e11a686a64f2","type":"DataRange1d"},{"attributes":{"plot":{"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"}},"id":"41c88238-8ec0-4b91-85f8-23f97da081ff","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[709666.0,709697.0,709726.0,709757.0,709787.0,709818.0,709848.0,709879.0,709910.0,709940.0,709971.0,710001.0,710032.0,710063.0,710091.0,710122.0,710152.0,710183.0,710213.0,710244.0,710275.0,710305.0,710336.0,710366.0,710397.0,710428.0,710456.0,710487.0,710517.0,710548.0,710578.0,710609.0,710640.0,710670.0,710701.0,710731.0,710762.0,710793.0,710821.0,710852.0,710882.0,710913.0,710943.0,710974.0,711005.0,711035.0,711066.0,711096.0,711127.0,711158.0,711187.0,711218.0,711248.0,711279.0,711309.0,711340.0,711371.0,711401.0,711432.0,711462.0,711493.0,711524.0,711552.0,711583.0,711613.0,711644.0,711674.0,711705.0,711736.0,711766.0,711797.0,711827.0,711858.0,711889.0,711917.0,711948.0,711978.0,712009.0,712039.0,712070.0,712101.0,712131.0,712162.0,712192.0,712223.0,712254.0,712282.0,712313.0,712343.0,712374.0,712404.0,712435.0,712466.0,712496.0,712527.0,712557.0,712588.0,712619.0,712648.0,712679.0,712709.0,712740.0,712770.0,712801.0,712832.0,712862.0,712893.0,712923.0,712954.0,712985.0,713013.0,713044.0,713074.0,713105.0,713135.0,713166.0,713197.0,713227.0,713258.0,713288.0,713319.0,713350.0,713378.0,713409.0,713439.0,713470.0,713500.0,713531.0,713562.0,713592.0,713623.0,713653.0,713684.0,713715.0,713743.0,713774.0,713804.0,713835.0,713865.0,713896.0,713927.0,713957.0,713988.0,714018.0,714049.0,714080.0,714109.0,714140.0,714170.0,714201.0,714231.0,714262.0,714293.0,714323.0,714354.0,714384.0,714415.0,714446.0,714474.0,714505.0,714535.0,714566.0,714596.0,714627.0,714658.0,714688.0,714719.0,714749.0,714780.0,714811.0,714839.0,714870.0,714900.0,714931.0,714961.0,714992.0,715023.0,715053.0,715084.0,715114.0,715145.0,715176.0,715204.0,715235.0,715265.0,715296.0,715326.0,715357.0,715388.0,715418.0,715449.0,715479.0,715510.0,715541.0,715570.0,715601.0,715631.0,715662.0,715692.0,715723.0,715754.0,715784.0,715815.0,715845.0,715876.0,715907.0,715935.0,715966.0,715996.0,716027.0,716057.0,716088.0,716119.0,716149.0,716180.0,716210.0,716241.0,716272.0,716300.0,716331.0,716361.0,716392.0,716422.0,716453.0,716484.0,716514.0,716545.0,716575.0,716606.0,716637.0,716665.0,716696.0,716726.0,716757.0,716787.0,716818.0,716849.0,716879.0,716910.0,716940.0,716971.0,717002.0,717031.0,717062.0,717092.0,717123.0,717153.0,717184.0,717215.0,717245.0,717276.0,717306.0,717337.0,717368.0,717396.0,717427.0,717457.0,717488.0,717518.0,717549.0,717580.0,717610.0,717641.0,717671.0,717702.0,717733.0,717761.0,717792.0,717822.0,717853.0,717883.0,717914.0,717945.0,717975.0,718006.0,718036.0,718067.0,718098.0,718126.0,718157.0,718187.0,718218.0,718248.0,718279.0,718310.0,718340.0,718371.0,718401.0,718432.0,718463.0,718492.0,718523.0,718553.0,718584.0,718614.0,718645.0,718676.0,718706.0,718737.0,718767.0,718798.0,718829.0,718857.0,718888.0,718918.0,718949.0,718979.0,719010.0,719041.0,719071.0,719102.0,719132.0,719163.0,719194.0,719222.0,719253.0,719283.0,719314.0,719344.0,719375.0,719406.0,719436.0,719467.0,719497.0,719528.0,719559.0,719587.0,719618.0,719648.0,719679.0,719709.0,719740.0,719771.0,719801.0,719832.0,719862.0,719893.0,719924.0,719953.0,719984.0,720014.0,720045.0,720075.0,720106.0,720137.0,720167.0,720198.0,720228.0,720259.0,720290.0,720318.0,720349.0,720379.0,720410.0,720440.0,720471.0,720502.0,720532.0,720563.0,720593.0,720624.0,720655.0,720683.0,720714.0,720744.0,720775.0,720805.0,720836.0,720867.0,720897.0,720928.0,720958.0,720989.0,721020.0,721048.0,721079.0,721109.0,721140.0,721170.0,721201.0,721232.0,721262.0,721293.0,721323.0,721354.0,721385.0,721414.0,721445.0,721475.0,721506.0,721536.0,721567.0,721598.0,721628.0,721659.0,721689.0,721720.0,721751.0,721779.0,721810.0,721840.0,721871.0,721901.0,721932.0,721963.0,721993.0,722024.0,722054.0,722085.0,722116.0,722144.0,722175.0,722205.0,722236.0,722266.0,722297.0,722328.0,722358.0,722389.0,722419.0,722450.0,722481.0,722509.0,722540.0,722570.0,722601.0,722631.0,722662.0,722693.0,722723.0,722754.0,722784.0,722815.0,722846.0,722875.0,722906.0,722936.0,722967.0,722997.0,723028.0,723059.0,723089.0,723120.0,723150.0,723181.0,723212.0,723240.0,723271.0,723301.0,723332.0,723362.0,723393.0,723424.0,723454.0,723485.0,723515.0,723546.0,723577.0,723605.0,723636.0,723666.0,723697.0,723727.0,723758.0,723789.0,723819.0,723850.0,723880.0,723911.0,723942.0,723970.0,724001.0,724031.0,724062.0,724092.0,724123.0,724154.0,724184.0,724215.0,724245.0,724276.0,724307.0,724336.0,724367.0,724397.0,724428.0,724458.0,724489.0,724520.0,724550.0,724581.0,724611.0,724642.0,724673.0,724701.0,724732.0,724762.0,724793.0,724823.0,724854.0,724885.0,724915.0,724946.0,724976.0,725007.0,725038.0,725066.0,725097.0,725127.0,725158.0,725188.0,725219.0,725250.0,725280.0,725311.0,725341.0,725372.0,725403.0,725431.0,725462.0,725492.0,725523.0,725553.0,725584.0,725615.0,725645.0,725676.0,725706.0,725737.0,725768.0,725797.0,725828.0,725858.0,725889.0,725919.0,725950.0,725981.0,726011.0,726042.0,726072.0,726103.0,726134.0,726162.0,726193.0,726223.0,726254.0,726284.0,726315.0,726346.0,726376.0,726407.0,726437.0,726468.0,726499.0,726527.0,726558.0,726588.0,726619.0,726649.0,726680.0,726711.0,726741.0,726772.0,726802.0,726833.0,726864.0,726892.0,726923.0,726953.0,726984.0,727014.0,727045.0,727076.0,727106.0,727137.0,727167.0,727198.0,727229.0,727258.0,727289.0,727319.0,727350.0,727380.0,727411.0,727442.0,727472.0,727503.0,727533.0,727564.0,727595.0,727623.0,727654.0,727684.0,727715.0,727745.0,727776.0,727807.0,727837.0,727868.0,727898.0,727929.0,727960.0,727988.0,728019.0,728049.0,728080.0,728110.0,728141.0,728172.0,728202.0,728233.0,728263.0,728294.0,728325.0,728353.0,728384.0,728414.0,728445.0,728475.0,728506.0,728537.0,728567.0,728598.0,728628.0,728659.0,728690.0,728719.0,728750.0,728780.0,728811.0,728841.0,728872.0,728903.0,728933.0,728964.0,728994.0,729025.0,729056.0,729084.0,729115.0,729145.0,729176.0,729206.0,729237.0,729268.0,729298.0,729329.0,729359.0,729390.0,729421.0,729449.0,729480.0,729510.0,729541.0,729571.0,729602.0,729633.0,729663.0,729694.0,729724.0,729755.0,729786.0,729814.0,729845.0,729875.0,729906.0,729936.0,729967.0,729998.0,730028.0,730059.0,730089.0,730120.0,730151.0,730180.0,730211.0,730241.0,730272.0,730302.0,730333.0,730364.0,730394.0,730425.0,730455.0,730486.0,730517.0,730545.0,730576.0,730606.0,730637.0,730667.0,730698.0,730729.0,730759.0,730790.0,730820.0,730851.0,730882.0,730910.0,730941.0,730971.0,731002.0,731032.0,731063.0,731094.0,731124.0,731155.0,731185.0,731216.0,731247.0,731275.0,731306.0,731336.0,731367.0,731397.0,731428.0,731459.0,731489.0,731520.0,731550.0,731581.0,731612.0,731641.0,731672.0,731702.0,731733.0,731763.0,731794.0,731825.0,731855.0,731886.0,731916.0,731947.0,731978.0,732006.0,732037.0,732067.0,732098.0,732128.0,732159.0,732190.0,732220.0,732251.0,732281.0,732312.0,732343.0,732371.0,732402.0,732432.0,732463.0,732493.0,732524.0,732555.0,732585.0,732616.0,732646.0,732677.0,732708.0,732736.0,732767.0,732797.0,732828.0,732858.0,732889.0,732920.0,732950.0,732981.0,733011.0,733042.0,733073.0,733102.0,733133.0,733163.0,733194.0,733224.0,733255.0,733286.0,733316.0,733347.0,733377.0,733408.0,733439.0,733467.0,733498.0,733528.0,733559.0,733589.0,733620.0,733651.0,733681.0,733712.0,733742.0,733773.0,733804.0,733832.0,733863.0,733893.0,733924.0,733954.0,733985.0,734016.0,734046.0,734077.0,734107.0,734138.0,734169.0,734197.0,734228.0,734258.0,734289.0,734319.0,734350.0,734381.0,734411.0,734442.0,734472.0,734503.0,734534.0,734563.0,734594.0,734624.0,734655.0,734685.0,734716.0,734747.0,734777.0,734808.0],"Series 1":[751.0,713.0,741.0,650.0,681.0,658.0,662.0,787.0,774.0,834.0,786.0,764.0,820.0,816.0,836.0,736.0,747.0,739.0,736.0,858.0,910.0,1022.0,933.0,783.0,856.0,827.0,796.0,734.0,605.0,461.0,954.0,871.0,366.0,840.0,844.0,856.0,935.0,778.0,829.0,831.0,846.0,804.0,839.0,766.0,888.0,924.0,813.0,843.0,856.0,662.0,727.0,700.0,650.0,733.0,681.0,705.0,773.0,752.0,744.0,783.0,779.0,697.0,794.0,721.0,747.0,765.0,743.0,835.0,821.0,772.0,751.0,717.0,780.0,676.0,775.0,694.0,774.0,753.0,754.0,829.0,832.0,814.0,794.0,773.0,842.0,650.0,696.0,658.0,716.0,591.0,676.0,767.0,697.0,789.0,768.0,699.0,810.0,721.0,685.0,703.0,742.0,698.0,786.0,793.0,841.0,933.0,768.0,857.0,926.0,849.0,931.0,989.0,961.0,999.0,1034.0,1007.0,1085.0,1144.0,1037.0,1093.0,1076.0,921.0,1068.0,988.0,1007.0,1066.0,1078.0,1080.0,1098.0,1086.0,1059.0,1074.0,1073.0,924.0,1084.0,1013.0,1075.0,1144.0,1045.0,1227.0,1206.0,1172.0,1136.0,1114.0,1231.0,1087.0,1131.0,1122.0,1194.0,1172.0,1198.0,1202.0,1105.0,1304.0,1201.0,1143.0,1326.0,1082.0,1099.0,1085.0,1203.0,1086.0,1220.0,1196.0,1151.0,1268.0,1072.0,1064.0,1211.0,960.0,985.0,1023.0,1062.0,1078.0,1148.0,1079.0,1148.0,1220.0,978.0,1091.0,1127.0,946.0,1029.0,1099.0,1071.0,1109.0,1166.0,1083.0,1177.0,1186.0,1080.0,1160.0,1196.0,1089.0,1201.0,1066.0,1202.0,1247.0,1166.0,1307.0,1298.0,1263.0,1190.0,1149.0,1235.0,1086.0,1242.0,1137.0,1321.0,1333.0,1223.0,1344.0,1267.0,1336.0,1237.0,1169.0,1327.0,1111.0,1232.0,1141.0,1312.0,1275.0,1284.0,1343.0,1194.0,1357.0,1209.0,1146.0,1346.0,1171.0,1276.0,1304.0,1404.0,1311.0,1370.0,1397.0,1342.0,1513.0,1299.0,1316.0,1512.0,1301.0,1414.0,1515.0,1511.0,1589.0,1545.0,1477.0,1536.0,1623.0,1454.0,1560.0,1539.0,1365.0,1568.0,1423.0,1431.0,1530.0,1520.0,1567.0,1624.0,1603.0,1570.0,1585.0,1659.0,1468.0,1606.0,1508.0,1583.0,1700.0,1559.0,1736.0,1714.0,1668.0,1650.0,1642.0,1728.0,1540.0,1693.0,1595.0,1763.0,1748.0,1604.0,1738.0,1647.0,1726.0,1616.0,1593.0,1798.0,1633.0,1620.0,1638.0,1795.0,1645.0,1787.0,1798.0,1725.0,1917.0,1661.0,1647.0,1857.0,1631.0,1660.0,1667.0,1685.0,1666.0,1765.0,1734.0,1855.0,1995.0,1641.0,1804.0,1872.0,1644.0,1760.0,1783.0,1736.0,1807.0,1808.0,1734.0,1868.0,1913.0,1696.0,1851.0,1817.0,1617.0,1866.0,1771.0,1761.0,1914.0,1850.0,1836.0,1889.0,1824.0,1786.0,1768.0,1792.0,1711.0,1867.0,1717.0,1936.0,1913.0,1692.0,1987.0,1880.0,2013.0,1897.0,1813.0,1945.0,1675.0,1774.0,1483.0,1826.0,1740.0,1695.0,1662.0,1641.0,1996.0,1874.0,1778.0,1973.0,1603.0,1858.0,1853.0,1945.0,1839.0,1941.0,1953.0,1857.0,2151.0,1952.0,1918.0,2106.0,1845.0,1891.0,1895.0,1849.0,1849.0,1916.0,1961.0,2065.0,2270.0,1970.0,2055.0,2208.0,1966.0,2318.0,2015.0,1969.0,2161.0,2111.0,2233.0,2274.0,2203.0,2096.0,2113.0,2116.0,1981.0,2190.0,1985.0,1991.0,2182.0,1970.0,2229.0,2122.0,2095.0,2080.0,2045.0,2078.0,1954.0,2074.0,1910.0,2066.0,1962.0,1852.0,2097.0,1974.0,2103.0,2038.0,1901.0,2070.0,1700.0,1777.0,1585.0,1765.0,1726.0,1683.0,1921.0,1618.0,1972.0,1780.0,1695.0,1888.0,1708.0,1653.0,1742.0,1784.0,1725.0,1784.0,1773.0,1827.0,2026.0,1702.0,1857.0,1937.0,1722.0,1900.0,1813.0,1764.0,1861.0,1821.0,1828.0,1892.0,1971.0,1803.0,1902.0,1853.0,1725.0,1877.0,1763.0,1731.0,1869.0,1802.0,1941.0,1987.0,2020.0,1891.0,1907.0,1928.0,1707.0,1892.0,1727.0,1859.0,1970.0,1807.0,2118.0,2090.0,2062.0,1935.0,1965.0,1914.0,1859.0,1937.0,1776.0,2060.0,1984.0,1936.0,2112.0,1904.0,2182.0,1924.0,1830.0,2066.0,1768.0,1858.0,1936.0,2089.0,1898.0,2059.0,2123.0,1985.0,2108.0,1812.0,1855.0,2140.0,1769.0,1860.0,2110.0,2109.0,2027.0,2147.0,2076.0,2050.0,2146.0,1808.0,1971.0,2102.0,1745.0,1907.0,1928.0,1851.0,1958.0,2017.0,2007.0,2040.0,2098.0,1828.0,1924.0,1946.0,1829.0,1925.0,1841.0,1918.0,2025.0,1982.0,2162.0,2041.0,2007.0,1876.0,1872.0,1899.0,1744.0,1887.0,1756.0,1999.0,2022.0,1888.0,2092.0,1913.0,2041.0,1906.0,1827.0,1932.0,1706.0,1870.0,1748.0,2007.0,1981.0,1945.0,2063.0,1815.0,2044.0,1842.0,1681.0,1970.0,1695.0,1720.0,1872.0,1947.0,1874.0,1996.0,2077.0,1940.0,2114.0,1813.0,1782.0,2039.0,1708.0,1850.0,1787.0,1900.0,2039.0,2015.0,1980.0,1996.0,2015.0,1784.0,1855.0,1822.0,1677.0,1858.0,1782.0,1857.0,2051.0,1984.0,2065.0,2027.0,1980.0,1891.0,1948.0,1942.0,1802.0,2001.0,1901.0,1985.0,2156.0,2027.0,2215.0,2135.0,2116.0,1978.0,2020.0,2010.0,1811.0,2067.0,1854.0,2186.0,2285.0,2089.0,2316.0,2220.0,2181.0,2098.0,1998.0,2220.0,2048.0,2035.0,2154.0,2302.0,2186.0,2194.0,2262.0,1934.0,2179.0,1955.0,1950.0,2222.0,1919.0,1966.0,2095.0,2189.0,2132.0,2256.0,2221.0,2126.0,2300.0,1934.0,2024.0,2157.0,1977.0,2081.0,2090.0,2123.0,2248.0,2213.0,2228.0,2197.0,2236.0,2003.0,2100.0,2170.0,1998.0,2231.0,2155.0,2151.0,2321.0,2256.0,2307.0,2275.0,2265.0,2144.0,2113.0,2178.0,2175.0,2300.0,2027.0,2303.0,2369.0,2202.0,2437.0,2275.0,2345.0,2169.0,1997.0,2205.0,1881.0,2096.0,1939.0,2294.0,2269.0,2177.0,2425.0,2121.0,2389.0,2201.0,2110.0,2331.0,1987.0,2059.0,2195.0,2336.0,2302.0,2427.0,2469.0,2201.0,2512.0,2164.0,2107.0,2291.0,1942.0,2048.0,2151.0,2360.0,2391.0,2439.0,2328.0,2314.0,2212.0,1783.0,1978.0,1926.0,1804.0,2108.0,1956.0,2070.0,2227.0,2104.0,2151.0,2105.0,2114.0,1941.0,2042.0,1915.6,1767.4,2041.7,1887.8,2074.0,2227.0,2082.8,2319.0,2158.0,2080.7,2071.3,2057.3,2051.0,1826.9,2203.7,1969.2,2309.0,2446.1,2213.6,2450.0,2169.9,2236.4,2226.6,2049.6,2166.0,1952.5,2118.2,2015.0,2285.1,2348.5,2256.7,2450.6,2094.7,2443.0,2228.8,2061.4,2232.7,2038.6,2100.5,2255.4,2380.1,2263.4,2371.6,2266.8,2269.9,2340.9,1959.3,2082.0,2117.9,1986.0,2144.0,2133.4,2179.4,2289.0,2271.2,2184.2,2234.1,2275.7,2016.1,2134.4,2081.8,1955.2,2211.2,2139.2,2087.2,2320.0,2229.6,2286.6,2252.2,2234.9,2235.5,2270.9,2122.9,2020.4,2266.2,2052.5,2131.9,2375.0,2134.1,2386.9,2215.2,2215.1,2148.8,2126.3,2113.8,2009.0,2159.8,1990.6,2232.0,2252.1,2200.8,2367.5,2016.0,2343.7,2206.6]}},"id":"c49de668-3dff-46a6-a2ab-7081c1a58909","type":"ColumnDataSource"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"6b931684-1071-42e9-851e-5f76c05b10bd","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"12.000000pt"},"plot":{"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"},"ticker":{"id":"fdb7076f-7661-478c-b045-69e328010016","type":"BasicTicker"}},"id":"8d4f6dc5-be72-4d91-935a-91002290a0cc","type":"LinearAxis"},{"attributes":{"plot":{"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"}},"id":"a0d82636-b060-4736-b87d-335fb692a56a","type":"HelpTool"},{"attributes":{"overlay":{"id":"e63fc6b7-422d-4653-9b83-2bd06702ec1b","type":"BoxAnnotation"},"plot":{"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"}},"id":"68012b70-2a35-4cb8-9f88-70d4698b5c1e","type":"BoxZoomTool"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"634862f9-f409-41c4-b2e4-763fd8e1f369","type":"MonthsTicker"},{"attributes":{"line_color":{"value":"#000000"},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"a1d22ebd-d8a4-4d26-bfe1-5f0e21b921e8","type":"Line"},{"attributes":{"plot":{"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"}},"id":"76cde996-0ea7-4e2e-8a3f-c9fb87ccf947","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"fbd94002-ea6c-4ba3-b3e3-8b4d904e95d5","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5abbdae-94f5-478c-84b7-037c4920a5e5","type":"PanTool"},{"id":"76cde996-0ea7-4e2e-8a3f-c9fb87ccf947","type":"WheelZoomTool"},{"id":"68012b70-2a35-4cb8-9f88-70d4698b5c1e","type":"BoxZoomTool"},{"id":"4be6286e-76cf-4226-ae27-49db2930f9b0","type":"SaveTool"},{"id":"41c88238-8ec0-4b91-85f8-23f97da081ff","type":"ResetTool"},{"id":"a0d82636-b060-4736-b87d-335fb692a56a","type":"HelpTool"}]},"id":"c50d752d-408f-489b-b783-b5363af91be4","type":"Toolbar"},{"attributes":{"days":[1,8,15,22]},"id":"abbe8152-9439-4d7c-8e6c-04b863353778","type":"DaysTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e63fc6b7-422d-4653-9b83-2bd06702ec1b","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Line ggplot-based plot in Bokeh."},"id":"0f884dea-782e-496f-9103-31031c3189c9","type":"Title"},{"attributes":{"legends":[["beef",[{"id":"86a28b8b-ef30-4153-ba28-79f7f5799be9","type":"GlyphRenderer"}]]],"plot":{"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"}},"id":"6d70d058-c5b0-4235-8d67-cf76ff3440ef","type":"Legend"},{"attributes":{},"id":"1146fc43-65ac-48b5-b9e9-802da5880682","type":"DatetimeTicker"},{"attributes":{"background_fill_color":{"value":"#E5E5E5"},"below":[{"id":"3961aadd-961f-490f-adcc-ea056df9a4c0","type":"DatetimeAxis"}],"left":[{"id":"8d4f6dc5-be72-4d91-935a-91002290a0cc","type":"LinearAxis"}],"plot_height":640,"plot_width":880,"renderers":[{"id":"3961aadd-961f-490f-adcc-ea056df9a4c0","type":"DatetimeAxis"},{"id":"92b4d037-4932-467c-bbed-71f4de96fad0","type":"Grid"},{"id":"8d4f6dc5-be72-4d91-935a-91002290a0cc","type":"LinearAxis"},{"id":"a0594065-affa-43fc-baa6-1c2c61ffd839","type":"Grid"},{"id":"6d70d058-c5b0-4235-8d67-cf76ff3440ef","type":"Legend"},{"id":"e63fc6b7-422d-4653-9b83-2bd06702ec1b","type":"BoxAnnotation"},{"id":"86a28b8b-ef30-4153-ba28-79f7f5799be9","type":"GlyphRenderer"}],"title":{"id":"0f884dea-782e-496f-9103-31031c3189c9","type":"Title"},"tool_events":{"id":"963e4186-0a89-40c0-a614-ad04a1a147c8","type":"ToolEvents"},"toolbar":{"id":"c50d752d-408f-489b-b783-b5363af91be4","type":"Toolbar"},"x_range":{"id":"d47c6370-6057-4f27-af6e-e11a686a64f2","type":"DataRange1d"},"y_range":{"id":"fbd94002-ea6c-4ba3-b3e3-8b4d904e95d5","type":"DataRange1d"}},"id":"d808854e-42f3-4ffa-8a88-057fc60bb0e0","type":"Plot"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"1dc82ee4-1892-489a-ae77-974420503d35","type":"DaysTicker"},{"attributes":{"months":[0,6]},"id":"a395813f-fc3b-478d-99a7-e25dc693837e","type":"MonthsTicker"}],"root_ids":["d808854e-42f3-4ffa-8a88-057fc60bb0e0"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"49af5cb2-7e46-4b18-9bd1-30423f7c721a","elementid":"b7879bf9-14cb-4d73-aee3-d0601ab8c215","modelid":"d808854e-42f3-4ffa-8a88-057fc60bb0e0"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
        }
      ];
    
      function run_inline_js() {
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});