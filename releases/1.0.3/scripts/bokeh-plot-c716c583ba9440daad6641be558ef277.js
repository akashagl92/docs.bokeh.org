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
      };var element = document.getElementById("3d009fc0-2524-4a85-89a6-0cad1ea70199");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3d009fc0-2524-4a85-89a6-0cad1ea70199' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1655db4a-0d27-48fc-9f29-0bb06e0094fc":{"roots":{"references":[{"attributes":{"formatter":{"id":"11344","type":"BasicTickFormatter"},"plot":{"id":"11301","subtype":"Figure","type":"Plot"},"ticker":{"id":"11311","type":"BasicTicker"}},"id":"11310","type":"LinearAxis"},{"attributes":{},"id":"11321","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"11301","subtype":"Figure","type":"Plot"},"ticker":{"id":"11311","type":"BasicTicker"}},"id":"11314","type":"Grid"},{"attributes":{"overlay":{"id":"11328","type":"BoxAnnotation"}},"id":"11322","type":"BoxZoomTool"},{"attributes":{},"id":"11323","type":"SaveTool"},{"attributes":{"below":[{"id":"11310","type":"LinearAxis"}],"left":[{"id":"11315","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11310","type":"LinearAxis"},{"id":"11314","type":"Grid"},{"id":"11315","type":"LinearAxis"},{"id":"11319","type":"Grid"},{"id":"11328","type":"BoxAnnotation"},{"id":"11338","type":"GlyphRenderer"}],"title":{"id":"11340","type":"Title"},"toolbar":{"id":"11326","type":"Toolbar"},"x_range":{"id":"11302","type":"DataRange1d"},"x_scale":{"id":"11306","type":"LinearScale"},"y_range":{"id":"11304","type":"DataRange1d"},"y_scale":{"id":"11308","type":"LinearScale"}},"id":"11301","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11348","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"11342","type":"BasicTickFormatter"},"plot":{"id":"11301","subtype":"Figure","type":"Plot"},"ticker":{"id":"11316","type":"BasicTicker"}},"id":"11315","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11337","type":"MultiPolygons"},{"attributes":{},"id":"11324","type":"ResetTool"},{"attributes":{},"id":"11316","type":"BasicTicker"},{"attributes":{"callback":null},"id":"11302","type":"DataRange1d"},{"attributes":{},"id":"11325","type":"HelpTool"},{"attributes":{},"id":"11342","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"11301","subtype":"Figure","type":"Plot"},"ticker":{"id":"11316","type":"BasicTicker"}},"id":"11319","type":"Grid"},{"attributes":{},"id":"11344","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11320","type":"PanTool"},{"id":"11321","type":"WheelZoomTool"},{"id":"11322","type":"BoxZoomTool"},{"id":"11323","type":"SaveTool"},{"id":"11324","type":"ResetTool"},{"id":"11325","type":"HelpTool"}]},"id":"11326","type":"Toolbar"},{"attributes":{"callback":null},"id":"11304","type":"DataRange1d"},{"attributes":{},"id":"11306","type":"LinearScale"},{"attributes":{},"id":"11347","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11336","type":"MultiPolygons"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11328","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"xs":[[[[1,1,2,2],[1.2,1.6,1.6],[1.8,1.8,1.6]],[[3,4,3]]]],"ys":[[[[4,3,3,4],[3.2,3.2,3.6],[3.4,3.8,3.8]],[[1,1,3]]]]},"selected":{"id":"11347","type":"Selection"},"selection_policy":{"id":"11348","type":"UnionRenderers"}},"id":"11335","type":"ColumnDataSource"},{"attributes":{},"id":"11311","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"11340","type":"Title"},{"attributes":{"data_source":{"id":"11335","type":"ColumnDataSource"},"glyph":{"id":"11336","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11337","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"11339","type":"CDSView"}},"id":"11338","type":"GlyphRenderer"},{"attributes":{},"id":"11308","type":"LinearScale"},{"attributes":{"source":{"id":"11335","type":"ColumnDataSource"}},"id":"11339","type":"CDSView"},{"attributes":{},"id":"11320","type":"PanTool"}],"root_ids":["11301"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"1655db4a-0d27-48fc-9f29-0bb06e0094fc","roots":{"11301":"3d009fc0-2524-4a85-89a6-0cad1ea70199"}}];
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