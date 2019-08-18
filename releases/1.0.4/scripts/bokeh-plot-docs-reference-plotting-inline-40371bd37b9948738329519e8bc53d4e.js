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
      };var element = document.getElementById("8eafb8af-e433-489f-aafc-af7b98637ad6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8eafb8af-e433-489f-aafc-af7b98637ad6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b5ccbe7e-db50-4c50-b637-57a4a1b8d1fa":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"32410","subtype":"Figure","type":"Plot"},"ticker":{"id":"32425","type":"BasicTicker"}},"id":"32428","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32437","type":"BoxAnnotation"},{"attributes":{},"id":"32451","type":"BasicTickFormatter"},{"attributes":{},"id":"32432","type":"SaveTool"},{"attributes":{},"id":"32453","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"32419","type":"LinearAxis"}],"left":[{"id":"32424","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32419","type":"LinearAxis"},{"id":"32423","type":"Grid"},{"id":"32424","type":"LinearAxis"},{"id":"32428","type":"Grid"},{"id":"32437","type":"BoxAnnotation"},{"id":"32447","type":"GlyphRenderer"}],"title":{"id":"32449","type":"Title"},"toolbar":{"id":"32435","type":"Toolbar"},"x_range":{"id":"32411","type":"DataRange1d"},"x_scale":{"id":"32415","type":"LinearScale"},"y_range":{"id":"32413","type":"DataRange1d"},"y_scale":{"id":"32417","type":"LinearScale"}},"id":"32410","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32456","type":"Selection"},{"attributes":{"source":{"id":"32444","type":"ColumnDataSource"}},"id":"32448","type":"CDSView"},{"attributes":{"callback":null},"id":"32413","type":"DataRange1d"},{"attributes":{},"id":"32420","type":"BasicTicker"},{"attributes":{},"id":"32433","type":"ResetTool"},{"attributes":{"formatter":{"id":"32451","type":"BasicTickFormatter"},"plot":{"id":"32410","subtype":"Figure","type":"Plot"},"ticker":{"id":"32425","type":"BasicTicker"}},"id":"32424","type":"LinearAxis"},{"attributes":{},"id":"32434","type":"HelpTool"},{"attributes":{"data_source":{"id":"32444","type":"ColumnDataSource"},"glyph":{"id":"32445","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32446","type":"Asterisk"},"selection_glyph":null,"view":{"id":"32448","type":"CDSView"}},"id":"32447","type":"GlyphRenderer"},{"attributes":{},"id":"32425","type":"BasicTicker"},{"attributes":{"plot":{"id":"32410","subtype":"Figure","type":"Plot"},"ticker":{"id":"32420","type":"BasicTicker"}},"id":"32423","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32456","type":"Selection"},"selection_policy":{"id":"32455","type":"UnionRenderers"}},"id":"32444","type":"ColumnDataSource"},{"attributes":{},"id":"32455","type":"UnionRenderers"},{"attributes":{},"id":"32417","type":"LinearScale"},{"attributes":{},"id":"32415","type":"LinearScale"},{"attributes":{},"id":"32430","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"32411","type":"DataRange1d"},{"attributes":{"overlay":{"id":"32437","type":"BoxAnnotation"}},"id":"32431","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"32453","type":"BasicTickFormatter"},"plot":{"id":"32410","subtype":"Figure","type":"Plot"},"ticker":{"id":"32420","type":"BasicTicker"}},"id":"32419","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"32449","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32446","type":"Asterisk"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32429","type":"PanTool"},{"id":"32430","type":"WheelZoomTool"},{"id":"32431","type":"BoxZoomTool"},{"id":"32432","type":"SaveTool"},{"id":"32433","type":"ResetTool"},{"id":"32434","type":"HelpTool"}]},"id":"32435","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32445","type":"Asterisk"},{"attributes":{},"id":"32429","type":"PanTool"}],"root_ids":["32410"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"b5ccbe7e-db50-4c50-b637-57a4a1b8d1fa","roots":{"32410":"8eafb8af-e433-489f-aafc-af7b98637ad6"}}];
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