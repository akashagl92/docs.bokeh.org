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
      };var element = document.getElementById("8e37c0e6-d0d9-45c9-921b-74151b2b6edd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8e37c0e6-d0d9-45c9-921b-74151b2b6edd' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"84debf96-126e-4d43-8444-a6297a86ce00":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"14843","subtype":"Figure","type":"Plot"},"ticker":{"id":"14858","type":"BasicTicker"}},"id":"14861","type":"Grid"},{"attributes":{"callback":null},"id":"14844","type":"DataRange1d"},{"attributes":{},"id":"14858","type":"BasicTicker"},{"attributes":{"plot":{"id":"14843","subtype":"Figure","type":"Plot"},"ticker":{"id":"14853","type":"BasicTicker"}},"id":"14856","type":"Grid"},{"attributes":{},"id":"14867","type":"HelpTool"},{"attributes":{},"id":"14887","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"14885","type":"BasicTickFormatter"},"plot":{"id":"14843","subtype":"Figure","type":"Plot"},"ticker":{"id":"14853","type":"BasicTicker"}},"id":"14852","type":"LinearAxis"},{"attributes":{},"id":"14848","type":"LinearScale"},{"attributes":{},"id":"14865","type":"SaveTool"},{"attributes":{},"id":"14885","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"14877","type":"ColumnDataSource"}},"id":"14881","type":"CDSView"},{"attributes":{"callback":null},"id":"14846","type":"DataRange1d"},{"attributes":{},"id":"14862","type":"PanTool"},{"attributes":{},"id":"14863","type":"WheelZoomTool"},{"attributes":{},"id":"14890","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"14877","type":"ColumnDataSource"},"glyph":{"id":"14878","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14879","type":"Circle"},"selection_glyph":null,"view":{"id":"14881","type":"CDSView"}},"id":"14880","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14879","type":"Circle"},{"attributes":{},"id":"14853","type":"BasicTicker"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"14887","type":"BasicTickFormatter"},"plot":{"id":"14843","subtype":"Figure","type":"Plot"},"ticker":{"id":"14858","type":"BasicTicker"}},"id":"14857","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14870","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"14870","type":"BoxAnnotation"}},"id":"14864","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14878","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"14883","type":"Title"},{"attributes":{},"id":"14866","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14862","type":"PanTool"},{"id":"14863","type":"WheelZoomTool"},{"id":"14864","type":"BoxZoomTool"},{"id":"14865","type":"SaveTool"},{"id":"14866","type":"ResetTool"},{"id":"14867","type":"HelpTool"}]},"id":"14868","type":"Toolbar"},{"attributes":{},"id":"14889","type":"Selection"},{"attributes":{"below":[{"id":"14852","type":"LinearAxis"}],"left":[{"id":"14857","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14852","type":"LinearAxis"},{"id":"14856","type":"Grid"},{"id":"14857","type":"LinearAxis"},{"id":"14861","type":"Grid"},{"id":"14870","type":"BoxAnnotation"},{"id":"14880","type":"GlyphRenderer"}],"title":{"id":"14883","type":"Title"},"toolbar":{"id":"14868","type":"Toolbar"},"x_range":{"id":"14844","type":"DataRange1d"},"x_scale":{"id":"14848","type":"LinearScale"},"y_range":{"id":"14846","type":"DataRange1d"},"y_scale":{"id":"14850","type":"LinearScale"}},"id":"14843","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14850","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14889","type":"Selection"},"selection_policy":{"id":"14890","type":"UnionRenderers"}},"id":"14877","type":"ColumnDataSource"}],"root_ids":["14843"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"84debf96-126e-4d43-8444-a6297a86ce00","roots":{"14843":"8e37c0e6-d0d9-45c9-921b-74151b2b6edd"}}];
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