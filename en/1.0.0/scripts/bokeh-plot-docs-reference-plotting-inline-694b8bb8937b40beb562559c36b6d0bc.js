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
      };var element = document.getElementById("14ca1e0b-f2a6-43a1-8457-75b5e3d936b4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '14ca1e0b-f2a6-43a1-8457-75b5e3d936b4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"509538c1-c676-4797-aa02-854626b815ad":{"roots":{"references":[{"attributes":{},"id":"32668","type":"PanTool"},{"attributes":{},"id":"32656","type":"LinearScale"},{"attributes":{"source":{"id":"32683","type":"ColumnDataSource"}},"id":"32687","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"32689","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32685","type":"CircleX"},{"attributes":{},"id":"32696","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32695","type":"Selection"},"selection_policy":{"id":"32696","type":"UnionRenderers"}},"id":"32683","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"32693","type":"BasicTickFormatter"},"plot":{"id":"32649","subtype":"Figure","type":"Plot"},"ticker":{"id":"32664","type":"BasicTicker"}},"id":"32663","type":"LinearAxis"},{"attributes":{"overlay":{"id":"32676","type":"BoxAnnotation"}},"id":"32670","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"32691","type":"BasicTickFormatter"},"plot":{"id":"32649","subtype":"Figure","type":"Plot"},"ticker":{"id":"32659","type":"BasicTicker"}},"id":"32658","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32684","type":"CircleX"},{"attributes":{"dimension":1,"plot":{"id":"32649","subtype":"Figure","type":"Plot"},"ticker":{"id":"32664","type":"BasicTicker"}},"id":"32667","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32676","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"32658","type":"LinearAxis"}],"left":[{"id":"32663","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32658","type":"LinearAxis"},{"id":"32662","type":"Grid"},{"id":"32663","type":"LinearAxis"},{"id":"32667","type":"Grid"},{"id":"32676","type":"BoxAnnotation"},{"id":"32686","type":"GlyphRenderer"}],"title":{"id":"32689","type":"Title"},"toolbar":{"id":"32674","type":"Toolbar"},"x_range":{"id":"32650","type":"DataRange1d"},"x_scale":{"id":"32654","type":"LinearScale"},"y_range":{"id":"32652","type":"DataRange1d"},"y_scale":{"id":"32656","type":"LinearScale"}},"id":"32649","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32664","type":"BasicTicker"},{"attributes":{},"id":"32659","type":"BasicTicker"},{"attributes":{"callback":null},"id":"32650","type":"DataRange1d"},{"attributes":{"plot":{"id":"32649","subtype":"Figure","type":"Plot"},"ticker":{"id":"32659","type":"BasicTicker"}},"id":"32662","type":"Grid"},{"attributes":{"callback":null},"id":"32652","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32668","type":"PanTool"},{"id":"32669","type":"WheelZoomTool"},{"id":"32670","type":"BoxZoomTool"},{"id":"32671","type":"SaveTool"},{"id":"32672","type":"ResetTool"},{"id":"32673","type":"HelpTool"}]},"id":"32674","type":"Toolbar"},{"attributes":{},"id":"32671","type":"SaveTool"},{"attributes":{},"id":"32669","type":"WheelZoomTool"},{"attributes":{},"id":"32673","type":"HelpTool"},{"attributes":{"data_source":{"id":"32683","type":"ColumnDataSource"},"glyph":{"id":"32684","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32685","type":"CircleX"},"selection_glyph":null,"view":{"id":"32687","type":"CDSView"}},"id":"32686","type":"GlyphRenderer"},{"attributes":{},"id":"32693","type":"BasicTickFormatter"},{"attributes":{},"id":"32672","type":"ResetTool"},{"attributes":{},"id":"32691","type":"BasicTickFormatter"},{"attributes":{},"id":"32695","type":"Selection"},{"attributes":{},"id":"32654","type":"LinearScale"}],"root_ids":["32649"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"509538c1-c676-4797-aa02-854626b815ad","roots":{"32649":"14ca1e0b-f2a6-43a1-8457-75b5e3d936b4"}}];
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