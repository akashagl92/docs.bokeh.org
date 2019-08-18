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
      };var element = document.getElementById("8a61acc7-37ac-40fe-9d7f-c2df00a72030");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8a61acc7-37ac-40fe-9d7f-c2df00a72030' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6798a8b0-f8e5-4e2b-bc80-f4d4c6a0590a":{"roots":{"references":[{"attributes":{},"id":"33185","type":"ResetTool"},{"attributes":{},"id":"33181","type":"PanTool"},{"attributes":{},"id":"33208","type":"UnionRenderers"},{"attributes":{},"id":"33184","type":"SaveTool"},{"attributes":{"formatter":{"id":"33204","type":"BasicTickFormatter"},"plot":{"id":"33162","subtype":"Figure","type":"Plot"},"ticker":{"id":"33172","type":"BasicTicker"}},"id":"33171","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33181","type":"PanTool"},{"id":"33182","type":"WheelZoomTool"},{"id":"33183","type":"BoxZoomTool"},{"id":"33184","type":"SaveTool"},{"id":"33185","type":"ResetTool"},{"id":"33186","type":"HelpTool"}]},"id":"33187","type":"Toolbar"},{"attributes":{"callback":null,"data":{"right":[1,2,3],"y":[1,2,3]},"selected":{"id":"33209","type":"Selection"},"selection_policy":{"id":"33208","type":"UnionRenderers"}},"id":"33196","type":"ColumnDataSource"},{"attributes":{},"id":"33186","type":"HelpTool"},{"attributes":{},"id":"33177","type":"BasicTicker"},{"attributes":{"data_source":{"id":"33196","type":"ColumnDataSource"},"glyph":{"id":"33197","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33198","type":"HBar"},"selection_glyph":null,"view":{"id":"33200","type":"CDSView"}},"id":"33199","type":"GlyphRenderer"},{"attributes":{},"id":"33204","type":"BasicTickFormatter"},{"attributes":{},"id":"33167","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"33197","type":"HBar"},{"attributes":{"formatter":{"id":"33206","type":"BasicTickFormatter"},"plot":{"id":"33162","subtype":"Figure","type":"Plot"},"ticker":{"id":"33177","type":"BasicTicker"}},"id":"33176","type":"LinearAxis"},{"attributes":{},"id":"33206","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"33196","type":"ColumnDataSource"}},"id":"33200","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33189","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"33171","type":"LinearAxis"}],"left":[{"id":"33176","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33171","type":"LinearAxis"},{"id":"33175","type":"Grid"},{"id":"33176","type":"LinearAxis"},{"id":"33180","type":"Grid"},{"id":"33189","type":"BoxAnnotation"},{"id":"33199","type":"GlyphRenderer"}],"title":{"id":"33202","type":"Title"},"toolbar":{"id":"33187","type":"Toolbar"},"x_range":{"id":"33163","type":"DataRange1d"},"x_scale":{"id":"33167","type":"LinearScale"},"y_range":{"id":"33165","type":"DataRange1d"},"y_scale":{"id":"33169","type":"LinearScale"}},"id":"33162","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"33165","type":"DataRange1d"},{"attributes":{"overlay":{"id":"33189","type":"BoxAnnotation"}},"id":"33183","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"33202","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"33198","type":"HBar"},{"attributes":{},"id":"33182","type":"WheelZoomTool"},{"attributes":{},"id":"33172","type":"BasicTicker"},{"attributes":{},"id":"33169","type":"LinearScale"},{"attributes":{"plot":{"id":"33162","subtype":"Figure","type":"Plot"},"ticker":{"id":"33172","type":"BasicTicker"}},"id":"33175","type":"Grid"},{"attributes":{"callback":null},"id":"33163","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"33162","subtype":"Figure","type":"Plot"},"ticker":{"id":"33177","type":"BasicTicker"}},"id":"33180","type":"Grid"},{"attributes":{},"id":"33209","type":"Selection"}],"root_ids":["33162"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"6798a8b0-f8e5-4e2b-bc80-f4d4c6a0590a","roots":{"33162":"8a61acc7-37ac-40fe-9d7f-c2df00a72030"}}];
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