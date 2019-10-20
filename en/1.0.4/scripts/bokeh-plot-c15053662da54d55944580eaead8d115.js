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
      };var element = document.getElementById("8266c157-5f79-42b0-b908-7161eb14d179");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8266c157-5f79-42b0-b908-7161eb14d179' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1b419ed1-c52e-4cc3-99a4-c7c8c770f98c":{"roots":{"references":[{"attributes":{},"id":"8715","type":"PanTool"},{"attributes":{"data_source":{"id":"8730","type":"ColumnDataSource"},"glyph":{"id":"8731","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8732","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"8734","type":"CDSView"}},"id":"8733","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8723","type":"BoxAnnotation"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"8731","type":"AnnularWedge"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"8742","type":"Selection"},"selection_policy":{"id":"8741","type":"UnionRenderers"}},"id":"8730","type":"ColumnDataSource"},{"attributes":{},"id":"8706","type":"BasicTicker"},{"attributes":{},"id":"8716","type":"WheelZoomTool"},{"attributes":{},"id":"8701","type":"LinearScale"},{"attributes":{"callback":null},"id":"8697","type":"DataRange1d"},{"attributes":{},"id":"8739","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"8730","type":"ColumnDataSource"}},"id":"8734","type":"CDSView"},{"attributes":{"formatter":{"id":"8737","type":"BasicTickFormatter"},"plot":{"id":"8696","subtype":"Figure","type":"Plot"},"ticker":{"id":"8711","type":"BasicTicker"}},"id":"8710","type":"LinearAxis"},{"attributes":{},"id":"8742","type":"Selection"},{"attributes":{},"id":"8720","type":"HelpTool"},{"attributes":{},"id":"8737","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8699","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"8696","subtype":"Figure","type":"Plot"},"ticker":{"id":"8711","type":"BasicTicker"}},"id":"8714","type":"Grid"},{"attributes":{"overlay":{"id":"8723","type":"BoxAnnotation"}},"id":"8717","type":"BoxZoomTool"},{"attributes":{},"id":"8741","type":"UnionRenderers"},{"attributes":{},"id":"8711","type":"BasicTicker"},{"attributes":{},"id":"8719","type":"ResetTool"},{"attributes":{"plot":{"id":"8696","subtype":"Figure","type":"Plot"},"ticker":{"id":"8706","type":"BasicTicker"}},"id":"8709","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"8732","type":"AnnularWedge"},{"attributes":{"formatter":{"id":"8739","type":"BasicTickFormatter"},"plot":{"id":"8696","subtype":"Figure","type":"Plot"},"ticker":{"id":"8706","type":"BasicTicker"}},"id":"8705","type":"LinearAxis"},{"attributes":{"below":[{"id":"8705","type":"LinearAxis"}],"left":[{"id":"8710","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8705","type":"LinearAxis"},{"id":"8709","type":"Grid"},{"id":"8710","type":"LinearAxis"},{"id":"8714","type":"Grid"},{"id":"8723","type":"BoxAnnotation"},{"id":"8733","type":"GlyphRenderer"}],"title":{"id":"8735","type":"Title"},"toolbar":{"id":"8721","type":"Toolbar"},"x_range":{"id":"8697","type":"DataRange1d"},"x_scale":{"id":"8701","type":"LinearScale"},"y_range":{"id":"8699","type":"DataRange1d"},"y_scale":{"id":"8703","type":"LinearScale"}},"id":"8696","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"8735","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8715","type":"PanTool"},{"id":"8716","type":"WheelZoomTool"},{"id":"8717","type":"BoxZoomTool"},{"id":"8718","type":"SaveTool"},{"id":"8719","type":"ResetTool"},{"id":"8720","type":"HelpTool"}]},"id":"8721","type":"Toolbar"},{"attributes":{},"id":"8718","type":"SaveTool"},{"attributes":{},"id":"8703","type":"LinearScale"}],"root_ids":["8696"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"1b419ed1-c52e-4cc3-99a4-c7c8c770f98c","roots":{"8696":"8266c157-5f79-42b0-b908-7161eb14d179"}}];
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