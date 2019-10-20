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
      };var element = document.getElementById("d08d7ab7-d259-40b2-8ee0-321010e46afb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd08d7ab7-d259-40b2-8ee0-321010e46afb' but no matching script tag was found. ")
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
                    var docs_json = {"47fb2339-6bf0-441a-a054-30ca78c7a4cf":{"roots":{"references":[{"attributes":{"plot":{"id":"ab938f8f-32dc-416e-bbef-a92c6cbd63e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"58fb9433-97f0-49a9-b8ea-9a983e65f4cf","type":"BasicTicker"}},"id":"a0b861be-bf40-4503-a5b6-0d18c5e33d8b","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2fc1208a-ee40-482f-ada1-7638e5919a58","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"f6bd31fd-e35a-458e-84a3-93dee0241f96","type":"BasicTickFormatter"},"plot":{"id":"ab938f8f-32dc-416e-bbef-a92c6cbd63e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"12cb06bd-481f-46ad-a47d-64746ef28d26","type":"BasicTicker"}},"id":"fe2cdb4f-6b63-4a71-88e2-13242f952744","type":"LinearAxis"},{"attributes":{},"id":"12cb06bd-481f-46ad-a47d-64746ef28d26","type":"BasicTicker"},{"attributes":{},"id":"c66cb0d7-69a9-4afd-ab90-520ec7dd1f5b","type":"ResetTool"},{"attributes":{},"id":"ae1f649c-4951-47c2-9b97-24b26b807859","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"fd3547e9-664d-4e47-a8d6-25a54b1203ef","type":"ColumnDataSource"}},"id":"994a5fda-12ad-447e-87c4-24e87509a803","type":"CDSView"},{"attributes":{"formatter":{"id":"ae1f649c-4951-47c2-9b97-24b26b807859","type":"BasicTickFormatter"},"plot":{"id":"ab938f8f-32dc-416e-bbef-a92c6cbd63e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"58fb9433-97f0-49a9-b8ea-9a983e65f4cf","type":"BasicTicker"}},"id":"58a76285-4a03-4ac9-b185-325ff0ebc159","type":"LinearAxis"},{"attributes":{},"id":"f6bd31fd-e35a-458e-84a3-93dee0241f96","type":"BasicTickFormatter"},{"attributes":{},"id":"3b83fbcc-d0c9-4d1e-9d0d-fbbdcceb405c","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"fd3547e9-664d-4e47-a8d6-25a54b1203ef","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fd3547e9-664d-4e47-a8d6-25a54b1203ef","type":"ColumnDataSource"},"glyph":{"id":"9a6175eb-7bb4-4318-bf26-7d751c47da3a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34cacb2a-dbb2-4d4e-a3c5-1f62c874f288","type":"Circle"},"selection_glyph":null,"view":{"id":"994a5fda-12ad-447e-87c4-24e87509a803","type":"CDSView"}},"id":"b37d1aeb-bb72-4d88-89c4-e81e07fac9d1","type":"GlyphRenderer"},{"attributes":{},"id":"46aefacb-904b-492e-9268-7c03404f2ddd","type":"PanTool"},{"attributes":{"below":[{"id":"58a76285-4a03-4ac9-b185-325ff0ebc159","type":"LinearAxis"}],"left":[{"id":"fe2cdb4f-6b63-4a71-88e2-13242f952744","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"58a76285-4a03-4ac9-b185-325ff0ebc159","type":"LinearAxis"},{"id":"a0b861be-bf40-4503-a5b6-0d18c5e33d8b","type":"Grid"},{"id":"fe2cdb4f-6b63-4a71-88e2-13242f952744","type":"LinearAxis"},{"id":"02252bea-c6a8-42f0-8349-6f1e474b04fd","type":"Grid"},{"id":"2fc1208a-ee40-482f-ada1-7638e5919a58","type":"BoxAnnotation"},{"id":"b37d1aeb-bb72-4d88-89c4-e81e07fac9d1","type":"GlyphRenderer"}],"title":{"id":"0b878675-2a12-46d8-a169-46ab2f0a7f22","type":"Title"},"toolbar":{"id":"93a241fc-5a2c-4b40-ac8d-474c228551fc","type":"Toolbar"},"x_range":{"id":"8858b2e9-21fa-47f2-b98a-cb7bb31041ff","type":"DataRange1d"},"x_scale":{"id":"a0667128-9737-4ad1-aeea-2696b56d58a7","type":"LinearScale"},"y_range":{"id":"b8022ce1-3b2a-4391-a483-eebc2ac3c32c","type":"DataRange1d"},"y_scale":{"id":"37cd87ac-b6a9-462f-abde-84485db2506e","type":"LinearScale"}},"id":"ab938f8f-32dc-416e-bbef-a92c6cbd63e7","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"ab938f8f-32dc-416e-bbef-a92c6cbd63e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"12cb06bd-481f-46ad-a47d-64746ef28d26","type":"BasicTicker"}},"id":"02252bea-c6a8-42f0-8349-6f1e474b04fd","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"46aefacb-904b-492e-9268-7c03404f2ddd","type":"PanTool"},{"id":"6d6d7043-0a6f-49b8-80ef-5df6a8ad9494","type":"WheelZoomTool"},{"id":"7085b31d-1313-4c75-ba63-eab202981cfb","type":"BoxZoomTool"},{"id":"3b83fbcc-d0c9-4d1e-9d0d-fbbdcceb405c","type":"SaveTool"},{"id":"c66cb0d7-69a9-4afd-ab90-520ec7dd1f5b","type":"ResetTool"},{"id":"c69578ee-8ab9-4d58-a2ca-011b64127cde","type":"HelpTool"}]},"id":"93a241fc-5a2c-4b40-ac8d-474c228551fc","type":"Toolbar"},{"attributes":{},"id":"6d6d7043-0a6f-49b8-80ef-5df6a8ad9494","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"8858b2e9-21fa-47f2-b98a-cb7bb31041ff","type":"DataRange1d"},{"attributes":{"overlay":{"id":"2fc1208a-ee40-482f-ada1-7638e5919a58","type":"BoxAnnotation"}},"id":"7085b31d-1313-4c75-ba63-eab202981cfb","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34cacb2a-dbb2-4d4e-a3c5-1f62c874f288","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a6175eb-7bb4-4318-bf26-7d751c47da3a","type":"Circle"},{"attributes":{},"id":"58fb9433-97f0-49a9-b8ea-9a983e65f4cf","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"0b878675-2a12-46d8-a169-46ab2f0a7f22","type":"Title"},{"attributes":{},"id":"a0667128-9737-4ad1-aeea-2696b56d58a7","type":"LinearScale"},{"attributes":{},"id":"c69578ee-8ab9-4d58-a2ca-011b64127cde","type":"HelpTool"},{"attributes":{"callback":null},"id":"b8022ce1-3b2a-4391-a483-eebc2ac3c32c","type":"DataRange1d"},{"attributes":{},"id":"37cd87ac-b6a9-462f-abde-84485db2506e","type":"LinearScale"}],"root_ids":["ab938f8f-32dc-416e-bbef-a92c6cbd63e7"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"47fb2339-6bf0-441a-a054-30ca78c7a4cf","elementid":"d08d7ab7-d259-40b2-8ee0-321010e46afb","modelid":"ab938f8f-32dc-416e-bbef-a92c6cbd63e7"}];
                
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
