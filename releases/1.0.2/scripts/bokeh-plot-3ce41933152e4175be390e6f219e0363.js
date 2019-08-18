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
      };var element = document.getElementById("a2b258c1-34b0-40f3-9664-32e34fe425f7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a2b258c1-34b0-40f3-9664-32e34fe425f7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"be6ed3e9-a53c-41a5-a78e-075641e67e0d":{"roots":{"references":[{"attributes":{"plot":null,"text":"Pie Chart"},"id":"19879","type":"Title"},{"attributes":{},"id":"19913","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"19890","type":"LinearAxis"}],"left":[{"id":"19895","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19890","type":"LinearAxis"},{"id":"19894","type":"Grid"},{"id":"19895","type":"LinearAxis"},{"id":"19899","type":"Grid"},{"id":"19916","type":"Legend"},{"id":"19909","type":"GlyphRenderer"}],"title":{"id":"19879","type":"Title"},"toolbar":{"id":"19901","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19882","type":"Range1d"},"x_scale":{"id":"19886","type":"LinearScale"},"y_range":{"id":"19884","type":"DataRange1d"},"y_scale":{"id":"19888","type":"LinearScale"}},"id":"19880","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"field":"country"},"renderers":[{"id":"19909","type":"GlyphRenderer"}]},"id":"19917","type":"LegendItem"},{"attributes":{"items":[{"id":"19917","type":"LegendItem"}],"plot":{"id":"19880","subtype":"Figure","type":"Plot"}},"id":"19916","type":"Legend"},{"attributes":{"axis_label":null,"formatter":{"id":"19913","type":"BasicTickFormatter"},"plot":{"id":"19880","subtype":"Figure","type":"Plot"},"ticker":{"id":"19891","type":"BasicTicker"},"visible":false},"id":"19890","type":"LinearAxis"},{"attributes":{"source":{"id":"19905","type":"ColumnDataSource"}},"id":"19910","type":"CDSView"},{"attributes":{},"id":"19924","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"19880","subtype":"Figure","type":"Plot"},"ticker":{"id":"19896","type":"BasicTicker"}},"id":"19899","type":"Grid"},{"attributes":{"axis_label":null,"formatter":{"id":"19915","type":"BasicTickFormatter"},"plot":{"id":"19880","subtype":"Figure","type":"Plot"},"ticker":{"id":"19896","type":"BasicTicker"},"visible":false},"id":"19895","type":"LinearAxis"},{"attributes":{},"id":"19915","type":"BasicTickFormatter"},{"attributes":{"callback":null,"tooltips":"@country: @value"},"id":"19900","type":"HoverTool"},{"attributes":{},"id":"19896","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19900","type":"HoverTool"}]},"id":"19901","type":"Toolbar"},{"attributes":{"field":"angle","include_zero":true},"id":"19903","type":"CumSum"},{"attributes":{},"id":"19886","type":"LinearScale"},{"attributes":{"field":"angle"},"id":"19904","type":"CumSum"},{"attributes":{},"id":"19891","type":"BasicTicker"},{"attributes":{"callback":null},"id":"19884","type":"DataRange1d"},{"attributes":{"end_angle":{"expr":{"id":"19904","type":"CumSum"},"units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"19903","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"19908","type":"Wedge"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"19880","subtype":"Figure","type":"Plot"},"ticker":{"id":"19891","type":"BasicTicker"}},"id":"19894","type":"Grid"},{"attributes":{},"id":"19888","type":"LinearScale"},{"attributes":{},"id":"19923","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19905","type":"ColumnDataSource"},"glyph":{"id":"19907","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19908","type":"Wedge"},"selection_glyph":null,"view":{"id":"19910","type":"CDSView"}},"id":"19909","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"angle":{"__ndarray__":"eQLEMwAC9z+3V8R09kHrP+QcmNXVFeo/hZ74ygF34j8vDs2tzcrZP1vToA6tntg/iJh0b4xy1z93BYbhOoTUPzmtw/IJwtI/0I8to/kr0j/Qjy2j+SvSP/xUAQTZ/9A/","dtype":"float64","shape":[12]},"color":["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0"],"country":["United States","United Kingdom","Japan","China","Germany","India","Italy","Australia","Brazil","France","Taiwan","Spain"],"index":[0,1,2,3,4,5,6,7,8,9,10,11],"value":[157,93,89,63,44,42,40,35,32,31,31,29]},"selected":{"id":"19924","type":"Selection"},"selection_policy":{"id":"19923","type":"UnionRenderers"}},"id":"19905","type":"ColumnDataSource"},{"attributes":{"end_angle":{"expr":{"id":"19904","type":"CumSum"},"units":"rad"},"fill_color":{"field":"color"},"line_color":{"value":"white"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"19903","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"19907","type":"Wedge"},{"attributes":{"callback":null,"start":-0.5},"id":"19882","type":"Range1d"}],"root_ids":["19880"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"be6ed3e9-a53c-41a5-a78e-075641e67e0d","roots":{"19880":"a2b258c1-34b0-40f3-9664-32e34fe425f7"}}];
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