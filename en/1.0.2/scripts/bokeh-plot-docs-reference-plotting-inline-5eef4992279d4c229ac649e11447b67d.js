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
      };var element = document.getElementById("f11b3d7c-4874-4e15-8f01-ff827c999798");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f11b3d7c-4874-4e15-8f01-ff827c999798' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"611098f0-0ac9-45fd-986d-4b4f68b660af":{"roots":{"references":[{"attributes":{},"id":"32502","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"32482","subtype":"Figure","type":"Plot"},"ticker":{"id":"32492","type":"BasicTicker"}},"id":"32495","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"32522","type":"Title"},{"attributes":{"formatter":{"id":"32524","type":"BasicTickFormatter"},"plot":{"id":"32482","subtype":"Figure","type":"Plot"},"ticker":{"id":"32492","type":"BasicTicker"}},"id":"32491","type":"LinearAxis"},{"attributes":{},"id":"32487","type":"LinearScale"},{"attributes":{},"id":"32528","type":"UnionRenderers"},{"attributes":{},"id":"32526","type":"BasicTickFormatter"},{"attributes":{},"id":"32524","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32526","type":"BasicTickFormatter"},"plot":{"id":"32482","subtype":"Figure","type":"Plot"},"ticker":{"id":"32497","type":"BasicTicker"}},"id":"32496","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32501","type":"PanTool"},{"id":"32502","type":"WheelZoomTool"},{"id":"32503","type":"BoxZoomTool"},{"id":"32504","type":"SaveTool"},{"id":"32505","type":"ResetTool"},{"id":"32506","type":"HelpTool"}]},"id":"32507","type":"Toolbar"},{"attributes":{},"id":"32497","type":"BasicTicker"},{"attributes":{},"id":"32501","type":"PanTool"},{"attributes":{},"id":"32504","type":"SaveTool"},{"attributes":{"overlay":{"id":"32509","type":"BoxAnnotation"}},"id":"32503","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32529","type":"Selection"},"selection_policy":{"id":"32528","type":"UnionRenderers"}},"id":"32516","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"32485","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"32482","subtype":"Figure","type":"Plot"},"ticker":{"id":"32497","type":"BasicTicker"}},"id":"32500","type":"Grid"},{"attributes":{},"id":"32489","type":"LinearScale"},{"attributes":{"source":{"id":"32516","type":"ColumnDataSource"}},"id":"32520","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32517","type":"Circle"},{"attributes":{},"id":"32505","type":"ResetTool"},{"attributes":{"data_source":{"id":"32516","type":"ColumnDataSource"},"glyph":{"id":"32517","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32518","type":"Circle"},"selection_glyph":null,"view":{"id":"32520","type":"CDSView"}},"id":"32519","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"32483","type":"DataRange1d"},{"attributes":{"below":[{"id":"32491","type":"LinearAxis"}],"left":[{"id":"32496","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32491","type":"LinearAxis"},{"id":"32495","type":"Grid"},{"id":"32496","type":"LinearAxis"},{"id":"32500","type":"Grid"},{"id":"32509","type":"BoxAnnotation"},{"id":"32519","type":"GlyphRenderer"}],"title":{"id":"32522","type":"Title"},"toolbar":{"id":"32507","type":"Toolbar"},"x_range":{"id":"32483","type":"DataRange1d"},"x_scale":{"id":"32487","type":"LinearScale"},"y_range":{"id":"32485","type":"DataRange1d"},"y_scale":{"id":"32489","type":"LinearScale"}},"id":"32482","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32506","type":"HelpTool"},{"attributes":{},"id":"32529","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32518","type":"Circle"},{"attributes":{},"id":"32492","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32509","type":"BoxAnnotation"}],"root_ids":["32482"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"611098f0-0ac9-45fd-986d-4b4f68b660af","roots":{"32482":"f11b3d7c-4874-4e15-8f01-ff827c999798"}}];
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