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
      };var element = document.getElementById("219b6c1b-c1e0-49f7-91cf-da52f19cbc91");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '219b6c1b-c1e0-49f7-91cf-da52f19cbc91' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bd827988-156b-4906-825e-7390e16d847f":{"roots":{"references":[{"attributes":{},"id":"9813","type":"PanTool"},{"attributes":{},"id":"9840","type":"Selection"},{"attributes":{"formatter":{"id":"9837","type":"BasicTickFormatter"},"plot":{"id":"9794","subtype":"Figure","type":"Plot"},"ticker":{"id":"9804","type":"BasicTicker"}},"id":"9803","type":"LinearAxis"},{"attributes":{"below":[{"id":"9803","type":"LinearAxis"}],"left":[{"id":"9808","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9803","type":"LinearAxis"},{"id":"9807","type":"Grid"},{"id":"9808","type":"LinearAxis"},{"id":"9812","type":"Grid"},{"id":"9821","type":"BoxAnnotation"},{"id":"9831","type":"GlyphRenderer"}],"title":{"id":"9833","type":"Title"},"toolbar":{"id":"9819","type":"Toolbar"},"x_range":{"id":"9795","type":"DataRange1d"},"x_scale":{"id":"9799","type":"LinearScale"},"y_range":{"id":"9797","type":"DataRange1d"},"y_scale":{"id":"9801","type":"LinearScale"}},"id":"9794","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"9833","type":"Title"},{"attributes":{},"id":"9814","type":"WheelZoomTool"},{"attributes":{},"id":"9804","type":"BasicTicker"},{"attributes":{"overlay":{"id":"9821","type":"BoxAnnotation"}},"id":"9815","type":"BoxZoomTool"},{"attributes":{},"id":"9816","type":"SaveTool"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"9829","type":"HBar"},{"attributes":{"formatter":{"id":"9835","type":"BasicTickFormatter"},"plot":{"id":"9794","subtype":"Figure","type":"Plot"},"ticker":{"id":"9809","type":"BasicTicker"}},"id":"9808","type":"LinearAxis"},{"attributes":{},"id":"9835","type":"BasicTickFormatter"},{"attributes":{},"id":"9818","type":"HelpTool"},{"attributes":{},"id":"9817","type":"ResetTool"},{"attributes":{"data_source":{"id":"9828","type":"ColumnDataSource"},"glyph":{"id":"9829","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9830","type":"HBar"},"selection_glyph":null,"view":{"id":"9832","type":"CDSView"}},"id":"9831","type":"GlyphRenderer"},{"attributes":{},"id":"9841","type":"UnionRenderers"},{"attributes":{},"id":"9809","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9795","type":"DataRange1d"},{"attributes":{"source":{"id":"9828","type":"ColumnDataSource"}},"id":"9832","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"9794","subtype":"Figure","type":"Plot"},"ticker":{"id":"9809","type":"BasicTicker"}},"id":"9812","type":"Grid"},{"attributes":{"callback":null},"id":"9797","type":"DataRange1d"},{"attributes":{},"id":"9799","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9821","type":"BoxAnnotation"},{"attributes":{},"id":"9801","type":"LinearScale"},{"attributes":{"plot":{"id":"9794","subtype":"Figure","type":"Plot"},"ticker":{"id":"9804","type":"BasicTicker"}},"id":"9807","type":"Grid"},{"attributes":{},"id":"9837","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]},"selected":{"id":"9840","type":"Selection"},"selection_policy":{"id":"9841","type":"UnionRenderers"}},"id":"9828","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"9830","type":"HBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9813","type":"PanTool"},{"id":"9814","type":"WheelZoomTool"},{"id":"9815","type":"BoxZoomTool"},{"id":"9816","type":"SaveTool"},{"id":"9817","type":"ResetTool"},{"id":"9818","type":"HelpTool"}]},"id":"9819","type":"Toolbar"}],"root_ids":["9794"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"bd827988-156b-4906-825e-7390e16d847f","roots":{"9794":"219b6c1b-c1e0-49f7-91cf-da52f19cbc91"}}];
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