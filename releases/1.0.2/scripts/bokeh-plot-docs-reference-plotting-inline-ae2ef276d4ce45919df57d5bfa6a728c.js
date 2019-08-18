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
      };var element = document.getElementById("6682f211-6f5a-4e73-9f52-c4c2932e8e86");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6682f211-6f5a-4e73-9f52-c4c2932e8e86' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5611e74a-3725-4101-8321-304db9ebcc74":{"roots":{"references":[{"attributes":{},"id":"34261","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"34294","type":"Title"},{"attributes":{},"id":"34273","type":"PanTool"},{"attributes":{"formatter":{"id":"34296","type":"BasicTickFormatter"},"plot":{"id":"34254","subtype":"Figure","type":"Plot"},"ticker":{"id":"34264","type":"BasicTicker"}},"id":"34263","type":"LinearAxis"},{"attributes":{},"id":"34296","type":"BasicTickFormatter"},{"attributes":{},"id":"34274","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"34254","subtype":"Figure","type":"Plot"},"ticker":{"id":"34264","type":"BasicTicker"}},"id":"34267","type":"Grid"},{"attributes":{},"id":"34298","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"34281","type":"BoxAnnotation"}},"id":"34275","type":"BoxZoomTool"},{"attributes":{},"id":"34278","type":"HelpTool"},{"attributes":{},"id":"34300","type":"UnionRenderers"},{"attributes":{},"id":"34276","type":"SaveTool"},{"attributes":{"formatter":{"id":"34298","type":"BasicTickFormatter"},"plot":{"id":"34254","subtype":"Figure","type":"Plot"},"ticker":{"id":"34269","type":"BasicTicker"}},"id":"34268","type":"LinearAxis"},{"attributes":{},"id":"34301","type":"Selection"},{"attributes":{},"id":"34277","type":"ResetTool"},{"attributes":{},"id":"34269","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34255","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34273","type":"PanTool"},{"id":"34274","type":"WheelZoomTool"},{"id":"34275","type":"BoxZoomTool"},{"id":"34276","type":"SaveTool"},{"id":"34277","type":"ResetTool"},{"id":"34278","type":"HelpTool"}]},"id":"34279","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"34254","subtype":"Figure","type":"Plot"},"ticker":{"id":"34269","type":"BasicTicker"}},"id":"34272","type":"Grid"},{"attributes":{"callback":null},"id":"34257","type":"DataRange1d"},{"attributes":{"data_source":{"id":"34288","type":"ColumnDataSource"},"glyph":{"id":"34289","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34290","type":"Rect"},"selection_glyph":null,"view":{"id":"34292","type":"CDSView"}},"id":"34291","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34301","type":"Selection"},"selection_policy":{"id":"34300","type":"UnionRenderers"}},"id":"34288","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34281","type":"BoxAnnotation"},{"attributes":{},"id":"34264","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34290","type":"Rect"},{"attributes":{},"id":"34259","type":"LinearScale"},{"attributes":{"source":{"id":"34288","type":"ColumnDataSource"}},"id":"34292","type":"CDSView"},{"attributes":{"below":[{"id":"34263","type":"LinearAxis"}],"left":[{"id":"34268","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34263","type":"LinearAxis"},{"id":"34267","type":"Grid"},{"id":"34268","type":"LinearAxis"},{"id":"34272","type":"Grid"},{"id":"34281","type":"BoxAnnotation"},{"id":"34291","type":"GlyphRenderer"}],"title":{"id":"34294","type":"Title"},"toolbar":{"id":"34279","type":"Toolbar"},"x_range":{"id":"34255","type":"DataRange1d"},"x_scale":{"id":"34259","type":"LinearScale"},"y_range":{"id":"34257","type":"DataRange1d"},"y_scale":{"id":"34261","type":"LinearScale"}},"id":"34254","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34289","type":"Rect"}],"root_ids":["34254"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"5611e74a-3725-4101-8321-304db9ebcc74","roots":{"34254":"6682f211-6f5a-4e73-9f52-c4c2932e8e86"}}];
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