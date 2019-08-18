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
      };var element = document.getElementById("b08de415-c1ab-4746-a6d9-347b52ae42b1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b08de415-c1ab-4746-a6d9-347b52ae42b1' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
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
                    
                  var docs_json = '{"7de0cef5-e41e-4877-a1e0-93c246b76cfa":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"22663","type":"Circle"},{"attributes":{},"id":"22655","type":"HelpTool"},{"attributes":{},"id":"22670","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"22664","type":"Circle"},{"attributes":{"formatter":{"id":"22647","type":"MercatorTickFormatter"},"ticker":{"id":"22648","type":"MercatorTicker"}},"id":"22649","type":"LinearAxis"},{"attributes":{"data_source":{"id":"22661","type":"ColumnDataSource"},"glyph":{"id":"22663","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22664","type":"Circle"},"selection_glyph":null,"view":{"id":"22666","type":"CDSView"}},"id":"22665","type":"GlyphRenderer"},{"attributes":{},"id":"22667","type":"LinearScale"},{"attributes":{"dimension":"lon"},"id":"22643","type":"MercatorTicker"},{"attributes":{"callback":null,"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]},"selected":{"id":"22671","type":"Selection"},"selection_policy":{"id":"22670","type":"UnionRenderers"}},"id":"22661","type":"ColumnDataSource"},{"attributes":{},"id":"22653","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"22638","type":"Range1d"},{"attributes":{"dimension":"lat"},"id":"22648","type":"MercatorTicker"},{"attributes":{"formatter":{"id":"22642","type":"MercatorTickFormatter"},"ticker":{"id":"22643","type":"MercatorTicker"}},"id":"22644","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22652","type":"PanTool"},{"id":"22653","type":"WheelZoomTool"},{"id":"22654","type":"ResetTool"},{"id":"22655","type":"HelpTool"}]},"id":"22656","type":"Toolbar"},{"attributes":{"text":"Austin"},"id":"22636","type":"Title"},{"attributes":{"dimension":"lon"},"id":"22642","type":"MercatorTickFormatter"},{"attributes":{},"id":"22654","type":"ResetTool"},{"attributes":{"api_key":"AIzaSyAM1OHVm6Yr_i54Kt01mylfxyNxQdxmxHQ","below":[{"id":"22644","type":"LinearAxis"}],"left":[{"id":"22649","type":"LinearAxis"}],"map_options":{"id":"22634","type":"GMapOptions"},"renderers":[{"id":"22665","type":"GlyphRenderer"}],"title":{"id":"22636","type":"Title"},"toolbar":{"id":"22656","type":"Toolbar"},"x_range":{"id":"22637","type":"Range1d"},"x_scale":{"id":"22668","type":"LinearScale"},"y_range":{"id":"22638","type":"Range1d"},"y_scale":{"id":"22667","type":"LinearScale"}},"id":"22635","subtype":"GMap","type":"GMapPlot"},{"attributes":{"lat":30.2861,"lng":-97.7394,"zoom":11},"id":"22634","type":"GMapOptions"},{"attributes":{},"id":"22652","type":"PanTool"},{"attributes":{"source":{"id":"22661","type":"ColumnDataSource"}},"id":"22666","type":"CDSView"},{"attributes":{},"id":"22671","type":"Selection"},{"attributes":{"callback":null},"id":"22637","type":"Range1d"},{"attributes":{},"id":"22668","type":"LinearScale"},{"attributes":{"dimension":"lat"},"id":"22647","type":"MercatorTickFormatter"}],"root_ids":["22635"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"7de0cef5-e41e-4877-a1e0-93c246b76cfa","roots":{"22635":"b08de415-c1ab-4746-a6d9-347b52ae42b1"}}];
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