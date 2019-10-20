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
      };var element = document.getElementById("793c9423-e10f-4a0b-ae1a-745efbd08863");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '793c9423-e10f-4a0b-ae1a-745efbd08863' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"886a8245-f417-478d-8329-4550ad344e8b":{"roots":{"references":[{"attributes":{},"id":"32963","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"32920","subtype":"Figure","type":"Plot"},"ticker":{"id":"32930","type":"BasicTicker"}},"id":"32933","type":"Grid"},{"attributes":{"below":[{"id":"32929","type":"LinearAxis"}],"left":[{"id":"32934","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32929","type":"LinearAxis"},{"id":"32933","type":"Grid"},{"id":"32934","type":"LinearAxis"},{"id":"32938","type":"Grid"},{"id":"32947","type":"BoxAnnotation"},{"id":"32957","type":"GlyphRenderer"}],"title":{"id":"32959","type":"Title"},"toolbar":{"id":"32945","type":"Toolbar"},"x_range":{"id":"32921","type":"DataRange1d"},"x_scale":{"id":"32925","type":"LinearScale"},"y_range":{"id":"32923","type":"DataRange1d"},"y_scale":{"id":"32927","type":"LinearScale"}},"id":"32920","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32965","type":"UnionRenderers"},{"attributes":{},"id":"32943","type":"ResetTool"},{"attributes":{"formatter":{"id":"32961","type":"BasicTickFormatter"},"plot":{"id":"32920","subtype":"Figure","type":"Plot"},"ticker":{"id":"32935","type":"BasicTicker"}},"id":"32934","type":"LinearAxis"},{"attributes":{},"id":"32966","type":"Selection"},{"attributes":{},"id":"32944","type":"HelpTool"},{"attributes":{"callback":null},"id":"32921","type":"DataRange1d"},{"attributes":{},"id":"32935","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32939","type":"PanTool"},{"id":"32940","type":"WheelZoomTool"},{"id":"32941","type":"BoxZoomTool"},{"id":"32942","type":"SaveTool"},{"id":"32943","type":"ResetTool"},{"id":"32944","type":"HelpTool"}]},"id":"32945","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"32920","subtype":"Figure","type":"Plot"},"ticker":{"id":"32935","type":"BasicTicker"}},"id":"32938","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32966","type":"Selection"},"selection_policy":{"id":"32965","type":"UnionRenderers"}},"id":"32954","type":"ColumnDataSource"},{"attributes":{},"id":"32927","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32956","type":"Diamond"},{"attributes":{"callback":null},"id":"32923","type":"DataRange1d"},{"attributes":{},"id":"32942","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32947","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32955","type":"Diamond"},{"attributes":{},"id":"32925","type":"LinearScale"},{"attributes":{"source":{"id":"32954","type":"ColumnDataSource"}},"id":"32958","type":"CDSView"},{"attributes":{"data_source":{"id":"32954","type":"ColumnDataSource"},"glyph":{"id":"32955","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32956","type":"Diamond"},"selection_glyph":null,"view":{"id":"32958","type":"CDSView"}},"id":"32957","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"32963","type":"BasicTickFormatter"},"plot":{"id":"32920","subtype":"Figure","type":"Plot"},"ticker":{"id":"32930","type":"BasicTicker"}},"id":"32929","type":"LinearAxis"},{"attributes":{},"id":"32939","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"32959","type":"Title"},{"attributes":{"overlay":{"id":"32947","type":"BoxAnnotation"}},"id":"32941","type":"BoxZoomTool"},{"attributes":{},"id":"32940","type":"WheelZoomTool"},{"attributes":{},"id":"32961","type":"BasicTickFormatter"},{"attributes":{},"id":"32930","type":"BasicTicker"}],"root_ids":["32920"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"886a8245-f417-478d-8329-4550ad344e8b","roots":{"32920":"793c9423-e10f-4a0b-ae1a-745efbd08863"}}];
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