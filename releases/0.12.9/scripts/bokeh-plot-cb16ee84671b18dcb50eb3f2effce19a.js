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
      };var element = document.getElementById("e9e89638-93bf-46c2-a3ce-f56e52d35045");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e9e89638-93bf-46c2-a3ce-f56e52d35045' but no matching script tag was found. ")
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
                    var docs_json = {"e5592396-683e-478f-a184-6529690779a0":{"roots":{"references":[{"attributes":{},"id":"2fe3cc0c-46be-41da-a964-a7e128af7fdc","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0b149df7-1125-4db4-86d2-0ec24247fff4","type":"BasicTickFormatter"},"plot":{"id":"7d047ef9-eb0d-40fd-98a1-72b010edd0be","subtype":"Figure","type":"Plot"},"ticker":{"id":"2fe3cc0c-46be-41da-a964-a7e128af7fdc","type":"BasicTicker"}},"id":"21f54320-687e-4bc0-a0e7-d77e4a35322a","type":"LinearAxis"},{"attributes":{"source":{"id":"907bce39-1acd-44f0-b02b-02db6fbf425f","type":"ColumnDataSource"}},"id":"a64785e1-a9eb-415b-a3b7-bb9bcf06cf1a","type":"CDSView"},{"attributes":{},"id":"746f5ebf-5bf4-4593-a87e-94191e250e53","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"90778d6b-9f8e-439e-ad9f-a7fd93886eec","type":"Circle"},{"attributes":{},"id":"fc96b0d9-96c0-4383-a7fe-39f02411ba61","type":"BasicTicker"},{"attributes":{},"id":"9c470ad2-2762-41a9-bbb9-ee5cecf6097f","type":"HelpTool"},{"attributes":{"data_source":{"id":"907bce39-1acd-44f0-b02b-02db6fbf425f","type":"ColumnDataSource"},"glyph":{"id":"90778d6b-9f8e-439e-ad9f-a7fd93886eec","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"54c41567-b0c0-4a72-95ee-66cdb0cdfcc5","type":"Circle"},"selection_glyph":null,"view":{"id":"a64785e1-a9eb-415b-a3b7-bb9bcf06cf1a","type":"CDSView"}},"id":"49e90173-649e-4143-a0b2-d89c2f8d923b","type":"GlyphRenderer"},{"attributes":{},"id":"0868436b-8210-4b80-b153-6a52ab9b5f30","type":"SaveTool"},{"attributes":{},"id":"a9ebbad3-1878-4529-86fd-3791ddcfc673","type":"ResetTool"},{"attributes":{"below":[{"id":"a4a90759-86d5-4d05-9aab-3251368b0602","type":"LinearAxis"}],"left":[{"id":"21f54320-687e-4bc0-a0e7-d77e4a35322a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a4a90759-86d5-4d05-9aab-3251368b0602","type":"LinearAxis"},{"id":"ecbf55b3-7584-4e13-88ae-1b6c1247301e","type":"Grid"},{"id":"21f54320-687e-4bc0-a0e7-d77e4a35322a","type":"LinearAxis"},{"id":"1d392db3-3c44-4bc3-be60-5fb7cde50ff3","type":"Grid"},{"id":"3205b4ff-b8ca-4f15-ac65-1c37a801a67c","type":"BoxAnnotation"},{"id":"49e90173-649e-4143-a0b2-d89c2f8d923b","type":"GlyphRenderer"}],"title":{"id":"20c4a652-1f84-4b62-9505-05059416b7ec","type":"Title"},"toolbar":{"id":"f1fc25a4-cc85-4b44-b9cb-2a765ebf76c8","type":"Toolbar"},"x_range":{"id":"cd6387f5-f403-459d-9796-bf81c2432b3b","type":"DataRange1d"},"x_scale":{"id":"5ac13265-d557-45cf-b73f-403b3dd51c78","type":"LinearScale"},"y_range":{"id":"67593756-da45-46e1-9061-cde92ae21022","type":"DataRange1d"},"y_scale":{"id":"aa6a0544-fff5-436d-84a0-f17848a075c4","type":"LinearScale"}},"id":"7d047ef9-eb0d-40fd-98a1-72b010edd0be","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"20c4a652-1f84-4b62-9505-05059416b7ec","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"db8c5bda-0abb-412d-aad4-2d15a33261a3","type":"PanTool"},{"id":"746f5ebf-5bf4-4593-a87e-94191e250e53","type":"WheelZoomTool"},{"id":"28132b85-464f-4d7d-bfa6-3cae4e7b6699","type":"BoxZoomTool"},{"id":"0868436b-8210-4b80-b153-6a52ab9b5f30","type":"SaveTool"},{"id":"a9ebbad3-1878-4529-86fd-3791ddcfc673","type":"ResetTool"},{"id":"9c470ad2-2762-41a9-bbb9-ee5cecf6097f","type":"HelpTool"}]},"id":"f1fc25a4-cc85-4b44-b9cb-2a765ebf76c8","type":"Toolbar"},{"attributes":{"callback":null},"id":"cd6387f5-f403-459d-9796-bf81c2432b3b","type":"DataRange1d"},{"attributes":{},"id":"a6d053cb-5f7e-4d6c-99d1-0ccec3a1182b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"907bce39-1acd-44f0-b02b-02db6fbf425f","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"3205b4ff-b8ca-4f15-ac65-1c37a801a67c","type":"BoxAnnotation"}},"id":"28132b85-464f-4d7d-bfa6-3cae4e7b6699","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"7d047ef9-eb0d-40fd-98a1-72b010edd0be","subtype":"Figure","type":"Plot"},"ticker":{"id":"2fe3cc0c-46be-41da-a964-a7e128af7fdc","type":"BasicTicker"}},"id":"1d392db3-3c44-4bc3-be60-5fb7cde50ff3","type":"Grid"},{"attributes":{},"id":"0b149df7-1125-4db4-86d2-0ec24247fff4","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3205b4ff-b8ca-4f15-ac65-1c37a801a67c","type":"BoxAnnotation"},{"attributes":{},"id":"5ac13265-d557-45cf-b73f-403b3dd51c78","type":"LinearScale"},{"attributes":{"callback":null},"id":"67593756-da45-46e1-9061-cde92ae21022","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"54c41567-b0c0-4a72-95ee-66cdb0cdfcc5","type":"Circle"},{"attributes":{},"id":"db8c5bda-0abb-412d-aad4-2d15a33261a3","type":"PanTool"},{"attributes":{},"id":"aa6a0544-fff5-436d-84a0-f17848a075c4","type":"LinearScale"},{"attributes":{"formatter":{"id":"a6d053cb-5f7e-4d6c-99d1-0ccec3a1182b","type":"BasicTickFormatter"},"plot":{"id":"7d047ef9-eb0d-40fd-98a1-72b010edd0be","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc96b0d9-96c0-4383-a7fe-39f02411ba61","type":"BasicTicker"}},"id":"a4a90759-86d5-4d05-9aab-3251368b0602","type":"LinearAxis"},{"attributes":{"plot":{"id":"7d047ef9-eb0d-40fd-98a1-72b010edd0be","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc96b0d9-96c0-4383-a7fe-39f02411ba61","type":"BasicTicker"}},"id":"ecbf55b3-7584-4e13-88ae-1b6c1247301e","type":"Grid"}],"root_ids":["7d047ef9-eb0d-40fd-98a1-72b010edd0be"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"e5592396-683e-478f-a184-6529690779a0","elementid":"e9e89638-93bf-46c2-a3ce-f56e52d35045","modelid":"7d047ef9-eb0d-40fd-98a1-72b010edd0be"}];
                
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
