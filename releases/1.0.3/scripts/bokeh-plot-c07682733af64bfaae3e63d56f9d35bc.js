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
      };var element = document.getElementById("da273e11-83a3-4ac3-b95c-746440c6e53b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'da273e11-83a3-4ac3-b95c-746440c6e53b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6ee2ad09-823b-4b93-a71c-403edf5a87d2":{"roots":{"references":[{"attributes":{"formatter":{"id":"16775","type":"PrintfTickFormatter"},"plot":{"id":"16734","subtype":"Figure","type":"Plot"},"ticker":{"id":"16749","type":"BasicTicker"}},"id":"16748","type":"LinearAxis"},{"attributes":{"formatter":{"id":"16773","type":"PrintfTickFormatter"},"plot":{"id":"16734","subtype":"Figure","type":"Plot"},"ticker":{"id":"16744","type":"BasicTicker"}},"id":"16743","type":"LinearAxis"},{"attributes":{},"id":"16757","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"16782","type":"Selection"},"selection_policy":{"id":"16783","type":"UnionRenderers"}},"id":"16768","type":"ColumnDataSource"},{"attributes":{},"id":"16782","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16770","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16761","type":"BoxAnnotation"},{"attributes":{},"id":"16744","type":"BasicTicker"},{"attributes":{"overlay":{"id":"16761","type":"BoxAnnotation"}},"id":"16755","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"16734","subtype":"Figure","type":"Plot"},"ticker":{"id":"16744","type":"BasicTicker"}},"id":"16747","type":"Grid"},{"attributes":{},"id":"16754","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"16743","type":"LinearAxis"}],"left":[{"id":"16748","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"16743","type":"LinearAxis"},{"id":"16747","type":"Grid"},{"id":"16748","type":"LinearAxis"},{"id":"16752","type":"Grid"},{"id":"16761","type":"BoxAnnotation"},{"id":"16771","type":"GlyphRenderer"}],"title":{"id":"16777","type":"Title"},"toolbar":{"id":"16759","type":"Toolbar"},"x_range":{"id":"16735","type":"DataRange1d"},"x_scale":{"id":"16739","type":"LinearScale"},"y_range":{"id":"16737","type":"DataRange1d"},"y_scale":{"id":"16741","type":"LinearScale"}},"id":"16734","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16756","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"16777","type":"Title"},{"attributes":{},"id":"16753","type":"PanTool"},{"attributes":{},"id":"16749","type":"BasicTicker"},{"attributes":{},"id":"16758","type":"HelpTool"},{"attributes":{},"id":"16783","type":"UnionRenderers"},{"attributes":{"format":"%5.3f mu"},"id":"16775","type":"PrintfTickFormatter"},{"attributes":{"callback":null},"id":"16735","type":"DataRange1d"},{"attributes":{"format":"%4.1e"},"id":"16773","type":"PrintfTickFormatter"},{"attributes":{"callback":null},"id":"16737","type":"DataRange1d"},{"attributes":{"source":{"id":"16768","type":"ColumnDataSource"}},"id":"16772","type":"CDSView"},{"attributes":{},"id":"16739","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16769","type":"Circle"},{"attributes":{},"id":"16741","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"16734","subtype":"Figure","type":"Plot"},"ticker":{"id":"16749","type":"BasicTicker"}},"id":"16752","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16753","type":"PanTool"},{"id":"16754","type":"WheelZoomTool"},{"id":"16755","type":"BoxZoomTool"},{"id":"16756","type":"SaveTool"},{"id":"16757","type":"ResetTool"},{"id":"16758","type":"HelpTool"}]},"id":"16759","type":"Toolbar"},{"attributes":{"data_source":{"id":"16768","type":"ColumnDataSource"},"glyph":{"id":"16769","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16770","type":"Circle"},"selection_glyph":null,"view":{"id":"16772","type":"CDSView"}},"id":"16771","type":"GlyphRenderer"}],"root_ids":["16734"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"6ee2ad09-823b-4b93-a71c-403edf5a87d2","roots":{"16734":"da273e11-83a3-4ac3-b95c-746440c6e53b"}}];
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