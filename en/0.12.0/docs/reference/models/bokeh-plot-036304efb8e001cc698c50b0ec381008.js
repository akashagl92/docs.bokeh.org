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
      };var element = document.getElementById("999ecbe2-7acc-40da-8c42-fc6e1603fc8e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '999ecbe2-7acc-40da-8c42-fc6e1603fc8e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"162fe6cd-12b0-44c1-9d92-a1535f0ca4a3":{"roots":{"references":[{"attributes":{"plot":{"id":"2967874d-2c14-49ae-903c-7bfb9485090a","type":"Plot"},"ticker":{"id":"8fd5ab8e-35e3-4171-92e5-a02df036c24d","type":"BasicTicker"}},"id":"ec445bfe-e47d-4084-8ff6-51e78c12494c","type":"Grid"},{"attributes":{},"id":"e086acf5-e774-4684-9c24-b9940e401119","type":"BasicTicker"},{"attributes":{"formatter":{"id":"38a8e9c2-6390-4aae-8d14-b3baea11c2bd","type":"BasicTickFormatter"},"plot":{"id":"2967874d-2c14-49ae-903c-7bfb9485090a","type":"Plot"},"ticker":{"id":"e086acf5-e774-4684-9c24-b9940e401119","type":"BasicTicker"}},"id":"a18da371-cf24-4b3b-a2d4-fa360dd7c608","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288Bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b9acbf9-e2dc-4729-a3ef-d288d187e257","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"2967874d-2c14-49ae-903c-7bfb9485090a","type":"Plot"},"ticker":{"id":"e086acf5-e774-4684-9c24-b9940e401119","type":"BasicTicker"}},"id":"1615c9db-cda9-4c84-8179-9eb1294ae477","type":"Grid"},{"attributes":{},"id":"b8673478-54de-4039-abef-5214c5bd94f2","type":"ToolEvents"},{"attributes":{},"id":"38a8e9c2-6390-4aae-8d14-b3baea11c2bd","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c9f78ac3-2be8-4e40-8a48-b1eff7518746","type":"BasicTickFormatter"},"plot":{"id":"2967874d-2c14-49ae-903c-7bfb9485090a","type":"Plot"},"ticker":{"id":"8fd5ab8e-35e3-4171-92e5-a02df036c24d","type":"BasicTicker"}},"id":"a3d95553-3d73-4f98-ba91-8c2fad10c855","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"21d96e5e-46e4-4251-8eab-ac6f146910cd","type":"ColumnDataSource"},{"attributes":{},"id":"8fd5ab8e-35e3-4171-92e5-a02df036c24d","type":"BasicTicker"},{"attributes":{},"id":"c9f78ac3-2be8-4e40-8a48-b1eff7518746","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"7ce6c9cc-d8d8-42d4-a447-460c43b80477","type":"DataRange1d"},{"attributes":{"data_source":{"id":"21d96e5e-46e4-4251-8eab-ac6f146910cd","type":"ColumnDataSource"},"glyph":{"id":"0b9acbf9-e2dc-4729-a3ef-d288d187e257","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c268b07a-4882-489a-b440-399cf8a2cfeb","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"2f107d03-46de-4d61-8cd3-5c57c9b1ee5f","type":"DataRange1d"},{"attributes":{"below":[{"id":"a3d95553-3d73-4f98-ba91-8c2fad10c855","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a18da371-cf24-4b3b-a2d4-fa360dd7c608","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c268b07a-4882-489a-b440-399cf8a2cfeb","type":"GlyphRenderer"},{"id":"a3d95553-3d73-4f98-ba91-8c2fad10c855","type":"LinearAxis"},{"id":"a18da371-cf24-4b3b-a2d4-fa360dd7c608","type":"LinearAxis"},{"id":"ec445bfe-e47d-4084-8ff6-51e78c12494c","type":"Grid"},{"id":"1615c9db-cda9-4c84-8179-9eb1294ae477","type":"Grid"}],"title":null,"tool_events":{"id":"b8673478-54de-4039-abef-5214c5bd94f2","type":"ToolEvents"},"toolbar":{"id":"bd03a8c1-7828-41a7-9f97-6d765dfa19bc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2f107d03-46de-4d61-8cd3-5c57c9b1ee5f","type":"DataRange1d"},"y_range":{"id":"7ce6c9cc-d8d8-42d4-a447-460c43b80477","type":"DataRange1d"}},"id":"2967874d-2c14-49ae-903c-7bfb9485090a","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bd03a8c1-7828-41a7-9f97-6d765dfa19bc","type":"Toolbar"}],"root_ids":["2967874d-2c14-49ae-903c-7bfb9485090a"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"162fe6cd-12b0-44c1-9d92-a1535f0ca4a3","elementid":"999ecbe2-7acc-40da-8c42-fc6e1603fc8e","modelid":"2967874d-2c14-49ae-903c-7bfb9485090a"}];
              
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