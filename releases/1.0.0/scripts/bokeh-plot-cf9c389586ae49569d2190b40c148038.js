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
      };var element = document.getElementById("bb7497a9-c9df-4a18-9d8e-e2eb148fa308");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb7497a9-c9df-4a18-9d8e-e2eb148fa308' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"94654888-9357-41e8-b577-2a3200c64563":{"roots":{"references":[{"attributes":{"formatter":{"id":"17456","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"17414","subtype":"Figure","type":"Plot"},"ticker":{"id":"17424","type":"BasicTicker"}},"id":"17423","type":"LinearAxis"},{"attributes":{},"id":"17436","type":"SaveTool"},{"attributes":{"plot":{"id":"17414","subtype":"Figure","type":"Plot"},"ticker":{"id":"17424","type":"BasicTicker"}},"id":"17427","type":"Grid"},{"attributes":{},"id":"17433","type":"PanTool"},{"attributes":{"source":{"id":"17448","type":"ColumnDataSource"}},"id":"17452","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"17460","type":"Selection"},"selection_policy":{"id":"17461","type":"UnionRenderers"}},"id":"17448","type":"ColumnDataSource"},{"attributes":{},"id":"17461","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"17417","type":"DataRange1d"},{"attributes":{},"id":"17456","type":"BasicTickFormatter"},{"attributes":{},"id":"17438","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17450","type":"Circle"},{"attributes":{},"id":"17421","type":"LinearScale"},{"attributes":{},"id":"17437","type":"ResetTool"},{"attributes":{},"id":"17419","type":"LinearScale"},{"attributes":{"below":[{"id":"17423","type":"LinearAxis"}],"left":[{"id":"17428","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17423","type":"LinearAxis"},{"id":"17427","type":"Grid"},{"id":"17428","type":"LinearAxis"},{"id":"17432","type":"Grid"},{"id":"17441","type":"BoxAnnotation"},{"id":"17451","type":"GlyphRenderer"}],"title":{"id":"17454","type":"Title"},"toolbar":{"id":"17439","type":"Toolbar"},"x_range":{"id":"17415","type":"DataRange1d"},"x_scale":{"id":"17419","type":"LinearScale"},"y_range":{"id":"17417","type":"DataRange1d"},"y_scale":{"id":"17421","type":"LinearScale"}},"id":"17414","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17424","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17441","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17449","type":"Circle"},{"attributes":{"overlay":{"id":"17441","type":"BoxAnnotation"}},"id":"17435","type":"BoxZoomTool"},{"attributes":{},"id":"17434","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17433","type":"PanTool"},{"id":"17434","type":"WheelZoomTool"},{"id":"17435","type":"BoxZoomTool"},{"id":"17436","type":"SaveTool"},{"id":"17437","type":"ResetTool"},{"id":"17438","type":"HelpTool"}]},"id":"17439","type":"Toolbar"},{"attributes":{"callback":null},"id":"17415","type":"DataRange1d"},{"attributes":{"data_source":{"id":"17448","type":"ColumnDataSource"},"glyph":{"id":"17449","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17450","type":"Circle"},"selection_glyph":null,"view":{"id":"17452","type":"CDSView"}},"id":"17451","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"17458","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"17414","subtype":"Figure","type":"Plot"},"ticker":{"id":"17429","type":"BasicTicker"}},"id":"17428","type":"LinearAxis"},{"attributes":{},"id":"17460","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"17414","subtype":"Figure","type":"Plot"},"ticker":{"id":"17429","type":"BasicTicker"}},"id":"17432","type":"Grid"},{"attributes":{},"id":"17458","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"17454","type":"Title"},{"attributes":{},"id":"17429","type":"BasicTicker"}],"root_ids":["17414"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"94654888-9357-41e8-b577-2a3200c64563","roots":{"17414":"bb7497a9-c9df-4a18-9d8e-e2eb148fa308"}}];
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