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
      };var element = document.getElementById("67a65901-381a-46d3-b979-d9fbb6b33acb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '67a65901-381a-46d3-b979-d9fbb6b33acb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"748ff60d-b424-4f9f-8cdd-0e7ddbb39aec":{"roots":{"references":[{"attributes":{},"id":"18915","type":"LinearScale"},{"attributes":{},"id":"18931","type":"ResetTool"},{"attributes":{},"id":"18927","type":"PanTool"},{"attributes":{},"id":"18954","type":"UnionRenderers"},{"attributes":{},"id":"18928","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18927","type":"PanTool"},{"id":"18928","type":"WheelZoomTool"},{"id":"18929","type":"BoxZoomTool"},{"id":"18930","type":"SaveTool"},{"id":"18931","type":"ResetTool"},{"id":"18932","type":"HelpTool"}]},"id":"18933","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"18907","subtype":"Figure","type":"Plot"},"ticker":{"id":"18923","type":"BasicTicker"}},"id":"18926","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18943","type":"Circle"},{"attributes":{"formatter":{"id":"18950","type":"BasicTickFormatter"},"plot":{"id":"18907","subtype":"Figure","type":"Plot"},"ticker":{"id":"18918","type":"BasicTicker"}},"id":"18917","type":"LinearAxis"},{"attributes":{"source":{"id":"18942","type":"ColumnDataSource"}},"id":"18946","type":"CDSView"},{"attributes":{"overlay":{"id":"18935","type":"BoxAnnotation"}},"id":"18929","type":"BoxZoomTool"},{"attributes":{},"id":"18953","type":"Selection"},{"attributes":{},"id":"18918","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"18953","type":"Selection"},"selection_policy":{"id":"18954","type":"UnionRenderers"}},"id":"18942","type":"ColumnDataSource"},{"attributes":{},"id":"18930","type":"SaveTool"},{"attributes":{},"id":"18950","type":"BasicTickFormatter"},{"attributes":{},"id":"18913","type":"LinearScale"},{"attributes":{"plot":{"id":"18907","subtype":"Figure","type":"Plot"},"ticker":{"id":"18918","type":"BasicTicker"}},"id":"18921","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18935","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"18917","type":"LinearAxis"}],"left":[{"id":"18922","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18917","type":"LinearAxis"},{"id":"18921","type":"Grid"},{"id":"18922","type":"LinearAxis"},{"id":"18926","type":"Grid"},{"id":"18935","type":"BoxAnnotation"},{"id":"18945","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"18933","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"18909","type":"DataRange1d"},"x_scale":{"id":"18913","type":"LinearScale"},"y_range":{"id":"18911","type":"DataRange1d"},"y_scale":{"id":"18915","type":"LinearScale"}},"id":"18907","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18944","type":"Circle"},{"attributes":{"formatter":{"id":"18948","type":"BasicTickFormatter"},"plot":{"id":"18907","subtype":"Figure","type":"Plot"},"ticker":{"id":"18923","type":"BasicTicker"}},"id":"18922","type":"LinearAxis"},{"attributes":{},"id":"18948","type":"BasicTickFormatter"},{"attributes":{},"id":"18923","type":"BasicTicker"},{"attributes":{"callback":null},"id":"18909","type":"DataRange1d"},{"attributes":{},"id":"18932","type":"HelpTool"},{"attributes":{"callback":null},"id":"18911","type":"DataRange1d"},{"attributes":{"data_source":{"id":"18942","type":"ColumnDataSource"},"glyph":{"id":"18943","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18944","type":"Circle"},"selection_glyph":null,"view":{"id":"18946","type":"CDSView"}},"id":"18945","type":"GlyphRenderer"}],"root_ids":["18907"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"748ff60d-b424-4f9f-8cdd-0e7ddbb39aec","roots":{"18907":"67a65901-381a-46d3-b979-d9fbb6b33acb"}}];
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