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
      };var element = document.getElementById("81675935-2dbd-4317-9a61-1374998ced10");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '81675935-2dbd-4317-9a61-1374998ced10' but no matching script tag was found. ")
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
                var docs_json = {"342e7a7e-cfeb-4ece-9684-2f630e30a1fa":{"roots":{"references":[{"attributes":{},"id":"d92a98b4-ec54-4c63-9290-43a31592e7cb","type":"ToolEvents"},{"attributes":{"below":[{"id":"131aaef4-f0ea-4dbf-b289-17ceebbb6e83","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8c0a501e-63df-443c-ba10-b6e085904a7b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9f8f9cf4-9ec6-4f16-a849-46ff332d3f79","type":"GlyphRenderer"},{"id":"131aaef4-f0ea-4dbf-b289-17ceebbb6e83","type":"LinearAxis"},{"id":"8c0a501e-63df-443c-ba10-b6e085904a7b","type":"LinearAxis"},{"id":"e1506f7a-1e03-48f4-a8ee-f3a174deada9","type":"Grid"},{"id":"354ca5f1-c67c-4279-8891-b8f04366fbb9","type":"Grid"}],"title":null,"tool_events":{"id":"d92a98b4-ec54-4c63-9290-43a31592e7cb","type":"ToolEvents"},"toolbar":{"id":"daab5f14-d19e-4951-b11a-fd2ad94a11ff","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"31ff2644-93ac-412a-ba16-f78bfc07d2c1","type":"DataRange1d"},"y_range":{"id":"faceaf48-0375-4a6a-8307-7801a310c327","type":"DataRange1d"}},"id":"b0d08e37-5e9d-44e8-81f7-b38e90f3ff4c","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"b0d08e37-5e9d-44e8-81f7-b38e90f3ff4c","type":"Plot"},"ticker":{"id":"c6d05661-b821-40bd-9a85-afa717399583","type":"BasicTicker"}},"id":"354ca5f1-c67c-4279-8891-b8f04366fbb9","type":"Grid"},{"attributes":{"callback":null},"id":"faceaf48-0375-4a6a-8307-7801a310c327","type":"DataRange1d"},{"attributes":{"plot":{"id":"b0d08e37-5e9d-44e8-81f7-b38e90f3ff4c","type":"Plot"},"ticker":{"id":"2be7dacb-939e-494e-ab06-0bec4c4600f4","type":"BasicTicker"}},"id":"e1506f7a-1e03-48f4-a8ee-f3a174deada9","type":"Grid"},{"attributes":{},"id":"2be7dacb-939e-494e-ab06-0bec4c4600f4","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9aecebf7-532c-475f-aa02-5a8943dd7764","type":"BasicTickFormatter"},"plot":{"id":"b0d08e37-5e9d-44e8-81f7-b38e90f3ff4c","type":"Plot"},"ticker":{"id":"2be7dacb-939e-494e-ab06-0bec4c4600f4","type":"BasicTicker"}},"id":"131aaef4-f0ea-4dbf-b289-17ceebbb6e83","type":"LinearAxis"},{"attributes":{"data_source":{"id":"e0381301-9ac1-4e3b-8f47-e7f42c7e4f1c","type":"ColumnDataSource"},"glyph":{"id":"c589c51c-df6b-41f6-afb9-9b3692ad46af","type":"Oval"},"hover_glyph":null,"muted_glyph":null},"id":"9f8f9cf4-9ec6-4f16-a849-46ff332d3f79","type":"GlyphRenderer"},{"attributes":{},"id":"9aecebf7-532c-475f-aa02-5a8943dd7764","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"e0381301-9ac1-4e3b-8f47-e7f42c7e4f1c","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"b6923087-a9bb-4c22-8baf-ff27dc0dccc2","type":"BasicTickFormatter"},"plot":{"id":"b0d08e37-5e9d-44e8-81f7-b38e90f3ff4c","type":"Plot"},"ticker":{"id":"c6d05661-b821-40bd-9a85-afa717399583","type":"BasicTicker"}},"id":"8c0a501e-63df-443c-ba10-b6e085904a7b","type":"LinearAxis"},{"attributes":{},"id":"c6d05661-b821-40bd-9a85-afa717399583","type":"BasicTicker"},{"attributes":{},"id":"b6923087-a9bb-4c22-8baf-ff27dc0dccc2","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"c589c51c-df6b-41f6-afb9-9b3692ad46af","type":"Oval"},{"attributes":{"callback":null},"id":"31ff2644-93ac-412a-ba16-f78bfc07d2c1","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"daab5f14-d19e-4951-b11a-fd2ad94a11ff","type":"Toolbar"}],"root_ids":["b0d08e37-5e9d-44e8-81f7-b38e90f3ff4c"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"342e7a7e-cfeb-4ece-9684-2f630e30a1fa","elementid":"81675935-2dbd-4317-9a61-1374998ced10","modelid":"b0d08e37-5e9d-44e8-81f7-b38e90f3ff4c"}];
                
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
