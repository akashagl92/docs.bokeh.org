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
      };var element = document.getElementById("75be253a-c015-4f08-a4bd-a2abfab71c62");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '75be253a-c015-4f08-a4bd-a2abfab71c62' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
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
                    
                  var docs_json = '{"44ceb6ba-f5da-4b0d-88ea-7fb2e7e6841e":{"roots":{"references":[{"attributes":{"source":{"id":"26665","type":"ColumnDataSource"}},"id":"26669","type":"CDSView"},{"attributes":{"callback":null},"id":"26598","type":"DataRange1d"},{"attributes":{},"id":"26614","type":"PanTool"},{"attributes":{},"id":"26602","type":"LinearScale"},{"attributes":{},"id":"26712","type":"BasicTickFormatter"},{"attributes":{},"id":"26718","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"26594","subtype":"Figure","type":"Plot"},{"id":"26632","subtype":"Figure","type":"Plot"},{"id":"26670","subtype":"Figure","type":"Plot"}]},"id":"26708","type":"Column"},{"attributes":{},"id":"26681","type":"BasicTicker"},{"attributes":{"formatter":{"id":"26714","type":"BasicTickFormatter"},"ticker":{"id":"26605","type":"BasicTicker"}},"id":"26604","type":"LinearAxis"},{"attributes":{"below":[{"id":"26604","type":"LinearAxis"}],"center":[{"id":"26608","type":"Grid"},{"id":"26613","type":"Grid"}],"left":[{"id":"26609","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26630","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26620","type":"Toolbar"},"x_range":{"id":"26596","type":"DataRange1d"},"x_scale":{"id":"26600","type":"LinearScale"},"y_range":{"id":"26598","type":"DataRange1d"},"y_scale":{"id":"26602","type":"LinearScale"}},"id":"26594","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26695","type":"HelpTool"},{"attributes":{"callback":null},"id":"26634","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26690","type":"PanTool"},{"id":"26691","type":"WheelZoomTool"},{"id":"26692","type":"BoxZoomTool"},{"id":"26693","type":"SaveTool"},{"id":"26694","type":"ResetTool"},{"id":"26695","type":"HelpTool"}]},"id":"26696","type":"Toolbar"},{"attributes":{},"id":"26725","type":"UnionRenderers"},{"attributes":{},"id":"26638","type":"LinearScale"},{"attributes":{"callback":null},"id":"26636","type":"DataRange1d"},{"attributes":{"source":{"id":"26703","type":"ColumnDataSource"}},"id":"26707","type":"CDSView"},{"attributes":{},"id":"26691","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"26680","type":"LinearAxis"}],"center":[{"id":"26684","type":"Grid"},{"id":"26689","type":"Grid"}],"left":[{"id":"26685","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26706","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26696","type":"Toolbar"},"x_range":{"id":"26672","type":"DataRange1d"},"x_scale":{"id":"26676","type":"LinearScale"},"y_range":{"id":"26674","type":"DataRange1d"},"y_scale":{"id":"26678","type":"LinearScale"}},"id":"26670","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26657","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26667","type":"Triangle"},{"attributes":{},"id":"26600","type":"LinearScale"},{"attributes":{"formatter":{"id":"26716","type":"BasicTickFormatter"},"ticker":{"id":"26648","type":"BasicTicker"}},"id":"26647","type":"LinearAxis"},{"attributes":{},"id":"26610","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26629","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"26730","type":"Selection"},"selection_policy":{"id":"26731","type":"UnionRenderers"}},"id":"26703","type":"ColumnDataSource"},{"attributes":{},"id":"26716","type":"BasicTickFormatter"},{"attributes":{},"id":"26676","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"26724","type":"Selection"},"selection_policy":{"id":"26725","type":"UnionRenderers"}},"id":"26627","type":"ColumnDataSource"},{"attributes":{},"id":"26643","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26726","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"26722","type":"BasicTickFormatter"},"ticker":{"id":"26681","type":"BasicTicker"}},"id":"26680","type":"LinearAxis"},{"attributes":{"ticker":{"id":"26643","type":"BasicTicker"}},"id":"26646","type":"Grid"},{"attributes":{},"id":"26727","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26705","type":"Square"},{"attributes":{},"id":"26653","type":"WheelZoomTool"},{"attributes":{},"id":"26720","type":"BasicTickFormatter"},{"attributes":{},"id":"26714","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"26627","type":"ColumnDataSource"}},"id":"26631","type":"CDSView"},{"attributes":{"overlay":{"id":"26729","type":"BoxAnnotation"}},"id":"26654","type":"BoxZoomTool"},{"attributes":{},"id":"26724","type":"Selection"},{"attributes":{},"id":"26694","type":"ResetTool"},{"attributes":{},"id":"26618","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"26648","type":"BasicTicker"}},"id":"26651","type":"Grid"},{"attributes":{},"id":"26693","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26729","type":"BoxAnnotation"},{"attributes":{},"id":"26640","type":"LinearScale"},{"attributes":{},"id":"26731","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"26596","type":"DataRange1d"},{"attributes":{"below":[{"id":"26642","type":"LinearAxis"}],"center":[{"id":"26646","type":"Grid"},{"id":"26651","type":"Grid"}],"left":[{"id":"26647","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26668","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26658","type":"Toolbar"},"x_range":{"id":"26634","type":"DataRange1d"},"x_scale":{"id":"26638","type":"LinearScale"},"y_range":{"id":"26636","type":"DataRange1d"},"y_scale":{"id":"26640","type":"LinearScale"}},"id":"26632","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26615","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26666","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26628","type":"Circle"},{"attributes":{"overlay":{"id":"26732","type":"BoxAnnotation"}},"id":"26692","type":"BoxZoomTool"},{"attributes":{},"id":"26605","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26704","type":"Square"},{"attributes":{},"id":"26690","type":"PanTool"},{"attributes":{"formatter":{"id":"26718","type":"BasicTickFormatter"},"ticker":{"id":"26643","type":"BasicTicker"}},"id":"26642","type":"LinearAxis"},{"attributes":{"ticker":{"id":"26681","type":"BasicTicker"}},"id":"26684","type":"Grid"},{"attributes":{},"id":"26619","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26732","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"26712","type":"BasicTickFormatter"},"ticker":{"id":"26610","type":"BasicTicker"}},"id":"26609","type":"LinearAxis"},{"attributes":{"formatter":{"id":"26720","type":"BasicTickFormatter"},"ticker":{"id":"26686","type":"BasicTicker"}},"id":"26685","type":"LinearAxis"},{"attributes":{"callback":null},"id":"26672","type":"DataRange1d"},{"attributes":{},"id":"26652","type":"PanTool"},{"attributes":{"dimension":1,"ticker":{"id":"26686","type":"BasicTicker"}},"id":"26689","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"26610","type":"BasicTicker"}},"id":"26613","type":"Grid"},{"attributes":{},"id":"26728","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"26726","type":"BoxAnnotation"}},"id":"26616","type":"BoxZoomTool"},{"attributes":{},"id":"26656","type":"ResetTool"},{"attributes":{},"id":"26722","type":"BasicTickFormatter"},{"attributes":{},"id":"26678","type":"LinearScale"},{"attributes":{},"id":"26617","type":"SaveTool"},{"attributes":{"ticker":{"id":"26605","type":"BasicTicker"}},"id":"26608","type":"Grid"},{"attributes":{},"id":"26655","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26652","type":"PanTool"},{"id":"26653","type":"WheelZoomTool"},{"id":"26654","type":"BoxZoomTool"},{"id":"26655","type":"SaveTool"},{"id":"26656","type":"ResetTool"},{"id":"26657","type":"HelpTool"}]},"id":"26658","type":"Toolbar"},{"attributes":{"data_source":{"id":"26703","type":"ColumnDataSource"},"glyph":{"id":"26704","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26705","type":"Square"},"selection_glyph":null,"view":{"id":"26707","type":"CDSView"}},"id":"26706","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"26674","type":"DataRange1d"},{"attributes":{},"id":"26686","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26614","type":"PanTool"},{"id":"26615","type":"WheelZoomTool"},{"id":"26616","type":"BoxZoomTool"},{"id":"26617","type":"SaveTool"},{"id":"26618","type":"ResetTool"},{"id":"26619","type":"HelpTool"}]},"id":"26620","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"26727","type":"Selection"},"selection_policy":{"id":"26728","type":"UnionRenderers"}},"id":"26665","type":"ColumnDataSource"},{"attributes":{},"id":"26730","type":"Selection"},{"attributes":{"data_source":{"id":"26627","type":"ColumnDataSource"},"glyph":{"id":"26628","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26629","type":"Circle"},"selection_glyph":null,"view":{"id":"26631","type":"CDSView"}},"id":"26630","type":"GlyphRenderer"},{"attributes":{},"id":"26648","type":"BasicTicker"},{"attributes":{"data_source":{"id":"26665","type":"ColumnDataSource"},"glyph":{"id":"26666","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26667","type":"Triangle"},"selection_glyph":null,"view":{"id":"26669","type":"CDSView"}},"id":"26668","type":"GlyphRenderer"}],"root_ids":["26708"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"44ceb6ba-f5da-4b0d-88ea-7fb2e7e6841e","roots":{"26708":"75be253a-c015-4f08-a4bd-a2abfab71c62"}}];
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