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
      };var element = document.getElementById("580dab54-4b6e-43bd-9374-0d9c0a572b0d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '580dab54-4b6e-43bd-9374-0d9c0a572b0d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cb1c560b-7df9-4f61-bec4-0a70769f1942":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17694","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"17691","type":"BoxAnnotation"}},"id":"17687","type":"BoxSelectTool"},{"attributes":{},"id":"17715","type":"Selection"},{"attributes":{"below":[{"id":"17677","type":"LinearAxis"}],"left":[{"id":"17682","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17677","type":"LinearAxis"},{"id":"17681","type":"Grid"},{"id":"17682","type":"LinearAxis"},{"id":"17686","type":"Grid"},{"id":"17691","type":"BoxAnnotation"},{"id":"17694","type":"BoxAnnotation"},{"id":"17697","type":"PolyAnnotation"},{"id":"17705","type":"GlyphRenderer"}],"title":{"id":"17666","type":"Title"},"toolbar":{"id":"17693","type":"Toolbar"},"x_range":{"id":"17669","type":"DataRange1d"},"x_scale":{"id":"17673","type":"LinearScale"},"y_range":{"id":"17671","type":"DataRange1d"},"y_scale":{"id":"17675","type":"LinearScale"}},"id":"17667","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17711","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17709","type":"BasicTickFormatter"},"plot":{"id":"17667","subtype":"Figure","type":"Plot"},"ticker":{"id":"17678","type":"BasicTicker"}},"id":"17677","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"17697","type":"PolyAnnotation"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"17715","type":"Selection"},"selection_policy":{"id":"17716","type":"UnionRenderers"}},"id":"17702","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"17666","type":"Title"},{"attributes":{"source":{"id":"17702","type":"ColumnDataSource"}},"id":"17706","type":"CDSView"},{"attributes":{"data_source":{"id":"17702","type":"ColumnDataSource"},"glyph":{"id":"17703","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17704","type":"Circle"},"selection_glyph":null,"view":{"id":"17706","type":"CDSView"}},"id":"17705","type":"GlyphRenderer"},{"attributes":{},"id":"17690","type":"ResetTool"},{"attributes":{"formatter":{"id":"17711","type":"BasicTickFormatter"},"plot":{"id":"17667","subtype":"Figure","type":"Plot"},"ticker":{"id":"17683","type":"BasicTicker"}},"id":"17682","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17669","type":"DataRange1d"},{"attributes":{},"id":"17716","type":"UnionRenderers"},{"attributes":{},"id":"17683","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"17697","type":"PolyAnnotation"}},"id":"17689","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"17671","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"17667","subtype":"Figure","type":"Plot"},"ticker":{"id":"17683","type":"BasicTicker"}},"id":"17686","type":"Grid"},{"attributes":{"plot":{"id":"17667","subtype":"Figure","type":"Plot"},"ticker":{"id":"17678","type":"BasicTicker"}},"id":"17681","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17691","type":"BoxAnnotation"},{"attributes":{},"id":"17673","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17687","type":"BoxSelectTool"},{"id":"17688","type":"BoxZoomTool"},{"id":"17689","type":"LassoSelectTool"},{"id":"17690","type":"ResetTool"}]},"id":"17693","type":"Toolbar"},{"attributes":{},"id":"17709","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"17694","type":"BoxAnnotation"}},"id":"17688","type":"BoxZoomTool"},{"attributes":{},"id":"17675","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17703","type":"Circle"},{"attributes":{},"id":"17678","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17704","type":"Circle"}],"root_ids":["17667"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"cb1c560b-7df9-4f61-bec4-0a70769f1942","roots":{"17667":"580dab54-4b6e-43bd-9374-0d9c0a572b0d"}}];
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