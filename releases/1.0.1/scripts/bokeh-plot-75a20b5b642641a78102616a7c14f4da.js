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
      };var element = document.getElementById("6b5a24dc-28cf-4046-8e0d-08e8e4035ead");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6b5a24dc-28cf-4046-8e0d-08e8e4035ead' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"f690400a-b7d1-436c-8b07-056d1bab9c9d":{"roots":{"references":[{"attributes":{},"id":"11741","type":"PanTool"},{"attributes":{"formatter":{"id":"11764","type":"BasicTickFormatter"},"plot":{"id":"11722","subtype":"Figure","type":"Plot"},"ticker":{"id":"11732","type":"BasicTicker"}},"id":"11731","type":"LinearAxis"},{"attributes":{},"id":"11742","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"11762","type":"Title"},{"attributes":{},"id":"11732","type":"BasicTicker"},{"attributes":{"overlay":{"id":"11749","type":"BoxAnnotation"}},"id":"11743","type":"BoxZoomTool"},{"attributes":{},"id":"11764","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"11722","subtype":"Figure","type":"Plot"},"ticker":{"id":"11732","type":"BasicTicker"}},"id":"11735","type":"Grid"},{"attributes":{},"id":"11744","type":"SaveTool"},{"attributes":{},"id":"11766","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"11766","type":"BasicTickFormatter"},"plot":{"id":"11722","subtype":"Figure","type":"Plot"},"ticker":{"id":"11737","type":"BasicTicker"}},"id":"11736","type":"LinearAxis"},{"attributes":{"below":[{"id":"11731","type":"LinearAxis"}],"left":[{"id":"11736","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11731","type":"LinearAxis"},{"id":"11735","type":"Grid"},{"id":"11736","type":"LinearAxis"},{"id":"11740","type":"Grid"},{"id":"11749","type":"BoxAnnotation"},{"id":"11759","type":"GlyphRenderer"}],"title":{"id":"11762","type":"Title"},"toolbar":{"id":"11747","type":"Toolbar"},"x_range":{"id":"11723","type":"DataRange1d"},"x_scale":{"id":"11727","type":"LinearScale"},"y_range":{"id":"11725","type":"DataRange1d"},"y_scale":{"id":"11729","type":"LinearScale"}},"id":"11722","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11745","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"11768","type":"Selection"},"selection_policy":{"id":"11769","type":"UnionRenderers"}},"id":"11756","type":"ColumnDataSource"},{"attributes":{},"id":"11768","type":"Selection"},{"attributes":{},"id":"11737","type":"BasicTicker"},{"attributes":{},"id":"11746","type":"HelpTool"},{"attributes":{"callback":null},"id":"11723","type":"DataRange1d"},{"attributes":{},"id":"11769","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"11722","subtype":"Figure","type":"Plot"},"ticker":{"id":"11737","type":"BasicTicker"}},"id":"11740","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11741","type":"PanTool"},{"id":"11742","type":"WheelZoomTool"},{"id":"11743","type":"BoxZoomTool"},{"id":"11744","type":"SaveTool"},{"id":"11745","type":"ResetTool"},{"id":"11746","type":"HelpTool"}]},"id":"11747","type":"Toolbar"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11758","type":"Patch"},{"attributes":{"callback":null},"id":"11725","type":"DataRange1d"},{"attributes":{},"id":"11727","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11749","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.5,"fill_color":"#1f77b4","line_alpha":0.5,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11757","type":"Patch"},{"attributes":{"data_source":{"id":"11756","type":"ColumnDataSource"},"glyph":{"id":"11757","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11758","type":"Patch"},"selection_glyph":null,"view":{"id":"11760","type":"CDSView"}},"id":"11759","type":"GlyphRenderer"},{"attributes":{},"id":"11729","type":"LinearScale"},{"attributes":{"source":{"id":"11756","type":"ColumnDataSource"}},"id":"11760","type":"CDSView"}],"root_ids":["11722"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"f690400a-b7d1-436c-8b07-056d1bab9c9d","roots":{"11722":"6b5a24dc-28cf-4046-8e0d-08e8e4035ead"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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