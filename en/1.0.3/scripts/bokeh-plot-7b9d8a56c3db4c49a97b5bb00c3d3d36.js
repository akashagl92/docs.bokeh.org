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
      };var element = document.getElementById("9f56c066-3878-48a7-9580-be6437ca55bc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f56c066-3878-48a7-9580-be6437ca55bc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"304b58af-d58d-4e2a-b995-3bbd83cf7866":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14808","type":"Selection"},"selection_policy":{"id":"14809","type":"UnionRenderers"}},"id":"14796","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"14789","type":"BoxAnnotation"}},"id":"14783","type":"BoxZoomTool"},{"attributes":{},"id":"14785","type":"ResetTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"14762","subtype":"Figure","type":"Plot"},"ticker":{"id":"14772","type":"BasicTicker"}},"id":"14775","type":"Grid"},{"attributes":{},"id":"14767","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"14801","type":"Title"},{"attributes":{},"id":"14781","type":"PanTool"},{"attributes":{},"id":"14809","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14797","type":"Circle"},{"attributes":{"formatter":{"id":"14803","type":"BasicTickFormatter"},"plot":{"id":"14762","subtype":"Figure","type":"Plot"},"ticker":{"id":"14777","type":"BasicTicker"}},"id":"14776","type":"LinearAxis"},{"attributes":{},"id":"14786","type":"HelpTool"},{"attributes":{},"id":"14772","type":"BasicTicker"},{"attributes":{"callback":null},"id":"14763","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14798","type":"Circle"},{"attributes":{"below":[{"id":"14771","type":"LinearAxis"}],"left":[{"id":"14776","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14771","type":"LinearAxis"},{"id":"14775","type":"Grid"},{"id":"14776","type":"LinearAxis"},{"id":"14780","type":"Grid"},{"id":"14789","type":"BoxAnnotation"},{"id":"14799","type":"GlyphRenderer"}],"title":{"id":"14801","type":"Title"},"toolbar":{"id":"14787","type":"Toolbar"},"x_range":{"id":"14763","type":"DataRange1d"},"x_scale":{"id":"14767","type":"LinearScale"},"y_range":{"id":"14765","type":"DataRange1d"},"y_scale":{"id":"14769","type":"LinearScale"}},"id":"14762","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14777","type":"BasicTicker"},{"attributes":{},"id":"14784","type":"SaveTool"},{"attributes":{"formatter":{"id":"14805","type":"BasicTickFormatter"},"plot":{"id":"14762","subtype":"Figure","type":"Plot"},"ticker":{"id":"14772","type":"BasicTicker"}},"id":"14771","type":"LinearAxis"},{"attributes":{},"id":"14782","type":"WheelZoomTool"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"grid_line_dash":[6,4],"plot":{"id":"14762","subtype":"Figure","type":"Plot"},"ticker":{"id":"14777","type":"BasicTicker"}},"id":"14780","type":"Grid"},{"attributes":{"source":{"id":"14796","type":"ColumnDataSource"}},"id":"14800","type":"CDSView"},{"attributes":{},"id":"14769","type":"LinearScale"},{"attributes":{},"id":"14805","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14789","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"14765","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14781","type":"PanTool"},{"id":"14782","type":"WheelZoomTool"},{"id":"14783","type":"BoxZoomTool"},{"id":"14784","type":"SaveTool"},{"id":"14785","type":"ResetTool"},{"id":"14786","type":"HelpTool"}]},"id":"14787","type":"Toolbar"},{"attributes":{"data_source":{"id":"14796","type":"ColumnDataSource"},"glyph":{"id":"14797","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14798","type":"Circle"},"selection_glyph":null,"view":{"id":"14800","type":"CDSView"}},"id":"14799","type":"GlyphRenderer"},{"attributes":{},"id":"14803","type":"BasicTickFormatter"},{"attributes":{},"id":"14808","type":"Selection"}],"root_ids":["14762"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"304b58af-d58d-4e2a-b995-3bbd83cf7866","roots":{"14762":"9f56c066-3878-48a7-9580-be6437ca55bc"}}];
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