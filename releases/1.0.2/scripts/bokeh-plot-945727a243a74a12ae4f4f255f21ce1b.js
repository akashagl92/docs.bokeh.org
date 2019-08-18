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
      };var element = document.getElementById("49ad17b4-0d73-4b95-bf37-a224ccddfa73");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '49ad17b4-0d73-4b95-bf37-a224ccddfa73' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4743ecc6-5eb4-4f1d-9ae7-31b6c6d602a2":{"roots":{"references":[{"attributes":{"source":{"id":"12182","type":"ColumnDataSource"}},"id":"12186","type":"CDSView"},{"attributes":{"overlay":{"id":"12175","type":"BoxAnnotation"}},"id":"12169","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"12148","subtype":"Figure","type":"Plot"},"ticker":{"id":"12158","type":"BasicTicker"}},"id":"12161","type":"Grid"},{"attributes":{},"id":"12155","type":"LinearScale"},{"attributes":{},"id":"12170","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"12188","type":"Title"},{"attributes":{},"id":"12171","type":"ResetTool"},{"attributes":{"formatter":{"id":"12190","type":"BasicTickFormatter"},"plot":{"id":"12148","subtype":"Figure","type":"Plot"},"ticker":{"id":"12158","type":"BasicTicker"}},"id":"12157","type":"LinearAxis"},{"attributes":{},"id":"12190","type":"BasicTickFormatter"},{"attributes":{},"id":"12163","type":"BasicTicker"},{"attributes":{},"id":"12158","type":"BasicTicker"},{"attributes":{},"id":"12192","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"12148","subtype":"Figure","type":"Plot"},"ticker":{"id":"12163","type":"BasicTicker"}},"id":"12166","type":"Grid"},{"attributes":{"formatter":{"id":"12192","type":"BasicTickFormatter"},"plot":{"id":"12148","subtype":"Figure","type":"Plot"},"ticker":{"id":"12163","type":"BasicTicker"}},"id":"12162","type":"LinearAxis"},{"attributes":{},"id":"12194","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12183","type":"Square"},{"attributes":{},"id":"12172","type":"HelpTool"},{"attributes":{"below":[{"id":"12157","type":"LinearAxis"}],"left":[{"id":"12162","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12157","type":"LinearAxis"},{"id":"12161","type":"Grid"},{"id":"12162","type":"LinearAxis"},{"id":"12166","type":"Grid"},{"id":"12175","type":"BoxAnnotation"},{"id":"12185","type":"GlyphRenderer"}],"title":{"id":"12188","type":"Title"},"toolbar":{"id":"12173","type":"Toolbar"},"x_range":{"id":"12149","type":"DataRange1d"},"x_scale":{"id":"12153","type":"LinearScale"},"y_range":{"id":"12151","type":"DataRange1d"},"y_scale":{"id":"12155","type":"LinearScale"}},"id":"12148","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12195","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12184","type":"Square"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12167","type":"PanTool"},{"id":"12168","type":"WheelZoomTool"},{"id":"12169","type":"BoxZoomTool"},{"id":"12170","type":"SaveTool"},{"id":"12171","type":"ResetTool"},{"id":"12172","type":"HelpTool"}]},"id":"12173","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"12195","type":"Selection"},"selection_policy":{"id":"12194","type":"UnionRenderers"}},"id":"12182","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"12149","type":"DataRange1d"},{"attributes":{"data_source":{"id":"12182","type":"ColumnDataSource"},"glyph":{"id":"12183","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12184","type":"Square"},"selection_glyph":null,"view":{"id":"12186","type":"CDSView"}},"id":"12185","type":"GlyphRenderer"},{"attributes":{},"id":"12167","type":"PanTool"},{"attributes":{"callback":null},"id":"12151","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12175","type":"BoxAnnotation"},{"attributes":{},"id":"12153","type":"LinearScale"},{"attributes":{},"id":"12168","type":"WheelZoomTool"}],"root_ids":["12148"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"4743ecc6-5eb4-4f1d-9ae7-31b6c6d602a2","roots":{"12148":"49ad17b4-0d73-4b95-bf37-a224ccddfa73"}}];
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