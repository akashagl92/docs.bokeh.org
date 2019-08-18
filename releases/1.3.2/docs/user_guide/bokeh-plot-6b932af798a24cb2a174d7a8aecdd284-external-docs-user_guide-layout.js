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
      };var element = document.getElementById("cf4fa575-1978-4e57-b9b4-c111644ef318");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cf4fa575-1978-4e57-b9b4-c111644ef318' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b403d962-eed9-4ec6-8340-15393bf2763a":{"roots":{"references":[{"attributes":{},"id":"27125","type":"HelpTool"},{"attributes":{},"id":"27192","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27120","type":"PanTool"},{"id":"27121","type":"WheelZoomTool"},{"id":"27122","type":"BoxZoomTool"},{"id":"27123","type":"SaveTool"},{"id":"27124","type":"ResetTool"},{"id":"27125","type":"HelpTool"}]},"id":"27126","type":"Toolbar"},{"attributes":{"data_source":{"id":"27133","type":"ColumnDataSource"},"glyph":{"id":"27134","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27135","type":"Circle"},"selection_glyph":null,"view":{"id":"27137","type":"CDSView"}},"id":"27136","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"27192","type":"BasicTicker"}},"id":"27195","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27211","type":"Square"},{"attributes":{"source":{"id":"27133","type":"ColumnDataSource"}},"id":"27137","type":"CDSView"},{"attributes":{"callback":null},"id":"27102","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27210","type":"Square"},{"attributes":{"below":[{"id":"27148","type":"LinearAxis"}],"center":[{"id":"27152","type":"Grid"},{"id":"27157","type":"Grid"}],"left":[{"id":"27153","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27174","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"27164","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27140","type":"DataRange1d"},"x_scale":{"id":"27144","type":"LinearScale"},"y_range":{"id":"27142","type":"DataRange1d"},"y_scale":{"id":"27146","type":"LinearScale"}},"id":"27138","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27108","type":"LinearScale"},{"attributes":{"data_source":{"id":"27209","type":"ColumnDataSource"},"glyph":{"id":"27210","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27211","type":"Square"},"selection_glyph":null,"view":{"id":"27213","type":"CDSView"}},"id":"27212","type":"GlyphRenderer"},{"attributes":{},"id":"27196","type":"PanTool"},{"attributes":{},"id":"27144","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27135","type":"Circle"},{"attributes":{},"id":"27197","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27173","type":"Triangle"},{"attributes":{"formatter":{"id":"27235","type":"BasicTickFormatter"},"ticker":{"id":"27192","type":"BasicTicker"}},"id":"27191","type":"LinearAxis"},{"attributes":{},"id":"27106","type":"LinearScale"},{"attributes":{"callback":null},"id":"27140","type":"DataRange1d"},{"attributes":{"overlay":{"id":"27239","type":"BoxAnnotation"}},"id":"27198","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"27221","type":"BoxAnnotation"}},"id":"27122","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"27142","type":"DataRange1d"},{"attributes":{},"id":"27199","type":"SaveTool"},{"attributes":{},"id":"27116","type":"BasicTicker"},{"attributes":{},"id":"27123","type":"SaveTool"},{"attributes":{},"id":"27146","type":"LinearScale"},{"attributes":{},"id":"27200","type":"ResetTool"},{"attributes":{},"id":"27124","type":"ResetTool"},{"attributes":{},"id":"27201","type":"HelpTool"},{"attributes":{"formatter":{"id":"27217","type":"BasicTickFormatter"},"ticker":{"id":"27116","type":"BasicTicker"}},"id":"27115","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"27154","type":"BasicTicker"}},"id":"27157","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27196","type":"PanTool"},{"id":"27197","type":"WheelZoomTool"},{"id":"27198","type":"BoxZoomTool"},{"id":"27199","type":"SaveTool"},{"id":"27200","type":"ResetTool"},{"id":"27201","type":"HelpTool"}]},"id":"27202","type":"Toolbar"},{"attributes":{},"id":"27154","type":"BasicTicker"},{"attributes":{"formatter":{"id":"27224","type":"BasicTickFormatter"},"ticker":{"id":"27149","type":"BasicTicker"}},"id":"27148","type":"LinearAxis"},{"attributes":{},"id":"27149","type":"BasicTicker"},{"attributes":{"source":{"id":"27209","type":"ColumnDataSource"}},"id":"27213","type":"CDSView"},{"attributes":{"formatter":{"id":"27226","type":"BasicTickFormatter"},"ticker":{"id":"27154","type":"BasicTicker"}},"id":"27153","type":"LinearAxis"},{"attributes":{"children":[[{"id":"27100","subtype":"Figure","type":"Plot"},0,0],[{"id":"27138","subtype":"Figure","type":"Plot"},0,1],[{"id":"27176","subtype":"Figure","type":"Plot"},1,1]]},"id":"27241","type":"GridBox"},{"attributes":{"ticker":{"id":"27149","type":"BasicTicker"}},"id":"27152","type":"Grid"},{"attributes":{},"id":"27215","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"27230","type":"BoxAnnotation"}},"id":"27160","type":"BoxZoomTool"},{"attributes":{},"id":"27217","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27172","type":"Triangle"},{"attributes":{"below":[{"id":"27110","type":"LinearAxis"}],"center":[{"id":"27114","type":"Grid"},{"id":"27119","type":"Grid"}],"left":[{"id":"27115","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27136","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"27126","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27102","type":"DataRange1d"},"x_scale":{"id":"27106","type":"LinearScale"},"y_range":{"id":"27104","type":"DataRange1d"},"y_scale":{"id":"27108","type":"LinearScale"}},"id":"27100","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27219","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"27229","type":"Selection"},"selection_policy":{"id":"27228","type":"UnionRenderers"}},"id":"27171","type":"ColumnDataSource"},{"attributes":{},"id":"27220","type":"Selection"},{"attributes":{"data_source":{"id":"27171","type":"ColumnDataSource"},"glyph":{"id":"27172","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27173","type":"Triangle"},"selection_glyph":null,"view":{"id":"27175","type":"CDSView"}},"id":"27174","type":"GlyphRenderer"},{"attributes":{},"id":"27158","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27221","type":"BoxAnnotation"},{"attributes":{},"id":"27159","type":"WheelZoomTool"},{"attributes":{},"id":"27224","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27134","type":"Circle"},{"attributes":{},"id":"27161","type":"SaveTool"},{"attributes":{},"id":"27226","type":"BasicTickFormatter"},{"attributes":{},"id":"27162","type":"ResetTool"},{"attributes":{},"id":"27228","type":"UnionRenderers"},{"attributes":{},"id":"27163","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"27220","type":"Selection"},"selection_policy":{"id":"27219","type":"UnionRenderers"}},"id":"27133","type":"ColumnDataSource"},{"attributes":{},"id":"27229","type":"Selection"},{"attributes":{},"id":"27120","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27158","type":"PanTool"},{"id":"27159","type":"WheelZoomTool"},{"id":"27160","type":"BoxZoomTool"},{"id":"27161","type":"SaveTool"},{"id":"27162","type":"ResetTool"},{"id":"27163","type":"HelpTool"}]},"id":"27164","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27230","type":"BoxAnnotation"},{"attributes":{},"id":"27233","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"27171","type":"ColumnDataSource"}},"id":"27175","type":"CDSView"},{"attributes":{},"id":"27235","type":"BasicTickFormatter"},{"attributes":{},"id":"27121","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"27186","type":"LinearAxis"}],"center":[{"id":"27190","type":"Grid"},{"id":"27195","type":"Grid"}],"left":[{"id":"27191","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27212","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"27202","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27178","type":"DataRange1d"},"x_scale":{"id":"27182","type":"LinearScale"},"y_range":{"id":"27180","type":"DataRange1d"},"y_scale":{"id":"27184","type":"LinearScale"}},"id":"27176","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27237","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"27238","type":"Selection"},"selection_policy":{"id":"27237","type":"UnionRenderers"}},"id":"27209","type":"ColumnDataSource"},{"attributes":{},"id":"27238","type":"Selection"},{"attributes":{"callback":null},"id":"27178","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27239","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"27180","type":"DataRange1d"},{"attributes":{"tools":[{"id":"27120","type":"PanTool"},{"id":"27121","type":"WheelZoomTool"},{"id":"27122","type":"BoxZoomTool"},{"id":"27123","type":"SaveTool"},{"id":"27124","type":"ResetTool"},{"id":"27125","type":"HelpTool"},{"id":"27158","type":"PanTool"},{"id":"27159","type":"WheelZoomTool"},{"id":"27160","type":"BoxZoomTool"},{"id":"27161","type":"SaveTool"},{"id":"27162","type":"ResetTool"},{"id":"27163","type":"HelpTool"},{"id":"27196","type":"PanTool"},{"id":"27197","type":"WheelZoomTool"},{"id":"27198","type":"BoxZoomTool"},{"id":"27199","type":"SaveTool"},{"id":"27200","type":"ResetTool"},{"id":"27201","type":"HelpTool"}]},"id":"27242","type":"ProxyToolbar"},{"attributes":{},"id":"27182","type":"LinearScale"},{"attributes":{"toolbar":{"id":"27242","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"27243","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"27215","type":"BasicTickFormatter"},"ticker":{"id":"27111","type":"BasicTicker"}},"id":"27110","type":"LinearAxis"},{"attributes":{},"id":"27184","type":"LinearScale"},{"attributes":{"children":[{"id":"27243","type":"ToolbarBox"},{"id":"27241","type":"GridBox"}]},"id":"27244","type":"Column"},{"attributes":{"formatter":{"id":"27233","type":"BasicTickFormatter"},"ticker":{"id":"27187","type":"BasicTicker"}},"id":"27186","type":"LinearAxis"},{"attributes":{},"id":"27187","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"27116","type":"BasicTicker"}},"id":"27119","type":"Grid"},{"attributes":{"ticker":{"id":"27111","type":"BasicTicker"}},"id":"27114","type":"Grid"},{"attributes":{"ticker":{"id":"27187","type":"BasicTicker"}},"id":"27190","type":"Grid"},{"attributes":{},"id":"27111","type":"BasicTicker"},{"attributes":{"callback":null},"id":"27104","type":"DataRange1d"}],"root_ids":["27244"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"b403d962-eed9-4ec6-8340-15393bf2763a","roots":{"27244":"cf4fa575-1978-4e57-b9b4-c111644ef318"}}];
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