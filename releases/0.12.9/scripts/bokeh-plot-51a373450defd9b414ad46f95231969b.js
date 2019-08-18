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
      };var element = document.getElementById("59e71784-631e-4934-a6b5-0f5aeaec8b4c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '59e71784-631e-4934-a6b5-0f5aeaec8b4c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"e22d6990-2a18-458b-b9c5-276fc1e8e016":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"758f74af-2e94-417a-b93f-1666adeabce0","subtype":"Figure","type":"Plot"},"ticker":{"id":"34f96aa2-895c-4283-a237-82eb93181f39","type":"BasicTicker"}},"id":"49c0ba8d-9dab-4ba1-8058-ec898dc99a6f","type":"Grid"},{"attributes":{},"id":"4a736294-6a07-48d5-b868-a883979cce3c","type":"ResetTool"},{"attributes":{},"id":"1b3292e1-c66e-4873-aef1-553d698ed1cc","type":"SaveTool"},{"attributes":{"below":[{"id":"3692ecc0-11c0-42a5-b862-0ba08270efc8","type":"LinearAxis"}],"left":[{"id":"af451225-8881-4213-8b48-9a79c1ff17cf","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3692ecc0-11c0-42a5-b862-0ba08270efc8","type":"LinearAxis"},{"id":"50b6cc11-b128-44fe-9927-371590f71714","type":"Grid"},{"id":"af451225-8881-4213-8b48-9a79c1ff17cf","type":"LinearAxis"},{"id":"49c0ba8d-9dab-4ba1-8058-ec898dc99a6f","type":"Grid"},{"id":"cfbb4807-850b-4de0-ba19-d9525a72f5af","type":"BoxAnnotation"},{"id":"ace87f45-6e80-4b32-879e-49e85ed0c7b9","type":"GlyphRenderer"}],"title":{"id":"c496ed6f-1d25-4048-afad-817e42991b44","type":"Title"},"toolbar":{"id":"5d0c90f6-4004-4712-9fb3-d180c534932d","type":"Toolbar"},"x_range":{"id":"9e0bbe1c-abde-4a4f-a76e-11f24e6bc508","type":"DataRange1d"},"x_scale":{"id":"18295063-fb7b-4d55-b277-610d859f6d2b","type":"LinearScale"},"y_range":{"id":"f654dd7a-d992-4646-bb2a-77accc6afa97","type":"DataRange1d"},"y_scale":{"id":"15e176bc-d690-4d72-82c6-df005eee7baa","type":"LinearScale"}},"id":"758f74af-2e94-417a-b93f-1666adeabce0","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0dfdf50c-c262-4e52-9bc0-7c2983bdb373","type":"PanTool"},{"id":"516afa2e-2978-4319-acf1-40a8c2ad02c1","type":"WheelZoomTool"},{"id":"c1e83004-01e4-4998-93af-a3a12e8a6cc7","type":"BoxZoomTool"},{"id":"1b3292e1-c66e-4873-aef1-553d698ed1cc","type":"SaveTool"},{"id":"4a736294-6a07-48d5-b868-a883979cce3c","type":"ResetTool"},{"id":"ff5a168d-53b6-4b9e-a10f-d85ced545e40","type":"HelpTool"}]},"id":"5d0c90f6-4004-4712-9fb3-d180c534932d","type":"Toolbar"},{"attributes":{"callback":null},"id":"9e0bbe1c-abde-4a4f-a76e-11f24e6bc508","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"c496ed6f-1d25-4048-afad-817e42991b44","type":"Title"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b8fe52a9-2797-4b3f-a608-3da8efd8724a","type":"Ellipse"},{"attributes":{"callback":null},"id":"f654dd7a-d992-4646-bb2a-77accc6afa97","type":"DataRange1d"},{"attributes":{},"id":"955b729c-a935-4374-95af-fe190c97a203","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cfbb4807-850b-4de0-ba19-d9525a72f5af","type":"BoxAnnotation"},{"attributes":{},"id":"18295063-fb7b-4d55-b277-610d859f6d2b","type":"LinearScale"},{"attributes":{"plot":{"id":"758f74af-2e94-417a-b93f-1666adeabce0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f08e9a29-f707-4ae7-9119-1fc724a8bc25","type":"BasicTicker"}},"id":"50b6cc11-b128-44fe-9927-371590f71714","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c9c91682-cd23-44b9-bd2f-1fdff3b0dddb","type":"Ellipse"},{"attributes":{"overlay":{"id":"cfbb4807-850b-4de0-ba19-d9525a72f5af","type":"BoxAnnotation"}},"id":"c1e83004-01e4-4998-93af-a3a12e8a6cc7","type":"BoxZoomTool"},{"attributes":{},"id":"15e176bc-d690-4d72-82c6-df005eee7baa","type":"LinearScale"},{"attributes":{},"id":"516afa2e-2978-4319-acf1-40a8c2ad02c1","type":"WheelZoomTool"},{"attributes":{},"id":"7a8e7abc-9db3-4e4f-ab44-19959cad2af1","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"7a8e7abc-9db3-4e4f-ab44-19959cad2af1","type":"BasicTickFormatter"},"plot":{"id":"758f74af-2e94-417a-b93f-1666adeabce0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f08e9a29-f707-4ae7-9119-1fc724a8bc25","type":"BasicTicker"}},"id":"3692ecc0-11c0-42a5-b862-0ba08270efc8","type":"LinearAxis"},{"attributes":{"source":{"id":"fcbd9040-c218-40a1-a97b-fa3ec5a4b3d7","type":"ColumnDataSource"}},"id":"9d73d128-16ad-4180-8060-cea92212d11b","type":"CDSView"},{"attributes":{},"id":"ff5a168d-53b6-4b9e-a10f-d85ced545e40","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y","width"],"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]}},"id":"fcbd9040-c218-40a1-a97b-fa3ec5a4b3d7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fcbd9040-c218-40a1-a97b-fa3ec5a4b3d7","type":"ColumnDataSource"},"glyph":{"id":"c9c91682-cd23-44b9-bd2f-1fdff3b0dddb","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b8fe52a9-2797-4b3f-a608-3da8efd8724a","type":"Ellipse"},"selection_glyph":null,"view":{"id":"9d73d128-16ad-4180-8060-cea92212d11b","type":"CDSView"}},"id":"ace87f45-6e80-4b32-879e-49e85ed0c7b9","type":"GlyphRenderer"},{"attributes":{},"id":"f08e9a29-f707-4ae7-9119-1fc724a8bc25","type":"BasicTicker"},{"attributes":{},"id":"0dfdf50c-c262-4e52-9bc0-7c2983bdb373","type":"PanTool"},{"attributes":{"formatter":{"id":"955b729c-a935-4374-95af-fe190c97a203","type":"BasicTickFormatter"},"plot":{"id":"758f74af-2e94-417a-b93f-1666adeabce0","subtype":"Figure","type":"Plot"},"ticker":{"id":"34f96aa2-895c-4283-a237-82eb93181f39","type":"BasicTicker"}},"id":"af451225-8881-4213-8b48-9a79c1ff17cf","type":"LinearAxis"},{"attributes":{},"id":"34f96aa2-895c-4283-a237-82eb93181f39","type":"BasicTicker"}],"root_ids":["758f74af-2e94-417a-b93f-1666adeabce0"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"e22d6990-2a18-458b-b9c5-276fc1e8e016","elementid":"59e71784-631e-4934-a6b5-0f5aeaec8b4c","modelid":"758f74af-2e94-417a-b93f-1666adeabce0"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
