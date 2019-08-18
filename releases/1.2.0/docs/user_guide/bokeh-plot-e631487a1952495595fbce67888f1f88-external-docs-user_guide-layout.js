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
      };var element = document.getElementById("88347e16-8cd8-4d99-b3dd-091faa7bca13");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '88347e16-8cd8-4d99-b3dd-091faa7bca13' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8b547b94-60ac-4ef8-b64d-9a44ce543c97":{"roots":{"references":[{"attributes":{"formatter":{"id":"27190","type":"BasicTickFormatter"},"ticker":{"id":"27084","type":"BasicTicker"}},"id":"27083","type":"LinearAxis"},{"attributes":{"below":[{"id":"27121","type":"LinearAxis"}],"center":[{"id":"27125","type":"Grid"},{"id":"27130","type":"Grid"}],"left":[{"id":"27126","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27147","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"27137","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27113","type":"DataRange1d"},"x_scale":{"id":"27117","type":"LinearScale"},"y_range":{"id":"27115","type":"DataRange1d"},"y_scale":{"id":"27119","type":"LinearScale"}},"id":"27111","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27136","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27184","type":"Square"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"27210","type":"Selection"},"selection_policy":{"id":"27211","type":"UnionRenderers"}},"id":"27182","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"27077","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27203","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27194","type":"BoxAnnotation"},{"attributes":{},"id":"27098","type":"HelpTool"},{"attributes":{},"id":"27210","type":"Selection"},{"attributes":{},"id":"27201","type":"Selection"},{"attributes":{},"id":"27131","type":"PanTool"},{"attributes":{},"id":"27208","type":"BasicTickFormatter"},{"attributes":{},"id":"27119","type":"LinearScale"},{"attributes":{"overlay":{"id":"27203","type":"BoxAnnotation"}},"id":"27133","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"27192","type":"Selection"},"selection_policy":{"id":"27193","type":"UnionRenderers"}},"id":"27106","type":"ColumnDataSource"},{"attributes":{},"id":"27202","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"27194","type":"BoxAnnotation"}},"id":"27095","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"27188","type":"BasicTickFormatter"},"ticker":{"id":"27089","type":"BasicTicker"}},"id":"27088","type":"LinearAxis"},{"attributes":{},"id":"27192","type":"Selection"},{"attributes":{"callback":null},"id":"27113","type":"DataRange1d"},{"attributes":{},"id":"27206","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"27093","type":"PanTool"},{"id":"27094","type":"WheelZoomTool"},{"id":"27095","type":"BoxZoomTool"},{"id":"27096","type":"SaveTool"},{"id":"27097","type":"ResetTool"},{"id":"27098","type":"HelpTool"},{"id":"27131","type":"PanTool"},{"id":"27132","type":"WheelZoomTool"},{"id":"27133","type":"BoxZoomTool"},{"id":"27134","type":"SaveTool"},{"id":"27135","type":"ResetTool"},{"id":"27136","type":"HelpTool"},{"id":"27169","type":"PanTool"},{"id":"27170","type":"WheelZoomTool"},{"id":"27171","type":"BoxZoomTool"},{"id":"27172","type":"SaveTool"},{"id":"27173","type":"ResetTool"},{"id":"27174","type":"HelpTool"}]},"id":"27215","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"27083","type":"LinearAxis"}],"center":[{"id":"27087","type":"Grid"},{"id":"27092","type":"Grid"}],"left":[{"id":"27088","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27109","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"27099","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27075","type":"DataRange1d"},"x_scale":{"id":"27079","type":"LinearScale"},"y_range":{"id":"27077","type":"DataRange1d"},"y_scale":{"id":"27081","type":"LinearScale"}},"id":"27073","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27157","type":"LinearScale"},{"attributes":{"ticker":{"id":"27084","type":"BasicTicker"}},"id":"27087","type":"Grid"},{"attributes":{},"id":"27199","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"27199","type":"BasicTickFormatter"},"ticker":{"id":"27122","type":"BasicTicker"}},"id":"27121","type":"LinearAxis"},{"attributes":{"children":[{"id":"27216","type":"ToolbarBox"},{"id":"27214","type":"GridBox"}]},"id":"27217","type":"Column"},{"attributes":{},"id":"27135","type":"ResetTool"},{"attributes":{},"id":"27096","type":"SaveTool"},{"attributes":{},"id":"27084","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27107","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"27089","type":"BasicTicker"}},"id":"27092","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27093","type":"PanTool"},{"id":"27094","type":"WheelZoomTool"},{"id":"27095","type":"BoxZoomTool"},{"id":"27096","type":"SaveTool"},{"id":"27097","type":"ResetTool"},{"id":"27098","type":"HelpTool"}]},"id":"27099","type":"Toolbar"},{"attributes":{},"id":"27097","type":"ResetTool"},{"attributes":{"source":{"id":"27182","type":"ColumnDataSource"}},"id":"27186","type":"CDSView"},{"attributes":{},"id":"27134","type":"SaveTool"},{"attributes":{},"id":"27172","type":"SaveTool"},{"attributes":{"ticker":{"id":"27122","type":"BasicTicker"}},"id":"27125","type":"Grid"},{"attributes":{},"id":"27093","type":"PanTool"},{"attributes":{},"id":"27094","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"27151","type":"DataRange1d"},{"attributes":{},"id":"27211","type":"UnionRenderers"},{"attributes":{},"id":"27188","type":"BasicTickFormatter"},{"attributes":{},"id":"27155","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27169","type":"PanTool"},{"id":"27170","type":"WheelZoomTool"},{"id":"27171","type":"BoxZoomTool"},{"id":"27172","type":"SaveTool"},{"id":"27173","type":"ResetTool"},{"id":"27174","type":"HelpTool"}]},"id":"27175","type":"Toolbar"},{"attributes":{},"id":"27132","type":"WheelZoomTool"},{"attributes":{},"id":"27170","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"27153","type":"DataRange1d"},{"attributes":{},"id":"27190","type":"BasicTickFormatter"},{"attributes":{},"id":"27173","type":"ResetTool"},{"attributes":{},"id":"27081","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27131","type":"PanTool"},{"id":"27132","type":"WheelZoomTool"},{"id":"27133","type":"BoxZoomTool"},{"id":"27134","type":"SaveTool"},{"id":"27135","type":"ResetTool"},{"id":"27136","type":"HelpTool"}]},"id":"27137","type":"Toolbar"},{"attributes":{},"id":"27197","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"27160","type":"BasicTicker"}},"id":"27163","type":"Grid"},{"attributes":{},"id":"27089","type":"BasicTicker"},{"attributes":{},"id":"27160","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27145","type":"Triangle"},{"attributes":{},"id":"27169","type":"PanTool"},{"attributes":{"callback":null},"id":"27115","type":"DataRange1d"},{"attributes":{"callback":null},"id":"27075","type":"DataRange1d"},{"attributes":{"formatter":{"id":"27206","type":"BasicTickFormatter"},"ticker":{"id":"27165","type":"BasicTicker"}},"id":"27164","type":"LinearAxis"},{"attributes":{},"id":"27122","type":"BasicTicker"},{"attributes":{},"id":"27193","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"27165","type":"BasicTicker"}},"id":"27168","type":"Grid"},{"attributes":{},"id":"27079","type":"LinearScale"},{"attributes":{},"id":"27165","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"27201","type":"Selection"},"selection_policy":{"id":"27202","type":"UnionRenderers"}},"id":"27144","type":"ColumnDataSource"},{"attributes":{"source":{"id":"27106","type":"ColumnDataSource"}},"id":"27110","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27108","type":"Circle"},{"attributes":{"below":[{"id":"27159","type":"LinearAxis"}],"center":[{"id":"27163","type":"Grid"},{"id":"27168","type":"Grid"}],"left":[{"id":"27164","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27185","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"27175","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27151","type":"DataRange1d"},"x_scale":{"id":"27155","type":"LinearScale"},"y_range":{"id":"27153","type":"DataRange1d"},"y_scale":{"id":"27157","type":"LinearScale"}},"id":"27149","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"27197","type":"BasicTickFormatter"},"ticker":{"id":"27127","type":"BasicTicker"}},"id":"27126","type":"LinearAxis"},{"attributes":{"source":{"id":"27144","type":"ColumnDataSource"}},"id":"27148","type":"CDSView"},{"attributes":{"overlay":{"id":"27212","type":"BoxAnnotation"}},"id":"27171","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"27144","type":"ColumnDataSource"},"glyph":{"id":"27145","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27146","type":"Triangle"},"selection_glyph":null,"view":{"id":"27148","type":"CDSView"}},"id":"27147","type":"GlyphRenderer"},{"attributes":{},"id":"27117","type":"LinearScale"},{"attributes":{},"id":"27174","type":"HelpTool"},{"attributes":{},"id":"27127","type":"BasicTicker"},{"attributes":{"data_source":{"id":"27182","type":"ColumnDataSource"},"glyph":{"id":"27183","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27184","type":"Square"},"selection_glyph":null,"view":{"id":"27186","type":"CDSView"}},"id":"27185","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27183","type":"Square"},{"attributes":{"dimension":1,"ticker":{"id":"27127","type":"BasicTicker"}},"id":"27130","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27212","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"27106","type":"ColumnDataSource"},"glyph":{"id":"27107","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27108","type":"Circle"},"selection_glyph":null,"view":{"id":"27110","type":"CDSView"}},"id":"27109","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"27073","subtype":"Figure","type":"Plot"},0,0],[{"id":"27111","subtype":"Figure","type":"Plot"},0,1],[{"id":"27149","subtype":"Figure","type":"Plot"},1,1]]},"id":"27214","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27146","type":"Triangle"},{"attributes":{"formatter":{"id":"27208","type":"BasicTickFormatter"},"ticker":{"id":"27160","type":"BasicTicker"}},"id":"27159","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"27215","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"27216","type":"ToolbarBox"}],"root_ids":["27217"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"8b547b94-60ac-4ef8-b64d-9a44ce543c97","roots":{"27217":"88347e16-8cd8-4d99-b3dd-091faa7bca13"}}];
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