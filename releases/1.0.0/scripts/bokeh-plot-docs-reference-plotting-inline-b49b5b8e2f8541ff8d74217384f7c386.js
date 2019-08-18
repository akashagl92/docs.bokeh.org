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
      };var element = document.getElementById("334b1251-f403-40e1-b799-0b5587a0436a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '334b1251-f403-40e1-b799-0b5587a0436a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"61c69a51-a648-4d00-a549-52724a2c461c":{"roots":{"references":[{"attributes":{"overlay":{"id":"33853","type":"BoxAnnotation"}},"id":"33847","type":"BoxZoomTool"},{"attributes":{},"id":"33846","type":"WheelZoomTool"},{"attributes":{},"id":"33868","type":"BasicTickFormatter"},{"attributes":{},"id":"33836","type":"BasicTicker"},{"attributes":{},"id":"33848","type":"SaveTool"},{"attributes":{},"id":"33870","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"33826","subtype":"Figure","type":"Plot"},"ticker":{"id":"33836","type":"BasicTicker"}},"id":"33839","type":"Grid"},{"attributes":{"below":[{"id":"33835","type":"LinearAxis"}],"left":[{"id":"33840","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33835","type":"LinearAxis"},{"id":"33839","type":"Grid"},{"id":"33840","type":"LinearAxis"},{"id":"33844","type":"Grid"},{"id":"33853","type":"BoxAnnotation"},{"id":"33863","type":"GlyphRenderer"}],"title":{"id":"33866","type":"Title"},"toolbar":{"id":"33851","type":"Toolbar"},"x_range":{"id":"33827","type":"DataRange1d"},"x_scale":{"id":"33831","type":"LinearScale"},"y_range":{"id":"33829","type":"DataRange1d"},"y_scale":{"id":"33833","type":"LinearScale"}},"id":"33826","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33872","type":"Selection"},{"attributes":{},"id":"33849","type":"ResetTool"},{"attributes":{"formatter":{"id":"33870","type":"BasicTickFormatter"},"plot":{"id":"33826","subtype":"Figure","type":"Plot"},"ticker":{"id":"33841","type":"BasicTicker"}},"id":"33840","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"33862","type":"Oval"},{"attributes":{},"id":"33850","type":"HelpTool"},{"attributes":{},"id":"33873","type":"UnionRenderers"},{"attributes":{},"id":"33841","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33827","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33845","type":"PanTool"},{"id":"33846","type":"WheelZoomTool"},{"id":"33847","type":"BoxZoomTool"},{"id":"33848","type":"SaveTool"},{"id":"33849","type":"ResetTool"},{"id":"33850","type":"HelpTool"}]},"id":"33851","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"33826","subtype":"Figure","type":"Plot"},"ticker":{"id":"33841","type":"BasicTicker"}},"id":"33844","type":"Grid"},{"attributes":{},"id":"33833","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33853","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"33829","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"33861","type":"Oval"},{"attributes":{},"id":"33831","type":"LinearScale"},{"attributes":{"source":{"id":"33860","type":"ColumnDataSource"}},"id":"33864","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33872","type":"Selection"},"selection_policy":{"id":"33873","type":"UnionRenderers"}},"id":"33860","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"33860","type":"ColumnDataSource"},"glyph":{"id":"33861","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33862","type":"Oval"},"selection_glyph":null,"view":{"id":"33864","type":"CDSView"}},"id":"33863","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"33868","type":"BasicTickFormatter"},"plot":{"id":"33826","subtype":"Figure","type":"Plot"},"ticker":{"id":"33836","type":"BasicTicker"}},"id":"33835","type":"LinearAxis"},{"attributes":{},"id":"33845","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"33866","type":"Title"}],"root_ids":["33826"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"61c69a51-a648-4d00-a549-52724a2c461c","roots":{"33826":"334b1251-f403-40e1-b799-0b5587a0436a"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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