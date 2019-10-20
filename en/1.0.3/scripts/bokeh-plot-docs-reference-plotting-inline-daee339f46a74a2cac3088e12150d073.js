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
      };var element = document.getElementById("69251a38-f1c8-45b7-8e7b-4145fe49397e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '69251a38-f1c8-45b7-8e7b-4145fe49397e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ad809dfd-79f3-44bd-a20e-8b387f45b200":{"roots":{"references":[{"attributes":{"below":[{"id":"33508","type":"LinearAxis"}],"left":[{"id":"33513","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33508","type":"LinearAxis"},{"id":"33512","type":"Grid"},{"id":"33513","type":"LinearAxis"},{"id":"33517","type":"Grid"},{"id":"33526","type":"BoxAnnotation"},{"id":"33536","type":"GlyphRenderer"}],"title":{"id":"33538","type":"Title"},"toolbar":{"id":"33524","type":"Toolbar"},"x_range":{"id":"33500","type":"DataRange1d"},"x_scale":{"id":"33504","type":"LinearScale"},"y_range":{"id":"33502","type":"DataRange1d"},"y_scale":{"id":"33506","type":"LinearScale"}},"id":"33499","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33522","type":"ResetTool"},{"attributes":{"formatter":{"id":"33540","type":"BasicTickFormatter"},"plot":{"id":"33499","subtype":"Figure","type":"Plot"},"ticker":{"id":"33514","type":"BasicTicker"}},"id":"33513","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33535","type":"InvertedTriangle"},{"attributes":{},"id":"33545","type":"Selection"},{"attributes":{},"id":"33523","type":"HelpTool"},{"attributes":{},"id":"33514","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33500","type":"DataRange1d"},{"attributes":{},"id":"33546","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33518","type":"PanTool"},{"id":"33519","type":"WheelZoomTool"},{"id":"33520","type":"BoxZoomTool"},{"id":"33521","type":"SaveTool"},{"id":"33522","type":"ResetTool"},{"id":"33523","type":"HelpTool"}]},"id":"33524","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"33499","subtype":"Figure","type":"Plot"},"ticker":{"id":"33514","type":"BasicTicker"}},"id":"33517","type":"Grid"},{"attributes":{},"id":"33506","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33526","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"33502","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33534","type":"InvertedTriangle"},{"attributes":{},"id":"33504","type":"LinearScale"},{"attributes":{"source":{"id":"33533","type":"ColumnDataSource"}},"id":"33537","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33545","type":"Selection"},"selection_policy":{"id":"33546","type":"UnionRenderers"}},"id":"33533","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"33542","type":"BasicTickFormatter"},"plot":{"id":"33499","subtype":"Figure","type":"Plot"},"ticker":{"id":"33509","type":"BasicTicker"}},"id":"33508","type":"LinearAxis"},{"attributes":{},"id":"33519","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"33538","type":"Title"},{"attributes":{"overlay":{"id":"33526","type":"BoxAnnotation"}},"id":"33520","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"33533","type":"ColumnDataSource"},"glyph":{"id":"33534","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33535","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"33537","type":"CDSView"}},"id":"33536","type":"GlyphRenderer"},{"attributes":{},"id":"33518","type":"PanTool"},{"attributes":{},"id":"33540","type":"BasicTickFormatter"},{"attributes":{},"id":"33509","type":"BasicTicker"},{"attributes":{},"id":"33521","type":"SaveTool"},{"attributes":{},"id":"33542","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"33499","subtype":"Figure","type":"Plot"},"ticker":{"id":"33509","type":"BasicTicker"}},"id":"33512","type":"Grid"}],"root_ids":["33499"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"ad809dfd-79f3-44bd-a20e-8b387f45b200","roots":{"33499":"69251a38-f1c8-45b7-8e7b-4145fe49397e"}}];
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