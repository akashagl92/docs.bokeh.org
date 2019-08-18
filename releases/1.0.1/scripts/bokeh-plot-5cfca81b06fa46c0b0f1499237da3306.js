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
      };var element = document.getElementById("97bbae45-f2a9-4002-a92e-9e0975ad2dcc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '97bbae45-f2a9-4002-a92e-9e0975ad2dcc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"866be12e-c50b-4833-ba7a-155e77ab07fd":{"roots":{"references":[{"attributes":{"callback":null,"start":-0.5},"id":"19881","type":"Range1d"},{"attributes":{},"id":"19922","type":"Selection"},{"attributes":{},"id":"19890","type":"BasicTicker"},{"attributes":{"callback":null,"renderers":"auto","tooltips":"@country: @value"},"id":"19899","type":"HoverTool"},{"attributes":{"field":"angle"},"id":"19903","type":"CumSum"},{"attributes":{},"id":"19887","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"19879","subtype":"Figure","type":"Plot"},"ticker":{"id":"19890","type":"BasicTicker"}},"id":"19893","type":"Grid"},{"attributes":{},"id":"19895","type":"BasicTicker"},{"attributes":{"label":{"field":"country"},"renderers":[{"id":"19908","type":"GlyphRenderer"}]},"id":"19916","type":"LegendItem"},{"attributes":{"field":"angle","include_zero":true},"id":"19902","type":"CumSum"},{"attributes":{"data_source":{"id":"19904","type":"ColumnDataSource"},"glyph":{"id":"19906","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19907","type":"Wedge"},"selection_glyph":null,"view":{"id":"19909","type":"CDSView"}},"id":"19908","type":"GlyphRenderer"},{"attributes":{"axis_label":null,"formatter":{"id":"19914","type":"BasicTickFormatter"},"plot":{"id":"19879","subtype":"Figure","type":"Plot"},"ticker":{"id":"19895","type":"BasicTicker"},"visible":false},"id":"19894","type":"LinearAxis"},{"attributes":{"below":[{"id":"19889","type":"LinearAxis"}],"left":[{"id":"19894","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19889","type":"LinearAxis"},{"id":"19893","type":"Grid"},{"id":"19894","type":"LinearAxis"},{"id":"19898","type":"Grid"},{"id":"19915","type":"Legend"},{"id":"19908","type":"GlyphRenderer"}],"title":{"id":"19878","type":"Title"},"toolbar":{"id":"19900","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19881","type":"Range1d"},"x_scale":{"id":"19885","type":"LinearScale"},"y_range":{"id":"19883","type":"DataRange1d"},"y_scale":{"id":"19887","type":"LinearScale"}},"id":"19879","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"angle":{"__ndarray__":"eQLEMwAC9z+3V8R09kHrP+QcmNXVFeo/hZ74ygF34j8vDs2tzcrZP1vToA6tntg/iJh0b4xy1z93BYbhOoTUPzmtw/IJwtI/0I8to/kr0j/Qjy2j+SvSP/xUAQTZ/9A/","dtype":"float64","shape":[12]},"color":["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0"],"country":["United States","United Kingdom","Japan","China","Germany","India","Italy","Australia","Brazil","France","Taiwan","Spain"],"index":[0,1,2,3,4,5,6,7,8,9,10,11],"value":[157,93,89,63,44,42,40,35,32,31,31,29]},"selected":{"id":"19922","type":"Selection"},"selection_policy":{"id":"19923","type":"UnionRenderers"}},"id":"19904","type":"ColumnDataSource"},{"attributes":{"end_angle":{"expr":{"id":"19903","type":"CumSum"},"units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"19902","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"19907","type":"Wedge"},{"attributes":{},"id":"19885","type":"LinearScale"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"19879","subtype":"Figure","type":"Plot"},"ticker":{"id":"19895","type":"BasicTicker"}},"id":"19898","type":"Grid"},{"attributes":{"axis_label":null,"formatter":{"id":"19912","type":"BasicTickFormatter"},"plot":{"id":"19879","subtype":"Figure","type":"Plot"},"ticker":{"id":"19890","type":"BasicTicker"},"visible":false},"id":"19889","type":"LinearAxis"},{"attributes":{"end_angle":{"expr":{"id":"19903","type":"CumSum"},"units":"rad"},"fill_color":{"field":"color"},"line_color":{"value":"white"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"19902","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"19906","type":"Wedge"},{"attributes":{"plot":null,"text":"Pie Chart"},"id":"19878","type":"Title"},{"attributes":{},"id":"19912","type":"BasicTickFormatter"},{"attributes":{},"id":"19914","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"19904","type":"ColumnDataSource"}},"id":"19909","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19899","type":"HoverTool"}]},"id":"19900","type":"Toolbar"},{"attributes":{},"id":"19923","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"19883","type":"DataRange1d"},{"attributes":{"items":[{"id":"19916","type":"LegendItem"}],"plot":{"id":"19879","subtype":"Figure","type":"Plot"}},"id":"19915","type":"Legend"}],"root_ids":["19879"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"866be12e-c50b-4833-ba7a-155e77ab07fd","roots":{"19879":"97bbae45-f2a9-4002-a92e-9e0975ad2dcc"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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