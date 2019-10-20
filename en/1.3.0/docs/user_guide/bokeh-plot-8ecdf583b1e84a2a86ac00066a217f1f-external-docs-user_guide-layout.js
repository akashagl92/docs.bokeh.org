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
      };var element = document.getElementById("7d19bd03-ec65-4c7f-9378-86800d0a1817");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7d19bd03-ec65-4c7f-9378-86800d0a1817' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b9b91417-1fd9-48b5-b2e5-dc36bf7ac70e":{"roots":{"references":[{"attributes":{},"id":"26879","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26929","type":"Triangle"},{"attributes":{"source":{"id":"26927","type":"ColumnDataSource"}},"id":"26931","type":"CDSView"},{"attributes":{"source":{"id":"26965","type":"ColumnDataSource"}},"id":"26969","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26914","type":"PanTool"},{"id":"26915","type":"WheelZoomTool"},{"id":"26916","type":"BoxZoomTool"},{"id":"26917","type":"SaveTool"},{"id":"26918","type":"ResetTool"},{"id":"26919","type":"HelpTool"}]},"id":"26920","type":"Toolbar"},{"attributes":{"formatter":{"id":"26983","type":"BasicTickFormatter"},"ticker":{"id":"26943","type":"BasicTicker"}},"id":"26942","type":"LinearAxis"},{"attributes":{"overlay":{"id":"26986","type":"BoxAnnotation"}},"id":"26878","type":"BoxZoomTool"},{"attributes":{},"id":"26919","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26891","type":"Circle"},{"attributes":{"data_source":{"id":"26889","type":"ColumnDataSource"},"glyph":{"id":"26890","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26891","type":"Circle"},"selection_glyph":null,"view":{"id":"26893","type":"CDSView"}},"id":"26892","type":"GlyphRenderer"},{"attributes":{},"id":"26918","type":"ResetTool"},{"attributes":{},"id":"26876","type":"PanTool"},{"attributes":{"children":[{"id":"26856","subtype":"Figure","type":"Plot"},{"id":"26894","subtype":"Figure","type":"Plot"},{"id":"26932","subtype":"Figure","type":"Plot"}]},"id":"26970","type":"Row"},{"attributes":{},"id":"26917","type":"SaveTool"},{"attributes":{},"id":"26877","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"26989","type":"BoxAnnotation"}},"id":"26916","type":"BoxZoomTool"},{"attributes":{},"id":"26880","type":"ResetTool"},{"attributes":{"source":{"id":"26889","type":"ColumnDataSource"}},"id":"26893","type":"CDSView"},{"attributes":{},"id":"26881","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26876","type":"PanTool"},{"id":"26877","type":"WheelZoomTool"},{"id":"26878","type":"BoxZoomTool"},{"id":"26879","type":"SaveTool"},{"id":"26880","type":"ResetTool"},{"id":"26881","type":"HelpTool"}]},"id":"26882","type":"Toolbar"},{"attributes":{"callback":null},"id":"26934","type":"DataRange1d"},{"attributes":{"below":[{"id":"26904","type":"LinearAxis"}],"center":[{"id":"26908","type":"Grid"},{"id":"26913","type":"Grid"}],"left":[{"id":"26909","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26930","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26920","type":"Toolbar"},"x_range":{"id":"26896","type":"DataRange1d"},"x_scale":{"id":"26900","type":"LinearScale"},"y_range":{"id":"26898","type":"DataRange1d"},"y_scale":{"id":"26902","type":"LinearScale"}},"id":"26894","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26938","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"26988","type":"Selection"},"selection_policy":{"id":"26987","type":"UnionRenderers"}},"id":"26889","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"26896","type":"DataRange1d"},{"attributes":{"callback":null},"id":"26898","type":"DataRange1d"},{"attributes":{},"id":"26940","type":"LinearScale"},{"attributes":{},"id":"26915","type":"WheelZoomTool"},{"attributes":{},"id":"26900","type":"LinearScale"},{"attributes":{},"id":"26914","type":"PanTool"},{"attributes":{},"id":"26902","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"26991","type":"Selection"},"selection_policy":{"id":"26990","type":"UnionRenderers"}},"id":"26927","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"26979","type":"BasicTickFormatter"},"ticker":{"id":"26905","type":"BasicTicker"}},"id":"26904","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26928","type":"Triangle"},{"attributes":{},"id":"26905","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"26910","type":"BasicTicker"}},"id":"26913","type":"Grid"},{"attributes":{"ticker":{"id":"26905","type":"BasicTicker"}},"id":"26908","type":"Grid"},{"attributes":{},"id":"26910","type":"BasicTicker"},{"attributes":{"formatter":{"id":"26981","type":"BasicTickFormatter"},"ticker":{"id":"26910","type":"BasicTicker"}},"id":"26909","type":"LinearAxis"},{"attributes":{},"id":"26975","type":"BasicTickFormatter"},{"attributes":{},"id":"26977","type":"BasicTickFormatter"},{"attributes":{},"id":"26979","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"26965","type":"ColumnDataSource"},"glyph":{"id":"26966","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26967","type":"Square"},"selection_glyph":null,"view":{"id":"26969","type":"CDSView"}},"id":"26968","type":"GlyphRenderer"},{"attributes":{},"id":"26981","type":"BasicTickFormatter"},{"attributes":{},"id":"26983","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"26866","type":"LinearAxis"}],"center":[{"id":"26870","type":"Grid"},{"id":"26875","type":"Grid"}],"left":[{"id":"26871","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26892","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26882","type":"Toolbar"},"x_range":{"id":"26858","type":"DataRange1d"},"x_scale":{"id":"26862","type":"LinearScale"},"y_range":{"id":"26860","type":"DataRange1d"},"y_scale":{"id":"26864","type":"LinearScale"}},"id":"26856","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"26943","type":"BasicTicker"}},"id":"26946","type":"Grid"},{"attributes":{},"id":"26985","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26952","type":"PanTool"},{"id":"26953","type":"WheelZoomTool"},{"id":"26954","type":"BoxZoomTool"},{"id":"26955","type":"SaveTool"},{"id":"26956","type":"ResetTool"},{"id":"26957","type":"HelpTool"}]},"id":"26958","type":"Toolbar"},{"attributes":{"callback":null},"id":"26858","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"26994","type":"Selection"},"selection_policy":{"id":"26993","type":"UnionRenderers"}},"id":"26965","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26986","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"26860","type":"DataRange1d"},{"attributes":{},"id":"26957","type":"HelpTool"},{"attributes":{},"id":"26948","type":"BasicTicker"},{"attributes":{},"id":"26943","type":"BasicTicker"},{"attributes":{},"id":"26987","type":"UnionRenderers"},{"attributes":{},"id":"26862","type":"LinearScale"},{"attributes":{},"id":"26956","type":"ResetTool"},{"attributes":{},"id":"26988","type":"Selection"},{"attributes":{},"id":"26864","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26989","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"26872","type":"BasicTicker"}},"id":"26875","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26967","type":"Square"},{"attributes":{},"id":"26990","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"26975","type":"BasicTickFormatter"},"ticker":{"id":"26867","type":"BasicTicker"}},"id":"26866","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26966","type":"Square"},{"attributes":{"ticker":{"id":"26867","type":"BasicTicker"}},"id":"26870","type":"Grid"},{"attributes":{},"id":"26991","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26992","type":"BoxAnnotation"},{"attributes":{},"id":"26952","type":"PanTool"},{"attributes":{"callback":null},"id":"26936","type":"DataRange1d"},{"attributes":{},"id":"26867","type":"BasicTicker"},{"attributes":{"formatter":{"id":"26977","type":"BasicTickFormatter"},"ticker":{"id":"26872","type":"BasicTicker"}},"id":"26871","type":"LinearAxis"},{"attributes":{},"id":"26993","type":"UnionRenderers"},{"attributes":{},"id":"26953","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"26948","type":"BasicTicker"}},"id":"26951","type":"Grid"},{"attributes":{},"id":"26872","type":"BasicTicker"},{"attributes":{},"id":"26994","type":"Selection"},{"attributes":{"below":[{"id":"26942","type":"LinearAxis"}],"center":[{"id":"26946","type":"Grid"},{"id":"26951","type":"Grid"}],"left":[{"id":"26947","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26968","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26958","type":"Toolbar"},"x_range":{"id":"26934","type":"DataRange1d"},"x_scale":{"id":"26938","type":"LinearScale"},"y_range":{"id":"26936","type":"DataRange1d"},"y_scale":{"id":"26940","type":"LinearScale"}},"id":"26932","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"26992","type":"BoxAnnotation"}},"id":"26954","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"26985","type":"BasicTickFormatter"},"ticker":{"id":"26948","type":"BasicTicker"}},"id":"26947","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26890","type":"Circle"},{"attributes":{},"id":"26955","type":"SaveTool"},{"attributes":{"data_source":{"id":"26927","type":"ColumnDataSource"},"glyph":{"id":"26928","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26929","type":"Triangle"},"selection_glyph":null,"view":{"id":"26931","type":"CDSView"}},"id":"26930","type":"GlyphRenderer"}],"root_ids":["26970"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"b9b91417-1fd9-48b5-b2e5-dc36bf7ac70e","roots":{"26970":"7d19bd03-ec65-4c7f-9378-86800d0a1817"}}];
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