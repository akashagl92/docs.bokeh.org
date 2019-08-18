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
      };var element = document.getElementById("6c9a0aeb-9494-4898-98a7-1c7226bade71");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6c9a0aeb-9494-4898-98a7-1c7226bade71' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"727ccdff-442d-4ce4-86d0-405bb03775b6":{"roots":{"references":[{"attributes":{"formatter":{"id":"19026","type":"BasicTickFormatter"},"plot":{"id":"18984","subtype":"Figure","type":"Plot"},"ticker":{"id":"18995","type":"BasicTicker"}},"id":"18994","type":"LinearAxis"},{"attributes":{},"id":"19007","type":"SaveTool"},{"attributes":{},"id":"18995","type":"BasicTicker"},{"attributes":{"formatter":{"id":"19028","type":"BasicTickFormatter"},"plot":{"id":"18984","subtype":"Figure","type":"Plot"},"ticker":{"id":"19000","type":"BasicTicker"}},"id":"18999","type":"LinearAxis"},{"attributes":{"data_source":{"id":"19019","type":"ColumnDataSource"},"glyph":{"id":"19020","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19021","type":"Circle"},"selection_glyph":null,"view":{"id":"19023","type":"CDSView"}},"id":"19022","type":"GlyphRenderer"},{"attributes":{},"id":"19008","type":"ResetTool"},{"attributes":{"plot":{"id":"18984","subtype":"Figure","type":"Plot"},"ticker":{"id":"18995","type":"BasicTicker"}},"id":"18998","type":"Grid"},{"attributes":{},"id":"19031","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"19012","type":"BoxAnnotation"}},"id":"19006","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"18994","type":"LinearAxis"}],"left":[{"id":"18999","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18994","type":"LinearAxis"},{"id":"18998","type":"Grid"},{"id":"18999","type":"LinearAxis"},{"id":"19003","type":"Grid"},{"id":"19012","type":"BoxAnnotation"},{"id":"19022","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"19010","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"18986","type":"DataRange1d"},"x_scale":{"id":"18990","type":"LinearScale"},"y_range":{"id":"18988","type":"DataRange1d"},"y_scale":{"id":"18992","type":"LinearScale"}},"id":"18984","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19012","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"19021","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"18984","subtype":"Figure","type":"Plot"},"ticker":{"id":"19000","type":"BasicTicker"}},"id":"19003","type":"Grid"},{"attributes":{},"id":"19005","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"18986","type":"DataRange1d"},{"attributes":{},"id":"19030","type":"Selection"},{"attributes":{},"id":"19026","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"18988","type":"DataRange1d"},{"attributes":{},"id":"19009","type":"HelpTool"},{"attributes":{},"id":"18990","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"19020","type":"Circle"},{"attributes":{},"id":"19028","type":"BasicTickFormatter"},{"attributes":{},"id":"19000","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"19030","type":"Selection"},"selection_policy":{"id":"19031","type":"UnionRenderers"}},"id":"19019","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19004","type":"PanTool"},{"id":"19005","type":"WheelZoomTool"},{"id":"19006","type":"BoxZoomTool"},{"id":"19007","type":"SaveTool"},{"id":"19008","type":"ResetTool"},{"id":"19009","type":"HelpTool"}]},"id":"19010","type":"Toolbar"},{"attributes":{"source":{"id":"19019","type":"ColumnDataSource"}},"id":"19023","type":"CDSView"},{"attributes":{},"id":"19004","type":"PanTool"},{"attributes":{},"id":"18992","type":"LinearScale"}],"root_ids":["18984"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"727ccdff-442d-4ce4-86d0-405bb03775b6","roots":{"18984":"6c9a0aeb-9494-4898-98a7-1c7226bade71"}}];
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