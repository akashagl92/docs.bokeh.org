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
      };var element = document.getElementById("b067408b-7bb8-41aa-88ec-9ab0280b1161");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b067408b-7bb8-41aa-88ec-9ab0280b1161' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"26438a4e-6329-401c-8d70-0750dfb6448e":{"roots":{"references":[{"attributes":{},"id":"18457","type":"SaveTool"},{"attributes":{},"id":"18459","type":"HelpTool"},{"attributes":{},"id":"18440","type":"LinearScale"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"18433","type":"Title"},{"attributes":{"callback":null,"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"18460","type":"HoverTool"},{"attributes":{"plot":{"id":"18434","subtype":"Figure","type":"Plot"},"ticker":{"id":"18445","type":"BasicTicker"}},"id":"18448","type":"Grid"},{"attributes":{},"id":"18458","type":"ResetTool"},{"attributes":{"formatter":{"id":"18479","type":"BasicTickFormatter"},"plot":{"id":"18434","subtype":"Figure","type":"Plot"},"ticker":{"id":"18445","type":"BasicTicker"}},"id":"18444","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"18482","type":"Selection"},"selection_policy":{"id":"18481","type":"UnionRenderers"}},"id":"18432","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"18436","type":"DataRange1d"},{"attributes":{"overlay":{"id":"18463","type":"BoxAnnotation"}},"id":"18456","type":"BoxZoomTool"},{"attributes":{},"id":"18477","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"18477","type":"BasicTickFormatter"},"plot":{"id":"18434","subtype":"Figure","type":"Plot"},"ticker":{"id":"18450","type":"BasicTicker"}},"id":"18449","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18463","type":"BoxAnnotation"},{"attributes":{},"id":"18442","type":"LinearScale"},{"attributes":{},"id":"18479","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"18432","type":"ColumnDataSource"},"glyph":{"id":"18472","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18473","type":"Circle"},"selection_glyph":null,"view":{"id":"18475","type":"CDSView"}},"id":"18474","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"18473","type":"Circle"},{"attributes":{},"id":"18445","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"18434","subtype":"Figure","type":"Plot"},"ticker":{"id":"18450","type":"BasicTicker"}},"id":"18453","type":"Grid"},{"attributes":{},"id":"18481","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"18472","type":"Circle"},{"attributes":{"below":[{"id":"18444","type":"LinearAxis"}],"left":[{"id":"18449","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18444","type":"LinearAxis"},{"id":"18448","type":"Grid"},{"id":"18449","type":"LinearAxis"},{"id":"18453","type":"Grid"},{"id":"18463","type":"BoxAnnotation"},{"id":"18474","type":"GlyphRenderer"}],"title":{"id":"18433","type":"Title"},"toolbar":{"id":"18461","type":"Toolbar"},"x_range":{"id":"18436","type":"DataRange1d"},"x_scale":{"id":"18440","type":"LinearScale"},"y_range":{"id":"18438","type":"DataRange1d"},"y_scale":{"id":"18442","type":"LinearScale"}},"id":"18434","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18454","type":"PanTool"},{"attributes":{"callback":null},"id":"18438","type":"DataRange1d"},{"attributes":{},"id":"18450","type":"BasicTicker"},{"attributes":{},"id":"18482","type":"Selection"},{"attributes":{},"id":"18455","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18454","type":"PanTool"},{"id":"18455","type":"WheelZoomTool"},{"id":"18456","type":"BoxZoomTool"},{"id":"18457","type":"SaveTool"},{"id":"18458","type":"ResetTool"},{"id":"18459","type":"HelpTool"},{"id":"18460","type":"HoverTool"}]},"id":"18461","type":"Toolbar"},{"attributes":{"source":{"id":"18432","type":"ColumnDataSource"}},"id":"18475","type":"CDSView"}],"root_ids":["18434"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"26438a4e-6329-401c-8d70-0750dfb6448e","roots":{"18434":"b067408b-7bb8-41aa-88ec-9ab0280b1161"}}];
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