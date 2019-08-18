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
      };var element = document.getElementById("a4e3a878-0ff3-442a-8366-730016930a3b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a4e3a878-0ff3-442a-8366-730016930a3b' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
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
                    
                  var docs_json = '{"fd7db2a9-401e-4c1b-ae53-3fcadc3c4e12":{"roots":{"references":[{"attributes":{"data_source":{"id":"26966","type":"ColumnDataSource"},"glyph":{"id":"26967","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26968","type":"Square"},"selection_glyph":null,"view":{"id":"26970","type":"CDSView"}},"id":"26969","type":"GlyphRenderer"},{"attributes":{},"id":"26873","type":"BasicTicker"},{"attributes":{},"id":"26953","type":"PanTool"},{"attributes":{"dimension":1,"ticker":{"id":"26873","type":"BasicTicker"}},"id":"26876","type":"Grid"},{"attributes":{},"id":"26954","type":"WheelZoomTool"},{"attributes":{},"id":"26868","type":"BasicTicker"},{"attributes":{"overlay":{"id":"26995","type":"BoxAnnotation"}},"id":"26955","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"26868","type":"BasicTicker"}},"id":"26871","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26930","type":"Triangle"},{"attributes":{"formatter":{"id":"26975","type":"BasicTickFormatter"},"ticker":{"id":"26868","type":"BasicTicker"}},"id":"26867","type":"LinearAxis"},{"attributes":{},"id":"26956","type":"SaveTool"},{"attributes":{},"id":"26880","type":"SaveTool"},{"attributes":{},"id":"26957","type":"ResetTool"},{"attributes":{"overlay":{"id":"26989","type":"BoxAnnotation"}},"id":"26879","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"26981","type":"BasicTickFormatter"},"ticker":{"id":"26911","type":"BasicTicker"}},"id":"26910","type":"LinearAxis"},{"attributes":{},"id":"26958","type":"HelpTool"},{"attributes":{"ticker":{"id":"26906","type":"BasicTicker"}},"id":"26909","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"26911","type":"BasicTicker"}},"id":"26914","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26953","type":"PanTool"},{"id":"26954","type":"WheelZoomTool"},{"id":"26955","type":"BoxZoomTool"},{"id":"26956","type":"SaveTool"},{"id":"26957","type":"ResetTool"},{"id":"26958","type":"HelpTool"}]},"id":"26959","type":"Toolbar"},{"attributes":{},"id":"26877","type":"PanTool"},{"attributes":{},"id":"26878","type":"WheelZoomTool"},{"attributes":{"source":{"id":"26966","type":"ColumnDataSource"}},"id":"26970","type":"CDSView"},{"attributes":{"formatter":{"id":"26979","type":"BasicTickFormatter"},"ticker":{"id":"26906","type":"BasicTicker"}},"id":"26905","type":"LinearAxis"},{"attributes":{},"id":"26901","type":"LinearScale"},{"attributes":{},"id":"26881","type":"ResetTool"},{"attributes":{"children":[{"id":"26857","subtype":"Figure","type":"Plot"},{"id":"26895","subtype":"Figure","type":"Plot"},{"id":"26933","subtype":"Figure","type":"Plot"}]},"id":"26971","type":"Row"},{"attributes":{"data_source":{"id":"26928","type":"ColumnDataSource"},"glyph":{"id":"26929","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26930","type":"Triangle"},"selection_glyph":null,"view":{"id":"26932","type":"CDSView"}},"id":"26931","type":"GlyphRenderer"},{"attributes":{},"id":"26903","type":"LinearScale"},{"attributes":{},"id":"26882","type":"HelpTool"},{"attributes":{},"id":"26975","type":"BasicTickFormatter"},{"attributes":{},"id":"26906","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26877","type":"PanTool"},{"id":"26878","type":"WheelZoomTool"},{"id":"26879","type":"BoxZoomTool"},{"id":"26880","type":"SaveTool"},{"id":"26881","type":"ResetTool"},{"id":"26882","type":"HelpTool"}]},"id":"26883","type":"Toolbar"},{"attributes":{},"id":"26977","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26929","type":"Triangle"},{"attributes":{},"id":"26979","type":"BasicTickFormatter"},{"attributes":{},"id":"26915","type":"PanTool"},{"attributes":{},"id":"26981","type":"BasicTickFormatter"},{"attributes":{},"id":"26916","type":"WheelZoomTool"},{"attributes":{},"id":"26983","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"26992","type":"BoxAnnotation"}},"id":"26917","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"26890","type":"ColumnDataSource"},"glyph":{"id":"26891","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26892","type":"Circle"},"selection_glyph":null,"view":{"id":"26894","type":"CDSView"}},"id":"26893","type":"GlyphRenderer"},{"attributes":{},"id":"26985","type":"BasicTickFormatter"},{"attributes":{},"id":"26918","type":"SaveTool"},{"attributes":{},"id":"26987","type":"UnionRenderers"},{"attributes":{},"id":"26919","type":"ResetTool"},{"attributes":{},"id":"26988","type":"Selection"},{"attributes":{},"id":"26920","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26892","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26989","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26915","type":"PanTool"},{"id":"26916","type":"WheelZoomTool"},{"id":"26917","type":"BoxZoomTool"},{"id":"26918","type":"SaveTool"},{"id":"26919","type":"ResetTool"},{"id":"26920","type":"HelpTool"}]},"id":"26921","type":"Toolbar"},{"attributes":{"source":{"id":"26890","type":"ColumnDataSource"}},"id":"26894","type":"CDSView"},{"attributes":{},"id":"26990","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"26991","type":"Selection"},"selection_policy":{"id":"26990","type":"UnionRenderers"}},"id":"26928","type":"ColumnDataSource"},{"attributes":{"source":{"id":"26928","type":"ColumnDataSource"}},"id":"26932","type":"CDSView"},{"attributes":{},"id":"26991","type":"Selection"},{"attributes":{"callback":null},"id":"26899","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26992","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"26943","type":"LinearAxis"}],"center":[{"id":"26947","type":"Grid"},{"id":"26952","type":"Grid"}],"left":[{"id":"26948","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26969","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26959","type":"Toolbar"},"x_range":{"id":"26935","type":"DataRange1d"},"x_scale":{"id":"26939","type":"LinearScale"},"y_range":{"id":"26937","type":"DataRange1d"},"y_scale":{"id":"26941","type":"LinearScale"}},"id":"26933","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"26897","type":"DataRange1d"},{"attributes":{"below":[{"id":"26905","type":"LinearAxis"}],"center":[{"id":"26909","type":"Grid"},{"id":"26914","type":"Grid"}],"left":[{"id":"26910","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26931","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26921","type":"Toolbar"},"x_range":{"id":"26897","type":"DataRange1d"},"x_scale":{"id":"26901","type":"LinearScale"},"y_range":{"id":"26899","type":"DataRange1d"},"y_scale":{"id":"26903","type":"LinearScale"}},"id":"26895","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26993","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26968","type":"Square"},{"attributes":{"callback":null},"id":"26935","type":"DataRange1d"},{"attributes":{},"id":"26994","type":"Selection"},{"attributes":{"formatter":{"id":"26977","type":"BasicTickFormatter"},"ticker":{"id":"26873","type":"BasicTicker"}},"id":"26872","type":"LinearAxis"},{"attributes":{"callback":null},"id":"26937","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26995","type":"BoxAnnotation"},{"attributes":{},"id":"26865","type":"LinearScale"},{"attributes":{},"id":"26939","type":"LinearScale"},{"attributes":{},"id":"26941","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26891","type":"Circle"},{"attributes":{"formatter":{"id":"26983","type":"BasicTickFormatter"},"ticker":{"id":"26944","type":"BasicTicker"}},"id":"26943","type":"LinearAxis"},{"attributes":{},"id":"26944","type":"BasicTicker"},{"attributes":{},"id":"26911","type":"BasicTicker"},{"attributes":{"ticker":{"id":"26944","type":"BasicTicker"}},"id":"26947","type":"Grid"},{"attributes":{},"id":"26863","type":"LinearScale"},{"attributes":{"formatter":{"id":"26985","type":"BasicTickFormatter"},"ticker":{"id":"26949","type":"BasicTicker"}},"id":"26948","type":"LinearAxis"},{"attributes":{"callback":null},"id":"26861","type":"DataRange1d"},{"attributes":{},"id":"26949","type":"BasicTicker"},{"attributes":{"callback":null},"id":"26859","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"26949","type":"BasicTicker"}},"id":"26952","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"26988","type":"Selection"},"selection_policy":{"id":"26987","type":"UnionRenderers"}},"id":"26890","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"26867","type":"LinearAxis"}],"center":[{"id":"26871","type":"Grid"},{"id":"26876","type":"Grid"}],"left":[{"id":"26872","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26893","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26883","type":"Toolbar"},"x_range":{"id":"26859","type":"DataRange1d"},"x_scale":{"id":"26863","type":"LinearScale"},"y_range":{"id":"26861","type":"DataRange1d"},"y_scale":{"id":"26865","type":"LinearScale"}},"id":"26857","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26967","type":"Square"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"26994","type":"Selection"},"selection_policy":{"id":"26993","type":"UnionRenderers"}},"id":"26966","type":"ColumnDataSource"}],"root_ids":["26971"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"fd7db2a9-401e-4c1b-ae53-3fcadc3c4e12","roots":{"26971":"a4e3a878-0ff3-442a-8366-730016930a3b"}}];
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