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
      };var element = document.getElementById("e2ad89c5-7e7f-4d52-8358-1015536e9232");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e2ad89c5-7e7f-4d52-8358-1015536e9232' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"45fce657-4c29-4575-a2ba-42b2beefb1e5":{"roots":{"references":[{"attributes":{"below":[{"id":"17681","type":"LinearAxis"}],"left":[{"id":"17686","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17681","type":"LinearAxis"},{"id":"17685","type":"Grid"},{"id":"17686","type":"LinearAxis"},{"id":"17690","type":"Grid"},{"id":"17695","type":"BoxAnnotation"},{"id":"17698","type":"BoxAnnotation"},{"id":"17701","type":"PolyAnnotation"},{"id":"17709","type":"GlyphRenderer"}],"title":{"id":"17670","type":"Title"},"toolbar":{"id":"17697","type":"Toolbar"},"x_range":{"id":"17673","type":"DataRange1d"},"x_scale":{"id":"17677","type":"LinearScale"},"y_range":{"id":"17675","type":"DataRange1d"},"y_scale":{"id":"17679","type":"LinearScale"}},"id":"17671","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17695","type":"BoxAnnotation"},{"attributes":{},"id":"17682","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"17670","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17707","type":"Circle"},{"attributes":{},"id":"17687","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17691","type":"BoxSelectTool"},{"id":"17692","type":"BoxZoomTool"},{"id":"17693","type":"LassoSelectTool"},{"id":"17694","type":"ResetTool"}]},"id":"17697","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"17701","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"17673","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"17719","type":"Selection"},"selection_policy":{"id":"17720","type":"UnionRenderers"}},"id":"17706","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"17675","type":"DataRange1d"},{"attributes":{"source":{"id":"17706","type":"ColumnDataSource"}},"id":"17710","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"17695","type":"BoxAnnotation"}},"id":"17691","type":"BoxSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"17671","subtype":"Figure","type":"Plot"},"ticker":{"id":"17687","type":"BasicTicker"}},"id":"17690","type":"Grid"},{"attributes":{},"id":"17677","type":"LinearScale"},{"attributes":{"data_source":{"id":"17706","type":"ColumnDataSource"},"glyph":{"id":"17707","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17708","type":"Circle"},"selection_glyph":null,"view":{"id":"17710","type":"CDSView"}},"id":"17709","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17698","type":"BoxAnnotation"}},"id":"17692","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17708","type":"Circle"},{"attributes":{},"id":"17679","type":"LinearScale"},{"attributes":{"formatter":{"id":"17714","type":"BasicTickFormatter"},"plot":{"id":"17671","subtype":"Figure","type":"Plot"},"ticker":{"id":"17682","type":"BasicTicker"}},"id":"17681","type":"LinearAxis"},{"attributes":{},"id":"17719","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17698","type":"BoxAnnotation"},{"attributes":{},"id":"17712","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"17701","type":"PolyAnnotation"}},"id":"17693","type":"LassoSelectTool"},{"attributes":{},"id":"17720","type":"UnionRenderers"},{"attributes":{"plot":{"id":"17671","subtype":"Figure","type":"Plot"},"ticker":{"id":"17682","type":"BasicTicker"}},"id":"17685","type":"Grid"},{"attributes":{},"id":"17714","type":"BasicTickFormatter"},{"attributes":{},"id":"17694","type":"ResetTool"},{"attributes":{"formatter":{"id":"17712","type":"BasicTickFormatter"},"plot":{"id":"17671","subtype":"Figure","type":"Plot"},"ticker":{"id":"17687","type":"BasicTicker"}},"id":"17686","type":"LinearAxis"}],"root_ids":["17671"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"45fce657-4c29-4575-a2ba-42b2beefb1e5","roots":{"17671":"e2ad89c5-7e7f-4d52-8358-1015536e9232"}}];
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