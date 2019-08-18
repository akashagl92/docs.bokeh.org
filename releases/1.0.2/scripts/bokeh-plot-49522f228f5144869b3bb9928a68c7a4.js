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
      };var element = document.getElementById("e95c39a0-40f9-4c5f-831b-6d6a4fb424db");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e95c39a0-40f9-4c5f-831b-6d6a4fb424db' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"f0ee8eb2-877e-4eee-ae9a-7b623be614eb":{"roots":{"references":[{"attributes":{"dimension":"lat"},"id":"4487","type":"MercatorTickFormatter"},{"attributes":{},"id":"4494","type":"ResetTool"},{"attributes":{},"id":"4492","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"4503","type":"Circle"},{"attributes":{"dimension":"lat"},"id":"4488","type":"MercatorTicker"},{"attributes":{"api_key":"AIzaSyAM1OHVm6Yr_i54Kt01mylfxyNxQdxmxHQ","below":[{"id":"4484","type":"LinearAxis"}],"left":[{"id":"4489","type":"LinearAxis"}],"map_options":{"id":"4474","type":"GMapOptions"},"renderers":[{"id":"4484","type":"LinearAxis"},{"id":"4489","type":"LinearAxis"},{"id":"4505","type":"GlyphRenderer"}],"title":{"id":"4475","type":"Title"},"toolbar":{"id":"4496","type":"Toolbar"},"x_range":{"id":"4476","type":"Range1d"},"x_scale":{"id":"4508","type":"LinearScale"},"y_range":{"id":"4477","type":"Range1d"},"y_scale":{"id":"4509","type":"LinearScale"}},"id":"4478","subtype":"GMap","type":"GMapPlot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"4504","type":"Circle"},{"attributes":{},"id":"4510","type":"UnionRenderers"},{"attributes":{},"id":"4493","type":"WheelZoomTool"},{"attributes":{"source":{"id":"4501","type":"ColumnDataSource"}},"id":"4506","type":"CDSView"},{"attributes":{},"id":"4495","type":"HelpTool"},{"attributes":{"callback":null},"id":"4476","type":"Range1d"},{"attributes":{"data_source":{"id":"4501","type":"ColumnDataSource"},"glyph":{"id":"4503","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4504","type":"Circle"},"selection_glyph":null,"view":{"id":"4506","type":"CDSView"}},"id":"4505","type":"GlyphRenderer"},{"attributes":{},"id":"4508","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4492","type":"PanTool"},{"id":"4493","type":"WheelZoomTool"},{"id":"4494","type":"ResetTool"},{"id":"4495","type":"HelpTool"}]},"id":"4496","type":"Toolbar"},{"attributes":{"callback":null,"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]},"selected":{"id":"4511","type":"Selection"},"selection_policy":{"id":"4510","type":"UnionRenderers"}},"id":"4501","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"4482","type":"MercatorTickFormatter"},"plot":{"id":"4478","subtype":"GMap","type":"GMapPlot"},"ticker":{"id":"4483","type":"MercatorTicker"}},"id":"4484","type":"LinearAxis"},{"attributes":{},"id":"4509","type":"LinearScale"},{"attributes":{"lat":30.2861,"lng":-97.7394,"zoom":11},"id":"4474","type":"GMapOptions"},{"attributes":{"callback":null},"id":"4477","type":"Range1d"},{"attributes":{"formatter":{"id":"4487","type":"MercatorTickFormatter"},"plot":{"id":"4478","subtype":"GMap","type":"GMapPlot"},"ticker":{"id":"4488","type":"MercatorTicker"}},"id":"4489","type":"LinearAxis"},{"attributes":{"dimension":"lon"},"id":"4483","type":"MercatorTicker"},{"attributes":{"dimension":"lon"},"id":"4482","type":"MercatorTickFormatter"},{"attributes":{},"id":"4511","type":"Selection"},{"attributes":{"plot":null,"text":"Austin"},"id":"4475","type":"Title"}],"root_ids":["4478"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"f0ee8eb2-877e-4eee-ae9a-7b623be614eb","roots":{"4478":"e95c39a0-40f9-4c5f-831b-6d6a4fb424db"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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