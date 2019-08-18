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
      };var element = document.getElementById("ccbf5467-ffb4-48cf-9550-3e534a51fc1c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ccbf5467-ffb4-48cf-9550-3e534a51fc1c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"a2d71fff-16bd-43b8-a5a5-4296301a5016":{"roots":{"references":[{"attributes":{},"id":"88d442d0-b8ea-4b46-9e4b-cfae254cb3c1","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c20de4d6-d47a-42f0-9881-7850bc658211","type":"BoxAnnotation"},{"attributes":{},"id":"b95ce265-4d6d-4b22-b0a9-6373b63e6e51","type":"BasicTicker"},{"attributes":{},"id":"f0b3c8c1-0bea-42d6-8bfb-5d2a65b7b942","type":"LinearScale"},{"attributes":{"data_source":{"id":"a428df84-5213-404c-ba38-81cadfa0f32b","type":"ColumnDataSource"},"glyph":{"id":"23d12816-77a6-4d71-a045-4109fd8f2a0c","type":"Hex"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e3e76f1b-35f0-4c21-84c7-fde7c192ca4b","type":"Hex"},"selection_glyph":null,"view":{"id":"570ddec8-75bd-48ce-a0c3-b5b4d19eed5e","type":"CDSView"}},"id":"7e24c46a-42f3-42f6-add4-745a7a4e2120","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"7978a040-f49c-469b-9faa-3f67339f30b2","type":"LinearAxis"}],"left":[{"id":"0ed46fa6-5cdf-4d14-8268-3117cd440323","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7978a040-f49c-469b-9faa-3f67339f30b2","type":"LinearAxis"},{"id":"2c00f9e3-ba11-4c1a-bdb5-182c64dd3a0e","type":"Grid"},{"id":"0ed46fa6-5cdf-4d14-8268-3117cd440323","type":"LinearAxis"},{"id":"5210cd03-3276-454a-9665-d988fa2ad828","type":"Grid"},{"id":"c20de4d6-d47a-42f0-9881-7850bc658211","type":"BoxAnnotation"},{"id":"7e24c46a-42f3-42f6-add4-745a7a4e2120","type":"GlyphRenderer"}],"title":{"id":"3791f1d7-0b55-4da8-8a15-75e6ce91fe09","type":"Title"},"toolbar":{"id":"d909f372-3272-4513-b5e3-b5714515fa9d","type":"Toolbar"},"x_range":{"id":"7612543e-9a49-4c3b-a6f6-b2f4b12669ef","type":"DataRange1d"},"x_scale":{"id":"f0b3c8c1-0bea-42d6-8bfb-5d2a65b7b942","type":"LinearScale"},"y_range":{"id":"31465320-1dd2-47c6-a8b8-9dded5c75bd6","type":"DataRange1d"},"y_scale":{"id":"29089b35-d6d7-4e8c-a242-6e771cbe55d2","type":"LinearScale"}},"id":"8d5948dc-4c8f-439b-a6de-5462bd8c87e9","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e3e76f1b-35f0-4c21-84c7-fde7c192ca4b","type":"Hex"},{"attributes":{},"id":"33b5dc47-04d2-479a-a941-a5a3e6805978","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"23d12816-77a6-4d71-a045-4109fd8f2a0c","type":"Hex"},{"attributes":{"callback":null},"id":"31465320-1dd2-47c6-a8b8-9dded5c75bd6","type":"DataRange1d"},{"attributes":{"source":{"id":"a428df84-5213-404c-ba38-81cadfa0f32b","type":"ColumnDataSource"}},"id":"570ddec8-75bd-48ce-a0c3-b5b4d19eed5e","type":"CDSView"},{"attributes":{},"id":"f1af93db-1cb0-4f72-8b08-a36d24708d2f","type":"BasicTicker"},{"attributes":{"overlay":{"id":"c20de4d6-d47a-42f0-9881-7850bc658211","type":"BoxAnnotation"}},"id":"f8cb6b9f-4a15-4d81-a5a9-93b49b506eb1","type":"BoxZoomTool"},{"attributes":{},"id":"29089b35-d6d7-4e8c-a242-6e771cbe55d2","type":"LinearScale"},{"attributes":{},"id":"7eb65948-3737-484c-8591-80ddd7b54c4c","type":"SaveTool"},{"attributes":{},"id":"81f4b01c-c2ff-48b7-a20c-3d275fea7dcb","type":"PanTool"},{"attributes":{},"id":"81cdbae7-0185-484d-a08c-59287fe32076","type":"BasicTickFormatter"},{"attributes":{},"id":"8cb59877-e34e-4453-a949-83532180e8af","type":"BasicTickFormatter"},{"attributes":{},"id":"3ed80e04-af96-4f18-8e0f-a455ccbc0122","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"81f4b01c-c2ff-48b7-a20c-3d275fea7dcb","type":"PanTool"},{"id":"3ed80e04-af96-4f18-8e0f-a455ccbc0122","type":"WheelZoomTool"},{"id":"f8cb6b9f-4a15-4d81-a5a9-93b49b506eb1","type":"BoxZoomTool"},{"id":"7eb65948-3737-484c-8591-80ddd7b54c4c","type":"SaveTool"},{"id":"33b5dc47-04d2-479a-a941-a5a3e6805978","type":"ResetTool"},{"id":"88d442d0-b8ea-4b46-9e4b-cfae254cb3c1","type":"HelpTool"}]},"id":"d909f372-3272-4513-b5e3-b5714515fa9d","type":"Toolbar"},{"attributes":{"plot":{"id":"8d5948dc-4c8f-439b-a6de-5462bd8c87e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1af93db-1cb0-4f72-8b08-a36d24708d2f","type":"BasicTicker"}},"id":"2c00f9e3-ba11-4c1a-bdb5-182c64dd3a0e","type":"Grid"},{"attributes":{},"id":"00ac5fa0-dc7a-4dd7-90b3-d71179b31500","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"6bd89312-f54a-4cca-b56f-04301fcacf9e","type":"Selection"},"selection_policy":{"id":"00ac5fa0-dc7a-4dd7-90b3-d71179b31500","type":"UnionRenderers"}},"id":"a428df84-5213-404c-ba38-81cadfa0f32b","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"3791f1d7-0b55-4da8-8a15-75e6ce91fe09","type":"Title"},{"attributes":{"formatter":{"id":"8cb59877-e34e-4453-a949-83532180e8af","type":"BasicTickFormatter"},"plot":{"id":"8d5948dc-4c8f-439b-a6de-5462bd8c87e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"b95ce265-4d6d-4b22-b0a9-6373b63e6e51","type":"BasicTicker"}},"id":"0ed46fa6-5cdf-4d14-8268-3117cd440323","type":"LinearAxis"},{"attributes":{},"id":"6bd89312-f54a-4cca-b56f-04301fcacf9e","type":"Selection"},{"attributes":{"callback":null},"id":"7612543e-9a49-4c3b-a6f6-b2f4b12669ef","type":"DataRange1d"},{"attributes":{"formatter":{"id":"81cdbae7-0185-484d-a08c-59287fe32076","type":"BasicTickFormatter"},"plot":{"id":"8d5948dc-4c8f-439b-a6de-5462bd8c87e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1af93db-1cb0-4f72-8b08-a36d24708d2f","type":"BasicTicker"}},"id":"7978a040-f49c-469b-9faa-3f67339f30b2","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8d5948dc-4c8f-439b-a6de-5462bd8c87e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"b95ce265-4d6d-4b22-b0a9-6373b63e6e51","type":"BasicTicker"}},"id":"5210cd03-3276-454a-9665-d988fa2ad828","type":"Grid"}],"root_ids":["8d5948dc-4c8f-439b-a6de-5462bd8c87e9"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"a2d71fff-16bd-43b8-a5a5-4296301a5016","roots":{"8d5948dc-4c8f-439b-a6de-5462bd8c87e9":"ccbf5467-ffb4-48cf-9550-3e534a51fc1c"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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