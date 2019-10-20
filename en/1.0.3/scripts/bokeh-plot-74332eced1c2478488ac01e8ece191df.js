(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("ab18868c-9427-48e3-bb0c-67faf7a9f6a8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ab18868c-9427-48e3-bb0c-67faf7a9f6a8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"ab27d428-5521-43d1-b9f3-580cc49fab75":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7952","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8030","type":"Square"},{"attributes":{"overlay":{"id":"7943","type":"BoxAnnotation"}},"id":"7937","type":"BoxZoomTool"},{"attributes":{},"id":"7965","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7990","type":"Triangle"},{"attributes":{"callback":null},"id":"7956","type":"DataRange1d"},{"attributes":{},"id":"7938","type":"SaveTool"},{"attributes":{},"id":"7960","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8029","type":"Square"},{"attributes":{"data_source":{"id":"8028","type":"ColumnDataSource"},"glyph":{"id":"8029","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8030","type":"Square"},"selection_glyph":null,"view":{"id":"8032","type":"CDSView"}},"id":"8031","type":"GlyphRenderer"},{"attributes":{},"id":"8013","type":"PanTool"},{"attributes":{},"id":"7978","type":"ResetTool"},{"attributes":{},"id":"8014","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"7964","type":"LinearAxis"}],"left":[{"id":"7969","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7964","type":"LinearAxis"},{"id":"7968","type":"Grid"},{"id":"7969","type":"LinearAxis"},{"id":"7973","type":"Grid"},{"id":"7982","type":"BoxAnnotation"},{"id":"7992","type":"GlyphRenderer"}],"title":{"id":"8043","type":"Title"},"toolbar":{"id":"7980","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7956","type":"DataRange1d"},"x_scale":{"id":"7960","type":"LinearScale"},"y_range":{"id":"7958","type":"DataRange1d"},"y_scale":{"id":"7962","type":"LinearScale"}},"id":"7955","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"7995","type":"DataRange1d"},{"attributes":{"overlay":{"id":"8021","type":"BoxAnnotation"}},"id":"8015","type":"BoxZoomTool"},{"attributes":{},"id":"7962","type":"LinearScale"},{"attributes":{"callback":null},"id":"7997","type":"DataRange1d"},{"attributes":{},"id":"8016","type":"SaveTool"},{"attributes":{},"id":"8017","type":"ResetTool"},{"attributes":{},"id":"7999","type":"LinearScale"},{"attributes":{},"id":"8018","type":"HelpTool"},{"attributes":{"plot":{"id":"7916","subtype":"Figure","type":"Plot"},"ticker":{"id":"7926","type":"BasicTicker"}},"id":"7929","type":"Grid"},{"attributes":{"data_source":{"id":"7950","type":"ColumnDataSource"},"glyph":{"id":"7951","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7952","type":"Circle"},"selection_glyph":null,"view":{"id":"7954","type":"CDSView"}},"id":"7953","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8013","type":"PanTool"},{"id":"8014","type":"WheelZoomTool"},{"id":"8015","type":"BoxZoomTool"},{"id":"8016","type":"SaveTool"},{"id":"8017","type":"ResetTool"},{"id":"8018","type":"HelpTool"}]},"id":"8019","type":"Toolbar"},{"attributes":{},"id":"8001","type":"LinearScale"},{"attributes":{"formatter":{"id":"8035","type":"BasicTickFormatter"},"plot":{"id":"7916","subtype":"Figure","type":"Plot"},"ticker":{"id":"7931","type":"BasicTicker"}},"id":"7930","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8058","type":"BasicTickFormatter"},"plot":{"id":"7994","subtype":"Figure","type":"Plot"},"ticker":{"id":"8004","type":"BasicTicker"}},"id":"8003","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8021","type":"BoxAnnotation"},{"attributes":{},"id":"8004","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8037","type":"BasicTickFormatter"},"plot":{"id":"7916","subtype":"Figure","type":"Plot"},"ticker":{"id":"7926","type":"BasicTicker"}},"id":"7925","type":"LinearAxis"},{"attributes":{"source":{"id":"8028","type":"ColumnDataSource"}},"id":"8032","type":"CDSView"},{"attributes":{"overlay":{"id":"7982","type":"BoxAnnotation"}},"id":"7976","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7994","subtype":"Figure","type":"Plot"},"ticker":{"id":"8004","type":"BasicTicker"}},"id":"8007","type":"Grid"},{"attributes":{"children":[{"id":"8053","type":"Row"},{"id":"8064","type":"Row"}]},"id":"8065","type":"Column"},{"attributes":{"children":[{"id":"7916","subtype":"Figure","type":"Plot"},{"id":"7955","subtype":"Figure","type":"Plot"}]},"id":"8053","type":"Row"},{"attributes":{"callback":null},"id":"7958","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"8033","type":"Title"},{"attributes":{"formatter":{"id":"8047","type":"BasicTickFormatter"},"plot":{"id":"7955","subtype":"Figure","type":"Plot"},"ticker":{"id":"7965","type":"BasicTicker"}},"id":"7964","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8056","type":"BasicTickFormatter"},"plot":{"id":"7994","subtype":"Figure","type":"Plot"},"ticker":{"id":"8009","type":"BasicTicker"}},"id":"8008","type":"LinearAxis"},{"attributes":{},"id":"7975","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"8050","type":"Selection"},"selection_policy":{"id":"8051","type":"UnionRenderers"}},"id":"7989","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7950","type":"ColumnDataSource"}},"id":"7954","type":"CDSView"},{"attributes":{},"id":"8035","type":"BasicTickFormatter"},{"attributes":{},"id":"8009","type":"BasicTicker"},{"attributes":{},"id":"8037","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7974","type":"PanTool"},{"id":"7975","type":"WheelZoomTool"},{"id":"7976","type":"BoxZoomTool"},{"id":"7977","type":"SaveTool"},{"id":"7978","type":"ResetTool"},{"id":"7979","type":"HelpTool"}]},"id":"7980","type":"Toolbar"},{"attributes":{},"id":"8040","type":"Selection"},{"attributes":{},"id":"7935","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"8061","type":"Selection"},"selection_policy":{"id":"8062","type":"UnionRenderers"}},"id":"8028","type":"ColumnDataSource"},{"attributes":{},"id":"8041","type":"UnionRenderers"},{"attributes":{},"id":"7970","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"8043","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"7994","subtype":"Figure","type":"Plot"},"ticker":{"id":"8009","type":"BasicTicker"}},"id":"8012","type":"Grid"},{"attributes":{},"id":"7979","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"8040","type":"Selection"},"selection_policy":{"id":"8041","type":"UnionRenderers"}},"id":"7950","type":"ColumnDataSource"},{"attributes":{},"id":"8045","type":"BasicTickFormatter"},{"attributes":{},"id":"7977","type":"SaveTool"},{"attributes":{},"id":"8047","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"8003","type":"LinearAxis"}],"left":[{"id":"8008","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8003","type":"LinearAxis"},{"id":"8007","type":"Grid"},{"id":"8008","type":"LinearAxis"},{"id":"8012","type":"Grid"},{"id":"8021","type":"BoxAnnotation"},{"id":"8031","type":"GlyphRenderer"}],"title":{"id":"8054","type":"Title"},"toolbar":{"id":"8019","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7995","type":"DataRange1d"},"x_scale":{"id":"7999","type":"LinearScale"},"y_range":{"id":"7997","type":"DataRange1d"},"y_scale":{"id":"8001","type":"LinearScale"}},"id":"7994","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8050","type":"Selection"},{"attributes":{"source":{"id":"7989","type":"ColumnDataSource"}},"id":"7993","type":"CDSView"},{"attributes":{},"id":"8051","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"7955","subtype":"Figure","type":"Plot"},"ticker":{"id":"7970","type":"BasicTicker"}},"id":"7973","type":"Grid"},{"attributes":{"children":[{"id":"7994","subtype":"Figure","type":"Plot"}]},"id":"8064","type":"Row"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7982","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"7919","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7991","type":"Triangle"},{"attributes":{"plot":null,"text":""},"id":"8054","type":"Title"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7951","type":"Circle"},{"attributes":{"callback":null},"id":"7917","type":"DataRange1d"},{"attributes":{},"id":"8056","type":"BasicTickFormatter"},{"attributes":{},"id":"7936","type":"WheelZoomTool"},{"attributes":{},"id":"8058","type":"BasicTickFormatter"},{"attributes":{},"id":"7939","type":"ResetTool"},{"attributes":{},"id":"8061","type":"Selection"},{"attributes":{},"id":"8062","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"7935","type":"PanTool"},{"id":"7936","type":"WheelZoomTool"},{"id":"7937","type":"BoxZoomTool"},{"id":"7938","type":"SaveTool"},{"id":"7939","type":"ResetTool"},{"id":"7940","type":"HelpTool"},{"id":"7974","type":"PanTool"},{"id":"7975","type":"WheelZoomTool"},{"id":"7976","type":"BoxZoomTool"},{"id":"7977","type":"SaveTool"},{"id":"7978","type":"ResetTool"},{"id":"7979","type":"HelpTool"},{"id":"8013","type":"PanTool"},{"id":"8014","type":"WheelZoomTool"},{"id":"8015","type":"BoxZoomTool"},{"id":"8016","type":"SaveTool"},{"id":"8017","type":"ResetTool"},{"id":"8018","type":"HelpTool"}]},"id":"8066","type":"ProxyToolbar"},{"attributes":{"formatter":{"id":"8045","type":"BasicTickFormatter"},"plot":{"id":"7955","subtype":"Figure","type":"Plot"},"ticker":{"id":"7970","type":"BasicTicker"}},"id":"7969","type":"LinearAxis"},{"attributes":{},"id":"7926","type":"BasicTicker"},{"attributes":{},"id":"7921","type":"LinearScale"},{"attributes":{},"id":"7940","type":"HelpTool"},{"attributes":{"toolbar":{"id":"8066","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"8067","type":"ToolbarBox"},{"attributes":{"plot":{"id":"7955","subtype":"Figure","type":"Plot"},"ticker":{"id":"7965","type":"BasicTicker"}},"id":"7968","type":"Grid"},{"attributes":{"children":[{"id":"8067","type":"ToolbarBox"},{"id":"8065","type":"Column"}]},"id":"8068","type":"Column"},{"attributes":{},"id":"7974","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7943","type":"BoxAnnotation"},{"attributes":{},"id":"7923","type":"LinearScale"},{"attributes":{"data_source":{"id":"7989","type":"ColumnDataSource"},"glyph":{"id":"7990","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7991","type":"Triangle"},"selection_glyph":null,"view":{"id":"7993","type":"CDSView"}},"id":"7992","type":"GlyphRenderer"},{"attributes":{},"id":"7931","type":"BasicTicker"},{"attributes":{"below":[{"id":"7925","type":"LinearAxis"}],"left":[{"id":"7930","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7925","type":"LinearAxis"},{"id":"7929","type":"Grid"},{"id":"7930","type":"LinearAxis"},{"id":"7934","type":"Grid"},{"id":"7943","type":"BoxAnnotation"},{"id":"7953","type":"GlyphRenderer"}],"title":{"id":"8033","type":"Title"},"toolbar":{"id":"7941","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7917","type":"DataRange1d"},"x_scale":{"id":"7921","type":"LinearScale"},"y_range":{"id":"7919","type":"DataRange1d"},"y_scale":{"id":"7923","type":"LinearScale"}},"id":"7916","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"7916","subtype":"Figure","type":"Plot"},"ticker":{"id":"7931","type":"BasicTicker"}},"id":"7934","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7935","type":"PanTool"},{"id":"7936","type":"WheelZoomTool"},{"id":"7937","type":"BoxZoomTool"},{"id":"7938","type":"SaveTool"},{"id":"7939","type":"ResetTool"},{"id":"7940","type":"HelpTool"}]},"id":"7941","type":"Toolbar"}],"root_ids":["8068"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"ab27d428-5521-43d1-b9f3-580cc49fab75","roots":{"8068":"ab18868c-9427-48e3-bb0c-67faf7a9f6a8"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();