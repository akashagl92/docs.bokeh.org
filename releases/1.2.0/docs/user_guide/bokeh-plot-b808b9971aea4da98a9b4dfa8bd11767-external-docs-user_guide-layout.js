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
      };var element = document.getElementById("5ca0898e-ff7a-4d66-be65-93f97cdfdf0c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5ca0898e-ff7a-4d66-be65-93f97cdfdf0c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b959302f-fc12-4a34-be10-29b7a7f106bb":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"26960","type":"Selection"},"selection_policy":{"id":"26961","type":"UnionRenderers"}},"id":"26863","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"26863","type":"ColumnDataSource"},"glyph":{"id":"26864","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26865","type":"Circle"},"selection_glyph":null,"view":{"id":"26867","type":"CDSView"}},"id":"26866","type":"GlyphRenderer"},{"attributes":{},"id":"26954","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"26962","type":"BoxAnnotation"}},"id":"26852","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"26958","type":"BasicTickFormatter"},"ticker":{"id":"26917","type":"BasicTicker"}},"id":"26916","type":"LinearAxis"},{"attributes":{},"id":"26958","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"26910","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"26884","type":"BasicTicker"}},"id":"26887","type":"Grid"},{"attributes":{},"id":"26853","type":"SaveTool"},{"attributes":{},"id":"26956","type":"BasicTickFormatter"},{"attributes":{},"id":"26927","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"26840","type":"LinearAxis"}],"center":[{"id":"26844","type":"Grid"},{"id":"26849","type":"Grid"}],"left":[{"id":"26845","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26866","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26856","type":"Toolbar"},"x_range":{"id":"26832","type":"DataRange1d"},"x_scale":{"id":"26836","type":"LinearScale"},"y_range":{"id":"26834","type":"DataRange1d"},"y_scale":{"id":"26838","type":"LinearScale"}},"id":"26830","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"26956","type":"BasicTickFormatter"},"ticker":{"id":"26922","type":"BasicTicker"}},"id":"26921","type":"LinearAxis"},{"attributes":{},"id":"26888","type":"PanTool"},{"attributes":{},"id":"26912","type":"LinearScale"},{"attributes":{"source":{"id":"26863","type":"ColumnDataSource"}},"id":"26867","type":"CDSView"},{"attributes":{},"id":"26922","type":"BasicTicker"},{"attributes":{},"id":"26960","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26903","type":"Triangle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26888","type":"PanTool"},{"id":"26889","type":"WheelZoomTool"},{"id":"26890","type":"BoxZoomTool"},{"id":"26891","type":"SaveTool"},{"id":"26892","type":"ResetTool"},{"id":"26893","type":"HelpTool"}]},"id":"26894","type":"Toolbar"},{"attributes":{},"id":"26851","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26940","type":"Square"},{"attributes":{},"id":"26966","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"26963","type":"Selection"},"selection_policy":{"id":"26964","type":"UnionRenderers"}},"id":"26901","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26941","type":"Square"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26968","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"26901","type":"ColumnDataSource"},"glyph":{"id":"26902","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26903","type":"Triangle"},"selection_glyph":null,"view":{"id":"26905","type":"CDSView"}},"id":"26904","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"26952","type":"BasicTickFormatter"},"ticker":{"id":"26884","type":"BasicTicker"}},"id":"26883","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"26922","type":"BasicTicker"}},"id":"26925","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26902","type":"Triangle"},{"attributes":{},"id":"26931","type":"HelpTool"},{"attributes":{},"id":"26926","type":"PanTool"},{"attributes":{},"id":"26854","type":"ResetTool"},{"attributes":{},"id":"26967","type":"UnionRenderers"},{"attributes":{},"id":"26876","type":"LinearScale"},{"attributes":{"formatter":{"id":"26950","type":"BasicTickFormatter"},"ticker":{"id":"26841","type":"BasicTicker"}},"id":"26840","type":"LinearAxis"},{"attributes":{"source":{"id":"26901","type":"ColumnDataSource"}},"id":"26905","type":"CDSView"},{"attributes":{},"id":"26893","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"26966","type":"Selection"},"selection_policy":{"id":"26967","type":"UnionRenderers"}},"id":"26939","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"26830","subtype":"Figure","type":"Plot"},{"id":"26868","subtype":"Figure","type":"Plot"},{"id":"26906","subtype":"Figure","type":"Plot"}]},"id":"26944","type":"Row"},{"attributes":{},"id":"26855","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26864","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26926","type":"PanTool"},{"id":"26927","type":"WheelZoomTool"},{"id":"26928","type":"BoxZoomTool"},{"id":"26929","type":"SaveTool"},{"id":"26930","type":"ResetTool"},{"id":"26931","type":"HelpTool"}]},"id":"26932","type":"Toolbar"},{"attributes":{},"id":"26889","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"26965","type":"BoxAnnotation"}},"id":"26890","type":"BoxZoomTool"},{"attributes":{},"id":"26964","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"26968","type":"BoxAnnotation"}},"id":"26928","type":"BoxZoomTool"},{"attributes":{},"id":"26838","type":"LinearScale"},{"attributes":{"below":[{"id":"26878","type":"LinearAxis"}],"center":[{"id":"26882","type":"Grid"},{"id":"26887","type":"Grid"}],"left":[{"id":"26883","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26904","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26894","type":"Toolbar"},"x_range":{"id":"26870","type":"DataRange1d"},"x_scale":{"id":"26874","type":"LinearScale"},"y_range":{"id":"26872","type":"DataRange1d"},"y_scale":{"id":"26876","type":"LinearScale"}},"id":"26868","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26914","type":"LinearScale"},{"attributes":{"formatter":{"id":"26954","type":"BasicTickFormatter"},"ticker":{"id":"26879","type":"BasicTicker"}},"id":"26878","type":"LinearAxis"},{"attributes":{"ticker":{"id":"26841","type":"BasicTicker"}},"id":"26844","type":"Grid"},{"attributes":{},"id":"26892","type":"ResetTool"},{"attributes":{"callback":null},"id":"26908","type":"DataRange1d"},{"attributes":{},"id":"26846","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26850","type":"PanTool"},{"id":"26851","type":"WheelZoomTool"},{"id":"26852","type":"BoxZoomTool"},{"id":"26853","type":"SaveTool"},{"id":"26854","type":"ResetTool"},{"id":"26855","type":"HelpTool"}]},"id":"26856","type":"Toolbar"},{"attributes":{},"id":"26891","type":"SaveTool"},{"attributes":{},"id":"26930","type":"ResetTool"},{"attributes":{},"id":"26836","type":"LinearScale"},{"attributes":{},"id":"26963","type":"Selection"},{"attributes":{"ticker":{"id":"26879","type":"BasicTicker"}},"id":"26882","type":"Grid"},{"attributes":{"ticker":{"id":"26917","type":"BasicTicker"}},"id":"26920","type":"Grid"},{"attributes":{},"id":"26961","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"26939","type":"ColumnDataSource"},"glyph":{"id":"26940","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26941","type":"Square"},"selection_glyph":null,"view":{"id":"26943","type":"CDSView"}},"id":"26942","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26962","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26865","type":"Circle"},{"attributes":{"formatter":{"id":"26948","type":"BasicTickFormatter"},"ticker":{"id":"26846","type":"BasicTicker"}},"id":"26845","type":"LinearAxis"},{"attributes":{},"id":"26917","type":"BasicTicker"},{"attributes":{},"id":"26879","type":"BasicTicker"},{"attributes":{},"id":"26850","type":"PanTool"},{"attributes":{"source":{"id":"26939","type":"ColumnDataSource"}},"id":"26943","type":"CDSView"},{"attributes":{"callback":null},"id":"26870","type":"DataRange1d"},{"attributes":{},"id":"26884","type":"BasicTicker"},{"attributes":{},"id":"26874","type":"LinearScale"},{"attributes":{},"id":"26950","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"26832","type":"DataRange1d"},{"attributes":{"callback":null},"id":"26834","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"26846","type":"BasicTicker"}},"id":"26849","type":"Grid"},{"attributes":{},"id":"26929","type":"SaveTool"},{"attributes":{"below":[{"id":"26916","type":"LinearAxis"}],"center":[{"id":"26920","type":"Grid"},{"id":"26925","type":"Grid"}],"left":[{"id":"26921","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26942","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26932","type":"Toolbar"},"x_range":{"id":"26908","type":"DataRange1d"},"x_scale":{"id":"26912","type":"LinearScale"},"y_range":{"id":"26910","type":"DataRange1d"},"y_scale":{"id":"26914","type":"LinearScale"}},"id":"26906","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26948","type":"BasicTickFormatter"},{"attributes":{},"id":"26952","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"26872","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26965","type":"BoxAnnotation"},{"attributes":{},"id":"26841","type":"BasicTicker"}],"root_ids":["26944"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"b959302f-fc12-4a34-be10-29b7a7f106bb","roots":{"26944":"5ca0898e-ff7a-4d66-be65-93f97cdfdf0c"}}];
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