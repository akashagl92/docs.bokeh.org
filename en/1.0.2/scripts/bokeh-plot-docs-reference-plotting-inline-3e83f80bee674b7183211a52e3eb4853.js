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
      };var element = document.getElementById("0004e371-27e1-4a98-b1e9-d5a630fc2447");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0004e371-27e1-4a98-b1e9-d5a630fc2447' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c6f88d07-b1ba-4a78-b57a-0f9fc5b3561a":{"roots":{"references":[{"attributes":{},"id":"32335","type":"ResetTool"},{"attributes":{},"id":"32358","type":"UnionRenderers"},{"attributes":{"source":{"id":"32346","type":"ColumnDataSource"}},"id":"32350","type":"CDSView"},{"attributes":{"plot":{"id":"32312","subtype":"Figure","type":"Plot"},"ticker":{"id":"32322","type":"BasicTicker"}},"id":"32325","type":"Grid"},{"attributes":{},"id":"32319","type":"LinearScale"},{"attributes":{},"id":"32354","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"32346","type":"ColumnDataSource"},"glyph":{"id":"32347","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32348","type":"Annulus"},"selection_glyph":null,"view":{"id":"32350","type":"CDSView"}},"id":"32349","type":"GlyphRenderer"},{"attributes":{},"id":"32334","type":"SaveTool"},{"attributes":{"callback":null},"id":"32313","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32339","type":"BoxAnnotation"},{"attributes":{},"id":"32356","type":"BasicTickFormatter"},{"attributes":{},"id":"32359","type":"Selection"},{"attributes":{"formatter":{"id":"32356","type":"BasicTickFormatter"},"plot":{"id":"32312","subtype":"Figure","type":"Plot"},"ticker":{"id":"32327","type":"BasicTicker"}},"id":"32326","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"32312","subtype":"Figure","type":"Plot"},"ticker":{"id":"32327","type":"BasicTicker"}},"id":"32330","type":"Grid"},{"attributes":{"callback":null},"id":"32315","type":"DataRange1d"},{"attributes":{},"id":"32317","type":"LinearScale"},{"attributes":{},"id":"32322","type":"BasicTicker"},{"attributes":{},"id":"32336","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32359","type":"Selection"},"selection_policy":{"id":"32358","type":"UnionRenderers"}},"id":"32346","type":"ColumnDataSource"},{"attributes":{},"id":"32331","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"32352","type":"Title"},{"attributes":{},"id":"32332","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"32347","type":"Annulus"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32331","type":"PanTool"},{"id":"32332","type":"WheelZoomTool"},{"id":"32333","type":"BoxZoomTool"},{"id":"32334","type":"SaveTool"},{"id":"32335","type":"ResetTool"},{"id":"32336","type":"HelpTool"}]},"id":"32337","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"32348","type":"Annulus"},{"attributes":{"formatter":{"id":"32354","type":"BasicTickFormatter"},"plot":{"id":"32312","subtype":"Figure","type":"Plot"},"ticker":{"id":"32322","type":"BasicTicker"}},"id":"32321","type":"LinearAxis"},{"attributes":{"overlay":{"id":"32339","type":"BoxAnnotation"}},"id":"32333","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"32321","type":"LinearAxis"}],"left":[{"id":"32326","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32321","type":"LinearAxis"},{"id":"32325","type":"Grid"},{"id":"32326","type":"LinearAxis"},{"id":"32330","type":"Grid"},{"id":"32339","type":"BoxAnnotation"},{"id":"32349","type":"GlyphRenderer"}],"title":{"id":"32352","type":"Title"},"toolbar":{"id":"32337","type":"Toolbar"},"x_range":{"id":"32313","type":"DataRange1d"},"x_scale":{"id":"32317","type":"LinearScale"},"y_range":{"id":"32315","type":"DataRange1d"},"y_scale":{"id":"32319","type":"LinearScale"}},"id":"32312","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32327","type":"BasicTicker"}],"root_ids":["32312"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"c6f88d07-b1ba-4a78-b57a-0f9fc5b3561a","roots":{"32312":"0004e371-27e1-4a98-b1e9-d5a630fc2447"}}];
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