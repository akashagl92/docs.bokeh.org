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
      };var element = document.getElementById("8bfb0dbf-7724-438b-9083-114c79ee1e6d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8bfb0dbf-7724-438b-9083-114c79ee1e6d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d0f19ebb-2504-4e6a-ad44-10de86e3ec0d":{"roots":{"references":[{"attributes":{},"id":"27161","type":"ResetTool"},{"attributes":{},"id":"27238","type":"Selection"},{"attributes":{"below":[{"id":"27109","type":"LinearAxis"}],"center":[{"id":"27113","type":"Grid"},{"id":"27118","type":"Grid"}],"left":[{"id":"27114","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27135","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"27125","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27101","type":"DataRange1d"},"x_scale":{"id":"27105","type":"LinearScale"},"y_range":{"id":"27103","type":"DataRange1d"},"y_scale":{"id":"27107","type":"LinearScale"}},"id":"27099","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"27233","type":"BasicTickFormatter"},"ticker":{"id":"27186","type":"BasicTicker"}},"id":"27185","type":"LinearAxis"},{"attributes":{"tools":[{"id":"27119","type":"PanTool"},{"id":"27120","type":"WheelZoomTool"},{"id":"27121","type":"BoxZoomTool"},{"id":"27122","type":"SaveTool"},{"id":"27123","type":"ResetTool"},{"id":"27124","type":"HelpTool"},{"id":"27157","type":"PanTool"},{"id":"27158","type":"WheelZoomTool"},{"id":"27159","type":"BoxZoomTool"},{"id":"27160","type":"SaveTool"},{"id":"27161","type":"ResetTool"},{"id":"27162","type":"HelpTool"},{"id":"27195","type":"PanTool"},{"id":"27196","type":"WheelZoomTool"},{"id":"27197","type":"BoxZoomTool"},{"id":"27198","type":"SaveTool"},{"id":"27199","type":"ResetTool"},{"id":"27200","type":"HelpTool"}]},"id":"27241","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"27179","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"27241","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"27242","type":"ToolbarBox"},{"attributes":{},"id":"27181","type":"LinearScale"},{"attributes":{"children":[{"id":"27242","type":"ToolbarBox"},{"id":"27240","type":"GridBox"}]},"id":"27243","type":"Column"},{"attributes":{},"id":"27183","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27134","type":"Circle"},{"attributes":{},"id":"27186","type":"BasicTicker"},{"attributes":{"callback":null},"id":"27101","type":"DataRange1d"},{"attributes":{"callback":null},"id":"27103","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27209","type":"Square"},{"attributes":{"data_source":{"id":"27170","type":"ColumnDataSource"},"glyph":{"id":"27171","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27172","type":"Triangle"},"selection_glyph":null,"view":{"id":"27174","type":"CDSView"}},"id":"27173","type":"GlyphRenderer"},{"attributes":{},"id":"27105","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27210","type":"Square"},{"attributes":{"ticker":{"id":"27186","type":"BasicTicker"}},"id":"27189","type":"Grid"},{"attributes":{},"id":"27107","type":"LinearScale"},{"attributes":{"formatter":{"id":"27215","type":"BasicTickFormatter"},"ticker":{"id":"27110","type":"BasicTicker"}},"id":"27109","type":"LinearAxis"},{"attributes":{"formatter":{"id":"27235","type":"BasicTickFormatter"},"ticker":{"id":"27191","type":"BasicTicker"}},"id":"27190","type":"LinearAxis"},{"attributes":{"ticker":{"id":"27148","type":"BasicTicker"}},"id":"27151","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"27191","type":"BasicTicker"}},"id":"27194","type":"Grid"},{"attributes":{"formatter":{"id":"27226","type":"BasicTickFormatter"},"ticker":{"id":"27153","type":"BasicTicker"}},"id":"27152","type":"LinearAxis"},{"attributes":{},"id":"27191","type":"BasicTicker"},{"attributes":{},"id":"27110","type":"BasicTicker"},{"attributes":{"formatter":{"id":"27217","type":"BasicTickFormatter"},"ticker":{"id":"27115","type":"BasicTicker"}},"id":"27114","type":"LinearAxis"},{"attributes":{},"id":"27162","type":"HelpTool"},{"attributes":{"data_source":{"id":"27208","type":"ColumnDataSource"},"glyph":{"id":"27209","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27210","type":"Square"},"selection_glyph":null,"view":{"id":"27212","type":"CDSView"}},"id":"27211","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"27110","type":"BasicTicker"}},"id":"27113","type":"Grid"},{"attributes":{},"id":"27198","type":"SaveTool"},{"attributes":{},"id":"27115","type":"BasicTicker"},{"attributes":{},"id":"27195","type":"PanTool"},{"attributes":{"dimension":1,"ticker":{"id":"27115","type":"BasicTicker"}},"id":"27118","type":"Grid"},{"attributes":{},"id":"27196","type":"WheelZoomTool"},{"attributes":{},"id":"27120","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"27236","type":"BoxAnnotation"}},"id":"27197","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27157","type":"PanTool"},{"id":"27158","type":"WheelZoomTool"},{"id":"27159","type":"BoxZoomTool"},{"id":"27160","type":"SaveTool"},{"id":"27161","type":"ResetTool"},{"id":"27162","type":"HelpTool"}]},"id":"27163","type":"Toolbar"},{"attributes":{"data_source":{"id":"27132","type":"ColumnDataSource"},"glyph":{"id":"27133","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27134","type":"Circle"},"selection_glyph":null,"view":{"id":"27136","type":"CDSView"}},"id":"27135","type":"GlyphRenderer"},{"attributes":{},"id":"27199","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27172","type":"Triangle"},{"attributes":{},"id":"27153","type":"BasicTicker"},{"attributes":{},"id":"27119","type":"PanTool"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27133","type":"Circle"},{"attributes":{},"id":"27215","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"27220","type":"Selection"},"selection_policy":{"id":"27219","type":"UnionRenderers"}},"id":"27132","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"27099","subtype":"Figure","type":"Plot"},0,0],[{"id":"27137","subtype":"Figure","type":"Plot"},0,1],[{"id":"27175","subtype":"Figure","type":"Plot"},1,1]]},"id":"27240","type":"GridBox"},{"attributes":{},"id":"27200","type":"HelpTool"},{"attributes":{"overlay":{"id":"27218","type":"BoxAnnotation"}},"id":"27121","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27195","type":"PanTool"},{"id":"27196","type":"WheelZoomTool"},{"id":"27197","type":"BoxZoomTool"},{"id":"27198","type":"SaveTool"},{"id":"27199","type":"ResetTool"},{"id":"27200","type":"HelpTool"}]},"id":"27201","type":"Toolbar"},{"attributes":{},"id":"27123","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"27153","type":"BasicTicker"}},"id":"27156","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27119","type":"PanTool"},{"id":"27120","type":"WheelZoomTool"},{"id":"27121","type":"BoxZoomTool"},{"id":"27122","type":"SaveTool"},{"id":"27123","type":"ResetTool"},{"id":"27124","type":"HelpTool"}]},"id":"27125","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27171","type":"Triangle"},{"attributes":{"source":{"id":"27208","type":"ColumnDataSource"}},"id":"27212","type":"CDSView"},{"attributes":{},"id":"27124","type":"HelpTool"},{"attributes":{"callback":null},"id":"27177","type":"DataRange1d"},{"attributes":{},"id":"27217","type":"BasicTickFormatter"},{"attributes":{},"id":"27122","type":"SaveTool"},{"attributes":{},"id":"27224","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"27141","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27218","type":"BoxAnnotation"},{"attributes":{"source":{"id":"27132","type":"ColumnDataSource"}},"id":"27136","type":"CDSView"},{"attributes":{},"id":"27219","type":"UnionRenderers"},{"attributes":{},"id":"27220","type":"Selection"},{"attributes":{"below":[{"id":"27147","type":"LinearAxis"}],"center":[{"id":"27151","type":"Grid"},{"id":"27156","type":"Grid"}],"left":[{"id":"27152","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27173","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"27163","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27139","type":"DataRange1d"},"x_scale":{"id":"27143","type":"LinearScale"},"y_range":{"id":"27141","type":"DataRange1d"},"y_scale":{"id":"27145","type":"LinearScale"}},"id":"27137","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27226","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"27170","type":"ColumnDataSource"}},"id":"27174","type":"CDSView"},{"attributes":{"callback":null},"id":"27139","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"27229","type":"Selection"},"selection_policy":{"id":"27228","type":"UnionRenderers"}},"id":"27170","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27227","type":"BoxAnnotation"},{"attributes":{},"id":"27143","type":"LinearScale"},{"attributes":{},"id":"27158","type":"WheelZoomTool"},{"attributes":{},"id":"27228","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"27227","type":"BoxAnnotation"}},"id":"27159","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"27238","type":"Selection"},"selection_policy":{"id":"27237","type":"UnionRenderers"}},"id":"27208","type":"ColumnDataSource"},{"attributes":{},"id":"27229","type":"Selection"},{"attributes":{"below":[{"id":"27185","type":"LinearAxis"}],"center":[{"id":"27189","type":"Grid"},{"id":"27194","type":"Grid"}],"left":[{"id":"27190","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27211","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"27201","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27177","type":"DataRange1d"},"x_scale":{"id":"27181","type":"LinearScale"},"y_range":{"id":"27179","type":"DataRange1d"},"y_scale":{"id":"27183","type":"LinearScale"}},"id":"27175","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27160","type":"SaveTool"},{"attributes":{},"id":"27233","type":"BasicTickFormatter"},{"attributes":{},"id":"27145","type":"LinearScale"},{"attributes":{},"id":"27157","type":"PanTool"},{"attributes":{},"id":"27235","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"27224","type":"BasicTickFormatter"},"ticker":{"id":"27148","type":"BasicTicker"}},"id":"27147","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27236","type":"BoxAnnotation"},{"attributes":{},"id":"27148","type":"BasicTicker"},{"attributes":{},"id":"27237","type":"UnionRenderers"}],"root_ids":["27243"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"d0f19ebb-2504-4e6a-ad44-10de86e3ec0d","roots":{"27243":"8bfb0dbf-7724-438b-9083-114c79ee1e6d"}}];
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