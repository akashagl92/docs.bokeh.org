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
      };var element = document.getElementById("9de8498d-2f15-4a4f-9b98-8b91efb3bdfa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9de8498d-2f15-4a4f-9b98-8b91efb3bdfa' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"cdd496e2-9a84-40e2-b416-54b447972993":{"roots":{"references":[{"attributes":{"plot":{"id":"35016","subtype":"Figure","type":"Plot"},"ticker":{"id":"35026","type":"BasicTicker"}},"id":"35029","type":"Grid"},{"attributes":{},"id":"35060","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35051","type":"X"},{"attributes":{"formatter":{"id":"35060","type":"BasicTickFormatter"},"plot":{"id":"35016","subtype":"Figure","type":"Plot"},"ticker":{"id":"35031","type":"BasicTicker"}},"id":"35030","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35043","type":"BoxAnnotation"},{"attributes":{},"id":"35062","type":"Selection"},{"attributes":{},"id":"35031","type":"BasicTicker"},{"attributes":{"callback":null},"id":"35017","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"35062","type":"Selection"},"selection_policy":{"id":"35063","type":"UnionRenderers"}},"id":"35050","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35035","type":"PanTool"},{"id":"35036","type":"WheelZoomTool"},{"id":"35037","type":"BoxZoomTool"},{"id":"35038","type":"SaveTool"},{"id":"35039","type":"ResetTool"},{"id":"35040","type":"HelpTool"}]},"id":"35041","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"35016","subtype":"Figure","type":"Plot"},"ticker":{"id":"35031","type":"BasicTicker"}},"id":"35034","type":"Grid"},{"attributes":{},"id":"35023","type":"LinearScale"},{"attributes":{"callback":null},"id":"35019","type":"DataRange1d"},{"attributes":{},"id":"35040","type":"HelpTool"},{"attributes":{},"id":"35021","type":"LinearScale"},{"attributes":{},"id":"35039","type":"ResetTool"},{"attributes":{},"id":"35063","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35052","type":"X"},{"attributes":{"source":{"id":"35050","type":"ColumnDataSource"}},"id":"35054","type":"CDSView"},{"attributes":{"formatter":{"id":"35058","type":"BasicTickFormatter"},"plot":{"id":"35016","subtype":"Figure","type":"Plot"},"ticker":{"id":"35026","type":"BasicTicker"}},"id":"35025","type":"LinearAxis"},{"attributes":{},"id":"35035","type":"PanTool"},{"attributes":{},"id":"35036","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"35050","type":"ColumnDataSource"},"glyph":{"id":"35051","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35052","type":"X"},"selection_glyph":null,"view":{"id":"35054","type":"CDSView"}},"id":"35053","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"35056","type":"Title"},{"attributes":{"overlay":{"id":"35043","type":"BoxAnnotation"}},"id":"35037","type":"BoxZoomTool"},{"attributes":{},"id":"35026","type":"BasicTicker"},{"attributes":{},"id":"35058","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"35025","type":"LinearAxis"}],"left":[{"id":"35030","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35025","type":"LinearAxis"},{"id":"35029","type":"Grid"},{"id":"35030","type":"LinearAxis"},{"id":"35034","type":"Grid"},{"id":"35043","type":"BoxAnnotation"},{"id":"35053","type":"GlyphRenderer"}],"title":{"id":"35056","type":"Title"},"toolbar":{"id":"35041","type":"Toolbar"},"x_range":{"id":"35017","type":"DataRange1d"},"x_scale":{"id":"35021","type":"LinearScale"},"y_range":{"id":"35019","type":"DataRange1d"},"y_scale":{"id":"35023","type":"LinearScale"}},"id":"35016","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35038","type":"SaveTool"}],"root_ids":["35016"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"cdd496e2-9a84-40e2-b416-54b447972993","roots":{"35016":"9de8498d-2f15-4a4f-9b98-8b91efb3bdfa"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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