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
      };var element = document.getElementById("93571d52-c254-47bf-8c31-3ec72bd12187");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '93571d52-c254-47bf-8c31-3ec72bd12187' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2b0f422b-1de6-49b6-8039-0b9abd63a8f7":{"roots":{"references":[{"attributes":{},"id":"17674","type":"LinearScale"},{"attributes":{"source":{"id":"17703","type":"ColumnDataSource"}},"id":"17707","type":"CDSView"},{"attributes":{},"id":"17676","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"17717","type":"Selection"},"selection_policy":{"id":"17716","type":"UnionRenderers"}},"id":"17703","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"17710","type":"BasicTickFormatter"},"plot":{"id":"17668","subtype":"Figure","type":"Plot"},"ticker":{"id":"17679","type":"BasicTicker"}},"id":"17678","type":"LinearAxis"},{"attributes":{},"id":"17710","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"17698","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"17698","type":"PolyAnnotation"}},"id":"17690","type":"LassoSelectTool"},{"attributes":{},"id":"17712","type":"BasicTickFormatter"},{"attributes":{},"id":"17684","type":"BasicTicker"},{"attributes":{},"id":"17679","type":"BasicTicker"},{"attributes":{"data_source":{"id":"17703","type":"ColumnDataSource"},"glyph":{"id":"17704","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17705","type":"Circle"},"selection_glyph":null,"view":{"id":"17707","type":"CDSView"}},"id":"17706","type":"GlyphRenderer"},{"attributes":{},"id":"17691","type":"ResetTool"},{"attributes":{},"id":"17717","type":"Selection"},{"attributes":{"formatter":{"id":"17712","type":"BasicTickFormatter"},"plot":{"id":"17668","subtype":"Figure","type":"Plot"},"ticker":{"id":"17684","type":"BasicTicker"}},"id":"17683","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17692","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"17678","type":"LinearAxis"}],"left":[{"id":"17683","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17678","type":"LinearAxis"},{"id":"17682","type":"Grid"},{"id":"17683","type":"LinearAxis"},{"id":"17687","type":"Grid"},{"id":"17692","type":"BoxAnnotation"},{"id":"17695","type":"BoxAnnotation"},{"id":"17698","type":"PolyAnnotation"},{"id":"17706","type":"GlyphRenderer"}],"title":{"id":"17667","type":"Title"},"toolbar":{"id":"17694","type":"Toolbar"},"x_range":{"id":"17670","type":"DataRange1d"},"x_scale":{"id":"17674","type":"LinearScale"},"y_range":{"id":"17672","type":"DataRange1d"},"y_scale":{"id":"17676","type":"LinearScale"}},"id":"17668","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"17667","type":"Title"},{"attributes":{"plot":{"id":"17668","subtype":"Figure","type":"Plot"},"ticker":{"id":"17679","type":"BasicTicker"}},"id":"17682","type":"Grid"},{"attributes":{},"id":"17716","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17704","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17688","type":"BoxSelectTool"},{"id":"17689","type":"BoxZoomTool"},{"id":"17690","type":"LassoSelectTool"},{"id":"17691","type":"ResetTool"}]},"id":"17694","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17695","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"17695","type":"BoxAnnotation"}},"id":"17689","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"17670","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"17668","subtype":"Figure","type":"Plot"},"ticker":{"id":"17684","type":"BasicTicker"}},"id":"17687","type":"Grid"},{"attributes":{"callback":null},"id":"17672","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17705","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"17692","type":"BoxAnnotation"}},"id":"17688","type":"BoxSelectTool"}],"root_ids":["17668"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"2b0f422b-1de6-49b6-8039-0b9abd63a8f7","roots":{"17668":"93571d52-c254-47bf-8c31-3ec72bd12187"}}];
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