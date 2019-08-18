(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("6ee74e2c-685d-49ba-a9ea-f77f3bb4c2d1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6ee74e2c-685d-49ba-a9ea-f77f3bb4c2d1' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"37ef921f-6680-4ff9-be7f-9e2cae3e2fdb":{"roots":{"references":[{"attributes":{"callback":null},"id":"3795","type":"DataRange1d"},{"attributes":{},"id":"3797","type":"LinearScale"},{"attributes":{"callback":null,"data":{"CPK":["#FFFFFF","#CC80FF","#C2FF00","#FFB5B5","#909090","#3050F8","#FF0D0D","#90E050","#B3E3F5","#AB5CF2","#8AFF00","#BFA6A6","#F0C8A0","#FF8000","#FFFF30","#1FF01F","#80D1E3","#8F40D4","#3DFF00","#E6E6E6","#BFC2C7","#A6A6AB","#8A99C7","#9C7AC7","#E06633","#F090A0","#50D050","#C88033","#7D80B0","#C28F8F","#668F8F","#BD80E3","#FFA100","#A62929","#5CB8D1","#702EB0","#00FF00","#94FFFF","#94E0E0","#73C2C9","#54B5B5","#3B9E9E","#248F8F","#0A7D8C","#006985","#C0C0C0","#FFD98F","#A67573","#668080","#9E63B5","#D47A00","#940094","#429EB0","#57178F","#00C900","#70D4FF","#FFFFC7","#D9FFC7","#C7FFC7","#A3FFC7","#8FFFC7","#61FFC7","#45FFC7","#30FFC7","#1FFFC7","#00FF9C","#00E675","#00D452","#00BF38","#00AB24","#4DC2FF","#4DA6FF","#2194D6","#267DAB","#266696","#175487","#D0D0E0","#FFD123","#B8B8D0","#A6544D","#575961"],"EA":{"__ndarray__":"AAAAAABAUsAAAAAAAABOwAAAAAAAAAAAAAAAAAAAO8AAAAAAAEBjwAAAAAAAABzAAAAAAACgYcAAAAAAAIB0wAAAAAAAAAAAAAAAAACASsAAAAAAAAAAAAAAAAAAgEXAAAAAAADAYMAAAAAAAABSwAAAAAAAAGnAAAAAAADQdcAAAAAAAAAAAAAAAAAAAEjAAAAAAAAAAMAAAAAAAAAywAAAAAAAACDAAAAAAACAScAAAAAAAABQwAAAAAAAAAAAAAAAAAAAMMAAAAAAAABQwAAAAAAAAFzAAAAAAACAXcAAAAAAAAAAAAAAAAAAAD3AAAAAAADAXcAAAAAAAIBTwAAAAAAAYGjAAAAAAABQdMAAAAAAAAAAAAAAAAAAgEfAAAAAAAAAFMAAAAAAAAA+wAAAAAAAgETAAAAAAACAVcAAAAAAAABSwAAAAAAAgErAAAAAAABAWcAAAAAAAIBbwAAAAAAAAEvAAAAAAACAX8AAAAAAAAAAAAAAAAAAAD3AAAAAAADAWsAAAAAAAMBZwAAAAAAAwGfAAAAAAABwcsAAAAAAAAAAAAAAAAAAAEfAAAAAAAAALMAAAAAAAABIwAAAAAAAAEnAAAAAAAAAScAAAAAAAABJwAAAAAAAAEnAAAAAAAAAScAAAAAAAABJwAAAAAAAAEnAAAAAAAAAScAAAAAAAABJwAAAAAAAAEnAAAAAAAAAScAAAAAAAABJwAAAAAAAAEnAAAAAAAAAScAAAAAAAAAAAAAAAAAAAD/AAAAAAADAU8AAAAAAAAAuwAAAAAAAgFrAAAAAAADgYsAAAAAAAKBpwAAAAAAA4GvAAAAAAAAAAAAAAAAAAAAzwAAAAAAAgEHA","dtype":"float64","shape":[81]},"IE-1":{"__ndarray__":"AAAAAACAlEAAAAAAAECAQAAAAAAAIIxAAAAAAAAIiUAAAAAAAPyQQAAAAAAA6JVAAAAAAACIlEAAAAAAAESaQAAAAAAAQqBAAAAAAAAAf0AAAAAAABCHQAAAAAAAEIJAAAAAAACYiEAAAAAAAKCPQAAAAAAAQI9AAAAAAACMk0AAAAAAAMSXQAAAAAAAMHpAAAAAAABwgkAAAAAAAMiDQAAAAAAAmIRAAAAAAABYhEAAAAAAAGiEQAAAAAAAaIZAAAAAAADYh0AAAAAAAMCHQAAAAAAACIdAAAAAAABQh0AAAAAAAFCMQAAAAAAAGIJAAAAAAADQh0AAAAAAAJiNQAAAAAAAaI1AAAAAAADQkUAAAAAAAByVQAAAAAAAMHlAAAAAAAAwgUAAAAAAAMCCQAAAAAAAAIRAAAAAAABghEAAAAAAAGCFQAAAAAAA8IVAAAAAAAAwhkAAAAAAAICGQAAAAAAAIIlAAAAAAADYhkAAAAAAACCLQAAAAAAAcIFAAAAAAAAohkAAAAAAABCKQAAAAAAAKItAAAAAAACAj0AAAAAAAEiSQAAAAAAAgHdAAAAAAABwf0AAAAAAANCAQAAAAAAAsIBAAAAAAAB4gEAAAAAAAKiAQAAAAAAA4IBAAAAAAAAIgUAAAAAAABiBQAAAAAAAiIJAAAAAAACwgUAAAAAAAOiBQAAAAAAAKIJAAAAAAABogkAAAAAAAKiCQAAAAAAA2IJAAAAAAABggEAAAAAAAJiEQAAAAAAAyIdAAAAAAAAQiEAAAAAAAMCHQAAAAAAAQIpAAAAAAACAi0AAAAAAADCLQAAAAAAA0ItAAAAAAAB4j0AAAAAAAGiCQAAAAAAAYIZA","dtype":"float64","shape":[81]},"atomic mass":{"__ndarray__":"qkiFsYUg8D/dJAaBlcMbQCIzF7g8BiJArBxaZDufJUBoImx4egUoQDPEsS5uAyxAqz5XW7H/L0DEOCRal/8yQFkXt9EALjRAey8AhWH9NkCuR+F6FE44QPrCGh1G+zpA2c73U+MVPEBqFmh3SPk+QLgehetRCEBARIts5/u5QUDTTWIQWPlDQDGZKhiVjENARIts5/sJREBO7QxTW3pGQOXQItv57kdAjZduEoN4SUDWxW00gP9JQJKWytsReEtAXI/C9SjsS0A25QrvcndNQPCFyVTBWE1A2c73U+PFT0C4HoXrUVhQQIPAyqFFblFAKVyPwvUoUkCX/5B++7pSQD0K16NwvVNAYOXQItv5U0BQjZduEvNUQGdEaW/wXVVASOF6FK7nVUA5RUdy+TlWQHWTGARWzlZA529CIQI6V0A9CtejcP1XQAAAAAAAgFhAFK5H4XpEWUDLoUW287lZQHsUrkfhmlpAyJi7lpD3WkD8qfHSTRpcQDEIrBxatFxAPQrXo3CtXUBxPQrXo3BeQGZmZmZm5l9ApI0j1uK5X0BMN4lBYGlgQDxTQ3b5nGBAWDm0yHYqYUBLsDic+VxhQMHKoUW2g2FA3EYDeAudYUA5tMh2vgdiQAAAAAAAIGJA7FG4HoXLYkACK4cW2f5iQAAAAAAAqGNAUWuad5zdY0AAAAAAAFBkQBLaci7FnWRAPzVeuknoZEAUs14M5R1lQH0/NV66oWVAu7iNBvDeZUBI4XoUrk9mQAoRcAhVnmZAexSuR+H6ZkC0yHa+n0ZnQI/C9Shcx2dAbef7qfEGaECmm8QgsGJoQHqKHCLunmhAexSuR+ESaUDRkVz+Q4xpQGZmZmZm5mlA","dtype":"float64","shape":[81]},"atomic number":[1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"atomic radius":{"__ndarray__":"AAAAAACAQkAAAAAAAMBgQAAAAAAAgFZAAAAAAACAVEAAAAAAAEBTQAAAAAAAwFJAAAAAAABAUkAAAAAAAMBRQAAAAAAAQFFAAAAAAABAY0AAAAAAAEBgQAAAAAAAgF1AAAAAAADAW0AAAAAAAIBaQAAAAAAAgFlAAAAAAADAWEAAAAAAAEBYQAAAAAAAgGhAAAAAAADAZUAAAAAAAABiQAAAAAAAAGFAAAAAAABAX0AAAAAAAMBfQAAAAAAAYGFAAAAAAABAX0AAAAAAAIBfQAAAAAAAQF5AAAAAAABAYUAAAAAAAGBgQAAAAAAAgF9AAAAAAACAXkAAAAAAAMBdQAAAAAAAAF1AAAAAAACAXEAAAAAAAIBbQAAAAAAAYGpAAAAAAAAAaEAAAAAAAEBkQAAAAAAAgGJAAAAAAAAgYUAAAAAAACBiQAAAAAAAgGNAAAAAAACAX0AAAAAAAOBgQAAAAAAAYGBAAAAAAAAgY0AAAAAAAIBiQAAAAAAAAGJAAAAAAACgYUAAAAAAAEBhQAAAAAAA4GBAAAAAAACgYEAAAAAAAEBgQAAAAAAAIGxAAAAAAADAaEAAAAAAACBlQAAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAAZEAAAAAAAMBiQAAAAAAAQGFAAAAAAABAYkAAAAAAAOBjQAAAAAAAAGBAAAAAAAAgYUAAAAAAAABgQAAAAAAAAGJAAAAAAACgYkAAAAAAAIBiQAAAAAAAYGJA","dtype":"float64","shape":[81]},"boiling point":{"__ndarray__":"AAAAAAAANEAAAAAAADyZQAAAAAAAbqVAAAAAAACxsEAAAAAAAMywQAAAAAAAQFNAAAAAAACAVkAAAAAAAEBVQAAAAAAAADtAAAAAAAAQkkAAAAAAAEyVQAAAAAAA0KVAAAAAAADKqEAAAAAAAFCBQAAAAAAAcIZAAAAAAADgbUAAAAAAAMBVQAAAAAAAIJBAAAAAAAB0m0AAAAAAAD6oQAAAAAAA0KtAAAAAAADArEAAAAAAAACnQAAAAAAAPKJAAAAAAAB8qEAAAAAAAACpQAAAAAAA5KhAAAAAAAAAqUAAAAAAAHCSQAAAAAAAWqNAAAAAAAAqqEAAAAAAALiLQAAAAAAA8I1AAAAAAADAdEAAAAAAAABeQAAAAAAACI5AAAAAAADcmUAAAAAAAESsQAAAAAAASrJAAAAAAACZs0AAAAAAADCzQAAAAAAAurFAAAAAAABHsUAAAAAAAACvQAAAAAAASKlAAAAAAAAGo0AAAAAAAECQQAAAAAAAUqJAAAAAAAB2pkAAAAAAABCdQAAAAAAAtJNAAAAAAACQfEAAAAAAAKBkQAAAAAAAgI1AAAAAAAC+oEAAAAAAADKtQAAAAAAAYqxAAAAAAADWq0AAAAAAAFqqQAAAAAAAkqlAAAAAAAA4oEAAAAAAACCcQAAAAAAAhqtAAAAAAABeq0AAAAAAADCmQAAAAAAAOqdAAAAAAACKqEAAAAAAAF6hQAAAAAAA9JZAAAAAAAC2rEAAAAAAAAyzQAAAAAAAY7ZAAAAAAADEtkAAAAAAAO22QAAAAAAApbRAAAAAAABdskAAAAAAAAKwQAAAAAAAcqhAAAAAAACwg0AAAAAAAEibQAAAAAAAmJ9A","dtype":"float64","shape":[81]},"bonding type":["diatomic","metallic","metallic","covalent network","covalent network","diatomic","diatomic","atomic","atomic","metallic","metallic","metallic","metallic","covalent network","covalent network","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic"],"density":{"__ndarray__":"4yZZPRaRFz9I4XoUrkfhP5qZmZmZmf0/rkfhehSuA0AUrkfhehQCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACtejcD0K7z/Xo3A9Ctf7P5qZmZmZmQVApHA9CtejAkAfhetRuB79P1yPwvUoXP8/AAAAAAAAAAAAAAAAAAAAAIXrUbgehes/zczMzMzM+D/sUbgehesHQArXo3A9ChJAcT0K16NwGECPwvUoXI8cQOF6FK5H4R1AexSuR+F6H0DNzMzMzMwhQFK4HoXr0SFA16NwPQrXIUCPwvUoXI8cQJqZmZmZmRdASOF6FK5HFUDsUbgehesWQEjhehSuRxNA9ihcj8L1CEAAAAAAAAAAAHsUrkfhevg/CtejcD0KBUDhehSuR+ERQArXo3A9ChpApHA9CtcjIUCPwvUoXI8kQAAAAAAAACdAPQrXo3C9KEBmZmZmZuYoQArXo3A9CihAexSuR+H6JEDNzMzMzEwhQD0K16NwPR1APQrXo3A9HUDNzMzMzMwaQPYoXI/C9RhAw/UoXI/CE0B7FK5H4XqEPxSuR+F6FP4/FK5H4XoUDECamZmZmZkYQMP1KFyPwhpAj8L1KFyPGkAK16NwPQocQArXo3A9Ch1AZmZmZmZmHUD2KFyPwvUUQJqZmZmZmR9AcT0K16NwIECamZmZmRkhQJqZmZmZmSFApHA9CtcjIkCkcD0K16MiQEjhehSuRxpArkfhehSuI0AfhetRuJ4qQGZmZmZmpjBAAAAAAABAM0CF61G4HgU1QNejcD0KlzZAj8L1KFyPNkDXo3A9Chc1QM3MzMzMTDNAj8L1KFwPK0AzMzMzM7MnQK5H4XoUriZA","dtype":"float64","shape":[81]},"electronegativity":{"__ndarray__":"mpmZmZmZAUBcj8L1KFzvPx+F61G4Hvk/UrgehetRAEBmZmZmZmYEQFK4HoXrUQhAhetRuB6FC0DXo3A9CtcPQAAAAAAAAPh/w/UoXI/C7T/2KFyPwvX0P8P1KFyPwvk/ZmZmZmZm/j+F61G4HoUBQKRwPQrXowRASOF6FK5HCUAAAAAAAAD4fz0K16NwPeo/AAAAAAAA8D/D9Shcj8L1P6RwPQrXo/g/FK5H4XoU+j+PwvUoXI/6P83MzMzMzPg/SOF6FK5H/T8UrkfhehT+P4/C9Shcj/4/ZmZmZmZm/j9mZmZmZmb6P/YoXI/C9fw/FK5H4XoUAEBxPQrXo3ABQGZmZmZmZgRArkfhehSuB0AAAAAAAAD4fz0K16NwPeo/ZmZmZmZm7j+F61G4HoXzP0jhehSuR/U/mpmZmZmZ+T9I4XoUrkcBQGZmZmZmZv4/mpmZmZmZAUA9CtejcD0CQJqZmZmZmQFA4XoUrkfh/j8K16NwPQr7P3sUrkfhevw/XI/C9Shc/z9mZmZmZmYAQM3MzMzMzABASOF6FK5HBUAAAAAAAAD4f0jhehSuR+k/exSuR+F67D+amZmZmZnxP+xRuB6F6/E/FK5H4XoU8j89CtejcD3yPxSuR+F6FPI/uB6F61G48j8zMzMzMzPzPzMzMzMzM/M/MzMzMzMz8z+F61G4HoXzP65H4XoUrvM/16NwPQrX8z8AAAAAAAD0P5qZmZmZmfE/UrgehetR9D/NzMzMzMz0PwAAAAAAAPg/4XoUrkfhAkBmZmZmZmb+P5qZmZmZmQFAmpmZmZmZAUA9CtejcD0CQFK4HoXrUQRAAAAAAAAAAEBSuB6F61EAQKRwPQrXowJA","dtype":"float64","shape":[81]},"electronic configuration":["1s1","[He] 2s1","[He] 2s2","[He] 2s2 2p1","[He] 2s2 2p2","[He] 2s2 2p3","[He] 2s2 2p4","[He] 2s2 2p5","[He] 2s2 2p6","[Ne] 3s1","[Ne] 3s2","[Ne] 3s2 3p1","[Ne] 3s2 3p2","[Ne] 3s2 3p3","[Ne] 3s2 3p4","[Ne] 3s2 3p5","[Ne] 3s2 3p6","[Ar] 4s1","[Ar] 4s2","[Ar] 3d1 4s2","[Ar] 3d2 4s2","[Ar] 3d3 4s2","[Ar] 3d5 4s1","[Ar] 3d5 4s2","[Ar] 3d6 4s2","[Ar] 3d7 4s2","[Ar] 3d8 4s2","[Ar] 3d10 4s1","[Ar] 3d10 4s2","[Ar] 3d10 4s2 4p1","[Ar] 3d10 4s2 4p2","[Ar] 3d10 4s2 4p3","[Ar] 3d10 4s2 4p4","[Ar] 3d10 4s2 4p5","[Ar] 3d10 4s2 4p6","[Kr] 5s1","[Kr] 5s2","[Kr] 4d1 5s2","[Kr] 4d2 5s2","[Kr] 4d4 5s1","[Kr] 4d5 5s1","[Kr] 4d5 5s2","[Kr] 4d7 5s1","[Kr] 4d8 5s1","[Kr] 4d10","[Kr] 4d10 5s1","[Kr] 4d10 5s2","[Kr] 4d10 5s2 5p1","[Kr] 4d10 5s2 5p2","[Kr] 4d10 5s2 5p3","[Kr] 4d10 5s2 5p4","[Kr] 4d10 5s2 5p5","[Kr] 4d10 5s2 5p6","[Xe] 6s1","[Xe] 6s2","[Xe] 5d1 6s2","[Xe] 4f1 5d1 6s2","[Xe] 4f3 6s2","[Xe] 4f4 6s2","[Xe] 4f5 6s2","[Xe] 4f6 6s2","[Xe] 4f7 6s2","[Xe] 4f7 5d1 6s2","[Xe] 4f9 6s2","[Xe] 4f10 6s2","[Xe] 4f11 6s2","[Xe] 4f12 6s2","[Xe] 4f13 6s2","[Xe] 4f14 6s2","[Xe] 4f14 5d1 6s2","[Xe] 4f14 5d2 6s2","[Xe] 4f14 5d3 6s2","[Xe] 4f14 5d4 6s2","[Xe] 4f14 5d5 6s2","[Xe] 4f14 5d6 6s2","[Xe] 4f14 5d7 6s2","[Xe] 4f14 5d9 6s1","[Xe] 4f14 5d10 6s1","[Xe] 4f14 5d10 6s2","[Xe] 4f14 5d10 6s2 6p1","[Xe] 4f14 5d10 6s2 6p2"],"group":["1","1","2","13","14","15","16","17","18","1","2","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","-","-","-","-","-","-","-","-","-","-","-","-","-","-","3","4","5","6","7","8","9","10","11","12","13","14"],"index":[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"ion radius":["NaN","76 (+1)","45 (+2)","27 (+3)","16 (+4)","146 (-3)","140 (-2)","133 (-1)","NaN","102 (+1)","72 (+2)","53.5 (+3)","40 (+4)","44 (+3)","184 (-2)","181 (-1)","NaN","138 (+1)","100 (+2)","74.5 (+3)","86 (+2)","79 (+2)","80 (+2*)","67 (+2)","78 (+2*)","74.5 (+2*)","69 (+2)","77 (+1)","74 (+2)","62 (+3)","73 (+2)","58 (+3)","198 (-2)","196 (-1)","NaN","152 (+1)","118 (+2)","90 (+3)","72 (+4)","72 (+3)","69 (+3)","64.5 (+4)","68 (+3)","66.5 (+3)","59 (+1)","115 (+1)","95 (+2)","80 (+3)","112 (+2)","76 (+3)","221 (-2)","220 (-1)","48 (+8)","167 (+1)","135 (+2)","103.2 (+3)","102 (+3)","99 (+3)","129 (+2)","97 (+3)","122 (+2)","117 (+2)","93.8 (+3)","92.3 (+3)","107 (+2)","90.1 (+3)","89 (+3)","103 (+2)","102 (+2)","86.1 (+3)","71 (+4)","72 (+3)","66 (+4)","63 (+4)","63 (+4)","68 (+3)","86 (+2)","137 (+1)","119 (+1)","150 (+1)","119 (+2)"],"melting point":{"__ndarray__":"AAAAAAAALEAAAAAAAGB8QAAAAAAAYJhAAAAAAABYokAAAAAAAN6tQAAAAAAAgE9AAAAAAACAS0AAAAAAAABLQAAAAAAAADlAAAAAAAAwd0AAAAAAANiMQAAAAAAAKI1AAAAAAABcmkAAAAAAANBzQAAAAAAAQHhAAAAAAACAZUAAAAAAAABVQAAAAAAAEHVAAAAAAABskUAAAAAAAFicQAAAAAAAVJ5AAAAAAAAOoUAAAAAAAAihQAAAAAAAvJdAAAAAAABMnEAAAAAAAKCbQAAAAAAAAJtAAAAAAAA4lUAAAAAAAKiFQAAAAAAA8HJAAAAAAADskkAAAAAAAAiRQAAAAAAA4H5AAAAAAACgcEAAAAAAAABdQAAAAAAAgHNAAAAAAABokEAAAAAAABycQAAAAAAAoKBAAAAAAAB8pUAAAAAAAKCmQAAAAAAA/KJAAAAAAABepEAAAAAAAHqhQAAAAAAAkJxAAAAAAABMk0AAAAAAAJCCQAAAAAAA4HpAAAAAAACQf0AAAAAAAECMQAAAAAAAmIZAAAAAAAAweEAAAAAAACBkQAAAAAAA4HJAAAAAAABAj0AAAAAAAKSSQAAAAAAAvJBAAAAAAADQkkAAAAAAADiUQAAAAAAAdJVAAAAAAAAElUAAAAAAAByRQAAAAAAAyJhAAAAAAAB0mUAAAAAAAFSaQAAAAAAATJtAAAAAAACom0AAAAAAAGicQAAAAAAAEJFAAAAAAABAnkAAAAAAAJSjQAAAAAAAtKlAAAAAAADerEAAAAAAAAarQAAAAAAA1KlAAAAAAABmpUAAAAAAAOSfQAAAAAAA5JRAAAAAAABAbUAAAAAAAAiCQAAAAAAAyIJA","dtype":"float64","shape":[81]},"melting_colors":["#053061","#2166ac","#d1e5f0","#fddbc7","#67001f","#053061","#053061","#053061","#053061","#053061","#4393c3","#4393c3","#d1e5f0","#053061","#053061","#053061","#053061","#053061","#4393c3","#d1e5f0","#f7f7f7","#f7f7f7","#f7f7f7","#92c5de","#d1e5f0","#d1e5f0","#d1e5f0","#92c5de","#2166ac","#053061","#92c5de","#4393c3","#2166ac","#053061","#053061","#053061","#4393c3","#d1e5f0","#f7f7f7","#f4a582","#f4a582","#fddbc7","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#2166ac","#2166ac","#2166ac","#4393c3","#2166ac","#053061","#053061","#053061","#4393c3","#92c5de","#4393c3","#92c5de","#92c5de","#92c5de","#92c5de","#4393c3","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#4393c3","#f7f7f7","#fddbc7","#d6604d","#b2182b","#b2182b","#d6604d","#f4a582","#f7f7f7","#92c5de","#053061","#2166ac","#2166ac"],"metal":["nonmetal","alkali metal","alkaline earth metal","metalloid","nonmetal","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","metal","metalloid","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metalloid","metalloid","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metalloid","metalloid","halogen","noble gas","alkali metal","alkaline earth metal","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal"],"name":["Hydrogen","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead"],"period":[1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"standard state":["gas","solid","solid","solid","solid","gas","gas","gas","gas","solid","solid","solid","solid","solid","solid","gas","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","solid","solid"],"symbol":["H","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb"],"van der Waals radius":{"__ndarray__":"AAAAAAAAXkAAAAAAAMBmQAAAAAAAAPh/AAAAAAAA+H8AAAAAAEBlQAAAAAAAYGNAAAAAAAAAY0AAAAAAAGBiQAAAAAAAQGNAAAAAAABgbEAAAAAAAKBlQAAAAAAAAPh/AAAAAABAakAAAAAAAIBmQAAAAAAAgGZAAAAAAADgZUAAAAAAAIBnQAAAAAAAMHFAAAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAYGRAAAAAAACAYUAAAAAAAGBhQAAAAAAAYGdAAAAAAAAA+H8AAAAAACBnQAAAAAAAwGdAAAAAAAAgZ0AAAAAAAEBpQAAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAYGRAAAAAAACAZUAAAAAAAMBjQAAAAAAAIGhAAAAAAAAga0AAAAAAAAD4fwAAAAAAwGlAAAAAAADAaEAAAAAAAABrQAAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAOBlQAAAAAAAwGRAAAAAAABgY0AAAAAAAIBoQAAAAAAAQGlA","dtype":"float64","shape":[81]},"year discovered":["1766","1817","1798","1807","Ancient","1772","1774","1670","1898","1807","1808","Ancient","1854","1669","Ancient","1774","1894","1807","Ancient","1876","1791","1803","Ancient","1774","Ancient","Ancient","1751","Ancient","1746","1875","1886","Ancient","1817","1826","1898","1861","1790","1794","1789","1801","1778","1937","1827","1803","1803","Ancient","1817","1863","Ancient","Ancient","1782","1811","1898","1860","1808","1839","1803","1885","1885","1947","1853","1901","1880","1843","1886","1878","1842","1879","1878","1907","1923","1802","1783","1925","1803","1803","Ancient","Ancient","Ancient","1861","Ancient"]},"selected":{"id":"3840","type":"Selection"},"selection_policy":{"id":"3839","type":"UnionRenderers"}},"id":"3826","type":"ColumnDataSource"},{"attributes":{},"id":"3835","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"3826","type":"ColumnDataSource"},"text":{"field":"symbol"},"text_align":"center","text_color":{"value":"#555555"},"text_font_size":{"value":"8pt"},"x":{"field":"atomic mass"},"y":{"field":"density"},"y_offset":{"value":8}},"id":"3832","type":"LabelSet"},{"attributes":{},"id":"3799","type":"LinearScale"},{"attributes":{"source":{"id":"3826","type":"ColumnDataSource"}},"id":"3831","type":"CDSView"},{"attributes":{"callback":null,"tooltips":[["name","@name"],["symbol:","@symbol"],["density","@density"],["atomic weight","@{atomic mass}"],["melting point","@{melting point}"]]},"id":"3811","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3841","type":"BoxAnnotation"},{"attributes":{"axis_label":"atomic weight (amu)","formatter":{"id":"3835","type":"BasicTickFormatter"},"ticker":{"id":"3802","type":"BasicTicker"}},"id":"3801","type":"LinearAxis"},{"attributes":{},"id":"3812","type":"PanTool"},{"attributes":{},"id":"3802","type":"BasicTicker"},{"attributes":{"callback":null},"id":"3793","type":"DataRange1d"},{"attributes":{},"id":"3813","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"3826","type":"ColumnDataSource"},"glyph":{"id":"3828","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3829","type":"Circle"},"selection_glyph":null,"view":{"id":"3831","type":"CDSView"}},"id":"3830","type":"GlyphRenderer"},{"attributes":{},"id":"3840","type":"Selection"},{"attributes":{"grid_line_color":"white","ticker":{"id":"3802","type":"BasicTicker"}},"id":"3805","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#dddddd"},"below":[{"id":"3801","type":"LinearAxis"}],"center":[{"id":"3805","type":"Grid"},{"id":"3810","type":"Grid"},{"id":"3832","type":"LabelSet"}],"left":[{"id":"3806","type":"LinearAxis"}],"plot_width":1200,"renderers":[{"id":"3830","type":"GlyphRenderer"}],"title":{"id":"3791","type":"Title"},"toolbar":{"id":"3817","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"3793","type":"DataRange1d"},"x_scale":{"id":"3797","type":"LinearScale"},"y_range":{"id":"3795","type":"DataRange1d"},"y_scale":{"id":"3799","type":"LinearScale"}},"id":"3790","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"3841","type":"BoxAnnotation"}},"id":"3814","type":"BoxZoomTool"},{"attributes":{"axis_label":"density (g/cm^3)","formatter":{"id":"3837","type":"BasicTickFormatter"},"ticker":{"id":"3807","type":"BasicTicker"}},"id":"3806","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":12},"x":{"field":"atomic mass"},"y":{"field":"density"}},"id":"3829","type":"Circle"},{"attributes":{},"id":"3815","type":"ResetTool"},{"attributes":{},"id":"3839","type":"UnionRenderers"},{"attributes":{},"id":"3807","type":"BasicTicker"},{"attributes":{},"id":"3816","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"melting_colors"},"size":{"units":"screen","value":12},"x":{"field":"atomic mass"},"y":{"field":"density"}},"id":"3828","type":"Circle"},{"attributes":{"dimension":1,"grid_line_color":"white","ticker":{"id":"3807","type":"BasicTicker"}},"id":"3810","type":"Grid"},{"attributes":{"text":"Density vs Atomic Weight of Elements (colored by melting point)"},"id":"3791","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","logo":"grey","tools":[{"id":"3811","type":"HoverTool"},{"id":"3812","type":"PanTool"},{"id":"3813","type":"WheelZoomTool"},{"id":"3814","type":"BoxZoomTool"},{"id":"3815","type":"ResetTool"},{"id":"3816","type":"SaveTool"}]},"id":"3817","type":"Toolbar"},{"attributes":{},"id":"3837","type":"BasicTickFormatter"}],"root_ids":["3790"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"37ef921f-6680-4ff9-be7f-9e2cae3e2fdb","roots":{"3790":"6ee74e2c-685d-49ba-a9ea-f77f3bb4c2d1"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();