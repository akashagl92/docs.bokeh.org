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
      };var element = document.getElementById("f3e4040a-3251-4dd4-a743-f734c4eed6e0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f3e4040a-3251-4dd4-a743-f734c4eed6e0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d0c2db0a-81ca-4016-b8e1-72b213404d30":{"roots":{"references":[{"attributes":{},"id":"17134","type":"SaveTool"},{"attributes":{"text":""},"id":"17150","type":"Title"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"17157","type":"Selection"},"selection_policy":{"id":"17156","type":"UnionRenderers"}},"id":"17144","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"17154","type":"BasicTickFormatter"},"ticker":{"id":"17127","type":"BasicTicker"}},"id":"17126","type":"LinearAxis"},{"attributes":{},"id":"17132","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"17121","type":"LinearAxis"}],"center":[{"id":"17125","type":"Grid"},{"id":"17130","type":"Grid"}],"left":[{"id":"17126","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17147","type":"GlyphRenderer"}],"title":{"id":"17150","type":"Title"},"toolbar":{"id":"17137","type":"Toolbar"},"x_range":{"id":"17113","type":"DataRange1d"},"x_scale":{"id":"17117","type":"LinearScale"},"y_range":{"id":"17115","type":"DataRange1d"},"y_scale":{"id":"17119","type":"LinearScale"}},"id":"17112","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"17144","type":"ColumnDataSource"},"glyph":{"id":"17145","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17146","type":"Triangle"},"selection_glyph":null,"view":{"id":"17148","type":"CDSView"}},"id":"17147","type":"GlyphRenderer"},{"attributes":{},"id":"17122","type":"BasicTicker"},{"attributes":{},"id":"17119","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"17127","type":"BasicTicker"}},"id":"17130","type":"Grid"},{"attributes":{},"id":"17157","type":"Selection"},{"attributes":{"formatter":{"id":"17152","type":"BasicTickFormatter"},"ticker":{"id":"17122","type":"BasicTicker"}},"id":"17121","type":"LinearAxis"},{"attributes":{},"id":"17127","type":"BasicTicker"},{"attributes":{},"id":"17152","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17155","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17146","type":"Triangle"},{"attributes":{},"id":"17156","type":"UnionRenderers"},{"attributes":{},"id":"17154","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"17115","type":"DataRange1d"},{"attributes":{"overlay":{"id":"17155","type":"BoxAnnotation"}},"id":"17133","type":"BoxZoomTool"},{"attributes":{},"id":"17117","type":"LinearScale"},{"attributes":{},"id":"17135","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17131","type":"PanTool"},{"id":"17132","type":"WheelZoomTool"},{"id":"17133","type":"BoxZoomTool"},{"id":"17134","type":"SaveTool"},{"id":"17135","type":"ResetTool"},{"id":"17136","type":"HelpTool"}]},"id":"17137","type":"Toolbar"},{"attributes":{},"id":"17131","type":"PanTool"},{"attributes":{"source":{"id":"17144","type":"ColumnDataSource"}},"id":"17148","type":"CDSView"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17145","type":"Triangle"},{"attributes":{"callback":null},"id":"17113","type":"DataRange1d"},{"attributes":{},"id":"17136","type":"HelpTool"},{"attributes":{"ticker":{"id":"17122","type":"BasicTicker"}},"id":"17125","type":"Grid"}],"root_ids":["17112"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"d0c2db0a-81ca-4016-b8e1-72b213404d30","roots":{"17112":"f3e4040a-3251-4dd4-a743-f734c4eed6e0"}}];
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