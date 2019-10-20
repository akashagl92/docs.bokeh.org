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
      };var element = document.getElementById("9355d18f-44f7-4f12-8f11-c4b50757cb01");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9355d18f-44f7-4f12-8f11-c4b50757cb01' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"2e809828-6ad9-4bdc-81c7-fa8e97341d03":{"roots":{"references":[{"attributes":{"callback":null,"data":{"fill_color":["red","green"],"line_color":["red","green"],"xs":[[[[1,1,2,2]]],[[[1,1,3],[1.5,1.5,2]]]],"ys":[[[[4,3,3,4]]],[[[1,3,1],[1.5,2,1.5]]]]},"selected":{"id":"16160","type":"Selection"},"selection_policy":{"id":"16161","type":"UnionRenderers"}},"id":"16149","type":"ColumnDataSource"},{"attributes":{},"id":"16159","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"16118","type":"DataRange1d"},{"attributes":{},"id":"16160","type":"Selection"},{"attributes":{"formatter":{"id":"16157","type":"BasicTickFormatter"},"ticker":{"id":"16132","type":"BasicTicker"}},"id":"16131","type":"LinearAxis"},{"attributes":{},"id":"16157","type":"BasicTickFormatter"},{"attributes":{},"id":"16127","type":"BasicTicker"},{"attributes":{"below":[{"id":"16126","type":"LinearAxis"}],"center":[{"id":"16130","type":"Grid"},{"id":"16135","type":"Grid"}],"left":[{"id":"16131","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16152","type":"GlyphRenderer"}],"title":{"id":"16155","type":"Title"},"toolbar":{"id":"16142","type":"Toolbar"},"x_range":{"id":"16118","type":"DataRange1d"},"x_scale":{"id":"16122","type":"LinearScale"},"y_range":{"id":"16120","type":"DataRange1d"},"y_scale":{"id":"16124","type":"LinearScale"}},"id":"16117","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"16149","type":"ColumnDataSource"}},"id":"16153","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16151","type":"MultiPolygons"},{"attributes":{"formatter":{"id":"16159","type":"BasicTickFormatter"},"ticker":{"id":"16127","type":"BasicTicker"}},"id":"16126","type":"LinearAxis"},{"attributes":{"ticker":{"id":"16127","type":"BasicTicker"}},"id":"16130","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16162","type":"BoxAnnotation"},{"attributes":{},"id":"16139","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16136","type":"PanTool"},{"id":"16137","type":"WheelZoomTool"},{"id":"16138","type":"BoxZoomTool"},{"id":"16139","type":"SaveTool"},{"id":"16140","type":"ResetTool"},{"id":"16141","type":"HelpTool"}]},"id":"16142","type":"Toolbar"},{"attributes":{},"id":"16136","type":"PanTool"},{"attributes":{"data_source":{"id":"16149","type":"ColumnDataSource"},"glyph":{"id":"16150","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16151","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"16153","type":"CDSView"}},"id":"16152","type":"GlyphRenderer"},{"attributes":{},"id":"16140","type":"ResetTool"},{"attributes":{},"id":"16141","type":"HelpTool"},{"attributes":{},"id":"16132","type":"BasicTicker"},{"attributes":{"overlay":{"id":"16162","type":"BoxAnnotation"}},"id":"16138","type":"BoxZoomTool"},{"attributes":{},"id":"16124","type":"LinearScale"},{"attributes":{},"id":"16122","type":"LinearScale"},{"attributes":{"text":""},"id":"16155","type":"Title"},{"attributes":{},"id":"16161","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"16132","type":"BasicTicker"}},"id":"16135","type":"Grid"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16150","type":"MultiPolygons"},{"attributes":{"callback":null},"id":"16120","type":"DataRange1d"},{"attributes":{},"id":"16137","type":"WheelZoomTool"}],"root_ids":["16117"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"2e809828-6ad9-4bdc-81c7-fa8e97341d03","roots":{"16117":"9355d18f-44f7-4f12-8f11-c4b50757cb01"}}];
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
        
        
        }
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