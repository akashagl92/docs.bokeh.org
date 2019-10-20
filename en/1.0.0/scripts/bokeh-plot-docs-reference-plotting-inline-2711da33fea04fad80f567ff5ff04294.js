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
      };var element = document.getElementById("ac6cfd8c-e7b8-4251-9c91-327366294482");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac6cfd8c-e7b8-4251-9c91-327366294482' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"40606a12-a89b-4677-ba23-ca14add11371":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33271","type":"BoxAnnotation"},{"attributes":{},"id":"33254","type":"BasicTicker"},{"attributes":{"plot":{"id":"33244","subtype":"Figure","type":"Plot"},"ticker":{"id":"33254","type":"BasicTicker"}},"id":"33257","type":"Grid"},{"attributes":{},"id":"33264","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"33244","subtype":"Figure","type":"Plot"},"ticker":{"id":"33259","type":"BasicTicker"}},"id":"33262","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33263","type":"PanTool"},{"id":"33264","type":"WheelZoomTool"},{"id":"33265","type":"BoxZoomTool"},{"id":"33266","type":"SaveTool"},{"id":"33267","type":"ResetTool"},{"id":"33268","type":"HelpTool"}]},"id":"33269","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33280","type":"Hex"},{"attributes":{"formatter":{"id":"33286","type":"BasicTickFormatter"},"plot":{"id":"33244","subtype":"Figure","type":"Plot"},"ticker":{"id":"33254","type":"BasicTicker"}},"id":"33253","type":"LinearAxis"},{"attributes":{"callback":null},"id":"33245","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"33284","type":"Title"},{"attributes":{"overlay":{"id":"33271","type":"BoxAnnotation"}},"id":"33265","type":"BoxZoomTool"},{"attributes":{},"id":"33291","type":"UnionRenderers"},{"attributes":{},"id":"33267","type":"ResetTool"},{"attributes":{},"id":"33288","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"33253","type":"LinearAxis"}],"left":[{"id":"33258","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33253","type":"LinearAxis"},{"id":"33257","type":"Grid"},{"id":"33258","type":"LinearAxis"},{"id":"33262","type":"Grid"},{"id":"33271","type":"BoxAnnotation"},{"id":"33281","type":"GlyphRenderer"}],"title":{"id":"33284","type":"Title"},"toolbar":{"id":"33269","type":"Toolbar"},"x_range":{"id":"33245","type":"DataRange1d"},"x_scale":{"id":"33249","type":"LinearScale"},"y_range":{"id":"33247","type":"DataRange1d"},"y_scale":{"id":"33251","type":"LinearScale"}},"id":"33244","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33249","type":"LinearScale"},{"attributes":{},"id":"33251","type":"LinearScale"},{"attributes":{"data_source":{"id":"33278","type":"ColumnDataSource"},"glyph":{"id":"33279","type":"Hex"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33280","type":"Hex"},"selection_glyph":null,"view":{"id":"33282","type":"CDSView"}},"id":"33281","type":"GlyphRenderer"},{"attributes":{},"id":"33263","type":"PanTool"},{"attributes":{},"id":"33268","type":"HelpTool"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33290","type":"Selection"},"selection_policy":{"id":"33291","type":"UnionRenderers"}},"id":"33278","type":"ColumnDataSource"},{"attributes":{"source":{"id":"33278","type":"ColumnDataSource"}},"id":"33282","type":"CDSView"},{"attributes":{},"id":"33290","type":"Selection"},{"attributes":{},"id":"33266","type":"SaveTool"},{"attributes":{},"id":"33286","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"33247","type":"DataRange1d"},{"attributes":{},"id":"33259","type":"BasicTicker"},{"attributes":{"formatter":{"id":"33288","type":"BasicTickFormatter"},"plot":{"id":"33244","subtype":"Figure","type":"Plot"},"ticker":{"id":"33259","type":"BasicTicker"}},"id":"33258","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33279","type":"Hex"}],"root_ids":["33244"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"40606a12-a89b-4677-ba23-ca14add11371","roots":{"33244":"ac6cfd8c-e7b8-4251-9c91-327366294482"}}];
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