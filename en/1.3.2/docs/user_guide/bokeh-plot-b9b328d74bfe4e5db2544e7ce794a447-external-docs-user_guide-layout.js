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
      };var element = document.getElementById("72dc97ba-600c-435b-9d75-5c49941d894b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '72dc97ba-600c-435b-9d75-5c49941d894b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"45bef3f9-86a4-4ffa-a8d8-fd2fe9e9ec2f":{"roots":{"references":[{"attributes":{},"id":"27427","type":"HelpTool"},{"attributes":{},"id":"27371","type":"LinearScale"},{"attributes":{},"id":"27376","type":"BasicTicker"},{"attributes":{"text":""},"id":"27477","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27422","type":"PanTool"},{"id":"27423","type":"WheelZoomTool"},{"id":"27424","type":"BoxZoomTool"},{"id":"27425","type":"SaveTool"},{"id":"27426","type":"ResetTool"},{"id":"27427","type":"HelpTool"}]},"id":"27428","type":"Toolbar"},{"attributes":{"callback":null},"id":"27369","type":"DataRange1d"},{"attributes":{"ticker":{"id":"27376","type":"BasicTicker"}},"id":"27379","type":"Grid"},{"attributes":{"data_source":{"id":"27435","type":"ColumnDataSource"},"glyph":{"id":"27436","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27437","type":"Triangle"},"selection_glyph":null,"view":{"id":"27439","type":"CDSView"}},"id":"27438","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"27367","type":"DataRange1d"},{"attributes":{},"id":"27381","type":"BasicTicker"},{"attributes":{"source":{"id":"27435","type":"ColumnDataSource"}},"id":"27439","type":"CDSView"},{"attributes":{"formatter":{"id":"27481","type":"BasicTickFormatter"},"ticker":{"id":"27381","type":"BasicTicker"}},"id":"27380","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"27484","type":"Selection"},"selection_policy":{"id":"27483","type":"UnionRenderers"}},"id":"27398","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"27381","type":"BasicTicker"}},"id":"27384","type":"Grid"},{"attributes":{"below":[{"id":"27449","type":"LinearAxis"}],"center":[{"id":"27453","type":"Grid"},{"id":"27458","type":"Grid"}],"left":[{"id":"27454","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27475","type":"GlyphRenderer"}],"title":{"id":"27497","type":"Title"},"toolbar":{"id":"27465","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27441","type":"DataRange1d"},"x_scale":{"id":"27445","type":"LinearScale"},"y_range":{"id":"27443","type":"DataRange1d"},"y_scale":{"id":"27447","type":"LinearScale"}},"id":"27440","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27388","type":"SaveTool"},{"attributes":{"callback":null},"id":"27443","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"27508","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"27509","type":"ToolbarBox"},{"attributes":{},"id":"27386","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"27441","type":"DataRange1d"},{"attributes":{"overlay":{"id":"27485","type":"BoxAnnotation"}},"id":"27387","type":"BoxZoomTool"},{"attributes":{},"id":"27445","type":"LinearScale"},{"attributes":{"below":[{"id":"27375","type":"LinearAxis"}],"center":[{"id":"27379","type":"Grid"},{"id":"27384","type":"Grid"}],"left":[{"id":"27380","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27401","type":"GlyphRenderer"}],"title":{"id":"27477","type":"Title"},"toolbar":{"id":"27391","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27367","type":"DataRange1d"},"x_scale":{"id":"27371","type":"LinearScale"},"y_range":{"id":"27369","type":"DataRange1d"},"y_scale":{"id":"27373","type":"LinearScale"}},"id":"27366","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27400","type":"Circle"},{"attributes":{"ticker":{"id":"27450","type":"BasicTicker"}},"id":"27453","type":"Grid"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27399","type":"Circle"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27473","type":"Square"},{"attributes":{},"id":"27447","type":"LinearScale"},{"attributes":{"data_source":{"id":"27398","type":"ColumnDataSource"},"glyph":{"id":"27399","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27400","type":"Circle"},"selection_glyph":null,"view":{"id":"27402","type":"CDSView"}},"id":"27401","type":"GlyphRenderer"},{"attributes":{},"id":"27385","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"27504","type":"Selection"},"selection_policy":{"id":"27503","type":"UnionRenderers"}},"id":"27472","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"27499","type":"BasicTickFormatter"},"ticker":{"id":"27450","type":"BasicTicker"}},"id":"27449","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27474","type":"Square"},{"attributes":{},"id":"27389","type":"ResetTool"},{"attributes":{},"id":"27459","type":"PanTool"},{"attributes":{},"id":"27450","type":"BasicTicker"},{"attributes":{},"id":"27390","type":"HelpTool"},{"attributes":{},"id":"27460","type":"WheelZoomTool"},{"attributes":{"children":[[{"id":"27366","subtype":"Figure","type":"Plot"},0,0],[{"id":"27403","subtype":"Figure","type":"Plot"},0,1],[{"id":"27440","subtype":"Figure","type":"Plot"},1,0]]},"id":"27507","type":"GridBox"},{"attributes":{"overlay":{"id":"27505","type":"BoxAnnotation"}},"id":"27461","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27385","type":"PanTool"},{"id":"27386","type":"WheelZoomTool"},{"id":"27387","type":"BoxZoomTool"},{"id":"27388","type":"SaveTool"},{"id":"27389","type":"ResetTool"},{"id":"27390","type":"HelpTool"}]},"id":"27391","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"27455","type":"BasicTicker"}},"id":"27458","type":"Grid"},{"attributes":{"source":{"id":"27472","type":"ColumnDataSource"}},"id":"27476","type":"CDSView"},{"attributes":{"formatter":{"id":"27501","type":"BasicTickFormatter"},"ticker":{"id":"27455","type":"BasicTicker"}},"id":"27454","type":"LinearAxis"},{"attributes":{"data_source":{"id":"27472","type":"ColumnDataSource"},"glyph":{"id":"27473","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27474","type":"Square"},"selection_glyph":null,"view":{"id":"27476","type":"CDSView"}},"id":"27475","type":"GlyphRenderer"},{"attributes":{},"id":"27455","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27495","type":"BoxAnnotation"},{"attributes":{"source":{"id":"27398","type":"ColumnDataSource"}},"id":"27402","type":"CDSView"},{"attributes":{},"id":"27462","type":"SaveTool"},{"attributes":{},"id":"27463","type":"ResetTool"},{"attributes":{"below":[{"id":"27412","type":"LinearAxis"}],"center":[{"id":"27416","type":"Grid"},{"id":"27421","type":"Grid"}],"left":[{"id":"27417","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"27438","type":"GlyphRenderer"}],"title":{"id":"27487","type":"Title"},"toolbar":{"id":"27428","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27404","type":"DataRange1d"},"x_scale":{"id":"27408","type":"LinearScale"},"y_range":{"id":"27406","type":"DataRange1d"},"y_scale":{"id":"27410","type":"LinearScale"}},"id":"27403","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27459","type":"PanTool"},{"id":"27460","type":"WheelZoomTool"},{"id":"27461","type":"BoxZoomTool"},{"id":"27462","type":"SaveTool"},{"id":"27463","type":"ResetTool"},{"id":"27464","type":"HelpTool"}]},"id":"27465","type":"Toolbar"},{"attributes":{"children":[{"id":"27509","type":"ToolbarBox"},{"id":"27507","type":"GridBox"}]},"id":"27510","type":"Column"},{"attributes":{},"id":"27483","type":"UnionRenderers"},{"attributes":{},"id":"27464","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27437","type":"Triangle"},{"attributes":{"callback":null},"id":"27404","type":"DataRange1d"},{"attributes":{"callback":null},"id":"27406","type":"DataRange1d"},{"attributes":{"tools":[{"id":"27385","type":"PanTool"},{"id":"27386","type":"WheelZoomTool"},{"id":"27387","type":"BoxZoomTool"},{"id":"27388","type":"SaveTool"},{"id":"27389","type":"ResetTool"},{"id":"27390","type":"HelpTool"},{"id":"27422","type":"PanTool"},{"id":"27423","type":"WheelZoomTool"},{"id":"27424","type":"BoxZoomTool"},{"id":"27425","type":"SaveTool"},{"id":"27426","type":"ResetTool"},{"id":"27427","type":"HelpTool"},{"id":"27459","type":"PanTool"},{"id":"27460","type":"WheelZoomTool"},{"id":"27461","type":"BoxZoomTool"},{"id":"27462","type":"SaveTool"},{"id":"27463","type":"ResetTool"},{"id":"27464","type":"HelpTool"}]},"id":"27508","type":"ProxyToolbar"},{"attributes":{},"id":"27408","type":"LinearScale"},{"attributes":{"text":""},"id":"27497","type":"Title"},{"attributes":{},"id":"27410","type":"LinearScale"},{"attributes":{"formatter":{"id":"27489","type":"BasicTickFormatter"},"ticker":{"id":"27413","type":"BasicTicker"}},"id":"27412","type":"LinearAxis"},{"attributes":{},"id":"27413","type":"BasicTicker"},{"attributes":{"ticker":{"id":"27413","type":"BasicTicker"}},"id":"27416","type":"Grid"},{"attributes":{},"id":"27481","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"27491","type":"BasicTickFormatter"},"ticker":{"id":"27418","type":"BasicTicker"}},"id":"27417","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27505","type":"BoxAnnotation"},{"attributes":{},"id":"27418","type":"BasicTicker"},{"attributes":{},"id":"27499","type":"BasicTickFormatter"},{"attributes":{},"id":"27494","type":"Selection"},{"attributes":{},"id":"27503","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"27418","type":"BasicTicker"}},"id":"27421","type":"Grid"},{"attributes":{},"id":"27493","type":"UnionRenderers"},{"attributes":{},"id":"27491","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27436","type":"Triangle"},{"attributes":{},"id":"27489","type":"BasicTickFormatter"},{"attributes":{},"id":"27479","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"27494","type":"Selection"},"selection_policy":{"id":"27493","type":"UnionRenderers"}},"id":"27435","type":"ColumnDataSource"},{"attributes":{},"id":"27422","type":"PanTool"},{"attributes":{},"id":"27501","type":"BasicTickFormatter"},{"attributes":{},"id":"27423","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27485","type":"BoxAnnotation"},{"attributes":{"text":""},"id":"27487","type":"Title"},{"attributes":{},"id":"27504","type":"Selection"},{"attributes":{"overlay":{"id":"27495","type":"BoxAnnotation"}},"id":"27424","type":"BoxZoomTool"},{"attributes":{},"id":"27425","type":"SaveTool"},{"attributes":{},"id":"27373","type":"LinearScale"},{"attributes":{"formatter":{"id":"27479","type":"BasicTickFormatter"},"ticker":{"id":"27376","type":"BasicTicker"}},"id":"27375","type":"LinearAxis"},{"attributes":{},"id":"27484","type":"Selection"},{"attributes":{},"id":"27426","type":"ResetTool"}],"root_ids":["27510"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"45bef3f9-86a4-4ffa-a8d8-fd2fe9e9ec2f","roots":{"27510":"72dc97ba-600c-435b-9d75-5c49941d894b"}}];
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