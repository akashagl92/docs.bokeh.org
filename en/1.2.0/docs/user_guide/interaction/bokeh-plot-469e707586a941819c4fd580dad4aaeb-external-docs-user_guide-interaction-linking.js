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
      };var element = document.getElementById("06fc281c-0a2e-4849-b936-d768e44b8832");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '06fc281c-0a2e-4849-b936-d768e44b8832' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9d8ae5c6-3339-496b-a493-392f1f03ed80":{"roots":{"references":[{"attributes":{"below":[{"id":"25931","type":"LinearAxis"}],"center":[{"id":"25935","type":"Grid"},{"id":"25940","type":"Grid"}],"left":[{"id":"25936","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25957","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25947","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25850","type":"DataRange1d"},"x_scale":{"id":"25927","type":"LinearScale"},"y_range":{"id":"25925","type":"DataRange1d"},"y_scale":{"id":"25929","type":"LinearScale"}},"id":"25922","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"25974","type":"UnionRenderers"},{"attributes":{"below":[{"id":"25894","type":"LinearAxis"}],"center":[{"id":"25898","type":"Grid"},{"id":"25903","type":"Grid"}],"left":[{"id":"25899","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25920","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25910","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25850","type":"DataRange1d"},"x_scale":{"id":"25890","type":"LinearScale"},"y_range":{"id":"25852","type":"DataRange1d"},"y_scale":{"id":"25892","type":"LinearScale"}},"id":"25886","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25975","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25904","type":"PanTool"},{"id":"25905","type":"WheelZoomTool"},{"id":"25906","type":"BoxZoomTool"},{"id":"25907","type":"SaveTool"},{"id":"25908","type":"ResetTool"},{"id":"25909","type":"HelpTool"}]},"id":"25910","type":"Toolbar"},{"attributes":{"data_source":{"id":"25917","type":"ColumnDataSource"},"glyph":{"id":"25918","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25919","type":"Triangle"},"selection_glyph":null,"view":{"id":"25921","type":"CDSView"}},"id":"25920","type":"GlyphRenderer"},{"attributes":{},"id":"25978","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"25900","type":"BasicTicker"}},"id":"25903","type":"Grid"},{"attributes":{"source":{"id":"25917","type":"ColumnDataSource"}},"id":"25921","type":"CDSView"},{"attributes":{},"id":"25980","type":"BasicTickFormatter"},{"attributes":{},"id":"25982","type":"Selection"},{"attributes":{"formatter":{"id":"25969","type":"BasicTickFormatter"},"ticker":{"id":"25900","type":"BasicTicker"}},"id":"25899","type":"LinearAxis"},{"attributes":{},"id":"25983","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25956","type":"Square"},{"attributes":{"ticker":{"id":"25895","type":"BasicTicker"}},"id":"25898","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25984","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"25925","type":"DataRange1d"},{"attributes":{},"id":"25895","type":"BasicTicker"},{"attributes":{},"id":"25927","type":"LinearScale"},{"attributes":{"formatter":{"id":"25971","type":"BasicTickFormatter"},"ticker":{"id":"25895","type":"BasicTicker"}},"id":"25894","type":"LinearAxis"},{"attributes":{},"id":"25929","type":"LinearScale"},{"attributes":{},"id":"25892","type":"LinearScale"},{"attributes":{"formatter":{"id":"25980","type":"BasicTickFormatter"},"ticker":{"id":"25932","type":"BasicTicker"}},"id":"25931","type":"LinearAxis"},{"attributes":{},"id":"25890","type":"LinearScale"},{"attributes":{},"id":"25907","type":"SaveTool"},{"attributes":{},"id":"25932","type":"BasicTicker"},{"attributes":{"ticker":{"id":"25932","type":"BasicTicker"}},"id":"25935","type":"Grid"},{"attributes":{"formatter":{"id":"25978","type":"BasicTickFormatter"},"ticker":{"id":"25937","type":"BasicTicker"}},"id":"25936","type":"LinearAxis"},{"attributes":{"below":[{"id":"25858","type":"LinearAxis"}],"center":[{"id":"25862","type":"Grid"},{"id":"25867","type":"Grid"}],"left":[{"id":"25863","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25884","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25874","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25850","type":"DataRange1d"},"x_scale":{"id":"25854","type":"LinearScale"},"y_range":{"id":"25852","type":"DataRange1d"},"y_scale":{"id":"25856","type":"LinearScale"}},"id":"25848","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"25975","type":"BoxAnnotation"}},"id":"25906","type":"BoxZoomTool"},{"attributes":{},"id":"25937","type":"BasicTicker"},{"attributes":{},"id":"25904","type":"PanTool"},{"attributes":{},"id":"25905","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"25937","type":"BasicTicker"}},"id":"25940","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25883","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25919","type":"Triangle"},{"attributes":{"callback":null},"id":"25850","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25955","type":"Square"},{"attributes":{"callback":null},"id":"25852","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"25982","type":"Selection"},"selection_policy":{"id":"25983","type":"UnionRenderers"}},"id":"25954","type":"ColumnDataSource"},{"attributes":{},"id":"25854","type":"LinearScale"},{"attributes":{"data_source":{"id":"25954","type":"ColumnDataSource"},"glyph":{"id":"25955","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25956","type":"Square"},"selection_glyph":null,"view":{"id":"25958","type":"CDSView"}},"id":"25957","type":"GlyphRenderer"},{"attributes":{},"id":"25900","type":"BasicTicker"},{"attributes":{},"id":"25941","type":"PanTool"},{"attributes":{},"id":"25856","type":"LinearScale"},{"attributes":{},"id":"25942","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"25962","type":"BasicTickFormatter"},"ticker":{"id":"25859","type":"BasicTicker"}},"id":"25858","type":"LinearAxis"},{"attributes":{"source":{"id":"25881","type":"ColumnDataSource"}},"id":"25885","type":"CDSView"},{"attributes":{"overlay":{"id":"25984","type":"BoxAnnotation"}},"id":"25943","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"25859","type":"BasicTicker"}},"id":"25862","type":"Grid"},{"attributes":{},"id":"25944","type":"SaveTool"},{"attributes":{},"id":"25859","type":"BasicTicker"},{"attributes":{},"id":"25908","type":"ResetTool"},{"attributes":{},"id":"25945","type":"ResetTool"},{"attributes":{"formatter":{"id":"25960","type":"BasicTickFormatter"},"ticker":{"id":"25864","type":"BasicTicker"}},"id":"25863","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25918","type":"Triangle"},{"attributes":{},"id":"25864","type":"BasicTicker"},{"attributes":{},"id":"25946","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25941","type":"PanTool"},{"id":"25942","type":"WheelZoomTool"},{"id":"25943","type":"BoxZoomTool"},{"id":"25944","type":"SaveTool"},{"id":"25945","type":"ResetTool"},{"id":"25946","type":"HelpTool"}]},"id":"25947","type":"Toolbar"},{"attributes":{},"id":"25868","type":"PanTool"},{"attributes":{"dimension":1,"ticker":{"id":"25864","type":"BasicTicker"}},"id":"25867","type":"Grid"},{"attributes":{"source":{"id":"25954","type":"ColumnDataSource"}},"id":"25958","type":"CDSView"},{"attributes":{"data_source":{"id":"25881","type":"ColumnDataSource"},"glyph":{"id":"25882","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25883","type":"Circle"},"selection_glyph":null,"view":{"id":"25885","type":"CDSView"}},"id":"25884","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"25964","type":"Selection"},"selection_policy":{"id":"25965","type":"UnionRenderers"}},"id":"25881","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"25848","subtype":"Figure","type":"Plot"},0,0],[{"id":"25886","subtype":"Figure","type":"Plot"},0,1],[{"id":"25922","subtype":"Figure","type":"Plot"},0,2]]},"id":"25986","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25882","type":"Circle"},{"attributes":{},"id":"25960","type":"BasicTickFormatter"},{"attributes":{},"id":"25909","type":"HelpTool"},{"attributes":{},"id":"25962","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"25973","type":"Selection"},"selection_policy":{"id":"25974","type":"UnionRenderers"}},"id":"25917","type":"ColumnDataSource"},{"attributes":{},"id":"25869","type":"WheelZoomTool"},{"attributes":{},"id":"25871","type":"SaveTool"},{"attributes":{},"id":"25964","type":"Selection"},{"attributes":{},"id":"25873","type":"HelpTool"},{"attributes":{},"id":"25965","type":"UnionRenderers"},{"attributes":{},"id":"25872","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25966","type":"BoxAnnotation"},{"attributes":{},"id":"25969","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"25966","type":"BoxAnnotation"}},"id":"25870","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25868","type":"PanTool"},{"id":"25869","type":"WheelZoomTool"},{"id":"25870","type":"BoxZoomTool"},{"id":"25871","type":"SaveTool"},{"id":"25872","type":"ResetTool"},{"id":"25873","type":"HelpTool"}]},"id":"25874","type":"Toolbar"},{"attributes":{},"id":"25971","type":"BasicTickFormatter"},{"attributes":{},"id":"25973","type":"Selection"}],"root_ids":["25986"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"9d8ae5c6-3339-496b-a493-392f1f03ed80","roots":{"25986":"06fc281c-0a2e-4849-b936-d768e44b8832"}}];
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