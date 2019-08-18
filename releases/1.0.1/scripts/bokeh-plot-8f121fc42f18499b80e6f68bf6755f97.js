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
      };var element = document.getElementById("dc0b9a20-3fe2-40bf-a5eb-a863e5c2d2a9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dc0b9a20-3fe2-40bf-a5eb-a863e5c2d2a9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b337079e-1fdc-4f2f-b259-8abfaa880e30":{"roots":{"references":[{"attributes":{},"id":"12170","type":"ResetTool"},{"attributes":{"below":[{"id":"12156","type":"LinearAxis"}],"left":[{"id":"12161","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12156","type":"LinearAxis"},{"id":"12160","type":"Grid"},{"id":"12161","type":"LinearAxis"},{"id":"12165","type":"Grid"},{"id":"12174","type":"BoxAnnotation"},{"id":"12184","type":"GlyphRenderer"}],"title":{"id":"12187","type":"Title"},"toolbar":{"id":"12172","type":"Toolbar"},"x_range":{"id":"12148","type":"DataRange1d"},"x_scale":{"id":"12152","type":"LinearScale"},"y_range":{"id":"12150","type":"DataRange1d"},"y_scale":{"id":"12154","type":"LinearScale"}},"id":"12147","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12183","type":"Square"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12182","type":"Square"},{"attributes":{},"id":"12171","type":"HelpTool"},{"attributes":{"data_source":{"id":"12181","type":"ColumnDataSource"},"glyph":{"id":"12182","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12183","type":"Square"},"selection_glyph":null,"view":{"id":"12185","type":"CDSView"}},"id":"12184","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"12187","type":"Title"},{"attributes":{"callback":null},"id":"12148","type":"DataRange1d"},{"attributes":{},"id":"12189","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12174","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"12193","type":"Selection"},"selection_policy":{"id":"12194","type":"UnionRenderers"}},"id":"12181","type":"ColumnDataSource"},{"attributes":{},"id":"12191","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"12150","type":"DataRange1d"},{"attributes":{},"id":"12166","type":"PanTool"},{"attributes":{},"id":"12152","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12166","type":"PanTool"},{"id":"12167","type":"WheelZoomTool"},{"id":"12168","type":"BoxZoomTool"},{"id":"12169","type":"SaveTool"},{"id":"12170","type":"ResetTool"},{"id":"12171","type":"HelpTool"}]},"id":"12172","type":"Toolbar"},{"attributes":{},"id":"12193","type":"Selection"},{"attributes":{},"id":"12167","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"12174","type":"BoxAnnotation"}},"id":"12168","type":"BoxZoomTool"},{"attributes":{},"id":"12157","type":"BasicTicker"},{"attributes":{},"id":"12194","type":"UnionRenderers"},{"attributes":{},"id":"12154","type":"LinearScale"},{"attributes":{},"id":"12169","type":"SaveTool"},{"attributes":{"formatter":{"id":"12191","type":"BasicTickFormatter"},"plot":{"id":"12147","subtype":"Figure","type":"Plot"},"ticker":{"id":"12162","type":"BasicTicker"}},"id":"12161","type":"LinearAxis"},{"attributes":{"formatter":{"id":"12189","type":"BasicTickFormatter"},"plot":{"id":"12147","subtype":"Figure","type":"Plot"},"ticker":{"id":"12157","type":"BasicTicker"}},"id":"12156","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"12147","subtype":"Figure","type":"Plot"},"ticker":{"id":"12162","type":"BasicTicker"}},"id":"12165","type":"Grid"},{"attributes":{"source":{"id":"12181","type":"ColumnDataSource"}},"id":"12185","type":"CDSView"},{"attributes":{},"id":"12162","type":"BasicTicker"},{"attributes":{"plot":{"id":"12147","subtype":"Figure","type":"Plot"},"ticker":{"id":"12157","type":"BasicTicker"}},"id":"12160","type":"Grid"}],"root_ids":["12147"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"b337079e-1fdc-4f2f-b259-8abfaa880e30","roots":{"12147":"dc0b9a20-3fe2-40bf-a5eb-a863e5c2d2a9"}}];
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