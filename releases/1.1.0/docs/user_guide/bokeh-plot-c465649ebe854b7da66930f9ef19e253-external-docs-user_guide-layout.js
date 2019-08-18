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
      };var element = document.getElementById("b4f76606-592c-4b5c-b131-87e74b405b50");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b4f76606-592c-4b5c-b131-87e74b405b50' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"734dc5bc-097d-4fa6-9f07-2214ebdcd158":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26175","type":"Square"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26099","type":"Circle"},{"attributes":{},"id":"26161","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"26075","type":"BasicTicker"}},"id":"26078","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26174","type":"Square"},{"attributes":{"formatter":{"id":"26183","type":"BasicTickFormatter"},"ticker":{"id":"26080","type":"BasicTicker"}},"id":"26079","type":"LinearAxis"},{"attributes":{"data_source":{"id":"26173","type":"ColumnDataSource"},"glyph":{"id":"26174","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26175","type":"Square"},"selection_glyph":null,"view":{"id":"26177","type":"CDSView"}},"id":"26176","type":"GlyphRenderer"},{"attributes":{},"id":"26080","type":"BasicTicker"},{"attributes":{},"id":"26160","type":"PanTool"},{"attributes":{},"id":"26148","type":"LinearScale"},{"attributes":{"callback":null},"id":"26144","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"26080","type":"BasicTicker"}},"id":"26083","type":"Grid"},{"attributes":{"overlay":{"id":"26202","type":"BoxAnnotation"}},"id":"26162","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"26185","type":"BasicTickFormatter"},"ticker":{"id":"26075","type":"BasicTicker"}},"id":"26074","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26098","type":"Circle"},{"attributes":{},"id":"26163","type":"SaveTool"},{"attributes":{},"id":"26087","type":"SaveTool"},{"attributes":{},"id":"26146","type":"LinearScale"},{"attributes":{"overlay":{"id":"26196","type":"BoxAnnotation"}},"id":"26086","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"26066","type":"DataRange1d"},{"attributes":{"source":{"id":"26173","type":"ColumnDataSource"}},"id":"26177","type":"CDSView"},{"attributes":{},"id":"26164","type":"ResetTool"},{"attributes":{"data_source":{"id":"26097","type":"ColumnDataSource"},"glyph":{"id":"26098","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26099","type":"Circle"},"selection_glyph":null,"view":{"id":"26101","type":"CDSView"}},"id":"26100","type":"GlyphRenderer"},{"attributes":{},"id":"26165","type":"HelpTool"},{"attributes":{},"id":"26084","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26160","type":"PanTool"},{"id":"26161","type":"WheelZoomTool"},{"id":"26162","type":"BoxZoomTool"},{"id":"26163","type":"SaveTool"},{"id":"26164","type":"ResetTool"},{"id":"26165","type":"HelpTool"}]},"id":"26166","type":"Toolbar"},{"attributes":{},"id":"26085","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"26135","type":"ColumnDataSource"},"glyph":{"id":"26136","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26137","type":"Triangle"},"selection_glyph":null,"view":{"id":"26139","type":"CDSView"}},"id":"26138","type":"GlyphRenderer"},{"attributes":{},"id":"26088","type":"ResetTool"},{"attributes":{"children":[{"id":"26064","subtype":"Figure","type":"Plot"},{"id":"26102","subtype":"Figure","type":"Plot"},{"id":"26140","subtype":"Figure","type":"Plot"}]},"id":"26178","type":"Row"},{"attributes":{"source":{"id":"26135","type":"ColumnDataSource"}},"id":"26139","type":"CDSView"},{"attributes":{"source":{"id":"26097","type":"ColumnDataSource"}},"id":"26101","type":"CDSView"},{"attributes":{},"id":"26089","type":"HelpTool"},{"attributes":{"below":[{"id":"26150","type":"LinearAxis"}],"center":[{"id":"26154","type":"Grid"},{"id":"26159","type":"Grid"}],"left":[{"id":"26155","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26176","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26166","type":"Toolbar"},"x_range":{"id":"26142","type":"DataRange1d"},"x_scale":{"id":"26146","type":"LinearScale"},"y_range":{"id":"26144","type":"DataRange1d"},"y_scale":{"id":"26148","type":"LinearScale"}},"id":"26140","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26183","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"26201","type":"Selection"},"selection_policy":{"id":"26200","type":"UnionRenderers"}},"id":"26173","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"26142","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26084","type":"PanTool"},{"id":"26085","type":"WheelZoomTool"},{"id":"26086","type":"BoxZoomTool"},{"id":"26087","type":"SaveTool"},{"id":"26088","type":"ResetTool"},{"id":"26089","type":"HelpTool"}]},"id":"26090","type":"Toolbar"},{"attributes":{},"id":"26185","type":"BasicTickFormatter"},{"attributes":{},"id":"26187","type":"BasicTickFormatter"},{"attributes":{},"id":"26191","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"26112","type":"LinearAxis"}],"center":[{"id":"26116","type":"Grid"},{"id":"26121","type":"Grid"}],"left":[{"id":"26117","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26138","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26128","type":"Toolbar"},"x_range":{"id":"26104","type":"DataRange1d"},"x_scale":{"id":"26108","type":"LinearScale"},"y_range":{"id":"26106","type":"DataRange1d"},"y_scale":{"id":"26110","type":"LinearScale"}},"id":"26102","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26189","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"26104","type":"DataRange1d"},{"attributes":{},"id":"26193","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"26106","type":"DataRange1d"},{"attributes":{},"id":"26127","type":"HelpTool"},{"attributes":{},"id":"26194","type":"UnionRenderers"},{"attributes":{},"id":"26108","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26137","type":"Triangle"},{"attributes":{},"id":"26195","type":"Selection"},{"attributes":{},"id":"26110","type":"LinearScale"},{"attributes":{},"id":"26075","type":"BasicTicker"},{"attributes":{"formatter":{"id":"26189","type":"BasicTickFormatter"},"ticker":{"id":"26113","type":"BasicTicker"}},"id":"26112","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26196","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26136","type":"Triangle"},{"attributes":{},"id":"26113","type":"BasicTicker"},{"attributes":{},"id":"26197","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"26113","type":"BasicTicker"}},"id":"26116","type":"Grid"},{"attributes":{},"id":"26198","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26122","type":"PanTool"},{"id":"26123","type":"WheelZoomTool"},{"id":"26124","type":"BoxZoomTool"},{"id":"26125","type":"SaveTool"},{"id":"26126","type":"ResetTool"},{"id":"26127","type":"HelpTool"}]},"id":"26128","type":"Toolbar"},{"attributes":{"formatter":{"id":"26187","type":"BasicTickFormatter"},"ticker":{"id":"26118","type":"BasicTicker"}},"id":"26117","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26199","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"26198","type":"Selection"},"selection_policy":{"id":"26197","type":"UnionRenderers"}},"id":"26135","type":"ColumnDataSource"},{"attributes":{},"id":"26118","type":"BasicTicker"},{"attributes":{},"id":"26126","type":"ResetTool"},{"attributes":{},"id":"26200","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"26118","type":"BasicTicker"}},"id":"26121","type":"Grid"},{"attributes":{},"id":"26201","type":"Selection"},{"attributes":{"overlay":{"id":"26199","type":"BoxAnnotation"}},"id":"26124","type":"BoxZoomTool"},{"attributes":{},"id":"26151","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26202","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"26193","type":"BasicTickFormatter"},"ticker":{"id":"26151","type":"BasicTicker"}},"id":"26150","type":"LinearAxis"},{"attributes":{"ticker":{"id":"26151","type":"BasicTicker"}},"id":"26154","type":"Grid"},{"attributes":{},"id":"26122","type":"PanTool"},{"attributes":{},"id":"26125","type":"SaveTool"},{"attributes":{},"id":"26123","type":"WheelZoomTool"},{"attributes":{},"id":"26072","type":"LinearScale"},{"attributes":{},"id":"26070","type":"LinearScale"},{"attributes":{"formatter":{"id":"26191","type":"BasicTickFormatter"},"ticker":{"id":"26156","type":"BasicTicker"}},"id":"26155","type":"LinearAxis"},{"attributes":{"callback":null},"id":"26068","type":"DataRange1d"},{"attributes":{},"id":"26156","type":"BasicTicker"},{"attributes":{"below":[{"id":"26074","type":"LinearAxis"}],"center":[{"id":"26078","type":"Grid"},{"id":"26083","type":"Grid"}],"left":[{"id":"26079","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26100","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26090","type":"Toolbar"},"x_range":{"id":"26066","type":"DataRange1d"},"x_scale":{"id":"26070","type":"LinearScale"},"y_range":{"id":"26068","type":"DataRange1d"},"y_scale":{"id":"26072","type":"LinearScale"}},"id":"26064","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"26156","type":"BasicTicker"}},"id":"26159","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"26195","type":"Selection"},"selection_policy":{"id":"26194","type":"UnionRenderers"}},"id":"26097","type":"ColumnDataSource"}],"root_ids":["26178"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"734dc5bc-097d-4fa6-9f07-2214ebdcd158","roots":{"26178":"b4f76606-592c-4b5c-b131-87e74b405b50"}}];
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