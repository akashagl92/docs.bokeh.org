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
      };var element = document.getElementById("48d730c9-e72c-4949-b0e5-045fbf252f45");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '48d730c9-e72c-4949-b0e5-045fbf252f45' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"111c9905-58df-460b-aa73-9fdca4a12c86":{"roots":{"references":[{"attributes":{},"id":"33770","type":"PanTool"},{"attributes":{},"id":"33761","type":"BasicTicker"},{"attributes":{},"id":"33771","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"33794","type":"BasicTickFormatter"},"plot":{"id":"33751","subtype":"Figure","type":"Plot"},"ticker":{"id":"33761","type":"BasicTicker"}},"id":"33760","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"33790","type":"Title"},{"attributes":{},"id":"33798","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"33778","type":"BoxAnnotation"}},"id":"33772","type":"BoxZoomTool"},{"attributes":{},"id":"33792","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"33751","subtype":"Figure","type":"Plot"},"ticker":{"id":"33761","type":"BasicTicker"}},"id":"33764","type":"Grid"},{"attributes":{},"id":"33773","type":"SaveTool"},{"attributes":{},"id":"33794","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"33792","type":"BasicTickFormatter"},"plot":{"id":"33751","subtype":"Figure","type":"Plot"},"ticker":{"id":"33766","type":"BasicTicker"}},"id":"33765","type":"LinearAxis"},{"attributes":{},"id":"33774","type":"ResetTool"},{"attributes":{"callback":null,"data":{"fill_color":["red","green"],"line_color":["red","green"],"xs":[[[[1,1,2,2]]],[[[1,1,3],[1.5,1.5,2]]]],"ys":[[[[4,3,3,4]]],[[[1,3,1],[1.5,2,1.5]]]]},"selected":{"id":"33797","type":"Selection"},"selection_policy":{"id":"33798","type":"UnionRenderers"}},"id":"33785","type":"ColumnDataSource"},{"attributes":{},"id":"33797","type":"Selection"},{"attributes":{},"id":"33766","type":"BasicTicker"},{"attributes":{},"id":"33775","type":"HelpTool"},{"attributes":{"callback":null},"id":"33752","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"33751","subtype":"Figure","type":"Plot"},"ticker":{"id":"33766","type":"BasicTicker"}},"id":"33769","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33770","type":"PanTool"},{"id":"33771","type":"WheelZoomTool"},{"id":"33772","type":"BoxZoomTool"},{"id":"33773","type":"SaveTool"},{"id":"33774","type":"ResetTool"},{"id":"33775","type":"HelpTool"}]},"id":"33776","type":"Toolbar"},{"attributes":{"below":[{"id":"33760","type":"LinearAxis"}],"left":[{"id":"33765","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33760","type":"LinearAxis"},{"id":"33764","type":"Grid"},{"id":"33765","type":"LinearAxis"},{"id":"33769","type":"Grid"},{"id":"33778","type":"BoxAnnotation"},{"id":"33788","type":"GlyphRenderer"}],"title":{"id":"33790","type":"Title"},"toolbar":{"id":"33776","type":"Toolbar"},"x_range":{"id":"33752","type":"DataRange1d"},"x_scale":{"id":"33756","type":"LinearScale"},"y_range":{"id":"33754","type":"DataRange1d"},"y_scale":{"id":"33758","type":"LinearScale"}},"id":"33751","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"33787","type":"MultiPolygons"},{"attributes":{},"id":"33758","type":"LinearScale"},{"attributes":{"callback":null},"id":"33754","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33778","type":"BoxAnnotation"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"33786","type":"MultiPolygons"},{"attributes":{},"id":"33756","type":"LinearScale"},{"attributes":{"data_source":{"id":"33785","type":"ColumnDataSource"},"glyph":{"id":"33786","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33787","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"33789","type":"CDSView"}},"id":"33788","type":"GlyphRenderer"},{"attributes":{"source":{"id":"33785","type":"ColumnDataSource"}},"id":"33789","type":"CDSView"}],"root_ids":["33751"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"111c9905-58df-460b-aa73-9fdca4a12c86","roots":{"33751":"48d730c9-e72c-4949-b0e5-045fbf252f45"}}];
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