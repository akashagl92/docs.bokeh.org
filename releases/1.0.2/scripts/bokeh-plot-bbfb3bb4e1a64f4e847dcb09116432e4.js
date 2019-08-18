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
      };var element = document.getElementById("56d10761-113f-46c8-8d1e-699fbf97ff47");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '56d10761-113f-46c8-8d1e-699fbf97ff47' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"41454603-ce46-437a-8bda-3207eeaabdad":{"roots":{"references":[{"attributes":{"children":[{"id":"18618","type":"DataTable"}],"height":200},"id":"18623","type":"WidgetBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":{"id":"18620","type":"PointDrawTool"},"tools":[{"id":"18620","type":"PointDrawTool"}]},"id":"18608","type":"Toolbar"},{"attributes":{},"id":"18631","type":"Selection"},{"attributes":{"editor":{"id":"18635","type":"StringEditor"},"field":"y","formatter":{"id":"18634","type":"StringFormatter"},"title":"y"},"id":"18616","type":"TableColumn"},{"attributes":{},"id":"18604","type":"BasicTicker"},{"attributes":{"children":[{"id":"18588","subtype":"Figure","type":"Plot"},{"id":"18623","type":"WidgetBox"}]},"id":"18624","type":"Column"},{"attributes":{"formatter":{"id":"18627","type":"BasicTickFormatter"},"plot":{"id":"18588","subtype":"Figure","type":"Plot"},"ticker":{"id":"18599","type":"BasicTicker"}},"id":"18598","type":"LinearAxis"},{"attributes":{},"id":"18599","type":"BasicTicker"},{"attributes":{},"id":"18629","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"18588","subtype":"Figure","type":"Plot"},"ticker":{"id":"18599","type":"BasicTicker"}},"id":"18602","type":"Grid"},{"attributes":{"background_fill_color":{"value":"lightgrey"},"below":[{"id":"18598","type":"LinearAxis"}],"left":[{"id":"18603","type":"LinearAxis"}],"renderers":[{"id":"18598","type":"LinearAxis"},{"id":"18602","type":"Grid"},{"id":"18603","type":"LinearAxis"},{"id":"18607","type":"Grid"},{"id":"18613","type":"GlyphRenderer"}],"title":{"id":"18587","type":"Title"},"toolbar":{"id":"18608","type":"Toolbar"},"x_range":{"id":"18590","type":"Range1d"},"x_scale":{"id":"18594","type":"LinearScale"},"y_range":{"id":"18592","type":"Range1d"},"y_scale":{"id":"18596","type":"LinearScale"}},"id":"18588","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":10},"id":"18590","type":"Range1d"},{"attributes":{"data_source":{"id":"18609","type":"ColumnDataSource"},"glyph":{"id":"18611","type":"Scatter"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18612","type":"Scatter"},"selection_glyph":null,"view":{"id":"18614","type":"CDSView"}},"id":"18613","type":"GlyphRenderer"},{"attributes":{"columns":[{"id":"18615","type":"TableColumn"},{"id":"18616","type":"TableColumn"},{"id":"18617","type":"TableColumn"}],"editable":true,"height":200,"source":{"id":"18609","type":"ColumnDataSource"},"view":{"id":"18619","type":"CDSView"}},"id":"18618","type":"DataTable"},{"attributes":{},"id":"18632","type":"StringFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18612","type":"Scatter"},{"attributes":{},"id":"18634","type":"StringFormatter"},{"attributes":{"formatter":{"id":"18629","type":"BasicTickFormatter"},"plot":{"id":"18588","subtype":"Figure","type":"Plot"},"ticker":{"id":"18604","type":"BasicTicker"}},"id":"18603","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"color":["red","green","yellow"],"x":[1,5,9],"y":[1,5,9]},"selected":{"id":"18631","type":"Selection"},"selection_policy":{"id":"18630","type":"UnionRenderers"}},"id":"18609","type":"ColumnDataSource"},{"attributes":{},"id":"18635","type":"StringEditor"},{"attributes":{"source":{"id":"18609","type":"ColumnDataSource"}},"id":"18614","type":"CDSView"},{"attributes":{"editor":{"id":"18637","type":"StringEditor"},"field":"color","formatter":{"id":"18636","type":"StringFormatter"},"title":"color"},"id":"18617","type":"TableColumn"},{"attributes":{},"id":"18636","type":"StringFormatter"},{"attributes":{},"id":"18637","type":"StringEditor"},{"attributes":{},"id":"18627","type":"BasicTickFormatter"},{"attributes":{"editor":{"id":"18633","type":"StringEditor"},"field":"x","formatter":{"id":"18632","type":"StringFormatter"},"title":"x"},"id":"18615","type":"TableColumn"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18611","type":"Scatter"},{"attributes":{"source":{"id":"18609","type":"ColumnDataSource"}},"id":"18619","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"18588","subtype":"Figure","type":"Plot"},"ticker":{"id":"18604","type":"BasicTicker"}},"id":"18607","type":"Grid"},{"attributes":{},"id":"18630","type":"UnionRenderers"},{"attributes":{},"id":"18633","type":"StringEditor"},{"attributes":{"plot":null,"text":"Point Draw Tool"},"id":"18587","type":"Title"},{"attributes":{},"id":"18594","type":"LinearScale"},{"attributes":{"callback":null,"end":10},"id":"18592","type":"Range1d"},{"attributes":{"empty_value":"black","renderers":[{"id":"18613","type":"GlyphRenderer"}]},"id":"18620","type":"PointDrawTool"},{"attributes":{},"id":"18596","type":"LinearScale"}],"root_ids":["18624"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"41454603-ce46-437a-8bda-3207eeaabdad","roots":{"18624":"56d10761-113f-46c8-8d1e-699fbf97ff47"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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