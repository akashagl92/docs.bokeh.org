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
      };var element = document.getElementById("784c2d8f-b83e-4004-ba52-a328dc85f424");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '784c2d8f-b83e-4004-ba52-a328dc85f424' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"229bccec-234b-4ff4-94b4-d50ccac492f5":{"roots":{"references":[{"attributes":{},"id":"23437","type":"WheelZoomTool"},{"attributes":{},"id":"23454","type":"UnionRenderers"},{"attributes":{},"id":"23436","type":"PanTool"},{"attributes":{"text":"Austin"},"id":"23420","type":"Title"},{"attributes":{},"id":"23452","type":"LinearScale"},{"attributes":{"data_source":{"id":"23445","type":"ColumnDataSource"},"glyph":{"id":"23447","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23448","type":"Circle"},"selection_glyph":null,"view":{"id":"23450","type":"CDSView"}},"id":"23449","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]},"selected":{"id":"23455","type":"Selection"},"selection_policy":{"id":"23454","type":"UnionRenderers"}},"id":"23445","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"23422","type":"Range1d"},{"attributes":{},"id":"23453","type":"LinearScale"},{"attributes":{"dimension":"lat"},"id":"23432","type":"MercatorTicker"},{"attributes":{"source":{"id":"23445","type":"ColumnDataSource"}},"id":"23450","type":"CDSView"},{"attributes":{"api_key":"AIzaSyAM1OHVm6Yr_i54Kt01mylfxyNxQdxmxHQ","below":[{"id":"23428","type":"LinearAxis"}],"left":[{"id":"23433","type":"LinearAxis"}],"map_options":{"id":"23418","type":"GMapOptions"},"renderers":[{"id":"23449","type":"GlyphRenderer"}],"title":{"id":"23420","type":"Title"},"toolbar":{"id":"23440","type":"Toolbar"},"x_range":{"id":"23421","type":"Range1d"},"x_scale":{"id":"23452","type":"LinearScale"},"y_range":{"id":"23422","type":"Range1d"},"y_scale":{"id":"23453","type":"LinearScale"}},"id":"23419","subtype":"GMap","type":"GMapPlot"},{"attributes":{"formatter":{"id":"23431","type":"MercatorTickFormatter"},"ticker":{"id":"23432","type":"MercatorTicker"}},"id":"23433","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"23447","type":"Circle"},{"attributes":{},"id":"23455","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"23448","type":"Circle"},{"attributes":{"callback":null},"id":"23421","type":"Range1d"},{"attributes":{},"id":"23438","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23436","type":"PanTool"},{"id":"23437","type":"WheelZoomTool"},{"id":"23438","type":"ResetTool"},{"id":"23439","type":"HelpTool"}]},"id":"23440","type":"Toolbar"},{"attributes":{"dimension":"lat"},"id":"23431","type":"MercatorTickFormatter"},{"attributes":{"formatter":{"id":"23426","type":"MercatorTickFormatter"},"ticker":{"id":"23427","type":"MercatorTicker"}},"id":"23428","type":"LinearAxis"},{"attributes":{},"id":"23439","type":"HelpTool"},{"attributes":{"lat":30.2861,"lng":-97.7394,"zoom":11},"id":"23418","type":"GMapOptions"},{"attributes":{"dimension":"lon"},"id":"23427","type":"MercatorTicker"},{"attributes":{"dimension":"lon"},"id":"23426","type":"MercatorTickFormatter"}],"root_ids":["23419"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"229bccec-234b-4ff4-94b4-d50ccac492f5","roots":{"23419":"784c2d8f-b83e-4004-ba52-a328dc85f424"}}];
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