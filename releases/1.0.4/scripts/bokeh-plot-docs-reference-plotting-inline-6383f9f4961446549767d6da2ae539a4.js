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
      };var element = document.getElementById("a47459c9-1fd3-49dc-8097-4f62cce2dff6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a47459c9-1fd3-49dc-8097-4f62cce2dff6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fe12ea33-574b-467b-9f4b-cdc4ccd70ed3":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33296","type":"Hex"},{"attributes":{},"id":"33283","type":"ResetTool"},{"attributes":{"callback":null},"id":"33263","type":"DataRange1d"},{"attributes":{"formatter":{"id":"33301","type":"BasicTickFormatter"},"plot":{"id":"33260","subtype":"Figure","type":"Plot"},"ticker":{"id":"33275","type":"BasicTicker"}},"id":"33274","type":"LinearAxis"},{"attributes":{},"id":"33265","type":"LinearScale"},{"attributes":{"source":{"id":"33294","type":"ColumnDataSource"}},"id":"33298","type":"CDSView"},{"attributes":{},"id":"33267","type":"LinearScale"},{"attributes":{},"id":"33305","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33279","type":"PanTool"},{"id":"33280","type":"WheelZoomTool"},{"id":"33281","type":"BoxZoomTool"},{"id":"33282","type":"SaveTool"},{"id":"33283","type":"ResetTool"},{"id":"33284","type":"HelpTool"}]},"id":"33285","type":"Toolbar"},{"attributes":{},"id":"33284","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"33260","subtype":"Figure","type":"Plot"},"ticker":{"id":"33275","type":"BasicTicker"}},"id":"33278","type":"Grid"},{"attributes":{},"id":"33280","type":"WheelZoomTool"},{"attributes":{},"id":"33306","type":"Selection"},{"attributes":{},"id":"33279","type":"PanTool"},{"attributes":{},"id":"33282","type":"SaveTool"},{"attributes":{"overlay":{"id":"33287","type":"BoxAnnotation"}},"id":"33281","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"33261","type":"DataRange1d"},{"attributes":{"formatter":{"id":"33303","type":"BasicTickFormatter"},"plot":{"id":"33260","subtype":"Figure","type":"Plot"},"ticker":{"id":"33270","type":"BasicTicker"}},"id":"33269","type":"LinearAxis"},{"attributes":{},"id":"33301","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"33260","subtype":"Figure","type":"Plot"},"ticker":{"id":"33270","type":"BasicTicker"}},"id":"33273","type":"Grid"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33295","type":"Hex"},{"attributes":{},"id":"33303","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33287","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"33294","type":"ColumnDataSource"},"glyph":{"id":"33295","type":"Hex"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33296","type":"Hex"},"selection_glyph":null,"view":{"id":"33298","type":"CDSView"}},"id":"33297","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33306","type":"Selection"},"selection_policy":{"id":"33305","type":"UnionRenderers"}},"id":"33294","type":"ColumnDataSource"},{"attributes":{},"id":"33270","type":"BasicTicker"},{"attributes":{},"id":"33275","type":"BasicTicker"},{"attributes":{"below":[{"id":"33269","type":"LinearAxis"}],"left":[{"id":"33274","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33269","type":"LinearAxis"},{"id":"33273","type":"Grid"},{"id":"33274","type":"LinearAxis"},{"id":"33278","type":"Grid"},{"id":"33287","type":"BoxAnnotation"},{"id":"33297","type":"GlyphRenderer"}],"title":{"id":"33299","type":"Title"},"toolbar":{"id":"33285","type":"Toolbar"},"x_range":{"id":"33261","type":"DataRange1d"},"x_scale":{"id":"33265","type":"LinearScale"},"y_range":{"id":"33263","type":"DataRange1d"},"y_scale":{"id":"33267","type":"LinearScale"}},"id":"33260","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"33299","type":"Title"}],"root_ids":["33260"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"fe12ea33-574b-467b-9f4b-cdc4ccd70ed3","roots":{"33260":"a47459c9-1fd3-49dc-8097-4f62cce2dff6"}}];
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