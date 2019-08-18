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
      };var element = document.getElementById("cdccd7e8-c7e4-4fe4-abd9-8fc105132d18");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cdccd7e8-c7e4-4fe4-abd9-8fc105132d18' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4856ed51-8c53-4750-a0ef-18c5954c8bc7":{"roots":{"references":[{"attributes":{"source":{"id":"9330","type":"ColumnDataSource"}},"id":"9334","type":"CDSView"},{"attributes":{},"id":"9342","type":"UnionRenderers"},{"attributes":{},"id":"9315","type":"PanTool"},{"attributes":{},"id":"9312","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":""},"id":"9336","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9323","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9315","type":"PanTool"},{"id":"9316","type":"WheelZoomTool"},{"id":"9317","type":"BoxZoomTool"},{"id":"9318","type":"SaveTool"},{"id":"9319","type":"ResetTool"},{"id":"9320","type":"HelpTool"}]},"id":"9321","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"9297","subtype":"Figure","type":"Plot"},"ticker":{"id":"9312","type":"CategoricalTicker"}},"id":"9314","type":"Grid"},{"attributes":{},"id":"9338","type":"BasicTickFormatter"},{"attributes":{},"id":"9307","type":"BasicTicker"},{"attributes":{},"id":"9318","type":"SaveTool"},{"attributes":{},"id":"9340","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"9338","type":"BasicTickFormatter"},"plot":{"id":"9297","subtype":"Figure","type":"Plot"},"ticker":{"id":"9307","type":"BasicTicker"}},"id":"9306","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"9331","type":"Circle"},{"attributes":{"data_source":{"id":"9330","type":"ColumnDataSource"},"glyph":{"id":"9331","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9332","type":"Circle"},"selection_glyph":null,"view":{"id":"9334","type":"CDSView"}},"id":"9333","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"9343","type":"Selection"},"selection_policy":{"id":"9342","type":"UnionRenderers"}},"id":"9330","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"9298","type":"DataRange1d"},{"attributes":{},"id":"9319","type":"ResetTool"},{"attributes":{},"id":"9316","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"9340","type":"CategoricalTickFormatter"},"plot":{"id":"9297","subtype":"Figure","type":"Plot"},"ticker":{"id":"9312","type":"CategoricalTicker"}},"id":"9311","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"9332","type":"Circle"},{"attributes":{"overlay":{"id":"9323","type":"BoxAnnotation"}},"id":"9317","type":"BoxZoomTool"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"9300","type":"FactorRange"},{"attributes":{"plot":{"id":"9297","subtype":"Figure","type":"Plot"},"ticker":{"id":"9307","type":"BasicTicker"}},"id":"9310","type":"Grid"},{"attributes":{},"id":"9302","type":"LinearScale"},{"attributes":{"below":[{"id":"9306","type":"LinearAxis"}],"left":[{"id":"9311","type":"CategoricalAxis"}],"renderers":[{"id":"9306","type":"LinearAxis"},{"id":"9310","type":"Grid"},{"id":"9311","type":"CategoricalAxis"},{"id":"9314","type":"Grid"},{"id":"9323","type":"BoxAnnotation"},{"id":"9333","type":"GlyphRenderer"}],"title":{"id":"9336","type":"Title"},"toolbar":{"id":"9321","type":"Toolbar"},"x_range":{"id":"9298","type":"DataRange1d"},"x_scale":{"id":"9302","type":"LinearScale"},"y_range":{"id":"9300","type":"FactorRange"},"y_scale":{"id":"9304","type":"CategoricalScale"}},"id":"9297","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9320","type":"HelpTool"},{"attributes":{},"id":"9343","type":"Selection"},{"attributes":{},"id":"9304","type":"CategoricalScale"}],"root_ids":["9297"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"4856ed51-8c53-4750-a0ef-18c5954c8bc7","roots":{"9297":"cdccd7e8-c7e4-4fe4-abd9-8fc105132d18"}}];
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