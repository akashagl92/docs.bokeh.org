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
      };var element = document.getElementById("1ecd8056-e446-4f81-83d4-bf0f303c9f38");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1ecd8056-e446-4f81-83d4-bf0f303c9f38' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"96031ffb-52e1-4b17-931d-471700dbc9b3":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17829","type":"Line"},{"attributes":{"plot":null,"text":"Toolbar Autohide"},"id":"17791","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"17839","type":"Selection"},"selection_policy":{"id":"17840","type":"UnionRenderers"}},"id":"17827","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","autohide":true,"tools":[{"id":"17812","type":"PanTool"},{"id":"17813","type":"WheelZoomTool"},{"id":"17814","type":"BoxZoomTool"},{"id":"17815","type":"SaveTool"},{"id":"17816","type":"ResetTool"},{"id":"17817","type":"HelpTool"}]},"id":"17818","type":"Toolbar"},{"attributes":{"formatter":{"id":"17837","type":"BasicTickFormatter"},"plot":{"id":"17792","subtype":"Figure","type":"Plot"},"ticker":{"id":"17808","type":"BasicTicker"}},"id":"17807","type":"LinearAxis"},{"attributes":{},"id":"17817","type":"HelpTool"},{"attributes":{},"id":"17837","type":"BasicTickFormatter"},{"attributes":{},"id":"17808","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17828","type":"Line"},{"attributes":{"callback":null},"id":"17794","type":"DataRange1d"},{"attributes":{},"id":"17812","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"17792","subtype":"Figure","type":"Plot"},"ticker":{"id":"17808","type":"BasicTicker"}},"id":"17811","type":"Grid"},{"attributes":{"callback":null},"id":"17796","type":"DataRange1d"},{"attributes":{},"id":"17839","type":"Selection"},{"attributes":{},"id":"17813","type":"WheelZoomTool"},{"attributes":{},"id":"17803","type":"BasicTicker"},{"attributes":{},"id":"17835","type":"BasicTickFormatter"},{"attributes":{},"id":"17798","type":"LinearScale"},{"attributes":{"overlay":{"id":"17820","type":"BoxAnnotation"}},"id":"17814","type":"BoxZoomTool"},{"attributes":{},"id":"17800","type":"LinearScale"},{"attributes":{},"id":"17815","type":"SaveTool"},{"attributes":{"source":{"id":"17827","type":"ColumnDataSource"}},"id":"17831","type":"CDSView"},{"attributes":{"formatter":{"id":"17835","type":"BasicTickFormatter"},"plot":{"id":"17792","subtype":"Figure","type":"Plot"},"ticker":{"id":"17803","type":"BasicTicker"}},"id":"17802","type":"LinearAxis"},{"attributes":{},"id":"17816","type":"ResetTool"},{"attributes":{},"id":"17840","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17827","type":"ColumnDataSource"},"glyph":{"id":"17828","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17829","type":"Line"},"selection_glyph":null,"view":{"id":"17831","type":"CDSView"}},"id":"17830","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"17792","subtype":"Figure","type":"Plot"},"ticker":{"id":"17803","type":"BasicTicker"}},"id":"17806","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17820","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"17802","type":"LinearAxis"}],"left":[{"id":"17807","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17802","type":"LinearAxis"},{"id":"17806","type":"Grid"},{"id":"17807","type":"LinearAxis"},{"id":"17811","type":"Grid"},{"id":"17820","type":"BoxAnnotation"},{"id":"17830","type":"GlyphRenderer"}],"title":{"id":"17791","type":"Title"},"toolbar":{"id":"17818","type":"Toolbar"},"x_range":{"id":"17794","type":"DataRange1d"},"x_scale":{"id":"17798","type":"LinearScale"},"y_range":{"id":"17796","type":"DataRange1d"},"y_scale":{"id":"17800","type":"LinearScale"}},"id":"17792","subtype":"Figure","type":"Plot"}],"root_ids":["17792"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"96031ffb-52e1-4b17-931d-471700dbc9b3","roots":{"17792":"1ecd8056-e446-4f81-83d4-bf0f303c9f38"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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