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
      };var element = document.getElementById("8594e26b-8adb-4545-bed1-3268a07b9461");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8594e26b-8adb-4545-bed1-3268a07b9461' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"45406069-beeb-4b8b-83c0-03ede10fd078":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"34634","type":"Title"},{"attributes":{},"id":"34614","type":"WheelZoomTool"},{"attributes":{},"id":"34604","type":"BasicTicker"},{"attributes":{},"id":"34613","type":"PanTool"},{"attributes":{},"id":"34636","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"34621","type":"BoxAnnotation"}},"id":"34615","type":"BoxZoomTool"},{"attributes":{},"id":"34638","type":"BasicTickFormatter"},{"attributes":{},"id":"34616","type":"SaveTool"},{"attributes":{"plot":{"id":"34594","subtype":"Figure","type":"Plot"},"ticker":{"id":"34604","type":"BasicTicker"}},"id":"34607","type":"Grid"},{"attributes":{},"id":"34640","type":"UnionRenderers"},{"attributes":{},"id":"34617","type":"ResetTool"},{"attributes":{"formatter":{"id":"34638","type":"BasicTickFormatter"},"plot":{"id":"34594","subtype":"Figure","type":"Plot"},"ticker":{"id":"34609","type":"BasicTicker"}},"id":"34608","type":"LinearAxis"},{"attributes":{},"id":"34641","type":"Selection"},{"attributes":{},"id":"34618","type":"HelpTool"},{"attributes":{},"id":"34609","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34630","type":"SquareX"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34613","type":"PanTool"},{"id":"34614","type":"WheelZoomTool"},{"id":"34615","type":"BoxZoomTool"},{"id":"34616","type":"SaveTool"},{"id":"34617","type":"ResetTool"},{"id":"34618","type":"HelpTool"}]},"id":"34619","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"34594","subtype":"Figure","type":"Plot"},"ticker":{"id":"34609","type":"BasicTicker"}},"id":"34612","type":"Grid"},{"attributes":{"data_source":{"id":"34628","type":"ColumnDataSource"},"glyph":{"id":"34629","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34630","type":"SquareX"},"selection_glyph":null,"view":{"id":"34632","type":"CDSView"}},"id":"34631","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"34597","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34621","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34629","type":"SquareX"},{"attributes":{"callback":null},"id":"34595","type":"DataRange1d"},{"attributes":{},"id":"34599","type":"LinearScale"},{"attributes":{"below":[{"id":"34603","type":"LinearAxis"}],"left":[{"id":"34608","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34603","type":"LinearAxis"},{"id":"34607","type":"Grid"},{"id":"34608","type":"LinearAxis"},{"id":"34612","type":"Grid"},{"id":"34621","type":"BoxAnnotation"},{"id":"34631","type":"GlyphRenderer"}],"title":{"id":"34634","type":"Title"},"toolbar":{"id":"34619","type":"Toolbar"},"x_range":{"id":"34595","type":"DataRange1d"},"x_scale":{"id":"34599","type":"LinearScale"},"y_range":{"id":"34597","type":"DataRange1d"},"y_scale":{"id":"34601","type":"LinearScale"}},"id":"34594","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34641","type":"Selection"},"selection_policy":{"id":"34640","type":"UnionRenderers"}},"id":"34628","type":"ColumnDataSource"},{"attributes":{"source":{"id":"34628","type":"ColumnDataSource"}},"id":"34632","type":"CDSView"},{"attributes":{},"id":"34601","type":"LinearScale"},{"attributes":{"formatter":{"id":"34636","type":"BasicTickFormatter"},"plot":{"id":"34594","subtype":"Figure","type":"Plot"},"ticker":{"id":"34604","type":"BasicTicker"}},"id":"34603","type":"LinearAxis"}],"root_ids":["34594"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"45406069-beeb-4b8b-83c0-03ede10fd078","roots":{"34594":"8594e26b-8adb-4545-bed1-3268a07b9461"}}];
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