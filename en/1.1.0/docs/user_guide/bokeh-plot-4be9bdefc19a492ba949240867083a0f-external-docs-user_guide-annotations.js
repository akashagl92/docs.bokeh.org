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
      };var element = document.getElementById("60609c80-0995-4a72-b1a4-e3a6bedd0875");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '60609c80-0995-4a72-b1a4-e3a6bedd0875' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"0300f590-3daa-48eb-9c87-632a7ee53435":{"roots":{"references":[{"attributes":{"level":"glyph","source":{"id":"18307","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"18347","type":"LabelSet"},{"attributes":{"below":[{"id":"18319","type":"LinearAxis"}],"center":[{"id":"18323","type":"Grid"},{"id":"18328","type":"Grid"},{"id":"18347","type":"LabelSet"},{"id":"18349","type":"Label"}],"left":[{"id":"18324","type":"LinearAxis"}],"renderers":[{"id":"18345","type":"GlyphRenderer"}],"title":{"id":"18310","type":"Title"},"toolbar":{"id":"18335","type":"Toolbar"},"x_range":{"id":"18308","type":"Range1d"},"x_scale":{"id":"18315","type":"LinearScale"},"y_range":{"id":"18313","type":"DataRange1d"},"y_scale":{"id":"18317","type":"LinearScale"}},"id":"18309","subtype":"Figure","type":"Plot"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"18349","type":"Label"},{"attributes":{"data_source":{"id":"18307","type":"ColumnDataSource"},"glyph":{"id":"18343","type":"Scatter"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18344","type":"Scatter"},"selection_glyph":null,"view":{"id":"18346","type":"CDSView"}},"id":"18345","type":"GlyphRenderer"},{"attributes":{"text":"Dist. of 10th Grade Students at Lee High"},"id":"18310","type":"Title"},{"attributes":{},"id":"18355","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"18357","type":"BoxAnnotation"}},"id":"18331","type":"BoxZoomTool"},{"attributes":{},"id":"18334","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"18343","type":"Scatter"},{"attributes":{},"id":"18352","type":"BasicTickFormatter"},{"attributes":{},"id":"18329","type":"PanTool"},{"attributes":{},"id":"18356","type":"Selection"},{"attributes":{},"id":"18330","type":"WheelZoomTool"},{"attributes":{},"id":"18315","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18357","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18329","type":"PanTool"},{"id":"18330","type":"WheelZoomTool"},{"id":"18331","type":"BoxZoomTool"},{"id":"18332","type":"SaveTool"},{"id":"18333","type":"ResetTool"},{"id":"18334","type":"HelpTool"}]},"id":"18335","type":"Toolbar"},{"attributes":{},"id":"18320","type":"BasicTicker"},{"attributes":{},"id":"18354","type":"BasicTickFormatter"},{"attributes":{},"id":"18325","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"18344","type":"Scatter"},{"attributes":{},"id":"18332","type":"SaveTool"},{"attributes":{"callback":null,"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]},"selected":{"id":"18356","type":"Selection"},"selection_policy":{"id":"18355","type":"UnionRenderers"}},"id":"18307","type":"ColumnDataSource"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"18352","type":"BasicTickFormatter"},"ticker":{"id":"18325","type":"BasicTicker"}},"id":"18324","type":"LinearAxis"},{"attributes":{"source":{"id":"18307","type":"ColumnDataSource"}},"id":"18346","type":"CDSView"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"18354","type":"BasicTickFormatter"},"ticker":{"id":"18320","type":"BasicTicker"}},"id":"18319","type":"LinearAxis"},{"attributes":{"callback":null,"end":275,"start":140},"id":"18308","type":"Range1d"},{"attributes":{"ticker":{"id":"18320","type":"BasicTicker"}},"id":"18323","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"18325","type":"BasicTicker"}},"id":"18328","type":"Grid"},{"attributes":{},"id":"18333","type":"ResetTool"},{"attributes":{},"id":"18317","type":"LinearScale"},{"attributes":{"callback":null},"id":"18313","type":"DataRange1d"}],"root_ids":["18309"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"0300f590-3daa-48eb-9c87-632a7ee53435","roots":{"18309":"60609c80-0995-4a72-b1a4-e3a6bedd0875"}}];
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