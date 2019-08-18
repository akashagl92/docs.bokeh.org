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
      };var element = document.getElementById("17a993c5-9c5b-4c88-8912-9ee8c0f2533c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '17a993c5-9c5b-4c88-8912-9ee8c0f2533c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2ad43a6e-de4d-46a8-87f2-da10ed715e8b":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"16731","subtype":"Figure","type":"Plot"},"ticker":{"id":"16746","type":"BasicTicker"}},"id":"16749","type":"Grid"},{"attributes":{"plot":{"id":"16731","subtype":"Figure","type":"Plot"},"ticker":{"id":"16741","type":"BasicTicker"}},"id":"16744","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16767","type":"Circle"},{"attributes":{"overlay":{"id":"16758","type":"BoxAnnotation"}},"id":"16752","type":"BoxZoomTool"},{"attributes":{"format":"%4.1e"},"id":"16770","type":"PrintfTickFormatter"},{"attributes":{"data_source":{"id":"16765","type":"ColumnDataSource"},"glyph":{"id":"16766","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16767","type":"Circle"},"selection_glyph":null,"view":{"id":"16769","type":"CDSView"}},"id":"16768","type":"GlyphRenderer"},{"attributes":{},"id":"16754","type":"ResetTool"},{"attributes":{"source":{"id":"16765","type":"ColumnDataSource"}},"id":"16769","type":"CDSView"},{"attributes":{},"id":"16753","type":"SaveTool"},{"attributes":{},"id":"16779","type":"UnionRenderers"},{"attributes":{},"id":"16741","type":"BasicTicker"},{"attributes":{"format":"%5.3f mu"},"id":"16772","type":"PrintfTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16766","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16758","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"16780","type":"Selection"},"selection_policy":{"id":"16779","type":"UnionRenderers"}},"id":"16765","type":"ColumnDataSource"},{"attributes":{},"id":"16746","type":"BasicTicker"},{"attributes":{},"id":"16755","type":"HelpTool"},{"attributes":{},"id":"16780","type":"Selection"},{"attributes":{"below":[{"id":"16740","type":"LinearAxis"}],"left":[{"id":"16745","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"16740","type":"LinearAxis"},{"id":"16744","type":"Grid"},{"id":"16745","type":"LinearAxis"},{"id":"16749","type":"Grid"},{"id":"16758","type":"BoxAnnotation"},{"id":"16768","type":"GlyphRenderer"}],"title":{"id":"16775","type":"Title"},"toolbar":{"id":"16756","type":"Toolbar"},"x_range":{"id":"16732","type":"DataRange1d"},"x_scale":{"id":"16736","type":"LinearScale"},"y_range":{"id":"16734","type":"DataRange1d"},"y_scale":{"id":"16738","type":"LinearScale"}},"id":"16731","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16750","type":"PanTool"},{"id":"16751","type":"WheelZoomTool"},{"id":"16752","type":"BoxZoomTool"},{"id":"16753","type":"SaveTool"},{"id":"16754","type":"ResetTool"},{"id":"16755","type":"HelpTool"}]},"id":"16756","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"16775","type":"Title"},{"attributes":{"callback":null},"id":"16734","type":"DataRange1d"},{"attributes":{},"id":"16738","type":"LinearScale"},{"attributes":{},"id":"16736","type":"LinearScale"},{"attributes":{},"id":"16751","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"16770","type":"PrintfTickFormatter"},"plot":{"id":"16731","subtype":"Figure","type":"Plot"},"ticker":{"id":"16741","type":"BasicTicker"}},"id":"16740","type":"LinearAxis"},{"attributes":{},"id":"16750","type":"PanTool"},{"attributes":{"formatter":{"id":"16772","type":"PrintfTickFormatter"},"plot":{"id":"16731","subtype":"Figure","type":"Plot"},"ticker":{"id":"16746","type":"BasicTicker"}},"id":"16745","type":"LinearAxis"},{"attributes":{"callback":null},"id":"16732","type":"DataRange1d"}],"root_ids":["16731"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"2ad43a6e-de4d-46a8-87f2-da10ed715e8b","roots":{"16731":"17a993c5-9c5b-4c88-8912-9ee8c0f2533c"}}];
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