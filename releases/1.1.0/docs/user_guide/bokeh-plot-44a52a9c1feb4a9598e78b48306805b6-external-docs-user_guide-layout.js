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
      };var element = document.getElementById("380d38ed-f8a4-49b5-a8d2-7f9b1738536b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '380d38ed-f8a4-49b5-a8d2-7f9b1738536b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"99ed11a9-b0f9-44dd-9bc4-c75767d3512c":{"roots":{"references":[{"attributes":{"ticker":{"id":"26657","type":"BasicTicker"}},"id":"26660","type":"Grid"},{"attributes":{"formatter":{"id":"26697","type":"BasicTickFormatter"},"ticker":{"id":"26625","type":"BasicTicker"}},"id":"26624","type":"LinearAxis"},{"attributes":{},"id":"26711","type":"Selection"},{"attributes":{},"id":"26620","type":"BasicTicker"},{"attributes":{},"id":"26654","type":"LinearScale"},{"attributes":{"below":[{"id":"26582","type":"LinearAxis"}],"center":[{"id":"26586","type":"Grid"},{"id":"26591","type":"Grid"}],"left":[{"id":"26587","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26608","type":"GlyphRenderer"}],"title":{"id":"26685","type":"Title"},"toolbar":{"id":"26598","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26574","type":"DataRange1d"},"x_scale":{"id":"26578","type":"LinearScale"},"y_range":{"id":"26576","type":"DataRange1d"},"y_scale":{"id":"26580","type":"LinearScale"}},"id":"26573","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26712","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"26709","type":"BasicTickFormatter"},"ticker":{"id":"26657","type":"BasicTicker"}},"id":"26656","type":"LinearAxis"},{"attributes":{"ticker":{"id":"26620","type":"BasicTicker"}},"id":"26623","type":"Grid"},{"attributes":{"tools":[{"id":"26592","type":"PanTool"},{"id":"26593","type":"WheelZoomTool"},{"id":"26594","type":"BoxZoomTool"},{"id":"26595","type":"SaveTool"},{"id":"26596","type":"ResetTool"},{"id":"26597","type":"HelpTool"},{"id":"26629","type":"PanTool"},{"id":"26630","type":"WheelZoomTool"},{"id":"26631","type":"BoxZoomTool"},{"id":"26632","type":"SaveTool"},{"id":"26633","type":"ResetTool"},{"id":"26634","type":"HelpTool"},{"id":"26666","type":"PanTool"},{"id":"26667","type":"WheelZoomTool"},{"id":"26668","type":"BoxZoomTool"},{"id":"26669","type":"SaveTool"},{"id":"26670","type":"ResetTool"},{"id":"26671","type":"HelpTool"}]},"id":"26715","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"26715","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"26716","type":"ToolbarBox"},{"attributes":{},"id":"26657","type":"BasicTicker"},{"attributes":{},"id":"26615","type":"LinearScale"},{"attributes":{},"id":"26592","type":"PanTool"},{"attributes":{"children":[{"id":"26716","type":"ToolbarBox"},{"id":"26714","type":"GridBox"}]},"id":"26717","type":"Column"},{"attributes":{},"id":"26630","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"26707","type":"BasicTickFormatter"},"ticker":{"id":"26662","type":"BasicTicker"}},"id":"26661","type":"LinearAxis"},{"attributes":{},"id":"26666","type":"PanTool"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26680","type":"Square"},{"attributes":{"callback":null},"id":"26611","type":"DataRange1d"},{"attributes":{"data_source":{"id":"26679","type":"ColumnDataSource"},"glyph":{"id":"26680","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26681","type":"Square"},"selection_glyph":null,"view":{"id":"26683","type":"CDSView"}},"id":"26682","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"26613","type":"DataRange1d"},{"attributes":{},"id":"26662","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"26701","type":"Selection"},"selection_policy":{"id":"26700","type":"UnionRenderers"}},"id":"26642","type":"ColumnDataSource"},{"attributes":{},"id":"26617","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"26662","type":"BasicTicker"}},"id":"26665","type":"Grid"},{"attributes":{"formatter":{"id":"26689","type":"BasicTickFormatter"},"ticker":{"id":"26583","type":"BasicTicker"}},"id":"26582","type":"LinearAxis"},{"attributes":{"below":[{"id":"26619","type":"LinearAxis"}],"center":[{"id":"26623","type":"Grid"},{"id":"26628","type":"Grid"}],"left":[{"id":"26624","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26645","type":"GlyphRenderer"}],"title":{"id":"26695","type":"Title"},"toolbar":{"id":"26635","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26611","type":"DataRange1d"},"x_scale":{"id":"26615","type":"LinearScale"},"y_range":{"id":"26613","type":"DataRange1d"},"y_scale":{"id":"26617","type":"LinearScale"}},"id":"26610","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26633","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26681","type":"Square"},{"attributes":{"source":{"id":"26605","type":"ColumnDataSource"}},"id":"26609","type":"CDSView"},{"attributes":{},"id":"26667","type":"WheelZoomTool"},{"attributes":{},"id":"26580","type":"LinearScale"},{"attributes":{},"id":"26588","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"26588","type":"BasicTicker"}},"id":"26591","type":"Grid"},{"attributes":{"formatter":{"id":"26699","type":"BasicTickFormatter"},"ticker":{"id":"26620","type":"BasicTicker"}},"id":"26619","type":"LinearAxis"},{"attributes":{"overlay":{"id":"26712","type":"BoxAnnotation"}},"id":"26668","type":"BoxZoomTool"},{"attributes":{},"id":"26583","type":"BasicTicker"},{"attributes":{"formatter":{"id":"26687","type":"BasicTickFormatter"},"ticker":{"id":"26588","type":"BasicTicker"}},"id":"26587","type":"LinearAxis"},{"attributes":{},"id":"26669","type":"SaveTool"},{"attributes":{},"id":"26670","type":"ResetTool"},{"attributes":{"ticker":{"id":"26583","type":"BasicTicker"}},"id":"26586","type":"Grid"},{"attributes":{},"id":"26595","type":"SaveTool"},{"attributes":{},"id":"26671","type":"HelpTool"},{"attributes":{"callback":null},"id":"26574","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26606","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26666","type":"PanTool"},{"id":"26667","type":"WheelZoomTool"},{"id":"26668","type":"BoxZoomTool"},{"id":"26669","type":"SaveTool"},{"id":"26670","type":"ResetTool"},{"id":"26671","type":"HelpTool"}]},"id":"26672","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"26691","type":"Selection"},"selection_policy":{"id":"26690","type":"UnionRenderers"}},"id":"26605","type":"ColumnDataSource"},{"attributes":{},"id":"26578","type":"LinearScale"},{"attributes":{"source":{"id":"26679","type":"ColumnDataSource"}},"id":"26683","type":"CDSView"},{"attributes":{},"id":"26629","type":"PanTool"},{"attributes":{"overlay":{"id":"26692","type":"BoxAnnotation"}},"id":"26594","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"26573","subtype":"Figure","type":"Plot"},0,0],[{"id":"26610","subtype":"Figure","type":"Plot"},0,1],[{"id":"26647","subtype":"Figure","type":"Plot"},1,0]]},"id":"26714","type":"GridBox"},{"attributes":{},"id":"26596","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26592","type":"PanTool"},{"id":"26593","type":"WheelZoomTool"},{"id":"26594","type":"BoxZoomTool"},{"id":"26595","type":"SaveTool"},{"id":"26596","type":"ResetTool"},{"id":"26597","type":"HelpTool"}]},"id":"26598","type":"Toolbar"},{"attributes":{"text":""},"id":"26685","type":"Title"},{"attributes":{},"id":"26687","type":"BasicTickFormatter"},{"attributes":{},"id":"26597","type":"HelpTool"},{"attributes":{"below":[{"id":"26656","type":"LinearAxis"}],"center":[{"id":"26660","type":"Grid"},{"id":"26665","type":"Grid"}],"left":[{"id":"26661","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26682","type":"GlyphRenderer"}],"title":{"id":"26705","type":"Title"},"toolbar":{"id":"26672","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26648","type":"DataRange1d"},"x_scale":{"id":"26652","type":"LinearScale"},"y_range":{"id":"26650","type":"DataRange1d"},"y_scale":{"id":"26654","type":"LinearScale"}},"id":"26647","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26689","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"26576","type":"DataRange1d"},{"attributes":{},"id":"26593","type":"WheelZoomTool"},{"attributes":{},"id":"26690","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26643","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26644","type":"Triangle"},{"attributes":{},"id":"26691","type":"Selection"},{"attributes":{"data_source":{"id":"26605","type":"ColumnDataSource"},"glyph":{"id":"26606","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26607","type":"Circle"},"selection_glyph":null,"view":{"id":"26609","type":"CDSView"}},"id":"26608","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"26642","type":"ColumnDataSource"},"glyph":{"id":"26643","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26644","type":"Triangle"},"selection_glyph":null,"view":{"id":"26646","type":"CDSView"}},"id":"26645","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26692","type":"BoxAnnotation"},{"attributes":{"source":{"id":"26642","type":"ColumnDataSource"}},"id":"26646","type":"CDSView"},{"attributes":{"text":""},"id":"26695","type":"Title"},{"attributes":{},"id":"26652","type":"LinearScale"},{"attributes":{"callback":null},"id":"26650","type":"DataRange1d"},{"attributes":{},"id":"26697","type":"BasicTickFormatter"},{"attributes":{},"id":"26632","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"26625","type":"BasicTicker"}},"id":"26628","type":"Grid"},{"attributes":{},"id":"26699","type":"BasicTickFormatter"},{"attributes":{},"id":"26700","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"26648","type":"DataRange1d"},{"attributes":{"overlay":{"id":"26702","type":"BoxAnnotation"}},"id":"26631","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26629","type":"PanTool"},{"id":"26630","type":"WheelZoomTool"},{"id":"26631","type":"BoxZoomTool"},{"id":"26632","type":"SaveTool"},{"id":"26633","type":"ResetTool"},{"id":"26634","type":"HelpTool"}]},"id":"26635","type":"Toolbar"},{"attributes":{},"id":"26701","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26702","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26607","type":"Circle"},{"attributes":{},"id":"26634","type":"HelpTool"},{"attributes":{"text":""},"id":"26705","type":"Title"},{"attributes":{},"id":"26625","type":"BasicTicker"},{"attributes":{},"id":"26707","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"26711","type":"Selection"},"selection_policy":{"id":"26710","type":"UnionRenderers"}},"id":"26679","type":"ColumnDataSource"},{"attributes":{},"id":"26709","type":"BasicTickFormatter"},{"attributes":{},"id":"26710","type":"UnionRenderers"}],"root_ids":["26717"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"99ed11a9-b0f9-44dd-9bc4-c75767d3512c","roots":{"26717":"380d38ed-f8a4-49b5-a8d2-7f9b1738536b"}}];
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