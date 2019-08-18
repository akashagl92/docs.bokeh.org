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
      };var element = document.getElementById("fd35363e-40d0-4956-a136-464abfbac0ca");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fd35363e-40d0-4956-a136-464abfbac0ca' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"4819a5a5-8d7e-48b4-9be7-636abe85b029":{"roots":{"references":[{"attributes":{"data_source":{"id":"7986","type":"ColumnDataSource"},"glyph":{"id":"7987","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7988","type":"Triangle"},"selection_glyph":null,"view":{"id":"7990","type":"CDSView"}},"id":"7989","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"8018","type":"BoxAnnotation"}},"id":"8012","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"8052","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7979","type":"BoxAnnotation"},{"attributes":{},"id":"8045","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"7913","subtype":"Figure","type":"Plot"},"ticker":{"id":"7928","type":"BasicTicker"}},"id":"7931","type":"Grid"},{"attributes":{},"id":"7972","type":"WheelZoomTool"},{"attributes":{},"id":"8011","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7948","type":"Circle"},{"attributes":{},"id":"8048","type":"Selection"},{"attributes":{"plot":{"id":"7913","subtype":"Figure","type":"Plot"},"ticker":{"id":"7923","type":"BasicTicker"}},"id":"7926","type":"Grid"},{"attributes":{"source":{"id":"7986","type":"ColumnDataSource"}},"id":"7990","type":"CDSView"},{"attributes":{"children":[{"id":"7991","subtype":"Figure","type":"Plot"}]},"id":"8061","type":"Row"},{"attributes":{},"id":"7998","type":"LinearScale"},{"attributes":{"overlay":{"id":"7979","type":"BoxAnnotation"}},"id":"7973","type":"BoxZoomTool"},{"attributes":{},"id":"7923","type":"BasicTicker"},{"attributes":{},"id":"7974","type":"SaveTool"},{"attributes":{},"id":"8047","type":"UnionRenderers"},{"attributes":{},"id":"7935","type":"SaveTool"},{"attributes":{},"id":"8054","type":"BasicTickFormatter"},{"attributes":{},"id":"7975","type":"ResetTool"},{"attributes":{},"id":"8043","type":"BasicTickFormatter"},{"attributes":{},"id":"7971","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"8059","type":"Selection"},"selection_policy":{"id":"8058","type":"UnionRenderers"}},"id":"8025","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7971","type":"PanTool"},{"id":"7972","type":"WheelZoomTool"},{"id":"7973","type":"BoxZoomTool"},{"id":"7974","type":"SaveTool"},{"id":"7975","type":"ResetTool"},{"id":"7976","type":"HelpTool"}]},"id":"7977","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"8041","type":"Title"},{"attributes":{"callback":null},"id":"7916","type":"DataRange1d"},{"attributes":{},"id":"7976","type":"HelpTool"},{"attributes":{"below":[{"id":"8000","type":"LinearAxis"}],"left":[{"id":"8005","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8000","type":"LinearAxis"},{"id":"8004","type":"Grid"},{"id":"8005","type":"LinearAxis"},{"id":"8009","type":"Grid"},{"id":"8018","type":"BoxAnnotation"},{"id":"8028","type":"GlyphRenderer"}],"title":{"id":"8052","type":"Title"},"toolbar":{"id":"8016","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7992","type":"DataRange1d"},"x_scale":{"id":"7996","type":"LinearScale"},"y_range":{"id":"7994","type":"DataRange1d"},"y_scale":{"id":"7998","type":"LinearScale"}},"id":"7991","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"7955","type":"DataRange1d"},{"attributes":{},"id":"7928","type":"BasicTicker"},{"attributes":{},"id":"8010","type":"PanTool"},{"attributes":{"formatter":{"id":"8035","type":"BasicTickFormatter"},"plot":{"id":"7913","subtype":"Figure","type":"Plot"},"ticker":{"id":"7928","type":"BasicTicker"}},"id":"7927","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8054","type":"BasicTickFormatter"},"plot":{"id":"7991","subtype":"Figure","type":"Plot"},"ticker":{"id":"8001","type":"BasicTicker"}},"id":"8000","type":"LinearAxis"},{"attributes":{},"id":"7932","type":"PanTool"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8026","type":"Square"},{"attributes":{"source":{"id":"7947","type":"ColumnDataSource"}},"id":"7951","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"7991","subtype":"Figure","type":"Plot"},"ticker":{"id":"8006","type":"BasicTicker"}},"id":"8009","type":"Grid"},{"attributes":{},"id":"8013","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7949","type":"Circle"},{"attributes":{"children":[{"id":"8050","type":"Row"},{"id":"8061","type":"Row"}]},"id":"8062","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8018","type":"BoxAnnotation"},{"attributes":{},"id":"7957","type":"LinearScale"},{"attributes":{},"id":"7933","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"7940","type":"BoxAnnotation"}},"id":"7934","type":"BoxZoomTool"},{"attributes":{},"id":"7920","type":"LinearScale"},{"attributes":{"callback":null},"id":"7953","type":"DataRange1d"},{"attributes":{"plot":{"id":"7991","subtype":"Figure","type":"Plot"},"ticker":{"id":"8001","type":"BasicTicker"}},"id":"8004","type":"Grid"},{"attributes":{},"id":"8038","type":"Selection"},{"attributes":{"children":[{"id":"8064","type":"ToolbarBox"},{"id":"8062","type":"Column"}]},"id":"8065","type":"Column"},{"attributes":{},"id":"8001","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7940","type":"BoxAnnotation"},{"attributes":{},"id":"7918","type":"LinearScale"},{"attributes":{"toolbar":{"id":"8063","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"8064","type":"ToolbarBox"},{"attributes":{"dimension":1,"plot":{"id":"7952","subtype":"Figure","type":"Plot"},"ticker":{"id":"7967","type":"BasicTicker"}},"id":"7970","type":"Grid"},{"attributes":{"tools":[{"id":"7932","type":"PanTool"},{"id":"7933","type":"WheelZoomTool"},{"id":"7934","type":"BoxZoomTool"},{"id":"7935","type":"SaveTool"},{"id":"7936","type":"ResetTool"},{"id":"7937","type":"HelpTool"},{"id":"7971","type":"PanTool"},{"id":"7972","type":"WheelZoomTool"},{"id":"7973","type":"BoxZoomTool"},{"id":"7974","type":"SaveTool"},{"id":"7975","type":"ResetTool"},{"id":"7976","type":"HelpTool"},{"id":"8010","type":"PanTool"},{"id":"8011","type":"WheelZoomTool"},{"id":"8012","type":"BoxZoomTool"},{"id":"8013","type":"SaveTool"},{"id":"8014","type":"ResetTool"},{"id":"8015","type":"HelpTool"}]},"id":"8063","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8027","type":"Square"},{"attributes":{},"id":"7936","type":"ResetTool"},{"attributes":{"below":[{"id":"7922","type":"LinearAxis"}],"left":[{"id":"7927","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7922","type":"LinearAxis"},{"id":"7926","type":"Grid"},{"id":"7927","type":"LinearAxis"},{"id":"7931","type":"Grid"},{"id":"7940","type":"BoxAnnotation"},{"id":"7950","type":"GlyphRenderer"}],"title":{"id":"8031","type":"Title"},"toolbar":{"id":"7938","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7914","type":"DataRange1d"},"x_scale":{"id":"7918","type":"LinearScale"},"y_range":{"id":"7916","type":"DataRange1d"},"y_scale":{"id":"7920","type":"LinearScale"}},"id":"7913","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8059","type":"Selection"},{"attributes":{"callback":null},"id":"7994","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7947","type":"ColumnDataSource"},"glyph":{"id":"7948","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7949","type":"Circle"},"selection_glyph":null,"view":{"id":"7951","type":"CDSView"}},"id":"7950","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7932","type":"PanTool"},{"id":"7933","type":"WheelZoomTool"},{"id":"7934","type":"BoxZoomTool"},{"id":"7935","type":"SaveTool"},{"id":"7936","type":"ResetTool"},{"id":"7937","type":"HelpTool"}]},"id":"7938","type":"Toolbar"},{"attributes":{},"id":"8058","type":"UnionRenderers"},{"attributes":{"below":[{"id":"7961","type":"LinearAxis"}],"left":[{"id":"7966","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7961","type":"LinearAxis"},{"id":"7965","type":"Grid"},{"id":"7966","type":"LinearAxis"},{"id":"7970","type":"Grid"},{"id":"7979","type":"BoxAnnotation"},{"id":"7989","type":"GlyphRenderer"}],"title":{"id":"8041","type":"Title"},"toolbar":{"id":"7977","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7953","type":"DataRange1d"},"x_scale":{"id":"7957","type":"LinearScale"},"y_range":{"id":"7955","type":"DataRange1d"},"y_scale":{"id":"7959","type":"LinearScale"}},"id":"7952","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8056","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8056","type":"BasicTickFormatter"},"plot":{"id":"7991","subtype":"Figure","type":"Plot"},"ticker":{"id":"8006","type":"BasicTicker"}},"id":"8005","type":"LinearAxis"},{"attributes":{},"id":"8037","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"8045","type":"BasicTickFormatter"},"plot":{"id":"7952","subtype":"Figure","type":"Plot"},"ticker":{"id":"7967","type":"BasicTicker"}},"id":"7966","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8025","type":"ColumnDataSource"},"glyph":{"id":"8026","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8027","type":"Square"},"selection_glyph":null,"view":{"id":"8029","type":"CDSView"}},"id":"8028","type":"GlyphRenderer"},{"attributes":{},"id":"7967","type":"BasicTicker"},{"attributes":{},"id":"8015","type":"HelpTool"},{"attributes":{"plot":{"id":"7952","subtype":"Figure","type":"Plot"},"ticker":{"id":"7962","type":"BasicTicker"}},"id":"7965","type":"Grid"},{"attributes":{"callback":null},"id":"7914","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8010","type":"PanTool"},{"id":"8011","type":"WheelZoomTool"},{"id":"8012","type":"BoxZoomTool"},{"id":"8013","type":"SaveTool"},{"id":"8014","type":"ResetTool"},{"id":"8015","type":"HelpTool"}]},"id":"8016","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7988","type":"Triangle"},{"attributes":{},"id":"7959","type":"LinearScale"},{"attributes":{},"id":"8033","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8033","type":"BasicTickFormatter"},"plot":{"id":"7913","subtype":"Figure","type":"Plot"},"ticker":{"id":"7923","type":"BasicTicker"}},"id":"7922","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"8038","type":"Selection"},"selection_policy":{"id":"8037","type":"UnionRenderers"}},"id":"7947","type":"ColumnDataSource"},{"attributes":{},"id":"7996","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"8031","type":"Title"},{"attributes":{},"id":"8006","type":"BasicTicker"},{"attributes":{"children":[{"id":"7913","subtype":"Figure","type":"Plot"},{"id":"7952","subtype":"Figure","type":"Plot"}]},"id":"8050","type":"Row"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7987","type":"Triangle"},{"attributes":{},"id":"7937","type":"HelpTool"},{"attributes":{},"id":"8035","type":"BasicTickFormatter"},{"attributes":{},"id":"8014","type":"ResetTool"},{"attributes":{"formatter":{"id":"8043","type":"BasicTickFormatter"},"plot":{"id":"7952","subtype":"Figure","type":"Plot"},"ticker":{"id":"7962","type":"BasicTicker"}},"id":"7961","type":"LinearAxis"},{"attributes":{},"id":"7962","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"8048","type":"Selection"},"selection_policy":{"id":"8047","type":"UnionRenderers"}},"id":"7986","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8025","type":"ColumnDataSource"}},"id":"8029","type":"CDSView"},{"attributes":{"callback":null},"id":"7992","type":"DataRange1d"}],"root_ids":["8065"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"4819a5a5-8d7e-48b4-9be7-636abe85b029","roots":{"8065":"fd35363e-40d0-4956-a136-464abfbac0ca"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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