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
      };var element = document.getElementById("ce447e01-ff6a-4ce1-8ace-2bb18fdf1be2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ce447e01-ff6a-4ce1-8ace-2bb18fdf1be2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c57133e1-5882-44c0-b84b-172f39066cbc":{"roots":{"references":[{"attributes":{},"id":"26169","type":"LinearScale"},{"attributes":{},"id":"26197","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"26199","type":"BasicTickFormatter"},"ticker":{"id":"26147","type":"BasicTicker"}},"id":"26146","type":"LinearAxis"},{"attributes":{},"id":"26171","type":"LinearScale"},{"attributes":{},"id":"26199","type":"BasicTickFormatter"},{"attributes":{},"id":"26139","type":"LinearScale"},{"attributes":{},"id":"26137","type":"LinearScale"},{"attributes":{"formatter":{"id":"26207","type":"BasicTickFormatter"},"ticker":{"id":"26174","type":"BasicTicker"}},"id":"26173","type":"LinearAxis"},{"attributes":{"formatter":{"id":"26197","type":"BasicTickFormatter"},"ticker":{"id":"26142","type":"BasicTicker"}},"id":"26141","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"26201","type":"PolyAnnotation"},{"attributes":{"ticker":{"id":"26142","type":"BasicTicker"}},"id":"26145","type":"Grid"},{"attributes":{"callback":null},"id":"26135","type":"DataRange1d"},{"attributes":{},"id":"26142","type":"BasicTicker"},{"attributes":{},"id":"26174","type":"BasicTicker"},{"attributes":{"ticker":{"id":"26174","type":"BasicTicker"}},"id":"26177","type":"Grid"},{"attributes":{},"id":"26203","type":"Selection"},{"attributes":{"callback":null},"id":"26133","type":"DataRange1d"},{"attributes":{},"id":"26209","type":"BasicTickFormatter"},{"attributes":{},"id":"26202","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"26210","type":"BoxAnnotation"}},"id":"26183","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"26217","type":"ToolbarBox"},{"id":"26215","type":"GridBox"}]},"id":"26218","type":"Column"},{"attributes":{},"id":"26147","type":"BasicTicker"},{"attributes":{"formatter":{"id":"26209","type":"BasicTickFormatter"},"ticker":{"id":"26179","type":"BasicTicker"}},"id":"26178","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"26200","type":"BoxAnnotation"}},"id":"26151","type":"BoxSelectTool"},{"attributes":{},"id":"26179","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26151","type":"BoxSelectTool"},{"id":"26152","type":"LassoSelectTool"},{"id":"26153","type":"HelpTool"}]},"id":"26154","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"26179","type":"BasicTicker"}},"id":"26182","type":"Grid"},{"attributes":{"children":[[{"id":"26131","subtype":"Figure","type":"Plot"},0,0],[{"id":"26163","subtype":"Figure","type":"Plot"},0,1]]},"id":"26215","type":"GridBox"},{"attributes":{"dimension":1,"ticker":{"id":"26147","type":"BasicTicker"}},"id":"26150","type":"Grid"},{"attributes":{"toolbar":{"id":"26216","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"26217","type":"ToolbarBox"},{"attributes":{"callback":null,"overlay":{"id":"26201","type":"PolyAnnotation"}},"id":"26152","type":"LassoSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26183","type":"BoxSelectTool"},{"id":"26184","type":"LassoSelectTool"},{"id":"26185","type":"HelpTool"}]},"id":"26186","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"26211","type":"PolyAnnotation"}},"id":"26184","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"26211","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"26160","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"26192","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"26191","type":"Circle"},{"attributes":{},"id":"26153","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"26159","type":"Circle"},{"attributes":{},"id":"26185","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26210","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"26130","type":"ColumnDataSource"},"glyph":{"id":"26159","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26160","type":"Circle"},"selection_glyph":null,"view":{"id":"26162","type":"CDSView"}},"id":"26161","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"26203","type":"Selection"},"selection_policy":{"id":"26202","type":"UnionRenderers"}},"id":"26130","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"26165","type":"DataRange1d"},{"attributes":{"callback":null},"id":"26167","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26200","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"26130","type":"ColumnDataSource"},"glyph":{"id":"26191","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26192","type":"Circle"},"selection_glyph":null,"view":{"id":"26194","type":"CDSView"}},"id":"26193","type":"GlyphRenderer"},{"attributes":{},"id":"26207","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"26141","type":"LinearAxis"}],"center":[{"id":"26145","type":"Grid"},{"id":"26150","type":"Grid"}],"left":[{"id":"26146","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26161","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26154","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26133","type":"DataRange1d"},"x_scale":{"id":"26137","type":"LinearScale"},"y_range":{"id":"26135","type":"DataRange1d"},"y_scale":{"id":"26139","type":"LinearScale"}},"id":"26131","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"26130","type":"ColumnDataSource"}},"id":"26162","type":"CDSView"},{"attributes":{"source":{"id":"26130","type":"ColumnDataSource"}},"id":"26194","type":"CDSView"},{"attributes":{"below":[{"id":"26173","type":"LinearAxis"}],"center":[{"id":"26177","type":"Grid"},{"id":"26182","type":"Grid"}],"left":[{"id":"26178","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26193","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26186","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26165","type":"DataRange1d"},"x_scale":{"id":"26169","type":"LinearScale"},"y_range":{"id":"26167","type":"DataRange1d"},"y_scale":{"id":"26171","type":"LinearScale"}},"id":"26163","subtype":"Figure","type":"Plot"},{"attributes":{"tools":[{"id":"26151","type":"BoxSelectTool"},{"id":"26152","type":"LassoSelectTool"},{"id":"26153","type":"HelpTool"},{"id":"26183","type":"BoxSelectTool"},{"id":"26184","type":"LassoSelectTool"},{"id":"26185","type":"HelpTool"}]},"id":"26216","type":"ProxyToolbar"}],"root_ids":["26218"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"c57133e1-5882-44c0-b84b-172f39066cbc","roots":{"26218":"ce447e01-ff6a-4ce1-8ace-2bb18fdf1be2"}}];
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