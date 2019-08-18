(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("2790d601-eb43-4fa2-b6a2-3a55720c84c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2790d601-eb43-4fa2-b6a2-3a55720c84c0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"681058cb-ceae-4146-b14e-1fac43d0930c":{"roots":{"references":[{"attributes":{"data_source":{"id":"1bbe0f1c-4661-4b12-832f-91b999102659","type":"ColumnDataSource"},"glyph":{"id":"010137fc-c7ca-4eb3-8713-3f89503c39cc","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6751dae6-d736-46ba-8c05-d5c0ee5e01dc","type":"Rect"},"selection_glyph":null},"id":"ab4ac94e-01a3-42ac-aaeb-c42cd2239f46","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"346078df-26cc-466c-8182-eeae6500ce13","type":"HoverTool"},{"id":"77379e83-0b49-4e28-842e-20856d0d0f0e","type":"SaveTool"}]},"id":"54f8dd6f-518a-4a59-aeae-9968cdbdbaae","type":"Toolbar"},{"attributes":{"callback":null,"factors":["VII","VI","V","IV","III","II","I"]},"id":"730951dd-e918-49f4-8a28-fb0d79c4ff91","type":"FactorRange"},{"attributes":{"text":{"field":"sym"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"15pt"},"text_font_style":"bold","x":{"field":"symx"},"y":{"field":"period"}},"id":"ebab31e1-948d-4e5b-a774-2716f07be9cc","type":"Text"},{"attributes":{"plot":{"id":"dc8a5214-93b5-4e35-b5a3-f8a2f526bc94","subtype":"Figure","type":"Plot"}},"id":"77379e83-0b49-4e28-842e-20856d0d0f0e","type":"SaveTool"},{"attributes":{"text":{"field":"atomic_number"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"symx"},"y":{"field":"numbery"}},"id":"73050c5c-d9e1-451f-b7ec-42dc8ef78fa3","type":"Text"},{"attributes":{"text":{"field":"name"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"6pt"},"x":{"field":"symx"},"y":{"field":"namey"}},"id":"758d842b-c02e-4565-b991-6ef1c083a1b0","type":"Text"},{"attributes":{"data_source":{"id":"1bbe0f1c-4661-4b12-832f-91b999102659","type":"ColumnDataSource"},"glyph":{"id":"e86bceee-2406-4a6f-a309-b7798ad303bb","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ebab31e1-948d-4e5b-a774-2716f07be9cc","type":"Text"},"selection_glyph":null},"id":"9ab67009-da24-4c5e-8e7c-f29234e5f178","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1bbe0f1c-4661-4b12-832f-91b999102659","type":"ColumnDataSource"},"glyph":{"id":"44fa2fe0-27a8-4a71-a5c9-6b625b877637","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"758d842b-c02e-4565-b991-6ef1c083a1b0","type":"Text"},"selection_glyph":null},"id":"2ba34094-9292-4cfa-aefc-5910ff29d874","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["name","electronic","type_color","namey","type","massy","symx","cpk","period","mass","atomic_number","numbery","group","sym"],"data":{"atomic_number":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],"cpk":["#FFFFFF","#D9FFFF","#CC80FF","#C2FF00","#FFB5B5","#909090","#3050F8","#FF0D0D","#90E050","#B3E3F5","#AB5CF2","#8AFF00","#BFA6A6","#F0C8A0","#FF8000","#FFFF30","#1FF01F","#80D1E3","#8F40D4","#3DFF00","#E6E6E6","#BFC2C7","#A6A6AB","#8A99C7","#9C7AC7","#E06633","#F090A0","#50D050","#C88033","#7D80B0","#C28F8F","#668F8F","#BD80E3","#FFA100","#A62929","#5CB8D1","#702EB0","#00FF00","#94FFFF","#94E0E0","#73C2C9","#54B5B5","#3B9E9E","#248F8F","#0A7D8C","#006985","#C0C0C0","#FFD98F","#A67573","#668080","#9E63B5","#D47A00","#940094","#429EB0","#57178F","#00C900","#00AB24","#4DC2FF","#4DA6FF","#2194D6","#267DAB","#266696","#175487","#D0D0E0","#FFD123","#B8B8D0","#A6544D","#575961","#9E4FB5","#AB5C00","#754F45","#428296","#420066","#007D00","#C70066","#CC0059","#D1004F","#D90045","#E00038","#E6002E","#EB0026","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493"],"electronic":["1s1","1s2","[He] 2s1","[He] 2s2","[He] 2s2 2p1","[He] 2s2 2p2","[He] 2s2 2p3","[He] 2s2 2p4","[He] 2s2 2p5","[He] 2s2 2p6","[Ne] 3s1","[Ne] 3s2","[Ne] 3s2 3p1","[Ne] 3s2 3p2","[Ne] 3s2 3p3","[Ne] 3s2 3p4","[Ne] 3s2 3p5","[Ne] 3s2 3p6","[Ar] 4s1","[Ar] 4s2","[Ar] 3d1 4s2","[Ar] 3d2 4s2","[Ar] 3d3 4s2","[Ar] 3d5 4s1","[Ar] 3d5 4s2","[Ar] 3d6 4s2","[Ar] 3d7 4s2","[Ar] 3d8 4s2","[Ar] 3d10 4s1","[Ar] 3d10 4s2","[Ar] 3d10 4s2 4p1","[Ar] 3d10 4s2 4p2","[Ar] 3d10 4s2 4p3","[Ar] 3d10 4s2 4p4","[Ar] 3d10 4s2 4p5","[Ar] 3d10 4s2 4p6","[Kr] 5s1","[Kr] 5s2","[Kr] 4d1 5s2","[Kr] 4d2 5s2","[Kr] 4d4 5s1","[Kr] 4d5 5s1","[Kr] 4d5 5s2","[Kr] 4d7 5s1","[Kr] 4d8 5s1","[Kr] 4d10","[Kr] 4d10 5s1","[Kr] 4d10 5s2","[Kr] 4d10 5s2 5p1","[Kr] 4d10 5s2 5p2","[Kr] 4d10 5s2 5p3","[Kr] 4d10 5s2 5p4","[Kr] 4d10 5s2 5p5","[Kr] 4d10 5s2 5p6","[Xe] 6s1","[Xe] 6s2","[Xe] 4f14 5d1 6s2","[Xe] 4f14 5d2 6s2","[Xe] 4f14 5d3 6s2","[Xe] 4f14 5d4 6s2","[Xe] 4f14 5d5 6s2","[Xe] 4f14 5d6 6s2","[Xe] 4f14 5d7 6s2","[Xe] 4f14 5d9 6s1","[Xe] 4f14 5d10 6s1","[Xe] 4f14 5d10 6s2","[Xe] 4f14 5d10 6s2 6p1","[Xe] 4f14 5d10 6s2 6p2","[Xe] 4f14 5d10 6s2 6p3","[Xe] 4f14 5d10 6s2 6p4","[Xe] 4f14 5d10 6s2 6p5","[Xe] 4f14 5d10 6s2 6p6","[Rn] 7s1","[Rn] 7s2","[Rn] 5f14 7s2 7p1","[Rn] 5f14 6d2 7s2","[Rn].5f14.6d3.7s2","[Rn].5f14.6d4.7s2","[Rn].5f14.6d5.7s2","[Rn].5f14.6d6.7s2","[Rn].5f14.6d7.7s2","[Rn].5f14.6d9.7s1","[Rn].5f14.6d10.7s1","[Rn].5f14.6d10.7s2","[Rn].5f14.6d10.7s2.7p1","[Rn].5f14.6d10.7s2.7p2","[Rn].5f14.6d10.7s2.7p3","[Rn].5f14.6d10.7s2.7p4","[Rn].5f14.6d10.7s2.7p5","[Rn].5f14.6d10.7s2.7p6"],"group":["1","18","1","2","13","14","15","16","17","18","1","2","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],"mass":["1.00794","4.002602","6.941","9.012182","10.811","12.0107","14.0067","15.9994","18.9984032","20.1797","22.98976928","24.3050","26.9815386","28.0855","30.973762","32.065","35.453","39.948","39.0983","40.078","44.955912","47.867","50.9415","51.9961","54.938045","55.845","58.933195","58.6934","63.546","65.38","69.723","72.64","74.92160","78.96","79.904","83.798","85.4678","87.62","88.90585","91.224","92.90638","95.96","[98]","101.07","102.90550","106.42","107.8682","112.411","114.818","118.710","121.760","127.60","126.90447","131.293","132.9054519","137.327","174.9668","178.49","180.94788","183.84","186.207","190.23","192.217","195.084","196.966569","200.59","204.3833","207.2","208.98040","[209]","[210]","[222]","[223]","[226]","[262]","[267]","[268]","[271]","[272]","[270]","[276]","[281]","[280]","[285]","[284]","[289]","[288]","[293]","[294]","[294]"],"massy":["I:0.15","I:0.15","II:0.15","II:0.15","II:0.15","II:0.15","II:0.15","II:0.15","II:0.15","II:0.15","III:0.15","III:0.15","III:0.15","III:0.15","III:0.15","III:0.15","III:0.15","III:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15"],"name":["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihomium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson"],"namey":["I:0.3","I:0.3","II:0.3","II:0.3","II:0.3","II:0.3","II:0.3","II:0.3","II:0.3","II:0.3","III:0.3","III:0.3","III:0.3","III:0.3","III:0.3","III:0.3","III:0.3","III:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3"],"numbery":["I:0.8","I:0.8","II:0.8","II:0.8","II:0.8","II:0.8","II:0.8","II:0.8","II:0.8","II:0.8","III:0.8","III:0.8","III:0.8","III:0.8","III:0.8","III:0.8","III:0.8","III:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8"],"period":["I","I","II","II","II","II","II","II","II","II","III","III","III","III","III","III","III","III","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII"],"sym":["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"],"symx":["1:0.1","18:0.1","1:0.1","2:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1","1:0.1","2:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1","1:0.1","2:0.1","3:0.1","4:0.1","5:0.1","6:0.1","7:0.1","8:0.1","9:0.1","10:0.1","11:0.1","12:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1","1:0.1","2:0.1","3:0.1","4:0.1","5:0.1","6:0.1","7:0.1","8:0.1","9:0.1","10:0.1","11:0.1","12:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1","1:0.1","2:0.1","3:0.1","4:0.1","5:0.1","6:0.1","7:0.1","8:0.1","9:0.1","10:0.1","11:0.1","12:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1","1:0.1","2:0.1","3:0.1","4:0.1","5:0.1","6:0.1","7:0.1","8:0.1","9:0.1","10:0.1","11:0.1","12:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1"],"type":["nonmetal","noble gas","alkali metal","alkaline earth metal","metalloid","nonmetal","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","metal","metalloid","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metalloid","metalloid","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metalloid","metalloid","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metal","metalloid","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metal","metal","halogen","noble gas"],"type_color":["#baa2a6","#bbbb88","#a6cee3","#1f78b4","#33a02c","#baa2a6","#baa2a6","#baa2a6","#fdbf6f","#bbbb88","#a6cee3","#1f78b4","#b2df8a","#33a02c","#baa2a6","#baa2a6","#fdbf6f","#bbbb88","#a6cee3","#1f78b4","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#b2df8a","#33a02c","#33a02c","#baa2a6","#fdbf6f","#bbbb88","#a6cee3","#1f78b4","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#b2df8a","#b2df8a","#33a02c","#33a02c","#fdbf6f","#bbbb88","#a6cee3","#1f78b4","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#b2df8a","#b2df8a","#b2df8a","#33a02c","#fdbf6f","#bbbb88","#a6cee3","#1f78b4","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#b2df8a","#b2df8a","#b2df8a","#b2df8a","#fdbf6f","#bbbb88"]}},"id":"1bbe0f1c-4661-4b12-832f-91b999102659","type":"ColumnDataSource"},{"attributes":{"text":{"field":"sym"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"15pt"},"text_font_style":"bold","x":{"field":"symx"},"y":{"field":"period"}},"id":"e86bceee-2406-4a6f-a309-b7798ad303bb","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.9},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"field":"group"},"y":{"field":"period"}},"id":"6751dae6-d736-46ba-8c05-d5c0ee5e01dc","type":"Rect"},{"attributes":{},"id":"9f8e073f-8995-4b6e-bba2-96ba817d4c50","type":"CategoricalTickFormatter"},{"attributes":{},"id":"045436de-b8f7-48e0-8287-67f3dbbc2aef","type":"CategoricalTickFormatter"},{"attributes":{},"id":"2a0f29d7-bd86-4153-a4af-3f2cdf44e97d","type":"CategoricalTicker"},{"attributes":{"text":{"field":"mass"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"5pt"},"x":{"field":"symx"},"y":{"field":"massy"}},"id":"1d7e2cfb-04e3-44f5-b995-b094a573df65","type":"Text"},{"attributes":{"text":{"field":"atomic_number"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"symx"},"y":{"field":"numbery"}},"id":"8326cb33-2767-48fd-8cff-467c7a162a36","type":"Text"},{"attributes":{"below":[{"id":"337e5ee6-ace5-4498-919d-9363e843e215","type":"CategoricalAxis"}],"left":[{"id":"2c8e7fc8-62a3-42e7-85e1-8fca2905ab73","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_width":1200,"renderers":[{"id":"337e5ee6-ace5-4498-919d-9363e843e215","type":"CategoricalAxis"},{"id":"af8ac21b-b342-4cfa-8407-248a0a31c9fa","type":"Grid"},{"id":"2c8e7fc8-62a3-42e7-85e1-8fca2905ab73","type":"CategoricalAxis"},{"id":"b4b5ea2c-42c8-41a0-b374-da4f9940a71e","type":"Grid"},{"id":"ab4ac94e-01a3-42ac-aaeb-c42cd2239f46","type":"GlyphRenderer"},{"id":"9ab67009-da24-4c5e-8e7c-f29234e5f178","type":"GlyphRenderer"},{"id":"b2d694d5-a3fa-44cb-a529-0cdb4d925bb5","type":"GlyphRenderer"},{"id":"2ba34094-9292-4cfa-aefc-5910ff29d874","type":"GlyphRenderer"},{"id":"abe7d31f-1be0-42d3-ae76-1f339875767c","type":"GlyphRenderer"}],"title":{"id":"2864fba1-28ff-42d1-a7d0-38991b3d049c","type":"Title"},"tool_events":{"id":"062185eb-c787-41b9-8723-a61288695c85","type":"ToolEvents"},"toolbar":{"id":"54f8dd6f-518a-4a59-aeae-9968cdbdbaae","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1f336c6d-e042-4969-afe6-17cca0f340c3","type":"FactorRange"},"y_range":{"id":"730951dd-e918-49f4-8a28-fb0d79c4ff91","type":"FactorRange"}},"id":"dc8a5214-93b5-4e35-b5a3-f8a2f526bc94","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"062185eb-c787-41b9-8723-a61288695c85","type":"ToolEvents"},{"attributes":{"formatter":{"id":"9f8e073f-8995-4b6e-bba2-96ba817d4c50","type":"CategoricalTickFormatter"},"plot":{"id":"dc8a5214-93b5-4e35-b5a3-f8a2f526bc94","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a0f29d7-bd86-4153-a4af-3f2cdf44e97d","type":"CategoricalTicker"}},"id":"337e5ee6-ace5-4498-919d-9363e843e215","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"045436de-b8f7-48e0-8287-67f3dbbc2aef","type":"CategoricalTickFormatter"},"plot":{"id":"dc8a5214-93b5-4e35-b5a3-f8a2f526bc94","subtype":"Figure","type":"Plot"},"ticker":{"id":"44cb6a26-6cbc-49c1-854b-5ff88ca24fd8","type":"CategoricalTicker"}},"id":"2c8e7fc8-62a3-42e7-85e1-8fca2905ab73","type":"CategoricalAxis"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"dc8a5214-93b5-4e35-b5a3-f8a2f526bc94","subtype":"Figure","type":"Plot"},"ticker":{"id":"44cb6a26-6cbc-49c1-854b-5ff88ca24fd8","type":"CategoricalTicker"}},"id":"b4b5ea2c-42c8-41a0-b374-da4f9940a71e","type":"Grid"},{"attributes":{"plot":null,"text":"Periodic Table"},"id":"2864fba1-28ff-42d1-a7d0-38991b3d049c","type":"Title"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"field":"type_color"},"height":{"units":"data","value":0.9},"line_color":{"field":"type_color"},"width":{"units":"data","value":0.9},"x":{"field":"group"},"y":{"field":"period"}},"id":"010137fc-c7ca-4eb3-8713-3f89503c39cc","type":"Rect"},{"attributes":{"callback":null,"plot":{"id":"dc8a5214-93b5-4e35-b5a3-f8a2f526bc94","subtype":"Figure","type":"Plot"},"tooltips":[["name","@name"],["atomic number","@atomic_number"],["type","@type"],["atomic mass","@mass"],["CPK color","$color[hex, swatch]:cpk"],["electronic configuration","@electronic"]]},"id":"346078df-26cc-466c-8182-eeae6500ce13","type":"HoverTool"},{"attributes":{"text":{"field":"name"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"6pt"},"x":{"field":"symx"},"y":{"field":"namey"}},"id":"44fa2fe0-27a8-4a71-a5c9-6b625b877637","type":"Text"},{"attributes":{"data_source":{"id":"1bbe0f1c-4661-4b12-832f-91b999102659","type":"ColumnDataSource"},"glyph":{"id":"8326cb33-2767-48fd-8cff-467c7a162a36","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73050c5c-d9e1-451f-b7ec-42dc8ef78fa3","type":"Text"},"selection_glyph":null},"id":"b2d694d5-a3fa-44cb-a529-0cdb4d925bb5","type":"GlyphRenderer"},{"attributes":{"text":{"field":"mass"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"5pt"},"x":{"field":"symx"},"y":{"field":"massy"}},"id":"5c5a7a44-3ecf-49cf-9394-d87f7c26180e","type":"Text"},{"attributes":{"data_source":{"id":"1bbe0f1c-4661-4b12-832f-91b999102659","type":"ColumnDataSource"},"glyph":{"id":"1d7e2cfb-04e3-44f5-b995-b094a573df65","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5c5a7a44-3ecf-49cf-9394-d87f7c26180e","type":"Text"},"selection_glyph":null},"id":"abe7d31f-1be0-42d3-ae76-1f339875767c","type":"GlyphRenderer"},{"attributes":{},"id":"44cb6a26-6cbc-49c1-854b-5ff88ca24fd8","type":"CategoricalTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"dc8a5214-93b5-4e35-b5a3-f8a2f526bc94","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a0f29d7-bd86-4153-a4af-3f2cdf44e97d","type":"CategoricalTicker"}},"id":"af8ac21b-b342-4cfa-8407-248a0a31c9fa","type":"Grid"},{"attributes":{"callback":null,"factors":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"]},"id":"1f336c6d-e042-4969-afe6-17cca0f340c3","type":"FactorRange"}],"root_ids":["dc8a5214-93b5-4e35-b5a3-f8a2f526bc94"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"681058cb-ceae-4146-b14e-1fac43d0930c","elementid":"2790d601-eb43-4fa2-b6a2-3a55720c84c0","modelid":"dc8a5214-93b5-4e35-b5a3-f8a2f526bc94"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
