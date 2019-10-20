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
      };var element = document.getElementById("fbf6ed86-96ba-4c20-a6d4-2d7ba47754a7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fbf6ed86-96ba-4c20-a6d4-2d7ba47754a7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2b3e4549-3712-4282-8bb0-6cb786232c0a":{"roots":{"references":[{"attributes":{"below":[{"id":"18998","type":"LinearAxis"}],"left":[{"id":"19003","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18998","type":"LinearAxis"},{"id":"19002","type":"Grid"},{"id":"19003","type":"LinearAxis"},{"id":"19007","type":"Grid"},{"id":"19016","type":"BoxAnnotation"},{"id":"19026","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"19014","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"18990","type":"DataRange1d"},"x_scale":{"id":"18994","type":"LinearScale"},"y_range":{"id":"18992","type":"DataRange1d"},"y_scale":{"id":"18996","type":"LinearScale"}},"id":"18988","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"19024","type":"Circle"},{"attributes":{"formatter":{"id":"19029","type":"BasicTickFormatter"},"plot":{"id":"18988","subtype":"Figure","type":"Plot"},"ticker":{"id":"19004","type":"BasicTicker"}},"id":"19003","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"19025","type":"Circle"},{"attributes":{},"id":"19035","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"18988","subtype":"Figure","type":"Plot"},"ticker":{"id":"19004","type":"BasicTicker"}},"id":"19007","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19008","type":"PanTool"},{"id":"19009","type":"WheelZoomTool"},{"id":"19010","type":"BoxZoomTool"},{"id":"19011","type":"SaveTool"},{"id":"19012","type":"ResetTool"},{"id":"19013","type":"HelpTool"}]},"id":"19014","type":"Toolbar"},{"attributes":{"callback":null},"id":"18990","type":"DataRange1d"},{"attributes":{},"id":"19013","type":"HelpTool"},{"attributes":{"callback":null},"id":"18992","type":"DataRange1d"},{"attributes":{},"id":"18994","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19016","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"19034","type":"Selection"},"selection_policy":{"id":"19035","type":"UnionRenderers"}},"id":"19023","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19023","type":"ColumnDataSource"},"glyph":{"id":"19024","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19025","type":"Circle"},"selection_glyph":null,"view":{"id":"19027","type":"CDSView"}},"id":"19026","type":"GlyphRenderer"},{"attributes":{},"id":"19008","type":"PanTool"},{"attributes":{"source":{"id":"19023","type":"ColumnDataSource"}},"id":"19027","type":"CDSView"},{"attributes":{},"id":"18996","type":"LinearScale"},{"attributes":{},"id":"19009","type":"WheelZoomTool"},{"attributes":{},"id":"19004","type":"BasicTicker"},{"attributes":{},"id":"19029","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"19016","type":"BoxAnnotation"}},"id":"19010","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"19031","type":"BasicTickFormatter"},"plot":{"id":"18988","subtype":"Figure","type":"Plot"},"ticker":{"id":"18999","type":"BasicTicker"}},"id":"18998","type":"LinearAxis"},{"attributes":{},"id":"19031","type":"BasicTickFormatter"},{"attributes":{},"id":"19011","type":"SaveTool"},{"attributes":{},"id":"18999","type":"BasicTicker"},{"attributes":{},"id":"19034","type":"Selection"},{"attributes":{},"id":"19012","type":"ResetTool"},{"attributes":{"plot":{"id":"18988","subtype":"Figure","type":"Plot"},"ticker":{"id":"18999","type":"BasicTicker"}},"id":"19002","type":"Grid"}],"root_ids":["18988"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"2b3e4549-3712-4282-8bb0-6cb786232c0a","roots":{"18988":"fbf6ed86-96ba-4c20-a6d4-2d7ba47754a7"}}];
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