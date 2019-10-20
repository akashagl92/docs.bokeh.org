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
      };var element = document.getElementById("d8068b6d-c471-46e7-be55-51d396dfcd64");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd8068b6d-c471-46e7-be55-51d396dfcd64' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5fac4bd3-77bb-4eec-9f06-e11902844aee":{"roots":{"references":[{"attributes":{"source":{"id":"33961","type":"ColumnDataSource"}},"id":"33965","type":"CDSView"},{"attributes":{},"id":"33934","type":"LinearScale"},{"attributes":{},"id":"33950","type":"ResetTool"},{"attributes":{},"id":"33946","type":"PanTool"},{"attributes":{"formatter":{"id":"33970","type":"BasicTickFormatter"},"plot":{"id":"33927","subtype":"Figure","type":"Plot"},"ticker":{"id":"33937","type":"BasicTicker"}},"id":"33936","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"33966","type":"Title"},{"attributes":{},"id":"33947","type":"WheelZoomTool"},{"attributes":{},"id":"33937","type":"BasicTicker"},{"attributes":{},"id":"33968","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"33954","type":"BoxAnnotation"}},"id":"33948","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"33961","type":"ColumnDataSource"},"glyph":{"id":"33962","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33963","type":"Patch"},"selection_glyph":null,"view":{"id":"33965","type":"CDSView"}},"id":"33964","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"33927","subtype":"Figure","type":"Plot"},"ticker":{"id":"33937","type":"BasicTicker"}},"id":"33940","type":"Grid"},{"attributes":{},"id":"33970","type":"BasicTickFormatter"},{"attributes":{},"id":"33949","type":"SaveTool"},{"attributes":{"below":[{"id":"33936","type":"LinearAxis"}],"left":[{"id":"33941","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33936","type":"LinearAxis"},{"id":"33940","type":"Grid"},{"id":"33941","type":"LinearAxis"},{"id":"33945","type":"Grid"},{"id":"33954","type":"BoxAnnotation"},{"id":"33964","type":"GlyphRenderer"}],"title":{"id":"33966","type":"Title"},"toolbar":{"id":"33952","type":"Toolbar"},"x_range":{"id":"33928","type":"DataRange1d"},"x_scale":{"id":"33932","type":"LinearScale"},"y_range":{"id":"33930","type":"DataRange1d"},"y_scale":{"id":"33934","type":"LinearScale"}},"id":"33927","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"33963","type":"Patch"},{"attributes":{"formatter":{"id":"33968","type":"BasicTickFormatter"},"plot":{"id":"33927","subtype":"Figure","type":"Plot"},"ticker":{"id":"33942","type":"BasicTicker"}},"id":"33941","type":"LinearAxis"},{"attributes":{},"id":"33972","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3,2],"y":[6,7,2,2]},"selected":{"id":"33973","type":"Selection"},"selection_policy":{"id":"33972","type":"UnionRenderers"}},"id":"33961","type":"ColumnDataSource"},{"attributes":{},"id":"33942","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33954","type":"BoxAnnotation"},{"attributes":{},"id":"33973","type":"Selection"},{"attributes":{"callback":null},"id":"33928","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"33927","subtype":"Figure","type":"Plot"},"ticker":{"id":"33942","type":"BasicTicker"}},"id":"33945","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33946","type":"PanTool"},{"id":"33947","type":"WheelZoomTool"},{"id":"33948","type":"BoxZoomTool"},{"id":"33949","type":"SaveTool"},{"id":"33950","type":"ResetTool"},{"id":"33951","type":"HelpTool"}]},"id":"33952","type":"Toolbar"},{"attributes":{},"id":"33932","type":"LinearScale"},{"attributes":{"fill_color":"#99d8c9","line_color":"#99d8c9","x":{"field":"x"},"y":{"field":"y"}},"id":"33962","type":"Patch"},{"attributes":{"callback":null},"id":"33930","type":"DataRange1d"},{"attributes":{},"id":"33951","type":"HelpTool"}],"root_ids":["33927"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"5fac4bd3-77bb-4eec-9f06-e11902844aee","roots":{"33927":"d8068b6d-c471-46e7-be55-51d396dfcd64"}}];
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