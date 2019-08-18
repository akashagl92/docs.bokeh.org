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
      };var element = document.getElementById("6f8d74e1-38af-4997-a5f7-7e23fabc1b2b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6f8d74e1-38af-4997-a5f7-7e23fabc1b2b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"d540577e-661a-4bc0-8630-6fd1ba29ebbc":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"2902","subtype":"Figure","type":"Plot"},"ticker":{"id":"2917","type":"BasicTicker"}},"id":"2920","type":"Grid"},{"attributes":{"source":{"id":"2928","type":"ColumnDataSource"}},"id":"2932","type":"CDSView"},{"attributes":{"callback":null},"id":"2903","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2921","type":"PanTool"},{"id":"2922","type":"ResetTool"},{"id":"2923","type":"SaveTool"}]},"id":"2924","type":"Toolbar"},{"attributes":{"formatter":{"id":"2937","type":"BasicTickFormatter"},"plot":{"id":"2902","subtype":"Figure","type":"Plot"},"ticker":{"id":"2912","type":"BasicTicker"}},"id":"2911","type":"LinearAxis"},{"attributes":{},"id":"2937","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"2905","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"2933","type":"Title"},{"attributes":{},"id":"2921","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"2929","type":"Circle"},{"attributes":{"plot":{"id":"2902","subtype":"Figure","type":"Plot"},"ticker":{"id":"2912","type":"BasicTicker"}},"id":"2915","type":"Grid"},{"attributes":{},"id":"2907","type":"LinearScale"},{"attributes":{"formatter":{"id":"2935","type":"BasicTickFormatter"},"plot":{"id":"2902","subtype":"Figure","type":"Plot"},"ticker":{"id":"2917","type":"BasicTicker"}},"id":"2916","type":"LinearAxis"},{"attributes":{},"id":"2909","type":"LinearScale"},{"attributes":{"data_source":{"id":"2928","type":"ColumnDataSource"},"glyph":{"id":"2929","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2930","type":"Circle"},"selection_glyph":null,"view":{"id":"2932","type":"CDSView"}},"id":"2931","type":"GlyphRenderer"},{"attributes":{},"id":"2923","type":"SaveTool"},{"attributes":{},"id":"2912","type":"BasicTicker"},{"attributes":{},"id":"2939","type":"UnionRenderers"},{"attributes":{},"id":"2922","type":"ResetTool"},{"attributes":{},"id":"2940","type":"Selection"},{"attributes":{"below":[{"id":"2911","type":"LinearAxis"}],"left":[{"id":"2916","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2911","type":"LinearAxis"},{"id":"2915","type":"Grid"},{"id":"2916","type":"LinearAxis"},{"id":"2920","type":"Grid"},{"id":"2931","type":"GlyphRenderer"}],"title":{"id":"2933","type":"Title"},"toolbar":{"id":"2924","type":"Toolbar"},"x_range":{"id":"2903","type":"DataRange1d"},"x_scale":{"id":"2907","type":"LinearScale"},"y_range":{"id":"2905","type":"DataRange1d"},"y_scale":{"id":"2909","type":"LinearScale"}},"id":"2902","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2935","type":"BasicTickFormatter"},{"attributes":{},"id":"2917","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"2930","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]},"selected":{"id":"2940","type":"Selection"},"selection_policy":{"id":"2939","type":"UnionRenderers"}},"id":"2928","type":"ColumnDataSource"}],"root_ids":["2902"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"d540577e-661a-4bc0-8630-6fd1ba29ebbc","roots":{"2902":"6f8d74e1-38af-4997-a5f7-7e23fabc1b2b"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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