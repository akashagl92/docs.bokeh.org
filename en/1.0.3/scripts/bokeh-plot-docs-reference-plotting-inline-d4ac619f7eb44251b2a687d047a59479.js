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
      };var element = document.getElementById("b0936caa-2782-47ce-8173-8a069a5f71c9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b0936caa-2782-47ce-8173-8a069a5f71c9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c47b157c-5a97-4b74-8947-9b0a6fb5371b":{"roots":{"references":[{"attributes":{"below":[{"id":"32413","type":"LinearAxis"}],"left":[{"id":"32418","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32413","type":"LinearAxis"},{"id":"32417","type":"Grid"},{"id":"32418","type":"LinearAxis"},{"id":"32422","type":"Grid"},{"id":"32431","type":"BoxAnnotation"},{"id":"32441","type":"GlyphRenderer"}],"title":{"id":"32443","type":"Title"},"toolbar":{"id":"32429","type":"Toolbar"},"x_range":{"id":"32405","type":"DataRange1d"},"x_scale":{"id":"32409","type":"LinearScale"},"y_range":{"id":"32407","type":"DataRange1d"},"y_scale":{"id":"32411","type":"LinearScale"}},"id":"32404","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32427","type":"ResetTool"},{"attributes":{"callback":null},"id":"32407","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32431","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32423","type":"PanTool"},{"id":"32424","type":"WheelZoomTool"},{"id":"32425","type":"BoxZoomTool"},{"id":"32426","type":"SaveTool"},{"id":"32427","type":"ResetTool"},{"id":"32428","type":"HelpTool"}]},"id":"32429","type":"Toolbar"},{"attributes":{"source":{"id":"32438","type":"ColumnDataSource"}},"id":"32442","type":"CDSView"},{"attributes":{},"id":"32447","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"32438","type":"ColumnDataSource"},"glyph":{"id":"32439","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32440","type":"Asterisk"},"selection_glyph":null,"view":{"id":"32442","type":"CDSView"}},"id":"32441","type":"GlyphRenderer"},{"attributes":{},"id":"32428","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32450","type":"Selection"},"selection_policy":{"id":"32451","type":"UnionRenderers"}},"id":"32438","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32440","type":"Asterisk"},{"attributes":{"formatter":{"id":"32447","type":"BasicTickFormatter"},"plot":{"id":"32404","subtype":"Figure","type":"Plot"},"ticker":{"id":"32414","type":"BasicTicker"}},"id":"32413","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32439","type":"Asterisk"},{"attributes":{},"id":"32423","type":"PanTool"},{"attributes":{},"id":"32424","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"32443","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"32404","subtype":"Figure","type":"Plot"},"ticker":{"id":"32419","type":"BasicTicker"}},"id":"32422","type":"Grid"},{"attributes":{"callback":null},"id":"32405","type":"DataRange1d"},{"attributes":{},"id":"32451","type":"UnionRenderers"},{"attributes":{},"id":"32409","type":"LinearScale"},{"attributes":{},"id":"32411","type":"LinearScale"},{"attributes":{"overlay":{"id":"32431","type":"BoxAnnotation"}},"id":"32425","type":"BoxZoomTool"},{"attributes":{},"id":"32414","type":"BasicTicker"},{"attributes":{"formatter":{"id":"32445","type":"BasicTickFormatter"},"plot":{"id":"32404","subtype":"Figure","type":"Plot"},"ticker":{"id":"32419","type":"BasicTicker"}},"id":"32418","type":"LinearAxis"},{"attributes":{},"id":"32450","type":"Selection"},{"attributes":{},"id":"32426","type":"SaveTool"},{"attributes":{},"id":"32419","type":"BasicTicker"},{"attributes":{},"id":"32445","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"32404","subtype":"Figure","type":"Plot"},"ticker":{"id":"32414","type":"BasicTicker"}},"id":"32417","type":"Grid"}],"root_ids":["32404"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"c47b157c-5a97-4b74-8947-9b0a6fb5371b","roots":{"32404":"b0936caa-2782-47ce-8173-8a069a5f71c9"}}];
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