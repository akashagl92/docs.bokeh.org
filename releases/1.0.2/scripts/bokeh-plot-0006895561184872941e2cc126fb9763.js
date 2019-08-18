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
      };var element = document.getElementById("8be15e54-1ebb-41e4-978e-ddc7cfa9e5f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8be15e54-1ebb-41e4-978e-ddc7cfa9e5f1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e14f87b8-85a4-44ac-aeab-f8508abe4395":{"roots":{"references":[{"attributes":{"source":{"id":"11067","type":"ColumnDataSource"}},"id":"11071","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"11028","subtype":"Figure","type":"Plot"},"ticker":{"id":"11043","type":"BasicTicker"}},"id":"11046","type":"Grid"},{"attributes":{},"id":"11077","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"11073","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11064","type":"Line"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11063","type":"Line"},{"attributes":{"overlay":{"id":"11055","type":"BoxAnnotation"}},"id":"11049","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"11062","type":"ColumnDataSource"},"glyph":{"id":"11063","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11064","type":"Line"},"selection_glyph":null,"view":{"id":"11066","type":"CDSView"}},"id":"11065","type":"GlyphRenderer"},{"attributes":{},"id":"11047","type":"PanTool"},{"attributes":{},"id":"11048","type":"WheelZoomTool"},{"attributes":{},"id":"11050","type":"SaveTool"},{"attributes":{},"id":"11043","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11047","type":"PanTool"},{"id":"11048","type":"WheelZoomTool"},{"id":"11049","type":"BoxZoomTool"},{"id":"11050","type":"SaveTool"},{"id":"11051","type":"ResetTool"},{"id":"11052","type":"HelpTool"}]},"id":"11053","type":"Toolbar"},{"attributes":{},"id":"11075","type":"BasicTickFormatter"},{"attributes":{},"id":"11080","type":"Selection"},{"attributes":{"below":[{"id":"11037","type":"LinearAxis"}],"left":[{"id":"11042","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11037","type":"LinearAxis"},{"id":"11041","type":"Grid"},{"id":"11042","type":"LinearAxis"},{"id":"11046","type":"Grid"},{"id":"11055","type":"BoxAnnotation"},{"id":"11065","type":"GlyphRenderer"},{"id":"11070","type":"GlyphRenderer"}],"title":{"id":"11073","type":"Title"},"toolbar":{"id":"11053","type":"Toolbar"},"x_range":{"id":"11029","type":"DataRange1d"},"x_scale":{"id":"11033","type":"LinearScale"},"y_range":{"id":"11031","type":"DataRange1d"},"y_scale":{"id":"11035","type":"LinearScale"}},"id":"11028","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11052","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"11080","type":"Selection"},"selection_policy":{"id":"11079","type":"UnionRenderers"}},"id":"11062","type":"ColumnDataSource"},{"attributes":{},"id":"11079","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"11029","type":"DataRange1d"},{"attributes":{},"id":"11051","type":"ResetTool"},{"attributes":{"formatter":{"id":"11075","type":"BasicTickFormatter"},"plot":{"id":"11028","subtype":"Figure","type":"Plot"},"ticker":{"id":"11038","type":"BasicTicker"}},"id":"11037","type":"LinearAxis"},{"attributes":{"callback":null},"id":"11031","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"11068","type":"Circle"},{"attributes":{},"id":"11033","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"11082","type":"Selection"},"selection_policy":{"id":"11081","type":"UnionRenderers"}},"id":"11067","type":"ColumnDataSource"},{"attributes":{},"id":"11035","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11055","type":"BoxAnnotation"},{"attributes":{"source":{"id":"11062","type":"ColumnDataSource"}},"id":"11066","type":"CDSView"},{"attributes":{},"id":"11082","type":"Selection"},{"attributes":{},"id":"11038","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"11069","type":"Circle"},{"attributes":{"plot":{"id":"11028","subtype":"Figure","type":"Plot"},"ticker":{"id":"11038","type":"BasicTicker"}},"id":"11041","type":"Grid"},{"attributes":{"data_source":{"id":"11067","type":"ColumnDataSource"},"glyph":{"id":"11068","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11069","type":"Circle"},"selection_glyph":null,"view":{"id":"11071","type":"CDSView"}},"id":"11070","type":"GlyphRenderer"},{"attributes":{},"id":"11081","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"11077","type":"BasicTickFormatter"},"plot":{"id":"11028","subtype":"Figure","type":"Plot"},"ticker":{"id":"11043","type":"BasicTicker"}},"id":"11042","type":"LinearAxis"}],"root_ids":["11028"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"e14f87b8-85a4-44ac-aeab-f8508abe4395","roots":{"11028":"8be15e54-1ebb-41e4-978e-ddc7cfa9e5f1"}}];
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