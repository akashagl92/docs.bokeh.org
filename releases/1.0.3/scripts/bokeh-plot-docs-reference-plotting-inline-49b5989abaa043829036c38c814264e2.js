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
      };var element = document.getElementById("8891663d-2b54-41e8-81a5-2a749bcb92dd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8891663d-2b54-41e8-81a5-2a749bcb92dd' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6d80d0f3-eba6-473d-87c7-a0afc8c65c3e":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"32355","type":"Annulus"},{"attributes":{},"id":"32362","type":"BasicTickFormatter"},{"attributes":{},"id":"32334","type":"BasicTicker"},{"attributes":{"source":{"id":"32353","type":"ColumnDataSource"}},"id":"32357","type":"CDSView"},{"attributes":{"below":[{"id":"32328","type":"LinearAxis"}],"left":[{"id":"32333","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32328","type":"LinearAxis"},{"id":"32332","type":"Grid"},{"id":"32333","type":"LinearAxis"},{"id":"32337","type":"Grid"},{"id":"32346","type":"BoxAnnotation"},{"id":"32356","type":"GlyphRenderer"}],"title":{"id":"32358","type":"Title"},"toolbar":{"id":"32344","type":"Toolbar"},"x_range":{"id":"32320","type":"DataRange1d"},"x_scale":{"id":"32324","type":"LinearScale"},"y_range":{"id":"32322","type":"DataRange1d"},"y_scale":{"id":"32326","type":"LinearScale"}},"id":"32319","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32338","type":"PanTool"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"32354","type":"Annulus"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32365","type":"Selection"},"selection_policy":{"id":"32366","type":"UnionRenderers"}},"id":"32353","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"32358","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"32319","subtype":"Figure","type":"Plot"},"ticker":{"id":"32334","type":"BasicTicker"}},"id":"32337","type":"Grid"},{"attributes":{},"id":"32360","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32346","type":"BoxAnnotation"},{"attributes":{},"id":"32329","type":"BasicTicker"},{"attributes":{},"id":"32341","type":"SaveTool"},{"attributes":{"callback":null},"id":"32320","type":"DataRange1d"},{"attributes":{},"id":"32324","type":"LinearScale"},{"attributes":{},"id":"32339","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"32346","type":"BoxAnnotation"}},"id":"32340","type":"BoxZoomTool"},{"attributes":{},"id":"32365","type":"Selection"},{"attributes":{"callback":null},"id":"32322","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32338","type":"PanTool"},{"id":"32339","type":"WheelZoomTool"},{"id":"32340","type":"BoxZoomTool"},{"id":"32341","type":"SaveTool"},{"id":"32342","type":"ResetTool"},{"id":"32343","type":"HelpTool"}]},"id":"32344","type":"Toolbar"},{"attributes":{"formatter":{"id":"32362","type":"BasicTickFormatter"},"plot":{"id":"32319","subtype":"Figure","type":"Plot"},"ticker":{"id":"32329","type":"BasicTicker"}},"id":"32328","type":"LinearAxis"},{"attributes":{},"id":"32342","type":"ResetTool"},{"attributes":{"plot":{"id":"32319","subtype":"Figure","type":"Plot"},"ticker":{"id":"32329","type":"BasicTicker"}},"id":"32332","type":"Grid"},{"attributes":{},"id":"32343","type":"HelpTool"},{"attributes":{},"id":"32366","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"32353","type":"ColumnDataSource"},"glyph":{"id":"32354","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32355","type":"Annulus"},"selection_glyph":null,"view":{"id":"32357","type":"CDSView"}},"id":"32356","type":"GlyphRenderer"},{"attributes":{},"id":"32326","type":"LinearScale"},{"attributes":{"formatter":{"id":"32360","type":"BasicTickFormatter"},"plot":{"id":"32319","subtype":"Figure","type":"Plot"},"ticker":{"id":"32334","type":"BasicTicker"}},"id":"32333","type":"LinearAxis"}],"root_ids":["32319"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"6d80d0f3-eba6-473d-87c7-a0afc8c65c3e","roots":{"32319":"8891663d-2b54-41e8-81a5-2a749bcb92dd"}}];
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