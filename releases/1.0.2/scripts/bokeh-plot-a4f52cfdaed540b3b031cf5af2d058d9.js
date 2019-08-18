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
      };var element = document.getElementById("79c46276-a253-4bd1-98d7-5effb67d02fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '79c46276-a253-4bd1-98d7-5effb67d02fe' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"db77a587-4650-43c1-8622-67169f636add":{"roots":{"references":[{"attributes":{},"id":"11135","type":"LinearScale"},{"attributes":{},"id":"11150","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"11168","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11163","type":"MultiPolygons"},{"attributes":{},"id":"11170","type":"BasicTickFormatter"},{"attributes":{},"id":"11151","type":"ResetTool"},{"attributes":{"below":[{"id":"11137","type":"LinearAxis"}],"left":[{"id":"11142","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11137","type":"LinearAxis"},{"id":"11141","type":"Grid"},{"id":"11142","type":"LinearAxis"},{"id":"11146","type":"Grid"},{"id":"11155","type":"BoxAnnotation"},{"id":"11165","type":"GlyphRenderer"}],"title":{"id":"11168","type":"Title"},"toolbar":{"id":"11153","type":"Toolbar"},"x_range":{"id":"11129","type":"DataRange1d"},"x_scale":{"id":"11133","type":"LinearScale"},"y_range":{"id":"11131","type":"DataRange1d"},"y_scale":{"id":"11135","type":"LinearScale"}},"id":"11128","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11172","type":"BasicTickFormatter"},{"attributes":{},"id":"11175","type":"Selection"},{"attributes":{},"id":"11143","type":"BasicTicker"},{"attributes":{},"id":"11138","type":"BasicTicker"},{"attributes":{},"id":"11174","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"11170","type":"BasicTickFormatter"},"plot":{"id":"11128","subtype":"Figure","type":"Plot"},"ticker":{"id":"11138","type":"BasicTicker"}},"id":"11137","type":"LinearAxis"},{"attributes":{"source":{"id":"11162","type":"ColumnDataSource"}},"id":"11166","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"11128","subtype":"Figure","type":"Plot"},"ticker":{"id":"11143","type":"BasicTicker"}},"id":"11146","type":"Grid"},{"attributes":{"callback":null},"id":"11131","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11147","type":"PanTool"},{"id":"11148","type":"WheelZoomTool"},{"id":"11149","type":"BoxZoomTool"},{"id":"11150","type":"SaveTool"},{"id":"11151","type":"ResetTool"},{"id":"11152","type":"HelpTool"}]},"id":"11153","type":"Toolbar"},{"attributes":{"callback":null},"id":"11129","type":"DataRange1d"},{"attributes":{"data_source":{"id":"11162","type":"ColumnDataSource"},"glyph":{"id":"11163","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11164","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"11166","type":"CDSView"}},"id":"11165","type":"GlyphRenderer"},{"attributes":{},"id":"11152","type":"HelpTool"},{"attributes":{"overlay":{"id":"11155","type":"BoxAnnotation"}},"id":"11149","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11155","type":"BoxAnnotation"},{"attributes":{},"id":"11133","type":"LinearScale"},{"attributes":{"formatter":{"id":"11172","type":"BasicTickFormatter"},"plot":{"id":"11128","subtype":"Figure","type":"Plot"},"ticker":{"id":"11143","type":"BasicTicker"}},"id":"11142","type":"LinearAxis"},{"attributes":{"plot":{"id":"11128","subtype":"Figure","type":"Plot"},"ticker":{"id":"11138","type":"BasicTicker"}},"id":"11141","type":"Grid"},{"attributes":{},"id":"11147","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11164","type":"MultiPolygons"},{"attributes":{},"id":"11148","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"xs":[[[[1,1,2,2]]]],"ys":[[[[3,4,4,3]]]]},"selected":{"id":"11175","type":"Selection"},"selection_policy":{"id":"11174","type":"UnionRenderers"}},"id":"11162","type":"ColumnDataSource"}],"root_ids":["11128"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"db77a587-4650-43c1-8622-67169f636add","roots":{"11128":"79c46276-a253-4bd1-98d7-5effb67d02fe"}}];
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