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
      };var element = document.getElementById("cce5e88d-dbd7-483d-bff1-78a1d685ca4d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cce5e88d-dbd7-483d-bff1-78a1d685ca4d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"1be220c7-22d3-4602-bd39-190f3f640592":{"roots":{"references":[{"attributes":{"plot":{"id":"7951","subtype":"Figure","type":"Plot"},"ticker":{"id":"7961","type":"BasicTicker"}},"id":"7964","type":"Grid"},{"attributes":{},"id":"8047","type":"UnionRenderers"},{"attributes":{},"id":"7956","type":"LinearScale"},{"attributes":{},"id":"8034","type":"BasicTickFormatter"},{"attributes":{},"id":"7919","type":"LinearScale"},{"attributes":{},"id":"8042","type":"BasicTickFormatter"},{"attributes":{},"id":"7958","type":"LinearScale"},{"attributes":{"source":{"id":"7946","type":"ColumnDataSource"}},"id":"7950","type":"CDSView"},{"attributes":{"overlay":{"id":"8017","type":"BoxAnnotation"}},"id":"8011","type":"BoxZoomTool"},{"attributes":{},"id":"7961","type":"BasicTicker"},{"attributes":{},"id":"8044","type":"BasicTickFormatter"},{"attributes":{},"id":"8046","type":"Selection"},{"attributes":{"children":[{"id":"7990","subtype":"Figure","type":"Plot"}]},"id":"8060","type":"Row"},{"attributes":{},"id":"7966","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"8051","type":"Title"},{"attributes":{"callback":null},"id":"7993","type":"DataRange1d"},{"attributes":{"callback":null},"id":"7954","type":"DataRange1d"},{"attributes":{"formatter":{"id":"8053","type":"BasicTickFormatter"},"plot":{"id":"7990","subtype":"Figure","type":"Plot"},"ticker":{"id":"8000","type":"BasicTicker"}},"id":"7999","type":"LinearAxis"},{"attributes":{"source":{"id":"8024","type":"ColumnDataSource"}},"id":"8028","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8017","type":"BoxAnnotation"},{"attributes":{},"id":"8055","type":"BasicTickFormatter"},{"attributes":{},"id":"7932","type":"WheelZoomTool"},{"attributes":{},"id":"7917","type":"LinearScale"},{"attributes":{},"id":"7934","type":"SaveTool"},{"attributes":{"children":[{"id":"8049","type":"Row"},{"id":"8060","type":"Row"}]},"id":"8061","type":"Column"},{"attributes":{"formatter":{"id":"8044","type":"BasicTickFormatter"},"plot":{"id":"7951","subtype":"Figure","type":"Plot"},"ticker":{"id":"7966","type":"BasicTicker"}},"id":"7965","type":"LinearAxis"},{"attributes":{"callback":null},"id":"7913","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"8046","type":"Selection"},"selection_policy":{"id":"8047","type":"UnionRenderers"}},"id":"7985","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"7912","subtype":"Figure","type":"Plot"},{"id":"7951","subtype":"Figure","type":"Plot"}]},"id":"8049","type":"Row"},{"attributes":{},"id":"8005","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"8030","type":"Title"},{"attributes":{"overlay":{"id":"7939","type":"BoxAnnotation"}},"id":"7933","type":"BoxZoomTool"},{"attributes":{},"id":"8010","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"8042","type":"BasicTickFormatter"},"plot":{"id":"7951","subtype":"Figure","type":"Plot"},"ticker":{"id":"7961","type":"BasicTicker"}},"id":"7960","type":"LinearAxis"},{"attributes":{},"id":"8053","type":"BasicTickFormatter"},{"attributes":{},"id":"7931","type":"PanTool"},{"attributes":{},"id":"7995","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8026","type":"Square"},{"attributes":{},"id":"8057","type":"Selection"},{"attributes":{"callback":null},"id":"7915","type":"DataRange1d"},{"attributes":{},"id":"8013","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"8057","type":"Selection"},"selection_policy":{"id":"8058","type":"UnionRenderers"}},"id":"8024","type":"ColumnDataSource"},{"attributes":{},"id":"8058","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"8032","type":"BasicTickFormatter"},"plot":{"id":"7912","subtype":"Figure","type":"Plot"},"ticker":{"id":"7922","type":"BasicTicker"}},"id":"7921","type":"LinearAxis"},{"attributes":{"plot":{"id":"7912","subtype":"Figure","type":"Plot"},"ticker":{"id":"7922","type":"BasicTicker"}},"id":"7925","type":"Grid"},{"attributes":{"tools":[{"id":"7931","type":"PanTool"},{"id":"7932","type":"WheelZoomTool"},{"id":"7933","type":"BoxZoomTool"},{"id":"7934","type":"SaveTool"},{"id":"7935","type":"ResetTool"},{"id":"7936","type":"HelpTool"},{"id":"7970","type":"PanTool"},{"id":"7971","type":"WheelZoomTool"},{"id":"7972","type":"BoxZoomTool"},{"id":"7973","type":"SaveTool"},{"id":"7974","type":"ResetTool"},{"id":"7975","type":"HelpTool"},{"id":"8009","type":"PanTool"},{"id":"8010","type":"WheelZoomTool"},{"id":"8011","type":"BoxZoomTool"},{"id":"8012","type":"SaveTool"},{"id":"8013","type":"ResetTool"},{"id":"8014","type":"HelpTool"}]},"id":"8062","type":"ProxyToolbar"},{"attributes":{},"id":"7971","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"8062","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"8063","type":"ToolbarBox"},{"attributes":{},"id":"7974","type":"ResetTool"},{"attributes":{"formatter":{"id":"8034","type":"BasicTickFormatter"},"plot":{"id":"7912","subtype":"Figure","type":"Plot"},"ticker":{"id":"7927","type":"BasicTicker"}},"id":"7926","type":"LinearAxis"},{"attributes":{"children":[{"id":"8063","type":"ToolbarBox"},{"id":"8061","type":"Column"}]},"id":"8064","type":"Column"},{"attributes":{"overlay":{"id":"7978","type":"BoxAnnotation"}},"id":"7972","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7939","type":"BoxAnnotation"},{"attributes":{"source":{"id":"7985","type":"ColumnDataSource"}},"id":"7989","type":"CDSView"},{"attributes":{},"id":"8032","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"7960","type":"LinearAxis"}],"left":[{"id":"7965","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7960","type":"LinearAxis"},{"id":"7964","type":"Grid"},{"id":"7965","type":"LinearAxis"},{"id":"7969","type":"Grid"},{"id":"7978","type":"BoxAnnotation"},{"id":"7988","type":"GlyphRenderer"}],"title":{"id":"8040","type":"Title"},"toolbar":{"id":"7976","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7952","type":"DataRange1d"},"x_scale":{"id":"7956","type":"LinearScale"},"y_range":{"id":"7954","type":"DataRange1d"},"y_scale":{"id":"7958","type":"LinearScale"}},"id":"7951","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7978","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"7952","type":"DataRange1d"},{"attributes":{},"id":"7973","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7931","type":"PanTool"},{"id":"7932","type":"WheelZoomTool"},{"id":"7933","type":"BoxZoomTool"},{"id":"7934","type":"SaveTool"},{"id":"7935","type":"ResetTool"},{"id":"7936","type":"HelpTool"}]},"id":"7937","type":"Toolbar"},{"attributes":{"plot":{"id":"7990","subtype":"Figure","type":"Plot"},"ticker":{"id":"8000","type":"BasicTicker"}},"id":"8003","type":"Grid"},{"attributes":{},"id":"8000","type":"BasicTicker"},{"attributes":{},"id":"8037","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"8024","type":"ColumnDataSource"},"glyph":{"id":"8025","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8026","type":"Square"},"selection_glyph":null,"view":{"id":"8028","type":"CDSView"}},"id":"8027","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7970","type":"PanTool"},{"id":"7971","type":"WheelZoomTool"},{"id":"7972","type":"BoxZoomTool"},{"id":"7973","type":"SaveTool"},{"id":"7974","type":"ResetTool"},{"id":"7975","type":"HelpTool"}]},"id":"7976","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"8040","type":"Title"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7947","type":"Circle"},{"attributes":{},"id":"7935","type":"ResetTool"},{"attributes":{},"id":"7975","type":"HelpTool"},{"attributes":{},"id":"8036","type":"Selection"},{"attributes":{"data_source":{"id":"7946","type":"ColumnDataSource"},"glyph":{"id":"7947","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7948","type":"Circle"},"selection_glyph":null,"view":{"id":"7950","type":"CDSView"}},"id":"7949","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"8036","type":"Selection"},"selection_policy":{"id":"8037","type":"UnionRenderers"}},"id":"7946","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7986","type":"Triangle"},{"attributes":{"dimension":1,"plot":{"id":"7951","subtype":"Figure","type":"Plot"},"ticker":{"id":"7966","type":"BasicTicker"}},"id":"7969","type":"Grid"},{"attributes":{"below":[{"id":"7921","type":"LinearAxis"}],"left":[{"id":"7926","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7921","type":"LinearAxis"},{"id":"7925","type":"Grid"},{"id":"7926","type":"LinearAxis"},{"id":"7930","type":"Grid"},{"id":"7939","type":"BoxAnnotation"},{"id":"7949","type":"GlyphRenderer"}],"title":{"id":"8030","type":"Title"},"toolbar":{"id":"7937","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7913","type":"DataRange1d"},"x_scale":{"id":"7917","type":"LinearScale"},"y_range":{"id":"7915","type":"DataRange1d"},"y_scale":{"id":"7919","type":"LinearScale"}},"id":"7912","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7936","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"7990","subtype":"Figure","type":"Plot"},"ticker":{"id":"8005","type":"BasicTicker"}},"id":"8008","type":"Grid"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8025","type":"Square"},{"attributes":{},"id":"8012","type":"SaveTool"},{"attributes":{},"id":"8009","type":"PanTool"},{"attributes":{"formatter":{"id":"8055","type":"BasicTickFormatter"},"plot":{"id":"7990","subtype":"Figure","type":"Plot"},"ticker":{"id":"8005","type":"BasicTicker"}},"id":"8004","type":"LinearAxis"},{"attributes":{},"id":"7922","type":"BasicTicker"},{"attributes":{"below":[{"id":"7999","type":"LinearAxis"}],"left":[{"id":"8004","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7999","type":"LinearAxis"},{"id":"8003","type":"Grid"},{"id":"8004","type":"LinearAxis"},{"id":"8008","type":"Grid"},{"id":"8017","type":"BoxAnnotation"},{"id":"8027","type":"GlyphRenderer"}],"title":{"id":"8051","type":"Title"},"toolbar":{"id":"8015","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7991","type":"DataRange1d"},"x_scale":{"id":"7995","type":"LinearScale"},"y_range":{"id":"7993","type":"DataRange1d"},"y_scale":{"id":"7997","type":"LinearScale"}},"id":"7990","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8009","type":"PanTool"},{"id":"8010","type":"WheelZoomTool"},{"id":"8011","type":"BoxZoomTool"},{"id":"8012","type":"SaveTool"},{"id":"8013","type":"ResetTool"},{"id":"8014","type":"HelpTool"}]},"id":"8015","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7987","type":"Triangle"},{"attributes":{},"id":"7970","type":"PanTool"},{"attributes":{},"id":"8014","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"7912","subtype":"Figure","type":"Plot"},"ticker":{"id":"7927","type":"BasicTicker"}},"id":"7930","type":"Grid"},{"attributes":{"callback":null},"id":"7991","type":"DataRange1d"},{"attributes":{},"id":"7927","type":"BasicTicker"},{"attributes":{},"id":"7997","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7948","type":"Circle"},{"attributes":{"data_source":{"id":"7985","type":"ColumnDataSource"},"glyph":{"id":"7986","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7987","type":"Triangle"},"selection_glyph":null,"view":{"id":"7989","type":"CDSView"}},"id":"7988","type":"GlyphRenderer"}],"root_ids":["8064"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"1be220c7-22d3-4602-bd39-190f3f640592","roots":{"8064":"cce5e88d-dbd7-483d-bff1-78a1d685ca4d"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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