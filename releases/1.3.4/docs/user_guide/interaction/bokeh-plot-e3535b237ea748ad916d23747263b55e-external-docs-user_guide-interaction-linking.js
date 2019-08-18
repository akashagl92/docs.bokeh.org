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
      };var element = document.getElementById("675c3464-4a68-4055-9464-a1adc0ef29de");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '675c3464-4a68-4055-9464-a1adc0ef29de' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d1791402-bb80-43c0-b0bb-27187b160c7b":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25964","type":"PanTool"},{"id":"25965","type":"WheelZoomTool"},{"id":"25966","type":"BoxZoomTool"},{"id":"25967","type":"SaveTool"},{"id":"25968","type":"ResetTool"},{"id":"25969","type":"HelpTool"}]},"id":"25970","type":"Toolbar"},{"attributes":{},"id":"25923","type":"BasicTicker"},{"attributes":{},"id":"25964","type":"PanTool"},{"attributes":{"formatter":{"id":"25995","type":"BasicTickFormatter"},"ticker":{"id":"25918","type":"BasicTicker"}},"id":"25917","type":"LinearAxis"},{"attributes":{},"id":"25965","type":"WheelZoomTool"},{"attributes":{},"id":"25891","type":"PanTool"},{"attributes":{},"id":"25918","type":"BasicTicker"},{"attributes":{"overlay":{"id":"26007","type":"BoxAnnotation"}},"id":"25966","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"25904","type":"ColumnDataSource"},"glyph":{"id":"25905","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25906","type":"Circle"},"selection_glyph":null,"view":{"id":"25908","type":"CDSView"}},"id":"25907","type":"GlyphRenderer"},{"attributes":{},"id":"25892","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"25918","type":"BasicTicker"}},"id":"25921","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"25987","type":"Selection"},"selection_policy":{"id":"25988","type":"UnionRenderers"}},"id":"25904","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25979","type":"Square"},{"attributes":{},"id":"25967","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25941","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25942","type":"Triangle"},{"attributes":{},"id":"25879","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"25923","type":"BasicTicker"}},"id":"25926","type":"Grid"},{"attributes":{},"id":"25968","type":"ResetTool"},{"attributes":{"formatter":{"id":"25993","type":"BasicTickFormatter"},"ticker":{"id":"25923","type":"BasicTicker"}},"id":"25922","type":"LinearAxis"},{"attributes":{},"id":"25894","type":"SaveTool"},{"attributes":{},"id":"25969","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25905","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25927","type":"PanTool"},{"id":"25928","type":"WheelZoomTool"},{"id":"25929","type":"BoxZoomTool"},{"id":"25930","type":"SaveTool"},{"id":"25931","type":"ResetTool"},{"id":"25932","type":"HelpTool"}]},"id":"25933","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"25996","type":"Selection"},"selection_policy":{"id":"25997","type":"UnionRenderers"}},"id":"25940","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"25881","type":"LinearAxis"}],"center":[{"id":"25885","type":"Grid"},{"id":"25890","type":"Grid"}],"left":[{"id":"25886","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25907","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25897","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25873","type":"DataRange1d"},"x_scale":{"id":"25877","type":"LinearScale"},"y_range":{"id":"25875","type":"DataRange1d"},"y_scale":{"id":"25879","type":"LinearScale"}},"id":"25871","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"25940","type":"ColumnDataSource"},"glyph":{"id":"25941","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25942","type":"Triangle"},"selection_glyph":null,"view":{"id":"25944","type":"CDSView"}},"id":"25943","type":"GlyphRenderer"},{"attributes":{},"id":"25895","type":"ResetTool"},{"attributes":{},"id":"25927","type":"PanTool"},{"attributes":{"children":[[{"id":"25871","subtype":"Figure","type":"Plot"},0,0],[{"id":"25909","subtype":"Figure","type":"Plot"},0,1],[{"id":"25945","subtype":"Figure","type":"Plot"},0,2]]},"id":"26009","type":"GridBox"},{"attributes":{"source":{"id":"25977","type":"ColumnDataSource"}},"id":"25981","type":"CDSView"},{"attributes":{},"id":"25928","type":"WheelZoomTool"},{"attributes":{},"id":"25986","type":"BasicTickFormatter"},{"attributes":{},"id":"25984","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"25998","type":"BoxAnnotation"}},"id":"25929","type":"BoxZoomTool"},{"attributes":{},"id":"25930","type":"SaveTool"},{"attributes":{},"id":"25987","type":"Selection"},{"attributes":{},"id":"25931","type":"ResetTool"},{"attributes":{},"id":"25988","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"25989","type":"BoxAnnotation"}},"id":"25893","type":"BoxZoomTool"},{"attributes":{},"id":"25896","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25989","type":"BoxAnnotation"},{"attributes":{},"id":"25932","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"25887","type":"BasicTicker"}},"id":"25890","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25891","type":"PanTool"},{"id":"25892","type":"WheelZoomTool"},{"id":"25893","type":"BoxZoomTool"},{"id":"25894","type":"SaveTool"},{"id":"25895","type":"ResetTool"},{"id":"25896","type":"HelpTool"}]},"id":"25897","type":"Toolbar"},{"attributes":{"callback":null},"id":"25948","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25906","type":"Circle"},{"attributes":{},"id":"25993","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"25977","type":"ColumnDataSource"},"glyph":{"id":"25978","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25979","type":"Square"},"selection_glyph":null,"view":{"id":"25981","type":"CDSView"}},"id":"25980","type":"GlyphRenderer"},{"attributes":{},"id":"25995","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"25904","type":"ColumnDataSource"}},"id":"25908","type":"CDSView"},{"attributes":{},"id":"25996","type":"Selection"},{"attributes":{},"id":"25997","type":"UnionRenderers"},{"attributes":{"below":[{"id":"25954","type":"LinearAxis"}],"center":[{"id":"25958","type":"Grid"},{"id":"25963","type":"Grid"}],"left":[{"id":"25959","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25980","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25970","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25873","type":"DataRange1d"},"x_scale":{"id":"25950","type":"LinearScale"},"y_range":{"id":"25948","type":"DataRange1d"},"y_scale":{"id":"25952","type":"LinearScale"}},"id":"25945","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"25940","type":"ColumnDataSource"}},"id":"25944","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25998","type":"BoxAnnotation"},{"attributes":{},"id":"25950","type":"LinearScale"},{"attributes":{"formatter":{"id":"25984","type":"BasicTickFormatter"},"ticker":{"id":"25887","type":"BasicTicker"}},"id":"25886","type":"LinearAxis"},{"attributes":{},"id":"26002","type":"BasicTickFormatter"},{"attributes":{},"id":"25952","type":"LinearScale"},{"attributes":{},"id":"26004","type":"BasicTickFormatter"},{"attributes":{},"id":"26005","type":"Selection"},{"attributes":{"formatter":{"id":"25986","type":"BasicTickFormatter"},"ticker":{"id":"25882","type":"BasicTicker"}},"id":"25881","type":"LinearAxis"},{"attributes":{"formatter":{"id":"26004","type":"BasicTickFormatter"},"ticker":{"id":"25955","type":"BasicTicker"}},"id":"25954","type":"LinearAxis"},{"attributes":{},"id":"26006","type":"UnionRenderers"},{"attributes":{},"id":"25882","type":"BasicTicker"},{"attributes":{},"id":"25960","type":"BasicTicker"},{"attributes":{},"id":"25887","type":"BasicTicker"},{"attributes":{},"id":"25955","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26007","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"25882","type":"BasicTicker"}},"id":"25885","type":"Grid"},{"attributes":{"ticker":{"id":"25955","type":"BasicTicker"}},"id":"25958","type":"Grid"},{"attributes":{"callback":null},"id":"25875","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"25960","type":"BasicTicker"}},"id":"25963","type":"Grid"},{"attributes":{"formatter":{"id":"26002","type":"BasicTickFormatter"},"ticker":{"id":"25960","type":"BasicTicker"}},"id":"25959","type":"LinearAxis"},{"attributes":{"callback":null},"id":"25873","type":"DataRange1d"},{"attributes":{},"id":"25877","type":"LinearScale"},{"attributes":{},"id":"25913","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"26005","type":"Selection"},"selection_policy":{"id":"26006","type":"UnionRenderers"}},"id":"25977","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"25917","type":"LinearAxis"}],"center":[{"id":"25921","type":"Grid"},{"id":"25926","type":"Grid"}],"left":[{"id":"25922","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25943","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25933","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25873","type":"DataRange1d"},"x_scale":{"id":"25913","type":"LinearScale"},"y_range":{"id":"25875","type":"DataRange1d"},"y_scale":{"id":"25915","type":"LinearScale"}},"id":"25909","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25978","type":"Square"},{"attributes":{},"id":"25915","type":"LinearScale"}],"root_ids":["26009"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"d1791402-bb80-43c0-b0bb-27187b160c7b","roots":{"26009":"675c3464-4a68-4055-9464-a1adc0ef29de"}}];
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