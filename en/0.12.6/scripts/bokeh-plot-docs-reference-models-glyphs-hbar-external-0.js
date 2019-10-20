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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("b9714a4b-d71c-4696-97db-c607a3ff5a7c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9714a4b-d71c-4696-97db-c607a3ff5a7c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"f5db1590-1cb9-4d84-835a-fda77124fe6a":{"roots":{"references":[{"attributes":{},"id":"5ef1fc2e-9e71-462f-bf3f-14d91b9bafac","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9ee30b65-026c-48ef-ba9d-80e2230017c5","type":"Plot"},"ticker":{"id":"eec30511-0a28-4e4a-8c42-6d68c3a1bb48","type":"BasicTicker"}},"id":"44f8e8e6-1525-4b87-8b29-96a20e44bdc4","type":"Grid"},{"attributes":{"callback":null},"id":"0a5a33d4-8786-4c3c-8230-a6739c2e5bbd","type":"DataRange1d"},{"attributes":{"formatter":{"id":"57b642cb-567f-43fb-a785-8c840db3b7e9","type":"BasicTickFormatter"},"plot":{"id":"9ee30b65-026c-48ef-ba9d-80e2230017c5","type":"Plot"},"ticker":{"id":"eec30511-0a28-4e4a-8c42-6d68c3a1bb48","type":"BasicTicker"}},"id":"8a69a1db-6650-42a3-a492-2eb170e9f760","type":"LinearAxis"},{"attributes":{"callback":null},"id":"40682738-9269-4c2a-b5d2-e4a6b4417014","type":"DataRange1d"},{"attributes":{},"id":"e309bc96-6640-4fb1-a0bb-0cad3f75cac2","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"9ee30b65-026c-48ef-ba9d-80e2230017c5","type":"Plot"},"ticker":{"id":"b4cf5bf8-d7eb-4ee4-a938-f8406c9a82c0","type":"BasicTicker"}},"id":"79129f8d-7415-49e2-b182-bc27973d328a","type":"Grid"},{"attributes":{},"id":"b4cf5bf8-d7eb-4ee4-a938-f8406c9a82c0","type":"BasicTicker"},{"attributes":{"below":[{"id":"8a69a1db-6650-42a3-a492-2eb170e9f760","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c32f78b2-f619-47b2-9b02-b967f4b85f73","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9209f687-b851-4352-85df-cdac7376eef4","type":"GlyphRenderer"},{"id":"8a69a1db-6650-42a3-a492-2eb170e9f760","type":"LinearAxis"},{"id":"c32f78b2-f619-47b2-9b02-b967f4b85f73","type":"LinearAxis"},{"id":"44f8e8e6-1525-4b87-8b29-96a20e44bdc4","type":"Grid"},{"id":"79129f8d-7415-49e2-b182-bc27973d328a","type":"Grid"}],"title":null,"tool_events":{"id":"cb5ecc64-b1da-49fb-86a5-06bc5c4870d3","type":"ToolEvents"},"toolbar":{"id":"c772a04d-6bcb-43c5-8a11-0b7a222ecee5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0a5a33d4-8786-4c3c-8230-a6739c2e5bbd","type":"DataRange1d"},"x_scale":{"id":"e309bc96-6640-4fb1-a0bb-0cad3f75cac2","type":"LinearScale"},"y_range":{"id":"40682738-9269-4c2a-b5d2-e4a6b4417014","type":"DataRange1d"},"y_scale":{"id":"de4d0e05-5826-45f4-a9ef-d87ca3a6151a","type":"LinearScale"}},"id":"9ee30b65-026c-48ef-ba9d-80e2230017c5","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c772a04d-6bcb-43c5-8a11-0b7a222ecee5","type":"Toolbar"},{"attributes":{},"id":"cb5ecc64-b1da-49fb-86a5-06bc5c4870d3","type":"ToolEvents"},{"attributes":{},"id":"57b642cb-567f-43fb-a785-8c840db3b7e9","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a7ff9de7-d42c-42da-a1da-88da1ce88a0e","type":"ColumnDataSource"},"glyph":{"id":"e567b70a-c13e-470d-afe5-5a9900f2cb49","type":"HBar"},"hover_glyph":null,"muted_glyph":null},"id":"9209f687-b851-4352-85df-cdac7376eef4","type":"GlyphRenderer"},{"attributes":{},"id":"eec30511-0a28-4e4a-8c42-6d68c3a1bb48","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"e567b70a-c13e-470d-afe5-5a9900f2cb49","type":"HBar"},{"attributes":{},"id":"de4d0e05-5826-45f4-a9ef-d87ca3a6151a","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"a7ff9de7-d42c-42da-a1da-88da1ce88a0e","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"5ef1fc2e-9e71-462f-bf3f-14d91b9bafac","type":"BasicTickFormatter"},"plot":{"id":"9ee30b65-026c-48ef-ba9d-80e2230017c5","type":"Plot"},"ticker":{"id":"b4cf5bf8-d7eb-4ee4-a938-f8406c9a82c0","type":"BasicTicker"}},"id":"c32f78b2-f619-47b2-9b02-b967f4b85f73","type":"LinearAxis"}],"root_ids":["9ee30b65-026c-48ef-ba9d-80e2230017c5"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"f5db1590-1cb9-4d84-835a-fda77124fe6a","elementid":"b9714a4b-d71c-4696-97db-c607a3ff5a7c","modelid":"9ee30b65-026c-48ef-ba9d-80e2230017c5"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
