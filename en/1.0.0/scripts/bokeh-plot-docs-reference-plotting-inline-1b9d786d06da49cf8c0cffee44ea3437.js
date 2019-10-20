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
      };var element = document.getElementById("5c36654a-d032-4ee9-a8f6-6c5cd236a948");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5c36654a-d032-4ee9-a8f6-6c5cd236a948' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"df7fbdee-77bb-4410-8427-9ae185327ceb":{"roots":{"references":[{"attributes":{},"id":"33916","type":"LinearScale"},{"attributes":{},"id":"33931","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"33947","type":"Patch"},{"attributes":{},"id":"33930","type":"PanTool"},{"attributes":{"source":{"id":"33945","type":"ColumnDataSource"}},"id":"33949","type":"CDSView"},{"attributes":{"callback":null},"id":"33912","type":"DataRange1d"},{"attributes":{"data_source":{"id":"33945","type":"ColumnDataSource"},"glyph":{"id":"33946","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33947","type":"Patch"},"selection_glyph":null,"view":{"id":"33949","type":"CDSView"}},"id":"33948","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,2],"y":[6,7,2,2]},"selected":{"id":"33957","type":"Selection"},"selection_policy":{"id":"33958","type":"UnionRenderers"}},"id":"33945","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"33911","subtype":"Figure","type":"Plot"},"ticker":{"id":"33921","type":"BasicTicker"}},"id":"33924","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"33951","type":"Title"},{"attributes":{},"id":"33934","type":"ResetTool"},{"attributes":{"fill_color":"#99d8c9","line_color":"#99d8c9","x":{"field":"x"},"y":{"field":"y"}},"id":"33946","type":"Patch"},{"attributes":{"formatter":{"id":"33955","type":"BasicTickFormatter"},"plot":{"id":"33911","subtype":"Figure","type":"Plot"},"ticker":{"id":"33926","type":"BasicTicker"}},"id":"33925","type":"LinearAxis"},{"attributes":{},"id":"33921","type":"BasicTicker"},{"attributes":{},"id":"33953","type":"BasicTickFormatter"},{"attributes":{},"id":"33926","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"33911","subtype":"Figure","type":"Plot"},"ticker":{"id":"33926","type":"BasicTicker"}},"id":"33929","type":"Grid"},{"attributes":{},"id":"33955","type":"BasicTickFormatter"},{"attributes":{},"id":"33935","type":"HelpTool"},{"attributes":{},"id":"33958","type":"UnionRenderers"},{"attributes":{},"id":"33957","type":"Selection"},{"attributes":{},"id":"33933","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33930","type":"PanTool"},{"id":"33931","type":"WheelZoomTool"},{"id":"33932","type":"BoxZoomTool"},{"id":"33933","type":"SaveTool"},{"id":"33934","type":"ResetTool"},{"id":"33935","type":"HelpTool"}]},"id":"33936","type":"Toolbar"},{"attributes":{},"id":"33918","type":"LinearScale"},{"attributes":{"overlay":{"id":"33938","type":"BoxAnnotation"}},"id":"33932","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"33914","type":"DataRange1d"},{"attributes":{"below":[{"id":"33920","type":"LinearAxis"}],"left":[{"id":"33925","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33920","type":"LinearAxis"},{"id":"33924","type":"Grid"},{"id":"33925","type":"LinearAxis"},{"id":"33929","type":"Grid"},{"id":"33938","type":"BoxAnnotation"},{"id":"33948","type":"GlyphRenderer"}],"title":{"id":"33951","type":"Title"},"toolbar":{"id":"33936","type":"Toolbar"},"x_range":{"id":"33912","type":"DataRange1d"},"x_scale":{"id":"33916","type":"LinearScale"},"y_range":{"id":"33914","type":"DataRange1d"},"y_scale":{"id":"33918","type":"LinearScale"}},"id":"33911","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"33953","type":"BasicTickFormatter"},"plot":{"id":"33911","subtype":"Figure","type":"Plot"},"ticker":{"id":"33921","type":"BasicTicker"}},"id":"33920","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33938","type":"BoxAnnotation"}],"root_ids":["33911"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"df7fbdee-77bb-4410-8427-9ae185327ceb","roots":{"33911":"5c36654a-d032-4ee9-a8f6-6c5cd236a948"}}];
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