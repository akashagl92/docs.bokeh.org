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
      };var element = document.getElementById("3aea6cc8-8c58-465a-b24b-b28a84d0b9fc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3aea6cc8-8c58-465a-b24b-b28a84d0b9fc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"451312be-83d0-4b81-afcd-f656e5d97263":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"14186","type":"Circle"},{"attributes":{},"id":"14199","type":"UnionRenderers"},{"attributes":{},"id":"14175","type":"HelpTool"},{"attributes":{},"id":"14156","type":"LinearScale"},{"attributes":{"code":"\\n    return Math.floor(tick) + \\" + \\" + (tick % 1).toFixed(2)\\n"},"id":"14190","type":"FuncTickFormatter"},{"attributes":{"plot":{"id":"14151","subtype":"Figure","type":"Plot"},"ticker":{"id":"14161","type":"BasicTicker"}},"id":"14164","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"14187","type":"Circle"},{"attributes":{},"id":"14198","type":"Selection"},{"attributes":{},"id":"14174","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14170","type":"PanTool"},{"id":"14171","type":"WheelZoomTool"},{"id":"14172","type":"BoxZoomTool"},{"id":"14173","type":"SaveTool"},{"id":"14174","type":"ResetTool"},{"id":"14175","type":"HelpTool"}]},"id":"14176","type":"Toolbar"},{"attributes":{},"id":"14170","type":"PanTool"},{"attributes":{},"id":"14171","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"14185","type":"ColumnDataSource"},"glyph":{"id":"14186","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14187","type":"Circle"},"selection_glyph":null,"view":{"id":"14189","type":"CDSView"}},"id":"14188","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"14154","type":"DataRange1d"},{"attributes":{},"id":"14173","type":"SaveTool"},{"attributes":{"formatter":{"id":"14190","type":"FuncTickFormatter"},"plot":{"id":"14151","subtype":"Figure","type":"Plot"},"ticker":{"id":"14166","type":"BasicTicker"}},"id":"14165","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]},"selected":{"id":"14198","type":"Selection"},"selection_policy":{"id":"14199","type":"UnionRenderers"}},"id":"14185","type":"ColumnDataSource"},{"attributes":{},"id":"14195","type":"BasicTickFormatter"},{"attributes":{},"id":"14158","type":"LinearScale"},{"attributes":{},"id":"14161","type":"BasicTicker"},{"attributes":{"callback":null},"id":"14152","type":"DataRange1d"},{"attributes":{"overlay":{"id":"14178","type":"BoxAnnotation"}},"id":"14172","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"14160","type":"LinearAxis"}],"left":[{"id":"14165","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"14160","type":"LinearAxis"},{"id":"14164","type":"Grid"},{"id":"14165","type":"LinearAxis"},{"id":"14169","type":"Grid"},{"id":"14178","type":"BoxAnnotation"},{"id":"14188","type":"GlyphRenderer"}],"title":{"id":"14192","type":"Title"},"toolbar":{"id":"14176","type":"Toolbar"},"x_range":{"id":"14152","type":"DataRange1d"},"x_scale":{"id":"14156","type":"LinearScale"},"y_range":{"id":"14154","type":"DataRange1d"},"y_scale":{"id":"14158","type":"LinearScale"}},"id":"14151","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14166","type":"BasicTicker"},{"attributes":{"formatter":{"id":"14195","type":"BasicTickFormatter"},"plot":{"id":"14151","subtype":"Figure","type":"Plot"},"ticker":{"id":"14161","type":"BasicTicker"}},"id":"14160","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"14192","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14178","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"14151","subtype":"Figure","type":"Plot"},"ticker":{"id":"14166","type":"BasicTicker"}},"id":"14169","type":"Grid"},{"attributes":{"source":{"id":"14185","type":"ColumnDataSource"}},"id":"14189","type":"CDSView"}],"root_ids":["14151"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"451312be-83d0-4b81-afcd-f656e5d97263","roots":{"14151":"3aea6cc8-8c58-465a-b24b-b28a84d0b9fc"}}];
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