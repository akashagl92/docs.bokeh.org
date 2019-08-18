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
      };var element = document.getElementById("b4ef23f6-5dea-486d-99a6-7f493246deb9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b4ef23f6-5dea-486d-99a6-7f493246deb9' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"12f7ed36-1c5c-462c-8737-4d728b062626":{"roots":{"references":[{"attributes":{},"id":"17484","type":"BasicTickFormatter"},{"attributes":{},"id":"17464","type":"PanTool"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"17489","type":"Selection"},"selection_policy":{"id":"17488","type":"UnionRenderers"}},"id":"17477","type":"ColumnDataSource"},{"attributes":{},"id":"17450","type":"LinearScale"},{"attributes":{},"id":"17467","type":"SaveTool"},{"attributes":{"text":""},"id":"17482","type":"Title"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17478","type":"X"},{"attributes":{"data_source":{"id":"17477","type":"ColumnDataSource"},"glyph":{"id":"17478","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17479","type":"X"},"selection_glyph":null,"view":{"id":"17481","type":"CDSView"}},"id":"17480","type":"GlyphRenderer"},{"attributes":{},"id":"17488","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"17448","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17464","type":"PanTool"},{"id":"17465","type":"WheelZoomTool"},{"id":"17466","type":"BoxZoomTool"},{"id":"17467","type":"SaveTool"},{"id":"17468","type":"ResetTool"},{"id":"17469","type":"HelpTool"}]},"id":"17470","type":"Toolbar"},{"attributes":{"formatter":{"id":"17486","type":"BasicTickFormatter"},"ticker":{"id":"17460","type":"BasicTicker"}},"id":"17459","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17446","type":"DataRange1d"},{"attributes":{},"id":"17489","type":"Selection"},{"attributes":{},"id":"17455","type":"BasicTicker"},{"attributes":{},"id":"17460","type":"BasicTicker"},{"attributes":{},"id":"17486","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"17454","type":"LinearAxis"}],"center":[{"id":"17458","type":"Grid"},{"id":"17463","type":"Grid"}],"left":[{"id":"17459","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17480","type":"GlyphRenderer"}],"title":{"id":"17482","type":"Title"},"toolbar":{"id":"17470","type":"Toolbar"},"x_range":{"id":"17446","type":"DataRange1d"},"x_scale":{"id":"17450","type":"LinearScale"},"y_range":{"id":"17448","type":"DataRange1d"},"y_scale":{"id":"17452","type":"LinearScale"}},"id":"17445","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17490","type":"BoxAnnotation"},{"attributes":{},"id":"17465","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"17455","type":"BasicTicker"}},"id":"17458","type":"Grid"},{"attributes":{"overlay":{"id":"17490","type":"BoxAnnotation"}},"id":"17466","type":"BoxZoomTool"},{"attributes":{"source":{"id":"17477","type":"ColumnDataSource"}},"id":"17481","type":"CDSView"},{"attributes":{},"id":"17469","type":"HelpTool"},{"attributes":{},"id":"17452","type":"LinearScale"},{"attributes":{},"id":"17468","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"17460","type":"BasicTicker"}},"id":"17463","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17479","type":"X"},{"attributes":{"formatter":{"id":"17484","type":"BasicTickFormatter"},"ticker":{"id":"17455","type":"BasicTicker"}},"id":"17454","type":"LinearAxis"}],"root_ids":["17445"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"12f7ed36-1c5c-462c-8737-4d728b062626","roots":{"17445":"b4ef23f6-5dea-486d-99a6-7f493246deb9"}}];
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