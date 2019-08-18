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
      };var element = document.getElementById("cba22d92-e813-4db6-a762-a47cf96c6909");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cba22d92-e813-4db6-a762-a47cf96c6909' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"8f2a8df5-91d2-4f00-a3c0-0cb969b2135e":{"roots":{"references":[{"attributes":{},"id":"18598","type":"BasicTicker"},{"attributes":{"editor":{"id":"18633","type":"StringEditor"},"field":"y","formatter":{"id":"18634","type":"StringFormatter"},"title":"y"},"id":"18615","type":"TableColumn"},{"attributes":{"callback":null,"end":10},"id":"18591","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18611","type":"Scatter"},{"attributes":{"children":[{"id":"18587","subtype":"Figure","type":"Plot"},{"id":"18622","type":"WidgetBox"}]},"id":"18623","type":"Column"},{"attributes":{"formatter":{"id":"18626","type":"BasicTickFormatter"},"plot":{"id":"18587","subtype":"Figure","type":"Plot"},"ticker":{"id":"18598","type":"BasicTicker"}},"id":"18597","type":"LinearAxis"},{"attributes":{},"id":"18630","type":"UnionRenderers"},{"attributes":{},"id":"18593","type":"LinearScale"},{"attributes":{},"id":"18634","type":"StringFormatter"},{"attributes":{},"id":"18635","type":"StringEditor"},{"attributes":{},"id":"18626","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18610","type":"Scatter"},{"attributes":{},"id":"18632","type":"StringFormatter"},{"attributes":{"dimension":1,"plot":{"id":"18587","subtype":"Figure","type":"Plot"},"ticker":{"id":"18603","type":"BasicTicker"}},"id":"18606","type":"Grid"},{"attributes":{"source":{"id":"18608","type":"ColumnDataSource"}},"id":"18618","type":"CDSView"},{"attributes":{},"id":"18628","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":{"id":"18619","type":"PointDrawTool"},"tools":[{"id":"18619","type":"PointDrawTool"}]},"id":"18607","type":"Toolbar"},{"attributes":{"editor":{"id":"18631","type":"StringEditor"},"field":"x","formatter":{"id":"18632","type":"StringFormatter"},"title":"x"},"id":"18614","type":"TableColumn"},{"attributes":{"empty_value":"black","renderers":[{"id":"18612","type":"GlyphRenderer"}]},"id":"18619","type":"PointDrawTool"},{"attributes":{},"id":"18595","type":"LinearScale"},{"attributes":{"callback":null,"end":10},"id":"18589","type":"Range1d"},{"attributes":{"editor":{"id":"18635","type":"StringEditor"},"field":"color","formatter":{"id":"18636","type":"StringFormatter"},"title":"color"},"id":"18616","type":"TableColumn"},{"attributes":{},"id":"18633","type":"StringEditor"},{"attributes":{"background_fill_color":{"value":"lightgrey"},"below":[{"id":"18597","type":"LinearAxis"}],"left":[{"id":"18602","type":"LinearAxis"}],"renderers":[{"id":"18597","type":"LinearAxis"},{"id":"18601","type":"Grid"},{"id":"18602","type":"LinearAxis"},{"id":"18606","type":"Grid"},{"id":"18612","type":"GlyphRenderer"}],"title":{"id":"18586","type":"Title"},"toolbar":{"id":"18607","type":"Toolbar"},"x_range":{"id":"18589","type":"Range1d"},"x_scale":{"id":"18593","type":"LinearScale"},"y_range":{"id":"18591","type":"Range1d"},"y_scale":{"id":"18595","type":"LinearScale"}},"id":"18587","subtype":"Figure","type":"Plot"},{"attributes":{"columns":[{"id":"18614","type":"TableColumn"},{"id":"18615","type":"TableColumn"},{"id":"18616","type":"TableColumn"}],"editable":true,"height":200,"source":{"id":"18608","type":"ColumnDataSource"},"view":{"id":"18618","type":"CDSView"}},"id":"18617","type":"DataTable"},{"attributes":{"data_source":{"id":"18608","type":"ColumnDataSource"},"glyph":{"id":"18610","type":"Scatter"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18611","type":"Scatter"},"selection_glyph":null,"view":{"id":"18613","type":"CDSView"}},"id":"18612","type":"GlyphRenderer"},{"attributes":{},"id":"18629","type":"Selection"},{"attributes":{},"id":"18603","type":"BasicTicker"},{"attributes":{"plot":{"id":"18587","subtype":"Figure","type":"Plot"},"ticker":{"id":"18598","type":"BasicTicker"}},"id":"18601","type":"Grid"},{"attributes":{"plot":null,"text":"Point Draw Tool"},"id":"18586","type":"Title"},{"attributes":{"children":[{"id":"18617","type":"DataTable"}],"height":200},"id":"18622","type":"WidgetBox"},{"attributes":{},"id":"18636","type":"StringFormatter"},{"attributes":{"callback":null,"data":{"color":["red","green","yellow"],"x":[1,5,9],"y":[1,5,9]},"selected":{"id":"18629","type":"Selection"},"selection_policy":{"id":"18630","type":"UnionRenderers"}},"id":"18608","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"18628","type":"BasicTickFormatter"},"plot":{"id":"18587","subtype":"Figure","type":"Plot"},"ticker":{"id":"18603","type":"BasicTicker"}},"id":"18602","type":"LinearAxis"},{"attributes":{"source":{"id":"18608","type":"ColumnDataSource"}},"id":"18613","type":"CDSView"},{"attributes":{},"id":"18631","type":"StringEditor"}],"root_ids":["18623"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"8f2a8df5-91d2-4f00-a3c0-0cb969b2135e","roots":{"18623":"cba22d92-e813-4db6-a762-a47cf96c6909"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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