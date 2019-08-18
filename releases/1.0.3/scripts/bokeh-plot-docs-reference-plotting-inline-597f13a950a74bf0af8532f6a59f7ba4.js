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
      };var element = document.getElementById("9f6347df-2be1-452d-a02b-b0f58cc299b4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f6347df-2be1-452d-a02b-b0f58cc299b4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5cc2753e-bf78-47d8-83c0-13cd6c5ac6fb":{"roots":{"references":[{"attributes":{"callback":null},"id":"33839","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33863","type":"BoxAnnotation"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"33871","type":"Oval"},{"attributes":{},"id":"33841","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33882","type":"Selection"},"selection_policy":{"id":"33883","type":"UnionRenderers"}},"id":"33870","type":"ColumnDataSource"},{"attributes":{"source":{"id":"33870","type":"ColumnDataSource"}},"id":"33874","type":"CDSView"},{"attributes":{"formatter":{"id":"33879","type":"BasicTickFormatter"},"plot":{"id":"33836","subtype":"Figure","type":"Plot"},"ticker":{"id":"33846","type":"BasicTicker"}},"id":"33845","type":"LinearAxis"},{"attributes":{"data_source":{"id":"33870","type":"ColumnDataSource"},"glyph":{"id":"33871","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33872","type":"Oval"},"selection_glyph":null,"view":{"id":"33874","type":"CDSView"}},"id":"33873","type":"GlyphRenderer"},{"attributes":{},"id":"33855","type":"PanTool"},{"attributes":{"overlay":{"id":"33863","type":"BoxAnnotation"}},"id":"33857","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"33875","type":"Title"},{"attributes":{},"id":"33856","type":"WheelZoomTool"},{"attributes":{},"id":"33846","type":"BasicTicker"},{"attributes":{},"id":"33877","type":"BasicTickFormatter"},{"attributes":{},"id":"33858","type":"SaveTool"},{"attributes":{"plot":{"id":"33836","subtype":"Figure","type":"Plot"},"ticker":{"id":"33846","type":"BasicTicker"}},"id":"33849","type":"Grid"},{"attributes":{"below":[{"id":"33845","type":"LinearAxis"}],"left":[{"id":"33850","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33845","type":"LinearAxis"},{"id":"33849","type":"Grid"},{"id":"33850","type":"LinearAxis"},{"id":"33854","type":"Grid"},{"id":"33863","type":"BoxAnnotation"},{"id":"33873","type":"GlyphRenderer"}],"title":{"id":"33875","type":"Title"},"toolbar":{"id":"33861","type":"Toolbar"},"x_range":{"id":"33837","type":"DataRange1d"},"x_scale":{"id":"33841","type":"LinearScale"},"y_range":{"id":"33839","type":"DataRange1d"},"y_scale":{"id":"33843","type":"LinearScale"}},"id":"33836","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33879","type":"BasicTickFormatter"},{"attributes":{},"id":"33859","type":"ResetTool"},{"attributes":{"formatter":{"id":"33877","type":"BasicTickFormatter"},"plot":{"id":"33836","subtype":"Figure","type":"Plot"},"ticker":{"id":"33851","type":"BasicTicker"}},"id":"33850","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"33872","type":"Oval"},{"attributes":{},"id":"33882","type":"Selection"},{"attributes":{},"id":"33860","type":"HelpTool"},{"attributes":{},"id":"33851","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33837","type":"DataRange1d"},{"attributes":{},"id":"33883","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33855","type":"PanTool"},{"id":"33856","type":"WheelZoomTool"},{"id":"33857","type":"BoxZoomTool"},{"id":"33858","type":"SaveTool"},{"id":"33859","type":"ResetTool"},{"id":"33860","type":"HelpTool"}]},"id":"33861","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"33836","subtype":"Figure","type":"Plot"},"ticker":{"id":"33851","type":"BasicTicker"}},"id":"33854","type":"Grid"},{"attributes":{},"id":"33843","type":"LinearScale"}],"root_ids":["33836"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"5cc2753e-bf78-47d8-83c0-13cd6c5ac6fb","roots":{"33836":"9f6347df-2be1-452d-a02b-b0f58cc299b4"}}];
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