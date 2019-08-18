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
      };var element = document.getElementById("ac49171b-6f4e-482d-8307-c48125219e1a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac49171b-6f4e-482d-8307-c48125219e1a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"15abc255-1a1e-4080-806c-ff295991c645":{"roots":{"references":[{"attributes":{"overlay":{"id":"12887","type":"BoxAnnotation"}},"id":"12881","type":"BoxZoomTool"},{"attributes":{"source":{"id":"12894","type":"ColumnDataSource"}},"id":"12898","type":"CDSView"},{"attributes":{"plot":null,"text":"Left Title"},"id":"12858","type":"Title"},{"attributes":{},"id":"12901","type":"BasicTickFormatter"},{"attributes":{},"id":"12906","type":"UnionRenderers"},{"attributes":{},"id":"12882","type":"SaveTool"},{"attributes":{"formatter":{"id":"12903","type":"BasicTickFormatter"},"plot":{"id":"12859","subtype":"Figure","type":"Plot"},"ticker":{"id":"12875","type":"BasicTicker"}},"id":"12874","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12895","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"12859","subtype":"Figure","type":"Plot"},"ticker":{"id":"12875","type":"BasicTicker"}},"id":"12878","type":"Grid"},{"attributes":{},"id":"12875","type":"BasicTicker"},{"attributes":{},"id":"12883","type":"ResetTool"},{"attributes":{},"id":"12870","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"12905","type":"Selection"},"selection_policy":{"id":"12906","type":"UnionRenderers"}},"id":"12894","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"12861","type":"DataRange1d"},{"attributes":{"plot":{"id":"12859","subtype":"Figure","type":"Plot"},"ticker":{"id":"12870","type":"BasicTicker"}},"id":"12873","type":"Grid"},{"attributes":{},"id":"12905","type":"Selection"},{"attributes":{},"id":"12884","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12879","type":"PanTool"},{"id":"12880","type":"WheelZoomTool"},{"id":"12881","type":"BoxZoomTool"},{"id":"12882","type":"SaveTool"},{"id":"12883","type":"ResetTool"},{"id":"12884","type":"HelpTool"}]},"id":"12885","type":"Toolbar"},{"attributes":{"callback":null},"id":"12863","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12896","type":"Circle"},{"attributes":{},"id":"12865","type":"LinearScale"},{"attributes":{},"id":"12903","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12887","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"12894","type":"ColumnDataSource"},"glyph":{"id":"12895","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12896","type":"Circle"},"selection_glyph":null,"view":{"id":"12898","type":"CDSView"}},"id":"12897","type":"GlyphRenderer"},{"attributes":{},"id":"12867","type":"LinearScale"},{"attributes":{"below":[{"id":"12869","type":"LinearAxis"}],"left":[{"id":"12874","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"12869","type":"LinearAxis"},{"id":"12873","type":"Grid"},{"id":"12874","type":"LinearAxis"},{"id":"12878","type":"Grid"},{"id":"12887","type":"BoxAnnotation"},{"id":"12897","type":"GlyphRenderer"}],"title":{"id":"12858","type":"Title"},"title_location":"left","toolbar":{"id":"12885","type":"Toolbar"},"x_range":{"id":"12861","type":"DataRange1d"},"x_scale":{"id":"12865","type":"LinearScale"},"y_range":{"id":"12863","type":"DataRange1d"},"y_scale":{"id":"12867","type":"LinearScale"}},"id":"12859","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"12901","type":"BasicTickFormatter"},"plot":{"id":"12859","subtype":"Figure","type":"Plot"},"ticker":{"id":"12870","type":"BasicTicker"}},"id":"12869","type":"LinearAxis"},{"attributes":{},"id":"12879","type":"PanTool"},{"attributes":{},"id":"12880","type":"WheelZoomTool"}],"root_ids":["12859"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"15abc255-1a1e-4080-806c-ff295991c645","roots":{"12859":"ac49171b-6f4e-482d-8307-c48125219e1a"}}];
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