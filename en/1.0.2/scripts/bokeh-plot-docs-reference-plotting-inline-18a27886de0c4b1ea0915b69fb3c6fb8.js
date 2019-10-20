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
      };var element = document.getElementById("86f6bdef-1212-44bf-8c91-eac386fd89da");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '86f6bdef-1212-44bf-8c91-eac386fd89da' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"65272c20-be93-4a2b-ae90-c99a5560505c":{"roots":{"references":[{"attributes":{},"id":"32441","type":"BasicTickFormatter"},{"attributes":{},"id":"32416","type":"PanTool"},{"attributes":{},"id":"32443","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32416","type":"PanTool"},{"id":"32417","type":"WheelZoomTool"},{"id":"32418","type":"BoxZoomTool"},{"id":"32419","type":"SaveTool"},{"id":"32420","type":"ResetTool"},{"id":"32421","type":"HelpTool"}]},"id":"32422","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32444","type":"Selection"},"selection_policy":{"id":"32443","type":"UnionRenderers"}},"id":"32431","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"32398","type":"DataRange1d"},{"attributes":{},"id":"32439","type":"BasicTickFormatter"},{"attributes":{},"id":"32444","type":"Selection"},{"attributes":{},"id":"32420","type":"ResetTool"},{"attributes":{},"id":"32421","type":"HelpTool"},{"attributes":{"formatter":{"id":"32439","type":"BasicTickFormatter"},"plot":{"id":"32397","subtype":"Figure","type":"Plot"},"ticker":{"id":"32407","type":"BasicTicker"}},"id":"32406","type":"LinearAxis"},{"attributes":{"below":[{"id":"32406","type":"LinearAxis"}],"left":[{"id":"32411","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32406","type":"LinearAxis"},{"id":"32410","type":"Grid"},{"id":"32411","type":"LinearAxis"},{"id":"32415","type":"Grid"},{"id":"32424","type":"BoxAnnotation"},{"id":"32434","type":"GlyphRenderer"}],"title":{"id":"32437","type":"Title"},"toolbar":{"id":"32422","type":"Toolbar"},"x_range":{"id":"32398","type":"DataRange1d"},"x_scale":{"id":"32402","type":"LinearScale"},"y_range":{"id":"32400","type":"DataRange1d"},"y_scale":{"id":"32404","type":"LinearScale"}},"id":"32397","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"32397","subtype":"Figure","type":"Plot"},"ticker":{"id":"32412","type":"BasicTicker"}},"id":"32415","type":"Grid"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32432","type":"Asterisk"},{"attributes":{},"id":"32412","type":"BasicTicker"},{"attributes":{"source":{"id":"32431","type":"ColumnDataSource"}},"id":"32435","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"32437","type":"Title"},{"attributes":{"formatter":{"id":"32441","type":"BasicTickFormatter"},"plot":{"id":"32397","subtype":"Figure","type":"Plot"},"ticker":{"id":"32412","type":"BasicTicker"}},"id":"32411","type":"LinearAxis"},{"attributes":{"callback":null},"id":"32400","type":"DataRange1d"},{"attributes":{},"id":"32404","type":"LinearScale"},{"attributes":{"overlay":{"id":"32424","type":"BoxAnnotation"}},"id":"32418","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"32431","type":"ColumnDataSource"},"glyph":{"id":"32432","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32433","type":"Asterisk"},"selection_glyph":null,"view":{"id":"32435","type":"CDSView"}},"id":"32434","type":"GlyphRenderer"},{"attributes":{},"id":"32417","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"32397","subtype":"Figure","type":"Plot"},"ticker":{"id":"32407","type":"BasicTicker"}},"id":"32410","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32424","type":"BoxAnnotation"},{"attributes":{},"id":"32402","type":"LinearScale"},{"attributes":{},"id":"32419","type":"SaveTool"},{"attributes":{},"id":"32407","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32433","type":"Asterisk"}],"root_ids":["32397"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"65272c20-be93-4a2b-ae90-c99a5560505c","roots":{"32397":"86f6bdef-1212-44bf-8c91-eac386fd89da"}}];
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