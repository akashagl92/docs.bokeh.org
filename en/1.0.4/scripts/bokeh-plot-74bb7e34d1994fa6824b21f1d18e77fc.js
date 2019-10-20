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
      };var element = document.getElementById("0d34a852-a418-4ae8-88f0-e9a600e13310");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d34a852-a418-4ae8-88f0-e9a600e13310' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4f18d12b-d22b-40ab-8d88-910032e9730b":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"17701","type":"PolyAnnotation"}},"id":"17693","type":"LassoSelectTool"},{"attributes":{"plot":{"id":"17671","subtype":"Figure","type":"Plot"},"ticker":{"id":"17682","type":"BasicTicker"}},"id":"17685","type":"Grid"},{"attributes":{},"id":"17716","type":"UnionRenderers"},{"attributes":{},"id":"17694","type":"ResetTool"},{"attributes":{},"id":"17679","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"17701","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"17698","type":"BoxAnnotation"}},"id":"17692","type":"BoxZoomTool"},{"attributes":{},"id":"17682","type":"BasicTicker"},{"attributes":{},"id":"17714","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17712","type":"BasicTickFormatter"},"plot":{"id":"17671","subtype":"Figure","type":"Plot"},"ticker":{"id":"17687","type":"BasicTicker"}},"id":"17686","type":"LinearAxis"},{"attributes":{},"id":"17677","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17695","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17707","type":"Circle"},{"attributes":{},"id":"17687","type":"BasicTicker"},{"attributes":{},"id":"17712","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17691","type":"BoxSelectTool"},{"id":"17692","type":"BoxZoomTool"},{"id":"17693","type":"LassoSelectTool"},{"id":"17694","type":"ResetTool"}]},"id":"17697","type":"Toolbar"},{"attributes":{"below":[{"id":"17681","type":"LinearAxis"}],"left":[{"id":"17686","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17681","type":"LinearAxis"},{"id":"17685","type":"Grid"},{"id":"17686","type":"LinearAxis"},{"id":"17690","type":"Grid"},{"id":"17695","type":"BoxAnnotation"},{"id":"17698","type":"BoxAnnotation"},{"id":"17701","type":"PolyAnnotation"},{"id":"17709","type":"GlyphRenderer"}],"title":{"id":"17670","type":"Title"},"toolbar":{"id":"17697","type":"Toolbar"},"x_range":{"id":"17673","type":"DataRange1d"},"x_scale":{"id":"17677","type":"LinearScale"},"y_range":{"id":"17675","type":"DataRange1d"},"y_scale":{"id":"17679","type":"LinearScale"}},"id":"17671","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17708","type":"Circle"},{"attributes":{"formatter":{"id":"17714","type":"BasicTickFormatter"},"plot":{"id":"17671","subtype":"Figure","type":"Plot"},"ticker":{"id":"17682","type":"BasicTicker"}},"id":"17681","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"17717","type":"Selection"},"selection_policy":{"id":"17716","type":"UnionRenderers"}},"id":"17706","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"17670","type":"Title"},{"attributes":{"source":{"id":"17706","type":"ColumnDataSource"}},"id":"17710","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"17671","subtype":"Figure","type":"Plot"},"ticker":{"id":"17687","type":"BasicTicker"}},"id":"17690","type":"Grid"},{"attributes":{"callback":null},"id":"17673","type":"DataRange1d"},{"attributes":{},"id":"17717","type":"Selection"},{"attributes":{"data_source":{"id":"17706","type":"ColumnDataSource"},"glyph":{"id":"17707","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17708","type":"Circle"},"selection_glyph":null,"view":{"id":"17710","type":"CDSView"}},"id":"17709","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17698","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"17675","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"17695","type":"BoxAnnotation"}},"id":"17691","type":"BoxSelectTool"}],"root_ids":["17671"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"4f18d12b-d22b-40ab-8d88-910032e9730b","roots":{"17671":"0d34a852-a418-4ae8-88f0-e9a600e13310"}}];
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