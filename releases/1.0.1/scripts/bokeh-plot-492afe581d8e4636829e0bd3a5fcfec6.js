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
      };var element = document.getElementById("dd34f812-1597-425d-85ef-b0d17f4dff4e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dd34f812-1597-425d-85ef-b0d17f4dff4e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"93e47bff-eead-4465-9891-19d8328a0751":{"roots":{"references":[{"attributes":{"children":[{"id":"7637","subtype":"Figure","type":"Plot"},{"id":"7677","subtype":"Figure","type":"Plot"}]},"id":"7775","type":"Row"},{"attributes":{},"id":"7661","type":"ResetTool"},{"attributes":{"formatter":{"id":"7781","type":"BasicTickFormatter"},"plot":{"id":"7717","subtype":"Figure","type":"Plot"},"ticker":{"id":"7733","type":"BasicTicker"}},"id":"7732","type":"LinearAxis"},{"attributes":{},"id":"7648","type":"BasicTicker"},{"attributes":{},"id":"7702","type":"HelpTool"},{"attributes":{},"id":"7698","type":"WheelZoomTool"},{"attributes":{},"id":"7738","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"7761","type":"BasicTickFormatter"},"plot":{"id":"7637","subtype":"Figure","type":"Plot"},"ticker":{"id":"7653","type":"BasicTicker"}},"id":"7652","type":"LinearAxis"},{"attributes":{"callback":null},"id":"7721","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7714","type":"Triangle"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7713","type":"Triangle"},{"attributes":{"data_source":{"id":"7752","type":"ColumnDataSource"},"glyph":{"id":"7753","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7754","type":"Square"},"selection_glyph":null,"view":{"id":"7756","type":"CDSView"}},"id":"7755","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"7775","type":"Row"},{"id":"7786","type":"Row"}]},"id":"7787","type":"Column"},{"attributes":{"callback":null},"id":"7641","type":"DataRange1d"},{"attributes":{},"id":"7764","type":"UnionRenderers"},{"attributes":{},"id":"7645","type":"LinearScale"},{"attributes":{},"id":"7733","type":"BasicTicker"},{"attributes":{},"id":"7783","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"7763","type":"Selection"},"selection_policy":{"id":"7764","type":"UnionRenderers"}},"id":"7672","type":"ColumnDataSource"},{"attributes":{},"id":"7693","type":"BasicTicker"},{"attributes":{},"id":"7784","type":"UnionRenderers"},{"attributes":{"plot":{"id":"7717","subtype":"Figure","type":"Plot"},"ticker":{"id":"7728","type":"BasicTicker"}},"id":"7731","type":"Grid"},{"attributes":{},"id":"7779","type":"BasicTickFormatter"},{"attributes":{},"id":"7657","type":"PanTool"},{"attributes":{"plot":{"id":"7637","subtype":"Figure","type":"Plot"},"ticker":{"id":"7648","type":"BasicTicker"}},"id":"7651","type":"Grid"},{"attributes":{},"id":"7773","type":"UnionRenderers"},{"attributes":{},"id":"7701","type":"ResetTool"},{"attributes":{"formatter":{"id":"7770","type":"BasicTickFormatter"},"plot":{"id":"7677","subtype":"Figure","type":"Plot"},"ticker":{"id":"7693","type":"BasicTicker"}},"id":"7692","type":"LinearAxis"},{"attributes":{},"id":"7688","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7673","type":"Circle"},{"attributes":{"children":[{"id":"7776","type":"Spacer"},{"id":"7717","subtype":"Figure","type":"Plot"}]},"id":"7786","type":"Row"},{"attributes":{"source":{"id":"7672","type":"ColumnDataSource"}},"id":"7676","type":"CDSView"},{"attributes":{"toolbar":{"id":"7788","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"7789","type":"ToolbarBox"},{"attributes":{"tools":[{"id":"7657","type":"PanTool"},{"id":"7658","type":"WheelZoomTool"},{"id":"7659","type":"BoxZoomTool"},{"id":"7660","type":"SaveTool"},{"id":"7661","type":"ResetTool"},{"id":"7662","type":"HelpTool"},{"id":"7697","type":"PanTool"},{"id":"7698","type":"WheelZoomTool"},{"id":"7699","type":"BoxZoomTool"},{"id":"7700","type":"SaveTool"},{"id":"7701","type":"ResetTool"},{"id":"7702","type":"HelpTool"},{"id":"7737","type":"PanTool"},{"id":"7738","type":"WheelZoomTool"},{"id":"7739","type":"BoxZoomTool"},{"id":"7740","type":"SaveTool"},{"id":"7741","type":"ResetTool"},{"id":"7742","type":"HelpTool"}]},"id":"7788","type":"ProxyToolbar"},{"attributes":{},"id":"7683","type":"LinearScale"},{"attributes":{},"id":"7658","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7745","type":"BoxAnnotation"},{"attributes":{},"id":"7772","type":"Selection"},{"attributes":{},"id":"7781","type":"BasicTickFormatter"},{"attributes":{},"id":"7742","type":"HelpTool"},{"attributes":{"source":{"id":"7712","type":"ColumnDataSource"}},"id":"7716","type":"CDSView"},{"attributes":{},"id":"7662","type":"HelpTool"},{"attributes":{"height":250,"width":250},"id":"7776","type":"Spacer"},{"attributes":{},"id":"7697","type":"PanTool"},{"attributes":{"callback":null},"id":"7719","type":"DataRange1d"},{"attributes":{},"id":"7653","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"7637","subtype":"Figure","type":"Plot"},"ticker":{"id":"7653","type":"BasicTicker"}},"id":"7656","type":"Grid"},{"attributes":{"formatter":{"id":"7779","type":"BasicTickFormatter"},"plot":{"id":"7717","subtype":"Figure","type":"Plot"},"ticker":{"id":"7728","type":"BasicTicker"}},"id":"7727","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7672","type":"ColumnDataSource"},"glyph":{"id":"7673","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7674","type":"Circle"},"selection_glyph":null,"view":{"id":"7676","type":"CDSView"}},"id":"7675","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"7789","type":"ToolbarBox"},{"id":"7787","type":"Column"}]},"id":"7790","type":"Column"},{"attributes":{},"id":"7770","type":"BasicTickFormatter"},{"attributes":{},"id":"7763","type":"Selection"},{"attributes":{"formatter":{"id":"7759","type":"BasicTickFormatter"},"plot":{"id":"7637","subtype":"Figure","type":"Plot"},"ticker":{"id":"7648","type":"BasicTicker"}},"id":"7647","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"7772","type":"Selection"},"selection_policy":{"id":"7773","type":"UnionRenderers"}},"id":"7712","type":"ColumnDataSource"},{"attributes":{},"id":"7740","type":"SaveTool"},{"attributes":{},"id":"7700","type":"SaveTool"},{"attributes":{},"id":"7685","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7753","type":"Square"},{"attributes":{},"id":"7737","type":"PanTool"},{"attributes":{"formatter":{"id":"7768","type":"BasicTickFormatter"},"plot":{"id":"7677","subtype":"Figure","type":"Plot"},"ticker":{"id":"7688","type":"BasicTicker"}},"id":"7687","type":"LinearAxis"},{"attributes":{},"id":"7643","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"7717","subtype":"Figure","type":"Plot"},"ticker":{"id":"7733","type":"BasicTicker"}},"id":"7736","type":"Grid"},{"attributes":{},"id":"7723","type":"LinearScale"},{"attributes":{"below":[{"id":"7687","type":"LinearAxis"}],"left":[{"id":"7692","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7687","type":"LinearAxis"},{"id":"7691","type":"Grid"},{"id":"7692","type":"LinearAxis"},{"id":"7696","type":"Grid"},{"id":"7705","type":"BoxAnnotation"},{"id":"7715","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7703","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7679","type":"DataRange1d"},"x_scale":{"id":"7683","type":"LinearScale"},"y_range":{"id":"7681","type":"DataRange1d"},"y_scale":{"id":"7685","type":"LinearScale"}},"id":"7677","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7725","type":"LinearScale"},{"attributes":{"data_source":{"id":"7712","type":"ColumnDataSource"},"glyph":{"id":"7713","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7714","type":"Triangle"},"selection_glyph":null,"view":{"id":"7716","type":"CDSView"}},"id":"7715","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"7745","type":"BoxAnnotation"}},"id":"7739","type":"BoxZoomTool"},{"attributes":{},"id":"7660","type":"SaveTool"},{"attributes":{},"id":"7728","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7697","type":"PanTool"},{"id":"7698","type":"WheelZoomTool"},{"id":"7699","type":"BoxZoomTool"},{"id":"7700","type":"SaveTool"},{"id":"7701","type":"ResetTool"},{"id":"7702","type":"HelpTool"}]},"id":"7703","type":"Toolbar"},{"attributes":{},"id":"7741","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"7783","type":"Selection"},"selection_policy":{"id":"7784","type":"UnionRenderers"}},"id":"7752","type":"ColumnDataSource"},{"attributes":{},"id":"7761","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"7727","type":"LinearAxis"}],"left":[{"id":"7732","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7727","type":"LinearAxis"},{"id":"7731","type":"Grid"},{"id":"7732","type":"LinearAxis"},{"id":"7736","type":"Grid"},{"id":"7745","type":"BoxAnnotation"},{"id":"7755","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7743","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7719","type":"DataRange1d"},"x_scale":{"id":"7723","type":"LinearScale"},"y_range":{"id":"7721","type":"DataRange1d"},"y_scale":{"id":"7725","type":"LinearScale"}},"id":"7717","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7705","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"7679","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7674","type":"Circle"},{"attributes":{},"id":"7759","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"7665","type":"BoxAnnotation"}},"id":"7659","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7754","type":"Square"},{"attributes":{"plot":{"id":"7677","subtype":"Figure","type":"Plot"},"ticker":{"id":"7688","type":"BasicTicker"}},"id":"7691","type":"Grid"},{"attributes":{},"id":"7768","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"7705","type":"BoxAnnotation"}},"id":"7699","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"7639","type":"DataRange1d"},{"attributes":{"source":{"id":"7752","type":"ColumnDataSource"}},"id":"7756","type":"CDSView"},{"attributes":{"below":[{"id":"7647","type":"LinearAxis"}],"left":[{"id":"7652","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7647","type":"LinearAxis"},{"id":"7651","type":"Grid"},{"id":"7652","type":"LinearAxis"},{"id":"7656","type":"Grid"},{"id":"7665","type":"BoxAnnotation"},{"id":"7675","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7663","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7639","type":"DataRange1d"},"x_scale":{"id":"7643","type":"LinearScale"},"y_range":{"id":"7641","type":"DataRange1d"},"y_scale":{"id":"7645","type":"LinearScale"}},"id":"7637","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"7681","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7737","type":"PanTool"},{"id":"7738","type":"WheelZoomTool"},{"id":"7739","type":"BoxZoomTool"},{"id":"7740","type":"SaveTool"},{"id":"7741","type":"ResetTool"},{"id":"7742","type":"HelpTool"}]},"id":"7743","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"7677","subtype":"Figure","type":"Plot"},"ticker":{"id":"7693","type":"BasicTicker"}},"id":"7696","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7657","type":"PanTool"},{"id":"7658","type":"WheelZoomTool"},{"id":"7659","type":"BoxZoomTool"},{"id":"7660","type":"SaveTool"},{"id":"7661","type":"ResetTool"},{"id":"7662","type":"HelpTool"}]},"id":"7663","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7665","type":"BoxAnnotation"}],"root_ids":["7790"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"93e47bff-eead-4465-9891-19d8328a0751","roots":{"7790":"dd34f812-1597-425d-85ef-b0d17f4dff4e"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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