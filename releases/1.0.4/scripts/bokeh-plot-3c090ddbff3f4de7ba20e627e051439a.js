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
      };var element = document.getElementById("4c422888-293d-4fd2-8455-efddfde8222e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c422888-293d-4fd2-8455-efddfde8222e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"88bf8337-6ba7-4cbd-a07b-d45d8874c9b0":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"12151","subtype":"Figure","type":"Plot"},"ticker":{"id":"12166","type":"BasicTicker"}},"id":"12169","type":"Grid"},{"attributes":{},"id":"12161","type":"BasicTicker"},{"attributes":{},"id":"12166","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12186","type":"Square"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"12197","type":"Selection"},"selection_policy":{"id":"12196","type":"UnionRenderers"}},"id":"12185","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"12160","type":"LinearAxis"}],"left":[{"id":"12165","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12160","type":"LinearAxis"},{"id":"12164","type":"Grid"},{"id":"12165","type":"LinearAxis"},{"id":"12169","type":"Grid"},{"id":"12178","type":"BoxAnnotation"},{"id":"12188","type":"GlyphRenderer"}],"title":{"id":"12190","type":"Title"},"toolbar":{"id":"12176","type":"Toolbar"},"x_range":{"id":"12152","type":"DataRange1d"},"x_scale":{"id":"12156","type":"LinearScale"},"y_range":{"id":"12154","type":"DataRange1d"},"y_scale":{"id":"12158","type":"LinearScale"}},"id":"12151","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"12190","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12187","type":"Square"},{"attributes":{"formatter":{"id":"12192","type":"BasicTickFormatter"},"plot":{"id":"12151","subtype":"Figure","type":"Plot"},"ticker":{"id":"12166","type":"BasicTicker"}},"id":"12165","type":"LinearAxis"},{"attributes":{},"id":"12192","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"12152","type":"DataRange1d"},{"attributes":{},"id":"12194","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"12154","type":"DataRange1d"},{"attributes":{"data_source":{"id":"12185","type":"ColumnDataSource"},"glyph":{"id":"12186","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12187","type":"Square"},"selection_glyph":null,"view":{"id":"12189","type":"CDSView"}},"id":"12188","type":"GlyphRenderer"},{"attributes":{},"id":"12156","type":"LinearScale"},{"attributes":{},"id":"12196","type":"UnionRenderers"},{"attributes":{},"id":"12173","type":"SaveTool"},{"attributes":{},"id":"12175","type":"HelpTool"},{"attributes":{"plot":{"id":"12151","subtype":"Figure","type":"Plot"},"ticker":{"id":"12161","type":"BasicTicker"}},"id":"12164","type":"Grid"},{"attributes":{},"id":"12158","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12170","type":"PanTool"},{"id":"12171","type":"WheelZoomTool"},{"id":"12172","type":"BoxZoomTool"},{"id":"12173","type":"SaveTool"},{"id":"12174","type":"ResetTool"},{"id":"12175","type":"HelpTool"}]},"id":"12176","type":"Toolbar"},{"attributes":{},"id":"12174","type":"ResetTool"},{"attributes":{"formatter":{"id":"12194","type":"BasicTickFormatter"},"plot":{"id":"12151","subtype":"Figure","type":"Plot"},"ticker":{"id":"12161","type":"BasicTicker"}},"id":"12160","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12178","type":"BoxAnnotation"},{"attributes":{},"id":"12171","type":"WheelZoomTool"},{"attributes":{},"id":"12197","type":"Selection"},{"attributes":{},"id":"12170","type":"PanTool"},{"attributes":{"source":{"id":"12185","type":"ColumnDataSource"}},"id":"12189","type":"CDSView"},{"attributes":{"overlay":{"id":"12178","type":"BoxAnnotation"}},"id":"12172","type":"BoxZoomTool"}],"root_ids":["12151"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"88bf8337-6ba7-4cbd-a07b-d45d8874c9b0","roots":{"12151":"4c422888-293d-4fd2-8455-efddfde8222e"}}];
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