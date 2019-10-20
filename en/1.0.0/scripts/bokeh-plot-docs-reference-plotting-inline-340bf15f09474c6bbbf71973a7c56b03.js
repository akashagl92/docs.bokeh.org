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
      };var element = document.getElementById("b114f87a-6a0b-40f1-a6f0-82df409a816f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b114f87a-6a0b-40f1-a6f0-82df409a816f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"586de810-04cf-4a89-9c71-20d69450d6e3":{"roots":{"references":[{"attributes":{"source":{"id":"32598","type":"ColumnDataSource"}},"id":"32602","type":"CDSView"},{"attributes":{},"id":"32574","type":"BasicTicker"},{"attributes":{"below":[{"id":"32573","type":"LinearAxis"}],"left":[{"id":"32578","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32573","type":"LinearAxis"},{"id":"32577","type":"Grid"},{"id":"32578","type":"LinearAxis"},{"id":"32582","type":"Grid"},{"id":"32591","type":"BoxAnnotation"},{"id":"32601","type":"GlyphRenderer"}],"title":{"id":"32604","type":"Title"},"toolbar":{"id":"32589","type":"Toolbar"},"x_range":{"id":"32565","type":"DataRange1d"},"x_scale":{"id":"32569","type":"LinearScale"},"y_range":{"id":"32567","type":"DataRange1d"},"y_scale":{"id":"32571","type":"LinearScale"}},"id":"32564","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32587","type":"ResetTool"},{"attributes":{},"id":"32588","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32600","type":"CircleCross"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32583","type":"PanTool"},{"id":"32584","type":"WheelZoomTool"},{"id":"32585","type":"BoxZoomTool"},{"id":"32586","type":"SaveTool"},{"id":"32587","type":"ResetTool"},{"id":"32588","type":"HelpTool"}]},"id":"32589","type":"Toolbar"},{"attributes":{},"id":"32583","type":"PanTool"},{"attributes":{},"id":"32579","type":"BasicTicker"},{"attributes":{"plot":{"id":"32564","subtype":"Figure","type":"Plot"},"ticker":{"id":"32574","type":"BasicTicker"}},"id":"32577","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"32604","type":"Title"},{"attributes":{"callback":null},"id":"32565","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32591","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"32567","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"32564","subtype":"Figure","type":"Plot"},"ticker":{"id":"32579","type":"BasicTicker"}},"id":"32582","type":"Grid"},{"attributes":{},"id":"32586","type":"SaveTool"},{"attributes":{},"id":"32584","type":"WheelZoomTool"},{"attributes":{},"id":"32606","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32606","type":"BasicTickFormatter"},"plot":{"id":"32564","subtype":"Figure","type":"Plot"},"ticker":{"id":"32574","type":"BasicTicker"}},"id":"32573","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32599","type":"CircleCross"},{"attributes":{"overlay":{"id":"32591","type":"BoxAnnotation"}},"id":"32585","type":"BoxZoomTool"},{"attributes":{},"id":"32608","type":"BasicTickFormatter"},{"attributes":{},"id":"32569","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[4,5,6]},"selected":{"id":"32610","type":"Selection"},"selection_policy":{"id":"32611","type":"UnionRenderers"}},"id":"32598","type":"ColumnDataSource"},{"attributes":{},"id":"32611","type":"UnionRenderers"},{"attributes":{},"id":"32610","type":"Selection"},{"attributes":{"formatter":{"id":"32608","type":"BasicTickFormatter"},"plot":{"id":"32564","subtype":"Figure","type":"Plot"},"ticker":{"id":"32579","type":"BasicTicker"}},"id":"32578","type":"LinearAxis"},{"attributes":{"data_source":{"id":"32598","type":"ColumnDataSource"},"glyph":{"id":"32599","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32600","type":"CircleCross"},"selection_glyph":null,"view":{"id":"32602","type":"CDSView"}},"id":"32601","type":"GlyphRenderer"},{"attributes":{},"id":"32571","type":"LinearScale"}],"root_ids":["32564"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"586de810-04cf-4a89-9c71-20d69450d6e3","roots":{"32564":"b114f87a-6a0b-40f1-a6f0-82df409a816f"}}];
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