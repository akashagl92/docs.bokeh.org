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
      };var element = document.getElementById("61772113-dbc8-4425-8178-f6b267e11349");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '61772113-dbc8-4425-8178-f6b267e11349' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f42646d9-b9c8-430a-b2fa-e66591f39823":{"roots":{"references":[{"attributes":{},"id":"11078","type":"Selection"},{"attributes":{},"id":"11037","type":"BasicTicker"},{"attributes":{},"id":"11081","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"11067","type":"Circle"},{"attributes":{},"id":"11051","type":"HelpTool"},{"attributes":{},"id":"11076","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"11078","type":"Selection"},"selection_policy":{"id":"11079","type":"UnionRenderers"}},"id":"11061","type":"ColumnDataSource"},{"attributes":{},"id":"11046","type":"PanTool"},{"attributes":{},"id":"11047","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"11028","type":"DataRange1d"},{"attributes":{"source":{"id":"11066","type":"ColumnDataSource"}},"id":"11070","type":"CDSView"},{"attributes":{},"id":"11080","type":"Selection"},{"attributes":{"formatter":{"id":"11076","type":"BasicTickFormatter"},"plot":{"id":"11027","subtype":"Figure","type":"Plot"},"ticker":{"id":"11042","type":"BasicTicker"}},"id":"11041","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"11072","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11063","type":"Line"},{"attributes":{},"id":"11042","type":"BasicTicker"},{"attributes":{"overlay":{"id":"11054","type":"BoxAnnotation"}},"id":"11048","type":"BoxZoomTool"},{"attributes":{},"id":"11032","type":"LinearScale"},{"attributes":{"source":{"id":"11061","type":"ColumnDataSource"}},"id":"11065","type":"CDSView"},{"attributes":{},"id":"11074","type":"BasicTickFormatter"},{"attributes":{},"id":"11079","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"11061","type":"ColumnDataSource"},"glyph":{"id":"11062","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11063","type":"Line"},"selection_glyph":null,"view":{"id":"11065","type":"CDSView"}},"id":"11064","type":"GlyphRenderer"},{"attributes":{},"id":"11049","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"11027","subtype":"Figure","type":"Plot"},"ticker":{"id":"11042","type":"BasicTicker"}},"id":"11045","type":"Grid"},{"attributes":{"plot":{"id":"11027","subtype":"Figure","type":"Plot"},"ticker":{"id":"11037","type":"BasicTicker"}},"id":"11040","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11046","type":"PanTool"},{"id":"11047","type":"WheelZoomTool"},{"id":"11048","type":"BoxZoomTool"},{"id":"11049","type":"SaveTool"},{"id":"11050","type":"ResetTool"},{"id":"11051","type":"HelpTool"}]},"id":"11052","type":"Toolbar"},{"attributes":{"below":[{"id":"11036","type":"LinearAxis"}],"left":[{"id":"11041","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11036","type":"LinearAxis"},{"id":"11040","type":"Grid"},{"id":"11041","type":"LinearAxis"},{"id":"11045","type":"Grid"},{"id":"11054","type":"BoxAnnotation"},{"id":"11064","type":"GlyphRenderer"},{"id":"11069","type":"GlyphRenderer"}],"title":{"id":"11072","type":"Title"},"toolbar":{"id":"11052","type":"Toolbar"},"x_range":{"id":"11028","type":"DataRange1d"},"x_scale":{"id":"11032","type":"LinearScale"},"y_range":{"id":"11030","type":"DataRange1d"},"y_scale":{"id":"11034","type":"LinearScale"}},"id":"11027","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"11080","type":"Selection"},"selection_policy":{"id":"11081","type":"UnionRenderers"}},"id":"11066","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"11074","type":"BasicTickFormatter"},"plot":{"id":"11027","subtype":"Figure","type":"Plot"},"ticker":{"id":"11037","type":"BasicTicker"}},"id":"11036","type":"LinearAxis"},{"attributes":{},"id":"11034","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11054","type":"BoxAnnotation"},{"attributes":{},"id":"11050","type":"ResetTool"},{"attributes":{"callback":null},"id":"11030","type":"DataRange1d"},{"attributes":{"data_source":{"id":"11066","type":"ColumnDataSource"},"glyph":{"id":"11067","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11068","type":"Circle"},"selection_glyph":null,"view":{"id":"11070","type":"CDSView"}},"id":"11069","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11062","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"11068","type":"Circle"}],"root_ids":["11027"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"f42646d9-b9c8-430a-b2fa-e66591f39823","roots":{"11027":"61772113-dbc8-4425-8178-f6b267e11349"}}];
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