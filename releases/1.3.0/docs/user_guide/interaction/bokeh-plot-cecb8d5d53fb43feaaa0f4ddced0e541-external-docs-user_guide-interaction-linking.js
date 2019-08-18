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
      };var element = document.getElementById("eadfd7de-d30c-4755-8ac4-b546074aa269");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'eadfd7de-d30c-4755-8ac4-b546074aa269' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2cee8a45-7e84-48d7-a2fc-1a8f78b88d9d":{"roots":{"references":[{"attributes":{"data_source":{"id":"25976","type":"ColumnDataSource"},"glyph":{"id":"25977","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25978","type":"Square"},"selection_glyph":null,"view":{"id":"25980","type":"CDSView"}},"id":"25979","type":"GlyphRenderer"},{"attributes":{},"id":"25876","type":"LinearScale"},{"attributes":{},"id":"25963","type":"PanTool"},{"attributes":{},"id":"25878","type":"LinearScale"},{"attributes":{},"id":"25964","type":"WheelZoomTool"},{"attributes":{},"id":"25886","type":"BasicTicker"},{"attributes":{"overlay":{"id":"26004","type":"BoxAnnotation"}},"id":"25965","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"25985","type":"BasicTickFormatter"},"ticker":{"id":"25886","type":"BasicTicker"}},"id":"25885","type":"LinearAxis"},{"attributes":{},"id":"25966","type":"SaveTool"},{"attributes":{"formatter":{"id":"25983","type":"BasicTickFormatter"},"ticker":{"id":"25881","type":"BasicTicker"}},"id":"25880","type":"LinearAxis"},{"attributes":{},"id":"25917","type":"BasicTicker"},{"attributes":{},"id":"25967","type":"ResetTool"},{"attributes":{},"id":"25881","type":"BasicTicker"},{"attributes":{"ticker":{"id":"25917","type":"BasicTicker"}},"id":"25920","type":"Grid"},{"attributes":{},"id":"25968","type":"HelpTool"},{"attributes":{"ticker":{"id":"25881","type":"BasicTicker"}},"id":"25884","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25963","type":"PanTool"},{"id":"25964","type":"WheelZoomTool"},{"id":"25965","type":"BoxZoomTool"},{"id":"25966","type":"SaveTool"},{"id":"25967","type":"ResetTool"},{"id":"25968","type":"HelpTool"}]},"id":"25969","type":"Toolbar"},{"attributes":{"overlay":{"id":"25986","type":"BoxAnnotation"}},"id":"25892","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"25886","type":"BasicTicker"}},"id":"25889","type":"Grid"},{"attributes":{"callback":null},"id":"25874","type":"DataRange1d"},{"attributes":{"source":{"id":"25976","type":"ColumnDataSource"}},"id":"25980","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25905","type":"Circle"},{"attributes":{"children":[[{"id":"25870","subtype":"Figure","type":"Plot"},0,0],[{"id":"25908","subtype":"Figure","type":"Plot"},0,1],[{"id":"25944","subtype":"Figure","type":"Plot"},0,2]]},"id":"26008","type":"GridBox"},{"attributes":{},"id":"25927","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25904","type":"Circle"},{"attributes":{},"id":"25983","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"25903","type":"ColumnDataSource"},"glyph":{"id":"25904","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25905","type":"Circle"},"selection_glyph":null,"view":{"id":"25907","type":"CDSView"}},"id":"25906","type":"GlyphRenderer"},{"attributes":{},"id":"25985","type":"BasicTickFormatter"},{"attributes":{},"id":"25890","type":"PanTool"},{"attributes":{"formatter":{"id":"25994","type":"BasicTickFormatter"},"ticker":{"id":"25922","type":"BasicTicker"}},"id":"25921","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25986","type":"BoxAnnotation"},{"attributes":{},"id":"25891","type":"WheelZoomTool"},{"attributes":{},"id":"25987","type":"UnionRenderers"},{"attributes":{},"id":"25893","type":"SaveTool"},{"attributes":{},"id":"25988","type":"Selection"},{"attributes":{},"id":"25992","type":"BasicTickFormatter"},{"attributes":{},"id":"25994","type":"BasicTickFormatter"},{"attributes":{},"id":"25894","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25995","type":"BoxAnnotation"},{"attributes":{},"id":"25895","type":"HelpTool"},{"attributes":{},"id":"25996","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25890","type":"PanTool"},{"id":"25891","type":"WheelZoomTool"},{"id":"25892","type":"BoxZoomTool"},{"id":"25893","type":"SaveTool"},{"id":"25894","type":"ResetTool"},{"id":"25895","type":"HelpTool"}]},"id":"25896","type":"Toolbar"},{"attributes":{},"id":"25931","type":"HelpTool"},{"attributes":{},"id":"25997","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25978","type":"Square"},{"attributes":{},"id":"26001","type":"BasicTickFormatter"},{"attributes":{},"id":"26003","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"25939","type":"ColumnDataSource"}},"id":"25943","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26004","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"25995","type":"BoxAnnotation"}},"id":"25928","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"25953","type":"LinearAxis"}],"center":[{"id":"25957","type":"Grid"},{"id":"25962","type":"Grid"}],"left":[{"id":"25958","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25979","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25969","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25872","type":"DataRange1d"},"x_scale":{"id":"25949","type":"LinearScale"},"y_range":{"id":"25947","type":"DataRange1d"},"y_scale":{"id":"25951","type":"LinearScale"}},"id":"25944","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26005","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25926","type":"PanTool"},{"id":"25927","type":"WheelZoomTool"},{"id":"25928","type":"BoxZoomTool"},{"id":"25929","type":"SaveTool"},{"id":"25930","type":"ResetTool"},{"id":"25931","type":"HelpTool"}]},"id":"25932","type":"Toolbar"},{"attributes":{"data_source":{"id":"25939","type":"ColumnDataSource"},"glyph":{"id":"25940","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25941","type":"Triangle"},"selection_glyph":null,"view":{"id":"25943","type":"CDSView"}},"id":"25942","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"25992","type":"BasicTickFormatter"},"ticker":{"id":"25917","type":"BasicTicker"}},"id":"25916","type":"LinearAxis"},{"attributes":{},"id":"26006","type":"Selection"},{"attributes":{"callback":null},"id":"25947","type":"DataRange1d"},{"attributes":{},"id":"25914","type":"LinearScale"},{"attributes":{},"id":"25949","type":"LinearScale"},{"attributes":{},"id":"25912","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"25997","type":"Selection"},"selection_policy":{"id":"25996","type":"UnionRenderers"}},"id":"25939","type":"ColumnDataSource"},{"attributes":{},"id":"25951","type":"LinearScale"},{"attributes":{"formatter":{"id":"26001","type":"BasicTickFormatter"},"ticker":{"id":"25954","type":"BasicTicker"}},"id":"25953","type":"LinearAxis"},{"attributes":{"below":[{"id":"25916","type":"LinearAxis"}],"center":[{"id":"25920","type":"Grid"},{"id":"25925","type":"Grid"}],"left":[{"id":"25921","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25942","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25932","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25872","type":"DataRange1d"},"x_scale":{"id":"25912","type":"LinearScale"},"y_range":{"id":"25874","type":"DataRange1d"},"y_scale":{"id":"25914","type":"LinearScale"}},"id":"25908","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"25926","type":"PanTool"},{"attributes":{"source":{"id":"25903","type":"ColumnDataSource"}},"id":"25907","type":"CDSView"},{"attributes":{},"id":"25954","type":"BasicTicker"},{"attributes":{},"id":"25929","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25940","type":"Triangle"},{"attributes":{"ticker":{"id":"25954","type":"BasicTicker"}},"id":"25957","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25941","type":"Triangle"},{"attributes":{"formatter":{"id":"26003","type":"BasicTickFormatter"},"ticker":{"id":"25959","type":"BasicTicker"}},"id":"25958","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"25922","type":"BasicTicker"}},"id":"25925","type":"Grid"},{"attributes":{},"id":"25959","type":"BasicTicker"},{"attributes":{},"id":"25922","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"25959","type":"BasicTicker"}},"id":"25962","type":"Grid"},{"attributes":{"below":[{"id":"25880","type":"LinearAxis"}],"center":[{"id":"25884","type":"Grid"},{"id":"25889","type":"Grid"}],"left":[{"id":"25885","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"25906","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"25896","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25872","type":"DataRange1d"},"x_scale":{"id":"25876","type":"LinearScale"},"y_range":{"id":"25874","type":"DataRange1d"},"y_scale":{"id":"25878","type":"LinearScale"}},"id":"25870","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"25988","type":"Selection"},"selection_policy":{"id":"25987","type":"UnionRenderers"}},"id":"25903","type":"ColumnDataSource"},{"attributes":{},"id":"25930","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25977","type":"Square"},{"attributes":{"callback":null},"id":"25872","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"26006","type":"Selection"},"selection_policy":{"id":"26005","type":"UnionRenderers"}},"id":"25976","type":"ColumnDataSource"}],"root_ids":["26008"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"2cee8a45-7e84-48d7-a2fc-1a8f78b88d9d","roots":{"26008":"eadfd7de-d30c-4755-8ac4-b546074aa269"}}];
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