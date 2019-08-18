document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("447b26f3-8fdb-4fe0-ac72-52af554e9187");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '447b26f3-8fdb-4fe0-ac72-52af554e9187' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"444faaec-4973-4cdb-837c-298165129b16":{"roots":{"references":[{"attributes":{"plot":{"id":"fbd23e7c-c86c-4534-8afb-309a22590cbd","type":"Plot"},"ticker":{"id":"5953fae3-8f07-4526-9b3e-130f628b0ffc","type":"BasicTicker"}},"id":"82fdd805-d02a-45c3-8fc9-4fd631dfdd0c","type":"Grid"},{"attributes":{},"id":"5953fae3-8f07-4526-9b3e-130f628b0ffc","type":"BasicTicker"},{"attributes":{},"id":"94e2a937-aa2a-4864-b252-1fe50f21b79d","type":"BasicTickFormatter"},{"attributes":{},"id":"b07077e5-0ef0-4837-9ae5-73ad7c702917","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"7252f9d5-9a33-4831-89c0-127d561e67aa","type":"DataRange1d"},{"attributes":{},"id":"cf01da3e-6b9e-47b4-a61d-3302805d4eb3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b07077e5-0ef0-4837-9ae5-73ad7c702917","type":"BasicTickFormatter"},"plot":{"id":"fbd23e7c-c86c-4534-8afb-309a22590cbd","type":"Plot"},"ticker":{"id":"5953fae3-8f07-4526-9b3e-130f628b0ffc","type":"BasicTicker"}},"id":"77604a6e-3879-473d-9999-675a66b595b9","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"38480dec-a635-4e10-8c41-6642616fa6a7","type":"Toolbar"},{"attributes":{"below":[{"id":"77604a6e-3879-473d-9999-675a66b595b9","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2c3646d2-7fb7-4b36-a049-33b897f7d531","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"437793e7-58d0-4d91-8e81-15195f4c8d79","type":"GlyphRenderer"},{"id":"77604a6e-3879-473d-9999-675a66b595b9","type":"LinearAxis"},{"id":"2c3646d2-7fb7-4b36-a049-33b897f7d531","type":"LinearAxis"},{"id":"82fdd805-d02a-45c3-8fc9-4fd631dfdd0c","type":"Grid"},{"id":"37306fd7-568c-4e20-9704-9b00804b07be","type":"Grid"}],"title":null,"tool_events":{"id":"15772d6a-e995-4d72-88da-6c1abf276d87","type":"ToolEvents"},"toolbar":{"id":"38480dec-a635-4e10-8c41-6642616fa6a7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7252f9d5-9a33-4831-89c0-127d561e67aa","type":"DataRange1d"},"y_range":{"id":"f72abee1-add0-4b0b-a929-57ab092e2051","type":"DataRange1d"}},"id":"fbd23e7c-c86c-4534-8afb-309a22590cbd","type":"Plot"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4DAF4A"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"40bbf8a1-6509-4004-a5a1-639fcc1386fb","type":"Quadratic"},{"attributes":{"callback":null},"id":"f72abee1-add0-4b0b-a929-57ab092e2051","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4683b1e4-8cd9-473d-8a42-ed320ea4a283","type":"ColumnDataSource"},"glyph":{"id":"40bbf8a1-6509-4004-a5a1-639fcc1386fb","type":"Quadratic"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"437793e7-58d0-4d91-8e81-15195f4c8d79","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","yp01","xp01","xp02"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xp01":[-1.9,-1.4,-0.9,-0.4,0.1,0.6,1.1,1.6,2.1],"xp02":[-1.6,-1.1,-0.6,-0.09999999999999998,0.4,0.9,1.4,1.9,2.4],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"yp01":[4.2,2.45,1.2,0.45,0.2,0.45,1.2,2.45,4.2]}},"id":"4683b1e4-8cd9-473d-8a42-ed320ea4a283","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"fbd23e7c-c86c-4534-8afb-309a22590cbd","type":"Plot"},"ticker":{"id":"cf01da3e-6b9e-47b4-a61d-3302805d4eb3","type":"BasicTicker"}},"id":"37306fd7-568c-4e20-9704-9b00804b07be","type":"Grid"},{"attributes":{"formatter":{"id":"94e2a937-aa2a-4864-b252-1fe50f21b79d","type":"BasicTickFormatter"},"plot":{"id":"fbd23e7c-c86c-4534-8afb-309a22590cbd","type":"Plot"},"ticker":{"id":"cf01da3e-6b9e-47b4-a61d-3302805d4eb3","type":"BasicTicker"}},"id":"2c3646d2-7fb7-4b36-a049-33b897f7d531","type":"LinearAxis"},{"attributes":{},"id":"15772d6a-e995-4d72-88da-6c1abf276d87","type":"ToolEvents"}],"root_ids":["fbd23e7c-c86c-4534-8afb-309a22590cbd"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"444faaec-4973-4cdb-837c-298165129b16","elementid":"447b26f3-8fdb-4fe0-ac72-52af554e9187","modelid":"fbd23e7c-c86c-4534-8afb-309a22590cbd"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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