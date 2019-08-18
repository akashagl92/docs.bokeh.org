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
      };var element = document.getElementById("52bd4fae-9199-4e78-9f8c-cba5f2f6edf8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '52bd4fae-9199-4e78-9f8c-cba5f2f6edf8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"a92b134b-c361-4378-8ebc-4a1b5cdf7d86":{"roots":{"references":[{"attributes":{},"id":"32494","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32498","type":"PanTool"},{"id":"32499","type":"WheelZoomTool"},{"id":"32500","type":"BoxZoomTool"},{"id":"32501","type":"SaveTool"},{"id":"32502","type":"ResetTool"},{"id":"32503","type":"HelpTool"}]},"id":"32504","type":"Toolbar"},{"attributes":{},"id":"32484","type":"LinearScale"},{"attributes":{"overlay":{"id":"32506","type":"BoxAnnotation"}},"id":"32500","type":"BoxZoomTool"},{"attributes":{},"id":"32525","type":"Selection"},{"attributes":{},"id":"32521","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32521","type":"BasicTickFormatter"},"plot":{"id":"32479","subtype":"Figure","type":"Plot"},"ticker":{"id":"32489","type":"BasicTicker"}},"id":"32488","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"32519","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32525","type":"Selection"},"selection_policy":{"id":"32526","type":"UnionRenderers"}},"id":"32513","type":"ColumnDataSource"},{"attributes":{},"id":"32489","type":"BasicTicker"},{"attributes":{},"id":"32498","type":"PanTool"},{"attributes":{},"id":"32499","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"32488","type":"LinearAxis"}],"left":[{"id":"32493","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32488","type":"LinearAxis"},{"id":"32492","type":"Grid"},{"id":"32493","type":"LinearAxis"},{"id":"32497","type":"Grid"},{"id":"32506","type":"BoxAnnotation"},{"id":"32516","type":"GlyphRenderer"}],"title":{"id":"32519","type":"Title"},"toolbar":{"id":"32504","type":"Toolbar"},"x_range":{"id":"32480","type":"DataRange1d"},"x_scale":{"id":"32484","type":"LinearScale"},"y_range":{"id":"32482","type":"DataRange1d"},"y_scale":{"id":"32486","type":"LinearScale"}},"id":"32479","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"32480","type":"DataRange1d"},{"attributes":{},"id":"32502","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"32479","subtype":"Figure","type":"Plot"},"ticker":{"id":"32494","type":"BasicTicker"}},"id":"32497","type":"Grid"},{"attributes":{},"id":"32523","type":"BasicTickFormatter"},{"attributes":{},"id":"32526","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32514","type":"Circle"},{"attributes":{"source":{"id":"32513","type":"ColumnDataSource"}},"id":"32517","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32515","type":"Circle"},{"attributes":{"data_source":{"id":"32513","type":"ColumnDataSource"},"glyph":{"id":"32514","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32515","type":"Circle"},"selection_glyph":null,"view":{"id":"32517","type":"CDSView"}},"id":"32516","type":"GlyphRenderer"},{"attributes":{},"id":"32503","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32506","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"32482","type":"DataRange1d"},{"attributes":{"plot":{"id":"32479","subtype":"Figure","type":"Plot"},"ticker":{"id":"32489","type":"BasicTicker"}},"id":"32492","type":"Grid"},{"attributes":{},"id":"32486","type":"LinearScale"},{"attributes":{"formatter":{"id":"32523","type":"BasicTickFormatter"},"plot":{"id":"32479","subtype":"Figure","type":"Plot"},"ticker":{"id":"32494","type":"BasicTicker"}},"id":"32493","type":"LinearAxis"},{"attributes":{},"id":"32501","type":"SaveTool"}],"root_ids":["32479"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"a92b134b-c361-4378-8ebc-4a1b5cdf7d86","roots":{"32479":"52bd4fae-9199-4e78-9f8c-cba5f2f6edf8"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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