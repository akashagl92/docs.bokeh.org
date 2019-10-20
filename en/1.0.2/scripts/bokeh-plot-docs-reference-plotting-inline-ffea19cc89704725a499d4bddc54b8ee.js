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
      };var element = document.getElementById("c66c1bb1-89ee-4c6b-8561-42f79e723bcb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c66c1bb1-89ee-4c6b-8561-42f79e723bcb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"648f04e0-6a4d-479c-8dc0-4fa680ef7cc2":{"roots":{"references":[{"attributes":{},"id":"33099","type":"SaveTool"},{"attributes":{},"id":"33101","type":"HelpTool"},{"attributes":{},"id":"33096","type":"PanTool"},{"attributes":{},"id":"33087","type":"BasicTicker"},{"attributes":{},"id":"33082","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33104","type":"BoxAnnotation"},{"attributes":{},"id":"33124","type":"Selection"},{"attributes":{"callback":null},"id":"33080","type":"DataRange1d"},{"attributes":{},"id":"33123","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33096","type":"PanTool"},{"id":"33097","type":"WheelZoomTool"},{"id":"33098","type":"BoxZoomTool"},{"id":"33099","type":"SaveTool"},{"id":"33100","type":"ResetTool"},{"id":"33101","type":"HelpTool"}]},"id":"33102","type":"Toolbar"},{"attributes":{},"id":"33121","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"33111","type":"ColumnDataSource"},"glyph":{"id":"33112","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33113","type":"Ellipse"},"selection_glyph":null,"view":{"id":"33115","type":"CDSView"}},"id":"33114","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"33104","type":"BoxAnnotation"}},"id":"33098","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"33086","type":"LinearAxis"}],"left":[{"id":"33091","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33086","type":"LinearAxis"},{"id":"33090","type":"Grid"},{"id":"33091","type":"LinearAxis"},{"id":"33095","type":"Grid"},{"id":"33104","type":"BoxAnnotation"},{"id":"33114","type":"GlyphRenderer"}],"title":{"id":"33117","type":"Title"},"toolbar":{"id":"33102","type":"Toolbar"},"x_range":{"id":"33078","type":"DataRange1d"},"x_scale":{"id":"33082","type":"LinearScale"},"y_range":{"id":"33080","type":"DataRange1d"},"y_scale":{"id":"33084","type":"LinearScale"}},"id":"33077","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33124","type":"Selection"},"selection_policy":{"id":"33123","type":"UnionRenderers"}},"id":"33111","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"33112","type":"Ellipse"},{"attributes":{},"id":"33119","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"33078","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"33113","type":"Ellipse"},{"attributes":{},"id":"33084","type":"LinearScale"},{"attributes":{"formatter":{"id":"33121","type":"BasicTickFormatter"},"plot":{"id":"33077","subtype":"Figure","type":"Plot"},"ticker":{"id":"33092","type":"BasicTicker"}},"id":"33091","type":"LinearAxis"},{"attributes":{},"id":"33097","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"33077","subtype":"Figure","type":"Plot"},"ticker":{"id":"33087","type":"BasicTicker"}},"id":"33090","type":"Grid"},{"attributes":{},"id":"33092","type":"BasicTicker"},{"attributes":{"formatter":{"id":"33119","type":"BasicTickFormatter"},"plot":{"id":"33077","subtype":"Figure","type":"Plot"},"ticker":{"id":"33087","type":"BasicTicker"}},"id":"33086","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"33117","type":"Title"},{"attributes":{"source":{"id":"33111","type":"ColumnDataSource"}},"id":"33115","type":"CDSView"},{"attributes":{},"id":"33100","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"33077","subtype":"Figure","type":"Plot"},"ticker":{"id":"33092","type":"BasicTicker"}},"id":"33095","type":"Grid"}],"root_ids":["33077"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"648f04e0-6a4d-479c-8dc0-4fa680ef7cc2","roots":{"33077":"c66c1bb1-89ee-4c6b-8561-42f79e723bcb"}}];
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