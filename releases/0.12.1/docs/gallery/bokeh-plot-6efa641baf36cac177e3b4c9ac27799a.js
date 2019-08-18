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
      };var element = document.getElementById("fcf11cd6-4835-4b5e-a898-fcaad957ef3f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fcf11cd6-4835-4b5e-a898-fcaad957ef3f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"c9f7c73e-a3c3-44e3-b7df-576d634d24d6":{"roots":{"references":[{"attributes":{"data_source":{"id":"c4de0200-da8d-4f22-854a-2816a77f7050","type":"ColumnDataSource"},"glyph":{"id":"35f8a1f7-a487-4542-ab33-4d628ddfc110","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"863e3be3-2929-4d9e-abf3-78e806fe7821","type":"Rect"},"selection_glyph":null},"id":"c6f90bc7-dd01-4d87-8d87-6fc518fac8da","type":"GlyphRenderer"},{"attributes":{},"id":"502f345e-3a7b-4e8e-af4d-f86e1c6c8d0d","type":"ToolEvents"},{"attributes":{},"id":"4f6e1ae8-9e9d-4033-996d-a66d37827760","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["VII","VI","V","IV","III","II","I"]},"id":"45252dc5-6b7a-4f74-8bff-2b3b9e83660f","type":"FactorRange"},{"attributes":{"text":{"field":"mass"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"5pt"},"x":{"field":"symx"},"y":{"field":"massy"}},"id":"b45e3908-ba5a-4d3e-b9bf-32a5a6c99b87","type":"Text"},{"attributes":{"text":{"field":"atomic_number"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"symx"},"y":{"field":"numbery"}},"id":"095fa8ed-105d-4f86-ad62-74172237103f","type":"Text"},{"attributes":{"data_source":{"id":"c4de0200-da8d-4f22-854a-2816a77f7050","type":"ColumnDataSource"},"glyph":{"id":"65fb862d-459f-4ccb-8fae-c6ba3be825ad","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"095fa8ed-105d-4f86-ad62-74172237103f","type":"Text"},"selection_glyph":null},"id":"69d774c8-f9b3-4d24-9b21-537c9f0583fd","type":"GlyphRenderer"},{"attributes":{"text":{"field":"sym"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"15pt"},"text_font_style":"bold","x":{"field":"symx"},"y":{"field":"period"}},"id":"bf8f0273-d8d7-4f6a-98bd-997b0696e025","type":"Text"},{"attributes":{"callback":null,"column_names":["type_color","cpk","group","name","atomic_number","type","massy","period","sym","namey","mass","symx","electronic","numbery"],"data":{"atomic_number":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],"cpk":["#FFFFFF","#D9FFFF","#CC80FF","#C2FF00","#FFB5B5","#909090","#3050F8","#FF0D0D","#90E050","#B3E3F5","#AB5CF2","#8AFF00","#BFA6A6","#F0C8A0","#FF8000","#FFFF30","#1FF01F","#80D1E3","#8F40D4","#3DFF00","#E6E6E6","#BFC2C7","#A6A6AB","#8A99C7","#9C7AC7","#E06633","#F090A0","#50D050","#C88033","#7D80B0","#C28F8F","#668F8F","#BD80E3","#FFA100","#A62929","#5CB8D1","#702EB0","#00FF00","#94FFFF","#94E0E0","#73C2C9","#54B5B5","#3B9E9E","#248F8F","#0A7D8C","#006985","#C0C0C0","#FFD98F","#A67573","#668080","#9E63B5","#D47A00","#940094","#429EB0","#57178F","#00C900","#00AB24","#4DC2FF","#4DA6FF","#2194D6","#267DAB","#266696","#175487","#D0D0E0","#FFD123","#B8B8D0","#A6544D","#575961","#9E4FB5","#AB5C00","#754F45","#428296","#420066","#007D00","#C70066","#CC0059","#D1004F","#D90045","#E00038","#E6002E","#EB0026","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493"],"electronic":["1s1","1s2","[He] 2s1","[He] 2s2","[He] 2s2 2p1","[He] 2s2 2p2","[He] 2s2 2p3","[He] 2s2 2p4","[He] 2s2 2p5","[He] 2s2 2p6","[Ne] 3s1","[Ne] 3s2","[Ne] 3s2 3p1","[Ne] 3s2 3p2","[Ne] 3s2 3p3","[Ne] 3s2 3p4","[Ne] 3s2 3p5","[Ne] 3s2 3p6","[Ar] 4s1","[Ar] 4s2","[Ar] 3d1 4s2","[Ar] 3d2 4s2","[Ar] 3d3 4s2","[Ar] 3d5 4s1","[Ar] 3d5 4s2","[Ar] 3d6 4s2","[Ar] 3d7 4s2","[Ar] 3d8 4s2","[Ar] 3d10 4s1","[Ar] 3d10 4s2","[Ar] 3d10 4s2 4p1","[Ar] 3d10 4s2 4p2","[Ar] 3d10 4s2 4p3","[Ar] 3d10 4s2 4p4","[Ar] 3d10 4s2 4p5","[Ar] 3d10 4s2 4p6","[Kr] 5s1","[Kr] 5s2","[Kr] 4d1 5s2","[Kr] 4d2 5s2","[Kr] 4d4 5s1","[Kr] 4d5 5s1","[Kr] 4d5 5s2","[Kr] 4d7 5s1","[Kr] 4d8 5s1","[Kr] 4d10","[Kr] 4d10 5s1","[Kr] 4d10 5s2","[Kr] 4d10 5s2 5p1","[Kr] 4d10 5s2 5p2","[Kr] 4d10 5s2 5p3","[Kr] 4d10 5s2 5p4","[Kr] 4d10 5s2 5p5","[Kr] 4d10 5s2 5p6","[Xe] 6s1","[Xe] 6s2","[Xe] 4f14 5d1 6s2","[Xe] 4f14 5d2 6s2","[Xe] 4f14 5d3 6s2","[Xe] 4f14 5d4 6s2","[Xe] 4f14 5d5 6s2","[Xe] 4f14 5d6 6s2","[Xe] 4f14 5d7 6s2","[Xe] 4f14 5d9 6s1","[Xe] 4f14 5d10 6s1","[Xe] 4f14 5d10 6s2","[Xe] 4f14 5d10 6s2 6p1","[Xe] 4f14 5d10 6s2 6p2","[Xe] 4f14 5d10 6s2 6p3","[Xe] 4f14 5d10 6s2 6p4","[Xe] 4f14 5d10 6s2 6p5","[Xe] 4f14 5d10 6s2 6p6","[Rn] 7s1","[Rn] 7s2","[Rn] 5f14 7s2 7p1","[Rn] 5f14 6d2 7s2","[Rn].5f14.6d3.7s2","[Rn].5f14.6d4.7s2","[Rn].5f14.6d5.7s2","[Rn].5f14.6d6.7s2","[Rn].5f14.6d7.7s2","[Rn].5f14.6d9.7s1","[Rn].5f14.6d10.7s1","[Rn].5f14.6d10.7s2","[Rn].5f14.6d10.7s2.7p1","[Rn].5f14.6d10.7s2.7p2","[Rn].5f14.6d10.7s2.7p3","[Rn].5f14.6d10.7s2.7p4","[Rn].5f14.6d10.7s2.7p5","[Rn].5f14.6d10.7s2.7p6"],"group":["1","18","1","2","13","14","15","16","17","18","1","2","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],"mass":["1.00794","4.002602","6.941","9.012182","10.811","12.0107","14.0067","15.9994","18.9984032","20.1797","22.98976928","24.3050","26.9815386","28.0855","30.973762","32.065","35.453","39.948","39.0983","40.078","44.955912","47.867","50.9415","51.9961","54.938045","55.845","58.933195","58.6934","63.546","65.38","69.723","72.64","74.92160","78.96","79.904","83.798","85.4678","87.62","88.90585","91.224","92.90638","95.96","[98]","101.07","102.90550","106.42","107.8682","112.411","114.818","118.710","121.760","127.60","126.90447","131.293","132.9054519","137.327","174.9668","178.49","180.94788","183.84","186.207","190.23","192.217","195.084","196.966569","200.59","204.3833","207.2","208.98040","[209]","[210]","[222]","[223]","[226]","[262]","[267]","[268]","[271]","[272]","[270]","[276]","[281]","[280]","[285]","[284]","[289]","[288]","[293]","[294]","[294]"],"massy":["I:0.15","I:0.15","II:0.15","II:0.15","II:0.15","II:0.15","II:0.15","II:0.15","II:0.15","II:0.15","III:0.15","III:0.15","III:0.15","III:0.15","III:0.15","III:0.15","III:0.15","III:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","IV:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","V:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VI:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15","VII:0.15"],"name":["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Ununtrium","Flerovium","Ununpentium","Livermorium","Ununseptium","Ununoctium"],"namey":["I:0.3","I:0.3","II:0.3","II:0.3","II:0.3","II:0.3","II:0.3","II:0.3","II:0.3","II:0.3","III:0.3","III:0.3","III:0.3","III:0.3","III:0.3","III:0.3","III:0.3","III:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","IV:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","V:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VI:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3","VII:0.3"],"numbery":["I:0.8","I:0.8","II:0.8","II:0.8","II:0.8","II:0.8","II:0.8","II:0.8","II:0.8","II:0.8","III:0.8","III:0.8","III:0.8","III:0.8","III:0.8","III:0.8","III:0.8","III:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","IV:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","V:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VI:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8","VII:0.8"],"period":["I","I","II","II","II","II","II","II","II","II","III","III","III","III","III","III","III","III","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII"],"sym":["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Uut","Fl","Uup","Lv","Uus","Uuo"],"symx":["1:0.1","18:0.1","1:0.1","2:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1","1:0.1","2:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1","1:0.1","2:0.1","3:0.1","4:0.1","5:0.1","6:0.1","7:0.1","8:0.1","9:0.1","10:0.1","11:0.1","12:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1","1:0.1","2:0.1","3:0.1","4:0.1","5:0.1","6:0.1","7:0.1","8:0.1","9:0.1","10:0.1","11:0.1","12:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1","1:0.1","2:0.1","3:0.1","4:0.1","5:0.1","6:0.1","7:0.1","8:0.1","9:0.1","10:0.1","11:0.1","12:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1","1:0.1","2:0.1","3:0.1","4:0.1","5:0.1","6:0.1","7:0.1","8:0.1","9:0.1","10:0.1","11:0.1","12:0.1","13:0.1","14:0.1","15:0.1","16:0.1","17:0.1","18:0.1"],"type":["nonmetal","noble gas","alkali metal","alkaline earth metal","metalloid","nonmetal","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","metal","metalloid","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metalloid","metalloid","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metalloid","metalloid","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metal","metalloid","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metal","metal","halogen","noble gas"],"type_color":["#baa2a6","#bbbb88","#a6cee3","#1f78b4","#33a02c","#baa2a6","#baa2a6","#baa2a6","#fdbf6f","#bbbb88","#a6cee3","#1f78b4","#b2df8a","#33a02c","#baa2a6","#baa2a6","#fdbf6f","#bbbb88","#a6cee3","#1f78b4","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#b2df8a","#33a02c","#33a02c","#baa2a6","#fdbf6f","#bbbb88","#a6cee3","#1f78b4","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#b2df8a","#b2df8a","#33a02c","#33a02c","#fdbf6f","#bbbb88","#a6cee3","#1f78b4","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#b2df8a","#b2df8a","#b2df8a","#33a02c","#fdbf6f","#bbbb88","#a6cee3","#1f78b4","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#e08e79","#b2df8a","#b2df8a","#b2df8a","#b2df8a","#fdbf6f","#bbbb88"]}},"id":"c4de0200-da8d-4f22-854a-2816a77f7050","type":"ColumnDataSource"},{"attributes":{},"id":"3c19a78f-f898-4ca3-88d1-0c4f24a879fd","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"1789c678-a0c8-4b89-8b61-902ea017db19","type":"CategoricalAxis"}],"left":[{"id":"18cd633a-3d01-43aa-b47d-878f0937c96a","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_width":1200,"renderers":[{"id":"1789c678-a0c8-4b89-8b61-902ea017db19","type":"CategoricalAxis"},{"id":"98cea696-bb60-465c-ac47-cc9eea29ae79","type":"Grid"},{"id":"18cd633a-3d01-43aa-b47d-878f0937c96a","type":"CategoricalAxis"},{"id":"1cd6e642-7b27-4f96-9228-f63fdc8a0374","type":"Grid"},{"id":"c6f90bc7-dd01-4d87-8d87-6fc518fac8da","type":"GlyphRenderer"},{"id":"975c4770-aaed-4603-851d-bda729053ca7","type":"GlyphRenderer"},{"id":"69d774c8-f9b3-4d24-9b21-537c9f0583fd","type":"GlyphRenderer"},{"id":"7126dfb0-ae02-41e4-af94-3f4035c9b231","type":"GlyphRenderer"},{"id":"0c1351fd-537c-4f63-91a0-6c595277928f","type":"GlyphRenderer"}],"title":{"id":"b88a7fde-43ed-41d6-ac98-1b8cc35466a4","type":"Title"},"tool_events":{"id":"502f345e-3a7b-4e8e-af4d-f86e1c6c8d0d","type":"ToolEvents"},"toolbar":{"id":"51a89a26-dffe-4676-a5f4-dca4b10b48cb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"77d66fc9-53da-4cd4-8ef5-88a7afab7e89","type":"FactorRange"},"y_range":{"id":"45252dc5-6b7a-4f74-8bff-2b3b9e83660f","type":"FactorRange"}},"id":"202bf6cf-dbf3-418e-be7d-d675a56c75e5","subtype":"Figure","type":"Plot"},{"attributes":{"text":{"field":"atomic_number"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"symx"},"y":{"field":"numbery"}},"id":"65fb862d-459f-4ccb-8fae-c6ba3be825ad","type":"Text"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"202bf6cf-dbf3-418e-be7d-d675a56c75e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f6e1ae8-9e9d-4033-996d-a66d37827760","type":"CategoricalTicker"}},"id":"1cd6e642-7b27-4f96-9228-f63fdc8a0374","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.9},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.9},"x":{"field":"group"},"y":{"field":"period"}},"id":"863e3be3-2929-4d9e-abf3-78e806fe7821","type":"Rect"},{"attributes":{"data_source":{"id":"c4de0200-da8d-4f22-854a-2816a77f7050","type":"ColumnDataSource"},"glyph":{"id":"1ebb24e3-a512-472d-a7b2-08c15c811c9c","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"bf8f0273-d8d7-4f6a-98bd-997b0696e025","type":"Text"},"selection_glyph":null},"id":"975c4770-aaed-4603-851d-bda729053ca7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c4de0200-da8d-4f22-854a-2816a77f7050","type":"ColumnDataSource"},"glyph":{"id":"5ea626d1-a778-4213-bde0-12ed37f6ff7c","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"aa06848a-9fc0-4595-82c3-2e841e485f10","type":"Text"},"selection_glyph":null},"id":"7126dfb0-ae02-41e4-af94-3f4035c9b231","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"bdeb01bb-a0f3-4275-8666-2df1d752bf05","type":"CategoricalTickFormatter"},"plot":{"id":"202bf6cf-dbf3-418e-be7d-d675a56c75e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"0608e161-ec7c-4b74-9928-ec3307584005","type":"CategoricalTicker"}},"id":"1789c678-a0c8-4b89-8b61-902ea017db19","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"202bf6cf-dbf3-418e-be7d-d675a56c75e5","subtype":"Figure","type":"Plot"}},"id":"fb9b3d4d-71d6-4426-a464-2c29cfd46661","type":"SaveTool"},{"attributes":{"plot":null,"text":"Periodic Table"},"id":"b88a7fde-43ed-41d6-ac98-1b8cc35466a4","type":"Title"},{"attributes":{"callback":null,"plot":{"id":"202bf6cf-dbf3-418e-be7d-d675a56c75e5","subtype":"Figure","type":"Plot"},"tooltips":[["name","@name"],["atomic number","@atomic_number"],["type","@type"],["atomic mass","@mass"],["CPK color","$color[hex, swatch]:cpk"],["electronic configuration","@electronic"]]},"id":"29f18dc3-fb57-4b2d-b4b4-cbc853afd774","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"field":"type_color"},"height":{"units":"data","value":0.9},"line_color":{"field":"type_color"},"width":{"units":"data","value":0.9},"x":{"field":"group"},"y":{"field":"period"}},"id":"35f8a1f7-a487-4542-ab33-4d628ddfc110","type":"Rect"},{"attributes":{"callback":null,"factors":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"]},"id":"77d66fc9-53da-4cd4-8ef5-88a7afab7e89","type":"FactorRange"},{"attributes":{},"id":"0608e161-ec7c-4b74-9928-ec3307584005","type":"CategoricalTicker"},{"attributes":{"text":{"field":"name"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"6pt"},"x":{"field":"symx"},"y":{"field":"namey"}},"id":"5ea626d1-a778-4213-bde0-12ed37f6ff7c","type":"Text"},{"attributes":{"text":{"field":"mass"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"5pt"},"x":{"field":"symx"},"y":{"field":"massy"}},"id":"fe5009ca-2c28-4970-b4a7-477ad5aff711","type":"Text"},{"attributes":{},"id":"bdeb01bb-a0f3-4275-8666-2df1d752bf05","type":"CategoricalTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"202bf6cf-dbf3-418e-be7d-d675a56c75e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"0608e161-ec7c-4b74-9928-ec3307584005","type":"CategoricalTicker"}},"id":"98cea696-bb60-465c-ac47-cc9eea29ae79","type":"Grid"},{"attributes":{"data_source":{"id":"c4de0200-da8d-4f22-854a-2816a77f7050","type":"ColumnDataSource"},"glyph":{"id":"b45e3908-ba5a-4d3e-b9bf-32a5a6c99b87","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"fe5009ca-2c28-4970-b4a7-477ad5aff711","type":"Text"},"selection_glyph":null},"id":"0c1351fd-537c-4f63-91a0-6c595277928f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3c19a78f-f898-4ca3-88d1-0c4f24a879fd","type":"CategoricalTickFormatter"},"plot":{"id":"202bf6cf-dbf3-418e-be7d-d675a56c75e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f6e1ae8-9e9d-4033-996d-a66d37827760","type":"CategoricalTicker"}},"id":"18cd633a-3d01-43aa-b47d-878f0937c96a","type":"CategoricalAxis"},{"attributes":{"text":{"field":"sym"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"15pt"},"text_font_style":"bold","x":{"field":"symx"},"y":{"field":"period"}},"id":"1ebb24e3-a512-472d-a7b2-08c15c811c9c","type":"Text"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"29f18dc3-fb57-4b2d-b4b4-cbc853afd774","type":"HoverTool"},{"id":"fb9b3d4d-71d6-4426-a464-2c29cfd46661","type":"SaveTool"}]},"id":"51a89a26-dffe-4676-a5f4-dca4b10b48cb","type":"Toolbar"},{"attributes":{"text":{"field":"name"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"6pt"},"x":{"field":"symx"},"y":{"field":"namey"}},"id":"aa06848a-9fc0-4595-82c3-2e841e485f10","type":"Text"}],"root_ids":["202bf6cf-dbf3-418e-be7d-d675a56c75e5"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"c9f7c73e-a3c3-44e3-b7df-576d634d24d6","elementid":"fcf11cd6-4835-4b5e-a898-fcaad957ef3f","modelid":"202bf6cf-dbf3-418e-be7d-d675a56c75e5"}];
              
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