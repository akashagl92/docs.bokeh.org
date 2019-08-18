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
      };var element = document.getElementById("cfb4d7e4-57fa-4a62-9a7d-0d5906683569");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cfb4d7e4-57fa-4a62-9a7d-0d5906683569' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"09a90c0f-8589-4e3e-893a-0646cd8e2553":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33125","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33111","type":"PanTool"},{"id":"33112","type":"WheelZoomTool"},{"id":"33113","type":"BoxZoomTool"},{"id":"33114","type":"SaveTool"},{"id":"33115","type":"ResetTool"},{"id":"33116","type":"HelpTool"}]},"id":"33117","type":"Toolbar"},{"attributes":{},"id":"33115","type":"ResetTool"},{"attributes":{},"id":"33116","type":"HelpTool"},{"attributes":{"formatter":{"id":"33132","type":"BasicTickFormatter"},"ticker":{"id":"33107","type":"BasicTicker"}},"id":"33106","type":"LinearAxis"},{"attributes":{},"id":"33132","type":"BasicTickFormatter"},{"attributes":{},"id":"33111","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33126","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"33135","type":"Selection"},"selection_policy":{"id":"33136","type":"UnionRenderers"}},"id":"33124","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"33137","type":"BoxAnnotation"}},"id":"33113","type":"BoxZoomTool"},{"attributes":{},"id":"33134","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"33124","type":"ColumnDataSource"}},"id":"33128","type":"CDSView"},{"attributes":{"callback":null},"id":"33093","type":"DataRange1d"},{"attributes":{},"id":"33136","type":"UnionRenderers"},{"attributes":{},"id":"33097","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33137","type":"BoxAnnotation"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"beige"},"below":[{"id":"33101","type":"LinearAxis"}],"center":[{"id":"33105","type":"Grid"},{"id":"33110","type":"Grid"}],"left":[{"id":"33106","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33127","type":"GlyphRenderer"}],"title":{"id":"33130","type":"Title"},"toolbar":{"id":"33117","type":"Toolbar"},"x_range":{"id":"33093","type":"DataRange1d"},"x_scale":{"id":"33097","type":"LinearScale"},"y_range":{"id":"33095","type":"DataRange1d"},"y_scale":{"id":"33099","type":"LinearScale"}},"id":"33092","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33114","type":"SaveTool"},{"attributes":{},"id":"33112","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"33095","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"33107","type":"BasicTicker"}},"id":"33110","type":"Grid"},{"attributes":{},"id":"33107","type":"BasicTicker"},{"attributes":{"ticker":{"id":"33102","type":"BasicTicker"}},"id":"33105","type":"Grid"},{"attributes":{},"id":"33135","type":"Selection"},{"attributes":{"text":""},"id":"33130","type":"Title"},{"attributes":{},"id":"33099","type":"LinearScale"},{"attributes":{"data_source":{"id":"33124","type":"ColumnDataSource"},"glyph":{"id":"33125","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33126","type":"Circle"},"selection_glyph":null,"view":{"id":"33128","type":"CDSView"}},"id":"33127","type":"GlyphRenderer"},{"attributes":{},"id":"33102","type":"BasicTicker"},{"attributes":{"formatter":{"id":"33134","type":"BasicTickFormatter"},"ticker":{"id":"33102","type":"BasicTicker"}},"id":"33101","type":"LinearAxis"}],"root_ids":["33092"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"09a90c0f-8589-4e3e-893a-0646cd8e2553","roots":{"33092":"cfb4d7e4-57fa-4a62-9a7d-0d5906683569"}}];
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