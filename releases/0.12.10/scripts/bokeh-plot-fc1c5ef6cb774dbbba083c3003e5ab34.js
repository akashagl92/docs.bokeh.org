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
      };var element = document.getElementById("bbab41b3-59f6-4408-89a6-6fadd91dcfc5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bbab41b3-59f6-4408-89a6-6fadd91dcfc5' but no matching script tag was found. ")
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
                    var docs_json = {"1b71ce17-ca39-46d2-92e9-ff0d832a38ad":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"20b57fac-a296-4576-903c-95220c1369d8","type":"Circle"},{"attributes":{},"id":"55a53353-9ee0-4c39-93d5-911f6ce281e2","type":"WheelZoomTool"},{"attributes":{"source":{"id":"acde59c3-55af-4d23-a686-1938c6dd4d24","type":"ColumnDataSource"}},"id":"ff15e978-9ae8-4d2a-bd19-388b4cda6755","type":"CDSView"},{"attributes":{"data_source":{"id":"ab6ffc3a-61ad-4fbd-b40d-f87b10032208","type":"ColumnDataSource"},"glyph":{"id":"a8a60a1b-c6af-4129-80aa-a333c9f5f075","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c55b12d9-cb7b-4619-b3f8-11198a247c80","type":"Line"},"selection_glyph":null,"view":{"id":"64c5af6e-e4ad-4add-b1ff-514400a9a964","type":"CDSView"}},"id":"0ab3a3fb-b925-44ab-b883-6628a9c5ca55","type":"GlyphRenderer"},{"attributes":{"source":{"id":"ab6ffc3a-61ad-4fbd-b40d-f87b10032208","type":"ColumnDataSource"}},"id":"64c5af6e-e4ad-4add-b1ff-514400a9a964","type":"CDSView"},{"attributes":{"overlay":{"id":"4991cc64-e510-486a-83ad-20dd18fb26f9","type":"BoxAnnotation"}},"id":"5afc3a34-bfad-41a3-b770-9dc97edf7e18","type":"BoxZoomTool"},{"attributes":{},"id":"60f87e71-78ef-43e7-b660-497063a752ab","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c55b12d9-cb7b-4619-b3f8-11198a247c80","type":"Line"},{"attributes":{},"id":"322901a7-ff5b-4c7e-8d24-d50aa81dd49e","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"af9a22bb-3fb2-4f4e-ac4c-590ec4c2b87a","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ce33ed9-efb3-4c6b-b57d-c4cd30a515c9","type":"LogTicker"}},"id":"9876657e-0461-492b-a6ed-2aa8536a7bb7","type":"Grid"},{"attributes":{},"id":"d79c1818-e5df-426c-806c-62e7a71c9128","type":"PanTool"},{"attributes":{"formatter":{"id":"64ad524d-76d3-46cc-b0a8-70f91818b9e1","type":"LogTickFormatter"},"plot":{"id":"af9a22bb-3fb2-4f4e-ac4c-590ec4c2b87a","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ce33ed9-efb3-4c6b-b57d-c4cd30a515c9","type":"LogTicker"}},"id":"72b38cc1-b31a-418e-a8bb-6d4eb2bf35a9","type":"LogAxis"},{"attributes":{},"id":"7edbda1a-e74d-4cdc-891b-a046c47c233e","type":"LogScale"},{"attributes":{"plot":{"id":"af9a22bb-3fb2-4f4e-ac4c-590ec4c2b87a","subtype":"Figure","type":"Plot"},"ticker":{"id":"322901a7-ff5b-4c7e-8d24-d50aa81dd49e","type":"BasicTicker"}},"id":"fd4b003f-c37b-4c2c-b322-b9e4ca68d5c7","type":"Grid"},{"attributes":{"formatter":{"id":"ee40476d-15f2-4bf4-9be2-582f3fc8ed60","type":"BasicTickFormatter"},"plot":{"id":"af9a22bb-3fb2-4f4e-ac4c-590ec4c2b87a","subtype":"Figure","type":"Plot"},"ticker":{"id":"322901a7-ff5b-4c7e-8d24-d50aa81dd49e","type":"BasicTicker"}},"id":"afd99645-36d1-42fc-afd5-e952178029df","type":"LinearAxis"},{"attributes":{"num_minor_ticks":10},"id":"5ce33ed9-efb3-4c6b-b57d-c4cd30a515c9","type":"LogTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8a60a1b-c6af-4129-80aa-a333c9f5f075","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"ab6ffc3a-61ad-4fbd-b40d-f87b10032208","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"acde59c3-55af-4d23-a686-1938c6dd4d24","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"b9d7159e-ea02-4970-80fe-b79943ff63c6","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4991cc64-e510-486a-83ad-20dd18fb26f9","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d79c1818-e5df-426c-806c-62e7a71c9128","type":"PanTool"},{"id":"55a53353-9ee0-4c39-93d5-911f6ce281e2","type":"WheelZoomTool"},{"id":"5afc3a34-bfad-41a3-b770-9dc97edf7e18","type":"BoxZoomTool"},{"id":"60f87e71-78ef-43e7-b660-497063a752ab","type":"SaveTool"},{"id":"d303ae03-b795-4c14-8242-e11d700fb8bd","type":"ResetTool"},{"id":"30f36cac-76c3-4836-888f-8a4af3637a7b","type":"HelpTool"}]},"id":"fa6953b0-e600-40e4-85bd-2ff3106ceb81","type":"Toolbar"},{"attributes":{},"id":"d303ae03-b795-4c14-8242-e11d700fb8bd","type":"ResetTool"},{"attributes":{},"id":"30f36cac-76c3-4836-888f-8a4af3637a7b","type":"HelpTool"},{"attributes":{},"id":"ee40476d-15f2-4bf4-9be2-582f3fc8ed60","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"30fb76b6-8aba-4755-941e-a7fb4257e908","type":"DataRange1d"},{"attributes":{"ticker":null},"id":"64ad524d-76d3-46cc-b0a8-70f91818b9e1","type":"LogTickFormatter"},{"attributes":{},"id":"dfc2b39a-19d3-4587-9c4d-017d12d1c882","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"45501f6b-7a33-45fd-b367-e6f0b69e8feb","type":"Title"},{"attributes":{"below":[{"id":"afd99645-36d1-42fc-afd5-e952178029df","type":"LinearAxis"}],"left":[{"id":"72b38cc1-b31a-418e-a8bb-6d4eb2bf35a9","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"afd99645-36d1-42fc-afd5-e952178029df","type":"LinearAxis"},{"id":"fd4b003f-c37b-4c2c-b322-b9e4ca68d5c7","type":"Grid"},{"id":"72b38cc1-b31a-418e-a8bb-6d4eb2bf35a9","type":"LogAxis"},{"id":"9876657e-0461-492b-a6ed-2aa8536a7bb7","type":"Grid"},{"id":"4991cc64-e510-486a-83ad-20dd18fb26f9","type":"BoxAnnotation"},{"id":"0ab3a3fb-b925-44ab-b883-6628a9c5ca55","type":"GlyphRenderer"},{"id":"186eff6a-ba23-4a2f-b8e4-567caa673a74","type":"GlyphRenderer"}],"title":{"id":"45501f6b-7a33-45fd-b367-e6f0b69e8feb","type":"Title"},"toolbar":{"id":"fa6953b0-e600-40e4-85bd-2ff3106ceb81","type":"Toolbar"},"x_range":{"id":"30fb76b6-8aba-4755-941e-a7fb4257e908","type":"DataRange1d"},"x_scale":{"id":"dfc2b39a-19d3-4587-9c4d-017d12d1c882","type":"LinearScale"},"y_range":{"id":"b9d7159e-ea02-4970-80fe-b79943ff63c6","type":"DataRange1d"},"y_scale":{"id":"7edbda1a-e74d-4cdc-891b-a046c47c233e","type":"LogScale"}},"id":"af9a22bb-3fb2-4f4e-ac4c-590ec4c2b87a","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"acde59c3-55af-4d23-a686-1938c6dd4d24","type":"ColumnDataSource"},"glyph":{"id":"f63a5d57-31f1-4373-9381-f704e41c9aa9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20b57fac-a296-4576-903c-95220c1369d8","type":"Circle"},"selection_glyph":null,"view":{"id":"ff15e978-9ae8-4d2a-bd19-388b4cda6755","type":"CDSView"}},"id":"186eff6a-ba23-4a2f-b8e4-567caa673a74","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"f63a5d57-31f1-4373-9381-f704e41c9aa9","type":"Circle"}],"root_ids":["af9a22bb-3fb2-4f4e-ac4c-590ec4c2b87a"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"1b71ce17-ca39-46d2-92e9-ff0d832a38ad","elementid":"bbab41b3-59f6-4408-89a6-6fadd91dcfc5","modelid":"af9a22bb-3fb2-4f4e-ac4c-590ec4c2b87a"}];
                
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
