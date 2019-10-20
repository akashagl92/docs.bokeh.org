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
      };var element = document.getElementById("df001ac8-0abb-4816-a823-4f2197f35cf5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'df001ac8-0abb-4816-a823-4f2197f35cf5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2f6d8fb2-e32a-4221-9064-a8198851b1fc":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18451","type":"PanTool"},{"id":"18452","type":"WheelZoomTool"},{"id":"18453","type":"BoxZoomTool"},{"id":"18454","type":"SaveTool"},{"id":"18455","type":"ResetTool"},{"id":"18456","type":"HelpTool"},{"id":"18457","type":"HoverTool"}]},"id":"18458","type":"Toolbar"},{"attributes":{},"id":"18437","type":"LinearScale"},{"attributes":{"formatter":{"id":"18477","type":"BasicTickFormatter"},"plot":{"id":"18431","subtype":"Figure","type":"Plot"},"ticker":{"id":"18447","type":"BasicTicker"}},"id":"18446","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"18469","type":"Circle"},{"attributes":{"data_source":{"id":"18429","type":"ColumnDataSource"},"glyph":{"id":"18469","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18470","type":"Circle"},"selection_glyph":null,"view":{"id":"18472","type":"CDSView"}},"id":"18471","type":"GlyphRenderer"},{"attributes":{},"id":"18455","type":"ResetTool"},{"attributes":{},"id":"18475","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18460","type":"BoxAnnotation"},{"attributes":{},"id":"18447","type":"BasicTicker"},{"attributes":{"overlay":{"id":"18460","type":"BoxAnnotation"}},"id":"18453","type":"BoxZoomTool"},{"attributes":{"callback":null,"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"18457","type":"HoverTool"},{"attributes":{"callback":null},"id":"18433","type":"DataRange1d"},{"attributes":{},"id":"18442","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"18470","type":"Circle"},{"attributes":{"formatter":{"id":"18475","type":"BasicTickFormatter"},"plot":{"id":"18431","subtype":"Figure","type":"Plot"},"ticker":{"id":"18442","type":"BasicTicker"}},"id":"18441","type":"LinearAxis"},{"attributes":{"source":{"id":"18429","type":"ColumnDataSource"}},"id":"18472","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"18431","subtype":"Figure","type":"Plot"},"ticker":{"id":"18447","type":"BasicTicker"}},"id":"18450","type":"Grid"},{"attributes":{"plot":{"id":"18431","subtype":"Figure","type":"Plot"},"ticker":{"id":"18442","type":"BasicTicker"}},"id":"18445","type":"Grid"},{"attributes":{"callback":null,"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"18480","type":"Selection"},"selection_policy":{"id":"18479","type":"UnionRenderers"}},"id":"18429","type":"ColumnDataSource"},{"attributes":{},"id":"18456","type":"HelpTool"},{"attributes":{"callback":null},"id":"18435","type":"DataRange1d"},{"attributes":{"below":[{"id":"18441","type":"LinearAxis"}],"left":[{"id":"18446","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18441","type":"LinearAxis"},{"id":"18445","type":"Grid"},{"id":"18446","type":"LinearAxis"},{"id":"18450","type":"Grid"},{"id":"18460","type":"BoxAnnotation"},{"id":"18471","type":"GlyphRenderer"}],"title":{"id":"18430","type":"Title"},"toolbar":{"id":"18458","type":"Toolbar"},"x_range":{"id":"18433","type":"DataRange1d"},"x_scale":{"id":"18437","type":"LinearScale"},"y_range":{"id":"18435","type":"DataRange1d"},"y_scale":{"id":"18439","type":"LinearScale"}},"id":"18431","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18439","type":"LinearScale"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"18430","type":"Title"},{"attributes":{},"id":"18477","type":"BasicTickFormatter"},{"attributes":{},"id":"18454","type":"SaveTool"},{"attributes":{},"id":"18480","type":"Selection"},{"attributes":{},"id":"18451","type":"PanTool"},{"attributes":{},"id":"18479","type":"UnionRenderers"},{"attributes":{},"id":"18452","type":"WheelZoomTool"}],"root_ids":["18431"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"2f6d8fb2-e32a-4221-9064-a8198851b1fc","roots":{"18431":"df001ac8-0abb-4816-a823-4f2197f35cf5"}}];
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