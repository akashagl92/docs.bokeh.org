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
      };var element = document.getElementById("883c8a9e-e4fc-41c9-8ebb-ff4a6efb657a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '883c8a9e-e4fc-41c9-8ebb-ff4a6efb657a' but no matching script tag was found. ")
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
                    var docs_json = {"d9c2af3b-c215-4378-9f41-4d1e54b971a0":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0d4149d5-3960-44ef-a076-8e33a049c6f5","type":"PanTool"},{"id":"091321bf-fa82-424d-a240-fc174816e334","type":"WheelZoomTool"},{"id":"6ceb023a-4c16-4249-9ece-ace057e9a88a","type":"BoxZoomTool"},{"id":"b501ac52-1421-432f-adcb-9f581d3e8b89","type":"SaveTool"},{"id":"f22c0cd4-ab90-414e-b0b7-af7622f36025","type":"ResetTool"},{"id":"477d8245-3006-4f5b-89b1-e36c16d63aae","type":"HelpTool"}]},"id":"5d712f16-1323-4c0e-b4b3-27c923b1cd9e","type":"Toolbar"},{"attributes":{"overlay":{"id":"5bb9db18-5240-4f6d-ba6c-33571233a7c7","type":"BoxAnnotation"}},"id":"6ceb023a-4c16-4249-9ece-ace057e9a88a","type":"BoxZoomTool"},{"attributes":{},"id":"996965cd-c1bd-4034-a806-698ef93b9167","type":"BasicTicker"},{"attributes":{},"id":"0d4149d5-3960-44ef-a076-8e33a049c6f5","type":"PanTool"},{"attributes":{"source":{"id":"609535e5-a437-4d03-85f1-a97d5f86a555","type":"ColumnDataSource"}},"id":"7f469b4b-a940-44df-8d21-5193e936dc5e","type":"CDSView"},{"attributes":{},"id":"88f54b8e-228d-4e38-b732-fe0ee7add7aa","type":"BasicTicker"},{"attributes":{"below":[{"id":"c4c507c0-e495-40b6-b63f-73ce725bab91","type":"LinearAxis"}],"left":[{"id":"9dba94b5-5a34-490b-b0bc-6f2b51d206d6","type":"LinearAxis"}],"renderers":[{"id":"c4c507c0-e495-40b6-b63f-73ce725bab91","type":"LinearAxis"},{"id":"dfcedab4-7c4a-4470-b10f-1e1476b97796","type":"Grid"},{"id":"9dba94b5-5a34-490b-b0bc-6f2b51d206d6","type":"LinearAxis"},{"id":"719af89b-d444-41e7-a28c-844f91510d38","type":"Grid"},{"id":"5bb9db18-5240-4f6d-ba6c-33571233a7c7","type":"BoxAnnotation"},{"id":"6d2f7210-f769-4972-91a7-c1d92e5ab82a","type":"GlyphRenderer"},{"id":"634516e6-38a8-46b5-a321-7f9c76d820d7","type":"LabelSet"},{"id":"6478d949-bc68-4c86-a5a1-0b0bcdc980bf","type":"Label"}],"title":{"id":"59970135-55aa-4f72-b8b1-b2a12f6638da","type":"Title"},"toolbar":{"id":"5d712f16-1323-4c0e-b4b3-27c923b1cd9e","type":"Toolbar"},"x_range":{"id":"fa079769-e99f-4dee-acf5-d614a3c449b3","type":"Range1d"},"x_scale":{"id":"ab3ab883-68f8-444d-8225-ee6f726a1b4c","type":"LinearScale"},"y_range":{"id":"1ff33a85-f8bd-4179-8562-749d01d1b28f","type":"DataRange1d"},"y_scale":{"id":"19d8451c-ef8b-4071-8e8f-67a59ac736be","type":"LinearScale"}},"id":"a93dab52-497c-4656-a9da-d9493490352b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"091321bf-fa82-424d-a240-fc174816e334","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"a93dab52-497c-4656-a9da-d9493490352b","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"6478d949-bc68-4c86-a5a1-0b0bcdc980bf","type":"Label"},{"attributes":{"level":"glyph","plot":{"id":"a93dab52-497c-4656-a9da-d9493490352b","subtype":"Figure","type":"Plot"},"source":{"id":"609535e5-a437-4d03-85f1-a97d5f86a555","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"634516e6-38a8-46b5-a321-7f9c76d820d7","type":"LabelSet"},{"attributes":{"plot":{"id":"a93dab52-497c-4656-a9da-d9493490352b","subtype":"Figure","type":"Plot"},"ticker":{"id":"88f54b8e-228d-4e38-b732-fe0ee7add7aa","type":"BasicTicker"}},"id":"dfcedab4-7c4a-4470-b10f-1e1476b97796","type":"Grid"},{"attributes":{"data_source":{"id":"609535e5-a437-4d03-85f1-a97d5f86a555","type":"ColumnDataSource"},"glyph":{"id":"0bd4eb38-36e0-493a-98f6-5ede78abd8e1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35c82d25-bfbe-4153-8f2a-3d9ccf2ec0df","type":"Circle"},"selection_glyph":null,"view":{"id":"7f469b4b-a940-44df-8d21-5193e936dc5e","type":"CDSView"}},"id":"6d2f7210-f769-4972-91a7-c1d92e5ab82a","type":"GlyphRenderer"},{"attributes":{},"id":"477d8245-3006-4f5b-89b1-e36c16d63aae","type":"HelpTool"},{"attributes":{},"id":"f22c0cd4-ab90-414e-b0b7-af7622f36025","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"a93dab52-497c-4656-a9da-d9493490352b","subtype":"Figure","type":"Plot"},"ticker":{"id":"996965cd-c1bd-4034-a806-698ef93b9167","type":"BasicTicker"}},"id":"719af89b-d444-41e7-a28c-844f91510d38","type":"Grid"},{"attributes":{},"id":"4c2e0a87-cfaa-41d0-b448-7badd4cc02f8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["height","weight","names"],"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]}},"id":"609535e5-a437-4d03-85f1-a97d5f86a555","type":"ColumnDataSource"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"ab4530ed-f35e-4330-b343-a134163ae4b5","type":"BasicTickFormatter"},"plot":{"id":"a93dab52-497c-4656-a9da-d9493490352b","subtype":"Figure","type":"Plot"},"ticker":{"id":"88f54b8e-228d-4e38-b732-fe0ee7add7aa","type":"BasicTicker"}},"id":"c4c507c0-e495-40b6-b63f-73ce725bab91","type":"LinearAxis"},{"attributes":{},"id":"b501ac52-1421-432f-adcb-9f581d3e8b89","type":"SaveTool"},{"attributes":{"callback":null,"end":275,"start":140},"id":"fa079769-e99f-4dee-acf5-d614a3c449b3","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"35c82d25-bfbe-4153-8f2a-3d9ccf2ec0df","type":"Circle"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"59970135-55aa-4f72-b8b1-b2a12f6638da","type":"Title"},{"attributes":{},"id":"19d8451c-ef8b-4071-8e8f-67a59ac736be","type":"LinearScale"},{"attributes":{},"id":"ab3ab883-68f8-444d-8225-ee6f726a1b4c","type":"LinearScale"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"4c2e0a87-cfaa-41d0-b448-7badd4cc02f8","type":"BasicTickFormatter"},"plot":{"id":"a93dab52-497c-4656-a9da-d9493490352b","subtype":"Figure","type":"Plot"},"ticker":{"id":"996965cd-c1bd-4034-a806-698ef93b9167","type":"BasicTicker"}},"id":"9dba94b5-5a34-490b-b0bc-6f2b51d206d6","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"0bd4eb38-36e0-493a-98f6-5ede78abd8e1","type":"Circle"},{"attributes":{"callback":null},"id":"1ff33a85-f8bd-4179-8562-749d01d1b28f","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5bb9db18-5240-4f6d-ba6c-33571233a7c7","type":"BoxAnnotation"},{"attributes":{},"id":"ab4530ed-f35e-4330-b343-a134163ae4b5","type":"BasicTickFormatter"}],"root_ids":["a93dab52-497c-4656-a9da-d9493490352b"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"d9c2af3b-c215-4378-9f41-4d1e54b971a0","elementid":"883c8a9e-e4fc-41c9-8ebb-ff4a6efb657a","modelid":"a93dab52-497c-4656-a9da-d9493490352b"}];
                
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
