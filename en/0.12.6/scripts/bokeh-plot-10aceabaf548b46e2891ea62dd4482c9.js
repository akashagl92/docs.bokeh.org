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
      };var element = document.getElementById("0d6fdfc9-5534-402c-8875-6f9a9646a296");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d6fdfc9-5534-402c-8875-6f9a9646a296' but no matching script tag was found. ")
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
                var docs_json = {"12b00467-39da-48d8-ac37-7073d64eef39":{"roots":{"references":[{"attributes":{"formatter":{"id":"5af7f0f8-4088-49a4-99d6-1d22d6814da9","type":"BasicTickFormatter"},"plot":{"id":"0ce3765b-9b9e-4a9d-90cf-fd592c28f69f","subtype":"Figure","type":"Plot"},"ticker":{"id":"75f327ab-20ca-4cd8-aea6-9ac408eba806","type":"BasicTicker"}},"id":"c3d19c41-7a89-448f-8dcb-d73df918c5da","type":"LinearAxis"},{"attributes":{},"id":"5af7f0f8-4088-49a4-99d6-1d22d6814da9","type":"BasicTickFormatter"},{"attributes":{},"id":"f8a2829f-594b-4576-b5bc-db2d315ce51b","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc2f0dbe-2ac6-4c32-ba8d-3ddc6f1ea37c","type":"Circle"},{"attributes":{"data_source":{"id":"65194382-e3e5-4f8d-83fe-63c5152829d7","type":"ColumnDataSource"},"glyph":{"id":"300b7800-66af-4bb3-a022-e9a6dfe03704","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fc2f0dbe-2ac6-4c32-ba8d-3ddc6f1ea37c","type":"Circle"},"selection_glyph":null},"id":"83b10b3f-c538-4114-bd03-41953eb94ec8","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"ed1542cc-c3e1-4e2b-8b23-ff8f23019a2e","type":"LinearAxis"}],"left":[{"id":"c3d19c41-7a89-448f-8dcb-d73df918c5da","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"ed1542cc-c3e1-4e2b-8b23-ff8f23019a2e","type":"LinearAxis"},{"id":"3ac26c3b-9712-4714-8f9a-10813a24c56d","type":"Grid"},{"id":"c3d19c41-7a89-448f-8dcb-d73df918c5da","type":"LinearAxis"},{"id":"231633f5-7fa2-4c59-bb2f-657e22cd0c7c","type":"Grid"},{"id":"87d06036-998c-4f30-b045-13238a747191","type":"Legend"},{"id":"83b10b3f-c538-4114-bd03-41953eb94ec8","type":"GlyphRenderer"}],"title":{"id":"c5dcddfc-7db3-419e-b536-e36532bfe0a1","type":"Title"},"tool_events":{"id":"f8a2829f-594b-4576-b5bc-db2d315ce51b","type":"ToolEvents"},"toolbar":{"id":"790d5c4c-10aa-4dc0-9600-8f33c06e3958","type":"Toolbar"},"x_range":{"id":"7cee39f2-c64e-4953-98a0-bb87eb0546e6","type":"Range1d"},"x_scale":{"id":"719d6174-3da6-47ec-84ac-dc91a90c20b6","type":"LinearScale"},"y_range":{"id":"8be09860-f42f-49ad-8d7f-e419cf607cab","type":"Range1d"},"y_scale":{"id":"e2b3e45a-bff9-46da-a504-18c3e3557890","type":"LinearScale"}},"id":"0ce3765b-9b9e-4a9d-90cf-fd592c28f69f","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7b31136d-6190-4b9d-9161-dbeaec069c81","type":"SaveTool"}]},"id":"790d5c4c-10aa-4dc0-9600-8f33c06e3958","type":"Toolbar"},{"attributes":{},"id":"fb85903f-7911-487c-9c96-76d56899ea57","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0ce3765b-9b9e-4a9d-90cf-fd592c28f69f","subtype":"Figure","type":"Plot"},"ticker":{"id":"75f327ab-20ca-4cd8-aea6-9ac408eba806","type":"BasicTicker"}},"id":"231633f5-7fa2-4c59-bb2f-657e22cd0c7c","type":"Grid"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"300b7800-66af-4bb3-a022-e9a6dfe03704","type":"Circle"},{"attributes":{},"id":"75f327ab-20ca-4cd8-aea6-9ac408eba806","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9d6bf009-85e7-4fc7-a4f0-10716f589759","type":"BasicTickFormatter"},"plot":{"id":"0ce3765b-9b9e-4a9d-90cf-fd592c28f69f","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb85903f-7911-487c-9c96-76d56899ea57","type":"BasicTicker"}},"id":"ed1542cc-c3e1-4e2b-8b23-ff8f23019a2e","type":"LinearAxis"},{"attributes":{"plot":{"id":"0ce3765b-9b9e-4a9d-90cf-fd592c28f69f","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb85903f-7911-487c-9c96-76d56899ea57","type":"BasicTicker"}},"id":"3ac26c3b-9712-4714-8f9a-10813a24c56d","type":"Grid"},{"attributes":{"callback":null,"end":3},"id":"8be09860-f42f-49ad-8d7f-e419cf607cab","type":"Range1d"},{"attributes":{},"id":"719d6174-3da6-47ec-84ac-dc91a90c20b6","type":"LinearScale"},{"attributes":{},"id":"e2b3e45a-bff9-46da-a504-18c3e3557890","type":"LinearScale"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"83b10b3f-c538-4114-bd03-41953eb94ec8","type":"GlyphRenderer"}]},"id":"dd51ff74-fca9-43f4-b18f-f7b875d4d629","type":"LegendItem"},{"attributes":{},"id":"9d6bf009-85e7-4fc7-a4f0-10716f589759","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"c5dcddfc-7db3-419e-b536-e36532bfe0a1","type":"Title"},{"attributes":{"items":[{"id":"dd51ff74-fca9-43f4-b18f-f7b875d4d629","type":"LegendItem"}],"plot":{"id":"0ce3765b-9b9e-4a9d-90cf-fd592c28f69f","subtype":"Figure","type":"Plot"}},"id":"87d06036-998c-4f30-b045-13238a747191","type":"Legend"},{"attributes":{"plot":{"id":"0ce3765b-9b9e-4a9d-90cf-fd592c28f69f","subtype":"Figure","type":"Plot"}},"id":"7b31136d-6190-4b9d-9161-dbeaec069c81","type":"SaveTool"},{"attributes":{"callback":null,"end":7},"id":"7cee39f2-c64e-4953-98a0-bb87eb0546e6","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","label","color","x"],"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]}},"id":"65194382-e3e5-4f8d-83fe-63c5152829d7","type":"ColumnDataSource"}],"root_ids":["0ce3765b-9b9e-4a9d-90cf-fd592c28f69f"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"12b00467-39da-48d8-ac37-7073d64eef39","elementid":"0d6fdfc9-5534-402c-8875-6f9a9646a296","modelid":"0ce3765b-9b9e-4a9d-90cf-fd592c28f69f"}];
                
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
