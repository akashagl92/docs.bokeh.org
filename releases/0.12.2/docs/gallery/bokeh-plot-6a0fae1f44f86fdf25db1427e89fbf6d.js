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
      };var element = document.getElementById("5b5de2e1-f0e8-42d0-a055-197a8ece8a6b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5b5de2e1-f0e8-42d0-a055-197a8ece8a6b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"d5ac2155-e499-44c9-9a3c-34cceb61ba25":{"roots":{"references":[{"attributes":{},"id":"69bbda88-ec85-4f5e-82a8-0e3a66c19459","type":"BasicTicker"},{"attributes":{"callback":null},"id":"0c887565-830c-4fc5-ac97-ad060dba3804","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29ac9f14-795c-4ef9-92e3-07a60ce704d8","type":"BoxAnnotation"},{"attributes":{},"id":"d48d087e-0351-46b0-b381-65d235e996f1","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["CPK","metal","bonding type","period","year discovered","atomic radius","electronegativity","group","density","ion radius","index","symbol","EA","IE-1","boiling point","van der Waals radius","standard state","melting point","name","atomic mass","electronic configuration","atomic number","fill_color"],"data":{"CPK":["#FFFFFF","#CC80FF","#C2FF00","#FFB5B5","#909090","#3050F8","#FF0D0D","#90E050","#B3E3F5","#AB5CF2","#8AFF00","#BFA6A6","#F0C8A0","#FF8000","#FFFF30","#1FF01F","#80D1E3","#8F40D4","#3DFF00","#E6E6E6","#BFC2C7","#A6A6AB","#8A99C7","#9C7AC7","#E06633","#F090A0","#50D050","#C88033","#7D80B0","#C28F8F","#668F8F","#BD80E3","#FFA100","#A62929","#5CB8D1","#702EB0","#00FF00","#94FFFF","#94E0E0","#73C2C9","#54B5B5","#3B9E9E","#248F8F","#0A7D8C","#006985","#C0C0C0","#FFD98F","#A67573","#668080","#9E63B5","#D47A00","#940094","#429EB0","#57178F","#00C900","#70D4FF","#FFFFC7","#D9FFC7","#C7FFC7","#A3FFC7","#8FFFC7","#61FFC7","#45FFC7","#30FFC7","#1FFFC7","#00FF9C","#00E675","#00D452","#00BF38","#00AB24","#4DC2FF","#4DA6FF","#2194D6","#267DAB","#266696","#175487","#D0D0E0","#FFD123","#B8B8D0","#A6544D","#575961"],"EA":[-73.0,-60.0,0.0,-27.0,-154.0,-7.0,-141.0,-328.0,0.0,-53.0,0.0,-43.0,-134.0,-72.0,-200.0,-349.0,0.0,-48.0,-2.0,-18.0,-8.0,-51.0,-64.0,0.0,-16.0,-64.0,-112.0,-118.0,0.0,-29.0,-119.0,-78.0,-195.0,-325.0,0.0,-47.0,-5.0,-30.0,-41.0,-86.0,-72.0,-53.0,-101.0,-110.0,-54.0,-126.0,0.0,-29.0,-107.0,-103.0,-190.0,-295.0,0.0,-46.0,-14.0,-48.0,-50.0,-50.0,-50.0,-50.0,-50.0,-50.0,-50.0,-50.0,-50.0,-50.0,-50.0,-50.0,-50.0,-50.0,0.0,-31.0,-79.0,-15.0,-106.0,-151.0,-205.0,-223.0,0.0,-19.0,-35.0],"IE-1":[1312.0,520.0,900.0,801.0,1087.0,1402.0,1314.0,1681.0,2081.0,496.0,738.0,578.0,787.0,1012.0,1000.0,1251.0,1521.0,419.0,590.0,633.0,659.0,651.0,653.0,717.0,763.0,760.0,737.0,746.0,906.0,579.0,762.0,947.0,941.0,1140.0,1351.0,403.0,550.0,600.0,640.0,652.0,684.0,702.0,710.0,720.0,804.0,731.0,868.0,558.0,709.0,834.0,869.0,1008.0,1170.0,376.0,503.0,538.0,534.0,527.0,533.0,540.0,545.0,547.0,593.0,566.0,573.0,581.0,589.0,597.0,603.0,524.0,659.0,761.0,770.0,760.0,840.0,880.0,870.0,890.0,1007.0,589.0,716.0],"atomic mass":[1.00794,6.941,9.012182,10.811,12.0107,14.0067,15.9994,18.9984032,20.1797,22.98976928,24.305,26.9815386,28.0855,30.973762,32.065,35.453,39.948,39.0983,40.078,44.955912,47.867,50.9415,51.9961,54.938045,55.845,58.933195,58.6934,63.546,65.38,69.723,72.64,74.9216,78.96,79.904,83.798,85.4678,87.62,88.90585,91.224,92.90638,95.96,98.0,101.07,102.9055,106.42,107.8682,112.411,114.818,118.71,121.76,127.6,126.90447,131.293,132.9054519,137.327,138.90547,140.116,140.90765,144.242,145.0,150.36,151.964,157.25,158.92535,162.5,164.93032,167.259,168.93421,173.054,174.9668,178.49,180.94788,183.84,186.207,190.23,192.217,195.084,196.966569,200.59,204.3833,207.2],"atomic number":[1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"atomic radius":[37.0,134.0,90.0,82.0,77.0,75.0,73.0,71.0,69.0,154.0,130.0,118.0,111.0,106.0,102.0,99.0,97.0,196.0,174.0,144.0,136.0,125.0,127.0,139.0,125.0,126.0,121.0,138.0,131.0,126.0,122.0,119.0,116.0,114.0,110.0,211.0,192.0,162.0,148.0,137.0,145.0,156.0,126.0,135.0,131.0,153.0,148.0,144.0,141.0,138.0,135.0,133.0,130.0,225.0,198.0,169.0,"NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN",160.0,150.0,138.0,146.0,159.0,128.0,137.0,128.0,144.0,149.0,148.0,147.0],"boiling point":[20.0,1615.0,2743.0,4273.0,4300.0,77.0,90.0,85.0,27.0,1156.0,1363.0,2792.0,3173.0,554.0,718.0,239.0,87.0,1032.0,1757.0,3103.0,3560.0,3680.0,2944.0,2334.0,3134.0,3200.0,3186.0,3200.0,1180.0,2477.0,3093.0,887.0,958.0,332.0,120.0,961.0,1655.0,3618.0,4682.0,5017.0,4912.0,4538.0,4423.0,3968.0,3236.0,2435.0,1040.0,2345.0,2875.0,1860.0,1261.0,457.0,165.0,944.0,2143.0,3737.0,3633.0,3563.0,3373.0,3273.0,2076.0,1800.0,3523.0,3503.0,2840.0,2973.0,3141.0,2223.0,1469.0,3675.0,4876.0,5731.0,5828.0,5869.0,5285.0,4701.0,4098.0,3129.0,630.0,1746.0,2022.0],"bonding type":["diatomic","metallic","metallic","covalent network","covalent network","diatomic","diatomic","atomic","atomic","metallic","metallic","metallic","metallic","covalent network","covalent network","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic"],"density":[8.99e-05,0.54,1.85,2.46,2.26,0.0,0.0,0.0,0.0,0.97,1.74,2.7,2.33,1.82,1.96,0.0,0.0,0.86,1.55,2.99,4.51,6.11,7.14,7.47,7.87,8.9,8.91,8.92,7.14,5.9,5.32,5.73,4.82,3.12,0.0,1.53,2.63,4.47,6.51,8.57,10.28,11.5,12.37,12.45,12.02,10.49,8.65,7.31,7.31,6.7,6.24,4.94,0.01,1.88,3.51,6.15,6.69,6.64,7.01,7.26,7.35,5.24,7.9,8.22,8.55,8.8,9.07,9.32,6.57,9.84,13.31,16.65,19.25,21.02,22.59,22.56,21.09,19.3,13.53,11.85,11.34],"electronegativity":[2.2,0.98,1.57,2.04,2.55,3.04,3.44,3.98,"NaN",0.93,1.31,1.61,1.9,2.19,2.58,3.16,"NaN",0.82,1.0,1.36,1.54,1.63,1.66,1.55,1.83,1.88,1.91,1.9,1.65,1.81,2.01,2.18,2.55,2.96,"NaN",0.82,0.95,1.22,1.33,1.6,2.16,1.9,2.2,2.28,2.2,1.93,1.69,1.78,1.96,2.05,2.1,2.66,"NaN",0.79,0.89,1.1,1.12,1.13,1.14,1.13,1.17,1.2,1.2,1.2,1.22,1.23,1.24,1.25,1.1,1.27,1.3,1.5,2.36,1.9,2.2,2.2,2.28,2.54,2.0,2.04,2.33],"electronic configuration":["1s1","[He] 2s1","[He] 2s2","[He] 2s2 2p1","[He] 2s2 2p2","[He] 2s2 2p3","[He] 2s2 2p4","[He] 2s2 2p5","[He] 2s2 2p6","[Ne] 3s1","[Ne] 3s2","[Ne] 3s2 3p1","[Ne] 3s2 3p2","[Ne] 3s2 3p3","[Ne] 3s2 3p4","[Ne] 3s2 3p5","[Ne] 3s2 3p6","[Ar] 4s1","[Ar] 4s2","[Ar] 3d1 4s2","[Ar] 3d2 4s2","[Ar] 3d3 4s2","[Ar] 3d5 4s1","[Ar] 3d5 4s2","[Ar] 3d6 4s2","[Ar] 3d7 4s2","[Ar] 3d8 4s2","[Ar] 3d10 4s1","[Ar] 3d10 4s2","[Ar] 3d10 4s2 4p1","[Ar] 3d10 4s2 4p2","[Ar] 3d10 4s2 4p3","[Ar] 3d10 4s2 4p4","[Ar] 3d10 4s2 4p5","[Ar] 3d10 4s2 4p6","[Kr] 5s1","[Kr] 5s2","[Kr] 4d1 5s2","[Kr] 4d2 5s2","[Kr] 4d4 5s1","[Kr] 4d5 5s1","[Kr] 4d5 5s2","[Kr] 4d7 5s1","[Kr] 4d8 5s1","[Kr] 4d10","[Kr] 4d10 5s1","[Kr] 4d10 5s2","[Kr] 4d10 5s2 5p1","[Kr] 4d10 5s2 5p2","[Kr] 4d10 5s2 5p3","[Kr] 4d10 5s2 5p4","[Kr] 4d10 5s2 5p5","[Kr] 4d10 5s2 5p6","[Xe] 6s1","[Xe] 6s2","[Xe] 5d1 6s2","[Xe] 4f1 5d1 6s2","[Xe] 4f3 6s2","[Xe] 4f4 6s2","[Xe] 4f5 6s2","[Xe] 4f6 6s2","[Xe] 4f7 6s2","[Xe] 4f7 5d1 6s2","[Xe] 4f9 6s2","[Xe] 4f10 6s2","[Xe] 4f11 6s2","[Xe] 4f12 6s2","[Xe] 4f13 6s2","[Xe] 4f14 6s2","[Xe] 4f14 5d1 6s2","[Xe] 4f14 5d2 6s2","[Xe] 4f14 5d3 6s2","[Xe] 4f14 5d4 6s2","[Xe] 4f14 5d5 6s2","[Xe] 4f14 5d6 6s2","[Xe] 4f14 5d7 6s2","[Xe] 4f14 5d9 6s1","[Xe] 4f14 5d10 6s1","[Xe] 4f14 5d10 6s2","[Xe] 4f14 5d10 6s2 6p1","[Xe] 4f14 5d10 6s2 6p2"],"fill_color":["#053061","#2166ac","#d1e5f0","#fddbc7","#67001f","#053061","#053061","#053061","#053061","#053061","#4393c3","#4393c3","#d1e5f0","#053061","#053061","#053061","#053061","#053061","#4393c3","#d1e5f0","#f7f7f7","#f7f7f7","#f7f7f7","#92c5de","#d1e5f0","#d1e5f0","#d1e5f0","#92c5de","#2166ac","#053061","#92c5de","#4393c3","#2166ac","#053061","#053061","#053061","#4393c3","#d1e5f0","#f7f7f7","#f4a582","#f4a582","#fddbc7","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#2166ac","#2166ac","#2166ac","#4393c3","#2166ac","#053061","#053061","#053061","#4393c3","#92c5de","#4393c3","#92c5de","#92c5de","#92c5de","#92c5de","#4393c3","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#4393c3","#f7f7f7","#fddbc7","#d6604d","#b2182b","#b2182b","#d6604d","#f4a582","#f7f7f7","#92c5de","#053061","#2166ac","#2166ac"],"group":["1","1","2","13","14","15","16","17","18","1","2","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","-","-","-","-","-","-","-","-","-","-","-","-","-","-","3","4","5","6","7","8","9","10","11","12","13","14"],"index":[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"ion radius":["nan","76 (+1)","45 (+2)","27 (+3)","16 (+4)","146 (-3)","140 (-2)","133 (-1)","nan","102 (+1)","72 (+2)","53.5 (+3)","40 (+4)","44 (+3)","184 (-2)","181 (-1)","nan","138 (+1)","100 (+2)","74.5 (+3)","86 (+2)","79 (+2)","80 (+2*)","67 (+2)","78 (+2*)","74.5 (+2*)","69 (+2)","77 (+1)","74 (+2)","62 (+3)","73 (+2)","58 (+3)","198 (-2)","196 (-1)","nan","152 (+1)","118 (+2)","90 (+3)","72 (+4)","72 (+3)","69 (+3)","64.5 (+4)","68 (+3)","66.5 (+3)","59 (+1)","115 (+1)","95 (+2)","80 (+3)","112 (+2)","76 (+3)","221 (-2)","220 (-1)","48 (+8)","167 (+1)","135 (+2)","103.2 (+3)","102 (+3)","99 (+3)","129 (+2)","97 (+3)","122 (+2)","117 (+2)","93.8 (+3)","92.3 (+3)","107 (+2)","90.1 (+3)","89 (+3)","103 (+2)","102 (+2)","86.1 (+3)","71 (+4)","72 (+3)","66 (+4)","63 (+4)","63 (+4)","68 (+3)","86 (+2)","137 (+1)","119 (+1)","150 (+1)","119 (+2)"],"melting point":[14.0,454.0,1560.0,2348.0,3823.0,63.0,55.0,54.0,25.0,371.0,923.0,933.0,1687.0,317.0,388.0,172.0,84.0,337.0,1115.0,1814.0,1941.0,2183.0,2180.0,1519.0,1811.0,1768.0,1728.0,1358.0,693.0,303.0,1211.0,1090.0,494.0,266.0,116.0,312.0,1050.0,1799.0,2128.0,2750.0,2896.0,2430.0,2607.0,2237.0,1828.0,1235.0,594.0,430.0,505.0,904.0,723.0,387.0,161.0,302.0,1000.0,1193.0,1071.0,1204.0,1294.0,1373.0,1345.0,1095.0,1586.0,1629.0,1685.0,1747.0,1770.0,1818.0,1092.0,1936.0,2506.0,3290.0,3695.0,3459.0,3306.0,2739.0,2041.0,1337.0,234.0,577.0,601.0],"metal":["nonmetal","alkali metal","alkaline earth metal","metalloid","nonmetal","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","metal","metalloid","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metalloid","metalloid","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metalloid","metalloid","halogen","noble gas","alkali metal","alkaline earth metal","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal"],"name":["Hydrogen","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead"],"period":[1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"standard state":["gas","solid","solid","solid","solid","gas","gas","gas","gas","solid","solid","solid","solid","solid","solid","gas","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","solid","solid"],"symbol":["H","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb"],"van der Waals radius":[120.0,182.0,"NaN","NaN",170.0,155.0,152.0,147.0,154.0,227.0,173.0,"NaN",210.0,180.0,180.0,175.0,188.0,275.0,"NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN",163.0,140.0,139.0,187.0,"NaN",185.0,190.0,185.0,202.0,"NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN",163.0,172.0,158.0,193.0,217.0,"NaN",206.0,198.0,216.0,"NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN",175.0,166.0,155.0,196.0,202.0],"year discovered":["1766","1817","1798","1807","Ancient","1772","1774","1670","1898","1807","1808","Ancient","1854","1669","Ancient","1774","1894","1807","Ancient","1876","1791","1803","Ancient","1774","Ancient","Ancient","1751","Ancient","1746","1875","1886","Ancient","1817","1826","1898","1861","1790","1794","1789","1801","1778","1937","1827","1803","1803","Ancient","1817","1863","Ancient","Ancient","1782","1811","1898","1860","1808","1839","1803","1885","1885","1947","1853","1901","1880","1843","1886","1878","1842","1879","1878","1907","1923","1802","1783","1925","1803","1803","Ancient","Ancient","Ancient","1861","Ancient"]}},"id":"1f4bd290-8d7f-4889-b99d-bb107b28c7d1","type":"ColumnDataSource"},{"attributes":{"background_fill_color":{"value":"#dddddd"},"below":[{"id":"7c4dd9ce-d9ce-4bf2-9ab8-f55579fda192","type":"LinearAxis"}],"left":[{"id":"e2bc57fd-e1db-4e9e-931d-1db37d0ccfa1","type":"LinearAxis"}],"plot_width":1200,"renderers":[{"id":"7c4dd9ce-d9ce-4bf2-9ab8-f55579fda192","type":"LinearAxis"},{"id":"efbd8a40-7fed-46bc-a092-eb6fe83da2e4","type":"Grid"},{"id":"e2bc57fd-e1db-4e9e-931d-1db37d0ccfa1","type":"LinearAxis"},{"id":"59bf2427-d536-40fb-a41b-45f14c79c8c1","type":"Grid"},{"id":"29ac9f14-795c-4ef9-92e3-07a60ce704d8","type":"BoxAnnotation"},{"id":"7ec13702-1a27-430e-9d7c-09b2a02cd35f","type":"GlyphRenderer"},{"id":"0875aa88-eceb-4b4a-a0ff-5da02b53c9a3","type":"LabelSet"}],"title":{"id":"90dcd721-cb65-44cd-94a4-26ccc193a0fd","type":"Title"},"tool_events":{"id":"86dfa4b1-4244-4258-9219-ef6d8ca992b1","type":"ToolEvents"},"toolbar":{"id":"d9a332ac-8bf4-4caf-9775-f4b6bf520fbe","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"dfc9a6b4-1faf-4bfb-a633-53e60c5e2ac7","type":"DataRange1d"},"y_range":{"id":"0c887565-830c-4fc5-ac97-ad060dba3804","type":"DataRange1d"}},"id":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","logo":"grey","tools":[{"id":"b536a6b9-7f2a-43ba-b6de-d8ac0f50eae7","type":"PanTool"},{"id":"48f9d56b-a7f8-4ad0-bb5a-0f26bb8287f9","type":"WheelZoomTool"},{"id":"c4578a87-150e-4f46-b9bd-07cfc2a7ad41","type":"BoxZoomTool"},{"id":"1672674a-1419-4d60-84ec-32bbe04af206","type":"ResetTool"},{"id":"2ac8ae76-4acf-45ca-9dfc-246d620dc437","type":"SaveTool"}]},"id":"d9a332ac-8bf4-4caf-9775-f4b6bf520fbe","type":"Toolbar"},{"attributes":{"plot":{"id":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82","subtype":"Figure","type":"Plot"}},"id":"1672674a-1419-4d60-84ec-32bbe04af206","type":"ResetTool"},{"attributes":{"axis_label":"atomic weight (amu)","formatter":{"id":"9e1ca947-a533-4a16-a418-d94b83177135","type":"BasicTickFormatter"},"plot":{"id":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad7ee011-88c3-4008-80ec-fe9f6bf82918","type":"BasicTicker"}},"id":"7c4dd9ce-d9ce-4bf2-9ab8-f55579fda192","type":"LinearAxis"},{"attributes":{"plot":{"id":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82","subtype":"Figure","type":"Plot"}},"id":"2ac8ae76-4acf-45ca-9dfc-246d620dc437","type":"SaveTool"},{"attributes":{"callback":null},"id":"dfc9a6b4-1faf-4bfb-a633-53e60c5e2ac7","type":"DataRange1d"},{"attributes":{},"id":"ad7ee011-88c3-4008-80ec-fe9f6bf82918","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":12},"x":{"field":"atomic mass"},"y":{"field":"density"}},"id":"c54cab2b-477d-447b-929d-a005e5b092dd","type":"Circle"},{"attributes":{},"id":"86dfa4b1-4244-4258-9219-ef6d8ca992b1","type":"ToolEvents"},{"attributes":{"plot":{"id":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82","subtype":"Figure","type":"Plot"}},"id":"48f9d56b-a7f8-4ad0-bb5a-0f26bb8287f9","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1f4bd290-8d7f-4889-b99d-bb107b28c7d1","type":"ColumnDataSource"},"glyph":{"id":"d8ce52da-4895-4fd8-8d3d-a47006d541be","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"c54cab2b-477d-447b-929d-a005e5b092dd","type":"Circle"},"selection_glyph":null},"id":"7ec13702-1a27-430e-9d7c-09b2a02cd35f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82","subtype":"Figure","type":"Plot"}},"id":"b536a6b9-7f2a-43ba-b6de-d8ac0f50eae7","type":"PanTool"},{"attributes":{"plot":null,"text":"Density vs Atomic Weight of Elements (colored by melting point)"},"id":"90dcd721-cb65-44cd-94a4-26ccc193a0fd","type":"Title"},{"attributes":{"plot":{"id":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82","subtype":"Figure","type":"Plot"},"source":{"id":"1f4bd290-8d7f-4889-b99d-bb107b28c7d1","type":"ColumnDataSource"},"text":{"field":"symbol"},"text_align":"center","text_color":{"value":"#555555"},"text_font_size":{"value":"8pt"},"x":{"field":"atomic mass"},"y":{"field":"density"},"y_offset":{"value":8}},"id":"0875aa88-eceb-4b4a-a0ff-5da02b53c9a3","type":"LabelSet"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"size":{"units":"screen","value":12},"x":{"field":"atomic mass"},"y":{"field":"density"}},"id":"d8ce52da-4895-4fd8-8d3d-a47006d541be","type":"Circle"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"plot":{"id":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82","subtype":"Figure","type":"Plot"},"ticker":{"id":"69bbda88-ec85-4f5e-82a8-0e3a66c19459","type":"BasicTicker"}},"id":"59bf2427-d536-40fb-a41b-45f14c79c8c1","type":"Grid"},{"attributes":{"grid_line_color":{"value":"white"},"plot":{"id":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad7ee011-88c3-4008-80ec-fe9f6bf82918","type":"BasicTicker"}},"id":"efbd8a40-7fed-46bc-a092-eb6fe83da2e4","type":"Grid"},{"attributes":{},"id":"9e1ca947-a533-4a16-a418-d94b83177135","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"29ac9f14-795c-4ef9-92e3-07a60ce704d8","type":"BoxAnnotation"},"plot":{"id":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82","subtype":"Figure","type":"Plot"}},"id":"c4578a87-150e-4f46-b9bd-07cfc2a7ad41","type":"BoxZoomTool"},{"attributes":{"axis_label":"density (g/cm^3)","formatter":{"id":"d48d087e-0351-46b0-b381-65d235e996f1","type":"BasicTickFormatter"},"plot":{"id":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82","subtype":"Figure","type":"Plot"},"ticker":{"id":"69bbda88-ec85-4f5e-82a8-0e3a66c19459","type":"BasicTicker"}},"id":"e2bc57fd-e1db-4e9e-931d-1db37d0ccfa1","type":"LinearAxis"}],"root_ids":["08e96c76-e3fd-4c60-bb03-cecc7c4d6b82"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"d5ac2155-e499-44c9-9a3c-34cceb61ba25","elementid":"5b5de2e1-f0e8-42d0-a055-197a8ece8a6b","modelid":"08e96c76-e3fd-4c60-bb03-cecc7c4d6b82"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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