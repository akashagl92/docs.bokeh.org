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
      };var element = document.getElementById("89c88331-a357-4f75-964c-9492d11dd7f0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '89c88331-a357-4f75-964c-9492d11dd7f0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ef97ef5e-4c15-4507-96b5-ebb9562c8973":{"roots":{"references":[{"attributes":{},"id":"35165","type":"BasicTickFormatter"},{"attributes":{},"id":"35138","type":"WheelZoomTool"},{"attributes":{},"id":"35170","type":"Selection"},{"attributes":{"overlay":{"id":"35145","type":"BoxAnnotation"}},"id":"35139","type":"BoxZoomTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35153","type":"Line"},{"attributes":{"plot":null,"text":"example"},"id":"35116","type":"Title"},{"attributes":{"callback":null},"id":"35121","type":"DataRange1d"},{"attributes":{},"id":"35140","type":"SaveTool"},{"attributes":{},"id":"35123","type":"LinearScale"},{"attributes":{},"id":"35137","type":"PanTool"},{"attributes":{},"id":"35171","type":"UnionRenderers"},{"attributes":{},"id":"35163","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35137","type":"PanTool"},{"id":"35138","type":"WheelZoomTool"},{"id":"35139","type":"BoxZoomTool"},{"id":"35140","type":"SaveTool"},{"id":"35141","type":"ResetTool"},{"id":"35142","type":"HelpTool"}]},"id":"35143","type":"Toolbar"},{"attributes":{"source":{"id":"35152","type":"ColumnDataSource"}},"id":"35156","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35145","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35158","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35159","type":"Circle"},{"attributes":{"plot":{"id":"35117","subtype":"Figure","type":"Plot"},"ticker":{"id":"35128","type":"BasicTicker"}},"id":"35131","type":"Grid"},{"attributes":{},"id":"35128","type":"BasicTicker"},{"attributes":{},"id":"35125","type":"LinearScale"},{"attributes":{"data_source":{"id":"35152","type":"ColumnDataSource"},"glyph":{"id":"35153","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35154","type":"Line"},"selection_glyph":null,"view":{"id":"35156","type":"CDSView"}},"id":"35155","type":"GlyphRenderer"},{"attributes":{},"id":"35168","type":"Selection"},{"attributes":{"formatter":{"id":"35165","type":"BasicTickFormatter"},"plot":{"id":"35117","subtype":"Figure","type":"Plot"},"ticker":{"id":"35128","type":"BasicTicker"}},"id":"35127","type":"LinearAxis"},{"attributes":{"callback":null},"id":"35119","type":"DataRange1d"},{"attributes":{},"id":"35142","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35168","type":"Selection"},"selection_policy":{"id":"35169","type":"UnionRenderers"}},"id":"35152","type":"ColumnDataSource"},{"attributes":{},"id":"35169","type":"UnionRenderers"},{"attributes":{},"id":"35141","type":"ResetTool"},{"attributes":{"formatter":{"id":"35163","type":"BasicTickFormatter"},"plot":{"id":"35117","subtype":"Figure","type":"Plot"},"ticker":{"id":"35133","type":"BasicTicker"}},"id":"35132","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35170","type":"Selection"},"selection_policy":{"id":"35171","type":"UnionRenderers"}},"id":"35157","type":"ColumnDataSource"},{"attributes":{},"id":"35133","type":"BasicTicker"},{"attributes":{"below":[{"id":"35127","type":"LinearAxis"}],"left":[{"id":"35132","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35127","type":"LinearAxis"},{"id":"35131","type":"Grid"},{"id":"35132","type":"LinearAxis"},{"id":"35136","type":"Grid"},{"id":"35145","type":"BoxAnnotation"},{"id":"35155","type":"GlyphRenderer"},{"id":"35160","type":"GlyphRenderer"}],"title":{"id":"35116","type":"Title"},"toolbar":{"id":"35143","type":"Toolbar"},"x_range":{"id":"35119","type":"DataRange1d"},"x_scale":{"id":"35123","type":"LinearScale"},"y_range":{"id":"35121","type":"DataRange1d"},"y_scale":{"id":"35125","type":"LinearScale"}},"id":"35117","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"35157","type":"ColumnDataSource"}},"id":"35161","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35154","type":"Line"},{"attributes":{"data_source":{"id":"35157","type":"ColumnDataSource"},"glyph":{"id":"35158","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35159","type":"Circle"},"selection_glyph":null,"view":{"id":"35161","type":"CDSView"}},"id":"35160","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"35117","subtype":"Figure","type":"Plot"},"ticker":{"id":"35133","type":"BasicTicker"}},"id":"35136","type":"Grid"}],"root_ids":["35117"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"ef97ef5e-4c15-4507-96b5-ebb9562c8973","roots":{"35117":"89c88331-a357-4f75-964c-9492d11dd7f0"}}];
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