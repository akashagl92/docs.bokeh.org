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
      };var element = document.getElementById("f06c275e-ca7d-4dc2-ad8e-f4b30e7010c1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f06c275e-ca7d-4dc2-ad8e-f4b30e7010c1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"37bcfd9d-4de7-4cdd-9602-2969772d1ea2":{"roots":{"references":[{"attributes":{},"id":"34822","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"34820","type":"BasicTickFormatter"},"plot":{"id":"34777","subtype":"Figure","type":"Plot"},"ticker":{"id":"34787","type":"BasicTicker"}},"id":"34786","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34813","type":"Triangle"},{"attributes":{"callback":null},"id":"34780","type":"DataRange1d"},{"attributes":{},"id":"34801","type":"HelpTool"},{"attributes":{"formatter":{"id":"34818","type":"BasicTickFormatter"},"plot":{"id":"34777","subtype":"Figure","type":"Plot"},"ticker":{"id":"34792","type":"BasicTicker"}},"id":"34791","type":"LinearAxis"},{"attributes":{},"id":"34797","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"34816","type":"Title"},{"attributes":{"plot":{"id":"34777","subtype":"Figure","type":"Plot"},"ticker":{"id":"34787","type":"BasicTicker"}},"id":"34790","type":"Grid"},{"attributes":{"overlay":{"id":"34804","type":"BoxAnnotation"}},"id":"34798","type":"BoxZoomTool"},{"attributes":{},"id":"34823","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"34777","subtype":"Figure","type":"Plot"},"ticker":{"id":"34792","type":"BasicTicker"}},"id":"34795","type":"Grid"},{"attributes":{},"id":"34800","type":"ResetTool"},{"attributes":{},"id":"34796","type":"PanTool"},{"attributes":{"below":[{"id":"34786","type":"LinearAxis"}],"left":[{"id":"34791","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34786","type":"LinearAxis"},{"id":"34790","type":"Grid"},{"id":"34791","type":"LinearAxis"},{"id":"34795","type":"Grid"},{"id":"34804","type":"BoxAnnotation"},{"id":"34814","type":"GlyphRenderer"}],"title":{"id":"34816","type":"Title"},"toolbar":{"id":"34802","type":"Toolbar"},"x_range":{"id":"34778","type":"DataRange1d"},"x_scale":{"id":"34782","type":"LinearScale"},"y_range":{"id":"34780","type":"DataRange1d"},"y_scale":{"id":"34784","type":"LinearScale"}},"id":"34777","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34792","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34804","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34778","type":"DataRange1d"},{"attributes":{"source":{"id":"34811","type":"ColumnDataSource"}},"id":"34815","type":"CDSView"},{"attributes":{},"id":"34818","type":"BasicTickFormatter"},{"attributes":{},"id":"34782","type":"LinearScale"},{"attributes":{"data_source":{"id":"34811","type":"ColumnDataSource"},"glyph":{"id":"34812","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34813","type":"Triangle"},"selection_glyph":null,"view":{"id":"34815","type":"CDSView"}},"id":"34814","type":"GlyphRenderer"},{"attributes":{},"id":"34820","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34812","type":"Triangle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34796","type":"PanTool"},{"id":"34797","type":"WheelZoomTool"},{"id":"34798","type":"BoxZoomTool"},{"id":"34799","type":"SaveTool"},{"id":"34800","type":"ResetTool"},{"id":"34801","type":"HelpTool"}]},"id":"34802","type":"Toolbar"},{"attributes":{},"id":"34787","type":"BasicTicker"},{"attributes":{},"id":"34784","type":"LinearScale"},{"attributes":{},"id":"34799","type":"SaveTool"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34823","type":"Selection"},"selection_policy":{"id":"34822","type":"UnionRenderers"}},"id":"34811","type":"ColumnDataSource"}],"root_ids":["34777"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"37bcfd9d-4de7-4cdd-9602-2969772d1ea2","roots":{"34777":"f06c275e-ca7d-4dc2-ad8e-f4b30e7010c1"}}];
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