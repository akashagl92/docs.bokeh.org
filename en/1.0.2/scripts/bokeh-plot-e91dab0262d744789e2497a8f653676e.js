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
      };var element = document.getElementById("9b780c48-1f21-4684-8e95-cc9565a97314");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9b780c48-1f21-4684-8e95-cc9565a97314' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bd61ebc9-10a3-4a5f-90a6-9c5de6b95e86":{"roots":{"references":[{"attributes":{"plot":{"id":"8863","subtype":"Figure","type":"Plot"},"ticker":{"id":"8873","type":"BasicTicker"}},"id":"8876","type":"Grid"},{"attributes":{"source":{"id":"8897","type":"ColumnDataSource"}},"id":"8901","type":"CDSView"},{"attributes":{},"id":"8878","type":"BasicTicker"},{"attributes":{"overlay":{"id":"8890","type":"BoxAnnotation"}},"id":"8884","type":"BoxZoomTool"},{"attributes":{},"id":"8885","type":"SaveTool"},{"attributes":{"below":[{"id":"8872","type":"LinearAxis"}],"left":[{"id":"8877","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8872","type":"LinearAxis"},{"id":"8876","type":"Grid"},{"id":"8877","type":"LinearAxis"},{"id":"8881","type":"Grid"},{"id":"8890","type":"BoxAnnotation"},{"id":"8900","type":"GlyphRenderer"}],"title":{"id":"8903","type":"Title"},"toolbar":{"id":"8888","type":"Toolbar"},"x_range":{"id":"8864","type":"DataRange1d"},"x_scale":{"id":"8868","type":"LinearScale"},"y_range":{"id":"8866","type":"DataRange1d"},"y_scale":{"id":"8870","type":"LinearScale"}},"id":"8863","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"8907","type":"BasicTickFormatter"},"plot":{"id":"8863","subtype":"Figure","type":"Plot"},"ticker":{"id":"8878","type":"BasicTicker"}},"id":"8877","type":"LinearAxis"},{"attributes":{},"id":"8886","type":"ResetTool"},{"attributes":{"data_source":{"id":"8897","type":"ColumnDataSource"},"glyph":{"id":"8898","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8899","type":"Arc"},"selection_glyph":null,"view":{"id":"8901","type":"CDSView"}},"id":"8900","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8864","type":"DataRange1d"},{"attributes":{},"id":"8910","type":"Selection"},{"attributes":{},"id":"8870","type":"LinearScale"},{"attributes":{},"id":"8887","type":"HelpTool"},{"attributes":{},"id":"8909","type":"UnionRenderers"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"8898","type":"Arc"},{"attributes":{"formatter":{"id":"8905","type":"BasicTickFormatter"},"plot":{"id":"8863","subtype":"Figure","type":"Plot"},"ticker":{"id":"8873","type":"BasicTicker"}},"id":"8872","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8882","type":"PanTool"},{"id":"8883","type":"WheelZoomTool"},{"id":"8884","type":"BoxZoomTool"},{"id":"8885","type":"SaveTool"},{"id":"8886","type":"ResetTool"},{"id":"8887","type":"HelpTool"}]},"id":"8888","type":"Toolbar"},{"attributes":{"callback":null},"id":"8866","type":"DataRange1d"},{"attributes":{},"id":"8907","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"8899","type":"Arc"},{"attributes":{},"id":"8868","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8890","type":"BoxAnnotation"},{"attributes":{},"id":"8905","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"8903","type":"Title"},{"attributes":{},"id":"8873","type":"BasicTicker"},{"attributes":{},"id":"8882","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"8910","type":"Selection"},"selection_policy":{"id":"8909","type":"UnionRenderers"}},"id":"8897","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"8863","subtype":"Figure","type":"Plot"},"ticker":{"id":"8878","type":"BasicTicker"}},"id":"8881","type":"Grid"},{"attributes":{},"id":"8883","type":"WheelZoomTool"}],"root_ids":["8863"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"bd61ebc9-10a3-4a5f-90a6-9c5de6b95e86","roots":{"8863":"9b780c48-1f21-4684-8e95-cc9565a97314"}}];
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