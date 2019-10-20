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
      };var element = document.getElementById("9c29b3ac-3aa3-4df1-863d-b31f166e9bfb");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9c29b3ac-3aa3-4df1-863d-b31f166e9bfb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0ed79c3c-1992-4b6c-bd16-ea07ff575e80":{"roots":{"references":[{"attributes":{"text":""},"id":"17400","type":"Title"},{"attributes":{"formatter":{"id":"17402","type":"BasicTickFormatter"},"ticker":{"id":"17377","type":"BasicTicker"}},"id":"17376","type":"LinearAxis"},{"attributes":{"source":{"id":"17394","type":"ColumnDataSource"}},"id":"17398","type":"CDSView"},{"attributes":{"callback":null},"id":"17363","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17407","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"17394","type":"ColumnDataSource"},"glyph":{"id":"17395","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17396","type":"Wedge"},"selection_glyph":null,"view":{"id":"17398","type":"CDSView"}},"id":"17397","type":"GlyphRenderer"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17396","type":"Wedge"},{"attributes":{},"id":"17404","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"17372","type":"BasicTicker"}},"id":"17375","type":"Grid"},{"attributes":{},"id":"17384","type":"SaveTool"},{"attributes":{},"id":"17377","type":"BasicTicker"},{"attributes":{"callback":null},"id":"17365","type":"DataRange1d"},{"attributes":{},"id":"17369","type":"LinearScale"},{"attributes":{"formatter":{"id":"17404","type":"BasicTickFormatter"},"ticker":{"id":"17372","type":"BasicTicker"}},"id":"17371","type":"LinearAxis"},{"attributes":{"overlay":{"id":"17407","type":"BoxAnnotation"}},"id":"17383","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"17371","type":"LinearAxis"}],"center":[{"id":"17375","type":"Grid"},{"id":"17380","type":"Grid"}],"left":[{"id":"17376","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17397","type":"GlyphRenderer"}],"title":{"id":"17400","type":"Title"},"toolbar":{"id":"17387","type":"Toolbar"},"x_range":{"id":"17363","type":"DataRange1d"},"x_scale":{"id":"17367","type":"LinearScale"},"y_range":{"id":"17365","type":"DataRange1d"},"y_scale":{"id":"17369","type":"LinearScale"}},"id":"17362","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17386","type":"HelpTool"},{"attributes":{},"id":"17382","type":"WheelZoomTool"},{"attributes":{},"id":"17405","type":"Selection"},{"attributes":{},"id":"17406","type":"UnionRenderers"},{"attributes":{},"id":"17367","type":"LinearScale"},{"attributes":{},"id":"17402","type":"BasicTickFormatter"},{"attributes":{},"id":"17372","type":"BasicTicker"},{"attributes":{},"id":"17381","type":"PanTool"},{"attributes":{},"id":"17385","type":"ResetTool"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17395","type":"Wedge"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"17405","type":"Selection"},"selection_policy":{"id":"17406","type":"UnionRenderers"}},"id":"17394","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"17377","type":"BasicTicker"}},"id":"17380","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17381","type":"PanTool"},{"id":"17382","type":"WheelZoomTool"},{"id":"17383","type":"BoxZoomTool"},{"id":"17384","type":"SaveTool"},{"id":"17385","type":"ResetTool"},{"id":"17386","type":"HelpTool"}]},"id":"17387","type":"Toolbar"}],"root_ids":["17362"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"0ed79c3c-1992-4b6c-bd16-ea07ff575e80","roots":{"17362":"9c29b3ac-3aa3-4df1-863d-b31f166e9bfb"}}];
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