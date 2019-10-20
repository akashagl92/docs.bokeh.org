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
      };var element = document.getElementById("e041619c-d7d3-4ab3-8e5c-662a101243d0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e041619c-d7d3-4ab3-8e5c-662a101243d0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c8cba770-1397-45cb-91bb-5db4d308723e":{"roots":{"references":[{"attributes":{},"id":"33334","type":"LinearScale"},{"attributes":{"source":{"id":"33363","type":"ColumnDataSource"}},"id":"33367","type":"CDSView"},{"attributes":{"callback":null,"data":{"q":[1,2,2],"r":[0,0,1]},"selected":{"id":"33375","type":"Selection"},"selection_policy":{"id":"33376","type":"UnionRenderers"}},"id":"33363","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"33363","type":"ColumnDataSource"},"glyph":{"id":"33364","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33365","type":"HexTile"},"selection_glyph":null,"view":{"id":"33367","type":"CDSView"}},"id":"33366","type":"GlyphRenderer"},{"attributes":{},"id":"33336","type":"LinearScale"},{"attributes":{},"id":"33349","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"33338","type":"LinearAxis"}],"left":[{"id":"33343","type":"LinearAxis"}],"match_aspect":true,"plot_height":300,"plot_width":300,"renderers":[{"id":"33338","type":"LinearAxis"},{"id":"33342","type":"Grid"},{"id":"33343","type":"LinearAxis"},{"id":"33347","type":"Grid"},{"id":"33356","type":"BoxAnnotation"},{"id":"33366","type":"GlyphRenderer"}],"title":{"id":"33369","type":"Title"},"toolbar":{"id":"33354","type":"Toolbar"},"x_range":{"id":"33330","type":"DataRange1d"},"x_scale":{"id":"33334","type":"LinearScale"},"y_range":{"id":"33332","type":"DataRange1d"},"y_scale":{"id":"33336","type":"LinearScale"}},"id":"33329","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"33369","type":"Title"},{"attributes":{"formatter":{"id":"33371","type":"BasicTickFormatter"},"plot":{"id":"33329","subtype":"Figure","type":"Plot"},"ticker":{"id":"33339","type":"BasicTicker"}},"id":"33338","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"33365","type":"HexTile"},{"attributes":{},"id":"33371","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"33356","type":"BoxAnnotation"}},"id":"33350","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"33329","subtype":"Figure","type":"Plot"},"ticker":{"id":"33339","type":"BasicTicker"}},"id":"33342","type":"Grid"},{"attributes":{},"id":"33351","type":"SaveTool"},{"attributes":{},"id":"33348","type":"PanTool"},{"attributes":{},"id":"33373","type":"BasicTickFormatter"},{"attributes":{},"id":"33352","type":"ResetTool"},{"attributes":{},"id":"33375","type":"Selection"},{"attributes":{"formatter":{"id":"33373","type":"BasicTickFormatter"},"plot":{"id":"33329","subtype":"Figure","type":"Plot"},"ticker":{"id":"33344","type":"BasicTicker"}},"id":"33343","type":"LinearAxis"},{"attributes":{},"id":"33353","type":"HelpTool"},{"attributes":{},"id":"33376","type":"UnionRenderers"},{"attributes":{},"id":"33344","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33348","type":"PanTool"},{"id":"33349","type":"WheelZoomTool"},{"id":"33350","type":"BoxZoomTool"},{"id":"33351","type":"SaveTool"},{"id":"33352","type":"ResetTool"},{"id":"33353","type":"HelpTool"}]},"id":"33354","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"33329","subtype":"Figure","type":"Plot"},"ticker":{"id":"33344","type":"BasicTicker"}},"id":"33347","type":"Grid"},{"attributes":{"callback":null},"id":"33330","type":"DataRange1d"},{"attributes":{},"id":"33339","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33332","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33356","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"33364","type":"HexTile"}],"root_ids":["33329"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"c8cba770-1397-45cb-91bb-5db4d308723e","roots":{"33329":"e041619c-d7d3-4ab3-8e5c-662a101243d0"}}];
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