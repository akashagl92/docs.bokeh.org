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
      };var element = document.getElementById("77a81ca5-28eb-4402-9188-59e161df5e80");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '77a81ca5-28eb-4402-9188-59e161df5e80' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"056d2c7e-3912-44c1-a83e-33a13f1d2e37":{"roots":{"references":[{"attributes":{"plot":{"id":"e54d1301-5b28-4ce8-b1d9-210109d0c3e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"0749399c-5a30-4cab-a2cf-491a30b625cd","type":"BasicTicker"}},"id":"00e822b7-74cd-4257-9f50-e8367498de7f","type":"Grid"},{"attributes":{"code":"\n    return Math.floor(tick) + \" + \" + (tick % 1).toFixed(2)\n"},"id":"fc1ba261-a54d-4a2f-83f8-5b2d1936214b","type":"FuncTickFormatter"},{"attributes":{},"id":"8e55f668-ecc3-4883-86ae-e687c6290ebd","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7e23bf3d-6bc6-4894-9552-fd8cca82ba26","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"b30f4e39-a2e2-4dfd-880b-20662b628f82","type":"Circle"},{"attributes":{"overlay":{"id":"7e23bf3d-6bc6-4894-9552-fd8cca82ba26","type":"BoxAnnotation"}},"id":"e09aac43-338f-4876-b53b-bde609c42366","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]}},"id":"41f17590-cc2b-4f30-9a6c-608406f7807f","type":"ColumnDataSource"},{"attributes":{},"id":"20d04570-cbe8-41fc-a72e-785b5cb30bd2","type":"ResetTool"},{"attributes":{},"id":"aee663a6-284d-4352-b644-7f52a1f90124","type":"LinearScale"},{"attributes":{},"id":"3ca43bc7-f57d-454b-9f80-bdac5b36f47b","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"e3d88249-36a1-4c06-8966-f9d859965893","type":"Title"},{"attributes":{"callback":null},"id":"9c6d59af-b224-4cc6-b9fe-e64fc3239367","type":"DataRange1d"},{"attributes":{},"id":"8dc89ad7-2926-4ae3-b7fb-badd67aed327","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"6c0a372e-638f-4210-b4e1-e5d39fb5f94b","type":"LinearAxis"}],"left":[{"id":"e760649f-c85e-4a32-bbc3-8c8b10128a4c","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"6c0a372e-638f-4210-b4e1-e5d39fb5f94b","type":"LinearAxis"},{"id":"00e822b7-74cd-4257-9f50-e8367498de7f","type":"Grid"},{"id":"e760649f-c85e-4a32-bbc3-8c8b10128a4c","type":"LinearAxis"},{"id":"de208694-211c-4315-add5-b78f4a4e59aa","type":"Grid"},{"id":"7e23bf3d-6bc6-4894-9552-fd8cca82ba26","type":"BoxAnnotation"},{"id":"035d2c5d-5942-40d2-a7c1-2fd0e9ec7c22","type":"GlyphRenderer"}],"title":{"id":"e3d88249-36a1-4c06-8966-f9d859965893","type":"Title"},"toolbar":{"id":"e6e20405-4b39-4e88-becb-7f074d36c405","type":"Toolbar"},"x_range":{"id":"c5f7dbb8-c36d-4422-b953-8e3f92eaf5b0","type":"DataRange1d"},"x_scale":{"id":"92c64c73-88b7-4b7d-bb15-6371d1a51416","type":"LinearScale"},"y_range":{"id":"9c6d59af-b224-4cc6-b9fe-e64fc3239367","type":"DataRange1d"},"y_scale":{"id":"aee663a6-284d-4352-b644-7f52a1f90124","type":"LinearScale"}},"id":"e54d1301-5b28-4ce8-b1d9-210109d0c3e3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"903db2e4-af98-4db3-8bbf-42af077e06d8","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8dc89ad7-2926-4ae3-b7fb-badd67aed327","type":"BasicTickFormatter"},"plot":{"id":"e54d1301-5b28-4ce8-b1d9-210109d0c3e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"0749399c-5a30-4cab-a2cf-491a30b625cd","type":"BasicTicker"}},"id":"6c0a372e-638f-4210-b4e1-e5d39fb5f94b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c5f7dbb8-c36d-4422-b953-8e3f92eaf5b0","type":"DataRange1d"},{"attributes":{"data_source":{"id":"41f17590-cc2b-4f30-9a6c-608406f7807f","type":"ColumnDataSource"},"glyph":{"id":"b30f4e39-a2e2-4dfd-880b-20662b628f82","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"324cfb25-0eca-446e-93ec-2acdaba3030d","type":"Circle"},"selection_glyph":null,"view":{"id":"a048e3e7-8f0a-40ac-8ca7-e4893aef2f4f","type":"CDSView"}},"id":"035d2c5d-5942-40d2-a7c1-2fd0e9ec7c22","type":"GlyphRenderer"},{"attributes":{},"id":"0749399c-5a30-4cab-a2cf-491a30b625cd","type":"BasicTicker"},{"attributes":{},"id":"247a5459-4e0a-403d-bba2-cfe1b1589afe","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"324cfb25-0eca-446e-93ec-2acdaba3030d","type":"Circle"},{"attributes":{"formatter":{"id":"fc1ba261-a54d-4a2f-83f8-5b2d1936214b","type":"FuncTickFormatter"},"plot":{"id":"e54d1301-5b28-4ce8-b1d9-210109d0c3e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"903db2e4-af98-4db3-8bbf-42af077e06d8","type":"BasicTicker"}},"id":"e760649f-c85e-4a32-bbc3-8c8b10128a4c","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"e54d1301-5b28-4ce8-b1d9-210109d0c3e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"903db2e4-af98-4db3-8bbf-42af077e06d8","type":"BasicTicker"}},"id":"de208694-211c-4315-add5-b78f4a4e59aa","type":"Grid"},{"attributes":{},"id":"92c64c73-88b7-4b7d-bb15-6371d1a51416","type":"LinearScale"},{"attributes":{"source":{"id":"41f17590-cc2b-4f30-9a6c-608406f7807f","type":"ColumnDataSource"}},"id":"a048e3e7-8f0a-40ac-8ca7-e4893aef2f4f","type":"CDSView"},{"attributes":{},"id":"3732a471-d452-4d6f-a088-da1868d08377","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3732a471-d452-4d6f-a088-da1868d08377","type":"PanTool"},{"id":"247a5459-4e0a-403d-bba2-cfe1b1589afe","type":"WheelZoomTool"},{"id":"e09aac43-338f-4876-b53b-bde609c42366","type":"BoxZoomTool"},{"id":"8e55f668-ecc3-4883-86ae-e687c6290ebd","type":"SaveTool"},{"id":"20d04570-cbe8-41fc-a72e-785b5cb30bd2","type":"ResetTool"},{"id":"3ca43bc7-f57d-454b-9f80-bdac5b36f47b","type":"HelpTool"}]},"id":"e6e20405-4b39-4e88-becb-7f074d36c405","type":"Toolbar"}],"root_ids":["e54d1301-5b28-4ce8-b1d9-210109d0c3e3"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"056d2c7e-3912-44c1-a83e-33a13f1d2e37","elementid":"77a81ca5-28eb-4402-9188-59e161df5e80","modelid":"e54d1301-5b28-4ce8-b1d9-210109d0c3e3"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
