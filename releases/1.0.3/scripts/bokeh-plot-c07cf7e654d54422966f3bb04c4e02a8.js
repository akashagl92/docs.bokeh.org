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
      };var element = document.getElementById("76d6fc9d-0a92-4525-acbf-c7bb92805e25");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '76d6fc9d-0a92-4525-acbf-c7bb92805e25' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"7813bc30-f6c8-4cc2-89b1-f455e7aaf943":{"roots":{"references":[{"attributes":{"callback":null,"tooltips":"@country: @value"},"id":"19903","type":"HoverTool"},{"attributes":{"data_source":{"id":"19908","type":"ColumnDataSource"},"glyph":{"id":"19910","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19911","type":"Wedge"},"selection_glyph":null,"view":{"id":"19913","type":"CDSView"}},"id":"19912","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"19887","type":"DataRange1d"},{"attributes":{},"id":"19926","type":"Selection"},{"attributes":{},"id":"19889","type":"LinearScale"},{"attributes":{"axis_label":null,"formatter":{"id":"19915","type":"BasicTickFormatter"},"plot":{"id":"19883","subtype":"Figure","type":"Plot"},"ticker":{"id":"19899","type":"BasicTicker"},"visible":false},"id":"19898","type":"LinearAxis"},{"attributes":{},"id":"19899","type":"BasicTicker"},{"attributes":{"field":"angle"},"id":"19907","type":"CumSum"},{"attributes":{},"id":"19891","type":"LinearScale"},{"attributes":{},"id":"19917","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"19883","subtype":"Figure","type":"Plot"},"ticker":{"id":"19894","type":"BasicTicker"}},"id":"19897","type":"Grid"},{"attributes":{"field":"angle","include_zero":true},"id":"19906","type":"CumSum"},{"attributes":{"below":[{"id":"19893","type":"LinearAxis"}],"left":[{"id":"19898","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19893","type":"LinearAxis"},{"id":"19897","type":"Grid"},{"id":"19898","type":"LinearAxis"},{"id":"19902","type":"Grid"},{"id":"19919","type":"Legend"},{"id":"19912","type":"GlyphRenderer"}],"title":{"id":"19882","type":"Title"},"toolbar":{"id":"19904","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19885","type":"Range1d"},"x_scale":{"id":"19889","type":"LinearScale"},"y_range":{"id":"19887","type":"DataRange1d"},"y_scale":{"id":"19891","type":"LinearScale"}},"id":"19883","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":null,"formatter":{"id":"19917","type":"BasicTickFormatter"},"plot":{"id":"19883","subtype":"Figure","type":"Plot"},"ticker":{"id":"19894","type":"BasicTicker"},"visible":false},"id":"19893","type":"LinearAxis"},{"attributes":{},"id":"19915","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Pie Chart"},"id":"19882","type":"Title"},{"attributes":{},"id":"19927","type":"UnionRenderers"},{"attributes":{"items":[{"id":"19920","type":"LegendItem"}],"plot":{"id":"19883","subtype":"Figure","type":"Plot"}},"id":"19919","type":"Legend"},{"attributes":{"callback":null,"start":-0.5},"id":"19885","type":"Range1d"},{"attributes":{"callback":null,"data":{"angle":{"__ndarray__":"eQLEMwAC9z+3V8R09kHrP+QcmNXVFeo/hZ74ygF34j8vDs2tzcrZP1vToA6tntg/iJh0b4xy1z93BYbhOoTUPzmtw/IJwtI/0I8to/kr0j/Qjy2j+SvSP/xUAQTZ/9A/","dtype":"float64","shape":[12]},"color":["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0"],"country":["United States","United Kingdom","Japan","China","Germany","India","Italy","Australia","Brazil","France","Taiwan","Spain"],"index":[0,1,2,3,4,5,6,7,8,9,10,11],"value":[157,93,89,63,44,42,40,35,32,31,31,29]},"selected":{"id":"19926","type":"Selection"},"selection_policy":{"id":"19927","type":"UnionRenderers"}},"id":"19908","type":"ColumnDataSource"},{"attributes":{},"id":"19894","type":"BasicTicker"},{"attributes":{"label":{"field":"country"},"renderers":[{"id":"19912","type":"GlyphRenderer"}]},"id":"19920","type":"LegendItem"},{"attributes":{"end_angle":{"expr":{"id":"19907","type":"CumSum"},"units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"19906","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"19911","type":"Wedge"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19903","type":"HoverTool"}]},"id":"19904","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"19883","subtype":"Figure","type":"Plot"},"ticker":{"id":"19899","type":"BasicTicker"}},"id":"19902","type":"Grid"},{"attributes":{"end_angle":{"expr":{"id":"19907","type":"CumSum"},"units":"rad"},"fill_color":{"field":"color"},"line_color":{"value":"white"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"19906","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"19910","type":"Wedge"},{"attributes":{"source":{"id":"19908","type":"ColumnDataSource"}},"id":"19913","type":"CDSView"}],"root_ids":["19883"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"7813bc30-f6c8-4cc2-89b1-f455e7aaf943","roots":{"19883":"76d6fc9d-0a92-4525-acbf-c7bb92805e25"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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