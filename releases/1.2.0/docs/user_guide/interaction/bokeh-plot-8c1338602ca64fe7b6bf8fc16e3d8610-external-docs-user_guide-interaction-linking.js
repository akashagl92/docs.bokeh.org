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
      };var element = document.getElementById("1be920d8-efb2-4c7a-ac67-6d62e7eba1c3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1be920d8-efb2-4c7a-ac67-6d62e7eba1c3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"babd12f2-2b48-4a56-82e2-5e119813689e":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"26181","type":"PolyAnnotation"}},"id":"26130","type":"LassoSelectTool"},{"attributes":{},"id":"26176","type":"BasicTickFormatter"},{"attributes":{},"id":"26131","type":"HelpTool"},{"attributes":{},"id":"26178","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"26137","type":"Circle"},{"attributes":{"callback":null},"id":"26111","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"26178","type":"Selection"},"selection_policy":{"id":"26179","type":"UnionRenderers"}},"id":"26108","type":"ColumnDataSource"},{"attributes":{},"id":"26163","type":"HelpTool"},{"attributes":{},"id":"26179","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"26108","type":"ColumnDataSource"},"glyph":{"id":"26137","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26138","type":"Circle"},"selection_glyph":null,"view":{"id":"26140","type":"CDSView"}},"id":"26139","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26161","type":"BoxSelectTool"},{"id":"26162","type":"LassoSelectTool"},{"id":"26163","type":"HelpTool"}]},"id":"26164","type":"Toolbar"},{"attributes":{"source":{"id":"26108","type":"ColumnDataSource"}},"id":"26140","type":"CDSView"},{"attributes":{"below":[{"id":"26119","type":"LinearAxis"}],"center":[{"id":"26123","type":"Grid"},{"id":"26128","type":"Grid"}],"left":[{"id":"26124","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26139","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26132","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26111","type":"DataRange1d"},"x_scale":{"id":"26115","type":"LinearScale"},"y_range":{"id":"26113","type":"DataRange1d"},"y_scale":{"id":"26117","type":"LinearScale"}},"id":"26109","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26149","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"26181","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26180","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"26151","type":"LinearAxis"}],"center":[{"id":"26155","type":"Grid"},{"id":"26160","type":"Grid"}],"left":[{"id":"26156","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26171","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26164","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26143","type":"DataRange1d"},"x_scale":{"id":"26147","type":"LinearScale"},"y_range":{"id":"26145","type":"DataRange1d"},"y_scale":{"id":"26149","type":"LinearScale"}},"id":"26141","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"26108","type":"ColumnDataSource"},"glyph":{"id":"26169","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26170","type":"Circle"},"selection_glyph":null,"view":{"id":"26172","type":"CDSView"}},"id":"26171","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"26195","type":"ToolbarBox"},{"id":"26193","type":"GridBox"}]},"id":"26196","type":"Column"},{"attributes":{"callback":null},"id":"26113","type":"DataRange1d"},{"attributes":{},"id":"26117","type":"LinearScale"},{"attributes":{"formatter":{"id":"26176","type":"BasicTickFormatter"},"ticker":{"id":"26120","type":"BasicTicker"}},"id":"26119","type":"LinearAxis"},{"attributes":{"tools":[{"id":"26129","type":"BoxSelectTool"},{"id":"26130","type":"LassoSelectTool"},{"id":"26131","type":"HelpTool"},{"id":"26161","type":"BoxSelectTool"},{"id":"26162","type":"LassoSelectTool"},{"id":"26163","type":"HelpTool"}]},"id":"26194","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"26143","type":"DataRange1d"},{"attributes":{"callback":null},"id":"26145","type":"DataRange1d"},{"attributes":{},"id":"26115","type":"LinearScale"},{"attributes":{},"id":"26147","type":"LinearScale"},{"attributes":{},"id":"26120","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"26125","type":"BasicTicker"}},"id":"26128","type":"Grid"},{"attributes":{"formatter":{"id":"26186","type":"BasicTickFormatter"},"ticker":{"id":"26152","type":"BasicTicker"}},"id":"26151","type":"LinearAxis"},{"attributes":{"formatter":{"id":"26184","type":"BasicTickFormatter"},"ticker":{"id":"26157","type":"BasicTicker"}},"id":"26156","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"26170","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"26191","type":"PolyAnnotation"}},"id":"26162","type":"LassoSelectTool"},{"attributes":{},"id":"26125","type":"BasicTicker"},{"attributes":{"ticker":{"id":"26152","type":"BasicTicker"}},"id":"26155","type":"Grid"},{"attributes":{"ticker":{"id":"26120","type":"BasicTicker"}},"id":"26123","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"26191","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"26174","type":"BasicTickFormatter"},"ticker":{"id":"26125","type":"BasicTicker"}},"id":"26124","type":"LinearAxis"},{"attributes":{"children":[[{"id":"26109","subtype":"Figure","type":"Plot"},0,0],[{"id":"26141","subtype":"Figure","type":"Plot"},0,1]]},"id":"26193","type":"GridBox"},{"attributes":{},"id":"26152","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"26194","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"26195","type":"ToolbarBox"},{"attributes":{"callback":null,"overlay":{"id":"26190","type":"BoxAnnotation"}},"id":"26161","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"26138","type":"Circle"},{"attributes":{},"id":"26157","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26190","type":"BoxAnnotation"},{"attributes":{},"id":"26186","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"26169","type":"Circle"},{"attributes":{},"id":"26174","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26129","type":"BoxSelectTool"},{"id":"26130","type":"LassoSelectTool"},{"id":"26131","type":"HelpTool"}]},"id":"26132","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"26157","type":"BasicTicker"}},"id":"26160","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"26180","type":"BoxAnnotation"}},"id":"26129","type":"BoxSelectTool"},{"attributes":{},"id":"26184","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"26108","type":"ColumnDataSource"}},"id":"26172","type":"CDSView"}],"root_ids":["26196"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"babd12f2-2b48-4a56-82e2-5e119813689e","roots":{"26196":"1be920d8-efb2-4c7a-ac67-6d62e7eba1c3"}}];
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