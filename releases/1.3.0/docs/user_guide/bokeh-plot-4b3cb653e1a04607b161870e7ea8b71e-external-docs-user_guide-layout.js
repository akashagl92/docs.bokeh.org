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
      };var element = document.getElementById("ea79b298-88b3-4d45-b8d5-b0a79a429b75");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ea79b298-88b3-4d45-b8d5-b0a79a429b75' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d7105212-28d4-4e6e-90cf-b1d6dfc54bf1":{"roots":{"references":[{"attributes":{"overlay":{"id":"27492","type":"BoxAnnotation"}},"id":"27423","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"27491","type":"BasicTickFormatter"},"ticker":{"id":"27417","type":"BasicTicker"}},"id":"27416","type":"LinearAxis"},{"attributes":{},"id":"27484","type":"Selection"},{"attributes":{},"id":"27425","type":"ResetTool"},{"attributes":{},"id":"27424","type":"SaveTool"},{"attributes":{"ticker":{"id":"27412","type":"BasicTicker"}},"id":"27415","type":"Grid"},{"attributes":{"text":""},"id":"27487","type":"Title"},{"attributes":{},"id":"27412","type":"BasicTicker"},{"attributes":{},"id":"27489","type":"BasicTickFormatter"},{"attributes":{},"id":"27426","type":"HelpTool"},{"attributes":{},"id":"27483","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"27489","type":"BasicTickFormatter"},"ticker":{"id":"27412","type":"BasicTicker"}},"id":"27411","type":"LinearAxis"},{"attributes":{},"id":"27491","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27473","type":"Square"},{"attributes":{"callback":null},"id":"27440","type":"DataRange1d"},{"attributes":{"below":[{"id":"27374","type":"LinearAxis"}],"center":[{"id":"27378","type":"Grid"},{"id":"27383","type":"Grid"}],"left":[{"id":"27379","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27400","type":"GlyphRenderer"}],"title":{"id":"27477","type":"Title"},"toolbar":{"id":"27390","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27366","type":"DataRange1d"},"x_scale":{"id":"27370","type":"LinearScale"},"y_range":{"id":"27368","type":"DataRange1d"},"y_scale":{"id":"27372","type":"LinearScale"}},"id":"27365","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"27448","type":"LinearAxis"}],"center":[{"id":"27452","type":"Grid"},{"id":"27457","type":"Grid"}],"left":[{"id":"27453","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27474","type":"GlyphRenderer"}],"title":{"id":"27497","type":"Title"},"toolbar":{"id":"27464","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27440","type":"DataRange1d"},"x_scale":{"id":"27444","type":"LinearScale"},"y_range":{"id":"27442","type":"DataRange1d"},"y_scale":{"id":"27446","type":"LinearScale"}},"id":"27439","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27492","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"27484","type":"Selection"},"selection_policy":{"id":"27483","type":"UnionRenderers"}},"id":"27397","type":"ColumnDataSource"},{"attributes":{},"id":"27493","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27421","type":"PanTool"},{"id":"27422","type":"WheelZoomTool"},{"id":"27423","type":"BoxZoomTool"},{"id":"27424","type":"SaveTool"},{"id":"27425","type":"ResetTool"},{"id":"27426","type":"HelpTool"}]},"id":"27427","type":"Toolbar"},{"attributes":{"data_source":{"id":"27434","type":"ColumnDataSource"},"glyph":{"id":"27435","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27436","type":"Triangle"},"selection_glyph":null,"view":{"id":"27438","type":"CDSView"}},"id":"27437","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27398","type":"Circle"},{"attributes":{},"id":"27494","type":"Selection"},{"attributes":{"text":""},"id":"27497","type":"Title"},{"attributes":{"source":{"id":"27434","type":"ColumnDataSource"}},"id":"27438","type":"CDSView"},{"attributes":{"callback":null},"id":"27366","type":"DataRange1d"},{"attributes":{},"id":"27499","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"27368","type":"DataRange1d"},{"attributes":{},"id":"27444","type":"LinearScale"},{"attributes":{},"id":"27501","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"27442","type":"DataRange1d"},{"attributes":{"source":{"id":"27397","type":"ColumnDataSource"}},"id":"27401","type":"CDSView"},{"attributes":{},"id":"27370","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27502","type":"BoxAnnotation"},{"attributes":{},"id":"27372","type":"LinearScale"},{"attributes":{},"id":"27446","type":"LinearScale"},{"attributes":{},"id":"27503","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"27479","type":"BasicTickFormatter"},"ticker":{"id":"27375","type":"BasicTicker"}},"id":"27374","type":"LinearAxis"},{"attributes":{},"id":"27454","type":"BasicTicker"},{"attributes":{},"id":"27504","type":"Selection"},{"attributes":{"formatter":{"id":"27501","type":"BasicTickFormatter"},"ticker":{"id":"27454","type":"BasicTicker"}},"id":"27453","type":"LinearAxis"},{"attributes":{"tools":[{"id":"27384","type":"PanTool"},{"id":"27385","type":"WheelZoomTool"},{"id":"27386","type":"BoxZoomTool"},{"id":"27387","type":"SaveTool"},{"id":"27388","type":"ResetTool"},{"id":"27389","type":"HelpTool"},{"id":"27421","type":"PanTool"},{"id":"27422","type":"WheelZoomTool"},{"id":"27423","type":"BoxZoomTool"},{"id":"27424","type":"SaveTool"},{"id":"27425","type":"ResetTool"},{"id":"27426","type":"HelpTool"},{"id":"27458","type":"PanTool"},{"id":"27459","type":"WheelZoomTool"},{"id":"27460","type":"BoxZoomTool"},{"id":"27461","type":"SaveTool"},{"id":"27462","type":"ResetTool"},{"id":"27463","type":"HelpTool"}]},"id":"27507","type":"ProxyToolbar"},{"attributes":{},"id":"27375","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"27507","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"27508","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"27481","type":"BasicTickFormatter"},"ticker":{"id":"27380","type":"BasicTicker"}},"id":"27379","type":"LinearAxis"},{"attributes":{"formatter":{"id":"27499","type":"BasicTickFormatter"},"ticker":{"id":"27449","type":"BasicTicker"}},"id":"27448","type":"LinearAxis"},{"attributes":{"children":[{"id":"27508","type":"ToolbarBox"},{"id":"27506","type":"GridBox"}]},"id":"27509","type":"Column"},{"attributes":{},"id":"27449","type":"BasicTicker"},{"attributes":{"ticker":{"id":"27375","type":"BasicTicker"}},"id":"27378","type":"Grid"},{"attributes":{},"id":"27380","type":"BasicTicker"},{"attributes":{"ticker":{"id":"27449","type":"BasicTicker"}},"id":"27452","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"27380","type":"BasicTicker"}},"id":"27383","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"27454","type":"BasicTicker"}},"id":"27457","type":"Grid"},{"attributes":{},"id":"27461","type":"SaveTool"},{"attributes":{},"id":"27385","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"27405","type":"DataRange1d"},{"attributes":{},"id":"27459","type":"WheelZoomTool"},{"attributes":{},"id":"27384","type":"PanTool"},{"attributes":{"below":[{"id":"27411","type":"LinearAxis"}],"center":[{"id":"27415","type":"Grid"},{"id":"27420","type":"Grid"}],"left":[{"id":"27416","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27437","type":"GlyphRenderer"}],"title":{"id":"27487","type":"Title"},"toolbar":{"id":"27427","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27403","type":"DataRange1d"},"x_scale":{"id":"27407","type":"LinearScale"},"y_range":{"id":"27405","type":"DataRange1d"},"y_scale":{"id":"27409","type":"LinearScale"}},"id":"27402","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"27502","type":"BoxAnnotation"}},"id":"27460","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27436","type":"Triangle"},{"attributes":{"callback":null},"id":"27403","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27472","type":"Square"},{"attributes":{},"id":"27407","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"27504","type":"Selection"},"selection_policy":{"id":"27503","type":"UnionRenderers"}},"id":"27471","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"27482","type":"BoxAnnotation"}},"id":"27386","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"27471","type":"ColumnDataSource"},"glyph":{"id":"27472","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27473","type":"Square"},"selection_glyph":null,"view":{"id":"27475","type":"CDSView"}},"id":"27474","type":"GlyphRenderer"},{"attributes":{},"id":"27388","type":"ResetTool"},{"attributes":{},"id":"27458","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27384","type":"PanTool"},{"id":"27385","type":"WheelZoomTool"},{"id":"27386","type":"BoxZoomTool"},{"id":"27387","type":"SaveTool"},{"id":"27388","type":"ResetTool"},{"id":"27389","type":"HelpTool"}]},"id":"27390","type":"Toolbar"},{"attributes":{},"id":"27462","type":"ResetTool"},{"attributes":{},"id":"27463","type":"HelpTool"},{"attributes":{},"id":"27389","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27399","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27458","type":"PanTool"},{"id":"27459","type":"WheelZoomTool"},{"id":"27460","type":"BoxZoomTool"},{"id":"27461","type":"SaveTool"},{"id":"27462","type":"ResetTool"},{"id":"27463","type":"HelpTool"}]},"id":"27464","type":"Toolbar"},{"attributes":{},"id":"27387","type":"SaveTool"},{"attributes":{},"id":"27417","type":"BasicTicker"},{"attributes":{},"id":"27409","type":"LinearScale"},{"attributes":{"source":{"id":"27471","type":"ColumnDataSource"}},"id":"27475","type":"CDSView"},{"attributes":{"children":[[{"id":"27365","subtype":"Figure","type":"Plot"},0,0],[{"id":"27402","subtype":"Figure","type":"Plot"},0,1],[{"id":"27439","subtype":"Figure","type":"Plot"},1,0]]},"id":"27506","type":"GridBox"},{"attributes":{"dimension":1,"ticker":{"id":"27417","type":"BasicTicker"}},"id":"27420","type":"Grid"},{"attributes":{},"id":"27422","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"27477","type":"Title"},{"attributes":{},"id":"27421","type":"PanTool"},{"attributes":{"data_source":{"id":"27397","type":"ColumnDataSource"},"glyph":{"id":"27398","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27399","type":"Circle"},"selection_glyph":null,"view":{"id":"27401","type":"CDSView"}},"id":"27400","type":"GlyphRenderer"},{"attributes":{},"id":"27479","type":"BasicTickFormatter"},{"attributes":{},"id":"27481","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27435","type":"Triangle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27482","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"27494","type":"Selection"},"selection_policy":{"id":"27493","type":"UnionRenderers"}},"id":"27434","type":"ColumnDataSource"}],"root_ids":["27509"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"d7105212-28d4-4e6e-90cf-b1d6dfc54bf1","roots":{"27509":"ea79b298-88b3-4d45-b8d5-b0a79a429b75"}}];
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