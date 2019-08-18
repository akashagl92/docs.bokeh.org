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
      };var element = document.getElementById("d897d128-fd4c-4634-aff5-2aa06c1615fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd897d128-fd4c-4634-aff5-2aa06c1615fe' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"fc979584-ebd5-4b26-ae60-1f7702392d2e":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["atomic number","symbol","name","atomic mass","CPK","electronic configuration","electronegativity","atomic radius","ion radius","van der Waals radius","IE-1","EA","standard state","bonding type","melting point","boiling point","density","metal","year discovered","group","period","index"],"data":{"CPK":["#FFFFFF","#D9FFFF","#CC80FF","#C2FF00","#FFB5B5","#909090","#3050F8","#FF0D0D","#90E050","#B3E3F5","#AB5CF2","#8AFF00","#BFA6A6","#F0C8A0","#FF8000","#FFFF30","#1FF01F","#80D1E3","#8F40D4","#3DFF00","#E6E6E6","#BFC2C7","#A6A6AB","#8A99C7","#9C7AC7","#E06633","#F090A0","#50D050","#C88033","#7D80B0","#C28F8F","#668F8F","#BD80E3","#FFA100","#A62929","#5CB8D1","#702EB0","#00FF00","#94FFFF","#94E0E0","#73C2C9","#54B5B5","#3B9E9E","#248F8F","#0A7D8C","#006985","#C0C0C0","#FFD98F","#A67573","#668080","#9E63B5","#D47A00","#940094","#429EB0","#57178F","#00C900","#4DC2FF","#4DA6FF","#2194D6","#267DAB","#266696","#175487","#D0D0E0","#FFD123","#B8B8D0","#A6544D","#575961","#9E4FB5","#AB5C00","#754F45","#428296","#420066","#007D00","#CC0059","#D1004F","#D90045","#E00038","#E6002E","#EB0026","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493"],"EA":{"__ndarray__":"AAAAAABAUsAAAAAAAAAAAAAAAAAAAE7AAAAAAAAAAAAAAAAAAAA7wAAAAAAAQGPAAAAAAAAAHMAAAAAAAKBhwAAAAAAAgHTAAAAAAAAAAAAAAAAAAIBKwAAAAAAAAAAAAAAAAACARcAAAAAAAMBgwAAAAAAAAFLAAAAAAAAAacAAAAAAANB1wAAAAAAAAAAAAAAAAAAASMAAAAAAAAAAwAAAAAAAADLAAAAAAAAAIMAAAAAAAIBJwAAAAAAAAFDAAAAAAAAAAAAAAAAAAAAwwAAAAAAAAFDAAAAAAAAAXMAAAAAAAIBdwAAAAAAAAAAAAAAAAAAAPcAAAAAAAMBdwAAAAAAAgFPAAAAAAABgaMAAAAAAAFB0wAAAAAAAAAAAAAAAAACAR8AAAAAAAAAUwAAAAAAAAD7AAAAAAACARMAAAAAAAIBVwAAAAAAAAFLAAAAAAACASsAAAAAAAEBZwAAAAAAAgFvAAAAAAAAAS8AAAAAAAIBfwAAAAAAAAAAAAAAAAAAAPcAAAAAAAMBawAAAAAAAwFnAAAAAAADAZ8AAAAAAAHBywAAAAAAAAAAAAAAAAAAAR8AAAAAAAAAswAAAAAAAAAAAAAAAAAAAP8AAAAAAAMBTwAAAAAAAAC7AAAAAAACAWsAAAAAAAOBiwAAAAAAAoGnAAAAAAADga8AAAAAAAAAAAAAAAAAAADPAAAAAAACAQcAAAAAAAMBWwAAAAAAA4GbAAAAAAADgcMAAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"IE-1":{"__ndarray__":"AAAAAACAlEAAAAAAAIiiQAAAAAAAQIBAAAAAAAAgjEAAAAAAAAiJQAAAAAAA/JBAAAAAAADolUAAAAAAAIiUQAAAAAAARJpAAAAAAABCoEAAAAAAAAB/QAAAAAAAEIdAAAAAAAAQgkAAAAAAAJiIQAAAAAAAoI9AAAAAAABAj0AAAAAAAIyTQAAAAAAAxJdAAAAAAAAwekAAAAAAAHCCQAAAAAAAyINAAAAAAACYhEAAAAAAAFiEQAAAAAAAaIRAAAAAAABohkAAAAAAANiHQAAAAAAAwIdAAAAAAAAIh0AAAAAAAFCHQAAAAAAAUIxAAAAAAAAYgkAAAAAAANCHQAAAAAAAmI1AAAAAAABojUAAAAAAANCRQAAAAAAAHJVAAAAAAAAweUAAAAAAADCBQAAAAAAAwIJAAAAAAAAAhEAAAAAAAGCEQAAAAAAAYIVAAAAAAADwhUAAAAAAADCGQAAAAAAAgIZAAAAAAAAgiUAAAAAAANiGQAAAAAAAIItAAAAAAABwgUAAAAAAACiGQAAAAAAAEIpAAAAAAAAoi0AAAAAAAICPQAAAAAAASJJAAAAAAACAd0AAAAAAAHB/QAAAAAAAmIRAAAAAAADIh0AAAAAAABCIQAAAAAAAwIdAAAAAAABAikAAAAAAAICLQAAAAAAAMItAAAAAAADQi0AAAAAAAHiPQAAAAAAAaIJAAAAAAABghkAAAAAAAPiFQAAAAAAAYIlAAAAAAADAjEAAAAAAADSQQAAAAAAAwHdAAAAAAADQf0AAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"atomic mass":["1.00794","4.002602","6.941","9.012182","10.811","12.0107","14.0067","15.9994","18.9984032","20.1797","22.98976928","24.3050","26.9815386","28.0855","30.973762","32.065","35.453","39.948","39.0983","40.078","44.955912","47.867","50.9415","51.9961","54.938045","55.845","58.933195","58.6934","63.546","65.38","69.723","72.64","74.92160","78.96","79.904","83.798","85.4678","87.62","88.90585","91.224","92.90638","95.96","[98]","101.07","102.90550","106.42","107.8682","112.411","114.818","118.710","121.760","127.60","126.90447","131.293","132.9054519","137.327","178.49","180.94788","183.84","186.207","190.23","192.217","195.084","196.966569","200.59","204.3833","207.2","208.98040","[209]","[210]","[222]","[223]","[226]","[267]","[268]","[271]","[272]","[270]","[276]","[281]","[280]","[285]","[284]","[289]","[288]","[293]","[294]","[294]"],"atomic number":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],"atomic radius":{"__ndarray__":"AAAAAACAQkAAAAAAAABAQAAAAAAAwGBAAAAAAACAVkAAAAAAAIBUQAAAAAAAQFNAAAAAAADAUkAAAAAAAEBSQAAAAAAAwFFAAAAAAABAUUAAAAAAAEBjQAAAAAAAQGBAAAAAAACAXUAAAAAAAMBbQAAAAAAAgFpAAAAAAACAWUAAAAAAAMBYQAAAAAAAQFhAAAAAAACAaEAAAAAAAMBlQAAAAAAAAGJAAAAAAAAAYUAAAAAAAEBfQAAAAAAAwF9AAAAAAABgYUAAAAAAAEBfQAAAAAAAgF9AAAAAAABAXkAAAAAAAEBhQAAAAAAAYGBAAAAAAACAX0AAAAAAAIBeQAAAAAAAwF1AAAAAAAAAXUAAAAAAAIBcQAAAAAAAgFtAAAAAAABgakAAAAAAAABoQAAAAAAAQGRAAAAAAACAYkAAAAAAACBhQAAAAAAAIGJAAAAAAACAY0AAAAAAAIBfQAAAAAAA4GBAAAAAAABgYEAAAAAAACBjQAAAAAAAgGJAAAAAAAAAYkAAAAAAAKBhQAAAAAAAQGFAAAAAAADgYEAAAAAAAKBgQAAAAAAAQGBAAAAAAAAgbEAAAAAAAMBoQAAAAAAAwGJAAAAAAABAYUAAAAAAAEBiQAAAAAAA4GNAAAAAAAAAYEAAAAAAACBhQAAAAAAAAGBAAAAAAAAAYkAAAAAAAKBiQAAAAAAAgGJAAAAAAABgYkAAAAAAAEBiQAAAAAAAAPh/AAAAAAAA+H8AAAAAACBiQAAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"boiling point":{"__ndarray__":"AAAAAAAANEAAAAAAAAAQQAAAAAAAPJlAAAAAAABupUAAAAAAALGwQAAAAAAAzLBAAAAAAABAU0AAAAAAAIBWQAAAAAAAQFVAAAAAAAAAO0AAAAAAABCSQAAAAAAATJVAAAAAAADQpUAAAAAAAMqoQAAAAAAAUIFAAAAAAABwhkAAAAAAAOBtQAAAAAAAwFVAAAAAAAAgkEAAAAAAAHSbQAAAAAAAPqhAAAAAAADQq0AAAAAAAMCsQAAAAAAAAKdAAAAAAAA8okAAAAAAAHyoQAAAAAAAAKlAAAAAAADkqEAAAAAAAACpQAAAAAAAcJJAAAAAAABao0AAAAAAACqoQAAAAAAAuItAAAAAAADwjUAAAAAAAMB0QAAAAAAAAF5AAAAAAAAIjkAAAAAAANyZQAAAAAAARKxAAAAAAABKskAAAAAAAJmzQAAAAAAAMLNAAAAAAAC6sUAAAAAAAEexQAAAAAAAAK9AAAAAAABIqUAAAAAAAAajQAAAAAAAQJBAAAAAAABSokAAAAAAAHamQAAAAAAAEJ1AAAAAAAC0k0AAAAAAAJB8QAAAAAAAoGRAAAAAAACAjUAAAAAAAL6gQAAAAAAADLNAAAAAAABjtkAAAAAAAMS2QAAAAAAA7bZAAAAAAACltEAAAAAAAF2yQAAAAAAAArBAAAAAAAByqEAAAAAAALCDQAAAAAAASJtAAAAAAACYn0AAAAAAALScQAAAAAAATJNAAAAAAAAA+H8AAAAAAGBqQAAAAAAAAPh/AAAAAABon0AAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"bonding type":["diatomic","atomic","metallic","metallic","covalent network","covalent network","diatomic","diatomic","atomic","atomic","metallic","metallic","metallic","metallic","covalent network","covalent network","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"density":{"__ndarray__":"4yZZPRaRFz8AAAAAAAAAAEjhehSuR+E/mpmZmZmZ/T+uR+F6FK4DQBSuR+F6FAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK16NwPQrvP9ejcD0K1/s/mpmZmZmZBUCkcD0K16MCQB+F61G4Hv0/XI/C9Shc/z8AAAAAAAAAAAAAAAAAAAAAhetRuB6F6z/NzMzMzMz4P+xRuB6F6wdACtejcD0KEkBxPQrXo3AYQI/C9ShcjxxA4XoUrkfhHUB7FK5H4XofQM3MzMzMzCFAUrgehevRIUDXo3A9CtchQI/C9ShcjxxAmpmZmZmZF0BI4XoUrkcVQOxRuB6F6xZASOF6FK5HE0D2KFyPwvUIQAAAAAAAAAAAexSuR+F6+D8K16NwPQoFQOF6FK5H4RFACtejcD0KGkCkcD0K1yMhQI/C9ShcjyRAAAAAAAAAJ0A9CtejcL0oQGZmZmZm5ihACtejcD0KKEB7FK5H4fokQM3MzMzMTCFAPQrXo3A9HUA9CtejcD0dQM3MzMzMzBpA9ihcj8L1GEDD9Shcj8ITQHsUrkfheoQ/FK5H4XoU/j8UrkfhehQMQB+F61G4nipAZmZmZmamMEAAAAAAAEAzQIXrUbgeBTVA16NwPQqXNkCPwvUoXI82QNejcD0KFzVAzczMzMxMM0CPwvUoXA8rQDMzMzMzsydArkfhehSuJkCPwvUoXI8jQGZmZmZmZiJAAAAAAAAA+H97FK5H4XqEPwAAAAAAAPh/AAAAAAAAFEAAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"electronegativity":{"__ndarray__":"mpmZmZmZAUAAAAAAAAD4f1yPwvUoXO8/H4XrUbge+T9SuB6F61EAQGZmZmZmZgRAUrgehetRCECF61G4HoULQNejcD0K1w9AAAAAAAAA+H/D9Shcj8LtP/YoXI/C9fQ/w/UoXI/C+T9mZmZmZmb+P4XrUbgehQFApHA9CtejBEBI4XoUrkcJQAAAAAAAAPh/PQrXo3A96j8AAAAAAADwP8P1KFyPwvU/pHA9Ctej+D8UrkfhehT6P4/C9Shcj/o/zczMzMzM+D9I4XoUrkf9PxSuR+F6FP4/j8L1KFyP/j9mZmZmZmb+P2ZmZmZmZvo/9ihcj8L1/D8UrkfhehQAQHE9CtejcAFAZmZmZmZmBECuR+F6FK4HQAAAAAAAAPh/PQrXo3A96j9mZmZmZmbuP4XrUbgehfM/SOF6FK5H9T+amZmZmZn5P0jhehSuRwFAZmZmZmZm/j+amZmZmZkBQD0K16NwPQJAmpmZmZmZAUDhehSuR+H+PwrXo3A9Cvs/exSuR+F6/D9cj8L1KFz/P2ZmZmZmZgBAzczMzMzMAEBI4XoUrkcFQAAAAAAAAPh/SOF6FK5H6T97FK5H4XrsP83MzMzMzPQ/AAAAAAAA+D/hehSuR+ECQGZmZmZmZv4/mpmZmZmZAUCamZmZmZkBQD0K16NwPQJAUrgehetRBEAAAAAAAAAAQFK4HoXrUQBApHA9CtejAkApXI/C9SgAQAAAAAAAAABAmpmZmZmZAUAAAAAAAAD4f2ZmZmZmZuY/zczMzMzM7D8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"electronic configuration":["1s1","1s2","[He] 2s1","[He] 2s2","[He] 2s2 2p1","[He] 2s2 2p2","[He] 2s2 2p3","[He] 2s2 2p4","[He] 2s2 2p5","[He] 2s2 2p6","[Ne] 3s1","[Ne] 3s2","[Ne] 3s2 3p1","[Ne] 3s2 3p2","[Ne] 3s2 3p3","[Ne] 3s2 3p4","[Ne] 3s2 3p5","[Ne] 3s2 3p6","[Ar] 4s1","[Ar] 4s2","[Ar] 3d1 4s2","[Ar] 3d2 4s2","[Ar] 3d3 4s2","[Ar] 3d5 4s1","[Ar] 3d5 4s2","[Ar] 3d6 4s2","[Ar] 3d7 4s2","[Ar] 3d8 4s2","[Ar] 3d10 4s1","[Ar] 3d10 4s2","[Ar] 3d10 4s2 4p1","[Ar] 3d10 4s2 4p2","[Ar] 3d10 4s2 4p3","[Ar] 3d10 4s2 4p4","[Ar] 3d10 4s2 4p5","[Ar] 3d10 4s2 4p6","[Kr] 5s1","[Kr] 5s2","[Kr] 4d1 5s2","[Kr] 4d2 5s2","[Kr] 4d4 5s1","[Kr] 4d5 5s1","[Kr] 4d5 5s2","[Kr] 4d7 5s1","[Kr] 4d8 5s1","[Kr] 4d10","[Kr] 4d10 5s1","[Kr] 4d10 5s2","[Kr] 4d10 5s2 5p1","[Kr] 4d10 5s2 5p2","[Kr] 4d10 5s2 5p3","[Kr] 4d10 5s2 5p4","[Kr] 4d10 5s2 5p5","[Kr] 4d10 5s2 5p6","[Xe] 6s1","[Xe] 6s2","[Xe] 4f14 5d2 6s2","[Xe] 4f14 5d3 6s2","[Xe] 4f14 5d4 6s2","[Xe] 4f14 5d5 6s2","[Xe] 4f14 5d6 6s2","[Xe] 4f14 5d7 6s2","[Xe] 4f14 5d9 6s1","[Xe] 4f14 5d10 6s1","[Xe] 4f14 5d10 6s2","[Xe] 4f14 5d10 6s2 6p1","[Xe] 4f14 5d10 6s2 6p2","[Xe] 4f14 5d10 6s2 6p3","[Xe] 4f14 5d10 6s2 6p4","[Xe] 4f14 5d10 6s2 6p5","[Xe] 4f14 5d10 6s2 6p6","[Rn] 7s1","[Rn] 7s2","[Rn] 5f14 6d2 7s2","[Rn].5f14.6d3.7s2","[Rn].5f14.6d4.7s2","[Rn].5f14.6d5.7s2","[Rn].5f14.6d6.7s2","[Rn].5f14.6d7.7s2","[Rn].5f14.6d9.7s1","[Rn].5f14.6d10.7s1","[Rn].5f14.6d10.7s2","[Rn].5f14.6d10.7s2.7p1","[Rn].5f14.6d10.7s2.7p2","[Rn].5f14.6d10.7s2.7p3","[Rn].5f14.6d10.7s2.7p4","[Rn].5f14.6d10.7s2.7p5","[Rn].5f14.6d10.7s2.7p6"],"group":["1","18","1","2","13","14","15","16","17","18","1","2","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117],"ion radius":["NaN","NaN","76 (+1)","45 (+2)","27 (+3)","16 (+4)","146 (-3)","140 (-2)","133 (-1)","NaN","102 (+1)","72 (+2)","53.5 (+3)","40 (+4)","44 (+3)","184 (-2)","181 (-1)","NaN","138 (+1)","100 (+2)","74.5 (+3)","86 (+2)","79 (+2)","80 (+2*)","67 (+2)","78 (+2*)","74.5 (+2*)","69 (+2)","77 (+1)","74 (+2)","62 (+3)","73 (+2)","58 (+3)","198 (-2)","196 (-1)","NaN","152 (+1)","118 (+2)","90 (+3)","72 (+4)","72 (+3)","69 (+3)","64.5 (+4)","68 (+3)","66.5 (+3)","59 (+1)","115 (+1)","95 (+2)","80 (+3)","112 (+2)","76 (+3)","221 (-2)","220 (-1)","48 (+8)","167 (+1)","135 (+2)","71 (+4)","72 (+3)","66 (+4)","63 (+4)","63 (+4)","68 (+3)","86 (+2)","137 (+1)","119 (+1)","150 (+1)","119 (+2)","103 (+3)","94 (+4)","62 (+7)","NaN","180 (+1)","148 (+2)","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"melting point":{"__ndarray__":"AAAAAAAALEAAAAAAAAD4fwAAAAAAYHxAAAAAAABgmEAAAAAAAFiiQAAAAAAA3q1AAAAAAACAT0AAAAAAAIBLQAAAAAAAAEtAAAAAAAAAOUAAAAAAADB3QAAAAAAA2IxAAAAAAAAojUAAAAAAAFyaQAAAAAAA0HNAAAAAAABAeEAAAAAAAIBlQAAAAAAAAFVAAAAAAAAQdUAAAAAAAGyRQAAAAAAAWJxAAAAAAABUnkAAAAAAAA6hQAAAAAAACKFAAAAAAAC8l0AAAAAAAEycQAAAAAAAoJtAAAAAAAAAm0AAAAAAADiVQAAAAAAAqIVAAAAAAADwckAAAAAAAOySQAAAAAAACJFAAAAAAADgfkAAAAAAAKBwQAAAAAAAAF1AAAAAAACAc0AAAAAAAGiQQAAAAAAAHJxAAAAAAACgoEAAAAAAAHylQAAAAAAAoKZAAAAAAAD8okAAAAAAAF6kQAAAAAAAeqFAAAAAAACQnEAAAAAAAEyTQAAAAAAAkIJAAAAAAADgekAAAAAAAJB/QAAAAAAAQIxAAAAAAACYhkAAAAAAADB4QAAAAAAAIGRAAAAAAADgckAAAAAAAECPQAAAAAAAlKNAAAAAAAC0qUAAAAAAAN6sQAAAAAAABqtAAAAAAADUqUAAAAAAAGalQAAAAAAA5J9AAAAAAADklEAAAAAAAEBtQAAAAAAACIJAAAAAAADIgkAAAAAAAACBQAAAAAAAeIBAAAAAAAD4gUAAAAAAAEBpQAAAAAAAAPh/AAAAAABojkAAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"metal":["nonmetal","noble gas","alkali metal","alkaline earth metal","metalloid","nonmetal","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","metal","metalloid","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metalloid","metalloid","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metalloid","metalloid","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metal","metalloid","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metal","metal","halogen","noble gas"],"name":["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihomium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson"],"period":["I","I","II","II","II","II","II","II","II","II","III","III","III","III","III","III","III","III","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII"],"standard state":["gas","gas","solid","solid","solid","solid","gas","gas","gas","gas","solid","solid","solid","solid","solid","solid","gas","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","solid","solid","solid","solid","solid","gas","solid","solid","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"symbol":["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"],"van der Waals radius":{"__ndarray__":"AAAAAAAAXkAAAAAAAIBhQAAAAAAAwGZAAAAAAAAA+H8AAAAAAAD4fwAAAAAAQGVAAAAAAABgY0AAAAAAAABjQAAAAAAAYGJAAAAAAABAY0AAAAAAAGBsQAAAAAAAoGVAAAAAAAAA+H8AAAAAAEBqQAAAAAAAgGZAAAAAAACAZkAAAAAAAOBlQAAAAAAAgGdAAAAAAAAwcUAAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAABgZEAAAAAAAIBhQAAAAAAAYGFAAAAAAABgZ0AAAAAAAAD4fwAAAAAAIGdAAAAAAADAZ0AAAAAAACBnQAAAAAAAQGlAAAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAABgZEAAAAAAAIBlQAAAAAAAwGNAAAAAAAAgaEAAAAAAACBrQAAAAAAAAPh/AAAAAADAaUAAAAAAAMBoQAAAAAAAAGtAAAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAA4GVAAAAAAADAZEAAAAAAAGBjQAAAAAAAgGhAAAAAAABAaUAAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"year discovered":["1766","1868","1817","1798","1807","Ancient","1772","1774","1670","1898","1807","1808","Ancient","1854","1669","Ancient","1774","1894","1807","Ancient","1876","1791","1803","Ancient","1774","Ancient","Ancient","1751","Ancient","1746","1875","1886","Ancient","1817","1826","1898","1861","1790","1794","1789","1801","1778","1937","1827","1803","1803","Ancient","1817","1863","Ancient","Ancient","1782","1811","1898","1860","1808","1923","1802","1783","1925","1803","1803","Ancient","Ancient","Ancient","1861","Ancient","Ancient","1898","1940","1900","1939","1898","1969","1967","1974","1976","1984","1982","1994","1994","1996","2003","1998","2003","2000","2010","2002"]}},"id":"61edafe9-635a-43f3-93ae-f2507f7c23f9","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4228e853-5ce2-4391-a02b-43c060069445","type":"ColumnDataSource"},"glyph":{"id":"df93275a-e606-468d-99b7-52a548eb681c","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2fcec337-5c81-4c3b-b197-2d0790d637d5","type":"Text"},"selection_glyph":null,"view":{"id":"5f92691d-7599-47d0-8a30-b8bec81b1226","type":"CDSView"}},"id":"8686ee07-0858-4664-86b8-e3d67970723b","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["VII","VI","V","IV","III","II","I"]},"id":"b4730a42-d96b-4795-b700-8a13c46fc5bf","type":"FactorRange"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"df93275a-e606-468d-99b7-52a548eb681c","type":"Text"},{"attributes":{"label":{"field":"metal"},"renderers":[{"id":"a6201436-4347-4063-95aa-d41945c23a55","type":"GlyphRenderer"}]},"id":"9554547d-ce9f-45d3-8f1a-633481f22d9e","type":"LegendItem"},{"attributes":{"source":{"id":"61edafe9-635a-43f3-93ae-f2507f7c23f9","type":"ColumnDataSource"}},"id":"cbd9ad18-098a-48a1-8b7f-59b56b2cd8ae","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ce7ce8cc-b07f-4d65-8112-47954f33d343","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b72e8fc-3dcb-45b3-b6fb-6dcf48697d43","type":"CategoricalTicker"}},"id":"966425c1-8ef1-433e-a9da-16172a8ec7f4","type":"Grid"},{"attributes":{"data_source":{"id":"61edafe9-635a-43f3-93ae-f2507f7c23f9","type":"ColumnDataSource"},"glyph":{"id":"21e51450-a01e-47fd-862c-afe0762ab957","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2a232b55-462b-4139-bf9d-ca6d564449fe","type":"Text"},"selection_glyph":null,"view":{"id":"cbd9ad18-098a-48a1-8b7f-59b56b2cd8ae","type":"CDSView"}},"id":"348387cc-6920-44cc-b85a-640304f756df","type":"GlyphRenderer"},{"attributes":{},"id":"a40aac47-ffd3-441d-b00e-40e0e7c5ddb2","type":"CategoricalScale"},{"attributes":{"text":{"field":"name"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"group","transform":{"id":"f13b6348-6a36-41bd-afc7-c8711f6b352e","type":"Dodge"}},"y":{"field":"period","transform":{"id":"b227be8d-0e9a-465b-b19b-7bf1559c8edb","type":"Dodge"}}},"id":"0b3785e5-1cc8-4736-8146-560506b99f9b","type":"Text"},{"attributes":{},"id":"61351628-9d1d-46ee-8525-42d14c803bfe","type":"CategoricalTickFormatter"},{"attributes":{"text":{"field":"name"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"5pt"},"x":{"field":"group","transform":{"id":"f13b6348-6a36-41bd-afc7-c8711f6b352e","type":"Dodge"}},"y":{"field":"period","transform":{"id":"b227be8d-0e9a-465b-b19b-7bf1559c8edb","type":"Dodge"}}},"id":"a2339189-a905-45ee-bce5-d96e70360426","type":"Text"},{"attributes":{"below":[{"id":"374d96bc-5596-4b02-b5c1-2ac8681bbdc7","type":"CategoricalAxis"}],"left":[{"id":"ab4fac3a-e3d1-410f-9f24-84a827b6e9a4","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":500,"plot_width":900,"renderers":[{"id":"374d96bc-5596-4b02-b5c1-2ac8681bbdc7","type":"CategoricalAxis"},{"id":"966425c1-8ef1-433e-a9da-16172a8ec7f4","type":"Grid"},{"id":"ab4fac3a-e3d1-410f-9f24-84a827b6e9a4","type":"CategoricalAxis"},{"id":"9adb3048-4480-45de-9342-c9c45224785f","type":"Grid"},{"id":"e6aea411-80a2-4bb8-b52e-22794e9b2fd5","type":"Legend"},{"id":"a6201436-4347-4063-95aa-d41945c23a55","type":"GlyphRenderer"},{"id":"38caaabb-9148-4462-96b8-b501ff1f4334","type":"GlyphRenderer"},{"id":"77af63d3-9ad1-4890-8013-10e42c4148e1","type":"GlyphRenderer"},{"id":"71ce470d-88ec-4396-8630-9f7863d0edcb","type":"GlyphRenderer"},{"id":"348387cc-6920-44cc-b85a-640304f756df","type":"GlyphRenderer"},{"id":"8686ee07-0858-4664-86b8-e3d67970723b","type":"GlyphRenderer"}],"title":{"id":"986f69ad-ddaf-464d-a652-be4b957939a9","type":"Title"},"toolbar":{"id":"cc82ffff-24df-402e-b8c7-a5711c37b45a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"df02a864-0407-4f23-a735-b29165f9e03a","type":"FactorRange"},"x_scale":{"id":"186ed6b9-48c8-443c-b993-68eb25e7311c","type":"CategoricalScale"},"y_range":{"id":"b4730a42-d96b-4795-b700-8a13c46fc5bf","type":"FactorRange"},"y_scale":{"id":"a40aac47-ffd3-441d-b00e-40e0e7c5ddb2","type":"CategoricalScale"}},"id":"ce7ce8cc-b07f-4d65-8112-47954f33d343","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"61edafe9-635a-43f3-93ae-f2507f7c23f9","type":"ColumnDataSource"},"glyph":{"id":"a2339189-a905-45ee-bce5-d96e70360426","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0b3785e5-1cc8-4736-8146-560506b99f9b","type":"Text"},"selection_glyph":null,"view":{"id":"f0ad8b0b-c624-401b-9776-aa849394f725","type":"CDSView"}},"id":"71ce470d-88ec-4396-8630-9f7863d0edcb","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2fcec337-5c81-4c3b-b197-2d0790d637d5","type":"Text"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"ce7ce8cc-b07f-4d65-8112-47954f33d343","subtype":"Figure","type":"Plot"},"ticker":{"id":"608af76f-dec1-45cf-a446-edc550064199","type":"CategoricalTicker"}},"id":"9adb3048-4480-45de-9342-c9c45224785f","type":"Grid"},{"attributes":{"source":{"id":"61edafe9-635a-43f3-93ae-f2507f7c23f9","type":"ColumnDataSource"}},"id":"f0ad8b0b-c624-401b-9776-aa849394f725","type":"CDSView"},{"attributes":{"range":{"id":"b4730a42-d96b-4795-b700-8a13c46fc5bf","type":"FactorRange"},"value":-0.35},"id":"b227be8d-0e9a-465b-b19b-7bf1559c8edb","type":"Dodge"},{"attributes":{"callback":null,"column_names":["x","y","text"],"data":{"text":["LA","AC"],"x":["3","3"],"y":["VI","VII"]}},"id":"4228e853-5ce2-4391-a02b-43c060069445","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"field":"metal","transform":{"id":"1f368780-fc85-4729-aba2-a7977400b0ff","type":"CategoricalColorMapper"}},"height":{"units":"data","value":0.95},"line_color":{"field":"metal","transform":{"id":"1f368780-fc85-4729-aba2-a7977400b0ff","type":"CategoricalColorMapper"}},"width":{"units":"data","value":0.95},"x":{"field":"group"},"y":{"field":"period"}},"id":"d885daef-7cfd-4149-8569-77864018048e","type":"Rect"},{"attributes":{"text":{"field":"atomic mass"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"group","transform":{"id":"f13b6348-6a36-41bd-afc7-c8711f6b352e","type":"Dodge"}},"y":{"field":"period","transform":{"id":"92f4fe2a-b4e7-44b9-8581-f9df2b8c6a6d","type":"Dodge"}}},"id":"2a232b55-462b-4139-bf9d-ca6d564449fe","type":"Text"},{"attributes":{"source":{"id":"4228e853-5ce2-4391-a02b-43c060069445","type":"ColumnDataSource"}},"id":"5f92691d-7599-47d0-8a30-b8bec81b1226","type":"CDSView"},{"attributes":{"range":{"id":"df02a864-0407-4f23-a735-b29165f9e03a","type":"FactorRange"},"value":-0.4},"id":"f13b6348-6a36-41bd-afc7-c8711f6b352e","type":"Dodge"},{"attributes":{"callback":null,"tooltips":[["Name","@name"],["Atomic number","@{atomic number}"],["Atomic mass","@{atomic mass}"],["Type","@metal"],["CPK color","$color[hex, swatch]:CPK"],["Electronic configuration","@{electronic configuration}"]]},"id":"f9c7999d-f431-43dd-9b95-b5ed83ea9646","type":"HoverTool"},{"attributes":{"source":{"id":"61edafe9-635a-43f3-93ae-f2507f7c23f9","type":"ColumnDataSource"}},"id":"46e41818-5d0d-4331-8bb2-e3b86f41ab7c","type":"CDSView"},{"attributes":{"data_source":{"id":"61edafe9-635a-43f3-93ae-f2507f7c23f9","type":"ColumnDataSource"},"glyph":{"id":"d885daef-7cfd-4149-8569-77864018048e","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1b8f7a9f-9703-4056-8725-499ea415b26f","type":"Rect"},"selection_glyph":null,"view":{"id":"46e41818-5d0d-4331-8bb2-e3b86f41ab7c","type":"CDSView"}},"id":"a6201436-4347-4063-95aa-d41945c23a55","type":"GlyphRenderer"},{"attributes":{},"id":"608af76f-dec1-45cf-a446-edc550064199","type":"CategoricalTicker"},{"attributes":{},"id":"f5e38c31-60f0-4185-9ff8-6acfc1f2830f","type":"CategoricalTickFormatter"},{"attributes":{},"id":"5b72e8fc-3dcb-45b3-b6fb-6dcf48697d43","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.95},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.95},"x":{"field":"group"},"y":{"field":"period"}},"id":"1b8f7a9f-9703-4056-8725-499ea415b26f","type":"Rect"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"61351628-9d1d-46ee-8525-42d14c803bfe","type":"CategoricalTickFormatter"},"major_label_standoff":0,"major_tick_line_color":{"value":null},"plot":{"id":"ce7ce8cc-b07f-4d65-8112-47954f33d343","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b72e8fc-3dcb-45b3-b6fb-6dcf48697d43","type":"CategoricalTicker"}},"id":"374d96bc-5596-4b02-b5c1-2ac8681bbdc7","type":"CategoricalAxis"},{"attributes":{},"id":"186ed6b9-48c8-443c-b993-68eb25e7311c","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f9c7999d-f431-43dd-9b95-b5ed83ea9646","type":"HoverTool"}]},"id":"cc82ffff-24df-402e-b8c7-a5711c37b45a","type":"Toolbar"},{"attributes":{"callback":null,"factors":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"]},"id":"df02a864-0407-4f23-a735-b29165f9e03a","type":"FactorRange"},{"attributes":{"plot":null,"text":"Periodic Table (omitting LA and AC Series)"},"id":"986f69ad-ddaf-464d-a652-be4b957939a9","type":"Title"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"f5e38c31-60f0-4185-9ff8-6acfc1f2830f","type":"CategoricalTickFormatter"},"major_label_standoff":0,"major_tick_line_color":{"value":null},"plot":{"id":"ce7ce8cc-b07f-4d65-8112-47954f33d343","subtype":"Figure","type":"Plot"},"ticker":{"id":"608af76f-dec1-45cf-a446-edc550064199","type":"CategoricalTicker"}},"id":"ab4fac3a-e3d1-410f-9f24-84a827b6e9a4","type":"CategoricalAxis"},{"attributes":{"items":[{"id":"9554547d-ce9f-45d3-8f1a-633481f22d9e","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"ce7ce8cc-b07f-4d65-8112-47954f33d343","subtype":"Figure","type":"Plot"}},"id":"e6aea411-80a2-4bb8-b52e-22794e9b2fd5","type":"Legend"},{"attributes":{"text":{"field":"atomic number"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"group","transform":{"id":"f13b6348-6a36-41bd-afc7-c8711f6b352e","type":"Dodge"}},"y":{"field":"period","transform":{"id":"bff21c29-1e0e-41d8-9846-3dfb0791e43f","type":"Dodge"}}},"id":"cd455930-a015-4781-a41c-ccb005eb36de","type":"Text"},{"attributes":{"data_source":{"id":"61edafe9-635a-43f3-93ae-f2507f7c23f9","type":"ColumnDataSource"},"glyph":{"id":"a38eaad0-7d01-49a4-80dc-fbb96a8d05d7","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cd455930-a015-4781-a41c-ccb005eb36de","type":"Text"},"selection_glyph":null,"view":{"id":"9ee5c48b-c8b2-4238-b835-cae5a0a3626d","type":"CDSView"}},"id":"77af63d3-9ad1-4890-8013-10e42c4148e1","type":"GlyphRenderer"},{"attributes":{"source":{"id":"61edafe9-635a-43f3-93ae-f2507f7c23f9","type":"ColumnDataSource"}},"id":"9ee5c48b-c8b2-4238-b835-cae5a0a3626d","type":"CDSView"},{"attributes":{"text":{"field":"symbol"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"group","transform":{"id":"f13b6348-6a36-41bd-afc7-c8711f6b352e","type":"Dodge"}},"y":{"field":"period"}},"id":"c2b752ee-4ce9-4523-9b0a-d674687daaa2","type":"Text"},{"attributes":{"text":{"field":"symbol"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_style":"bold","x":{"field":"group","transform":{"id":"f13b6348-6a36-41bd-afc7-c8711f6b352e","type":"Dodge"}},"y":{"field":"period"}},"id":"acde81a4-c723-4995-b602-3f9aec44cc63","type":"Text"},{"attributes":{"data_source":{"id":"61edafe9-635a-43f3-93ae-f2507f7c23f9","type":"ColumnDataSource"},"glyph":{"id":"acde81a4-c723-4995-b602-3f9aec44cc63","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c2b752ee-4ce9-4523-9b0a-d674687daaa2","type":"Text"},"selection_glyph":null,"view":{"id":"a215411a-cdbf-46de-aa53-a33ea249a8e1","type":"CDSView"}},"id":"38caaabb-9148-4462-96b8-b501ff1f4334","type":"GlyphRenderer"},{"attributes":{"text":{"field":"atomic number"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"field":"group","transform":{"id":"f13b6348-6a36-41bd-afc7-c8711f6b352e","type":"Dodge"}},"y":{"field":"period","transform":{"id":"bff21c29-1e0e-41d8-9846-3dfb0791e43f","type":"Dodge"}}},"id":"a38eaad0-7d01-49a4-80dc-fbb96a8d05d7","type":"Text"},{"attributes":{"range":{"id":"b4730a42-d96b-4795-b700-8a13c46fc5bf","type":"FactorRange"},"value":0.3},"id":"bff21c29-1e0e-41d8-9846-3dfb0791e43f","type":"Dodge"},{"attributes":{"source":{"id":"61edafe9-635a-43f3-93ae-f2507f7c23f9","type":"ColumnDataSource"}},"id":"a215411a-cdbf-46de-aa53-a33ea249a8e1","type":"CDSView"},{"attributes":{"text":{"field":"atomic mass"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"5pt"},"x":{"field":"group","transform":{"id":"f13b6348-6a36-41bd-afc7-c8711f6b352e","type":"Dodge"}},"y":{"field":"period","transform":{"id":"92f4fe2a-b4e7-44b9-8581-f9df2b8c6a6d","type":"Dodge"}}},"id":"21e51450-a01e-47fd-862c-afe0762ab957","type":"Text"},{"attributes":{"range":{"id":"b4730a42-d96b-4795-b700-8a13c46fc5bf","type":"FactorRange"},"value":-0.2},"id":"92f4fe2a-b4e7-44b9-8581-f9df2b8c6a6d","type":"Dodge"},{"attributes":{"factors":["alkali metal","alkaline earth metal","metal","halogen","metalloid","noble gas","nonmetal","transition metal"],"palette":["#a6cee3","#1f78b4","#d93b43","#999d9a","#e08d49","#eaeaea","#f1d4Af","#599d7A"]},"id":"1f368780-fc85-4729-aba2-a7977400b0ff","type":"CategoricalColorMapper"}],"root_ids":["ce7ce8cc-b07f-4d65-8112-47954f33d343"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"fc979584-ebd5-4b26-ae60-1f7702392d2e","elementid":"d897d128-fd4c-4634-aff5-2aa06c1615fe","modelid":"ce7ce8cc-b07f-4d65-8112-47954f33d343"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
