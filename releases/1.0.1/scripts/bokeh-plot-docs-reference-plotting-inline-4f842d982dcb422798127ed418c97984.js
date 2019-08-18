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
      };var element = document.getElementById("8ded9347-074f-4b51-b981-8243499665e3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8ded9347-074f-4b51-b981-8243499665e3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ad1b23c6-4c4e-44ac-ab68-80e9abb1bea8":{"roots":{"references":[{"attributes":{"data_source":{"id":"34370","type":"ColumnDataSource"},"glyph":{"id":"34371","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34372","type":"Segment"},"selection_glyph":null,"view":{"id":"34374","type":"CDSView"}},"id":"34373","type":"GlyphRenderer"},{"attributes":{},"id":"34355","type":"PanTool"},{"attributes":{"below":[{"id":"34345","type":"LinearAxis"}],"left":[{"id":"34350","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34345","type":"LinearAxis"},{"id":"34349","type":"Grid"},{"id":"34350","type":"LinearAxis"},{"id":"34354","type":"Grid"},{"id":"34363","type":"BoxAnnotation"},{"id":"34373","type":"GlyphRenderer"}],"title":{"id":"34376","type":"Title"},"toolbar":{"id":"34361","type":"Toolbar"},"x_range":{"id":"34337","type":"DataRange1d"},"x_scale":{"id":"34341","type":"LinearScale"},"y_range":{"id":"34339","type":"DataRange1d"},"y_scale":{"id":"34343","type":"LinearScale"}},"id":"34336","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"34376","type":"Title"},{"attributes":{},"id":"34356","type":"WheelZoomTool"},{"attributes":{},"id":"34360","type":"HelpTool"},{"attributes":{},"id":"34346","type":"BasicTicker"},{"attributes":{},"id":"34378","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"34363","type":"BoxAnnotation"}},"id":"34357","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"34336","subtype":"Figure","type":"Plot"},"ticker":{"id":"34346","type":"BasicTicker"}},"id":"34349","type":"Grid"},{"attributes":{},"id":"34380","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"34382","type":"Selection"},"selection_policy":{"id":"34383","type":"UnionRenderers"}},"id":"34370","type":"ColumnDataSource"},{"attributes":{},"id":"34358","type":"SaveTool"},{"attributes":{"formatter":{"id":"34380","type":"BasicTickFormatter"},"plot":{"id":"34336","subtype":"Figure","type":"Plot"},"ticker":{"id":"34351","type":"BasicTicker"}},"id":"34350","type":"LinearAxis"},{"attributes":{},"id":"34382","type":"Selection"},{"attributes":{},"id":"34359","type":"ResetTool"},{"attributes":{"callback":null},"id":"34337","type":"DataRange1d"},{"attributes":{},"id":"34351","type":"BasicTicker"},{"attributes":{},"id":"34383","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34355","type":"PanTool"},{"id":"34356","type":"WheelZoomTool"},{"id":"34357","type":"BoxZoomTool"},{"id":"34358","type":"SaveTool"},{"id":"34359","type":"ResetTool"},{"id":"34360","type":"HelpTool"}]},"id":"34361","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"34336","subtype":"Figure","type":"Plot"},"ticker":{"id":"34351","type":"BasicTicker"}},"id":"34354","type":"Grid"},{"attributes":{},"id":"34343","type":"LinearScale"},{"attributes":{"callback":null},"id":"34339","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"34372","type":"Segment"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34363","type":"BoxAnnotation"},{"attributes":{},"id":"34341","type":"LinearScale"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"34371","type":"Segment"},{"attributes":{"formatter":{"id":"34378","type":"BasicTickFormatter"},"plot":{"id":"34336","subtype":"Figure","type":"Plot"},"ticker":{"id":"34346","type":"BasicTicker"}},"id":"34345","type":"LinearAxis"},{"attributes":{"source":{"id":"34370","type":"ColumnDataSource"}},"id":"34374","type":"CDSView"}],"root_ids":["34336"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"ad1b23c6-4c4e-44ac-ab68-80e9abb1bea8","roots":{"34336":"8ded9347-074f-4b51-b981-8243499665e3"}}];
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