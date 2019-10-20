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
      };var element = document.getElementById("a42a9745-6bec-41b0-8f1f-af6fa8214986");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a42a9745-6bec-41b0-8f1f-af6fa8214986' but no matching script tag was found. ")
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
                    var docs_json = {"fe085f9b-d43d-43d6-ba19-23c30c1cec48":{"roots":{"references":[{"attributes":{},"id":"d6eb2ef0-c74d-4fbd-b087-26540334c92b","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"8e9df39b-03ff-43ec-912f-34e16daca762","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c22ca00-9d20-4ab3-922e-3984885e42d3","type":"BasicTicker"}},"id":"8634be30-c2cd-4817-ba05-e58233c91d3c","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"e776a033-5dea-4d18-88c3-580f44c716d6","type":"MultiLine"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color"],"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]}},"id":"1878b17a-3f71-4a4d-a543-fac6ff8b7e48","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1878b17a-3f71-4a4d-a543-fac6ff8b7e48","type":"ColumnDataSource"},"glyph":{"id":"48fb6596-8571-4cf5-a457-1723b72394cd","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e776a033-5dea-4d18-88c3-580f44c716d6","type":"MultiLine"},"selection_glyph":null,"view":{"id":"bbdd155c-8510-4569-b5e2-d8d237b391ee","type":"CDSView"}},"id":"4693adbd-ee5f-4036-a993-dfc805ccb63b","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4ab4adb0-8c47-4d64-b02f-fe943bec21d2","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"79a8cc98-6959-40e6-ab30-a108b6cbf4b1","type":"LinearAxis"}],"left":[{"id":"33a56de9-ab80-4da6-84f3-6033e724a703","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"79a8cc98-6959-40e6-ab30-a108b6cbf4b1","type":"LinearAxis"},{"id":"9bddb7d5-a84c-4307-ac89-065f5a5ede4c","type":"Grid"},{"id":"33a56de9-ab80-4da6-84f3-6033e724a703","type":"LinearAxis"},{"id":"8634be30-c2cd-4817-ba05-e58233c91d3c","type":"Grid"},{"id":"4ab4adb0-8c47-4d64-b02f-fe943bec21d2","type":"BoxAnnotation"},{"id":"4693adbd-ee5f-4036-a993-dfc805ccb63b","type":"GlyphRenderer"}],"title":{"id":"150cfac8-70a4-4a82-9409-36e52d2ab561","type":"Title"},"toolbar":{"id":"44883164-755f-46bc-9c4b-f6906b291017","type":"Toolbar"},"x_range":{"id":"90291c6b-659b-413b-8cc2-f85ae71c5da1","type":"DataRange1d"},"x_scale":{"id":"7a0955eb-cd06-49f3-88a2-7fe9a44f306e","type":"LinearScale"},"y_range":{"id":"f6554b62-ab6e-4acb-9e4d-c4908aef67d4","type":"DataRange1d"},"y_scale":{"id":"8aae2d7f-7a27-4fc1-8c84-094a08c3d538","type":"LinearScale"}},"id":"8e9df39b-03ff-43ec-912f-34e16daca762","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f5d1327b-a1eb-494f-86de-cb61ff4bc635","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f5d1327b-a1eb-494f-86de-cb61ff4bc635","type":"PanTool"},{"id":"67860501-2660-46a4-876e-4bf4252aa72f","type":"WheelZoomTool"},{"id":"79ff0cec-8f8a-40f5-bb90-2c16f67afc2d","type":"BoxZoomTool"},{"id":"420ffc67-59d4-4782-a152-0cead6484c7c","type":"SaveTool"},{"id":"b04fbc14-7ec0-4ea5-87d2-9ac9d90a9931","type":"ResetTool"},{"id":"3426619a-e5bb-4591-beb1-c413abb05aae","type":"HelpTool"}]},"id":"44883164-755f-46bc-9c4b-f6906b291017","type":"Toolbar"},{"attributes":{"source":{"id":"1878b17a-3f71-4a4d-a543-fac6ff8b7e48","type":"ColumnDataSource"}},"id":"bbdd155c-8510-4569-b5e2-d8d237b391ee","type":"CDSView"},{"attributes":{"callback":null},"id":"90291c6b-659b-413b-8cc2-f85ae71c5da1","type":"DataRange1d"},{"attributes":{},"id":"67860501-2660-46a4-876e-4bf4252aa72f","type":"WheelZoomTool"},{"attributes":{},"id":"5927e7d6-ddfa-42db-a436-cacd10863e78","type":"BasicTicker"},{"attributes":{"overlay":{"id":"4ab4adb0-8c47-4d64-b02f-fe943bec21d2","type":"BoxAnnotation"}},"id":"79ff0cec-8f8a-40f5-bb90-2c16f67afc2d","type":"BoxZoomTool"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"48fb6596-8571-4cf5-a457-1723b72394cd","type":"MultiLine"},{"attributes":{},"id":"420ffc67-59d4-4782-a152-0cead6484c7c","type":"SaveTool"},{"attributes":{"formatter":{"id":"d6eb2ef0-c74d-4fbd-b087-26540334c92b","type":"BasicTickFormatter"},"plot":{"id":"8e9df39b-03ff-43ec-912f-34e16daca762","subtype":"Figure","type":"Plot"},"ticker":{"id":"5927e7d6-ddfa-42db-a436-cacd10863e78","type":"BasicTicker"}},"id":"79a8cc98-6959-40e6-ab30-a108b6cbf4b1","type":"LinearAxis"},{"attributes":{},"id":"b04fbc14-7ec0-4ea5-87d2-9ac9d90a9931","type":"ResetTool"},{"attributes":{"callback":null},"id":"f6554b62-ab6e-4acb-9e4d-c4908aef67d4","type":"DataRange1d"},{"attributes":{},"id":"3426619a-e5bb-4591-beb1-c413abb05aae","type":"HelpTool"},{"attributes":{},"id":"7a0955eb-cd06-49f3-88a2-7fe9a44f306e","type":"LinearScale"},{"attributes":{},"id":"7edf9b13-6155-421a-983c-8972fce62b3f","type":"BasicTickFormatter"},{"attributes":{},"id":"8aae2d7f-7a27-4fc1-8c84-094a08c3d538","type":"LinearScale"},{"attributes":{"plot":{"id":"8e9df39b-03ff-43ec-912f-34e16daca762","subtype":"Figure","type":"Plot"},"ticker":{"id":"5927e7d6-ddfa-42db-a436-cacd10863e78","type":"BasicTicker"}},"id":"9bddb7d5-a84c-4307-ac89-065f5a5ede4c","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"150cfac8-70a4-4a82-9409-36e52d2ab561","type":"Title"},{"attributes":{"formatter":{"id":"7edf9b13-6155-421a-983c-8972fce62b3f","type":"BasicTickFormatter"},"plot":{"id":"8e9df39b-03ff-43ec-912f-34e16daca762","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c22ca00-9d20-4ab3-922e-3984885e42d3","type":"BasicTicker"}},"id":"33a56de9-ab80-4da6-84f3-6033e724a703","type":"LinearAxis"},{"attributes":{},"id":"7c22ca00-9d20-4ab3-922e-3984885e42d3","type":"BasicTicker"}],"root_ids":["8e9df39b-03ff-43ec-912f-34e16daca762"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"fe085f9b-d43d-43d6-ba19-23c30c1cec48","elementid":"a42a9745-6bec-41b0-8f1f-af6fa8214986","modelid":"8e9df39b-03ff-43ec-912f-34e16daca762"}];
                
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
