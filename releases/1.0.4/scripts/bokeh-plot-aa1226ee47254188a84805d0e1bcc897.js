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
      };var element = document.getElementById("e431dcb3-422b-423a-8ab6-617ee917513a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e431dcb3-422b-423a-8ab6-617ee917513a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"125426c4-0474-4a1b-90db-15243429e13e":{"roots":{"references":[{"attributes":{},"id":"11226","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11243","type":"BoxAnnotation"},{"attributes":{},"id":"11231","type":"BasicTicker"},{"attributes":{},"id":"11236","type":"WheelZoomTool"},{"attributes":{},"id":"11221","type":"LinearScale"},{"attributes":{"source":{"id":"11250","type":"ColumnDataSource"}},"id":"11254","type":"CDSView"},{"attributes":{"callback":null},"id":"11219","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"11255","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11251","type":"MultiPolygons"},{"attributes":{},"id":"11257","type":"BasicTickFormatter"},{"attributes":{},"id":"11239","type":"ResetTool"},{"attributes":{"callback":null},"id":"11217","type":"DataRange1d"},{"attributes":{"overlay":{"id":"11243","type":"BoxAnnotation"}},"id":"11237","type":"BoxZoomTool"},{"attributes":{},"id":"11238","type":"SaveTool"},{"attributes":{"below":[{"id":"11225","type":"LinearAxis"}],"left":[{"id":"11230","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11225","type":"LinearAxis"},{"id":"11229","type":"Grid"},{"id":"11230","type":"LinearAxis"},{"id":"11234","type":"Grid"},{"id":"11243","type":"BoxAnnotation"},{"id":"11253","type":"GlyphRenderer"}],"title":{"id":"11255","type":"Title"},"toolbar":{"id":"11241","type":"Toolbar"},"x_range":{"id":"11217","type":"DataRange1d"},"x_scale":{"id":"11221","type":"LinearScale"},"y_range":{"id":"11219","type":"DataRange1d"},"y_scale":{"id":"11223","type":"LinearScale"}},"id":"11216","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11259","type":"BasicTickFormatter"},{"attributes":{},"id":"11240","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"11216","subtype":"Figure","type":"Plot"},"ticker":{"id":"11231","type":"BasicTicker"}},"id":"11234","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11235","type":"PanTool"},{"id":"11236","type":"WheelZoomTool"},{"id":"11237","type":"BoxZoomTool"},{"id":"11238","type":"SaveTool"},{"id":"11239","type":"ResetTool"},{"id":"11240","type":"HelpTool"}]},"id":"11241","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11252","type":"MultiPolygons"},{"attributes":{"plot":{"id":"11216","subtype":"Figure","type":"Plot"},"ticker":{"id":"11226","type":"BasicTicker"}},"id":"11229","type":"Grid"},{"attributes":{},"id":"11235","type":"PanTool"},{"attributes":{},"id":"11261","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"11257","type":"BasicTickFormatter"},"plot":{"id":"11216","subtype":"Figure","type":"Plot"},"ticker":{"id":"11231","type":"BasicTicker"}},"id":"11230","type":"LinearAxis"},{"attributes":{},"id":"11262","type":"Selection"},{"attributes":{"formatter":{"id":"11259","type":"BasicTickFormatter"},"plot":{"id":"11216","subtype":"Figure","type":"Plot"},"ticker":{"id":"11226","type":"BasicTicker"}},"id":"11225","type":"LinearAxis"},{"attributes":{"data_source":{"id":"11250","type":"ColumnDataSource"},"glyph":{"id":"11251","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11252","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"11254","type":"CDSView"}},"id":"11253","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"xs":[[[[1,2,2,1],[1.2,1.6,1.6],[1.8,1.8,1.6]]]],"ys":[[[[3,3,4,4],[3.2,3.6,3.2],[3.4,3.8,3.8]]]]},"selected":{"id":"11262","type":"Selection"},"selection_policy":{"id":"11261","type":"UnionRenderers"}},"id":"11250","type":"ColumnDataSource"},{"attributes":{},"id":"11223","type":"LinearScale"}],"root_ids":["11216"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"125426c4-0474-4a1b-90db-15243429e13e","roots":{"11216":"e431dcb3-422b-423a-8ab6-617ee917513a"}}];
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