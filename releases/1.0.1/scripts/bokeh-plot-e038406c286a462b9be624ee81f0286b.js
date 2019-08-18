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
      };var element = document.getElementById("dda86b2e-4fd1-4a50-8e52-3094fc900eaf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dda86b2e-4fd1-4a50-8e52-3094fc900eaf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"243e130a-3cea-4c21-a1ff-c2b235daf0cb":{"roots":{"references":[{"attributes":{},"id":"14154","type":"LinearScale"},{"attributes":{"data_source":{"id":"14181","type":"ColumnDataSource"},"glyph":{"id":"14182","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14183","type":"Circle"},"selection_glyph":null,"view":{"id":"14185","type":"CDSView"}},"id":"14184","type":"GlyphRenderer"},{"attributes":{"source":{"id":"14181","type":"ColumnDataSource"}},"id":"14185","type":"CDSView"},{"attributes":{},"id":"14166","type":"PanTool"},{"attributes":{"formatter":{"id":"14186","type":"FuncTickFormatter"},"plot":{"id":"14147","subtype":"Figure","type":"Plot"},"ticker":{"id":"14162","type":"BasicTicker"}},"id":"14161","type":"LinearAxis"},{"attributes":{},"id":"14167","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"14191","type":"BasicTickFormatter"},"plot":{"id":"14147","subtype":"Figure","type":"Plot"},"ticker":{"id":"14157","type":"BasicTicker"}},"id":"14156","type":"LinearAxis"},{"attributes":{"code":"\\n    return Math.floor(tick) + \\" + \\" + (tick % 1).toFixed(2)\\n"},"id":"14186","type":"FuncTickFormatter"},{"attributes":{"overlay":{"id":"14174","type":"BoxAnnotation"}},"id":"14168","type":"BoxZoomTool"},{"attributes":{},"id":"14157","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"14189","type":"Title"},{"attributes":{},"id":"14169","type":"SaveTool"},{"attributes":{"plot":{"id":"14147","subtype":"Figure","type":"Plot"},"ticker":{"id":"14157","type":"BasicTicker"}},"id":"14160","type":"Grid"},{"attributes":{},"id":"14191","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"14156","type":"LinearAxis"}],"left":[{"id":"14161","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"14156","type":"LinearAxis"},{"id":"14160","type":"Grid"},{"id":"14161","type":"LinearAxis"},{"id":"14165","type":"Grid"},{"id":"14174","type":"BoxAnnotation"},{"id":"14184","type":"GlyphRenderer"}],"title":{"id":"14189","type":"Title"},"toolbar":{"id":"14172","type":"Toolbar"},"x_range":{"id":"14148","type":"DataRange1d"},"x_scale":{"id":"14152","type":"LinearScale"},"y_range":{"id":"14150","type":"DataRange1d"},"y_scale":{"id":"14154","type":"LinearScale"}},"id":"14147","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"14147","subtype":"Figure","type":"Plot"},"ticker":{"id":"14162","type":"BasicTicker"}},"id":"14165","type":"Grid"},{"attributes":{},"id":"14162","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"14183","type":"Circle"},{"attributes":{},"id":"14194","type":"Selection"},{"attributes":{},"id":"14171","type":"HelpTool"},{"attributes":{},"id":"14170","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14174","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"14148","type":"DataRange1d"},{"attributes":{},"id":"14195","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"14150","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"14182","type":"Circle"},{"attributes":{},"id":"14152","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14166","type":"PanTool"},{"id":"14167","type":"WheelZoomTool"},{"id":"14168","type":"BoxZoomTool"},{"id":"14169","type":"SaveTool"},{"id":"14170","type":"ResetTool"},{"id":"14171","type":"HelpTool"}]},"id":"14172","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]},"selected":{"id":"14194","type":"Selection"},"selection_policy":{"id":"14195","type":"UnionRenderers"}},"id":"14181","type":"ColumnDataSource"}],"root_ids":["14147"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"243e130a-3cea-4c21-a1ff-c2b235daf0cb","roots":{"14147":"dda86b2e-4fd1-4a50-8e52-3094fc900eaf"}}];
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