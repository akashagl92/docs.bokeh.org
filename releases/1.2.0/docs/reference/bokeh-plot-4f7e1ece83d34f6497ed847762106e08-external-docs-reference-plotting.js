(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("a131949c-0704-4346-8673-90fad4b1924d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a131949c-0704-4346-8673-90fad4b1924d' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"c77df39d-032a-44ab-96c0-d818366d264d":{"roots":{"references":[{"attributes":{"source":{"id":"16543","type":"ColumnDataSource"}},"id":"16547","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"16544","type":"Ray"},{"attributes":{},"id":"16516","type":"LinearScale"},{"attributes":{},"id":"16554","type":"Selection"},{"attributes":{"data_source":{"id":"16543","type":"ColumnDataSource"},"glyph":{"id":"16544","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16545","type":"Ray"},"selection_glyph":null,"view":{"id":"16547","type":"CDSView"}},"id":"16546","type":"GlyphRenderer"},{"attributes":{},"id":"16518","type":"LinearScale"},{"attributes":{},"id":"16552","type":"BasicTickFormatter"},{"attributes":{},"id":"16530","type":"PanTool"},{"attributes":{"text":""},"id":"16548","type":"Title"},{"attributes":{"formatter":{"id":"16552","type":"BasicTickFormatter"},"ticker":{"id":"16521","type":"BasicTicker"}},"id":"16520","type":"LinearAxis"},{"attributes":{},"id":"16531","type":"WheelZoomTool"},{"attributes":{},"id":"16550","type":"BasicTickFormatter"},{"attributes":{},"id":"16521","type":"BasicTicker"},{"attributes":{"overlay":{"id":"16556","type":"BoxAnnotation"}},"id":"16532","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"16521","type":"BasicTicker"}},"id":"16524","type":"Grid"},{"attributes":{},"id":"16533","type":"SaveTool"},{"attributes":{"below":[{"id":"16520","type":"LinearAxis"}],"center":[{"id":"16524","type":"Grid"},{"id":"16529","type":"Grid"}],"left":[{"id":"16525","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16546","type":"GlyphRenderer"}],"title":{"id":"16548","type":"Title"},"toolbar":{"id":"16536","type":"Toolbar"},"x_range":{"id":"16512","type":"DataRange1d"},"x_scale":{"id":"16516","type":"LinearScale"},"y_range":{"id":"16514","type":"DataRange1d"},"y_scale":{"id":"16518","type":"LinearScale"}},"id":"16511","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"16550","type":"BasicTickFormatter"},"ticker":{"id":"16526","type":"BasicTicker"}},"id":"16525","type":"LinearAxis"},{"attributes":{},"id":"16534","type":"ResetTool"},{"attributes":{},"id":"16526","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16554","type":"Selection"},"selection_policy":{"id":"16555","type":"UnionRenderers"}},"id":"16543","type":"ColumnDataSource"},{"attributes":{},"id":"16535","type":"HelpTool"},{"attributes":{"callback":null},"id":"16512","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"16526","type":"BasicTicker"}},"id":"16529","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16556","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16530","type":"PanTool"},{"id":"16531","type":"WheelZoomTool"},{"id":"16532","type":"BoxZoomTool"},{"id":"16533","type":"SaveTool"},{"id":"16534","type":"ResetTool"},{"id":"16535","type":"HelpTool"}]},"id":"16536","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"16545","type":"Ray"},{"attributes":{"callback":null},"id":"16514","type":"DataRange1d"},{"attributes":{},"id":"16555","type":"UnionRenderers"}],"root_ids":["16511"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"c77df39d-032a-44ab-96c0-d818366d264d","roots":{"16511":"a131949c-0704-4346-8673-90fad4b1924d"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();