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
      };var element = document.getElementById("2b35718c-4747-4a85-8a9d-beeb5dc770ec");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2b35718c-4747-4a85-8a9d-beeb5dc770ec' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"e54aa79a-eebb-4a99-b0e0-75db1bff149f":{"roots":{"references":[{"attributes":{"overlay":{"id":"26437","type":"BoxAnnotation"}},"id":"26367","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"26318","type":"BasicTicker"}},"id":"26321","type":"Grid"},{"attributes":{},"id":"26368","type":"SaveTool"},{"attributes":{},"id":"26313","type":"LinearScale"},{"attributes":{"data_source":{"id":"26378","type":"ColumnDataSource"},"glyph":{"id":"26379","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26380","type":"Triangle"},"selection_glyph":null,"view":{"id":"26382","type":"CDSView"}},"id":"26381","type":"GlyphRenderer"},{"attributes":{},"id":"26369","type":"ResetTool"},{"attributes":{},"id":"26315","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"26445","type":"Selection"},"selection_policy":{"id":"26444","type":"UnionRenderers"}},"id":"26416","type":"ColumnDataSource"},{"attributes":{},"id":"26318","type":"BasicTicker"},{"attributes":{"formatter":{"id":"26425","type":"BasicTickFormatter"},"ticker":{"id":"26318","type":"BasicTicker"}},"id":"26317","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"26399","type":"BasicTicker"}},"id":"26402","type":"Grid"},{"attributes":{"callback":null},"id":"26385","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26418","type":"Square"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26341","type":"Circle"},{"attributes":{"formatter":{"id":"26423","type":"BasicTickFormatter"},"ticker":{"id":"26323","type":"BasicTicker"}},"id":"26322","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26417","type":"Square"},{"attributes":{"data_source":{"id":"26416","type":"ColumnDataSource"},"glyph":{"id":"26417","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26418","type":"Square"},"selection_glyph":null,"view":{"id":"26420","type":"CDSView"}},"id":"26419","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"26387","type":"DataRange1d"},{"attributes":{},"id":"26403","type":"PanTool"},{"attributes":{},"id":"26323","type":"BasicTicker"},{"attributes":{},"id":"26404","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"26323","type":"BasicTicker"}},"id":"26326","type":"Grid"},{"attributes":{"overlay":{"id":"26446","type":"BoxAnnotation"}},"id":"26405","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26342","type":"Circle"},{"attributes":{},"id":"26406","type":"SaveTool"},{"attributes":{"data_source":{"id":"26340","type":"ColumnDataSource"},"glyph":{"id":"26341","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26342","type":"Circle"},"selection_glyph":null,"view":{"id":"26344","type":"CDSView"}},"id":"26343","type":"GlyphRenderer"},{"attributes":{},"id":"26394","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"26427","type":"Selection"},"selection_policy":{"id":"26426","type":"UnionRenderers"}},"id":"26340","type":"ColumnDataSource"},{"attributes":{},"id":"26332","type":"HelpTool"},{"attributes":{},"id":"26407","type":"ResetTool"},{"attributes":{},"id":"26331","type":"ResetTool"},{"attributes":{},"id":"26408","type":"HelpTool"},{"attributes":{},"id":"26327","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26403","type":"PanTool"},{"id":"26404","type":"WheelZoomTool"},{"id":"26405","type":"BoxZoomTool"},{"id":"26406","type":"SaveTool"},{"id":"26407","type":"ResetTool"},{"id":"26408","type":"HelpTool"}]},"id":"26409","type":"Toolbar"},{"attributes":{},"id":"26328","type":"WheelZoomTool"},{"attributes":{},"id":"26330","type":"SaveTool"},{"attributes":{"source":{"id":"26416","type":"ColumnDataSource"}},"id":"26420","type":"CDSView"},{"attributes":{"overlay":{"id":"26428","type":"BoxAnnotation"}},"id":"26329","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"26307","subtype":"Figure","type":"Plot"},0,0],[{"id":"26345","subtype":"Figure","type":"Plot"},0,1],[{"id":"26383","subtype":"Figure","type":"Plot"},1,1]]},"id":"26448","type":"GridBox"},{"attributes":{"callback":null},"id":"26347","type":"DataRange1d"},{"attributes":{},"id":"26423","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26327","type":"PanTool"},{"id":"26328","type":"WheelZoomTool"},{"id":"26329","type":"BoxZoomTool"},{"id":"26330","type":"SaveTool"},{"id":"26331","type":"ResetTool"},{"id":"26332","type":"HelpTool"}]},"id":"26333","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26380","type":"Triangle"},{"attributes":{},"id":"26425","type":"BasicTickFormatter"},{"attributes":{},"id":"26399","type":"BasicTicker"},{"attributes":{"below":[{"id":"26393","type":"LinearAxis"}],"center":[{"id":"26397","type":"Grid"},{"id":"26402","type":"Grid"}],"left":[{"id":"26398","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26419","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26409","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26385","type":"DataRange1d"},"x_scale":{"id":"26389","type":"LinearScale"},"y_range":{"id":"26387","type":"DataRange1d"},"y_scale":{"id":"26391","type":"LinearScale"}},"id":"26383","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"26340","type":"ColumnDataSource"}},"id":"26344","type":"CDSView"},{"attributes":{},"id":"26426","type":"UnionRenderers"},{"attributes":{},"id":"26427","type":"Selection"},{"attributes":{"below":[{"id":"26355","type":"LinearAxis"}],"center":[{"id":"26359","type":"Grid"},{"id":"26364","type":"Grid"}],"left":[{"id":"26360","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26381","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26371","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26347","type":"DataRange1d"},"x_scale":{"id":"26351","type":"LinearScale"},"y_range":{"id":"26349","type":"DataRange1d"},"y_scale":{"id":"26353","type":"LinearScale"}},"id":"26345","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"26309","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26428","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"26311","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26365","type":"PanTool"},{"id":"26366","type":"WheelZoomTool"},{"id":"26367","type":"BoxZoomTool"},{"id":"26368","type":"SaveTool"},{"id":"26369","type":"ResetTool"},{"id":"26370","type":"HelpTool"}]},"id":"26371","type":"Toolbar"},{"attributes":{"callback":null},"id":"26349","type":"DataRange1d"},{"attributes":{},"id":"26432","type":"BasicTickFormatter"},{"attributes":{},"id":"26351","type":"LinearScale"},{"attributes":{},"id":"26434","type":"BasicTickFormatter"},{"attributes":{},"id":"26353","type":"LinearScale"},{"attributes":{},"id":"26435","type":"UnionRenderers"},{"attributes":{},"id":"26436","type":"Selection"},{"attributes":{"formatter":{"id":"26434","type":"BasicTickFormatter"},"ticker":{"id":"26356","type":"BasicTicker"}},"id":"26355","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26437","type":"BoxAnnotation"},{"attributes":{},"id":"26356","type":"BasicTicker"},{"attributes":{},"id":"26441","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"26356","type":"BasicTicker"}},"id":"26359","type":"Grid"},{"attributes":{},"id":"26443","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"26432","type":"BasicTickFormatter"},"ticker":{"id":"26361","type":"BasicTicker"}},"id":"26360","type":"LinearAxis"},{"attributes":{},"id":"26391","type":"LinearScale"},{"attributes":{},"id":"26444","type":"UnionRenderers"},{"attributes":{},"id":"26361","type":"BasicTicker"},{"attributes":{},"id":"26445","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"26361","type":"BasicTicker"}},"id":"26364","type":"Grid"},{"attributes":{},"id":"26370","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26446","type":"BoxAnnotation"},{"attributes":{"tools":[{"id":"26327","type":"PanTool"},{"id":"26328","type":"WheelZoomTool"},{"id":"26329","type":"BoxZoomTool"},{"id":"26330","type":"SaveTool"},{"id":"26331","type":"ResetTool"},{"id":"26332","type":"HelpTool"},{"id":"26365","type":"PanTool"},{"id":"26366","type":"WheelZoomTool"},{"id":"26367","type":"BoxZoomTool"},{"id":"26368","type":"SaveTool"},{"id":"26369","type":"ResetTool"},{"id":"26370","type":"HelpTool"},{"id":"26403","type":"PanTool"},{"id":"26404","type":"WheelZoomTool"},{"id":"26405","type":"BoxZoomTool"},{"id":"26406","type":"SaveTool"},{"id":"26407","type":"ResetTool"},{"id":"26408","type":"HelpTool"}]},"id":"26449","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26379","type":"Triangle"},{"attributes":{"source":{"id":"26378","type":"ColumnDataSource"}},"id":"26382","type":"CDSView"},{"attributes":{"ticker":{"id":"26394","type":"BasicTicker"}},"id":"26397","type":"Grid"},{"attributes":{"toolbar":{"id":"26449","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"26450","type":"ToolbarBox"},{"attributes":{},"id":"26389","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"26436","type":"Selection"},"selection_policy":{"id":"26435","type":"UnionRenderers"}},"id":"26378","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"26450","type":"ToolbarBox"},{"id":"26448","type":"GridBox"}]},"id":"26451","type":"Column"},{"attributes":{},"id":"26365","type":"PanTool"},{"attributes":{"formatter":{"id":"26441","type":"BasicTickFormatter"},"ticker":{"id":"26399","type":"BasicTicker"}},"id":"26398","type":"LinearAxis"},{"attributes":{"below":[{"id":"26317","type":"LinearAxis"}],"center":[{"id":"26321","type":"Grid"},{"id":"26326","type":"Grid"}],"left":[{"id":"26322","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26343","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26333","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26309","type":"DataRange1d"},"x_scale":{"id":"26313","type":"LinearScale"},"y_range":{"id":"26311","type":"DataRange1d"},"y_scale":{"id":"26315","type":"LinearScale"}},"id":"26307","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26366","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"26443","type":"BasicTickFormatter"},"ticker":{"id":"26394","type":"BasicTicker"}},"id":"26393","type":"LinearAxis"}],"root_ids":["26451"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"e54aa79a-eebb-4a99-b0e0-75db1bff149f","roots":{"26451":"2b35718c-4747-4a85-8a9d-beeb5dc770ec"}}];
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