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
      };var element = document.getElementById("f7c08eae-157f-4c5a-a978-03abe920c46b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f7c08eae-157f-4c5a-a978-03abe920c46b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"07cb15fd-a017-4be3-9403-c886787c1325":{"roots":{"references":[{"attributes":{"data_source":{"id":"33539","type":"ColumnDataSource"},"glyph":{"id":"33540","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33541","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"33543","type":"CDSView"}},"id":"33542","type":"GlyphRenderer"},{"attributes":{},"id":"33524","type":"PanTool"},{"attributes":{},"id":"33548","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"33532","type":"BoxAnnotation"}},"id":"33526","type":"BoxZoomTool"},{"attributes":{},"id":"33515","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"33544","type":"Title"},{"attributes":{},"id":"33551","type":"Selection"},{"attributes":{},"id":"33546","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"33514","type":"LinearAxis"}],"left":[{"id":"33519","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33514","type":"LinearAxis"},{"id":"33518","type":"Grid"},{"id":"33519","type":"LinearAxis"},{"id":"33523","type":"Grid"},{"id":"33532","type":"BoxAnnotation"},{"id":"33542","type":"GlyphRenderer"}],"title":{"id":"33544","type":"Title"},"toolbar":{"id":"33530","type":"Toolbar"},"x_range":{"id":"33506","type":"DataRange1d"},"x_scale":{"id":"33510","type":"LinearScale"},"y_range":{"id":"33508","type":"DataRange1d"},"y_scale":{"id":"33512","type":"LinearScale"}},"id":"33505","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33527","type":"SaveTool"},{"attributes":{"plot":{"id":"33505","subtype":"Figure","type":"Plot"},"ticker":{"id":"33515","type":"BasicTicker"}},"id":"33518","type":"Grid"},{"attributes":{"source":{"id":"33539","type":"ColumnDataSource"}},"id":"33543","type":"CDSView"},{"attributes":{"formatter":{"id":"33546","type":"BasicTickFormatter"},"plot":{"id":"33505","subtype":"Figure","type":"Plot"},"ticker":{"id":"33520","type":"BasicTicker"}},"id":"33519","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33541","type":"InvertedTriangle"},{"attributes":{},"id":"33520","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33506","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33532","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"33505","subtype":"Figure","type":"Plot"},"ticker":{"id":"33520","type":"BasicTicker"}},"id":"33523","type":"Grid"},{"attributes":{},"id":"33512","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33524","type":"PanTool"},{"id":"33525","type":"WheelZoomTool"},{"id":"33526","type":"BoxZoomTool"},{"id":"33527","type":"SaveTool"},{"id":"33528","type":"ResetTool"},{"id":"33529","type":"HelpTool"}]},"id":"33530","type":"Toolbar"},{"attributes":{"callback":null},"id":"33508","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33540","type":"InvertedTriangle"},{"attributes":{},"id":"33529","type":"HelpTool"},{"attributes":{},"id":"33510","type":"LinearScale"},{"attributes":{},"id":"33550","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33551","type":"Selection"},"selection_policy":{"id":"33550","type":"UnionRenderers"}},"id":"33539","type":"ColumnDataSource"},{"attributes":{},"id":"33528","type":"ResetTool"},{"attributes":{"formatter":{"id":"33548","type":"BasicTickFormatter"},"plot":{"id":"33505","subtype":"Figure","type":"Plot"},"ticker":{"id":"33515","type":"BasicTicker"}},"id":"33514","type":"LinearAxis"},{"attributes":{},"id":"33525","type":"WheelZoomTool"}],"root_ids":["33505"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"07cb15fd-a017-4be3-9403-c886787c1325","roots":{"33505":"f7c08eae-157f-4c5a-a978-03abe920c46b"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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