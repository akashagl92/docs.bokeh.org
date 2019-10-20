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
      };var element = document.getElementById("1667595c-3434-40a4-8590-c294c90602b3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1667595c-3434-40a4-8590-c294c90602b3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7fa24d97-6bc1-44b6-a2ff-4f564619bddb":{"roots":{"references":[{"attributes":{"data_source":{"id":"17702","type":"ColumnDataSource"},"glyph":{"id":"17703","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17704","type":"Circle"},"selection_glyph":null,"view":{"id":"17706","type":"CDSView"}},"id":"17705","type":"GlyphRenderer"},{"attributes":{},"id":"17673","type":"LinearScale"},{"attributes":{"overlay":{"id":"17694","type":"BoxAnnotation"}},"id":"17688","type":"BoxZoomTool"},{"attributes":{"source":{"id":"17702","type":"ColumnDataSource"}},"id":"17706","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"17715","type":"Selection"},"selection_policy":{"id":"17716","type":"UnionRenderers"}},"id":"17702","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"17697","type":"PolyAnnotation"}},"id":"17689","type":"LassoSelectTool"},{"attributes":{},"id":"17675","type":"LinearScale"},{"attributes":{},"id":"17709","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17709","type":"BasicTickFormatter"},"plot":{"id":"17667","subtype":"Figure","type":"Plot"},"ticker":{"id":"17678","type":"BasicTicker"}},"id":"17677","type":"LinearAxis"},{"attributes":{},"id":"17690","type":"ResetTool"},{"attributes":{"callback":null,"overlay":{"id":"17691","type":"BoxAnnotation"}},"id":"17687","type":"BoxSelectTool"},{"attributes":{},"id":"17711","type":"BasicTickFormatter"},{"attributes":{},"id":"17716","type":"UnionRenderers"},{"attributes":{"plot":{"id":"17667","subtype":"Figure","type":"Plot"},"ticker":{"id":"17678","type":"BasicTicker"}},"id":"17681","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17691","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"17711","type":"BasicTickFormatter"},"plot":{"id":"17667","subtype":"Figure","type":"Plot"},"ticker":{"id":"17683","type":"BasicTicker"}},"id":"17682","type":"LinearAxis"},{"attributes":{"below":[{"id":"17677","type":"LinearAxis"}],"left":[{"id":"17682","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17677","type":"LinearAxis"},{"id":"17681","type":"Grid"},{"id":"17682","type":"LinearAxis"},{"id":"17686","type":"Grid"},{"id":"17691","type":"BoxAnnotation"},{"id":"17694","type":"BoxAnnotation"},{"id":"17697","type":"PolyAnnotation"},{"id":"17705","type":"GlyphRenderer"}],"title":{"id":"17666","type":"Title"},"toolbar":{"id":"17693","type":"Toolbar"},"x_range":{"id":"17669","type":"DataRange1d"},"x_scale":{"id":"17673","type":"LinearScale"},"y_range":{"id":"17671","type":"DataRange1d"},"y_scale":{"id":"17675","type":"LinearScale"}},"id":"17667","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17687","type":"BoxSelectTool"},{"id":"17688","type":"BoxZoomTool"},{"id":"17689","type":"LassoSelectTool"},{"id":"17690","type":"ResetTool"}]},"id":"17693","type":"Toolbar"},{"attributes":{},"id":"17678","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17694","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"17666","type":"Title"},{"attributes":{},"id":"17683","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"17697","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17703","type":"Circle"},{"attributes":{"callback":null},"id":"17669","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"17667","subtype":"Figure","type":"Plot"},"ticker":{"id":"17683","type":"BasicTicker"}},"id":"17686","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17704","type":"Circle"},{"attributes":{"callback":null},"id":"17671","type":"DataRange1d"},{"attributes":{},"id":"17715","type":"Selection"}],"root_ids":["17667"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"7fa24d97-6bc1-44b6-a2ff-4f564619bddb","roots":{"17667":"1667595c-3434-40a4-8590-c294c90602b3"}}];
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