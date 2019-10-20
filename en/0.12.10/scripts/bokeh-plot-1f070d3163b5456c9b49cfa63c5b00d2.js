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
      };var element = document.getElementById("904da191-db6d-4ef4-867e-98be35a410ef");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '904da191-db6d-4ef4-867e-98be35a410ef' but no matching script tag was found. ")
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
                    var docs_json = {"611c0d29-3372-4d53-925d-8fd7a1b8001c":{"roots":{"references":[{"attributes":{"below":[{"id":"9fb93984-1268-4d22-8fcc-a6c881c3225c","type":"LinearAxis"}],"left":[{"id":"814f09ea-ec68-4135-83d6-067052146091","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9fb93984-1268-4d22-8fcc-a6c881c3225c","type":"LinearAxis"},{"id":"300ec315-938c-4787-aaf8-f35e1eb24599","type":"Grid"},{"id":"814f09ea-ec68-4135-83d6-067052146091","type":"LinearAxis"},{"id":"a7de5aa4-b8d0-4b29-98c5-7ab0e285b332","type":"Grid"},{"id":"82db8bdc-696f-443b-ae04-b8301f0aae20","type":"BoxAnnotation"},{"id":"99048f49-f258-4e4f-8e8a-7cf1f6f39306","type":"GlyphRenderer"}],"title":{"id":"7c7ee0f9-4e93-498c-85de-f920a409f42e","type":"Title"},"toolbar":{"id":"c98df94d-163f-4e98-b18f-0a63706cb5ec","type":"Toolbar"},"x_range":{"id":"0e53bf4b-3295-4ed8-8d4a-16235e15fc51","type":"DataRange1d"},"x_scale":{"id":"a03fa7e9-f716-41fb-a52f-cc1e0f139c60","type":"LinearScale"},"y_range":{"id":"7bd82bc3-80c8-486a-9864-9b4826fb7e42","type":"DataRange1d"},"y_scale":{"id":"6266199d-a843-424d-9ad2-fcf585f2ff27","type":"LinearScale"}},"id":"663fcacc-9e38-418f-9b8e-65183d42c858","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"6a75c1ce-be4c-4d60-b633-ef31aab48aee","type":"ColumnDataSource"},"glyph":{"id":"12b08904-7870-43a7-a7ac-5572d66a847e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c559aeb4-f298-40fc-998a-b2f0ee9266ac","type":"Line"},"selection_glyph":null,"view":{"id":"50a052fe-d973-4bb7-bbac-727b9f45b95f","type":"CDSView"}},"id":"99048f49-f258-4e4f-8e8a-7cf1f6f39306","type":"GlyphRenderer"},{"attributes":{},"id":"f82ee3d4-b2a5-4a84-ad10-11cdd02cd511","type":"WheelZoomTool"},{"attributes":{},"id":"9d4003f3-c136-4adf-8ee2-3e8a12c46e86","type":"BasicTicker"},{"attributes":{"plot":{"id":"663fcacc-9e38-418f-9b8e-65183d42c858","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d4003f3-c136-4adf-8ee2-3e8a12c46e86","type":"BasicTicker"}},"id":"300ec315-938c-4787-aaf8-f35e1eb24599","type":"Grid"},{"attributes":{},"id":"41bfe656-f929-4a12-9e36-587872ca7768","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"82db8bdc-696f-443b-ae04-b8301f0aae20","type":"BoxAnnotation"}},"id":"0eeeb7d9-d81e-4169-a00e-672c3fadf3c0","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"82db8bdc-696f-443b-ae04-b8301f0aae20","type":"BoxAnnotation"},{"attributes":{},"id":"a03fa7e9-f716-41fb-a52f-cc1e0f139c60","type":"LinearScale"},{"attributes":{},"id":"3e41af6c-13fb-4de0-8e97-749baa0429a4","type":"ResetTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"12b08904-7870-43a7-a7ac-5572d66a847e","type":"Line"},{"attributes":{"source":{"id":"6a75c1ce-be4c-4d60-b633-ef31aab48aee","type":"ColumnDataSource"}},"id":"50a052fe-d973-4bb7-bbac-727b9f45b95f","type":"CDSView"},{"attributes":{},"id":"21438e3e-0513-4a33-bb5c-e5beca17d8b0","type":"HelpTool"},{"attributes":{"formatter":{"id":"e1f13f90-08e8-4629-a99e-cf3a8e1acc0b","type":"BasicTickFormatter"},"plot":{"id":"663fcacc-9e38-418f-9b8e-65183d42c858","subtype":"Figure","type":"Plot"},"ticker":{"id":"35075fee-6bb5-4ccc-9892-966ffcde975d","type":"BasicTicker"}},"id":"814f09ea-ec68-4135-83d6-067052146091","type":"LinearAxis"},{"attributes":{},"id":"35075fee-6bb5-4ccc-9892-966ffcde975d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"41bfe656-f929-4a12-9e36-587872ca7768","type":"BasicTickFormatter"},"plot":{"id":"663fcacc-9e38-418f-9b8e-65183d42c858","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d4003f3-c136-4adf-8ee2-3e8a12c46e86","type":"BasicTicker"}},"id":"9fb93984-1268-4d22-8fcc-a6c881c3225c","type":"LinearAxis"},{"attributes":{},"id":"94b1554c-9f47-475b-b9c0-3784b677e860","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"7c7ee0f9-4e93-498c-85de-f920a409f42e","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"663fcacc-9e38-418f-9b8e-65183d42c858","subtype":"Figure","type":"Plot"},"ticker":{"id":"35075fee-6bb5-4ccc-9892-966ffcde975d","type":"BasicTicker"}},"id":"a7de5aa4-b8d0-4b29-98c5-7ab0e285b332","type":"Grid"},{"attributes":{"callback":null},"id":"7bd82bc3-80c8-486a-9864-9b4826fb7e42","type":"DataRange1d"},{"attributes":{},"id":"6266199d-a843-424d-9ad2-fcf585f2ff27","type":"LinearScale"},{"attributes":{"callback":null},"id":"0e53bf4b-3295-4ed8-8d4a-16235e15fc51","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c559aeb4-f298-40fc-998a-b2f0ee9266ac","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"94b1554c-9f47-475b-b9c0-3784b677e860","type":"PanTool"},{"id":"f82ee3d4-b2a5-4a84-ad10-11cdd02cd511","type":"WheelZoomTool"},{"id":"0eeeb7d9-d81e-4169-a00e-672c3fadf3c0","type":"BoxZoomTool"},{"id":"b7ad54f3-68ad-45d8-ae0e-7fdbde512694","type":"SaveTool"},{"id":"3e41af6c-13fb-4de0-8e97-749baa0429a4","type":"ResetTool"},{"id":"21438e3e-0513-4a33-bb5c-e5beca17d8b0","type":"HelpTool"}]},"id":"c98df94d-163f-4e98-b18f-0a63706cb5ec","type":"Toolbar"},{"attributes":{},"id":"e1f13f90-08e8-4629-a99e-cf3a8e1acc0b","type":"BasicTickFormatter"},{"attributes":{},"id":"b7ad54f3-68ad-45d8-ae0e-7fdbde512694","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,"NaN",4,5],"y":[6,7,2,4,4,5]}},"id":"6a75c1ce-be4c-4d60-b633-ef31aab48aee","type":"ColumnDataSource"}],"root_ids":["663fcacc-9e38-418f-9b8e-65183d42c858"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"611c0d29-3372-4d53-925d-8fd7a1b8001c","elementid":"904da191-db6d-4ef4-867e-98be35a410ef","modelid":"663fcacc-9e38-418f-9b8e-65183d42c858"}];
                
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
