(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("289d3f9a-50b0-40b5-bb43-9fb90e6e9b9a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '289d3f9a-50b0-40b5-bb43-9fb90e6e9b9a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"c5c34202-a7dd-45a7-8c1d-cbadd18150e5":{"roots":{"references":[{"attributes":{},"id":"7769","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"7706","type":"BoxAnnotation"}},"id":"7700","type":"BoxZoomTool"},{"attributes":{},"id":"7743","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"7765","type":"Selection"},"selection_policy":{"id":"7764","type":"UnionRenderers"}},"id":"7673","type":"ColumnDataSource"},{"attributes":{},"id":"7658","type":"PanTool"},{"attributes":{},"id":"7771","type":"BasicTickFormatter"},{"attributes":{},"id":"7699","type":"WheelZoomTool"},{"attributes":{},"id":"7701","type":"SaveTool"},{"attributes":{"callback":null},"id":"7682","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7738","type":"PanTool"},{"id":"7739","type":"WheelZoomTool"},{"id":"7740","type":"BoxZoomTool"},{"id":"7741","type":"SaveTool"},{"id":"7742","type":"ResetTool"},{"id":"7743","type":"HelpTool"}]},"id":"7744","type":"Toolbar"},{"attributes":{"overlay":{"id":"7666","type":"BoxAnnotation"}},"id":"7660","type":"BoxZoomTool"},{"attributes":{},"id":"7773","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"7760","type":"BasicTickFormatter"},"plot":{"id":"7638","subtype":"Figure","type":"Plot"},"ticker":{"id":"7649","type":"BasicTicker"}},"id":"7648","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7746","type":"BoxAnnotation"},{"attributes":{},"id":"7774","type":"Selection"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7714","type":"Triangle"},{"attributes":{"below":[{"id":"7688","type":"LinearAxis"}],"left":[{"id":"7693","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7688","type":"LinearAxis"},{"id":"7692","type":"Grid"},{"id":"7693","type":"LinearAxis"},{"id":"7697","type":"Grid"},{"id":"7706","type":"BoxAnnotation"},{"id":"7716","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7704","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7680","type":"DataRange1d"},"x_scale":{"id":"7684","type":"LinearScale"},"y_range":{"id":"7682","type":"DataRange1d"},"y_scale":{"id":"7686","type":"LinearScale"}},"id":"7678","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"7753","type":"ColumnDataSource"}},"id":"7757","type":"CDSView"},{"attributes":{"children":[{"id":"7777","type":"Spacer"},{"id":"7718","subtype":"Figure","type":"Plot"}]},"id":"7787","type":"Row"},{"attributes":{},"id":"7649","type":"BasicTicker"},{"attributes":{"height":250,"width":250},"id":"7777","type":"Spacer"},{"attributes":{"children":[{"id":"7776","type":"Row"},{"id":"7787","type":"Row"}]},"id":"7788","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7715","type":"Triangle"},{"attributes":{},"id":"7780","type":"BasicTickFormatter"},{"attributes":{},"id":"7702","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7658","type":"PanTool"},{"id":"7659","type":"WheelZoomTool"},{"id":"7660","type":"BoxZoomTool"},{"id":"7661","type":"SaveTool"},{"id":"7662","type":"ResetTool"},{"id":"7663","type":"HelpTool"}]},"id":"7664","type":"Toolbar"},{"attributes":{},"id":"7782","type":"BasicTickFormatter"},{"attributes":{},"id":"7644","type":"LinearScale"},{"attributes":{},"id":"7760","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"7638","subtype":"Figure","type":"Plot"},{"id":"7678","subtype":"Figure","type":"Plot"}]},"id":"7776","type":"Row"},{"attributes":{},"id":"7784","type":"UnionRenderers"},{"attributes":{},"id":"7694","type":"BasicTicker"},{"attributes":{},"id":"7785","type":"Selection"},{"attributes":{"callback":null},"id":"7642","type":"DataRange1d"},{"attributes":{},"id":"7698","type":"PanTool"},{"attributes":{"tools":[{"id":"7658","type":"PanTool"},{"id":"7659","type":"WheelZoomTool"},{"id":"7660","type":"BoxZoomTool"},{"id":"7661","type":"SaveTool"},{"id":"7662","type":"ResetTool"},{"id":"7663","type":"HelpTool"},{"id":"7698","type":"PanTool"},{"id":"7699","type":"WheelZoomTool"},{"id":"7700","type":"BoxZoomTool"},{"id":"7701","type":"SaveTool"},{"id":"7702","type":"ResetTool"},{"id":"7703","type":"HelpTool"},{"id":"7738","type":"PanTool"},{"id":"7739","type":"WheelZoomTool"},{"id":"7740","type":"BoxZoomTool"},{"id":"7741","type":"SaveTool"},{"id":"7742","type":"ResetTool"},{"id":"7743","type":"HelpTool"}]},"id":"7789","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"7673","type":"ColumnDataSource"},"glyph":{"id":"7674","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7675","type":"Circle"},"selection_glyph":null,"view":{"id":"7677","type":"CDSView"}},"id":"7676","type":"GlyphRenderer"},{"attributes":{},"id":"7663","type":"HelpTool"},{"attributes":{"toolbar":{"id":"7789","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"7790","type":"ToolbarBox"},{"attributes":{"children":[{"id":"7790","type":"ToolbarBox"},{"id":"7788","type":"Column"}]},"id":"7791","type":"Column"},{"attributes":{"plot":{"id":"7678","subtype":"Figure","type":"Plot"},"ticker":{"id":"7689","type":"BasicTicker"}},"id":"7692","type":"Grid"},{"attributes":{},"id":"7662","type":"ResetTool"},{"attributes":{},"id":"7661","type":"SaveTool"},{"attributes":{},"id":"7659","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"7722","type":"DataRange1d"},{"attributes":{},"id":"7724","type":"LinearScale"},{"attributes":{},"id":"7726","type":"LinearScale"},{"attributes":{"below":[{"id":"7648","type":"LinearAxis"}],"left":[{"id":"7653","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7648","type":"LinearAxis"},{"id":"7652","type":"Grid"},{"id":"7653","type":"LinearAxis"},{"id":"7657","type":"Grid"},{"id":"7666","type":"BoxAnnotation"},{"id":"7676","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7664","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7640","type":"DataRange1d"},"x_scale":{"id":"7644","type":"LinearScale"},"y_range":{"id":"7642","type":"DataRange1d"},"y_scale":{"id":"7646","type":"LinearScale"}},"id":"7638","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"7780","type":"BasicTickFormatter"},"plot":{"id":"7718","subtype":"Figure","type":"Plot"},"ticker":{"id":"7729","type":"BasicTicker"}},"id":"7728","type":"LinearAxis"},{"attributes":{"callback":null},"id":"7640","type":"DataRange1d"},{"attributes":{},"id":"7729","type":"BasicTicker"},{"attributes":{},"id":"7646","type":"LinearScale"},{"attributes":{"plot":{"id":"7718","subtype":"Figure","type":"Plot"},"ticker":{"id":"7729","type":"BasicTicker"}},"id":"7732","type":"Grid"},{"attributes":{},"id":"7654","type":"BasicTicker"},{"attributes":{"formatter":{"id":"7782","type":"BasicTickFormatter"},"plot":{"id":"7718","subtype":"Figure","type":"Plot"},"ticker":{"id":"7734","type":"BasicTicker"}},"id":"7733","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7666","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"7638","subtype":"Figure","type":"Plot"},"ticker":{"id":"7649","type":"BasicTicker"}},"id":"7652","type":"Grid"},{"attributes":{"formatter":{"id":"7771","type":"BasicTickFormatter"},"plot":{"id":"7678","subtype":"Figure","type":"Plot"},"ticker":{"id":"7694","type":"BasicTicker"}},"id":"7693","type":"LinearAxis"},{"attributes":{},"id":"7734","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7680","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7755","type":"Square"},{"attributes":{"formatter":{"id":"7762","type":"BasicTickFormatter"},"plot":{"id":"7638","subtype":"Figure","type":"Plot"},"ticker":{"id":"7654","type":"BasicTicker"}},"id":"7653","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7674","type":"Circle"},{"attributes":{"data_source":{"id":"7713","type":"ColumnDataSource"},"glyph":{"id":"7714","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7715","type":"Triangle"},"selection_glyph":null,"view":{"id":"7717","type":"CDSView"}},"id":"7716","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7706","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"7718","subtype":"Figure","type":"Plot"},"ticker":{"id":"7734","type":"BasicTicker"}},"id":"7737","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"7638","subtype":"Figure","type":"Plot"},"ticker":{"id":"7654","type":"BasicTicker"}},"id":"7657","type":"Grid"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7754","type":"Square"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7698","type":"PanTool"},{"id":"7699","type":"WheelZoomTool"},{"id":"7700","type":"BoxZoomTool"},{"id":"7701","type":"SaveTool"},{"id":"7702","type":"ResetTool"},{"id":"7703","type":"HelpTool"}]},"id":"7704","type":"Toolbar"},{"attributes":{"data_source":{"id":"7753","type":"ColumnDataSource"},"glyph":{"id":"7754","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7755","type":"Square"},"selection_glyph":null,"view":{"id":"7757","type":"CDSView"}},"id":"7756","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7673","type":"ColumnDataSource"}},"id":"7677","type":"CDSView"},{"attributes":{},"id":"7703","type":"HelpTool"},{"attributes":{},"id":"7738","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"7678","subtype":"Figure","type":"Plot"},"ticker":{"id":"7694","type":"BasicTicker"}},"id":"7697","type":"Grid"},{"attributes":{},"id":"7742","type":"ResetTool"},{"attributes":{},"id":"7686","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7675","type":"Circle"},{"attributes":{},"id":"7689","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"7774","type":"Selection"},"selection_policy":{"id":"7773","type":"UnionRenderers"}},"id":"7713","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"7769","type":"BasicTickFormatter"},"plot":{"id":"7678","subtype":"Figure","type":"Plot"},"ticker":{"id":"7689","type":"BasicTicker"}},"id":"7688","type":"LinearAxis"},{"attributes":{},"id":"7741","type":"SaveTool"},{"attributes":{"below":[{"id":"7728","type":"LinearAxis"}],"left":[{"id":"7733","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7728","type":"LinearAxis"},{"id":"7732","type":"Grid"},{"id":"7733","type":"LinearAxis"},{"id":"7737","type":"Grid"},{"id":"7746","type":"BoxAnnotation"},{"id":"7756","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7744","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7720","type":"DataRange1d"},"x_scale":{"id":"7724","type":"LinearScale"},"y_range":{"id":"7722","type":"DataRange1d"},"y_scale":{"id":"7726","type":"LinearScale"}},"id":"7718","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7739","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"7746","type":"BoxAnnotation"}},"id":"7740","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"7720","type":"DataRange1d"},{"attributes":{"source":{"id":"7713","type":"ColumnDataSource"}},"id":"7717","type":"CDSView"},{"attributes":{},"id":"7684","type":"LinearScale"},{"attributes":{},"id":"7762","type":"BasicTickFormatter"},{"attributes":{},"id":"7764","type":"UnionRenderers"},{"attributes":{},"id":"7765","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"7785","type":"Selection"},"selection_policy":{"id":"7784","type":"UnionRenderers"}},"id":"7753","type":"ColumnDataSource"}],"root_ids":["7791"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"c5c34202-a7dd-45a7-8c1d-cbadd18150e5","roots":{"7791":"289d3f9a-50b0-40b5-bb43-9fb90e6e9b9a"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();