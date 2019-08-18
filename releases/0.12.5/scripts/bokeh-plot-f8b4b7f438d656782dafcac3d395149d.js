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
      };var element = document.getElementById("e796c5ac-7461-41dc-93c8-881783426249");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e796c5ac-7461-41dc-93c8-881783426249' but no matching script tag was found. ")
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
                var docs_json = {"fe817c9f-d1e8-45fa-a308-e80d73311d7c":{"roots":{"references":[{"attributes":{"below":[{"id":"60e9ae3f-cc2e-4b87-934f-e7770c0aee9b","type":"LinearAxis"}],"left":[{"id":"5eeb5b64-9984-4641-a650-bc1daf364e58","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"60e9ae3f-cc2e-4b87-934f-e7770c0aee9b","type":"LinearAxis"},{"id":"8f4a773e-183f-4237-9172-ce70db1bfe3e","type":"Grid"},{"id":"5eeb5b64-9984-4641-a650-bc1daf364e58","type":"LinearAxis"},{"id":"33093061-c93f-41a1-b175-e87ca0ab61dd","type":"Grid"},{"id":"e19c0f81-0ae8-4534-8f66-4f278eb06e0e","type":"BoxAnnotation"},{"id":"72ad32d6-7780-4ded-a82b-06f6f1fde6e5","type":"GlyphRenderer"}],"title":{"id":"10a52d40-47ef-4035-9d30-914aa64c8728","type":"Title"},"tool_events":{"id":"89e703df-12ca-4556-bab1-ba02fa2e984e","type":"ToolEvents"},"toolbar":{"id":"6aa57a65-5021-4128-aafe-fbd1ea114620","type":"Toolbar"},"x_range":{"id":"2367c351-9fcf-4018-aad9-74781464e6d1","type":"Range1d"},"y_range":{"id":"957958f1-8090-4c1d-a9ca-cf10af2c2885","type":"Range1d"}},"id":"90319a32-8c50-4ac6-9902-b2341522fba0","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":15},"id":"957958f1-8090-4c1d-a9ca-cf10af2c2885","type":"Range1d"},{"attributes":{"formatter":{"id":"6bcaa71d-2598-4601-8a83-65eb5afc2087","type":"BasicTickFormatter"},"plot":{"id":"90319a32-8c50-4ac6-9902-b2341522fba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d59cb17e-8eb6-40cb-82f1-ecf0ed1a0b3e","type":"BasicTicker"}},"id":"5eeb5b64-9984-4641-a650-bc1daf364e58","type":"LinearAxis"},{"attributes":{},"id":"63bcb66a-513c-4710-af0a-2dcfad6a46a7","type":"BasicTicker"},{"attributes":{"formatter":{"id":"baa47a09-21d5-413c-9ff2-7f4232de94c8","type":"BasicTickFormatter"},"plot":{"id":"90319a32-8c50-4ac6-9902-b2341522fba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"63bcb66a-513c-4710-af0a-2dcfad6a46a7","type":"BasicTicker"}},"id":"60e9ae3f-cc2e-4b87-934f-e7770c0aee9b","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"10a52d40-47ef-4035-9d30-914aa64c8728","type":"Title"},{"attributes":{},"id":"baa47a09-21d5-413c-9ff2-7f4232de94c8","type":"BasicTickFormatter"},{"attributes":{},"id":"6bcaa71d-2598-4601-8a83-65eb5afc2087","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"90319a32-8c50-4ac6-9902-b2341522fba0","subtype":"Figure","type":"Plot"}},"id":"5cb555e0-9f25-47ff-a989-6dec262a8b0d","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"90319a32-8c50-4ac6-9902-b2341522fba0","subtype":"Figure","type":"Plot"}},"id":"bf53e05d-9abd-47d8-a3c5-42a077200b0d","type":"HelpTool"},{"attributes":{"plot":{"id":"90319a32-8c50-4ac6-9902-b2341522fba0","subtype":"Figure","type":"Plot"}},"id":"3e1d6197-c633-490e-853f-c6ae0b9c084a","type":"ResetTool"},{"attributes":{"data_source":{"id":"096770d2-8540-4016-91ea-eee713ba595b","type":"ColumnDataSource"},"glyph":{"id":"bf8dd328-1d1d-4016-ac59-60ff0cb263f0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53d1e989-8c0d-4a5b-8073-883e0901289e","type":"Circle"},"selection_glyph":null},"id":"72ad32d6-7780-4ded-a82b-06f6f1fde6e5","type":"GlyphRenderer"},{"attributes":{},"id":"89e703df-12ca-4556-bab1-ba02fa2e984e","type":"ToolEvents"},{"attributes":{"overlay":{"id":"e19c0f81-0ae8-4534-8f66-4f278eb06e0e","type":"BoxAnnotation"},"plot":{"id":"90319a32-8c50-4ac6-9902-b2341522fba0","subtype":"Figure","type":"Plot"}},"id":"eee6ec8a-d7aa-4bfe-ab32-df31916c9866","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"90319a32-8c50-4ac6-9902-b2341522fba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"63bcb66a-513c-4710-af0a-2dcfad6a46a7","type":"BasicTicker"}},"id":"8f4a773e-183f-4237-9172-ce70db1bfe3e","type":"Grid"},{"attributes":{"callback":null,"end":20},"id":"2367c351-9fcf-4018-aad9-74781464e6d1","type":"Range1d"},{"attributes":{},"id":"d59cb17e-8eb6-40cb-82f1-ecf0ed1a0b3e","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"16e87a04-df4c-4871-9d84-8235b5a7fc1c","type":"PanTool"},{"id":"5cb555e0-9f25-47ff-a989-6dec262a8b0d","type":"WheelZoomTool"},{"id":"eee6ec8a-d7aa-4bfe-ab32-df31916c9866","type":"BoxZoomTool"},{"id":"cb159d3f-a488-44ce-9746-b2283e090332","type":"SaveTool"},{"id":"3e1d6197-c633-490e-853f-c6ae0b9c084a","type":"ResetTool"},{"id":"bf53e05d-9abd-47d8-a3c5-42a077200b0d","type":"HelpTool"}]},"id":"6aa57a65-5021-4128-aafe-fbd1ea114620","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"096770d2-8540-4016-91ea-eee713ba595b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"90319a32-8c50-4ac6-9902-b2341522fba0","subtype":"Figure","type":"Plot"}},"id":"16e87a04-df4c-4871-9d84-8235b5a7fc1c","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf8dd328-1d1d-4016-ac59-60ff0cb263f0","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"53d1e989-8c0d-4a5b-8073-883e0901289e","type":"Circle"},{"attributes":{"plot":{"id":"90319a32-8c50-4ac6-9902-b2341522fba0","subtype":"Figure","type":"Plot"}},"id":"cb159d3f-a488-44ce-9746-b2283e090332","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e19c0f81-0ae8-4534-8f66-4f278eb06e0e","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"90319a32-8c50-4ac6-9902-b2341522fba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d59cb17e-8eb6-40cb-82f1-ecf0ed1a0b3e","type":"BasicTicker"}},"id":"33093061-c93f-41a1-b175-e87ca0ab61dd","type":"Grid"}],"root_ids":["90319a32-8c50-4ac6-9902-b2341522fba0"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"fe817c9f-d1e8-45fa-a308-e80d73311d7c","elementid":"e796c5ac-7461-41dc-93c8-881783426249","modelid":"90319a32-8c50-4ac6-9902-b2341522fba0"}];
                
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
