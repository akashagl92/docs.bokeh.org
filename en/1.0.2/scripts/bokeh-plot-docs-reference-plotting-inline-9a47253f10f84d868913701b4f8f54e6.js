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
      };var element = document.getElementById("be5d05f0-f6c5-45f9-932a-acf14eabab68");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'be5d05f0-f6c5-45f9-932a-acf14eabab68' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"089f9a5a-32b3-43db-9ba0-c066f49a07cb":{"roots":{"references":[{"attributes":{},"id":"34358","type":"PanTool"},{"attributes":{},"id":"34349","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"34379","type":"Title"},{"attributes":{},"id":"34363","type":"HelpTool"},{"attributes":{},"id":"34359","type":"WheelZoomTool"},{"attributes":{},"id":"34381","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"34366","type":"BoxAnnotation"}},"id":"34360","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"34339","subtype":"Figure","type":"Plot"},"ticker":{"id":"34349","type":"BasicTicker"}},"id":"34352","type":"Grid"},{"attributes":{},"id":"34383","type":"BasicTickFormatter"},{"attributes":{},"id":"34361","type":"SaveTool"},{"attributes":{"below":[{"id":"34348","type":"LinearAxis"}],"left":[{"id":"34353","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34348","type":"LinearAxis"},{"id":"34352","type":"Grid"},{"id":"34353","type":"LinearAxis"},{"id":"34357","type":"Grid"},{"id":"34366","type":"BoxAnnotation"},{"id":"34376","type":"GlyphRenderer"}],"title":{"id":"34379","type":"Title"},"toolbar":{"id":"34364","type":"Toolbar"},"x_range":{"id":"34340","type":"DataRange1d"},"x_scale":{"id":"34344","type":"LinearScale"},"y_range":{"id":"34342","type":"DataRange1d"},"y_scale":{"id":"34346","type":"LinearScale"}},"id":"34339","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"34383","type":"BasicTickFormatter"},"plot":{"id":"34339","subtype":"Figure","type":"Plot"},"ticker":{"id":"34354","type":"BasicTicker"}},"id":"34353","type":"LinearAxis"},{"attributes":{},"id":"34385","type":"UnionRenderers"},{"attributes":{},"id":"34362","type":"ResetTool"},{"attributes":{},"id":"34354","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34340","type":"DataRange1d"},{"attributes":{},"id":"34386","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34358","type":"PanTool"},{"id":"34359","type":"WheelZoomTool"},{"id":"34360","type":"BoxZoomTool"},{"id":"34361","type":"SaveTool"},{"id":"34362","type":"ResetTool"},{"id":"34363","type":"HelpTool"}]},"id":"34364","type":"Toolbar"},{"attributes":{"data_source":{"id":"34373","type":"ColumnDataSource"},"glyph":{"id":"34374","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34375","type":"Segment"},"selection_glyph":null,"view":{"id":"34377","type":"CDSView"}},"id":"34376","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"34339","subtype":"Figure","type":"Plot"},"ticker":{"id":"34354","type":"BasicTicker"}},"id":"34357","type":"Grid"},{"attributes":{"formatter":{"id":"34381","type":"BasicTickFormatter"},"plot":{"id":"34339","subtype":"Figure","type":"Plot"},"ticker":{"id":"34349","type":"BasicTicker"}},"id":"34348","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34366","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34342","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"34374","type":"Segment"},{"attributes":{"source":{"id":"34373","type":"ColumnDataSource"}},"id":"34377","type":"CDSView"},{"attributes":{},"id":"34344","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"34375","type":"Segment"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"34386","type":"Selection"},"selection_policy":{"id":"34385","type":"UnionRenderers"}},"id":"34373","type":"ColumnDataSource"},{"attributes":{},"id":"34346","type":"LinearScale"}],"root_ids":["34339"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"089f9a5a-32b3-43db-9ba0-c066f49a07cb","roots":{"34339":"be5d05f0-f6c5-45f9-932a-acf14eabab68"}}];
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