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
      };var element = document.getElementById("a8514faa-6926-4d08-a197-72f49b553c55");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a8514faa-6926-4d08-a197-72f49b553c55' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"550af784-3468-43ba-9dd3-395478fa0ffd":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"32528","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32525","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32524","type":"Circle"},{"attributes":{"overlay":{"id":"32516","type":"BoxAnnotation"}},"id":"32510","type":"BoxZoomTool"},{"attributes":{},"id":"32532","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"32523","type":"ColumnDataSource"},"glyph":{"id":"32524","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32525","type":"Circle"},"selection_glyph":null,"view":{"id":"32527","type":"CDSView"}},"id":"32526","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32516","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32508","type":"PanTool"},{"id":"32509","type":"WheelZoomTool"},{"id":"32510","type":"BoxZoomTool"},{"id":"32511","type":"SaveTool"},{"id":"32512","type":"ResetTool"},{"id":"32513","type":"HelpTool"}]},"id":"32514","type":"Toolbar"},{"attributes":{},"id":"32499","type":"BasicTicker"},{"attributes":{},"id":"32513","type":"HelpTool"},{"attributes":{"formatter":{"id":"32530","type":"BasicTickFormatter"},"plot":{"id":"32489","subtype":"Figure","type":"Plot"},"ticker":{"id":"32504","type":"BasicTicker"}},"id":"32503","type":"LinearAxis"},{"attributes":{"plot":{"id":"32489","subtype":"Figure","type":"Plot"},"ticker":{"id":"32499","type":"BasicTicker"}},"id":"32502","type":"Grid"},{"attributes":{},"id":"32509","type":"WheelZoomTool"},{"attributes":{},"id":"32508","type":"PanTool"},{"attributes":{},"id":"32504","type":"BasicTicker"},{"attributes":{},"id":"32530","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"32490","type":"DataRange1d"},{"attributes":{},"id":"32536","type":"UnionRenderers"},{"attributes":{},"id":"32496","type":"LinearScale"},{"attributes":{"formatter":{"id":"32532","type":"BasicTickFormatter"},"plot":{"id":"32489","subtype":"Figure","type":"Plot"},"ticker":{"id":"32499","type":"BasicTicker"}},"id":"32498","type":"LinearAxis"},{"attributes":{"below":[{"id":"32498","type":"LinearAxis"}],"left":[{"id":"32503","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32498","type":"LinearAxis"},{"id":"32502","type":"Grid"},{"id":"32503","type":"LinearAxis"},{"id":"32507","type":"Grid"},{"id":"32516","type":"BoxAnnotation"},{"id":"32526","type":"GlyphRenderer"}],"title":{"id":"32528","type":"Title"},"toolbar":{"id":"32514","type":"Toolbar"},"x_range":{"id":"32490","type":"DataRange1d"},"x_scale":{"id":"32494","type":"LinearScale"},"y_range":{"id":"32492","type":"DataRange1d"},"y_scale":{"id":"32496","type":"LinearScale"}},"id":"32489","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32511","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32535","type":"Selection"},"selection_policy":{"id":"32536","type":"UnionRenderers"}},"id":"32523","type":"ColumnDataSource"},{"attributes":{},"id":"32512","type":"ResetTool"},{"attributes":{},"id":"32494","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"32489","subtype":"Figure","type":"Plot"},"ticker":{"id":"32504","type":"BasicTicker"}},"id":"32507","type":"Grid"},{"attributes":{"callback":null},"id":"32492","type":"DataRange1d"},{"attributes":{"source":{"id":"32523","type":"ColumnDataSource"}},"id":"32527","type":"CDSView"},{"attributes":{},"id":"32535","type":"Selection"}],"root_ids":["32489"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"550af784-3468-43ba-9dd3-395478fa0ffd","roots":{"32489":"a8514faa-6926-4d08-a197-72f49b553c55"}}];
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