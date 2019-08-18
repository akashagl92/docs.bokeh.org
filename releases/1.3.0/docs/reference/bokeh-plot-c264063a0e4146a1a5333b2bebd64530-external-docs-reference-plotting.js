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
      };var element = document.getElementById("233b1dce-a38b-4251-a718-ccf9df149329");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '233b1dce-a38b-4251-a718-ccf9df149329' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"c62668d5-8c50-4db5-be68-e449d6e37887":{"roots":{"references":[{"attributes":{},"id":"16140","type":"HelpTool"},{"attributes":{"source":{"id":"16148","type":"ColumnDataSource"}},"id":"16152","type":"CDSView"},{"attributes":{"ticker":{"id":"16126","type":"BasicTicker"}},"id":"16129","type":"Grid"},{"attributes":{},"id":"16139","type":"ResetTool"},{"attributes":{"below":[{"id":"16125","type":"LinearAxis"}],"center":[{"id":"16129","type":"Grid"},{"id":"16134","type":"Grid"}],"left":[{"id":"16130","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16151","type":"GlyphRenderer"}],"title":{"id":"16154","type":"Title"},"toolbar":{"id":"16141","type":"Toolbar"},"x_range":{"id":"16117","type":"DataRange1d"},"x_scale":{"id":"16121","type":"LinearScale"},"y_range":{"id":"16119","type":"DataRange1d"},"y_scale":{"id":"16123","type":"LinearScale"}},"id":"16116","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"16158","type":"BasicTickFormatter"},"ticker":{"id":"16131","type":"BasicTicker"}},"id":"16130","type":"LinearAxis"},{"attributes":{},"id":"16138","type":"SaveTool"},{"attributes":{"text":""},"id":"16154","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16150","type":"MultiPolygons"},{"attributes":{},"id":"16131","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16117","type":"DataRange1d"},{"attributes":{"overlay":{"id":"16159","type":"BoxAnnotation"}},"id":"16137","type":"BoxZoomTool"},{"attributes":{},"id":"16156","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"16131","type":"BasicTicker"}},"id":"16134","type":"Grid"},{"attributes":{},"id":"16136","type":"WheelZoomTool"},{"attributes":{},"id":"16158","type":"BasicTickFormatter"},{"attributes":{},"id":"16123","type":"LinearScale"},{"attributes":{"callback":null},"id":"16119","type":"DataRange1d"},{"attributes":{},"id":"16135","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16159","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"16148","type":"ColumnDataSource"},"glyph":{"id":"16149","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16150","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"16152","type":"CDSView"}},"id":"16151","type":"GlyphRenderer"},{"attributes":{},"id":"16121","type":"LinearScale"},{"attributes":{"callback":null,"data":{"fill_color":["red","green"],"line_color":["red","green"],"xs":[[[[1,1,2,2]]],[[[1,1,3],[1.5,1.5,2]]]],"ys":[[[[4,3,3,4]]],[[[1,3,1],[1.5,2,1.5]]]]},"selected":{"id":"16161","type":"Selection"},"selection_policy":{"id":"16160","type":"UnionRenderers"}},"id":"16148","type":"ColumnDataSource"},{"attributes":{},"id":"16160","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"16156","type":"BasicTickFormatter"},"ticker":{"id":"16126","type":"BasicTicker"}},"id":"16125","type":"LinearAxis"},{"attributes":{},"id":"16161","type":"Selection"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16149","type":"MultiPolygons"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16135","type":"PanTool"},{"id":"16136","type":"WheelZoomTool"},{"id":"16137","type":"BoxZoomTool"},{"id":"16138","type":"SaveTool"},{"id":"16139","type":"ResetTool"},{"id":"16140","type":"HelpTool"}]},"id":"16141","type":"Toolbar"},{"attributes":{},"id":"16126","type":"BasicTicker"}],"root_ids":["16116"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"c62668d5-8c50-4db5-be68-e449d6e37887","roots":{"16116":"233b1dce-a38b-4251-a718-ccf9df149329"}}];
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