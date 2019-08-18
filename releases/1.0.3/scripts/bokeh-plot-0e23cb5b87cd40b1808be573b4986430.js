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
      };var element = document.getElementById("79d2ced0-e406-4ce7-9d99-44d917965c4a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '79d2ced0-e406-4ce7-9d99-44d917965c4a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"1dcc6221-fff6-49f3-ac4d-0b18eae4f889":{"roots":{"references":[{"attributes":{},"id":"18636","type":"StringEditor"},{"attributes":{},"id":"18635","type":"StringFormatter"},{"attributes":{"source":{"id":"18612","type":"ColumnDataSource"}},"id":"18622","type":"CDSView"},{"attributes":{},"id":"18637","type":"StringFormatter"},{"attributes":{"formatter":{"id":"18631","type":"BasicTickFormatter"},"plot":{"id":"18591","subtype":"Figure","type":"Plot"},"ticker":{"id":"18602","type":"BasicTicker"}},"id":"18601","type":"LinearAxis"},{"attributes":{"source":{"id":"18612","type":"ColumnDataSource"}},"id":"18617","type":"CDSView"},{"attributes":{},"id":"18633","type":"Selection"},{"attributes":{},"id":"18631","type":"BasicTickFormatter"},{"attributes":{"empty_value":"black","renderers":[{"id":"18616","type":"GlyphRenderer"}]},"id":"18623","type":"PointDrawTool"},{"attributes":{"plot":null,"text":"Point Draw Tool"},"id":"18590","type":"Title"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18614","type":"Scatter"},{"attributes":{"editor":{"id":"18636","type":"StringEditor"},"field":"x","formatter":{"id":"18635","type":"StringFormatter"},"title":"x"},"id":"18618","type":"TableColumn"},{"attributes":{},"id":"18607","type":"BasicTicker"},{"attributes":{"plot":{"id":"18591","subtype":"Figure","type":"Plot"},"ticker":{"id":"18602","type":"BasicTicker"}},"id":"18605","type":"Grid"},{"attributes":{},"id":"18599","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":{"id":"18623","type":"PointDrawTool"},"tools":[{"id":"18623","type":"PointDrawTool"}]},"id":"18611","type":"Toolbar"},{"attributes":{},"id":"18639","type":"StringFormatter"},{"attributes":{"callback":null,"data":{"color":["red","green","yellow"],"x":[1,5,9],"y":[1,5,9]},"selected":{"id":"18633","type":"Selection"},"selection_policy":{"id":"18634","type":"UnionRenderers"}},"id":"18612","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"18621","type":"DataTable"}],"height":200},"id":"18626","type":"WidgetBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18615","type":"Scatter"},{"attributes":{"background_fill_color":{"value":"lightgrey"},"below":[{"id":"18601","type":"LinearAxis"}],"left":[{"id":"18606","type":"LinearAxis"}],"renderers":[{"id":"18601","type":"LinearAxis"},{"id":"18605","type":"Grid"},{"id":"18606","type":"LinearAxis"},{"id":"18610","type":"Grid"},{"id":"18616","type":"GlyphRenderer"}],"title":{"id":"18590","type":"Title"},"toolbar":{"id":"18611","type":"Toolbar"},"x_range":{"id":"18593","type":"Range1d"},"x_scale":{"id":"18597","type":"LinearScale"},"y_range":{"id":"18595","type":"Range1d"},"y_scale":{"id":"18599","type":"LinearScale"}},"id":"18591","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"18612","type":"ColumnDataSource"},"glyph":{"id":"18614","type":"Scatter"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18615","type":"Scatter"},"selection_glyph":null,"view":{"id":"18617","type":"CDSView"}},"id":"18616","type":"GlyphRenderer"},{"attributes":{"editor":{"id":"18640","type":"StringEditor"},"field":"color","formatter":{"id":"18639","type":"StringFormatter"},"title":"color"},"id":"18620","type":"TableColumn"},{"attributes":{"dimension":1,"plot":{"id":"18591","subtype":"Figure","type":"Plot"},"ticker":{"id":"18607","type":"BasicTicker"}},"id":"18610","type":"Grid"},{"attributes":{},"id":"18602","type":"BasicTicker"},{"attributes":{},"id":"18597","type":"LinearScale"},{"attributes":{"callback":null,"end":10},"id":"18595","type":"Range1d"},{"attributes":{"formatter":{"id":"18629","type":"BasicTickFormatter"},"plot":{"id":"18591","subtype":"Figure","type":"Plot"},"ticker":{"id":"18607","type":"BasicTicker"}},"id":"18606","type":"LinearAxis"},{"attributes":{"editor":{"id":"18638","type":"StringEditor"},"field":"y","formatter":{"id":"18637","type":"StringFormatter"},"title":"y"},"id":"18619","type":"TableColumn"},{"attributes":{"children":[{"id":"18591","subtype":"Figure","type":"Plot"},{"id":"18626","type":"WidgetBox"}]},"id":"18627","type":"Column"},{"attributes":{},"id":"18634","type":"UnionRenderers"},{"attributes":{"columns":[{"id":"18618","type":"TableColumn"},{"id":"18619","type":"TableColumn"},{"id":"18620","type":"TableColumn"}],"editable":true,"height":200,"source":{"id":"18612","type":"ColumnDataSource"},"view":{"id":"18622","type":"CDSView"}},"id":"18621","type":"DataTable"},{"attributes":{"callback":null,"end":10},"id":"18593","type":"Range1d"},{"attributes":{},"id":"18638","type":"StringEditor"},{"attributes":{},"id":"18629","type":"BasicTickFormatter"},{"attributes":{},"id":"18640","type":"StringEditor"}],"root_ids":["18627"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"1dcc6221-fff6-49f3-ac4d-0b18eae4f889","roots":{"18627":"79d2ced0-e406-4ce7-9d99-44d917965c4a"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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