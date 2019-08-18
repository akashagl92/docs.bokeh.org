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
      };var element = document.getElementById("d93fa704-8dab-4d0f-86b2-32a12e6c6ff1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd93fa704-8dab-4d0f-86b2-32a12e6c6ff1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3060e86e-3928-4e98-922f-c5fe0051c780":{"roots":{"references":[{"attributes":{},"id":"30559","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"30532","type":"CategoricalTicker"}},"id":"30534","type":"Grid"},{"attributes":{},"id":"30539","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"30550","type":"Circle"},{"attributes":{},"id":"30556","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"30520","type":"FactorRange"},{"attributes":{},"id":"30527","type":"BasicTicker"},{"attributes":{"formatter":{"id":"30556","type":"CategoricalTickFormatter"},"ticker":{"id":"30532","type":"CategoricalTicker"}},"id":"30531","type":"CategoricalAxis"},{"attributes":{},"id":"30540","type":"HelpTool"},{"attributes":{"ticker":{"id":"30527","type":"BasicTicker"}},"id":"30530","type":"Grid"},{"attributes":{"source":{"id":"30548","type":"ColumnDataSource"}},"id":"30552","type":"CDSView"},{"attributes":{},"id":"30560","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30535","type":"PanTool"},{"id":"30536","type":"WheelZoomTool"},{"id":"30537","type":"BoxZoomTool"},{"id":"30538","type":"SaveTool"},{"id":"30539","type":"ResetTool"},{"id":"30540","type":"HelpTool"}]},"id":"30541","type":"Toolbar"},{"attributes":{"data_source":{"id":"30548","type":"ColumnDataSource"},"glyph":{"id":"30549","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30550","type":"Circle"},"selection_glyph":null,"view":{"id":"30552","type":"CDSView"}},"id":"30551","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"30559","type":"Selection"},"selection_policy":{"id":"30560","type":"UnionRenderers"}},"id":"30548","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30561","type":"BoxAnnotation"},{"attributes":{},"id":"30522","type":"LinearScale"},{"attributes":{"below":[{"id":"30526","type":"LinearAxis"}],"center":[{"id":"30530","type":"Grid"},{"id":"30534","type":"Grid"}],"left":[{"id":"30531","type":"CategoricalAxis"}],"renderers":[{"id":"30551","type":"GlyphRenderer"}],"title":{"id":"30554","type":"Title"},"toolbar":{"id":"30541","type":"Toolbar"},"x_range":{"id":"30518","type":"DataRange1d"},"x_scale":{"id":"30522","type":"LinearScale"},"y_range":{"id":"30520","type":"FactorRange"},"y_scale":{"id":"30524","type":"CategoricalScale"}},"id":"30517","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30535","type":"PanTool"},{"attributes":{"text":""},"id":"30554","type":"Title"},{"attributes":{"callback":null},"id":"30518","type":"DataRange1d"},{"attributes":{},"id":"30536","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"30549","type":"Circle"},{"attributes":{},"id":"30558","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"30558","type":"BasicTickFormatter"},"ticker":{"id":"30527","type":"BasicTicker"}},"id":"30526","type":"LinearAxis"},{"attributes":{"overlay":{"id":"30561","type":"BoxAnnotation"}},"id":"30537","type":"BoxZoomTool"},{"attributes":{},"id":"30524","type":"CategoricalScale"},{"attributes":{},"id":"30532","type":"CategoricalTicker"},{"attributes":{},"id":"30538","type":"SaveTool"}],"root_ids":["30517"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"3060e86e-3928-4e98-922f-c5fe0051c780","roots":{"30517":"d93fa704-8dab-4d0f-86b2-32a12e6c6ff1"}}];
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