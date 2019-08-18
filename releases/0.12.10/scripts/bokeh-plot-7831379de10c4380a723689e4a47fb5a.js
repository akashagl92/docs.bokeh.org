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
      };var element = document.getElementById("d99ff5a6-5df8-4ec4-b82e-dae22211ce3f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd99ff5a6-5df8-4ec4-b82e-dae22211ce3f' but no matching script tag was found. ")
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
                    var docs_json = {"bb14c0b0-a8d7-44a5-b9e0-bbab01f9f181":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5dfe3285-faba-49f3-9b14-d7ba6ac9e94e","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"514bfa84-3938-4148-afb9-bf684610e0cd","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"707c20e2-db8a-43fb-83ad-80602245b982","type":"PanTool"},{"id":"9dea2732-7d48-4c81-a604-755be41b9df4","type":"WheelZoomTool"},{"id":"2f938c9b-9fa5-4a27-a5b1-2dc5c22d60aa","type":"BoxZoomTool"},{"id":"588a4f6b-ba58-4bee-9e05-5acc715526c2","type":"SaveTool"},{"id":"8da5135a-47c1-4883-a69a-be3cad8db9f4","type":"ResetTool"},{"id":"2bf3d0b6-b166-497d-88d2-3540a8d11919","type":"HelpTool"}]},"id":"3c80f96f-10c2-4d8d-99a4-271076342f3a","type":"Toolbar"},{"attributes":{"below":[{"id":"b1088661-d85c-426e-9e44-2c7c80947bb3","type":"LinearAxis"}],"left":[{"id":"6c3f778a-dfbb-4442-b1ab-fde96d94a96e","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"b1088661-d85c-426e-9e44-2c7c80947bb3","type":"LinearAxis"},{"id":"98317795-0694-4ef7-b5c5-8dd58aeff192","type":"Grid"},{"id":"6c3f778a-dfbb-4442-b1ab-fde96d94a96e","type":"LinearAxis"},{"id":"ba880ec1-390a-4bf2-8bd7-95f27f212365","type":"Grid"},{"id":"b8a3d055-f3f9-4f91-9869-940ed8147c22","type":"BoxAnnotation"},{"id":"9488db8f-0756-47e8-bbb4-086189465882","type":"GlyphRenderer"}],"title":{"id":"8205eee4-3e53-4828-b12d-c1111eb42dde","type":"Title"},"toolbar":{"id":"3c80f96f-10c2-4d8d-99a4-271076342f3a","type":"Toolbar"},"x_range":{"id":"dd3229c6-c0ce-45c0-97d8-2709ac8d751c","type":"DataRange1d"},"x_scale":{"id":"947f0766-82a8-48dd-8286-8bdeea273af6","type":"LinearScale"},"y_range":{"id":"6b07e848-1a3b-4489-ad86-872ebbf7fc44","type":"DataRange1d"},"y_scale":{"id":"f74761e0-381e-43a0-87bf-449f7a36ab9b","type":"LinearScale"}},"id":"c8fefa5c-3f05-40a1-835e-80e3ac495e9a","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"c8fefa5c-3f05-40a1-835e-80e3ac495e9a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f65bacb-e60c-40af-a319-6d3071503990","type":"BasicTicker"}},"id":"ba880ec1-390a-4bf2-8bd7-95f27f212365","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"8205eee4-3e53-4828-b12d-c1111eb42dde","type":"Title"},{"attributes":{},"id":"588a4f6b-ba58-4bee-9e05-5acc715526c2","type":"SaveTool"},{"attributes":{},"id":"4f65bacb-e60c-40af-a319-6d3071503990","type":"BasicTicker"},{"attributes":{},"id":"9dea2732-7d48-4c81-a604-755be41b9df4","type":"WheelZoomTool"},{"attributes":{},"id":"8da5135a-47c1-4883-a69a-be3cad8db9f4","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"a01034ae-de67-4c90-9d41-c356d6a46b6b","type":"ColumnDataSource"},{"attributes":{"source":{"id":"a01034ae-de67-4c90-9d41-c356d6a46b6b","type":"ColumnDataSource"}},"id":"ac583a4f-a70d-4ae0-9be5-85d53e5d6d17","type":"CDSView"},{"attributes":{"formatter":{"id":"1e803d6e-6282-46e8-a53a-9c85784b1ac7","type":"BasicTickFormatter"},"plot":{"id":"c8fefa5c-3f05-40a1-835e-80e3ac495e9a","subtype":"Figure","type":"Plot"},"ticker":{"id":"166e5e10-ec4b-4544-be25-7ce08fdbbaae","type":"BasicTicker"}},"id":"b1088661-d85c-426e-9e44-2c7c80947bb3","type":"LinearAxis"},{"attributes":{"overlay":{"id":"b8a3d055-f3f9-4f91-9869-940ed8147c22","type":"BoxAnnotation"}},"id":"2f938c9b-9fa5-4a27-a5b1-2dc5c22d60aa","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"579aaa8a-ce0e-49c6-aff0-2c7390265754","type":"BasicTickFormatter"},"plot":{"id":"c8fefa5c-3f05-40a1-835e-80e3ac495e9a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f65bacb-e60c-40af-a319-6d3071503990","type":"BasicTicker"}},"id":"6c3f778a-dfbb-4442-b1ab-fde96d94a96e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"dd3229c6-c0ce-45c0-97d8-2709ac8d751c","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b8a3d055-f3f9-4f91-9869-940ed8147c22","type":"BoxAnnotation"},{"attributes":{},"id":"579aaa8a-ce0e-49c6-aff0-2c7390265754","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c8fefa5c-3f05-40a1-835e-80e3ac495e9a","subtype":"Figure","type":"Plot"},"ticker":{"id":"166e5e10-ec4b-4544-be25-7ce08fdbbaae","type":"BasicTicker"}},"id":"98317795-0694-4ef7-b5c5-8dd58aeff192","type":"Grid"},{"attributes":{},"id":"707c20e2-db8a-43fb-83ad-80602245b982","type":"PanTool"},{"attributes":{},"id":"2bf3d0b6-b166-497d-88d2-3540a8d11919","type":"HelpTool"},{"attributes":{"callback":null},"id":"6b07e848-1a3b-4489-ad86-872ebbf7fc44","type":"DataRange1d"},{"attributes":{},"id":"166e5e10-ec4b-4544-be25-7ce08fdbbaae","type":"BasicTicker"},{"attributes":{},"id":"1e803d6e-6282-46e8-a53a-9c85784b1ac7","type":"BasicTickFormatter"},{"attributes":{},"id":"f74761e0-381e-43a0-87bf-449f7a36ab9b","type":"LinearScale"},{"attributes":{"data_source":{"id":"a01034ae-de67-4c90-9d41-c356d6a46b6b","type":"ColumnDataSource"},"glyph":{"id":"5dfe3285-faba-49f3-9b14-d7ba6ac9e94e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"514bfa84-3938-4148-afb9-bf684610e0cd","type":"Circle"},"selection_glyph":null,"view":{"id":"ac583a4f-a70d-4ae0-9be5-85d53e5d6d17","type":"CDSView"}},"id":"9488db8f-0756-47e8-bbb4-086189465882","type":"GlyphRenderer"},{"attributes":{},"id":"947f0766-82a8-48dd-8286-8bdeea273af6","type":"LinearScale"}],"root_ids":["c8fefa5c-3f05-40a1-835e-80e3ac495e9a"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"bb14c0b0-a8d7-44a5-b9e0-bbab01f9f181","elementid":"d99ff5a6-5df8-4ec4-b82e-dae22211ce3f","modelid":"c8fefa5c-3f05-40a1-835e-80e3ac495e9a"}];
                
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
