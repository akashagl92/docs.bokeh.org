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
      };var element = document.getElementById("36dd43a7-d36b-4887-8001-d0eacf323ab0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '36dd43a7-d36b-4887-8001-d0eacf323ab0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"2b38d077-f199-4bef-aa66-ac831fdb8700":{"roots":{"references":[{"attributes":{},"id":"7692","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7749","type":"BoxAnnotation"},{"attributes":{},"id":"7788","type":"UnionRenderers"},{"attributes":{"children":[{"id":"7641","subtype":"Figure","type":"Plot"},{"id":"7681","subtype":"Figure","type":"Plot"}]},"id":"7779","type":"Row"},{"attributes":{},"id":"7762","type":"BasicTickFormatter"},{"attributes":{},"id":"7764","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"7683","type":"DataRange1d"},{"attributes":{},"id":"7767","type":"Selection"},{"attributes":{},"id":"7666","type":"HelpTool"},{"attributes":{},"id":"7768","type":"UnionRenderers"},{"attributes":{},"id":"7771","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"7731","type":"LinearAxis"}],"left":[{"id":"7736","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7731","type":"LinearAxis"},{"id":"7735","type":"Grid"},{"id":"7736","type":"LinearAxis"},{"id":"7740","type":"Grid"},{"id":"7749","type":"BoxAnnotation"},{"id":"7759","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7747","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7723","type":"DataRange1d"},"x_scale":{"id":"7727","type":"LinearScale"},"y_range":{"id":"7725","type":"DataRange1d"},"y_scale":{"id":"7729","type":"LinearScale"}},"id":"7721","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"7764","type":"BasicTickFormatter"},"plot":{"id":"7641","subtype":"Figure","type":"Plot"},"ticker":{"id":"7652","type":"BasicTicker"}},"id":"7651","type":"LinearAxis"},{"attributes":{"formatter":{"id":"7773","type":"BasicTickFormatter"},"plot":{"id":"7681","subtype":"Figure","type":"Plot"},"ticker":{"id":"7692","type":"BasicTicker"}},"id":"7691","type":"LinearAxis"},{"attributes":{},"id":"7773","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"7776","type":"Selection"},"selection_policy":{"id":"7777","type":"UnionRenderers"}},"id":"7716","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7669","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7709","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7758","type":"Square"},{"attributes":{"data_source":{"id":"7756","type":"ColumnDataSource"},"glyph":{"id":"7757","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7758","type":"Square"},"selection_glyph":null,"view":{"id":"7760","type":"CDSView"}},"id":"7759","type":"GlyphRenderer"},{"attributes":{},"id":"7776","type":"Selection"},{"attributes":{"callback":null},"id":"7723","type":"DataRange1d"},{"attributes":{},"id":"7657","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7676","type":"ColumnDataSource"},"glyph":{"id":"7677","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7678","type":"Circle"},"selection_glyph":null,"view":{"id":"7680","type":"CDSView"}},"id":"7679","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"7725","type":"DataRange1d"},{"attributes":{"callback":null},"id":"7685","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7762","type":"BasicTickFormatter"},"plot":{"id":"7641","subtype":"Figure","type":"Plot"},"ticker":{"id":"7657","type":"BasicTicker"}},"id":"7656","type":"LinearAxis"},{"attributes":{},"id":"7746","type":"HelpTool"},{"attributes":{},"id":"7787","type":"Selection"},{"attributes":{},"id":"7729","type":"LinearScale"},{"attributes":{},"id":"7777","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7661","type":"PanTool"},{"id":"7662","type":"WheelZoomTool"},{"id":"7663","type":"BoxZoomTool"},{"id":"7664","type":"SaveTool"},{"id":"7665","type":"ResetTool"},{"id":"7666","type":"HelpTool"}]},"id":"7667","type":"Toolbar"},{"attributes":{"plot":{"id":"7721","subtype":"Figure","type":"Plot"},"ticker":{"id":"7732","type":"BasicTicker"}},"id":"7735","type":"Grid"},{"attributes":{"children":[{"id":"7780","type":"Spacer"},{"id":"7721","subtype":"Figure","type":"Plot"}]},"id":"7790","type":"Row"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7677","type":"Circle"},{"attributes":{},"id":"7737","type":"BasicTicker"},{"attributes":{"height":250,"width":250},"id":"7780","type":"Spacer"},{"attributes":{},"id":"7745","type":"ResetTool"},{"attributes":{"formatter":{"id":"7784","type":"BasicTickFormatter"},"plot":{"id":"7721","subtype":"Figure","type":"Plot"},"ticker":{"id":"7732","type":"BasicTicker"}},"id":"7731","type":"LinearAxis"},{"attributes":{"below":[{"id":"7651","type":"LinearAxis"}],"left":[{"id":"7656","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7651","type":"LinearAxis"},{"id":"7655","type":"Grid"},{"id":"7656","type":"LinearAxis"},{"id":"7660","type":"Grid"},{"id":"7669","type":"BoxAnnotation"},{"id":"7679","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7667","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7643","type":"DataRange1d"},"x_scale":{"id":"7647","type":"LinearScale"},"y_range":{"id":"7645","type":"DataRange1d"},"y_scale":{"id":"7649","type":"LinearScale"}},"id":"7641","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7727","type":"LinearScale"},{"attributes":{},"id":"7782","type":"BasicTickFormatter"},{"attributes":{},"id":"7697","type":"BasicTicker"},{"attributes":{"formatter":{"id":"7782","type":"BasicTickFormatter"},"plot":{"id":"7721","subtype":"Figure","type":"Plot"},"ticker":{"id":"7737","type":"BasicTicker"}},"id":"7736","type":"LinearAxis"},{"attributes":{},"id":"7732","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"7681","subtype":"Figure","type":"Plot"},"ticker":{"id":"7697","type":"BasicTicker"}},"id":"7700","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"7721","subtype":"Figure","type":"Plot"},"ticker":{"id":"7737","type":"BasicTicker"}},"id":"7740","type":"Grid"},{"attributes":{},"id":"7704","type":"SaveTool"},{"attributes":{},"id":"7652","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7757","type":"Square"},{"attributes":{"source":{"id":"7716","type":"ColumnDataSource"}},"id":"7720","type":"CDSView"},{"attributes":{"source":{"id":"7676","type":"ColumnDataSource"}},"id":"7680","type":"CDSView"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7717","type":"Triangle"},{"attributes":{},"id":"7741","type":"PanTool"},{"attributes":{},"id":"7784","type":"BasicTickFormatter"},{"attributes":{},"id":"7742","type":"WheelZoomTool"},{"attributes":{},"id":"7649","type":"LinearScale"},{"attributes":{"tools":[{"id":"7661","type":"PanTool"},{"id":"7662","type":"WheelZoomTool"},{"id":"7663","type":"BoxZoomTool"},{"id":"7664","type":"SaveTool"},{"id":"7665","type":"ResetTool"},{"id":"7666","type":"HelpTool"},{"id":"7701","type":"PanTool"},{"id":"7702","type":"WheelZoomTool"},{"id":"7703","type":"BoxZoomTool"},{"id":"7704","type":"SaveTool"},{"id":"7705","type":"ResetTool"},{"id":"7706","type":"HelpTool"},{"id":"7741","type":"PanTool"},{"id":"7742","type":"WheelZoomTool"},{"id":"7743","type":"BoxZoomTool"},{"id":"7744","type":"SaveTool"},{"id":"7745","type":"ResetTool"},{"id":"7746","type":"HelpTool"}]},"id":"7792","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"7709","type":"BoxAnnotation"}},"id":"7703","type":"BoxZoomTool"},{"attributes":{},"id":"7687","type":"LinearScale"},{"attributes":{},"id":"7706","type":"HelpTool"},{"attributes":{"overlay":{"id":"7749","type":"BoxAnnotation"}},"id":"7743","type":"BoxZoomTool"},{"attributes":{"toolbar":{"id":"7792","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"7793","type":"ToolbarBox"},{"attributes":{"children":[{"id":"7793","type":"ToolbarBox"},{"id":"7791","type":"Column"}]},"id":"7794","type":"Column"},{"attributes":{"plot":{"id":"7681","subtype":"Figure","type":"Plot"},"ticker":{"id":"7692","type":"BasicTicker"}},"id":"7695","type":"Grid"},{"attributes":{"overlay":{"id":"7669","type":"BoxAnnotation"}},"id":"7663","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7741","type":"PanTool"},{"id":"7742","type":"WheelZoomTool"},{"id":"7743","type":"BoxZoomTool"},{"id":"7744","type":"SaveTool"},{"id":"7745","type":"ResetTool"},{"id":"7746","type":"HelpTool"}]},"id":"7747","type":"Toolbar"},{"attributes":{},"id":"7702","type":"WheelZoomTool"},{"attributes":{},"id":"7662","type":"WheelZoomTool"},{"attributes":{},"id":"7647","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7718","type":"Triangle"},{"attributes":{"dimension":1,"plot":{"id":"7641","subtype":"Figure","type":"Plot"},"ticker":{"id":"7657","type":"BasicTicker"}},"id":"7660","type":"Grid"},{"attributes":{},"id":"7664","type":"SaveTool"},{"attributes":{},"id":"7665","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"7787","type":"Selection"},"selection_policy":{"id":"7788","type":"UnionRenderers"}},"id":"7756","type":"ColumnDataSource"},{"attributes":{},"id":"7661","type":"PanTool"},{"attributes":{},"id":"7705","type":"ResetTool"},{"attributes":{"formatter":{"id":"7771","type":"BasicTickFormatter"},"plot":{"id":"7681","subtype":"Figure","type":"Plot"},"ticker":{"id":"7697","type":"BasicTicker"}},"id":"7696","type":"LinearAxis"},{"attributes":{},"id":"7701","type":"PanTool"},{"attributes":{},"id":"7689","type":"LinearScale"},{"attributes":{},"id":"7744","type":"SaveTool"},{"attributes":{"below":[{"id":"7691","type":"LinearAxis"}],"left":[{"id":"7696","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7691","type":"LinearAxis"},{"id":"7695","type":"Grid"},{"id":"7696","type":"LinearAxis"},{"id":"7700","type":"Grid"},{"id":"7709","type":"BoxAnnotation"},{"id":"7719","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7707","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7683","type":"DataRange1d"},"x_scale":{"id":"7687","type":"LinearScale"},"y_range":{"id":"7685","type":"DataRange1d"},"y_scale":{"id":"7689","type":"LinearScale"}},"id":"7681","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"7716","type":"ColumnDataSource"},"glyph":{"id":"7717","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7718","type":"Triangle"},"selection_glyph":null,"view":{"id":"7720","type":"CDSView"}},"id":"7719","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"7779","type":"Row"},{"id":"7790","type":"Row"}]},"id":"7791","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7678","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"7767","type":"Selection"},"selection_policy":{"id":"7768","type":"UnionRenderers"}},"id":"7676","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7756","type":"ColumnDataSource"}},"id":"7760","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7701","type":"PanTool"},{"id":"7702","type":"WheelZoomTool"},{"id":"7703","type":"BoxZoomTool"},{"id":"7704","type":"SaveTool"},{"id":"7705","type":"ResetTool"},{"id":"7706","type":"HelpTool"}]},"id":"7707","type":"Toolbar"},{"attributes":{"plot":{"id":"7641","subtype":"Figure","type":"Plot"},"ticker":{"id":"7652","type":"BasicTicker"}},"id":"7655","type":"Grid"},{"attributes":{"callback":null},"id":"7645","type":"DataRange1d"},{"attributes":{"callback":null},"id":"7643","type":"DataRange1d"}],"root_ids":["7794"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"2b38d077-f199-4bef-aa66-ac831fdb8700","roots":{"7794":"36dd43a7-d36b-4887-8001-d0eacf323ab0"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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