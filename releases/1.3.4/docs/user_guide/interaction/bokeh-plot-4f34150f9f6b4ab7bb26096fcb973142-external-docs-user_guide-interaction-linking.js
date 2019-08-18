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
      };var element = document.getElementById("dc0cabbd-14b3-48f3-bb91-a8c198627b3e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'dc0cabbd-14b3-48f3-bb91-a8c198627b3e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1d2aa674-736f-4562-a93b-5f65954b9678":{"roots":{"references":[{"attributes":{},"id":"26148","type":"BasicTicker"},{"attributes":{},"id":"26140","type":"LinearScale"},{"attributes":{},"id":"26170","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26203","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"26200","type":"BasicTickFormatter"},"ticker":{"id":"26143","type":"BasicTicker"}},"id":"26142","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"26204","type":"PolyAnnotation"},{"attributes":{"ticker":{"id":"26143","type":"BasicTicker"}},"id":"26146","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"26203","type":"BoxAnnotation"}},"id":"26152","type":"BoxSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26184","type":"BoxSelectTool"},{"id":"26185","type":"LassoSelectTool"},{"id":"26186","type":"HelpTool"}]},"id":"26187","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"26160","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26152","type":"BoxSelectTool"},{"id":"26153","type":"LassoSelectTool"},{"id":"26154","type":"HelpTool"}]},"id":"26155","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"26180","type":"BasicTicker"}},"id":"26183","type":"Grid"},{"attributes":{},"id":"26210","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"26148","type":"BasicTicker"}},"id":"26151","type":"Grid"},{"attributes":{},"id":"26180","type":"BasicTicker"},{"attributes":{},"id":"26175","type":"BasicTicker"},{"attributes":{"formatter":{"id":"26198","type":"BasicTickFormatter"},"ticker":{"id":"26148","type":"BasicTicker"}},"id":"26147","type":"LinearAxis"},{"attributes":{"ticker":{"id":"26175","type":"BasicTicker"}},"id":"26178","type":"Grid"},{"attributes":{},"id":"26208","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"26218","type":"ToolbarBox"},{"id":"26216","type":"GridBox"}]},"id":"26219","type":"Column"},{"attributes":{"formatter":{"id":"26208","type":"BasicTickFormatter"},"ticker":{"id":"26180","type":"BasicTicker"}},"id":"26179","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26213","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"26214","type":"PolyAnnotation"},{"attributes":{},"id":"26198","type":"BasicTickFormatter"},{"attributes":{},"id":"26143","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"26201","type":"Selection"},"selection_policy":{"id":"26202","type":"UnionRenderers"}},"id":"26131","type":"ColumnDataSource"},{"attributes":{},"id":"26202","type":"UnionRenderers"},{"attributes":{},"id":"26172","type":"LinearScale"},{"attributes":{},"id":"26201","type":"Selection"},{"attributes":{"below":[{"id":"26142","type":"LinearAxis"}],"center":[{"id":"26146","type":"Grid"},{"id":"26151","type":"Grid"}],"left":[{"id":"26147","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26162","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26155","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26134","type":"DataRange1d"},"x_scale":{"id":"26138","type":"LinearScale"},"y_range":{"id":"26136","type":"DataRange1d"},"y_scale":{"id":"26140","type":"LinearScale"}},"id":"26132","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"26204","type":"PolyAnnotation"}},"id":"26153","type":"LassoSelectTool"},{"attributes":{},"id":"26138","type":"LinearScale"},{"attributes":{},"id":"26154","type":"HelpTool"},{"attributes":{"callback":null},"id":"26136","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"26192","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"26193","type":"Circle"},{"attributes":{"source":{"id":"26131","type":"ColumnDataSource"}},"id":"26195","type":"CDSView"},{"attributes":{"below":[{"id":"26174","type":"LinearAxis"}],"center":[{"id":"26178","type":"Grid"},{"id":"26183","type":"Grid"}],"left":[{"id":"26179","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26194","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26187","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26166","type":"DataRange1d"},"x_scale":{"id":"26170","type":"LinearScale"},"y_range":{"id":"26168","type":"DataRange1d"},"y_scale":{"id":"26172","type":"LinearScale"}},"id":"26164","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"26134","type":"DataRange1d"},{"attributes":{"formatter":{"id":"26210","type":"BasicTickFormatter"},"ticker":{"id":"26175","type":"BasicTicker"}},"id":"26174","type":"LinearAxis"},{"attributes":{},"id":"26200","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"26168","type":"DataRange1d"},{"attributes":{"children":[[{"id":"26132","subtype":"Figure","type":"Plot"},0,0],[{"id":"26164","subtype":"Figure","type":"Plot"},0,1]]},"id":"26216","type":"GridBox"},{"attributes":{"data_source":{"id":"26131","type":"ColumnDataSource"},"glyph":{"id":"26160","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26161","type":"Circle"},"selection_glyph":null,"view":{"id":"26163","type":"CDSView"}},"id":"26162","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"26131","type":"ColumnDataSource"},"glyph":{"id":"26192","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26193","type":"Circle"},"selection_glyph":null,"view":{"id":"26195","type":"CDSView"}},"id":"26194","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"26217","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"26218","type":"ToolbarBox"},{"attributes":{"source":{"id":"26131","type":"ColumnDataSource"}},"id":"26163","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"26161","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"26213","type":"BoxAnnotation"}},"id":"26184","type":"BoxSelectTool"},{"attributes":{},"id":"26186","type":"HelpTool"},{"attributes":{"callback":null},"id":"26166","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"26214","type":"PolyAnnotation"}},"id":"26185","type":"LassoSelectTool"},{"attributes":{"tools":[{"id":"26152","type":"BoxSelectTool"},{"id":"26153","type":"LassoSelectTool"},{"id":"26154","type":"HelpTool"},{"id":"26184","type":"BoxSelectTool"},{"id":"26185","type":"LassoSelectTool"},{"id":"26186","type":"HelpTool"}]},"id":"26217","type":"ProxyToolbar"}],"root_ids":["26219"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"1d2aa674-736f-4562-a93b-5f65954b9678","roots":{"26219":"dc0cabbd-14b3-48f3-bb91-a8c198627b3e"}}];
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