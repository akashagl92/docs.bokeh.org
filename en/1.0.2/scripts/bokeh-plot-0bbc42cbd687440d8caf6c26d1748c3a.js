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
      };var element = document.getElementById("2d3e352e-9dde-46ce-afbe-46af77f947ee");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d3e352e-9dde-46ce-afbe-46af77f947ee' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d529b6c4-6c42-49bf-a538-fb1332c25419":{"roots":{"references":[{"attributes":{},"id":"17818","type":"HelpTool"},{"attributes":{"formatter":{"id":"17836","type":"BasicTickFormatter"},"plot":{"id":"17793","subtype":"Figure","type":"Plot"},"ticker":{"id":"17804","type":"BasicTicker"}},"id":"17803","type":"LinearAxis"},{"attributes":{"source":{"id":"17828","type":"ColumnDataSource"}},"id":"17832","type":"CDSView"},{"attributes":{"plot":{"id":"17793","subtype":"Figure","type":"Plot"},"ticker":{"id":"17804","type":"BasicTicker"}},"id":"17807","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","autohide":true,"tools":[{"id":"17813","type":"PanTool"},{"id":"17814","type":"WheelZoomTool"},{"id":"17815","type":"BoxZoomTool"},{"id":"17816","type":"SaveTool"},{"id":"17817","type":"ResetTool"},{"id":"17818","type":"HelpTool"}]},"id":"17819","type":"Toolbar"},{"attributes":{},"id":"17804","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"17793","subtype":"Figure","type":"Plot"},"ticker":{"id":"17809","type":"BasicTicker"}},"id":"17812","type":"Grid"},{"attributes":{},"id":"17817","type":"ResetTool"},{"attributes":{},"id":"17801","type":"LinearScale"},{"attributes":{},"id":"17809","type":"BasicTicker"},{"attributes":{"below":[{"id":"17803","type":"LinearAxis"}],"left":[{"id":"17808","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17803","type":"LinearAxis"},{"id":"17807","type":"Grid"},{"id":"17808","type":"LinearAxis"},{"id":"17812","type":"Grid"},{"id":"17821","type":"BoxAnnotation"},{"id":"17831","type":"GlyphRenderer"}],"title":{"id":"17792","type":"Title"},"toolbar":{"id":"17819","type":"Toolbar"},"x_range":{"id":"17795","type":"DataRange1d"},"x_scale":{"id":"17799","type":"LinearScale"},"y_range":{"id":"17797","type":"DataRange1d"},"y_scale":{"id":"17801","type":"LinearScale"}},"id":"17793","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"17841","type":"Selection"},"selection_policy":{"id":"17840","type":"UnionRenderers"}},"id":"17828","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17821","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"17838","type":"BasicTickFormatter"},"plot":{"id":"17793","subtype":"Figure","type":"Plot"},"ticker":{"id":"17809","type":"BasicTicker"}},"id":"17808","type":"LinearAxis"},{"attributes":{},"id":"17814","type":"WheelZoomTool"},{"attributes":{},"id":"17813","type":"PanTool"},{"attributes":{"callback":null},"id":"17795","type":"DataRange1d"},{"attributes":{"callback":null},"id":"17797","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Toolbar Autohide"},"id":"17792","type":"Title"},{"attributes":{},"id":"17816","type":"SaveTool"},{"attributes":{},"id":"17836","type":"BasicTickFormatter"},{"attributes":{},"id":"17840","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17829","type":"Line"},{"attributes":{"overlay":{"id":"17821","type":"BoxAnnotation"}},"id":"17815","type":"BoxZoomTool"},{"attributes":{},"id":"17799","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17830","type":"Line"},{"attributes":{},"id":"17838","type":"BasicTickFormatter"},{"attributes":{},"id":"17841","type":"Selection"},{"attributes":{"data_source":{"id":"17828","type":"ColumnDataSource"},"glyph":{"id":"17829","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17830","type":"Line"},"selection_glyph":null,"view":{"id":"17832","type":"CDSView"}},"id":"17831","type":"GlyphRenderer"}],"root_ids":["17793"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"d529b6c4-6c42-49bf-a538-fb1332c25419","roots":{"17793":"2d3e352e-9dde-46ce-afbe-46af77f947ee"}}];
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