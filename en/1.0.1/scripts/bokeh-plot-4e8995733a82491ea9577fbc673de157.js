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
      };var element = document.getElementById("682867f1-c565-438a-a91c-7f86ff9e036f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '682867f1-c565-438a-a91c-7f86ff9e036f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d3b63a02-a53e-468d-817a-79857d15490d":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"2930","type":"Circle"},{"attributes":{"formatter":{"id":"2938","type":"BasicTickFormatter"},"plot":{"id":"2902","subtype":"Figure","type":"Plot"},"ticker":{"id":"2917","type":"BasicTicker"}},"id":"2916","type":"LinearAxis"},{"attributes":{},"id":"2909","type":"LinearScale"},{"attributes":{},"id":"2923","type":"SaveTool"},{"attributes":{},"id":"2912","type":"BasicTicker"},{"attributes":{},"id":"2940","type":"UnionRenderers"},{"attributes":{},"id":"2922","type":"ResetTool"},{"attributes":{},"id":"2917","type":"BasicTicker"},{"attributes":{},"id":"2938","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2928","type":"ColumnDataSource"},"glyph":{"id":"2929","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2930","type":"Circle"},"selection_glyph":null,"view":{"id":"2932","type":"CDSView"}},"id":"2931","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2911","type":"LinearAxis"}],"left":[{"id":"2916","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2911","type":"LinearAxis"},{"id":"2915","type":"Grid"},{"id":"2916","type":"LinearAxis"},{"id":"2920","type":"Grid"},{"id":"2931","type":"GlyphRenderer"}],"title":{"id":"2934","type":"Title"},"toolbar":{"id":"2924","type":"Toolbar"},"x_range":{"id":"2903","type":"DataRange1d"},"x_scale":{"id":"2907","type":"LinearScale"},"y_range":{"id":"2905","type":"DataRange1d"},"y_scale":{"id":"2909","type":"LinearScale"}},"id":"2902","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"2902","subtype":"Figure","type":"Plot"},"ticker":{"id":"2917","type":"BasicTicker"}},"id":"2920","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"2929","type":"Circle"},{"attributes":{"callback":null},"id":"2903","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"2934","type":"Title"},{"attributes":{},"id":"2936","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]},"selected":{"id":"2939","type":"Selection"},"selection_policy":{"id":"2940","type":"UnionRenderers"}},"id":"2928","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2928","type":"ColumnDataSource"}},"id":"2932","type":"CDSView"},{"attributes":{},"id":"2939","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2921","type":"PanTool"},{"id":"2922","type":"ResetTool"},{"id":"2923","type":"SaveTool"}]},"id":"2924","type":"Toolbar"},{"attributes":{"formatter":{"id":"2936","type":"BasicTickFormatter"},"plot":{"id":"2902","subtype":"Figure","type":"Plot"},"ticker":{"id":"2912","type":"BasicTicker"}},"id":"2911","type":"LinearAxis"},{"attributes":{},"id":"2921","type":"PanTool"},{"attributes":{"callback":null},"id":"2905","type":"DataRange1d"},{"attributes":{"plot":{"id":"2902","subtype":"Figure","type":"Plot"},"ticker":{"id":"2912","type":"BasicTicker"}},"id":"2915","type":"Grid"},{"attributes":{},"id":"2907","type":"LinearScale"}],"root_ids":["2902"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"d3b63a02-a53e-468d-817a-79857d15490d","roots":{"2902":"682867f1-c565-438a-a91c-7f86ff9e036f"}}];
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