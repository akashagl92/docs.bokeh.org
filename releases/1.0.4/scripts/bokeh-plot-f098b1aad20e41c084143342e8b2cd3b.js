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
      };var element = document.getElementById("87cfde24-5ea8-43ce-8118-6ee4957bdbb2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '87cfde24-5ea8-43ce-8118-6ee4957bdbb2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"00e7cfb7-6a86-492b-b50d-31b6a5c1a13d":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16589","type":"PanTool"},{"id":"16590","type":"WheelZoomTool"},{"id":"16591","type":"BoxZoomTool"},{"id":"16592","type":"SaveTool"},{"id":"16593","type":"ResetTool"},{"id":"16594","type":"HelpTool"}]},"id":"16595","type":"Toolbar"},{"attributes":{"overlay":{"id":"16597","type":"BoxAnnotation"}},"id":"16591","type":"BoxZoomTool"},{"attributes":{},"id":"16577","type":"LinearScale"},{"attributes":{},"id":"16592","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16605","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"16618","type":"Selection"},"selection_policy":{"id":"16617","type":"UnionRenderers"}},"id":"16604","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"16579","type":"LinearAxis"}],"left":[{"id":"16584","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"16579","type":"LinearAxis"},{"id":"16583","type":"Grid"},{"id":"16584","type":"LinearAxis"},{"id":"16588","type":"Grid"},{"id":"16597","type":"BoxAnnotation"},{"id":"16607","type":"GlyphRenderer"}],"title":{"id":"16613","type":"Title"},"toolbar":{"id":"16595","type":"Toolbar"},"x_range":{"id":"16571","type":"DataRange1d"},"x_scale":{"id":"16575","type":"LinearScale"},"y_range":{"id":"16573","type":"DataRange1d"},"y_scale":{"id":"16577","type":"LinearScale"}},"id":"16570","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"16570","subtype":"Figure","type":"Plot"},"ticker":{"id":"16580","type":"BasicTicker"}},"id":"16583","type":"Grid"},{"attributes":{},"id":"16617","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"16573","type":"DataRange1d"},{"attributes":{},"id":"16589","type":"PanTool"},{"attributes":{},"id":"16594","type":"HelpTool"},{"attributes":{},"id":"16580","type":"BasicTicker"},{"attributes":{"formatter":{"id":"16611","type":"NumeralTickFormatter"},"plot":{"id":"16570","subtype":"Figure","type":"Plot"},"ticker":{"id":"16585","type":"BasicTicker"}},"id":"16584","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"16570","subtype":"Figure","type":"Plot"},"ticker":{"id":"16585","type":"BasicTicker"}},"id":"16588","type":"Grid"},{"attributes":{"format":"$0.00"},"id":"16611","type":"NumeralTickFormatter"},{"attributes":{},"id":"16590","type":"WheelZoomTool"},{"attributes":{},"id":"16575","type":"LinearScale"},{"attributes":{"data_source":{"id":"16604","type":"ColumnDataSource"},"glyph":{"id":"16605","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16606","type":"Circle"},"selection_glyph":null,"view":{"id":"16608","type":"CDSView"}},"id":"16607","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"16571","type":"DataRange1d"},{"attributes":{"format":"0.0%"},"id":"16609","type":"NumeralTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16597","type":"BoxAnnotation"},{"attributes":{"source":{"id":"16604","type":"ColumnDataSource"}},"id":"16608","type":"CDSView"},{"attributes":{},"id":"16618","type":"Selection"},{"attributes":{"formatter":{"id":"16609","type":"NumeralTickFormatter"},"plot":{"id":"16570","subtype":"Figure","type":"Plot"},"ticker":{"id":"16580","type":"BasicTicker"}},"id":"16579","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"16613","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16606","type":"Circle"},{"attributes":{},"id":"16585","type":"BasicTicker"},{"attributes":{},"id":"16593","type":"ResetTool"}],"root_ids":["16570"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"00e7cfb7-6a86-492b-b50d-31b6a5c1a13d","roots":{"16570":"87cfde24-5ea8-43ce-8118-6ee4957bdbb2"}}];
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