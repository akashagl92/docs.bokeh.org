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
      };var element = document.getElementById("56d6f05d-e855-4c8a-8fe2-dbab66c4caaa");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '56d6f05d-e855-4c8a-8fe2-dbab66c4caaa' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
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
                    
                  var docs_json = '{"6cccf9f0-d036-4905-a32d-5e02863ec722":{"roots":{"references":[{"attributes":{},"id":"36842","type":"BasicTicker"},{"attributes":{"source":{"id":"36829","type":"ColumnDataSource"}},"id":"36870","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"36868","type":"Circle"},{"attributes":{},"id":"36874","type":"BasicTickFormatter"},{"attributes":{},"id":"36877","type":"Selection"},{"attributes":{"overlay":{"id":"36878","type":"BoxAnnotation"}},"id":"36853","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"36835","type":"DataRange1d"},{"attributes":{},"id":"36839","type":"LinearScale"},{"attributes":{},"id":"36854","type":"SaveTool"},{"attributes":{},"id":"36876","type":"UnionRenderers"},{"attributes":{"callback":null,"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"36857","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"36878","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"36841","type":"LinearAxis"}],"center":[{"id":"36845","type":"Grid"},{"id":"36850","type":"Grid"}],"left":[{"id":"36846","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"36869","type":"GlyphRenderer"}],"title":{"id":"36831","type":"Title"},"toolbar":{"id":"36858","type":"Toolbar"},"x_range":{"id":"36833","type":"DataRange1d"},"x_scale":{"id":"36837","type":"LinearScale"},"y_range":{"id":"36835","type":"DataRange1d"},"y_scale":{"id":"36839","type":"LinearScale"}},"id":"36830","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"36877","type":"Selection"},"selection_policy":{"id":"36876","type":"UnionRenderers"}},"id":"36829","type":"ColumnDataSource"},{"attributes":{},"id":"36856","type":"HelpTool"},{"attributes":{"ticker":{"id":"36842","type":"BasicTicker"}},"id":"36845","type":"Grid"},{"attributes":{},"id":"36872","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"36851","type":"PanTool"},{"id":"36852","type":"WheelZoomTool"},{"id":"36853","type":"BoxZoomTool"},{"id":"36854","type":"SaveTool"},{"id":"36855","type":"ResetTool"},{"id":"36856","type":"HelpTool"},{"id":"36857","type":"HoverTool"}]},"id":"36858","type":"Toolbar"},{"attributes":{},"id":"36852","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"36833","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"36847","type":"BasicTicker"}},"id":"36850","type":"Grid"},{"attributes":{},"id":"36837","type":"LinearScale"},{"attributes":{"data_source":{"id":"36829","type":"ColumnDataSource"},"glyph":{"id":"36867","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36868","type":"Circle"},"selection_glyph":null,"view":{"id":"36870","type":"CDSView"}},"id":"36869","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"36867","type":"Circle"},{"attributes":{},"id":"36855","type":"ResetTool"},{"attributes":{"text":"Mouse over the dots"},"id":"36831","type":"Title"},{"attributes":{},"id":"36851","type":"PanTool"},{"attributes":{},"id":"36847","type":"BasicTicker"},{"attributes":{"formatter":{"id":"36872","type":"BasicTickFormatter"},"ticker":{"id":"36842","type":"BasicTicker"}},"id":"36841","type":"LinearAxis"},{"attributes":{"formatter":{"id":"36874","type":"BasicTickFormatter"},"ticker":{"id":"36847","type":"BasicTicker"}},"id":"36846","type":"LinearAxis"}],"root_ids":["36830"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"6cccf9f0-d036-4905-a32d-5e02863ec722","roots":{"36830":"56d6f05d-e855-4c8a-8fe2-dbab66c4caaa"}}];
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